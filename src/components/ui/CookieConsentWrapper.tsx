'use client';

import dynamic from 'next/dynamic';

// Dynamically import the CookieConsent component to ensure it only runs on client-side
const CookieConsent = dynamic(() => import('./CookieConsent'), {
  ssr: false,
});

export default function CookieConsentWrapper() {
  return <CookieConsent />;
} 