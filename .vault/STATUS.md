---
name: Website status
description: Current focus, recent changes, blockers, next steps, and runtime facts for the ExpenseMate Website
type: project
---

# Website — STATUS

Last reviewed: 2026-04-30

## Current focus

- Marketing reset shipped: a new `ProductFlow` section now anchors the home page with three React-built iOS screens (Snap → Split → Settle) running framer-motion-driven animation, Features section rebuilt with real copy and stroke icons, SocialProof strip under the Hero, iOS-only Hero CTA shortcut to the App Store, FAQ leads with the receipt-accuracy question.
- Analytics: PostHog is live on production and is now the primary website product/funnel analytics source. Vercel Analytics remains the always-on cookieless traffic baseline; Google Analytics remains consent-gated legacy analytics until product decides whether to remove it.
- Roadmap: Group Reports v1.4 marked "Shipping" (new primary-tinted status), Android v1.0 reads "Beta — Play Store soon" with the delayed badge retained. Web / Personal Space / Work Space milestones unchanged.
- Public-facing release notes track iOS through 1.3.1; v1.4 ships within ~7 days (Group Reports). The `/downloads` Android APK route is intentionally not advertised on the home page — closed-beta only until the Play Store launch.

## Recent changes

- 2026-04-30 — PostHog production ingestion verified: a fresh incognito session accepting analytics cookies sends events into the PostHog US Cloud project. Production/preview Vercel env must use `NEXT_PUBLIC_POSTHOG_KEY` plus `NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com`; keep the `phc_...` token out of repo docs. PostHog is the main website product analytics layer for funnels such as `page_viewed -> cta_clicked -> app_store_clicked`, join-link health, download clicks, and app-open fallbacks.
- 2026-04-30 — Benefits section rebuilt as an auto-cycling four-scene framer-motion reel. Same four messages (Save time / Avoid conflicts / Stay organised / Peace of mind) on a ~28-second loop with cross-fades, per-scene animated visuals, IntersectionObserver-driven auto-pause when off-screen, hover-pause on desktop, dot navigation, and a `prefers-reduced-motion` fallback that locks scene 1 in place. No new dependencies. Home First Load JS ~168 kB.
- 2026-04-30 — Product flow narrative replaces the App Store screenshot gallery. Built `PhoneFrame` shell + three React/Tailwind iOS screens (Scan, Split, Settle) under `src/components/sections/ProductFlow*.tsx` with continuous in-screen motion (scan beam, avatar cycle, count-up balances, settle-button pulse). Deleted `AppScreenshots.tsx` and the six App Store PNGs. Decision recorded in [ADR 0005](adr/0005-build-product-screens-as-react-components.md), which supersedes 0001 and 0003.
- 2026-04-30 — PostHog website analytics prepared in code: `posthog-js` is lazy-loaded only after analytics consent and `NEXT_PUBLIC_POSTHOG_KEY` is present, tracks core website funnels, and scrubs URL query strings before sending events so `/join?groupId=...` values are not sent.
- 2026-04-30 — Marketing pass landed (single session, eight micro-commits): Features rebuild, AppScreenshots gallery (six App Store screenshots under `public/images/screenshots/`), SocialProof strip, Hero CTA device routing, FAQ accuracy entry, Roadmap refresh, full Remotion strip.
- 2026-04-30 — Remotion gone: removed `@remotion/player` embeds from HowItWorks/Benefits/CTA, deleted `ReceiptDemo.tsx` and `src/remotion/`, dropped `remotion` + `@remotion/player` from `package.json`, removed the `remotion-best-practices` skill (gone from `.claude/skills/` and `skills-lock.json`). Home First Load JS down from ~222 kB to 161 kB.
- 2026-04-25 — Three ambient Remotion backgrounds, FeaturesShowcase v3/v4, ReceiptDemo, Roadmap v1.4 rescope, ReleaseNotes 1.3.1, Remotion setup. (See `CHANGELOG.md` for detail; all of this was reverted on 2026-04-30 except the rescoped v1.4 card and the 1.3.1 release-notes entry.)

## Blockers

- No current blocker for PostHog website ingestion. If events disappear, first verify browser consent state, ad blockers/privacy extensions, the Vercel `NEXT_PUBLIC_POSTHOG_KEY`, the US Cloud host override, and that the PostHog Activity view is not filtering out internal/test users.

## Next steps

- Build the first PostHog dashboard: traffic by path/referrer/device, App Store click funnel, download clicks by version, join-link validity, app-open fallback rate, and top UTM sources.
- Create saved PostHog funnels for `page_viewed -> cta_clicked -> app_store_clicked`, `/downloads page_viewed -> download_clicked`, and `join_page_viewed -> app_open_attempted -> app_open_failed`, with breakdowns by `device_type`, `referrer_host`, and UTM properties.
- Confirm whether production session replay should remain enabled. The website masks text/attributes, but replay should still be treated as an explicit privacy/product decision.
- When Group Reports v1.4 ships (within ~7 days): flip the Roadmap card from "shipping" to "completed", add an iOS 1.4 entry to `ReleaseNotes.tsx`, and consider whether `ProductFlow` should grow a fourth phone for Group Reports (per ADR 0005, this is a single-file extension).
- When Android hits the Play Store: swap the Roadmap card status off "delayed", re-enable the Google Play CTA in `CTA.tsx` (currently a disabled visual), and decide whether `ReleaseNotes.tsx` should track Android entries (currently iOS-only by convention — see `feedback_release_notes_scope` memory).

## Runtime / deployment

- Framework: Next.js 15.3.6, App Router, React 19, TypeScript, Tailwind 3.4. Dev script runs `next lint` before `next dev --turbopack`.
- Hosting: Vercel. Canonical production domain confirmed as `https://expensemate.app` (2026-04-30).
- Analytics: `@vercel/analytics` remains always-on/cookieless. Google Analytics remains consent-gated legacy analytics. PostHog is the primary consent-gated website product/funnel analytics layer (`src/utils/analytics.ts`, `src/components/ui/PostHogAnalytics.tsx`), lazy-loaded after consent and Vercel env config; the live project is US Cloud, so Vercel must set `NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com`. Event properties intentionally avoid raw join `groupId` values and scrub URL query strings via `before_send`.
- Downloads: Android APKs hosted on GitHub Releases under `SM1LE21/bill-splitting-Website` (see `public/downloads/v*/metadata.json`). Local APKs are git-ignored (`*.apk`). Closed-beta route only — not advertised in marketing.
- Deep links: `/.well-known/assetlinks.json` (Android) served via a route handler that reads `public/.well-known/assetlinks.json`. Apple App Site Association content-type wired in `next.config.ts`; iOS app is in production. App schemes `expensemate://` and universal links on `https://expensemate.app` must keep working — the join flow at `/join?groupId=<uuid>` is the integration point with mobile.
- Bundle: Home First Load JS ~168 kB after the Benefits reel; was ~166 kB after the PostHog wrapper + ProductFlow section, ~161 kB right after the Remotion strip, ~222 kB before the Remotion strip. PostHog itself lazy-loads after consent.
- This folder is a Git submodule of `Bill-Splitting-App`. Commit website changes here first, then update the parent repo pointer if needed.
