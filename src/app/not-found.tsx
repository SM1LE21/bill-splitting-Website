import type { Metadata } from 'next';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/layout/Layout';

export const metadata: Metadata = {
  title: 'Page not found | ExpenseMate',
  description: 'The page you are looking for does not exist.',
  robots: 'noindex',
};

export default function NotFound() {
  return (
    <Layout minimal>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-base font-semibold text-primary">404</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Sorry, we couldn&apos;t find that page. The link may be outdated, or the page has moved.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-x-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
            >
              <HomeIcon className="h-5 w-5" />
              Back to ExpenseMate
            </Link>
            <Link
              href="/release-notes"
              className="text-base font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
            >
              Release notes <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
