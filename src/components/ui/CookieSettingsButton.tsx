'use client';

import { openCookieSettings } from '@/utils/cookieConsent';

interface CookieSettingsButtonProps {
  className?: string;
}

export default function CookieSettingsButton({
  className = 'text-xs leading-5 text-gray-500 hover:text-gray-900 cursor-pointer',
}: CookieSettingsButtonProps) {
  return (
    <button onClick={openCookieSettings} className={className}>
      Cookie Settings
    </button>
  );
}
