'use client';

import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import CookieSettingsButton from '@/components/ui/CookieSettingsButton';

interface FooterProps {
  minimal?: boolean; // Add minimal prop
}

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Developer Story', href: '#developer-story' },
    // { name: 'Contact', href: '#contact' },
    // { name: 'Testimonials', href: '#testimonials' }, // TODO: Add these when we have them
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: FaTwitter,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: FaLinkedin,
    },
  ],
};

export default function Footer({ minimal = false }: FooterProps) {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        {/* Only show the main navigation menu on non-minimal pages */}
        {!minimal ? (
          <nav className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-12" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
        ) : (
          /* Show the compact navigation links only on minimal pages */
          <div className="flex justify-center space-x-6">
            <Link href="/" className="text-xs leading-5 text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link href="/privacy" className="text-xs leading-5 text-gray-500 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs leading-5 text-gray-500 hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs leading-5 text-gray-500 hover:text-gray-900">
              Cookie Policy
            </Link>
            <CookieSettingsButton />
          </div>
        )}
        
        {/* TODO: Add social links when we have them */}
        {/*<div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>*/}
        
        <p className="mt-6 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} ExpenseMate, All rights reserved.
        </p>
      </div>
    </footer>
  );
} 