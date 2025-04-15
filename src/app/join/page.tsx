import { Metadata } from 'next';
import JoinGroup from '@/components/sections/JoinGroup';

// Define metadata for better SEO
export const metadata: Metadata = {
  title: 'Join Group - ExpenseMate',
  description: 'Join an ExpenseMate group to start splitting bills with friends',
};

// Simple server component that extracts query parameters
export default function JoinPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // Extract the groupId from query parameters
  const groupId = typeof searchParams?.groupId === 'string' 
    ? searchParams.groupId 
    : null;

  // Pass the groupId to the JoinGroup component
  return <JoinGroup groupId={groupId} />;
} 