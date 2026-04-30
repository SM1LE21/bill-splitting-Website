'use client';

import { getCookieConsent } from '@/utils/cookieConsent';
import { isAndroid, isIOS } from '@/utils/deviceUtils';

type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsProperties = Record<string, AnalyticsValue>;
type PostHogClient = typeof import('posthog-js').default;

export type AnalyticsEventName =
  | 'page_viewed'
  | 'nav_clicked'
  | 'cta_clicked'
  | 'app_store_clicked'
  | 'download_clicked'
  | 'join_page_viewed'
  | 'app_open_attempted'
  | 'app_open_failed'
  | 'qr_displayed';

const SAFE_QUERY_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'ref',
] as const;

let posthogClient: PostHogClient | null = null;
let posthogLoad: Promise<PostHogClient | null> | null = null;

function hasAnalyticsConsent(): boolean {
  return getCookieConsent().consent === 'all';
}

function getDeviceType(): 'ios' | 'android' | 'desktop' {
  if (isIOS()) return 'ios';
  if (isAndroid()) return 'android';
  return 'desktop';
}

function cleanProperties(properties: AnalyticsProperties = {}): AnalyticsProperties {
  const cleaned: AnalyticsProperties = {
    device_type: getDeviceType(),
    site_area: 'website',
  };

  Object.entries(properties).forEach(([key, value]) => {
    if (value !== undefined) {
      cleaned[key] = value;
    }
  });

  return cleaned;
}

function scrubUrl(value: unknown): unknown {
  if (typeof value !== 'string') return value;

  try {
    const url = new URL(value);
    const safeParams = new URLSearchParams();

    SAFE_QUERY_KEYS.forEach((key) => {
      const paramValue = url.searchParams.get(key);
      if (paramValue) {
        safeParams.set(key, paramValue);
      }
    });

    const safeQuery = safeParams.toString();
    return `${url.origin}${url.pathname}${safeQuery ? `?${safeQuery}` : ''}`;
  } catch {
    return value;
  }
}

function getReferrerHost(): string | undefined {
  if (!document.referrer) return undefined;

  try {
    return new URL(document.referrer).hostname;
  } catch {
    return undefined;
  }
}

async function getPostHog(): Promise<PostHogClient | null> {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com';

  if (typeof window === 'undefined' || !key || !hasAnalyticsConsent()) {
    return null;
  }

  if (posthogClient) {
    posthogClient.opt_in_capturing();
    return posthogClient;
  }

  if (!posthogLoad) {
    posthogLoad = import('posthog-js').then(({ default: posthog }) => {
      posthog.init(key, {
        api_host: host,
        autocapture: false,
        capture_pageview: false,
        capture_pageleave: false,
        disable_session_recording: process.env.NEXT_PUBLIC_POSTHOG_SESSION_REPLAY !== 'true',
        mask_all_element_attributes: true,
        mask_all_text: true,
        person_profiles: 'identified_only',
        before_send: (capture) => {
          if (!capture?.properties) return capture;

          return {
            ...capture,
            properties: {
              ...capture.properties,
              $current_url: scrubUrl(capture.properties.$current_url),
              $referrer: scrubUrl(capture.properties.$referrer),
            },
          };
        },
      });

      posthog.opt_in_capturing();
      posthogClient = posthog;
      return posthog;
    });
  }

  return posthogLoad;
}

export function disablePostHog(): void {
  if (!posthogClient) return;

  posthogClient.opt_out_capturing();
  posthogClient.reset();
}

export async function syncPostHogConsent(): Promise<boolean> {
  if (!hasAnalyticsConsent()) {
    disablePostHog();
    return false;
  }

  const posthog = await getPostHog();
  return Boolean(posthog);
}

export function trackEvent(
  eventName: AnalyticsEventName,
  properties: AnalyticsProperties = {}
): void {
  void getPostHog().then((posthog) => {
    posthog?.capture(eventName, cleanProperties(properties));
  });
}

export function trackPageView(): void {
  if (typeof window === 'undefined') return;

  const safeQueryProperties = SAFE_QUERY_KEYS.reduce<AnalyticsProperties>((acc, key) => {
    const value = new URLSearchParams(window.location.search).get(key);
    if (value) {
      acc[key] = value;
    }
    return acc;
  }, {});

  trackEvent('page_viewed', {
    path: window.location.pathname,
    title: document.title,
    referrer_host: getReferrerHost(),
    has_query: window.location.search.length > 0,
    ...safeQueryProperties,
  });
}
