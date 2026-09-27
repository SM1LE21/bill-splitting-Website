// Pages the iOS app opens in a web view. Apple's rules forbid pointing iOS users at a
// web purchase, so these pages must carry no price, buy button or checkout link.
export const IOS_OPENED_PATHS = ['/privacy', '/terms', '/join'];

export const isIosOpenedPath = (pathname: string | null) =>
  pathname !== null && IOS_OPENED_PATHS.includes(pathname.replace(/\/$/, '') || '/');
