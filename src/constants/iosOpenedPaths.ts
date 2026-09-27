// Pages the iOS app opens or links to: no price, checkout link or route to the marketing site.
export const IOS_OPENED_PATHS = ['/privacy', '/terms', '/join', '/legal', '/cookies'];

export const isIosOpenedPath = (pathname: string | null) =>
  pathname !== null && IOS_OPENED_PATHS.includes(pathname.replace(/\/$/, '') || '/');
