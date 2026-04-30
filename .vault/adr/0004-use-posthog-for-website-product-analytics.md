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

Use PostHog as the website's product analytics layer.

- Load `posthog-js` lazily on the client only after analytics consent and `NEXT_PUBLIC_POSTHOG_KEY` are present.
- Default the host to `https://eu.i.posthog.com`; allow override through `NEXT_PUBLIC_POSTHOG_HOST`.
- Disable PostHog autocapture and automatic pageview capture; send explicit events from known funnel points.
- Use `before_send` to scrub query strings from PostHog URL properties, preserving only UTM/ref parameters.
- Keep session replay disabled by default; enable only with `NEXT_PUBLIC_POSTHOG_SESSION_REPLAY=true` after a separate privacy decision.
- Keep Vercel Analytics and Google Analytics in place for now; decide later whether GA is still needed once PostHog is live.

## Consequences

- The website can build accurate PostHog funnels without waiting for a backend event pipeline.
- No PostHog network request happens until a visitor grants analytics consent.
- Raw join `groupId` values are intentionally not included in event properties and are scrubbed from URL properties.
- PostHog will not collect anything on production until Vercel environment variables are configured.
- Future mobile/client PostHog integrations should align event names and privacy rules with this website convention.
