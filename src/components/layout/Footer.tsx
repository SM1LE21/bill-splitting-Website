'use client';

import Link from 'next/link';
import CookieSettingsButton from '@/components/ui/CookieSettingsButton';

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
  { name: 'Downloads', href: '/downloads' },
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

  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        {!minimal ? (
          <>
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
            <nav
              className="flex flex-wrap justify-center gap-x-6 gap-y-3"
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

