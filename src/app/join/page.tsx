import { redirect } from 'next/navigation';

// The join experience is implemented once, in the web app — not split across two codebases.
const WEB_APP_JOIN_URL = 'https://app.expensemate.app/join';

type SearchParamsType = {
  groupId?: string | string[];
  // Allows additional query parameters without using `any`
  [key: string]: string | string[] | undefined;
};

type PageProps = {
  params?: Promise<Record<string, string>>;
  searchParams?: Promise<SearchParamsType>;
};

/**
 * Server-side 307 to the web app, carrying the query string through untouched.
 *
 * On iOS with the app installed this never runs: Universal Links resolve the AASA
 * association for the tapped URL and open the app without issuing the request. The
 * redirect is the path for Android, desktop, and iPhones without the app.
 *
 * Nothing is validated here. An absent or malformed `groupId` still redirects, and the
 * web app renders the "this invite link isn't valid" state — one implementation of that
 * message, not two.
 */
export default async function JoinPage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(resolvedSearchParams ?? {})) {
    if (typeof value === 'string') {
      query.append(key, value);
    } else if (Array.isArray(value)) {
      for (const entry of value) {
        query.append(key, entry);
      }
    }
  }

  const search = query.toString();
  redirect(search ? `${WEB_APP_JOIN_URL}?${search}` : WEB_APP_JOIN_URL);
}
