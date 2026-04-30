---
name: ADR 0005 — Build product flow screens as React components
description: Three core iOS screens (Scan, Split, Settle) are recreated as React/Tailwind components with framer-motion, instead of using Remotion compositions, Hyperframe assets, or static App Store screenshots.
type: project
---

# 0005 — Build product flow screens as React components

- **Status:** Accepted, 2026-04-30
- **Supersedes:** [0001 — Use Remotion for marketing animations](0001-use-remotion-for-marketing-animations.md), [0003 — Ambient Remotion compositions are desktop-only](0003-ambient-remotion-desktop-only.md)

## Context

The home page needs visual evidence of what the iOS app actually looks like. Three approaches were tried and discarded:

1. **Remotion compositions** (ADR 0001 / 0003). Heavy bundle (~60 kB First Load JS) for a marketing-only animation pipeline, and the visual output didn't land — the user explicitly disliked the look. Stripped on 2026-04-30.
2. **App Store screenshots in a tiled grid.** The submitted Apple assets carry burnt-in marketing headlines ("AI-powered Receipt Scanning for automation", etc.) and are designed as a horizontal App Store reel where adjacent panels flow into each other. Tiling them in a website grid produced a "random pile of phones" look with one orphan in the last row. Removed on 2026-04-30.
3. **Hyperframe (`hyperframe.ai`).** Considered. SaaS tool that produces animated phone mockups from screenshots; would require an external account, asset rendering pipeline, and a video file we'd embed. Rejected for this pass — too much process for a single section.

## Decision

Recreate three core screens — **Scan** (Scanned Receipt detail), **Split** (Receipt-items split with per-item assignment), **Settle** (Group balances + Action Center with a Settle button) — as React/Tailwind components, composed inside a reusable `PhoneFrame` shell. Use `framer-motion` (already in deps) for both the on-scroll reveal animations and continuous in-screen motion (scan beam loop, avatar cycle, count-up balances, settle-button pulse).

Layout: `ProductFlow` section under HowItWorks, three phones side-by-side on `lg`, stacked on mobile, each with a numbered beat caption ("1. Snap" → "2. Split" → "3. Settle"). Real iOS colour tokens via arbitrary Tailwind values (`#007AFF`, `#FF3B30`, `#22C55E`).

## Consequences

### Pros

- **Bundle is light.** Home First Load JS goes from 161 kB (post-Remotion strip) to ~166 kB — five kB for three screens plus the framer-motion calls. No external player runtime.
- **Full editorial control.** Copy, layout, motion, and timing all live in the website repo. No asset pipeline, no render queue, no third-party account.
- **Looks like the actual product.** The iOS visual language (grouped form cards, system colours, dynamic island, status bar) is recognisable; the screens work as proof-of-concept rather than as literal screenshots.
- **Trivially extensible.** Adding a fourth screen (e.g., Group Reports when v1.4 ships) is a new file plus three lines in `ProductFlow.tsx`.

### Cons

- **Drifts when the iOS app changes.** Renaming a label, reordering a row, or restyling a chip in the iOS app does not propagate to the website automatically. We accept this — these are marketing screens, not screenshots; pixel-perfect parity is not the goal.
- **Not a real demo.** The screens don't react to user input on the website. If we ever want clickable demos, this approach extends naturally; if we want a recorded full-flow video, Hyperframe / a screen recording becomes a better fit.
- **Manual visual QA.** Without Remotion's render-and-review loop or App Store's burnt-in approval, the only QA is "does it look right in the browser." Acceptable at the current scale.

### When to revisit

- If we ship more than ~6 screens this way, start factoring shared primitives (status bar variant, grouped-form card, list-row, segmented control) into `src/components/ui/iosLike/` instead of duplicating per screen.
- If the product team wants a continuous-flow video (snap → extract → split → settle in one shot, not three discrete frames), Hyperframe or a real screen recording becomes the right tool.
- If we localise the website (DE/FR/ES/PT), every label inside these screens has to be translated alongside section copy. Either lift the strings into i18n keys or accept English-only screens as a stylistic choice.

## Files

- `src/components/ui/PhoneFrame.tsx` — bezel + status bar shell.
- `src/components/sections/ProductFlowScan.tsx` — beat 1.
- `src/components/sections/ProductFlowSplit.tsx` — beat 2.
- `src/components/sections/ProductFlowSettle.tsx` — beat 3.
- `src/components/sections/ProductFlow.tsx` — section assembling the three.
