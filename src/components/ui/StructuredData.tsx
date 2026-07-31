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
  operatingSystem: 'iOS',
  url: SITE_URL,
  description:
    'Snap a photo of your receipt and let ExpenseMate automatically itemise and split expenses with friends, roommates, and travel buddies.',
  image: `${SITE_URL}/images/og-image.jpg`,
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
  // Price of the download itself, which is free. Premium is an in-app purchase and is
  // deliberately not modelled here — an offer price would read as the app's cost.
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
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
