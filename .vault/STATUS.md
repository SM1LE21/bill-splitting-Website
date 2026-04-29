---
name: Website status
description: Current focus, recent changes, blockers, next steps, and runtime facts for the ExpenseMate Website
type: project
---

# Website — STATUS

Last reviewed: 2026-04-29

## Current focus

- Marketing site polish via Remotion-driven motion. Three ambient compositions (`CTAParticles`, `BenefitsReceipts`, `ProcessFlow`) and one foreground showcase (`FeaturesShowcase`) plus `ReceiptScan` are live on the home page.
- Roadmap card for v1.4 (iOS) reflects the rescoped Group Reports milestone (CSV/PDF export, period selection, native iOS share sheet) targeting May 2026.
- Public-facing release notes track iOS through 1.3.1; Android downloads page tracks `v1.2.3`, `v1.2.4`, `v1.2.5` (latest, 2025-11-14).

## Recent changes

- 2026-04-25 — Three ambient Remotion backgrounds shipped, all gated `lg:block` so mobile keeps static fallbacks. Home First Load JS ~217 kB → ~222 kB.
- 2026-04-25 — `FeaturesShowcase` rebuilt as a six-act narrative (~16–20s) with illustrated SVG characters and the real ExpenseMate wordmark in the resolution scene.
- 2026-04-25 — `ReceiptDemo` section embeds the in-browser `@remotion/player` (auto-play, loop, no controls). Player runtime added ~57 kB to home First Load JS (158 → 215 kB before ambient pieces).
- 2026-04-25 — Remotion + skill setup: installed `remotion` and `@remotion/player`, scaffolded `src/remotion/`, pinned `remotion-best-practices` skill via `skills-lock.json`, added commit/changelog/code conventions to `AGENTS.md`.
- 2026-04-25 — Roadmap v1.4 card rescoped to Group Reports (iOS), target slipped April → May 2026.

## Blockers

- None tracked. Add a dated bullet here when one appears, e.g.: `2026-MM-DD — <what is stuck> on <who/what>`.

## Next steps

- After the current ambient/Remotion pass, candidates worth picking up:
  - Defer Remotion Player runtime via dynamic import + intersection observer if home First Load JS becomes an issue (currently ~222 kB and accepted).
  - Keep release notes and `public/downloads/v*/metadata.json` in sync with each iOS/Android cut. Latest Android entry is `v1.2.5` (2025-11-14); confirm whether `v1.3.x` Android needs a downloads entry next.
  - When v1.4 (Group Reports, iOS) ships, update `Roadmap.tsx`, `ReleaseNotes.tsx`, and add a downloads entry only if a binary is hosted (iOS rides the App Store, not this site).

## Runtime / deployment

- Framework: Next.js 15.3.6, App Router, React 19, TypeScript, Tailwind 3.4. Dev script runs `next lint` before `next dev --turbopack`.
- Hosting: Vercel (the repo carries the standard Vercel/Next conventions; `.vercel` in `.gitignore`). Domain assumed `https://expensemate.app` based on AGENTS guidance for deep-link compatibility.
- Analytics: `@vercel/analytics` plus a `GoogleAnalytics` UI component gated by cookie consent.
- Downloads: Android APKs hosted on GitHub Releases under `SM1LE21/bill-splitting-Website` (see `public/downloads/v*/metadata.json`). Local APKs are git-ignored (`*.apk`); each version directory holds only `metadata.json` and the route handler resolves to the GitHub release URL.
- Deep links: `/.well-known/assetlinks.json` (Android) served via a route handler that reads `public/.well-known/assetlinks.json`; Apple App Site Association served from the same `.well-known` path with `Content-Type: application/json` headers wired in `next.config.ts`. App schemes `expensemate://` and universal links on `https://expensemate.app` must keep working — the join flow at `/join?groupId=<uuid>` is the integration point with mobile.
- This folder is a Git submodule of `Bill-Splitting-App`. Commit website changes here first, then update the parent repo pointer if needed.
