# Changelog

Entries follow the convention defined in `AGENTS.md`. Newest at the top.

## 2026-04-30 — Marketing pass: real screens, social proof, no Remotion

- Rebuilt the Features section with real copy and stroke icons (AI receipt scanning, smart settlement, multi-currency, placeholder invites, group reports, spending insights). New AppScreenshots gallery with six iOS App Store screenshots between HowItWorks and Benefits. New SocialProof strip under the Hero (400+ accounts created, 500+ receipts split, five filled App Store stars).
- Hero primary CTA now sends iOS visitors straight to the App Store after hydration; Android/desktop keeps the existing #cta anchor. FAQ leads with a new "How accurate is the receipt scanning?" entry.
- Roadmap refresh: Group Reports v1.4 reads "Shipping" with a new primary-tinted "shipping" status (no exact date). Android v1.0 keeps the delayed badge but the date shifts to "Beta — Play Store soon" with a closed-beta invite note.
- Stripped Remotion entirely: removed ReceiptDemo + the three ambient embeds, deleted `src/remotion/`, dropped `remotion` and `@remotion/player` from `package.json`, removed the `remotion-best-practices` skill, and trimmed the Remotion section out of `AGENTS.md`. Home First Load JS goes from ~222 kB to 161 kB.

## 2026-04-25 — Three ambient Remotion backgrounds (desktop)

- New `CTAParticles` composition: 28 drifting gold euros, coins, and white stars layered behind the dark CTA panel for ambient motion at the conversion moment.
- New `BenefitsReceipts` composition: replaces the two static decorative receipt SVGs with slowly rotating, drifting versions and flowing dashed lines. Mobile still gets the static SVGs.
- New `ProcessFlow` composition: replaces the HowItWorks static gradient connector with a thin line carrying a travelling primary-blue glow pulse.
- All three are gated to `lg:block` so mobile keeps the existing static fallbacks (no extra render loops on touch devices). Home First Load JS goes from ~217 kB to ~222 kB — three small compositions on top of the already-loaded Player runtime.

## 2026-04-25 — FeaturesShowcase v4: characters, slower flow, real brand mark

- Replaced the abstract letter-circle avatars with four illustrated SVG characters (Tun with glasses, Sarah with brown hair, Pablo with a beard, Marie with long blonde hair + earrings). Used in every scene that previously had letter-circle people.
- Slowed scene tempo: action scenes 3s → 4s, opening/resolution 2s → 3s. Total ~20s after sequence overlap.
- Cross-fade between scenes via overlapping Sequences (12-frame overlap) so beats flow instead of hard-cut.
- Resolution scene now uses the real ExpenseMate logo image and renders "ExpenseMate" in the site's dark text colour, matching the navbar treatment instead of the previous primary→warm gradient.

## 2026-04-25 — FeaturesShowcase v3: story arc rebuild

- Reworked the video as a six-act narrative (Opening → Scanning → Splitting → Group → Settlement → Resolution) instead of a feature reel. 16s total at 30fps.
- New `OpeningScene` opens on a top-down dinner table with four seated avatars and a receipt dropping in, plus coral question marks above each head — a relatable hook in the first 2s.
- New `ResolutionScene` closes on four bobbing avatars, an "Everyone's squared up" success pill with sparkles, and the ExpenseMate wordmark in a primary→warm gradient with the tagline "Snap. Split. Done."
- Expanded the shared palette with warm/coral/cream/yellow accents (60-30-10 rule from the motion-design research). Tracking and Updates scenes dropped from the video — chip row beneath keeps them visible on the home page.

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
