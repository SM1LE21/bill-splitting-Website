'use client';

import { openCookieSettings } from '@/utils/cookieConsent';

export default function CookieSettingsButton() {
  const handleClick = () => {
    openCookieSettings();
  };

  return (
    <button
      onClick={handleClick}
      className="text-xs leading-5 text-gray-500 hover:text-gray-900 cursor-pointer"
    >
      Cookie Settings
    </button>
  );
} 