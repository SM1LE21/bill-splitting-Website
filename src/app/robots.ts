import type { MetadataRoute } from 'next';

const SITE_URL = 'https://expensemate.app';

// Assistant crawlers are allowed site-wide except /downloads, which offers Android
// test builds while the shipping product is iOS-only. Search crawlers are NOT
// disallowed there — they must be able to fetch the page to read its noindex.
const ASSISTANT_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ASSISTANT_CRAWLERS,
        allow: '/',
        disallow: ['/downloads', '/join'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/join'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
