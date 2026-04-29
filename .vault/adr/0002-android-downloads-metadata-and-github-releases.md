---
name: ADR 0002 — Android downloads use metadata.json + GitHub Releases redirect
description: Why per-version metadata.json drives the downloads page and APKs are not in this repo
type: project
---

# 0002 — Android downloads use metadata.json + GitHub Releases redirect

Date: Pre-existing convention, recorded 2026-04-29
Status: Accepted

## Context

Android APKs are large (~100 MB, currently 109 MB at v1.2.5) and change every
release. Hosting them in this Git repo would bloat history irreversibly.
GitHub provides a free, durable artifact store via Releases, and the
`SM1LE21/bill-splitting-Website` repo already has releases there. The
downloads page still needs structured per-version data (date, notes, file
size, changelog) to render UI consistently.

## Decision

- `*.apk` is git-ignored (`.gitignore`).
- For each release, create a `public/downloads/v<MAJOR>.<MINOR>.<PATCH>/`
  directory containing only `metadata.json`. The shape is the
  `VersionMetadata` interface in `src/utils/versionUtils.ts`:
  `{ version, releaseDate, releaseNotes?, fileSize?, changelog?, downloadUrl?, downloads? }`.
- `getAvailableVersions()` reads every directory under `public/downloads/`,
  loads its metadata, and includes the version if metadata exists or local
  files are present. Versions are sorted by `releaseDate` (descending) and
  fall back to numeric version-string sort.
- The download route (`/downloads/[version]/[filename]`) treats the
  `downloadUrl` field as authoritative when present and redirects to the
  GitHub Releases asset. Local files in the directory are still served when
  they exist — mostly a development affordance.
- `isValidVersion` accepts `vX.Y.Z` and `X.Y.Z`.

## Consequences

- The repo never carries APKs. Releases are decoupled from Git history.
- Adding a new version is a one-file change: drop in `metadata.json`. The
  downloads UI picks it up on the next build. The schema is implicit (the
  TypeScript interface) — drift between fields used by the UI and fields
  written by hand will silently break rendering, so keep new entries
  consistent with the interface.
- Because `getAvailableVersions` runs at request time using `process.cwd()`,
  this only works when the metadata is part of the deployed bundle (i.e.
  committed to the repo before deploy). Do not move metadata to an external
  source without rewriting that loader.
- This pattern is Android-only. iOS rides the App Store; the downloads page
  is not the right place for iOS releases.
