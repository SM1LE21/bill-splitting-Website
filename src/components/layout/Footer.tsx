'use client';

import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
    // { name: 'Testimonials', href: '#testimonials' }, // TODO: Add these when we have them
    // { name: 'Privacy Policy', href: '/privacy' }, // TODO: Add these when we have them
    // { name: 'Terms', href: '/terms' }, // TODO: Add these when we have them
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

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        {/* TODO: Add social links when we have them */}
        {/*<div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>*/}
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} ExpenseMate, All rights reserved.
        </p>
      </div>
    </footer>
  );
} 