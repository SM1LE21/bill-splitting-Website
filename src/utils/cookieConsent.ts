type ConsentType = 'essential' | 'all' | null;

export interface CookieConsentState {
  consent: ConsentType;
  timestamp: string | null;
}

/**
 * Get the current cookie consent state
 * @returns The cookie consent state object
 */
export function getCookieConsent(): CookieConsentState {
  if (typeof window === 'undefined') {
    return { consent: null, timestamp: null };
  }

  const consent = localStorage.getItem('cookieConsent') as ConsentType;
  const timestamp = localStorage.getItem('cookieConsentTimestamp');

  return { consent, timestamp };
}

/**
 * Check if the user has given consent for a specific cookie category
 * @param category The cookie category to check
 * @returns Boolean indicating if the user has consented
 */
export function hasConsent(category: 'essential' | 'analytics' | 'marketing'): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const { consent } = getCookieConsent();
  
  // Essential cookies are always allowed if any consent has been given
  if (category === 'essential') {
    return consent !== null;
  }
  
  // Analytics and marketing cookies are only allowed if full consent is given
  return consent === 'all';
}

/**
 * Set the cookie consent preferences
 * @param type The type of consent given
 */
export function setCookieConsent(type: ConsentType): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  if (type === null) {
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookieConsentTimestamp');
  } else {
    localStorage.setItem('cookieConsent', type);
    localStorage.setItem('cookieConsentTimestamp', new Date().toISOString());
  }
  
  window.dispatchEvent(new Event('cookieConsentChanged'));
}

/**
 * Open the cookie settings dialog
 */
export function openCookieSettings(): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  window.dispatchEvent(new Event('openCookieSettings'));
}

/**
 * Clear all cookie consent settings
 */
export function clearCookieConsent(): void {
  setCookieConsent(null);
} 