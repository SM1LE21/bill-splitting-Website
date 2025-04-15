import { Metadata } from 'next';
import JoinGroup from '@/components/sections/JoinGroup';

// Define metadata for better SEO
export const metadata: Metadata = {
  title: 'Join Group - ExpenseMate',
  description: 'Join an ExpenseMate group to start splitting bills with friends',
};

// Using any type to bypass Vercel's strict type checking
type PageProps = {
  params?: any;
  searchParams?: any;
};

// Simple server component with type assertion to bypass Vercel's type constraints
export default function JoinPage({ searchParams }: PageProps) {
  // Extract the groupId from query parameters
  const groupId = typeof searchParams?.groupId === 'string' 
    ? searchParams.groupId 
    : null;

  // Pass the groupId to the JoinGroup component
  return <JoinGroup groupId={groupId} />;
} 