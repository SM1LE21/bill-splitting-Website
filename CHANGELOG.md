# Changelog

Entries follow the convention defined in `AGENTS.md`. Newest at the top.

## 2026-04-25 — Release notes: iOS 1.3.1

- Added iOS 1.3.1 entry to `src/components/sections/ReleaseNotes.tsx`. Public-facing copy only: clearer maintenance/unavailable screens with retry, plus performance and reliability improvements. Underlying production-API cutover and debug diagnostics intentionally not surfaced.

## 2026-04-25 — Features section: Remotion-driven showcase

- New `FeaturesShowcase` composition (12s @ 30fps, 1280×720): six 2-second scenes walking through Splitting, Scanning, Group, Tracking, Updates, Settlement. Each scene in its own file under `src/remotion/scenes/`, sharing primitives via `_shared.tsx`.
- Features section now leads with the Player and keeps a chip row of six feature names below as a static fallback. Heading trimmed.
- Home First Load JS goes from ~215 kB to ~217 kB — the Player runtime was already loaded for ReceiptDemo, so this is just the composition code.

## 2026-04-25 — First Remotion section: ReceiptDemo

- Installed `remotion` + `@remotion/player`; added `src/remotion/ReceiptScan.tsx` (1280×720 @ 30fps, ~7s loop) and `src/remotion/Root.tsx` registry.
- New `ReceiptDemo` home-page section between HowItWorks and Benefits, embedding the composition via the in-browser Player with auto-play + loop, no controls.
- Home First Load JS goes from ~158 kB to ~215 kB (Player runtime). Acceptable for now; can be deferred via dynamic import + intersection observer if it becomes a problem.

## 2026-04-25 — Remotion setup and repo conventions

- Added commit, changelog, and code conventions to `AGENTS.md` and initialised `CHANGELOG.md`.
- Installed the official `remotion-best-practices` Agent Skill under `.claude/skills/`, with `skills-lock.json` pinned for reproducible re-installs.
- Scaffolded `src/remotion/` for compositions and pointed `AGENTS.md` at it.
- Updated `.gitignore` so shared skills track but per-machine state (`settings.local.json`, sessions, cache) stays out.
