# AGENTS.md (Website Join Route)

## Scope

Instructions for work inside `Website/src/app/join/` (the `/join` handoff page for invite links).

## What Lives Here

- `page.tsx` — a server component that renders a **handoff page** (since 1.6, 2026-09-27; from 2026-08-04 to then it was a 307 to the web app). It offers three ways into an invite and never navigates on its own:
  - **Open in the ExpenseMate app** → `expensemate://join?groupId=<uuid>` (only when `groupId` is exactly one valid UUID)
  - **Continue in the browser** → `https://app.expensemate.app/join?<the full query, re-encoded>`
  - **Download on the App Store** → `https://apps.apple.com/app/id6745098337`
  - the Apple Smart App Banner: `<meta name="apple-itunes-app" content="app-id=6745098337, app-argument=https://expensemate.app/join?groupId=<uuid>">` (no `app-argument` for an invalid `groupId`).
- iOS (`iphone|ipad|ipod` in the User-Agent) sees the app button first and filled; Android and desktop see the browser button first. Android has no store app, so the web app is its path; the app button stays as the second option for test-APK users. Same options either way.
- iPadOS 13+ Safari sends a desktop Macintosh User-Agent by default, so iPads usually get the browser-first order; both buttons and the Smart App Banner still show.

Related files outside this folder:

- `Website/src/components/sections/JoinHandoff.tsx` — the page body.
- `Website/src/components/ui/InternalLink.tsx` — `next/link` everywhere except on /join, where it renders a plain `<a rel="noreferrer">`.
- `Website/src/utils/joinLinks.ts` — builds every outgoing URL from the query; the App Store id lives here.
- `Website/public/.well-known/apple-app-site-association` — the Universal Links association. `appID` is `87U8WV4Q3F.app.ExpenseMate` (**case-sensitive**; the lowercase `app.expensemate` that shipped until 2026-08-04 is why 1.4.2 fell back to the custom scheme).
- `Website/next.config.ts` — serves that file as `application/json`.
- `expensemate-web/src/app/join/` and `src/components/join/open-in-app.tsx` — the web join flow; it owns every "invite link isn't valid" state.
- Mobile deep-link parsers:
  - `Frontend/BillSplitApp/Utilities/DeepLinkManager.swift`
  - `reactNativeApp/src/services/deepLinkHandler.ts`

## Primary Responsibilities

- Give a visitor without the app, or whose link opened in a browser, a clear choice: app, App Store, or web.
- Stay out of the way of Universal Links: on iOS 1.5.0+ with the app installed this request is never issued.

## Key Invariants / Do Not Break

- **The query parameter name is `groupId` and the public path is `/join`.** The invite URL `https://expensemate.app/join?groupId=<UUID>` is built at `Frontend/.../ShareMenuView.swift:93`/`:105` and `SettingsView.swift:73`, shipped in iOS 1.4.2 and 1.5.0, and is already sitting in users' message threads. It is a **query parameter, not a path segment**. Changing the format breaks links in the wild.
- **No automatic redirect, no timer, no auto-opening the custom scheme.** A custom-scheme navigation on a device without the app shows a browser error. The page offers; it never acts.
- **The page renders for every input and never 500s.** Missing, empty, duplicated and malformed `groupId` values render the page without the app button; "Continue in the browser" still carries the query, and the web app shows the one copy of the "invite link isn't valid" message.
- The app-scheme URL and the banner's `app-argument` only ever carry a validated UUID. The browser link carries the whole query, re-encoded through `URLSearchParams` (both `string | string[]` shapes).
- `/join` is disallowed for all crawlers (`*` and the assistant crawlers) in `robots.ts`, unchanged since commit 1db2c8b, so compliant crawlers never fetch it; the page `noindex` only matters for a crawler that ignores robots.txt.
- **No `groupId` reaches analytics.** The invite URL works as a join capability (any logged-in user can `POST /groups/join` with it). Google Analytics is not loaded when /join is the entry page (`src/components/ui/GoogleAnalytics.tsx`), and Vercel Analytics strips `groupId` from every page URL (`src/components/ui/VercelAnalytics.tsx`). GA is skipped only while the current route is /join: a client-side navigation *away* from /join would mount GA with the invite URL in history (GA4 enhanced measurement records it on Back), and one *into* /join after gtag loaded elsewhere would record it directly. So (1) every internal link rendered on /join leaves with a full page load and `rel="noreferrer"`: `src/components/ui/InternalLink.tsx` does this for the minimal footer links and the cookie banner's policy links; `JoinHandoff` and the footer's external links are plain `<a>`; the minimal layout has no navbar or logo. Never add a `next/link` `<Link>` or `router.push` to anything rendered on /join; use `InternalLink` or a plain `<a>`. (2) No internal `<Link>` may point to /join; if one is ever needed, use a plain `<a>` (full page load). `noreferrer` keeps the invite URL out of the next page's `document.referrer`, which GA (`dr`) and Vercel Analytics would otherwise send.

## How To Verify Changes

- `npm run lint`, `npm run build`, then `npx next start` and check:
  - `curl -s 'http://localhost:3000/join?groupId=<uuid>'` → `200`, contains `expensemate://join?groupId=<uuid>`, `https://app.expensemate.app/join?groupId=<uuid>` and the `apple-itunes-app` meta with the `app-argument`.
  - repeat with no query, `?groupId=`, a non-UUID, and a duplicated `groupId`: all `200`, no `expensemate://` link, never 500.
  - send an iPhone User-Agent (`-A 'Mozilla/5.0 (iPhone; ...)'`) and check the app button comes first.
- `curl -sSI http://localhost:3000/.well-known/apple-app-site-association` → `200`, `content-type: application/json`, **no redirect**.
- Compare the path/query contract with `Frontend/BillSplitApp/Utilities/DeepLinkManager.swift` and `reactNativeApp/src/services/deepLinkHandler.ts`.

## When To Coordinate With Other Folders

- Coordinate with `expensemate-web/src/app/join/`: it owns the web join flow and every invalid-link state.
- Coordinate with both mobile clients before changing the `/join` path or `groupId` behaviour.

## Common Mistakes / Gotchas

- Re-adding a redirect, or a timer that fires the custom scheme.
- Validating `groupId` and returning a 404 for a bad one.
- Editing the AASA `appID` case. It must match `PRODUCT_BUNDLE_IDENTIFIER` exactly: `app.ExpenseMate`.
- Assuming a Universal Link survives a redirect. **It does not**: iOS only hands off the *tapped* URL, which is why the association on the apex domain has to be correct and un-redirected.
