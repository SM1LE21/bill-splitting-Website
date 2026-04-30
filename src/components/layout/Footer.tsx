'use client';

import Link from 'next/link';
import { FaApple } from 'react-icons/fa';
import CookieSettingsButton from '@/components/ui/CookieSettingsButton';
import { trackEvent } from '@/utils/analytics';

const APP_STORE_URL = 'https://apps.apple.com/lu/app/exepensemate/id6745098337';

interface FooterProps {
  minimal?: boolean;
}

type FooterLink = { name: string; href: string };

const productLinks: FooterLink[] = [
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Roadmap', href: '#roadmap' },
];

const resourceLinks: FooterLink[] = [
  { name: 'Release Notes', href: '/release-notes' },
];

const legalLinks: FooterLink[] = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Legal Notice', href: '/legal' },
];

const minimalLinks: FooterLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Release Notes', href: '/release-notes' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Legal Notice', href: '/legal' },
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm leading-6 text-gray-600 hover:text-gray-900 whitespace-nowrap"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer({ minimal = false }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const trackAppStoreClick = (location: string) => {
    trackEvent('app_store_clicked', {
      location,
    });
  };

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        {!minimal ? (
          <>
            <div className="mb-12 flex flex-col gap-6 border-b border-gray-200 pb-12 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">Get the app</p>
                <p className="mt-1 text-sm text-gray-600">
                  ExpenseMate is available on iOS. Android is coming soon.
                </p>
              </div>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAppStoreClick('footer')}
                className="inline-flex items-center gap-3 rounded-xl bg-gray-900 px-5 py-3 text-white shadow-sm transition-colors hover:bg-gray-800"
                aria-label="Download ExpenseMate on the App Store"
              >
                <FaApple className="h-7 w-7" aria-hidden="true" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase tracking-wide opacity-80">Download on the</span>
                  <span className="text-lg font-semibold">App Store</span>
                </span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-12">
              <FooterColumn title="Product" links={productLinks} />
              <FooterColumn title="Resources" links={resourceLinks} />
              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
                <ul className="mt-4 space-y-3">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 whitespace-nowrap"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <CookieSettingsButton className="text-sm leading-6 text-gray-600 hover:text-gray-900 whitespace-nowrap cursor-pointer" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-200 pt-8 sm:flex sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-gray-500">
                &copy; {currentYear} ExpenseMate. All rights reserved.
              </p>
              <p className="mt-2 text-xs leading-5 text-gray-400 sm:mt-0">
                Built by{' '}
                <a
                  href="https://www.tkmedia.lu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 underline"
                >
                  TK Media
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center gap-4 border-b border-gray-200 pb-8">
              <p className="text-sm font-semibold text-gray-900">Get the app</p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAppStoreClick('minimal_footer')}
                className="inline-flex items-center gap-3 rounded-xl bg-gray-900 px-5 py-2.5 text-white shadow-sm transition-colors hover:bg-gray-800"
                aria-label="Download ExpenseMate on the App Store"
              >
                <FaApple className="h-6 w-6" aria-hidden="true" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase tracking-wide opacity-80">Download on the</span>
                  <span className="text-base font-semibold">App Store</span>
                </span>
              </a>
              <p className="text-xs text-gray-500">Android coming soon.</p>
            </div>

            <nav
              className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3"
              aria-label="Footer compact"
            >
              {minimalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs leading-5 text-gray-500 hover:text-gray-900 whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
              <CookieSettingsButton className="text-xs leading-5 text-gray-500 hover:text-gray-900 whitespace-nowrap cursor-pointer" />
            </nav>

            <p className="mt-6 text-center text-xs leading-5 text-gray-500">
              &copy; {currentYear} ExpenseMate. All rights reserved.
            </p>
            <p className="mt-2 text-center text-xs leading-5 text-gray-400">
              Built by{' '}
              <a
                href="https://www.tkmedia.lu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 underline"
              >
                TK Media
              </a>
            </p>
          </>
        )}
      </div>
    </footer>
  );
}
