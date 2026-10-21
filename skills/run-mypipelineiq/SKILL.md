---
name: run-mypipelineiq
description: Build, launch, smoke-test, and screenshot the MyPipelineIQ full stack (Fastify API + Next.js client dashboard + data pipeline, Postgres/Redis). Use when asked to run, start, boot, serve, smoke-test, screenshot, or verify the app / dashboard / API / pipeline end to end.
---

# Run MyPipelineIQ

A Turborepo monorepo with tightly-coupled apps that only make sense **run together**:
`apps/api` (Fastify, :3001) · `apps/client` (Next.js dashboard, :3000) · `apps/pipeline`
(Inngest workers) · Postgres + Redis (docker). Most surfaces are HTTP, so the primary
harness is an **HTTP smoke driver** that boots the API + client and drives the real
`admin → generate license → activate (BFF, httpOnly cookies) → dashboard render` flow.

- **`driver.mjs`** — boots API + client, runs the end-to-end flow, asserts no source/key
  leak, saves the rendered dashboard to `dashboard.html`. **This is the agent path.**
- **`screenshot.mjs`** — boots the client and captures the GUI (`/activate`) to
  `activate.png` via headless Edge.

Paths below are relative to the **repo root** (the unit). Platform: **Windows** (Node 26,
pnpm, Docker Desktop, Microsoft Edge). Bash examples run under Git Bash.

## Prerequisites
- Node ≥ 20 (tested on 26), `pnpm` (`npm i -g pnpm`), Docker Desktop, and Microsoft Edge
  (for `screenshot.mjs`; present by default on Windows).

## One-time setup
```bash
pnpm install
docker compose -f infra/docker/docker-compose.yml up -d   # Postgres :5432 + Redis :6379

# Secrets → repo-root .env (git-ignored). ADMIN_API_KEY already has a dev default.
cp .env.example .env
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:2048 -out priv.pem
openssl rsa -pubout -in priv.pem -out pub.pem
openssl rand -hex 32                                       # -> FIELD_ENCRYPTION_KEY
```
Then set in `.env`: `LICENSE_RSA_PRIVATE_KEY` / `LICENSE_RSA_PUBLIC_KEY` to the PEMs as
**single-line** values (newlines as literal `\n`), and `FIELD_ENCRYPTION_KEY` to the hex.
`driver.mjs` fails fast with a clear message if any are missing.

## Build (database + client)
```bash
pnpm db:migrate:deploy     # apply the schema migration
pnpm db:seed               # idempotent: test client + Pro license
pnpm --filter @mypipelineiq/client build   # required — driver uses `next start`
```

## Run — agent path (full-stack smoke + dashboard render)
```bash
node .claude/skills/run-mypipelineiq/driver.mjs
```
Boots both servers, prints 7 `✓` steps, ends with `ALL CHECKS PASSED ✅`, and writes the
authenticated dashboard HTML to `.claude/skills/run-mypipelineiq/dashboard.html`. It tears
the servers down on exit. Verify a change by reading the saved HTML or asserting on the
step output.

## Screenshot the GUI
```bash
node .claude/skills/run-mypipelineiq/screenshot.mjs
# -> .claude/skills/run-mypipelineiq/activate.png  (the dark-mode activation screen)
```
`/dashboard` is httpOnly-cookie gated, so the screenshot targets the public `/activate`
screen; for the authenticated dashboard, read `dashboard.html` from the driver instead.

## Drive the pipeline (generate leads)
```bash
pnpm --filter @mypipelineiq/pipeline pipeline:run
# fetch → enrich → comply → deliver; prints {fetched, inserted, delivered, ...}
```

## Run — human path
```bash
pnpm --filter @mypipelineiq/api dev       # API on :3001 (tsx watch)
pnpm --filter @mypipelineiq/client dev    # dashboard on :3000, open in a browser
```
Activate with a key from `pnpm db:seed` output or generate one via the admin API
(`POST /internal/admin/licenses/generate`, bearer `ADMIN_API_KEY`).

## Test
```bash
pnpm test    # turbo: shared/logger/license/api/pipeline unit + DB-integration suites
```

## Gotchas
- **Next production mode sets `secure` cookies.** Under `next start`, activation cookies
  are `Secure`, so a browser won't store them over plain `http://localhost`. `driver.mjs`
  sidesteps this by forwarding `Set-Cookie` manually; for manual browser testing use
  `next dev` (NODE_ENV=development → non-secure cookies).
- **`@mypipelineiq/shared` ships as TS source with ESM `.js` import specifiers.** The
  client only builds because `next.config.mjs` sets `resolve.extensionAlias` (`.js`→`.ts`).
  Don't remove it.
- **No implicit `crypto` global in this Node/runtime** — server code imports from
  `node:crypto` (a bare `crypto.randomUUID()` 500s every request). 
- **ioredis must keep `enableOfflineQueue: true`** (see `apps/api/src/lib/redis.ts`) or
  `@fastify/rate-limit`'s Redis store throws on cold start and every request 500s.
- **Prisma reads `.env` from the package dir, not the repo root** — the `db` scripts wrap
  commands in `dotenv -e ../../.env`. Running `prisma` directly in `packages/db` needs an
  explicit `DATABASE_URL`.
- **Windows process teardown:** the drivers spawn with `shell:true` and kill the tree with
  `taskkill /T /F`. On a stuck run, `taskkill /IM node.exe /F` clears stragglers.
- **`pipeline:run` delivers to *every* matching active client** (the seed "Acme" + any you
  created), so the printed `delivered` can exceed `inserted`.

## Troubleshooting
- `Postgres not reachable on :5432` → `docker compose -f infra/docker/docker-compose.yml up -d`.
- `LICENSE_RSA_* / FIELD_ENCRYPTION_KEY` errors on API boot → finish One-time setup above.
- `client never came up` from `screenshot.mjs` → you skipped `pnpm --filter @mypipelineiq/client build`.
- Edge not found → set `EDGE_PATH` env var to your `msedge.exe`.
- Port already in use (:3000/:3001) → `taskkill /IM node.exe /F`, then re-run.
