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
  // Replace with actual App Store URL when available
  return 'https://apps.apple.com/app/expensemate/id123456789';
};

/**
 * Attempts to redirect to the app with timeout fallback
 */
export const attemptAppRedirect = (
  groupId: string, 
  fallbackFn: () => void, 
  timeout: number = 2000
): void => {
  // Create both deep link types
  const universalLink = createDeepLink(groupId);
  const appSchemeLink = createAppSchemeLink(groupId);
  
  // Set a timeout for fallback
  const fallbackTimeout = setTimeout(() => {
    fallbackFn();
  }, timeout);
  
  // Try universal link first
  window.location.href = universalLink;
  
  // If universal link fails, try app scheme after a short delay
  setTimeout(() => {
    window.location.href = appSchemeLink;
  }, 100);
  
  // Add a listener for visibility change (if app opens, page will be hidden)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearTimeout(fallbackTimeout);
    }
  });
}; 