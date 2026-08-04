'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { hasConsent } from '@/utils/cookieConsent';
import { trackEvent } from '@/utils/analytics';

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'About', href: '#developer-story' },
];

// The web app is a separate host. These two entries are permanent: without them a
// visitor who does not own an iPhone has no way to reach the product at all.
const WEB_APP_URL = 'https://app.expensemate.app';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  // The nav points at homepage sections. Off the homepage those anchors do not exist,
  // so link back to the homepage anchor instead of a dead in-page one.
  const sectionHref = (href: string) => (isHome ? href : `/${href}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const trackClick = (elementName: string) => {
    trackEvent('nav_clicked', {
      item: elementName,
    });

    if (typeof window !== 'undefined' && window.gtag && hasConsent('analytics')) {
      window.gtag('event', 'click', {
        'event_category': 'Navigation',
        'event_label': elementName
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    trackClick(targetId);
    setMobileMenuOpen(false);

    // No such section on this page — leave the click alone so the browser follows the
    // href back to the homepage anchor. Swallowing it here is what made the nav dead
    // on every page that is not the homepage.
    if (!element) return;

    e.preventDefault();
    const navbarHeight = 80; // Approximate height of the navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Background: transparent-ish at the top, solid once the user scrolls */}
      <div
        className={`absolute inset-x-0 h-full transition-[background-color,border-color,box-shadow] duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm'
            : 'bg-white/70 backdrop-blur-sm'
        }`}
      />
      
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => trackClick('logo')}>
            <Image 
              src="/images/expensemate1024_light_aalt.png" 
              alt="ExpenseMate Logo" 
              width={32}
              height={32}
              className="rounded-lg" 
            />
            <span className="text-xl font-bold">ExpenseMate</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => {
              setMobileMenuOpen(true);
              trackClick('mobile_menu_open');
            }}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={sectionHref(item.href)}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4 xl:gap-x-6">
          <a
            href={`${WEB_APP_URL}/login`}
            onClick={() => trackClick('web_app_login')}
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
          >
            Log in
          </a>
          <a
            href={WEB_APP_URL}
            onClick={() => trackClick('web_app_open')}
            className="whitespace-nowrap rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            Open web app
          </a>
          <a
            href={sectionHref('#cta')}
            onClick={(e) => {
              handleNavClick(e, '#cta');
              trackClick('get_started_cta');
            }}
            className="whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
          >
            Get Started
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 z-50 w-[75%] overflow-y-auto bg-white sm:max-w-sm shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between p-6">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Image 
                    src="/images/expensemate1024_light_aalt.png" 
                    alt="ExpenseMate Logo" 
                    width={32}
                    height={32}
                    className="rounded-lg" 
                  />
                  <span className="text-xl font-bold">ExpenseMate</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="divide-y divide-gray-500/10">
                  <div className="space-y-2 px-6 pb-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={sectionHref(item.href)}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="px-6 py-6">
                    <a
                      href={sectionHref('#cta')}
                      className="block w-full rounded-full bg-primary px-4 py-2 text-center text-base font-semibold text-white shadow-sm hover:bg-primary/90"
                      onClick={(e) => handleNavClick(e, '#cta')}
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="space-y-3 px-6 py-6">
                    <a
                      href={WEB_APP_URL}
                      className="block w-full rounded-full border border-gray-300 px-4 py-2 text-center text-base font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={() => {
                        trackClick('web_app_open');
                        setMobileMenuOpen(false);
                      }}
                    >
                      Open web app
                    </a>
                    <a
                      href={`${WEB_APP_URL}/login`}
                      className="block rounded-lg px-3 py-2 text-center text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => {
                        trackClick('web_app_login');
                        setMobileMenuOpen(false);
                      }}
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
