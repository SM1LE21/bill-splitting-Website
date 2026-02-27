# AGENTS.md (Website Downloads Routes)

## Scope

Instructions for work inside `Website/src/app/downloads/` (downloads page(s) and download route handlers).

## What Lives Here

- `page.tsx` (downloads list UI, latest version highlight, metadata display)
- `[version]/[filename]/route.ts` (download redirect/file serving route handler)

Related files outside this folder:

- `Website/src/utils/versionUtils.ts` (version discovery, metadata parsing, validation)
- `Website/public/downloads/` (version folders, `metadata.json`, optional local files)
- `Website/src/app/release-notes/` (release messaging alignment)

## Primary Responsibilities

- Present downloadable versions and metadata to users.
- Resolve download requests to either external URLs (metadata redirect) or local file fallback.
- Keep UI and routing behavior aligned with version metadata conventions.
- Guard invalid version inputs before file access.

## Key Invariants / Do Not Break

- Version metadata is read from `public/downloads/<version>/metadata.json` when available.
- `versionUtils.isValidVersion()` and the download route handler must stay aligned on version format rules.
- `[version]/[filename]/route.ts` supports two modes:
  - redirect to `metadata.downloadUrl`
  - fallback to local file serving
- The dynamic route currently uses `export const dynamic = 'force-dynamic'`; do not remove without understanding the caching/runtime impact.

## How To Verify Changes

- Test `/downloads` page rendering with existing version folders in `Website/public/downloads/`.
- Test at least one download URL:
  - redirect-backed version (via `metadata.downloadUrl`)
  - local file fallback (if present)
- Verify invalid version strings return the expected error path.
- Confirm any metadata field changes are reflected in both `page.tsx` and `Website/src/utils/versionUtils.ts`.

## When To Coordinate With Other Folders

- Coordinate with `Website/src/utils/` for metadata parsing/validation changes.
- Coordinate with `Website/public/downloads/` when changing metadata schema or expected file names.
- Coordinate with `Website/src/app/release-notes/` if release text/version display conventions change.

## Common Mistakes / Gotchas

- Updating UI metadata fields without updating `versionUtils` parsing types.
- Breaking the external redirect path while testing only local files (or vice versa).
- Changing version validation regex/rules in one place only.
- Forgetting that `filename` route params can be requested independently of what `page.tsx` displays.

