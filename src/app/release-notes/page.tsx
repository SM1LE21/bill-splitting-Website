import { Metadata } from 'next';
import ReleaseNotes from '@/components/sections/ReleaseNotes';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Release Notes - ExpenseMate',
  description: 'Track the evolution of ExpenseMate with our detailed release notes. See what\'s new, what\'s improved, and what\'s been fixed in each version.',
};

export default function ReleaseNotesPage() {
  return (
    <Layout minimal>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
              <HomeIcon className="h-5 w-5 mr-1" aria-hidden="true" />
              Back to ExpenseMate
            </Link>
          </div>
          <ReleaseNotes />
        </div>
      </div>
    </Layout>
  );
} 