'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { getCookieConsent } from '@/utils/cookieConsent';

const GA_ID = 'G-DQMZ01NG9Q';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: 'event' | 'config' | 'js' | 'consent',
      action: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    const updateConsent = () => {
      const { consent } = getCookieConsent();
      const granted = consent === 'all';
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: granted ? 'granted' : 'denied',
          ad_storage: 'denied',
        });
      }
    };

    updateConsent();

    window.addEventListener('cookieConsentChanged', updateConsent);
    return () => window.removeEventListener('cookieConsentChanged', updateConsent);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            wait_for_update: 500
          });
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
