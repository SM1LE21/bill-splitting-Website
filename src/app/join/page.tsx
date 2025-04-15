import { Metadata } from 'next';
import JoinGroup from '@/components/sections/JoinGroup';

export const metadata: Metadata = {
  title: 'Join Group - ExpenseMate',
  description: 'Join an ExpenseMate group to start splitting bills with friends',
};

type PageProps = {
  params?: Record<string, string>;
  searchParams?: {
    groupId?: string | string[];
    // This allows any other additional query parameter without using `any` directly.
    [key: string]: string | string[] | undefined;
  };
};

export default function JoinPage({ searchParams }: PageProps) {
  let groupId: string | null = null;
  if (typeof searchParams?.groupId === 'string') {
    groupId = searchParams.groupId;
  } else if (Array.isArray(searchParams?.groupId)) {
    groupId = searchParams.groupId[0];
  }
  
  return <JoinGroup groupId={groupId} />;
}
