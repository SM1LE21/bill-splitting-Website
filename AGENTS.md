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
