---
name: Vault README
description: Purpose and ownership of the .vault/ knowledge base for the ExpenseMate Website repo
type: reference
---

# .vault/ — agent knowledge base for the ExpenseMate Website

This is the persistent agent brain for `Website/` (the ExpenseMate marketing site
and onboarding/download flows, Next.js App Router, Git submodule of
`Bill-Splitting-App`).

A fresh agent should be able to read everything here in under two minutes and
know: what is being worked on, what's blocked, what past decisions are still
load-bearing, and what open questions still need a human.

## Layout

- `STATUS.md` — current focus, recent changes, blockers, next steps, runtime/deployment facts.
- `QUESTIONS.md` — open escalations needing human/product/cross-project input.
- `adr/` — architecture decision records, one file per decision, sequentially numbered.
- `adr/README.md` — index of decisions.

## Maintained by

Agents. Humans may read or review, but agents keep this current as a byproduct
of meaningful work. Do not duplicate this content into ad-hoc Markdown files at
the repo root.

## What does NOT belong here

- Code documentation for humans (that's `README.md` / inline code).
- A running history of changes (`CHANGELOG.md` and `git log` are authoritative).
- Ticket lists, scratch notes, or design-doc archives.
- Secrets, credentials, private founder/business context, investor or candidate
  names, or any sensitive information.

## Related agent docs in this repo

- `AGENTS.md` (repo root) — working principles, invariants, verification commands.
- `src/app/downloads/AGENTS.md`, `src/app/join/AGENTS.md`, `src/utils/AGENTS.md` —
  scoped agent guidance for those folders.
- `src/remotion/README.md` — Remotion composition conventions.
- `.claude/skills/remotion-best-practices/` — Remotion authoring skill.
