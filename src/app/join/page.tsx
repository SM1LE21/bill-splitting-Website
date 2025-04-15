import React from 'react';
import { Metadata } from 'next';
import JoinGroup from '@/components/sections/JoinGroup';

// Define metadata for better SEO
export const metadata: Metadata = {
  title: 'Join Group - ExpenseMate',
  description: 'Join an ExpenseMate group to start splitting bills with friends',
};

// In Next.js App Router, searchParams are correctly typed with this interface
interface PageProps {
  params: Record<string, string>;
  searchParams: Record<string, string | string[] | undefined>;
}

export default function JoinPage({ searchParams }: PageProps) {
  // Extract the groupId from query parameters
  const groupId = typeof searchParams.groupId === 'string' 
    ? searchParams.groupId 
    : null;

  // Pass the groupId to the JoinGroup component
  return <JoinGroup groupId={groupId} />;
} 