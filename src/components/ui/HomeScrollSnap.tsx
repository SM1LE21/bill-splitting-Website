'use client';

import { useEffect } from 'react';

/**
 * Toggles the `snap-home` class on <html> only while the home page is mounted.
 * The actual scroll-snap CSS lives in globals.css, scoped to desktop +
 * prefers-reduced-motion: no-preference.
 */
export default function HomeScrollSnap() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('snap-home');
    return () => {
      root.classList.remove('snap-home');
    };
  }, []);
  return null;
}
