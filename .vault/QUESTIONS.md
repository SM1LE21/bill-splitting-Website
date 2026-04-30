---
name: Open questions
description: Open escalations for the ExpenseMate Website that need human, product, or cross-project input
type: project
---

# Website — open questions

One bullet per question. Mark resolved in place with `[x]` and a strikethrough,
linking to the ADR if the resolution warrants one.

- [x] ~~2026-04-29 — Should `public/downloads/` track an Android `v1.3.x` entry, or is Android paused at `v1.2.5` (last entry: 2025-11-14) until the next cut? Needed before any v1.4 downloads page work.~~ Resolved 2026-04-30 — moot. The marketing site no longer advertises the APK route at all (closed-beta only); no `v1.3.x` entry needed before Play Store launch.
- [x] ~~2026-04-29 — Confirm the canonical production domain. `AGENTS.md` references `https://expensemate.app` for deep-link compatibility; no `metadataBase` or hard-coded host is set in the repo, so deploy-time configuration (Vercel project domain, env) is the source of truth.~~ Resolved 2026-04-30 — confirmed `https://expensemate.app`.
- [ ] 2026-04-29 — `next.config.ts` wires `Content-Type: application/json` headers for `/.well-known/apple-app-site-association` and `/.well-known/assetlinks.json`, but only `assetlinks.json` has a route handler reading from `public/.well-known/`. Is `apple-app-site-association` served as a static file from `public/.well-known/`, or is it missing? iOS app is in production so something is working — verify the file source before any iOS deep-link change.
- [x] ~~2026-04-29 — Home page First Load JS sits at ~222 kB after the ambient Remotion pieces. Acceptable per `CHANGELOG.md`, but no explicit budget is recorded. What is the threshold at which we defer the Player via dynamic import + intersection observer?~~ Resolved 2026-04-30 — moot. Remotion has been stripped entirely; First Load JS is now ~161 kB and the Player runtime is no longer in the bundle.
- [ ] 2026-04-30 — PostHog is now live and is the main website product/funnel analytics source. Should Google Analytics remain in production long-term for legacy comparison, or should GA be removed/downgraded to reduce duplicate analytics tooling?
- [ ] 2026-04-30 — Should production PostHog session replay remain enabled (`NEXT_PUBLIC_POSTHOG_SESSION_REPLAY=true`), or should the website stay on explicit event tracking only? The implementation masks text/attributes, but this still needs explicit privacy/product confirmation.
