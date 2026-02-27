# AGENTS.md (Website Utils)

## Scope

Instructions for work inside `Website/src/utils/` (shared website utility functions).

## What Lives Here

- `deviceUtils.ts` (device detection, deep-link URLs, store URLs, redirect attempts, UUID validation)
- `versionUtils.ts` (download version discovery, metadata parsing, version validation)
- `cookieConsent.ts` and other shared browser/runtime helpers

Related files outside this folder:

- `Website/src/app/join/` and `Website/src/components/ui/AppRedirect.tsx`
- `Website/src/app/downloads/` and `Website/public/downloads/`
- `reactNativeApp/app.config.js` and `reactNativeApp/src/services/deepLinkHandler.ts`
- `Frontend/BillSplitApp/Utilities/DeepLinkManager.swift`

## Primary Responsibilities

- Provide stable utility contracts for website routes and UI components.
- Centralize join-link/deep-link creation and device fallback behavior.
- Centralize version metadata parsing and download discovery.
- Keep shared validation rules consistent across route handlers and UI.

## Key Invariants / Do Not Break

- Join/deep-link behavior currently depends on:
  - public path `/join`
  - query parameter `groupId`
  - app scheme `expensemate://`
  - universal-link domain `expensemate.app`
- `versionUtils.ts` defines the metadata interface and version validation used by downloads routes/pages.
- `deviceUtils.ts` UUID validation must remain compatible with mobile deep-link parsers and website join flow.
- Store URLs and redirect helpers are user-facing behavior; changes can affect onboarding conversion flows.

## How To Verify Changes

- For `deviceUtils.ts` changes:
  - test join links via `/join?groupId=<uuid>`
  - test app redirect fallback UI in `AppRedirect.tsx`
  - compare path/query/scheme expectations with iOS and RN parsers
- For `versionUtils.ts` changes:
  - test `/downloads`
  - test `/downloads/[version]/[filename]`
  - inspect `public/downloads/*/metadata.json` compatibility
- Confirm utility signature changes are reflected in importing components/pages.

## When To Coordinate With Other Folders

- Coordinate with `Website/src/app/join/` and `Website/src/components/ui/AppRedirect.tsx` for deep-link utility changes.
- Coordinate with `Website/src/app/downloads/` and `Website/public/downloads/` for version utility changes.
- Coordinate with `reactNativeApp/` and `Frontend/` for shared deep-link path/query/scheme changes.

## Common Mistakes / Gotchas

- Changing `/join` or `groupId` constants in one helper without updating callers and mobile parsers.
- Changing version regex/metadata shape without updating downloads route/page code.
- Mixing server-only and browser-only behavior in utilities without checking call sites.
- Assuming “utility” changes are low risk; these files define cross-feature contracts.

