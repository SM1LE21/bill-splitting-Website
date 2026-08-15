# Changelog

Entries follow the convention defined in `AGENTS.md`. Newest at the top.

## 2026-08-15 — Web billing: the legal half (on `main`)

- **Terms gained section 4b, "ExpenseMate Premium and Payments".** Two purchase paths and two different sellers: Apple in the iOS app, and **Stripe as merchant of record** for the web checkout — consumer brand **Link**, so the statement line reads `LINK.COM*`, and Stripe charges and remits the VAT. Auto-renewal at the price shown, cancel any time with access to the end of the paid period, cancellation through Link (or the receipt email) for web and Apple's subscription settings for iOS. **EU 14-day withdrawal**: immediate performance is expressly requested, the right lapses once performance begins (Art. 16(m)), statutory and section 10a rights untouched, goodwill requests to support@expensemate.app. **Fair use** for "unlimited receipt scans" — unlimited for a person scanning their own receipts, not a bulk OCR service.
- **Two now-false sentences corrected in the same pass:** Terms §3 said Premium "is purchased and managed through the App Store in the App — there is no purchase path in the Web App", and the account-deletion bullet named Apple as the only seller.
- **Privacy discloses Stripe** (Stripe, Inc. / Stripe Payments Europe, Ltd., including Link) as a sub-processor for web purchases: card details go straight to Stripe, we never receive them, and billing country and VAT sit with Stripe. Subscription Data, the collection-method bullet, the infrastructure paragraph and the retention line all say *Apple or Stripe* now. **RevenueCat was already listed** from iOS billing and still covers both paths.
- `policyDates.ts`: **Terms → August 15, 2026** (owner-approved re-date) and **Privacy → August 15, 2026** (a new sub-processor is a material change; its own commit, so it can be dropped alone). `npm run lint` clean, `npm run build` clean. **The web checkout is not live yet** — this is the legal infrastructure Stripe's account review needs; the selling copy is on `feat/web-billing-launch` and must not be merged until checkout works.

## 2026-08-14 — Web v1.1 launch content (W8, merged to `main`)

- **The site now names the live version.** The Roadmap intro reads "ExpenseMate Web v1.1 is live in any browser" and the completed web card is titled `ExpenseMate Web v1.1` and **links to `app.expensemate.app`**. The intro carries the version deliberately: completed cards are collapsed behind a toggle, so a version number placed only on the card is invisible in the delivered HTML. The Web 1.1 release-notes entry gained a bullet for **per-person shares on itemised receipts** (owner product decision shipped the same day; the simple/shares toggle is gone, and a scan pre-assigns everyone one share).
- **Roadmap tease: `1.6 — one release across iOS and web`,** phase "Next", date "In planning — no date yet". Records the owner's decision that web numbering **jumps 1.1 → 1.6** so both platforms share one version. Content is limited to what `Frontend/.vault/ROADMAP.md` actually plans — share-based custom splitting, receipt-scanning refinements, clearer balances, polish. No dates, and nothing about web billing.
- **Link sweep, five surfaces, each one a place a reader is deciding how to use the product:** the **Android v1.0 roadmap card** (its native-app plan untouched — the web app is added as the available-now answer), the **homepage Android FAQ** (which also feeds the `FAQPage` JSON-LD), the **CTA** under the disabled Google Play button, the **footer**'s existing plain-text mention made a real anchor, and **`/downloads`**, where the only path offered was a closed-beta APK. Every one says *web app*, never *Android app*, and none promises a purchase path.
- **`/export-expenses-excel` no longer describes export as iPhone-only.** It described the iOS share sheet as the only destination while web export has shipped and is Premium-gated. Now: both paths in the short answer and the steps, a new "Can I export from a computer?" answer, and "not generated on a server" kept — **verified**, not assumed, against `expensemate-web/src/lib/reports/` (jspdf client-side, `Blob` + `createObjectURL`). Premium is stated as bought in the iOS app. The `noindex` publish gate is **untouched** — 1.5.0 is still in review.
- `npm run lint` clean, `npm run build` clean, 18 routes. Emitted HTML verified: the version string, all four new homepage links, and the export and downloads copy are present, with no web-purchase language and no "Android app" claim about the web app anywhere. **Merged to `main` — this merge is the public launch.**

## 2026-08-14 — Web v1.1 launch lockstep (branch `web-v1-1-lockstep`)

- **Web 1.1 release-notes entry** (14th August 2026, `Web` platform): receipt scanning in the browser — drag, paste, file picker or phone camera — five languages, profile pictures with crop, and an honest closing bullet that keeps notifications, Home Screen shortcuts and the purchase path on iOS. The **Web 1.0** entry above it stopped saying scanning is iOS-only; the **Roadmap** web card gained browser scanning and the five languages. "Companion to the iOS app" is kept everywhere — there is still no web purchase path (web spec §16.6).
- **`/vs-splitwise` rebuilt around the new story.** Scanning and itemisation are free at ExpenseMate *and now free in the browser*, still Pro-only at Splitwise. The Android concession **stays** but no longer rests on the web app being unable to scan: it now rests on what actually survives — no Play Store listing, no push notifications, no way to pay outside the iPhone app. `it cannot scan receipts` appeared twice, once visibly and once inside the `FAQPage` JSON-LD; both are gone.
- **Splitwise's claims were re-verified, not assumed.** All ten Pro-only features still read verbatim off `splitwise.com/pro`, and `splitwise.com` still says "Free for iPhone, Android, and web". New `PRO_CHECKED_ON` (14 August 2026) records that; **`CHECKED_ON` deliberately stays 31 July** because the App Store rating, the purchase tiers and the 500-review sample were not re-sampled.
- **Terms §3 said "Receipt scanning and data extraction are currently available in the App only"** — false as of this launch. Corrected to the iOS-only features that remain, in an isolated commit, with no `policyDates` bump (no term or obligation changed). JSON-LD now declares `inLanguage` for the five locales; it is the only machine-readable description of the product anywhere.
- `npm run lint` clean, `npm run build` clean, 18 routes. Emitted HTML verified free of every corrected sentence. **Branch only — the owner merges `web-v1-1-lockstep` to `main` to launch.**

## 2026-08-04 16:40 — Copy corrections for the web launch

- **Removed every "there is no web version" claim.** `/vs-splitwise` said it twice — once visibly and once inside the `FAQPage` JSON-LD that search engines and assistants read — and `/export-expenses-excel` closed on it. The Android concession is unchanged: there is still no Android app, and that still decides a mixed group. Also fixed on `/vs-splitwise`: the platform row, the Splitwise strength, the short answer, and "you want to check balances on a computer" as a reason to choose Splitwise.
- **Footer names the browser** alongside iOS, the **Roadmap intro** stops promising web access as something 2026 "brings" one card above a Released August 2026 milestone, and the **Web 1.0 release note** now says PDF/CSV export is Premium-gated on the web exactly as on iOS. All of it positions the browser as an option alongside the iOS app, never as the Android answer, and none of it promises a web purchase path (web spec §1, §16.6).
- **Site-wide JSON-LD:** `operatingSystem` `'iOS'` → `'iOS, Web browser'` with `browserRequirements`, Android deliberately absent. The stale `price: '0'` offer from `BATCH-D-discovery.md` is now an `AggregateOffer` (free through €24.99/year, no offer URL). The typo'd App Store slug from the same list was already fixed here in July.
- **`/legal` imprint now names `app.expensemate.app`**, matching privacy, terms and cookies, which all enumerate the three surfaces. `npm run lint` and `npm run build` clean, 18 routes, and the emitted HTML — JSON-LD included — carries none of the corrected sentences.

## 2026-08-04 15:23 — ExpenseMate Web lockstep: header, roadmap, release notes, legal

- **Permanent `Log in` and `Open web app` header entries** pointing at `app.expensemate.app`, on desktop and in the mobile drawer. Without them a visitor who does not own an iPhone had no route to the product from this site. Desktop nav gap drops to `gap-x-6` below `xl` so the three right-hand items still fit at 1024px.
- **Roadmap card flipped to Completed** ("Released August 2026", the 1.4.0/1.5.0 treatment) and a **release-notes entry** added — the first non-iOS entry, so the maintainer note now reads "product releases" and still excludes marketing-site changes. Copy follows the owner's positioning: a companion to the iOS app, not an Android version and not a replacement, with no receipt scanning and no web purchase path.
- **All 18 must-change legal items applied** across privacy, terms and cookies (from `expensemate-web/.vault/website-legal-copy-review.md`), plus S1–S9. Two were wrong before the web app existed: the infrastructure copy named a Cloud SQL database retired in April 2026, and Terms §8 claimed "we do not share your data with any third parties" in a document whose own §6 lists group visibility. **Cloudflare and Sentry are now disclosed**; Sentry is EU-region, so no SCCs. All three dates bumped in `policyDates.ts`.
- `npm run lint` clean, `npm run build` clean (18 routes). **This branch must not reach `main` until the web app is live at `app.expensemate.app`** — `/join` 307s there, and every invite link in the wild goes through it.

## 2026-08-04 14:05 — Universal Links fix and `/join` handoff to the web app

- **AASA `appID` corrected to `87U8WV4Q3F.app.ExpenseMate`.** The bundle ID is `app.ExpenseMate`, verified in `Frontend` (`project.pbxproj:1245`, `DEVELOPMENT_TEAM` at `:1224`, confirmed by `GoogleService-Info.plist`); the lowercase form that shipped was `CFBundleURLName`, not a bundle ID. Apple matches it case-sensitively, so the association never validated and 1.4.2 fell back to `expensemate://`.
- **`/join` is now a server-side 307** to `https://app.expensemate.app/join`, query string carried through untouched. Nothing is validated here — missing, empty, duplicated and malformed `groupId` values all redirect and the web app owns the invalid-link message. `JoinGroup.tsx` and `AppRedirect.tsx` deleted as orphans.
- **DEPLOYMENT ORDERING: the redirect must not go live before the web app is live at `app.expensemate.app`**, or every invite link already in users' message threads breaks. It ships in the same release as the web app.
- `npm run lint` clean, `npm run build` clean (18 routes, `/join` dynamic). Verified against `next start`: 307 + exact `Location` across seven query shapes, and AASA served `200 application/json` with no redirect. **The apex→www 308 remains owner action in Vercel and still blocks Universal Links end-to-end.**

## 2026-08-03 — iOS 1.5.0 lockstep: release notes date, missing fixes, Premium roadmap card

- 1.5.0 release-notes date was still the `June 2026` placeholder staged back in June; set to `5th August 2026` per owner.
- Added the two bugfix lines the App Store What's New carries but the website omitted — region-dependent report export failure, and implausible dates on scanned receipts. Source of truth: `Frontend/.vault/proposals/2026-08-1-5-0-release-metadata.md`.
- Added the `Version 1.5 Launch — ExpenseMate Premium (iOS)` roadmap card, marked completed. Every prior release had one; the Premium launch did not.
- Refreshed the expired roadmap targets, which had all passed: ExpenseMate Web May 2026 → **August 2026**, Personal Space May 2026 → **September 2026**, Work Space July 2026 → **October 2026**. Phase labels moved with them — Web and Personal Space to Q3 2026, Work Space to Q4 2026 — so the quarter no longer contradicts the date.
- **`/vs-splitwise` and `/export-expenses-excel` remain `noindex`.** 1.5.0 is submitted, not approved — the App Store still serves 1.4.2 with no in-app purchases. The publish flip waits for actual approval.
- Verified with `npm run lint` (clean) and `npm run build` (18 routes); release-notes date and bugfix lines present in the emitted HTML, completed-milestone count 4 → 5, no expired targets remaining.

## 2026-08-02 — Fix: navbar and footer section links were dead off the homepage

- `Navbar.handleNavClick` called `e.preventDefault()` unconditionally and only scrolled when `getElementById` found the section, so on any page without those sections the click was swallowed entirely — no scroll and no navigation. Default is now only prevented when the target exists.
- Navbar and footer Product links now resolve to `/#section` when off the homepage, so they navigate home and land on the section. Homepage smooth-scroll behaviour is unchanged.
- `nav_clicked` now fires on both paths; it was previously lost whenever the section was not on the page.
- Footer Resources and Legal links were always absolute paths and were never affected.
- Reported on `/vs-splitwise`, which with `/export-expenses-excel` are the first pages outside the homepage to use the full `Layout` and therefore render the navbar.
- Verified in the built output: homepage keeps bare `#anchors`, both new pages emit `/#anchors`, and no dead bare anchors remain.

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
