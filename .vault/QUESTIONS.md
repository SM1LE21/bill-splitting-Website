---
name: Open questions
description: Open escalations for the ExpenseMate Website that need human, product, or cross-project input
type: project
---

# Website — open questions

One bullet per question. Mark resolved in place with `[x]` and a strikethrough,
linking to the ADR if the resolution warrants one.

- [ ] 2026-04-29 — Should `public/downloads/` track an Android `v1.3.x` entry, or is Android paused at `v1.2.5` (last entry: 2025-11-14) until the next cut? Needed before any v1.4 downloads page work.
- [ ] 2026-04-29 — Confirm the canonical production domain. `AGENTS.md` references `https://expensemate.app` for deep-link compatibility; no `metadataBase` or hard-coded host is set in the repo, so deploy-time configuration (Vercel project domain, env) is the source of truth.
- [ ] 2026-04-29 — `next.config.ts` wires `Content-Type: application/json` headers for `/.well-known/apple-app-site-association` and `/.well-known/assetlinks.json`, but only `assetlinks.json` has a route handler reading from `public/.well-known/`. Is `apple-app-site-association` served as a static file from `public/.well-known/`, or is it missing? Verify before any iOS deep-link change.
- [ ] 2026-04-29 — Home page First Load JS sits at ~222 kB after the ambient Remotion pieces. Acceptable per `CHANGELOG.md`, but no explicit budget is recorded. What is the threshold at which we defer the Player via dynamic import + intersection observer?
