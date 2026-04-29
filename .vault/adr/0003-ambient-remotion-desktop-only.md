---
name: ADR 0003 — Ambient Remotion compositions are desktop-only
description: Why CTAParticles, BenefitsReceipts, and ProcessFlow are gated to lg:block with static fallbacks on mobile
type: project
---

# 0003 — Ambient Remotion compositions are desktop-only

Date: 2026-04-25
Status: Accepted

## Context

The home page has three ambient Remotion compositions that exist purely for
atmosphere — `CTAParticles` behind the dark CTA panel, `BenefitsReceipts`
replacing the two static decorative receipts, and `ProcessFlow` replacing the
static gradient connector in HowItWorks. Each spawns its own render loop in
`@remotion/player`. Stacking three continuous loops on touch devices is
expensive in both battery and frame pacing, and the visual payoff on a small
viewport is marginal.

## Decision

- All three ambient compositions render only inside a `lg:block` (or
  equivalent) wrapper. Mobile and small tablets keep the pre-existing static
  SVG / gradient fallbacks.
- This rule applies to ambient/decorative compositions only. Foreground
  compositions that are the actual content of a section
  (`FeaturesShowcase`, `ReceiptDemo`) render on all viewports — they are the
  reason the user is looking at that section.

## Consequences

- Mobile keeps a single Player runtime (for the foreground compositions),
  not four.
- Cost on desktop is small after the runtime is loaded: home First Load JS
  went from ~217 kB to ~222 kB when the three ambient pieces were added.
- When introducing a new composition, classify it: ambient (decorative,
  desktop-only) vs foreground (content, all viewports). Default to
  desktop-only when in doubt.
- If desktop performance ever degrades, the next lever is dynamic-import +
  intersection-observer gating (load the composition only when its section
  scrolls into view) rather than removing the animation outright.
