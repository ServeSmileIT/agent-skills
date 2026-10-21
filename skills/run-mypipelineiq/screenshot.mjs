#!/usr/bin/env node
// Visual screenshot of the running client GUI (the public /activate screen) via
// headless Microsoft Edge — present on every Windows host. /dashboard is httpOnly-cookie
// gated, so the public activation screen is the screenshot target; use driver.mjs for the
// authenticated dashboard render (dashboard.html).
//
// Usage: node .claude/skills/run-mypipelineiq/screenshot.mjs [path] [url]
import { spawn } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SKILL_DIR = dirname(fileURLToPath(import.meta.url));
const REPO = join(SKILL_DIR, "..", "..", "..");
const OUT = process.argv[2] ? join(REPO, process.argv[2]) : join(SKILL_DIR, "activate.png");
const URL = process.argv[3] ?? "http://localhost:3000/activate";
const EDGE = process.env.EDGE_PATH ?? "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const web = spawn("pnpm", ["--filter", "@mypipelineiq/client", "exec", "next", "start", "-p", "3000"], {
  cwd: REPO, shell: true, stdio: "ignore",
});

async function waitWeb() {
  for (let i = 0; i < 60; i++) {
    try { if ((await fetch("http://localhost:3000/activate")).status === 200) return; } catch {}
    await sleep(1000);
  }
  throw new Error("client never came up — did you run `pnpm --filter @mypipelineiq/client build`?");
}

try {
  await waitWeb();
  console.log("client up; capturing screenshot…");
  await new Promise((res, rej) => {
    const shot = spawn(
      EDGE,
      ["--headless=new", "--disable-gpu", "--no-sandbox", "--hide-scrollbars", "--window-size=1280,900", `--screenshot=${OUT}`, URL],
      { stdio: "ignore" },
    );
    shot.on("exit", res);
    shot.on("error", rej);
  });
  await sleep(500);
  console.log(existsSync(OUT) ? `OK ${OUT} (${statSync(OUT).size} bytes)` : "NO screenshot produced");
} finally {
  spawn("taskkill", ["/pid", String(web.pid), "/T", "/F"], { stdio: "ignore" });
  await sleep(800);
  process.exit(0);
}
