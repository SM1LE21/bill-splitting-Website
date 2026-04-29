---
name: ADR 0001 — Use Remotion for marketing animations
description: Why marketing animations live in src/remotion/ and render via @remotion/player
type: project
---

# 0001 — Use Remotion for marketing animations

Date: 2026-04-25
Status: Accepted

## Context

The marketing site needs scripted, narrative animation (a six-act feature
showcase, a receipt-scan demo, ambient backgrounds) that goes beyond what
Framer Motion alone expresses naturally as scene-based timelines. The same
compositions may also need to be rendered to MP4 for ads or per-user/per-group
videos in the future, so the animation source-of-truth has to live somewhere
re-renderable, not buried in component-level transitions.

## Decision

- Use Remotion (`remotion` + `@remotion/player`) for narrative and ambient
  marketing animation. Compositions live in `src/remotion/`, registered via
  `src/remotion/Root.tsx`.
- Embed compositions on the marketing site via the in-browser `@remotion/player`
  (auto-play, loop, no controls) inside the relevant section component.
- Pre-rendered MP4s, when needed, come from the same code through the Remotion
  CLI or server renderer — no parallel implementation.
- Best-practice guidance is shipped as the `remotion-best-practices` Agent Skill
  under `.claude/skills/`, pinned in `skills-lock.json` for reproducible installs.
  The full system prompt at <https://www.remotion.dev/docs/ai/system-prompt> is
  the escape hatch when a rule is missing.
- Continue using Framer Motion for component-level micro-interactions (hover,
  fade-in on scroll, layout transitions) — the two coexist.

## Consequences

- Adds runtime weight: `@remotion/player` pushed home First Load JS from ~158
  kB to ~215 kB when first introduced. Subsequent compositions add only a few
  kB each since the runtime is shared.
- All animation code is renderable to video without rewriting it — useful for
  per-user/per-group output and ad creative.
- Rules out lower-overhead alternatives (Lottie, hand-rolled CSS/SVG keyframes)
  for new narrative animations on this site. Framer-Motion-only and pre-rendered
  MP4 are still appropriate for one-off cases; choose them when the composition
  will never need to render to video and the runtime cost matters.
- Editing rules and conventions for compositions live in
  `.claude/skills/remotion-best-practices/` and `src/remotion/README.md`.
