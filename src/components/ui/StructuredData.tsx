const SITE_URL = 'https://expensemate.app';
// ID-only form: canonical, region-neutral (Apple geo-redirects), and immune to slug drift.
const APP_STORE_URL = 'https://apps.apple.com/app/id6745098337';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'TK MEDIA S.à r.l.-S',
  url: SITE_URL,
  logo: `${SITE_URL}/images/expensemate1024_light_aalt.png`,
  email: 'contact@tkmedia.lu',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '13, In Bedigen',
    postalCode: 'L-9283',
    addressLocality: 'Diekirch',
    addressCountry: 'LU',
  },
  sameAs: [APP_STORE_URL],
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'ExpenseMate',
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
};

const application = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ExpenseMate',
  applicationCategory: 'FinanceApplication',
  // The native app is iOS-only; the web app at app.expensemate.app runs anywhere a
  // browser does. schema.org takes a comma-separated list here, and "Android" is
  // deliberately absent — there is no Android app.
  operatingSystem: 'iOS, Web browser',
  browserRequirements: 'Requires a modern browser with JavaScript enabled',
  // Both the iOS app and the web app ship these five. This node is the only
  // machine-readable description of the product anywhere — app.expensemate.app
  // publishes no JSON-LD and is noindex — so nothing else states the languages.
  inLanguage: ['en', 'de', 'fr', 'es', 'pt'],
  url: SITE_URL,
  description:
    'Snap a photo of your receipt and let ExpenseMate automatically itemise and split expenses with friends, roommates, and travel buddies.',
  image: `${SITE_URL}/images/og-image.jpg`,
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
  // Free to use, with Premium at EUR 2.99/month or EUR 24.99/year, VAT included. A bare
  // price of 0 stopped being true when Premium launched, so the range is modelled
  // instead. The offer URL is the web checkout — the other way to buy Premium is inside
  // the iOS app, which has no URL to point at.
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '0',
    highPrice: '24.99',
    offerCount: 3,
    url: 'https://app.expensemate.app/upgrade',
  },
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(application) }}
      />
    </>
  );
}
