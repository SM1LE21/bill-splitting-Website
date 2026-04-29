# AGENTS.md (Website)

## Scope

Instructions for work inside `Website/` (Next.js App Router website submodule).

## What Lives Here

- `src/app/`: routes/pages (`/`, `/join`, `/downloads`, policy pages, release notes)
- `src/components/`: layout, sections, UI primitives
- `src/utils/`: device, version, cookie helpers
- `src/constants/`: policy dates and constants
- `public/downloads/`: version metadata and downloadable artifacts
- `public/images/`, `public/videos/`: marketing assets

This folder is a Git submodule. Commit website changes here first, then update the parent repo pointer if needed.

## Working Principles

These apply to every task, before any of the conventions below.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## Primary Responsibilities

- Maintain marketing site and public app onboarding/download flows.
- Keep join-link and download behavior compatible with mobile app deep-link expectations.
- Keep public version metadata, UI, and route handlers in sync.
- Preserve site structure and content integrity while making focused changes.

## Key Invariants / Do Not Break

- Join links and device redirects must stay compatible with `expensemate://` and `https://expensemate.app` flows used by mobile apps.
- Download route behavior depends on both route handlers and `src/utils/versionUtils.ts`.
- `public/downloads/` metadata drives UI and redirect behavior; schema drift breaks downloads pages.
- Preserve current visual language unless the task explicitly requests a redesign.

## How To Verify Changes

- Local dev from `Website/`: `npm run dev` (runs lint before starting dev server).
- For release/download changes:
  - test `/downloads`
  - test `/downloads/[version]/[filename]`
  - inspect `public/downloads/*/metadata.json`
- For join-link changes:
  - test `/join?groupId=<uuid>`
  - compare with mobile deep-link parsers in `../Frontend/` and `../reactNativeApp/`
- Run production checks when relevant:
  - `npm run lint`
  - `npm run build`

## When To Coordinate With Other Folders

- Coordinate with `../reactNativeApp/` and `../Frontend/` when changing join-link paths, query params, or app schemes/domains.
- Coordinate with `../Backend/` if website changes depend on API or public app config behavior.
- Coordinate with `src/utils/` and `src/app/downloads/` for download/version flow changes.

## Common Mistakes / Gotchas

- Updating page UI without updating `versionUtils` or route-handler logic.
- Changing `groupId` query parameter names and breaking mobile deep-link parsing.
- Forgetting that download files may be local files or external redirects via metadata.
- Editing `src/app/page.tsx` for changes that belong in `src/components/sections/`.

## Local Run / Build Commands

Run from `Website/`:

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Remotion

Animations and any future per-user / per-group videos are built with Remotion. Compositions live in `src/remotion/` and are embedded into the marketing site via `@remotion/player`; rendered MP4s (when needed) come from the same code through the Remotion CLI or server renderer. Best-practice guidance for editing Remotion code is shipped as an Agent Skill under `.claude/skills/remotion-best-practices/` — Claude Code and other compatible agents load it on demand. When a rule is missing, the full system prompt at <https://www.remotion.dev/docs/ai/system-prompt> is a useful escape hatch.

## Knowledge base

The canonical knowledge base for this repo lives in `.vault/` at the repo root.

- `.vault/STATUS.md` — current state, in-flight work, blockers, next steps
- `.vault/QUESTIONS.md` — open escalations needing human / product input
- `.vault/adr/` — architecture decision records

Any durable knowledge — decisions, open questions, project state, deployment facts — belongs in `.vault/`, not in scattered ad-hoc Markdown files.

The vault is agent-maintained: humans can read or review it, but agents keep it current. Read it at the start of any non-trivial session; update it as a byproduct of meaningful work.

### Changelog vs vault

The changelog records history: what changed, when it changed, and what was shipped or fixed.

The vault records current operating context: what is true now, what is blocked, what questions remain open, and why important decisions were made.

Use the changelog for completed work. Use `.vault/` for durable context future agents need before making more changes.

A significant change may require both:

- update `CHANGELOG.md` with what changed
- update `.vault/STATUS.md` if project state, blockers, next steps, runtime facts, or risks changed
- update `.vault/QUESTIONS.md` if human/product input is needed
- create an ADR if a meaningful technical decision was made

Do not use the vault as a second changelog. Do not use the changelog for unresolved questions, current blockers, or decision rationale.

## Conventions

See full conventions in `CLAUDE.md`.

## Commit Convention

```
<type>(<scope>): <short description>

Types: feat | fix | refactor | chore | docs
Scope: optional, e.g. session, feedback, ui, db
```

Examples:
- `feat(session): add phase transition logging`
- `fix(feedback): handle empty transcript gracefully`
- `chore: update Config API endpoint`

**Micro-commits encouraged** — commit each logical unit of work. One changelog entry per feature/fix, regardless of commit count.

## Changelog

After each significant change, append an entry to `CHANGELOG.md`:

```
## YYYY-MM-DD HH:MM — <Title>
- bullet (1–4 max)
```

Commit the changelog alongside or right after the work.

## Code Rules

- **Max ~300 lines per file** — split consciously if growing beyond this
- **One responsibility per file** — no god classes
- **Comments only on major functions** — keep them one-line max
- **No dead code** — remove rather than comment out
- **Lean over clever** — prefer readable over terse
