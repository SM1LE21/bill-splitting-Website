import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Layout from '@/components/layout/Layout';
import JoinHandoff from '@/components/sections/JoinHandoff';
import { APP_STORE_ID, buildJoinLinks, type JoinSearchParams } from '@/utils/joinLinks';

type PageProps = {
  searchParams?: Promise<JoinSearchParams>;
};

const IOS_UA = /iphone|ipad|ipod/i;

// Smart App Banner: iOS Safari offers "Open" (installed) or "Get", carrying the invite URL.
export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { appArgumentUrl } = buildJoinLinks(searchParams ? await searchParams : undefined);
  return {
    title: 'Join a group | ExpenseMate',
    description: 'Open this ExpenseMate group invite in the app or in your browser.',
    robots: 'noindex',
    itunes: appArgumentUrl
      ? { appId: APP_STORE_ID, appArgument: appArgumentUrl }
      : { appId: APP_STORE_ID },
  };
}

// Handoff page for invite links; with the app installed on iOS, Universal Links open the app before this renders.
export default async function JoinPage({ searchParams }: PageProps) {
  const links = buildJoinLinks(searchParams ? await searchParams : undefined);
  const preferApp = IOS_UA.test((await headers()).get('user-agent') ?? '');

  return (
    <Layout minimal>
      <JoinHandoff links={links} preferApp={preferApp} />
    </Layout>
  );
}
