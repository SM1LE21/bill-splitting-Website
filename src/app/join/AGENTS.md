# AGENTS.md (Website Join Route)

## Scope

Instructions for work inside `Website/src/app/join/` (join page route parsing and app-redirect entrypoint).

## What Lives Here

- `page.tsx` (`/join` route, query parsing for `groupId`, handoff to `JoinGroup` section)

Related files outside this folder:

- `Website/src/components/sections/JoinGroup.tsx` (validates `groupId`, renders join flow UI)
- `Website/src/components/ui/AppRedirect.tsx` (auto-open app + fallback UI)
- `Website/src/utils/deviceUtils.ts` (link generation, UUID validation, redirect helpers)
- Mobile deep-link parsers:
  - `Frontend/BillSplitApp/Utilities/DeepLinkManager.swift`
  - `reactNativeApp/src/services/deepLinkHandler.ts`

## Primary Responsibilities

- Parse the `/join` URL query and pass a normalized `groupId` into the join flow UI.
- Preserve compatibility with links generated/shared externally (website, app, QR codes).
- Keep join-route query handling resilient to Next.js search param shapes (`string | string[]`).
- Serve as the web entrypoint for mobile app deep-link fallback/open flows.

## Key Invariants / Do Not Break

- The query parameter name is `groupId`.
- The public path is `/join`.
- `page.tsx` normalizes `groupId` from `string | string[]` and passes a single string (or `null`) to `JoinGroup`.
- UUID validation currently happens in `JoinGroup.tsx` / `deviceUtils.ts`, not only in the page route.
- Changes here must remain compatible with iOS and RN deep-link parsers expecting `/join` + `groupId`.

## How To Verify Changes

- Test `/join?groupId=<valid-uuid>` and confirm it renders the app redirect flow.
- Test missing/invalid `groupId` and confirm the invalid-link UI path still works.
- Confirm `JoinGroup.tsx` and `AppRedirect.tsx` still receive the expected prop shape.
- Compare the path/query contract with:
  - `Website/src/utils/deviceUtils.ts`
  - `Frontend/BillSplitApp/Utilities/DeepLinkManager.swift`
  - `reactNativeApp/src/services/deepLinkHandler.ts`

## When To Coordinate With Other Folders

- Coordinate with `Website/src/components/sections/JoinGroup.tsx` and `Website/src/components/ui/AppRedirect.tsx` for join-flow UI changes.
- Coordinate with `Website/src/utils/deviceUtils.ts` for query name/path/deep-link helper changes.
- Coordinate with both mobile clients when changing `/join` path or `groupId` behavior.

## Common Mistakes / Gotchas

- Renaming `groupId` in the route but not in device utilities or mobile parsers.
- Validating/parsing only one `searchParams` shape and breaking array-form handling.
- Changing the join route path without updating QR codes and deep-link generation logic.
- Treating this route as purely web UI; it is part of the mobile app open/join contract.

