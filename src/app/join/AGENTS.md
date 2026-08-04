# AGENTS.md (Website Join Route)

## Scope

Instructions for work inside `Website/src/app/join/` (the `/join` redirect to the web app).

## What Lives Here

- `page.tsx` — a server component that issues a **307 to `https://app.expensemate.app/join`**, carrying the query string through untouched. It renders nothing.

**There is no join UI on the marketing site any more.** As of 2026-08-04 (web build spec §14.1) the join experience is implemented **once**, in the web app at `app.expensemate.app`. `JoinGroup.tsx` and `AppRedirect.tsx` were deleted with this change; do not recreate them here.

Related files outside this folder:

- `Website/public/.well-known/apple-app-site-association` — the Universal Links association. `appID` is `87U8WV4Q3F.app.ExpenseMate` (**case-sensitive**; the lowercase `app.expensemate` that shipped until 2026-08-04 is why 1.4.2 fell back to the custom scheme).
- `Website/next.config.ts` — serves that file as `application/json`.
- `Website/src/utils/deviceUtils.ts` — link generation and UUID helpers. Its redirect helpers no longer have a caller on this route.
- Mobile deep-link parsers:
  - `Frontend/BillSplitApp/Utilities/DeepLinkManager.swift`
  - `reactNativeApp/src/services/deepLinkHandler.ts`

## Primary Responsibilities

- Forward `/join` to the web app without altering the query.
- Stay out of the way of Universal Links: on iOS with the app installed this request is never issued.

## Key Invariants / Do Not Break

- **The query parameter name is `groupId` and the public path is `/join`.** The invite URL `https://expensemate.app/join?groupId=<UUID>` is built at `Frontend/.../ShareMenuView.swift:93`/`:105` and `SettingsView.swift:73`, shipped in iOS 1.4.2 and 1.5.0, and is already sitting in users' message threads. It is a **query parameter, not a path segment**. Changing the format breaks links in the wild.
- **The redirect is 307, not 308.** Permanent redirects get cached by browsers and would be painful to undo.
- **Nothing is validated here.** Missing, empty, duplicated and malformed `groupId` values all redirect; the web app owns the "invite link isn't valid" message so there is exactly one copy of it. This route must never 500 on a bad link.
- Handle both `searchParams` shapes (`string | string[]`); an array appends each entry.
- **DEPLOYMENT ORDERING (binding):** this redirect must not be live before the web app is live at `app.expensemate.app`. Shipping it early breaks every invite link in the wild. See `.vault/STATUS.md`.

## How To Verify Changes

- `npm run build`, then `npx next start` and check the status line and `Location` header:
  - `curl -sSI 'http://localhost:3000/join?groupId=<uuid>'` → `307` + `location: https://app.expensemate.app/join?groupId=<uuid>`
  - repeat with no query, `?groupId=`, a non-UUID, and a duplicated `groupId` — all must be 307, never 500.
- `curl -sSI http://localhost:3000/.well-known/apple-app-site-association` → `200`, `content-type: application/json`, **no redirect**.
- Compare the path/query contract with `Frontend/BillSplitApp/Utilities/DeepLinkManager.swift` and `reactNativeApp/src/services/deepLinkHandler.ts`.

## When To Coordinate With Other Folders

- Coordinate with `expensemate-web/src/app/join/` — it is the other half of this flow and owns every user-visible state.
- Coordinate with both mobile clients before changing the `/join` path or `groupId` behaviour.

## Common Mistakes / Gotchas

- Rebuilding a join UI here. There is one, in the web app.
- Making the redirect permanent (308), or validating `groupId` and returning a 404 for a bad one.
- Editing the AASA `appID` case. It must match `PRODUCT_BUNDLE_IDENTIFIER` exactly: `app.ExpenseMate`.
- Assuming a Universal Link survives this redirect — **it does not**. iOS only hands off the *tapped* URL, which is why the association on the apex domain has to be correct and un-redirected.
