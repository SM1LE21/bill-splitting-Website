---
name: Website status
description: Current focus, recent changes, blockers, next steps, and runtime facts for the ExpenseMate Website
type: project
---

# Website — STATUS

Last reviewed: 2026-04-30

## Current focus

- Marketing reset shipped: real iOS screenshots replace Remotion-driven motion, Features section rebuilt with real copy and stroke icons, SocialProof strip under the Hero, iOS-only Hero CTA shortcut to the App Store, FAQ leads with the receipt-accuracy question.
- Roadmap: Group Reports v1.4 marked "Shipping" (new primary-tinted status), Android v1.0 reads "Beta — Play Store soon" with the delayed badge retained. Web / Personal Space / Work Space milestones unchanged.
- Public-facing release notes track iOS through 1.3.1; v1.4 ships within ~7 days (Group Reports). The `/downloads` Android APK route is intentionally not advertised on the home page — closed-beta only until the Play Store launch.

## Recent changes

- 2026-04-30 — PostHog website analytics prepared in code: `posthog-js` is lazy-loaded only after analytics consent and `NEXT_PUBLIC_POSTHOG_KEY` is present, defaults to the EU ingest host, tracks core website funnels, and scrubs URL query strings before sending events so `/join?groupId=...` values are not sent.
- 2026-04-30 — Marketing pass landed (single session, eight micro-commits): Features rebuild, AppScreenshots gallery (six App Store screenshots under `public/images/screenshots/`), SocialProof strip, Hero CTA device routing, FAQ accuracy entry, Roadmap refresh, full Remotion strip.
- 2026-04-30 — Remotion gone: removed `@remotion/player` embeds from HowItWorks/Benefits/CTA, deleted `ReceiptDemo.tsx` and `src/remotion/`, dropped `remotion` + `@remotion/player` from `package.json`, removed the `remotion-best-practices` skill (gone from `.claude/skills/` and `skills-lock.json`). Home First Load JS down from ~222 kB to 161 kB.
- 2026-04-25 — Three ambient Remotion backgrounds, FeaturesShowcase v3/v4, ReceiptDemo, Roadmap v1.4 rescope, ReleaseNotes 1.3.1, Remotion setup. (See `CHANGELOG.md` for detail; all of this was reverted on 2026-04-30 except the rescoped v1.4 card and the 1.3.1 release-notes entry.)

## Blockers

- 2026-04-30 — PostHog live collection is blocked until the Vercel production/preview environment has `NEXT_PUBLIC_POSTHOG_KEY` set. `NEXT_PUBLIC_POSTHOG_HOST` should be set to `https://eu.i.posthog.com` unless the project is intentionally created in US Cloud.

## Next steps

- Configure the PostHog project in Vercel, deploy, accept analytics cookies on production, and verify `page_viewed`, `cta_clicked`, `app_store_clicked`, `download_clicked`, `join_page_viewed`, `app_open_attempted`, `app_open_failed`, and `qr_displayed` events in PostHog Live events.
- Decide whether to enable production session replay by setting `NEXT_PUBLIC_POSTHOG_SESSION_REPLAY=true`; leave it unset/false until privacy/legal review confirms the masking and consent copy are sufficient.
- When Group Reports v1.4 ships (within ~7 days): flip the Roadmap card from "shipping" to "completed", add an iOS 1.4 entry to `ReleaseNotes.tsx`, and consider adding a Group Reports screenshot to the `AppScreenshots` gallery (currently six iOS screens, no reports).
- When Android hits the Play Store: swap the Roadmap card status off "delayed", re-enable the Google Play CTA in `CTA.tsx` (currently a disabled visual), and decide whether `ReleaseNotes.tsx` should track Android entries (currently iOS-only by convention — see `feedback_release_notes_scope` memory).
- App Store screenshots include burnt-in headlines from the Apple submission; if those start fighting the section copy, regenerate the assets without headlines or crop them via CSS `object-position`.

## Runtime / deployment

- Framework: Next.js 15.3.6, App Router, React 19, TypeScript, Tailwind 3.4. Dev script runs `next lint` before `next dev --turbopack`.
- Hosting: Vercel. Canonical production domain confirmed as `https://expensemate.app` (2026-04-30).
- Analytics: `@vercel/analytics` remains always-on/cookieless. Google Analytics remains consent-gated. PostHog is now the consent-gated product analytics layer (`src/utils/analytics.ts`, `src/components/ui/PostHogAnalytics.tsx`), lazy-loaded after consent and Vercel env config; event properties intentionally avoid raw join `groupId` values and scrub URL query strings via `before_send`.
- Downloads: Android APKs hosted on GitHub Releases under `SM1LE21/bill-splitting-Website` (see `public/downloads/v*/metadata.json`). Local APKs are git-ignored (`*.apk`). Closed-beta route only — not advertised in marketing.
- Deep links: `/.well-known/assetlinks.json` (Android) served via a route handler that reads `public/.well-known/assetlinks.json`. Apple App Site Association content-type wired in `next.config.ts`; iOS app is in production. App schemes `expensemate://` and universal links on `https://expensemate.app` must keep working — the join flow at `/join?groupId=<uuid>` is the integration point with mobile.
- Bundle: Home First Load JS ~166 kB after the PostHog wrapper (the SDK itself lazy-loads after consent); was ~161 kB after the Remotion strip and ~222 kB before the Remotion strip.
- This folder is a Git submodule of `Bill-Splitting-App`. Commit website changes here first, then update the parent repo pointer if needed.
