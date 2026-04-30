---
name: Use PostHog for website product analytics
description: Decision record for the ExpenseMate Website PostHog analytics integration
type: decision
---

# 0004 — Use PostHog for website product analytics

Date: 2026-04-30
Status: Accepted

## Context

The website already had Vercel Analytics and Google Analytics, but those only gave a weak view of the user journey. The product needs clearer visibility into marketing and onboarding funnels: CTA clicks, App Store handoff, Android beta downloads, join-link outcomes, app-open fallback, and desktop QR display.

The `/join?groupId=<uuid>` route is a mobile deep-link contract, so analytics must not leak raw group IDs through custom event properties or URL query strings.

## Decision

Use PostHog as the website's primary product/funnel analytics layer.

- Load `posthog-js` lazily on the client only after analytics consent and `NEXT_PUBLIC_POSTHOG_KEY` are present.
- Default the host to `https://eu.i.posthog.com`; allow override through `NEXT_PUBLIC_POSTHOG_HOST`.
- The live ExpenseMate PostHog project is US Cloud, so production/preview Vercel env must set `NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com`.
- Disable PostHog autocapture and automatic pageview capture; send explicit events from known funnel points.
- Use `before_send` to scrub query strings from PostHog URL properties, preserving only UTM/ref parameters.
- Keep session replay disabled by default; enable only with `NEXT_PUBLIC_POSTHOG_SESSION_REPLAY=true` after a separate privacy decision.
- Keep Vercel Analytics and Google Analytics in place for now: Vercel as cookieless traffic baseline, GA as consent-gated legacy comparison until product decides whether it is still needed.

## Consequences

- The website can build accurate PostHog funnels without waiting for a backend event pipeline.
- No PostHog network request happens until a visitor grants analytics consent.
- Raw join `groupId` values are intentionally not included in event properties and are scrubbed from URL properties.
- Production ingestion was verified on 2026-04-30 after Vercel environment variables were configured and a fresh visitor accepted analytics cookies.
- Future mobile/client PostHog integrations should align event names and privacy rules with this website convention.
