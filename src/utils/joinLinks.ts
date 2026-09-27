import { isValidUUID } from '@/utils/deviceUtils';

export const APP_STORE_ID = '6745098337';
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;

const APEX_JOIN_URL = 'https://expensemate.app/join';
const WEB_APP_JOIN_URL = 'https://app.expensemate.app/join';

export type JoinSearchParams = Record<string, string | string[] | undefined>;

export type JoinLinks = {
  /** The groupId, only when it is exactly one well-formed UUID. */
  groupId: string | null;
  /** `expensemate://join?groupId=…`, only for a valid groupId. */
  appSchemeUrl: string | null;
  /** The canonical https invite URL, used as the smart banner's app-argument. */
  appArgumentUrl: string | null;
  /** The web app's join page with the full query carried over, encoded. */
  webAppUrl: string;
};

// Re-encodes every query entry; both `string` and `string[]` shapes are kept.
function toQuery(searchParams: JoinSearchParams): URLSearchParams {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    const values = typeof value === 'string' ? [value] : value ?? [];
    for (const entry of values) query.append(key, entry);
  }
  return query;
}

// Builds every outgoing join URL from the request query; never throws on bad input.
export function buildJoinLinks(searchParams: JoinSearchParams = {}): JoinLinks {
  const query = toQuery(searchParams);
  const ids = query.getAll('groupId');
  const groupId = ids.length === 1 && isValidUUID(ids[0]) ? ids[0] : null;
  const search = query.toString();
  const groupQuery = groupId ? `groupId=${groupId}` : null;

  return {
    groupId,
    appSchemeUrl: groupQuery ? `expensemate://join?${groupQuery}` : null,
    appArgumentUrl: groupQuery ? `${APEX_JOIN_URL}?${groupQuery}` : null,
    webAppUrl: search ? `${WEB_APP_JOIN_URL}?${search}` : WEB_APP_JOIN_URL,
  };
}
