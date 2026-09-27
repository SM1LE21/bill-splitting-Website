// Pages the iOS app opens in a web view, plus the legal pages their footers link to. Apple's
// rules forbid pointing iOS users at a web purchase, so these pages carry no price, buy
// button, checkout link or route back into the marketing site.
export const IOS_OPENED_PATHS = ['/privacy', '/terms', '/join', '/legal', '/cookies'];

export const isIosOpenedPath = (pathname: string | null) =>
  pathname !== null && IOS_OPENED_PATHS.includes(pathname.replace(/\/$/, '') || '/');
