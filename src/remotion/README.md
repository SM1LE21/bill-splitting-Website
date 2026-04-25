# Remotion compositions

This directory holds Remotion compositions used by the marketing site
(via `@remotion/player`) and any server-rendered MP4s (via the Remotion
CLI / server renderer).

## Conventions

- One composition per file.
- Co-locate composition assets next to the composition unless they are
  reused across compositions, in which case put them in a shared
  subfolder.
- `Root.tsx` (when added) is the registry: every composition is
  registered there once before it can be rendered or embedded.

## Embedding in the site

Use `@remotion/player`'s `<Player />` from a client component
(`'use client'`) inside the relevant section under `src/components/`.
Do not import compositions directly from server components — the
Player needs the browser runtime.

## Best-practice guidance

Agent Skills under `.claude/skills/remotion-best-practices/` load on
demand when working with Remotion code. If a rule is missing, the full
Remotion system prompt at
<https://www.remotion.dev/docs/ai/system-prompt> is a useful escape
hatch.
