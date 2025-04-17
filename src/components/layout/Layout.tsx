'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Component layout: Page structure wrapper
interface LayoutProps {
  children: ReactNode;
  minimal?: boolean; // Add minimal prop for join page
}

export default function Layout({ children, minimal = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {!minimal && <Navbar />}
      <main className="flex-grow w-full">{children}</main>
      <Footer minimal={minimal} />
    </div>
  );
} 