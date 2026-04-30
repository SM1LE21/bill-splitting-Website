import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
import { POLICY_DATES } from '@/constants/policyDates';

export const metadata: Metadata = {
  title: 'Cookie Policy | ExpenseMate',
  description: 'Learn how ExpenseMate uses cookies and tracking technologies.',
};

export default function CookiePolicy() {
  return (
    <Layout minimal>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
              <HomeIcon className="h-5 w-5 mr-1" aria-hidden="true" />
              Back to ExpenseMate
            </Link>
          </div>
          
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cookie Policy</h1>
          <p className="mt-6 text-base leading-8">
            Last updated: {POLICY_DATES.COOKIE_POLICY}
          </p>

          <div className="mt-10 max-w-2xl">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">1. Introduction</h2>
            <p className="mt-6">
              This Cookie Policy explains how ExpenseMate (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies on our website at expensemate.app. This policy should be read alongside our <Link href="/privacy" className="text-primary hover:text-primary/80">Privacy Policy</Link>, which explains how we use personal information.
            </p>
            <p className="mt-6">
              By using our website, you consent to the use of cookies in accordance with this Cookie Policy. If you do not accept the use of cookies, please disable them as explained below or refrain from using our website.
            </p>
            <p className="mt-6">
              We do not share cookie-related data with any third parties; cookies are used solely to provide and improve the Services for you.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">2. What Are Cookies?</h2>
            <p className="mt-6">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies. Persistent cookies remain on your device for a set period specified in the cookie, while session cookies are deleted when you close your browser.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">3. Types of Cookies We Use</h2>
            <p className="mt-6">
              We use the following types of cookies on our website:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-4">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You may disable these by changing your browser settings, but this will affect how the website functions.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> These cookies allow us to count visits, understand product funnels, and improve the performance of our website. Google Analytics and PostHog analytics cookies require your consent under GDPR.
              </li>
            </ul>
            <p className="mt-6">
              We also use <strong>Vercel Analytics</strong>, a cookieless analytics tool that does not set any cookies or store personal identifiers. It collects only aggregated, anonymized data such as page views, referrer, device type, and country (derived transiently from your IP address, which is never stored). Because Vercel Analytics uses no cookies and retains no personal data, it does not require your consent and is always active.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">4. Specific Cookies We Use</h2>
            <p className="mt-6">
              Below is a list of the main cookies that we use and what we use them for:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Cookie Name</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Purpose</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Duration</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">cookieConsent</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Stores your consent preference, stored in browser localStorage, not as a cookie</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Until you clear site data</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Essential (local storage)</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">_ga</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Used by Google Analytics to distinguish users (only set with analytics consent)</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2 years</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Analytics</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">_ga_[ID]</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Used by Google Analytics to persist session state (only set with analytics consent)</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2 years</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Analytics</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">ph_*</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Used by PostHog to understand website funnels and session continuity (only set with analytics consent)</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">According to PostHog project settings</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Analytics</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Vercel Analytics</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Cookieless analytics, collects aggregated page view data with no personal identifiers</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">No cookie set</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Cookieless / Always active</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">5. Third-Party Analytics</h2>
            <p className="mt-6">
              We use the following third-party analytics services:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li><strong>Google Analytics (GA4)</strong>, cookie-based analytics active only with your consent. Google&apos;s privacy policy applies: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">policies.google.com/privacy</a></li>
              <li><strong>PostHog</strong>, product analytics and optional session replay active only with your consent. PostHog&apos;s privacy policy applies: <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">posthog.com/privacy</a></li>
              <li><strong>Vercel Analytics</strong>, cookieless, privacy-first analytics that collects only aggregated, anonymized data. No cookies are set and no personal data is stored. Vercel&apos;s privacy policy applies: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">vercel.com/legal/privacy-policy</a></li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">6. Managing Cookies</h2>
            <p className="mt-6">
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version. You can however obtain up-to-date information about blocking and deleting cookies via these links:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Microsoft Edge</a></li>
            </ul>
            <p className="mt-6">
              Please note that restricting cookies may impact the functionality of our website. For example, you may not be able to access certain areas or features of the site, or your user experience may be diminished.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">7. Your Consent</h2>
            <p className="mt-6">
              When you first visit our website, you will be presented with a cookie banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time by clicking on the &quot;Cookie Settings&quot; link in the footer of our website.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">8. Changes to this Cookie Policy</h2>
            <p className="mt-6">
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated revision date. Please check back periodically to stay informed about our use of cookies.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">9. Contact Us</h2>
            <p className="mt-6">
              If you have any questions or concerns about our use of cookies, please contact us at:
            </p>
            <p className="mt-4">
              Email: <a href="mailto:contact@tkmedia.lu" className="text-primary hover:text-primary/80">contact@tkmedia.lu</a>
            </p>
          </div>
        </div>
      </div> 
    </Layout>
  );
}
