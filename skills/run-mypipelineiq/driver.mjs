#!/usr/bin/env node
// Full-stack smoke driver for MyPipelineIQ.
//
// Brings up the central API (Fastify) and the client dashboard (Next.js), then drives
// the REAL user flow end-to-end over HTTP:
//   admin: create client -> generate license
//   client BFF: POST /api/auth/activate (validates via API, sets httpOnly cookies)
//   client: GET /dashboard with the session cookie -> assert live, source-free render
//
// Most surfaces in this project are HTTP (the API and the Next BFF route handlers),
// so HTTP is the right handle. The rendered /dashboard HTML is saved as the artifact.
//
// Prereqs: Postgres + Redis up (docker compose -f infra/docker/docker-compose.yml up -d),
// deps installed (pnpm install), client built (pnpm --filter @mypipelineiq/client build),
// and .env present at repo root (RS256 keys + FIELD_ENCRYPTION_KEY + ADMIN_API_KEY).
//
// Usage: node .claude/skills/run-mypipelineiq/driver.mjs
import { spawn } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import net from "node:net";

const SKILL_DIR = dirname(fileURLToPath(import.meta.url));
const REPO = join(SKILL_DIR, "..", "..", "..");
const API = "http://localhost:3001";
const WEB = "http://localhost:3000";
const isWin = process.platform === "win32";

const procs = [];
function launch(name, cmd) {
  console.log(`[driver] launching ${name}: ${cmd}`);
  const child = spawn(cmd, { cwd: REPO, shell: true, stdio: ["ignore", "pipe", "pipe"] });
  child.stdout.on("data", (d) => process.stdout.write(`  [${name}] ${d}`));
  child.stderr.on("data", (d) => process.stderr.write(`  [${name}] ${d}`));
  procs.push({ name, child });
  return child;
}

function killAll() {
  for (const { name, child } of procs) {
    try {
      if (isWin) spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], { stdio: "ignore" });
      else process.kill(-child.pid, "SIGKILL");
      console.log(`[driver] stopped ${name}`);
    } catch {
      /* already gone */
    }
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function tcpOpen(host, port) {
  return new Promise((resolve) => {
    const s = net.connect(port, host);
    s.setTimeout(1000);
    s.on("connect", () => { s.destroy(); resolve(true); });
    s.on("error", () => resolve(false));
    s.on("timeout", () => { s.destroy(); resolve(false); });
  });
}

async function waitFor(label, fn, { tries = 60, every = 1000 } = {}) {
  for (let i = 0; i < tries; i++) {
    try {
      if (await fn()) return;
    } catch {
      /* not ready */
    }
    await sleep(every);
  }
  throw new Error(`timed out waiting for ${label}`);
}

function readAdminKey() {
  const env = readFileSync(join(REPO, ".env"), "utf8");
  const m = env.match(/^ADMIN_API_KEY="?([^"\n\r]+)"?/m);
  if (!m) throw new Error("ADMIN_API_KEY not found in .env");
  return m[1];
}

function pickCookies(setCookieArr) {
  // Turn ["piq_session=abc; Path=/; ...", "piq_refresh=xyz; ..."] into "piq_session=abc; piq_refresh=xyz"
  return setCookieArr.map((c) => c.split(";")[0]).join("; ");
}

let step = 0;
const ok = (msg) => console.log(`[driver] ✓ step ${++step}: ${msg}`);

async function main() {
  // 0. infra
  if (!(await tcpOpen("localhost", 5432))) throw new Error("Postgres not reachable on :5432 — run `pnpm infra:up`");
  if (!(await tcpOpen("localhost", 6379))) throw new Error("Redis not reachable on :6379 — run `pnpm infra:up`");
  ok("Postgres + Redis reachable");

  const admin = { authorization: `Bearer ${readAdminKey()}` };

  // 1. API
  launch("api", `pnpm --filter @mypipelineiq/api exec dotenv -e ../../.env -- tsx src/index.ts`);
  await waitFor("api /health", async () => (await fetch(`${API}/health`)).ok);
  ok("API server healthy on :3001");

  // 2. admin: create client + generate a Pro license
  const clientRes = await fetch(`${API}/internal/admin/clients`, {
    method: "POST",
    headers: { ...admin, "content-type": "application/json" },
    body: JSON.stringify({ companyName: "Driver Co", contactName: "Driver", contactEmail: `driver-${Date.now()}@example.test` }),
  });
  if (clientRes.status !== 201) throw new Error(`create client failed: ${clientRes.status} ${await clientRes.text()}`);
  const clientId = (await clientRes.json()).id;

  const genRes = await fetch(`${API}/internal/admin/licenses/generate`, {
    method: "POST",
    headers: { ...admin, "content-type": "application/json" },
    body: JSON.stringify({ clientId, tier: "pro" }),
  });
  if (genRes.status !== 201) throw new Error(`generate license failed: ${genRes.status} ${await genRes.text()}`);
  const licenseKey = (await genRes.json()).licenseKey;
  ok(`generated license ${licenseKey}`);

  // 3. client (Next production server — must be built first)
  launch("web", `pnpm --filter @mypipelineiq/client exec next start -p 3000`);
  await waitFor("web /activate", async () => (await fetch(`${WEB}/activate`)).status === 200);
  ok("client dashboard serving on :3000");

  // 4. drive activation through the BFF (validates via API, sets httpOnly cookies)
  const actRes = await fetch(`${WEB}/api/auth/activate`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    redirect: "manual",
    body: JSON.stringify({ licenseKey, deviceFingerprint: "driver-device-fingerprint-0001", appVersion: "1.0.0" }),
  });
  if (!actRes.ok) throw new Error(`activate failed: ${actRes.status} ${await actRes.text()}`);
  const actBody = await actRes.json();
  if (actBody.license?.tier !== "pro") throw new Error(`unexpected activate body: ${JSON.stringify(actBody)}`);
  const cookies = pickCookies(actRes.headers.getSetCookie());
  if (!cookies.includes("piq_session")) throw new Error("no session cookie set by activation");
  // The raw license key must NOT round-trip to the browser (opacity).
  if (JSON.stringify(actBody).includes(licenseKey)) throw new Error("LEAK: raw license key returned to browser");
  ok("activation set httpOnly session cookie; browser got masked license only");

  // 5. authenticated dashboard render
  const dash = await fetch(`${WEB}/dashboard`, { headers: { cookie: cookies } });
  const html = await dash.text();
  if (dash.status !== 200) throw new Error(`dashboard status ${dash.status}`);
  for (const needle of ["Dashboard", "Leads remaining", "Recent leads"]) {
    if (!html.includes(needle)) throw new Error(`dashboard missing "${needle}"`);
  }
  const artifact = join(SKILL_DIR, "dashboard.html");
  writeFileSync(artifact, html);
  ok(`dashboard rendered (${html.length} bytes) -> ${artifact}`);

  // 6. unauthenticated dashboard redirects to /activate (middleware guard)
  const guard = await fetch(`${WEB}/dashboard`, { redirect: "manual" });
  if (![307, 308].includes(guard.status) || !(guard.headers.get("location") || "").includes("/activate")) {
    throw new Error(`expected redirect to /activate, got ${guard.status} ${guard.headers.get("location")}`);
  }
  ok("unauthenticated /dashboard redirects to /activate");

  console.log("\n[driver] ALL CHECKS PASSED ✅");
}

main()
  .then(() => { killAll(); process.exit(0); })
  .catch((err) => {
    console.error(`\n[driver] FAILED: ${err.message}`);
    killAll();
    process.exit(1);
  });
