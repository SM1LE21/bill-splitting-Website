'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCookieConsent, setCookieConsent } from '@/utils/cookieConsent';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const { consent } = getCookieConsent();
    if (!consent) {
      setShowBanner(true);
    }

    // Add an event listener to handle the user clicking on "Cookie Settings" links elsewhere in the site
    const handleCookieSettingsClick = () => {
      setShowBanner(true);
      setShowOptions(true);
    };
    
    window.addEventListener('openCookieSettings', handleCookieSettingsClick);
    
    return () => {
      window.removeEventListener('openCookieSettings', handleCookieSettingsClick);
    };
  }, []);

  const acceptAll = () => {
    setCookieConsent('all');
    setShowBanner(false);
  };

  const acceptEssential = () => {
    setCookieConsent('essential');
    setShowBanner(false);
  };

  const savePreferences = () => {
    setCookieConsent(analyticsChecked ? 'all' : 'essential');
    setShowBanner(false);
  };

  const openSettings = () => {
    setShowOptions(!showOptions);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-white shadow-lg border-t border-gray-200 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-900">Cookie Consent</h3>
            <p className="mt-1 text-sm text-gray-600">
              We use cookies to analyze our traffic and improve your experience. By clicking &quot;Accept All&quot;, you consent to our use of cookies. Vercel Analytics is always active and cookieless. Read our{' '}
              <Link href="/privacy" className="font-medium text-primary hover:text-primary-dark">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/cookies" className="font-medium text-primary hover:text-primary-dark">
                Cookie Policy
              </Link>{' '}
              to learn more.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={acceptEssential}
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Essential Only
            </button>
            <button
              onClick={openSettings}
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Customize
            </button>
            <button
              onClick={acceptAll}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Accept All
            </button>
          </div>
        </div>
        
        {showOptions && (
          <div className="border-t border-gray-200 pt-4 mt-2">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Cookie Preferences</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="essential"
                    name="essential"
                    type="checkbox"
                    className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                    checked
                    disabled
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="essential" className="font-medium text-gray-700">Essential Cookies</label>
                  <p className="text-gray-500">These cookies are necessary for the website to function properly.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="analytics"
                    name="analytics"
                    type="checkbox"
                    className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                    checked={analyticsChecked}
                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="analytics" className="font-medium text-gray-700">Analytics Cookies (Google Analytics)</label>
                  <p className="text-gray-500">Help us understand how visitors interact with our website. Vercel Analytics is always active and does not use cookies.</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={savePreferences}
                  className="mr-3 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 