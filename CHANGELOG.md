# Changelog

Entries follow the convention defined in `AGENTS.md`. Newest at the top.

## 2026-04-25 — Roadmap: v1.4 rescoped to Group Reports

- Replaced the v1.4 card scope (group categories / Excel import / PDF+CSV reports) with the new Group Reports scope: CSV export, PDF reports, period selection, report sections (summary, member totals, balances, settlements, expenses, categories), and native iOS share-sheet handoff. Bullets condensed so the card stays in line with neighbouring milestones.
- Milestone renamed to "Version 1.4 Launch — Group Reports (iOS only)" and target slipped from April to May 2026 since work is still in progress.

## 2026-04-25 — FeaturesShowcase iteration

- Slowed scene tempo from 2s to 3s each (60→90 frames). Composition now ~18s.
- Replaced the bell and check emojis with inline SVG icons so the visuals stop drifting between OS / browser emoji fonts.
- Made GroupScene feel populated: each avatar arrives with a name pill (Tun, Sarah, Pablo, Marie), connection lines draw from every avatar to the central hub, and a "Family trip · 4 members" status pill drops in at the bottom.
- Dropped the marketing copy from the section heading; it now just reads "How it works."

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
