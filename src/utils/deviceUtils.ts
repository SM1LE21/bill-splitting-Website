/**
 * Utility functions for device detection and URL handling
 */

/**
 * Check if the current device is running iOS
 */
export const isIOS = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

/**
 * Check if the current device is running Android
 */
export const isAndroid = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /android/.test(userAgent);
};

/**
 * Validates if a string is a valid UUID
 */
export const isValidUUID = (uuid: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

/**
 * Creates a deep link for the ExpenseMate app
 */
export const createDeepLink = (groupId: string): string => {
  // For iOS devices, we prefer universal links
  return `https://expensemate.app/join?groupId=${groupId}`;
};

/**
 * Creates a fallback app scheme link
 */
export const createAppSchemeLink = (groupId: string): string => {
  return `expensemate://join?groupId=${groupId}`;
};

/**
 * Returns the App Store URL for ExpenseMate
 */
export const getAppStoreURL = (): string => {
  return 'https://apps.apple.com/lu/app/exepensemate/id6745098337';
};

/**
 * Returns the Google Play Store URL for ExpenseMate
 */
export const getPlayStoreURL = (): string => {
  // TODO: Update this URL when the app is published to Play Store
  return 'https://play.google.com/store/apps/details?id=app.expensemate';
};

/**
 * Creates an Android intent URL for deep linking
 */
export const createAndroidIntentLink = (groupId: string): string => {
  const fallbackUrl = getPlayStoreURL();
  return `intent://join?groupId=${groupId}#Intent;scheme=expensemate;package=app.expensemate;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(fallbackUrl)};end`;
};

/**
 * Creates a simple custom scheme link for Android (same as iOS)
 */
export const createAndroidSchemeLink = (groupId: string): string => {
  return `expensemate://join?groupId=${groupId}`;
};

/**
 * Attempts to redirect to the app with timeout fallback
 */
export const attemptAppRedirect = (
  groupId: string, 
  fallbackFn: () => void, 
  timeout: number = 2000
): void => {
  // Only attempt redirect if not already tried
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('triedRedirect') === '1') {
    fallbackFn();
    return;
  }

  // Add triedRedirect=1 to the URL (without reloading)
  urlParams.set('triedRedirect', '1');
  window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);

  // Choose redirect method based on device
  let redirectUrl: string;
  if (isAndroid()) {
    // Try simple custom scheme first for Android
    redirectUrl = createAndroidSchemeLink(groupId);
  } else {
    // iOS uses custom scheme
    redirectUrl = createAppSchemeLink(groupId);
  }

  const fallbackTimeout = setTimeout(() => {
    fallbackFn();
  }, timeout);

  window.location.href = redirectUrl;

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearTimeout(fallbackTimeout);
    }
  });
}; 