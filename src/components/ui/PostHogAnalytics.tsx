'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { syncPostHogConsent, trackPageView } from '@/utils/analytics';

export default function PostHogAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const syncAndTrack = () => {
      void syncPostHogConsent().then((enabled) => {
        if (enabled) {
          trackPageView();
        }
      });
    };

    syncAndTrack();
    window.addEventListener('cookieConsentChanged', syncAndTrack);

    return () => {
      window.removeEventListener('cookieConsentChanged', syncAndTrack);
    };
  }, [pathname]);

  return null;
}
