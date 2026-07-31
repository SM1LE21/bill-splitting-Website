# Changelog

Entries follow the convention defined in `AGENTS.md`. Newest at the top.

## 2026-07-31 — Draft comparison pages: /vs-splitwise and /export-expenses-excel

- Added `/vs-splitwise`: direct answer, feature table, what Splitwise does better, who each app suits, where ExpenseMate falls short, FAQ (`FAQPage` schema), sources. Splitwise claims cite Splitwise-owned pages or Apple only; three App Store review quotes are verbatim from Apple's public review feed, attributed, with the sampling method stated and Splitwise's own reasoning quoted alongside.
- Added `/export-expenses-excel`: how to export, what the CSV contains, CSV vs PDF, FAQ (`FAQPage` schema). Columns and period presets read from `GroupReportCSVGenerator` / `GroupReportPeriodPreset` in `Frontend`, not invented. Makes no claim about Splitwise export, which could not be verified from first-party sources.
- **Both are `noindex, nofollow`, absent from `sitemap.ts`, and have no nav or footer link.** They do not publish until Apple approves iOS 1.5.0 — see `.vault/STATUS.md` for the two-step flip.
- Removed the site-wide `<meta name="keywords">` from the root layout.
- No rating, download or testimonial claims are made about ExpenseMate anywhere on either page.
- Verified with `npm run lint` (clean) and `npm run build` (18 routes); noindex, canonicals, `FAQPage` and sitemap absence checked in the emitted output.

## 2026-07-31 — Retrieval foundation: robots, sitemap, structured data, OG cards

- Added `src/app/robots.ts` (first robots.txt on the site) allowing GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended and CCBot; `/downloads` and `/join` disallowed for assistant crawlers only.
- Added `src/app/sitemap.ts` (first sitemap) covering `/`, `/release-notes` and the four policy pages; `lastmod` from `POLICY_DATES`, parsed as UTC.
- `/downloads` is now `noindex, follow` — it advertises Android alpha APKs while the shipping product is iOS-only.
- Created `public/images/og-image.jpg` and `twitter-image.jpg` (1200×630, from the wordmark). Both paths had been referenced since launch but never existed, so every social and assistant preview card 404'd.
- Structured data: fixed a typo'd App Store slug, added `WebSite` + `Organization.sameAs`, added `FAQPage` for the homepage FAQ, and gave every route a self-referencing canonical.
- Verified with `npm run lint` (clean) and `npm run build` (16 routes); robots.txt, sitemap.xml, canonicals and all four JSON-LD types checked in the emitted output.

## 2026-06-24 — Premium launch: pricing section, release notes, privacy policy

- Added a Premium section to the homepage (`src/components/sections/Premium.tsx`): free-vs-Premium comparison + €2.99/mo & €24.99/yr pricing cards, matching the site's visual language.
- Added the iOS **1.5.0** release-notes entry (Premium launch; early users keep Premium features free; manage/cancel in-app). Version + date are placeholders to confirm and deploy in lockstep with the App Store release.
- Updated the Privacy Policy for in-app product analytics (PostHog) and Premium subscriptions (Apple + RevenueCat added as sub-processors; new Subscription Data category, legal-basis rows, retention); bumped the "Last updated" date to June 24, 2026. Must stay consistent with the App Store App Privacy answers.
- Verified with `npm run lint` (clean) and `npm run build` (all 14 routes built).

## 2026-05-30 — iOS 1.4.2 release notes entry

- Added the iOS 1.4.2 entry to `src/components/sections/ReleaseNotes.tsx` (released 30th May 2026): Copy Group ID (share a group by its raw ID from the share menu / settings) and a bugfix for group invite links opening the app without taking the user to the join screen.
- No roadmap changes; 1.4.2 is a small feature + fix on top of the v1.4 line.

## 2026-05-13 — iOS 1.4.1 release notes entry

- Added the iOS 1.4.1 entry to `src/components/sections/ReleaseNotes.tsx` (released 13th May 2026): Home Screen quick actions (long-press the app icon → Scan Receipt or Add Expense, with a group picker) and auto-detected transaction date from scanned receipts.
- No roadmap changes; 1.4.1 is a feature follow-up to the v1.4 release already marked Completed.

## 2026-05-13 17:04 — Docs and analytics decisions

- Added `CLAUDE.md` as a compatibility pointer to `AGENTS.md`.
- Resolved the Apple App Site Association question after verifying `public/.well-known/apple-app-site-association` exists.
- Recorded the decision to keep Google Analytics alongside PostHog for now and clarified that PostHog session replay stays env-gated.

## 2026-05-05 — iOS 1.4.0 release notes + roadmap completion

- Added the iOS 1.4.0 entry to `src/components/sections/ReleaseNotes.tsx` (released 5th May 2026): Group Reports (PDF/CSV export with period selection and share-sheet handoff), Reports toolbar shortcut on the Summary tab, Insights pivoted to a personal "Your share / You paid / Net" view with Highlights, back-date support on Add Expense, pull-to-refresh + skeleton loading on Groups/Expenses, iOS Passwords / iCloud Keychain autofill on Login + Sign-up, and the PDF gray-on-white / white-on-white rendering fix.
- Flipped the Roadmap "Q2 2026 — Version 1.4 Launch — Group Reports (iOS)" card from `shipping` to `completed` and updated its date to "Released May 2026". The card now sits behind the "Show completed milestones" toggle.
- No content changes to other roadmap milestones (Android beta, ExpenseMate Web, Personal Space, Work Space stay as they were).

## 2026-04-30 12:54 — PostHog live verification

- Verified production PostHog ingestion is working after analytics consent; a fresh incognito session with "Accept All" sends events to the PostHog US Cloud project.
- Recorded PostHog as the main website product/funnel analytics source. Vercel Analytics remains the cookieless traffic baseline and Google Analytics remains consent-gated legacy analytics for now.
- Updated vault/ADR context so future agents know the production host must use `NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com`; the project token stays in Vercel env vars, not in repo docs.

## 2026-04-30 16:30 — Benefits section becomes an animated reel

- Replaced the static four-card Benefits layout with an auto-cycling framer-motion reel covering the same four messages (Save time, Avoid conflicts, Stay organised, Peace of mind) on a ~28-second loop.
- Each scene has its own animated visual: receipt items checking off + "0:08" timer badge, three-avatar equal-split connector, four colour-coded category chips with running totals, "Everyone's squared up" pill with a 463.92 € → 0.00 € balance counter.
- Auto-pause when the section scrolls off-screen (IntersectionObserver) and on hover (desktop). prefers-reduced-motion users land on scene 1 and never advance, so screen readers and accessibility users see the same message without surprise motion. Dot navigation lets anyone jump between scenes manually.
- Aspect ratio adapts (3/4 mobile → 4/3 sm → 16/9 lg). Home First Load JS goes from ~166 kB to ~168 kB.

## 2026-04-30 14:00 — ProductFlow narrative replaces App Store screenshots

- New `PhoneFrame` shell under `src/components/ui/` (iPhone bezel, status bar with 9:41 time, dynamic island, signal/wifi/battery glyphs).
- Three iOS screens recreated as React/Tailwind components: `ProductFlowScan` (Scanned Receipt detail with looping AI scan beam), `ProductFlowSplit` (Receipt-items split with cycling avatar to suggest reassignment), `ProductFlowSettle` (Group balances + Action Center with count-up balances and a pulsing Settle button).
- New `ProductFlow` home-page section between HowItWorks and Benefits, three phones with numbered beats (1. Snap → 2. Split → 3. Settle).
- Deleted `AppScreenshots.tsx` and `public/images/screenshots/*.png`. The App Store assets carried burnt-in marketing headlines and were designed as a horizontal App Store reel that did not tile cleanly on the web.
- Decision recorded in [ADR 0005](.vault/adr/0005-build-product-screens-as-react-components.md), which supersedes ADR 0001 (Remotion for marketing animations) and ADR 0003 (ambient Remotion desktop-only).
- Home First Load JS ~166 kB (was 161 kB after the Remotion strip — the ProductFlow components add ~5 kB).

## 2026-04-30 11:48 — PostHog website analytics

- Added consent-gated PostHog instrumentation with lazy loading, EU host default, page-view tracking, and URL query scrubbing so join `groupId` values are not sent to analytics.
- Tracked core website funnels: navigation clicks, hero/CTA App Store clicks, download clicks, join-link validity, app-open attempts/fallbacks, and desktop QR display.
- Updated privacy/cookie copy and policy dates for PostHog as an analytics processor; PostHog stays dormant until Vercel environment variables are configured.

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
