'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { hasConsent } from '@/utils/cookieConsent';

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'How it Works', href: '#how-it-works' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'About', href: '#developer-story' },
  // { name: 'Contact', href: '#contact' },
  //{ name: 'Testimonials', href: '#testimonials' }, // TODO: Add testimonials section when we actually have some
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const trackClick = (elementName: string) => {
    if (typeof window !== 'undefined' && window.gtag && hasConsent('analytics')) {
      window.gtag('event', 'click', {
        'event_category': 'Navigation',
        'event_label': elementName
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 80; // Approximate height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Track the navigation click
      trackClick(targetId);
    }

    // Close mobile menu if open
    setMobileMenuOpen(false);
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#cta"
            onClick={(e) => {
              handleNavClick(e, '#cta');
              trackClick('get_started_cta');
            }}
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
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
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="px-6 py-6">
                    <a
                      href="#cta"
                      className="block w-full rounded-full bg-primary px-4 py-2 text-center text-base font-semibold text-white shadow-sm hover:bg-primary/90"
                      onClick={(e) => handleNavClick(e, '#cta')}
                    >
                      Get Started
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