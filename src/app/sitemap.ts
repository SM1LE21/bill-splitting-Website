import type { MetadataRoute } from 'next';
import { POLICY_DATES } from '@/constants/policyDates';

const SITE_URL = 'https://expensemate.app';

// Indexable content routes only. /downloads is noindex (Android test builds, iOS-only
// product) and /join is a functional deep-link target, so neither belongs here.
// lastModified is set only where a real date exists — a build-time date would tell
// crawlers every page changed on every deploy.

// Parsed as UTC; a bare local-midnight parse emits the previous day east of Greenwich.
const policyDate = (value: string) => new Date(`${value} UTC`);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    // SEO landing pages, published 2026-08-15. No lastModified: their content tracks
    // Splitwise's own pages and the app's feature set, so no single honest date exists.
    { url: `${SITE_URL}/vs-splitwise`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/export-expenses-excel`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/release-notes`, changeFrequency: 'monthly', priority: 0.6 },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: policyDate(POLICY_DATES.PRIVACY_POLICY),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: policyDate(POLICY_DATES.TERMS_OF_SERVICE),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cookies`,
      lastModified: policyDate(POLICY_DATES.COOKIE_POLICY),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    { url: `${SITE_URL}/legal`, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
