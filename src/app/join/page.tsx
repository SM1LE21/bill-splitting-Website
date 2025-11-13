import { Metadata } from 'next';
import JoinGroup from '@/components/sections/JoinGroup';

export const metadata: Metadata = {
  title: 'Join Group - ExpenseMate',
  description: 'Join an ExpenseMate group to start splitting bills with friends',
};

type SearchParamsType = {
  groupId?: string | string[];
  // Allows additional query parameters without using `any`
  [key: string]: string | string[] | undefined;
};

type PageProps = {
  params?: Promise<Record<string, string>>;
  searchParams?: Promise<SearchParamsType>;
};

export default async function JoinPage({ searchParams }: PageProps) {
  // Wait for the searchParams promise to resolve (if provided)
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  let groupId: string | null = null;
  
  if (typeof resolvedSearchParams?.groupId === 'string') {
    groupId = resolvedSearchParams.groupId;
  } else if (Array.isArray(resolvedSearchParams?.groupId)) {
    groupId = resolvedSearchParams.groupId[0];
  }
  
  return <JoinGroup groupId={groupId} />;
}
