'use client';

import { Analytics } from '@vercel/analytics/next';

// Invite URLs carry a groupId that works as a join capability; strip it before sending.
function withoutGroupId(input: string): string {
  try {
    const url = new URL(input);
    url.searchParams.delete('groupId');
    return url.toString();
  } catch {
    return input.split('?')[0];
  }
}

export default function VercelAnalytics() {
  return <Analytics beforeSend={(event) => ({ ...event, url: withoutGroupId(event.url) })} />;
}
