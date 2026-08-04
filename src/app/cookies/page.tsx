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
              This Cookie Policy explains how ExpenseMate (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies — including your browser&apos;s <strong>local storage</strong> and <strong>session storage</strong> — on our marketing website at <strong>expensemate.app</strong> and in our web app at <strong>app.expensemate.app</strong>. It should be read alongside our <Link href="/privacy" className="text-primary hover:text-primary/80">Privacy Policy</Link>, which explains how we use personal information.
            </p>
            <p className="mt-6">
              <strong>Nothing non-essential runs until you say so.</strong> On your first visit to either one you are asked, and analytics is loaded only if you accept. You can change your answer at any time — see section 7. Continuing to browse is not taken as consent.
            </p>
            <p className="mt-6">
              The website and the web app are <strong>separate origins with separate storage, so your choice does not carry between them</strong>. Accepting analytics on expensemate.app does not accept it on app.expensemate.app, and you will be asked again there. That is deliberate: neither can read the other&apos;s answer.
            </p>
            <p className="mt-6">
              We do not sell cookie data and we do not use it for advertising. The analytics providers listed in section 5 process it on our behalf and on our instructions.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">2. What Are Cookies?</h2>
            <p className="mt-6">
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies. Persistent cookies remain on your device for a set period specified in the cookie, while session cookies are deleted when you close your browser.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">3. Types of Cookies We Use</h2>
            <p className="mt-6">
              We use the following categories, across the website and the web app:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-4">
              <li>
                <strong>Essential:</strong> necessary for the site or the app to work at all. They cover security, network management, keeping you signed in, remembering the invite you arrived with, and remembering your cookie choice itself. You may block them through your browser settings, but the Services will not work properly without them.
              </li>
              <li>
                <strong>Preferences (functional):</strong> remember a choice you made about how the product looks or behaves. In the web app this is your <strong>Light / Dark / System</strong> appearance setting. It is stored on your device, is never sent to us as an analytics event, and only affects what you see.
              </li>
              <li>
                <strong>Analytics:</strong> let us count visits, understand product funnels, and see which features are used, so we can improve the product. Google Analytics and PostHog require your consent under the GDPR, and are only ever loaded after you give it.
              </li>
            </ul>
            <p className="mt-6">
              We also use <strong>Vercel Analytics</strong> on the marketing website, a cookieless analytics tool that does not set any cookies or store personal identifiers. It collects only aggregated, anonymised data such as page views, referrer, device type, and country (derived transiently from your IP address, which is never stored). Because Vercel Analytics uses no cookies and retains no personal data, it does not require your consent and is always active.
            </p>
            <p className="mt-6">
              <strong>Error monitoring is separate, and is not an analytics category.</strong> When the web app hits an error it sends a report to Sentry so we can fix it. This <strong>sets no cookie and stores nothing on your device</strong>, and it is not part of the analytics choice — it is how we find out that something is broken for someone who will never write to us about it. This is why the web app&apos;s banner tells you that errors are always reported. The reports carry no name, email address, expense description or amount; see our <Link href="/privacy" className="text-primary hover:text-primary/80">Privacy Policy</Link>.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">4. Specific Cookies We Use</h2>
            <p className="mt-6">
              Below is a list of the main cookies and storage keys that we use and what we use them for. Where the row applies to the web app rather than the marketing website, it says so.
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
                    <td className="px-3 py-4 text-sm text-gray-500">Website and web app. Stores your consent choice — essential only, or analytics accepted — in browser localStorage, not as a cookie. Each origin keeps its own</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Until you clear site data</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Essential (local storage)</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">cookieConsentTimestamp</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Website and web app. Records when you made that choice, so we know how old it is</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Until you clear site data</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Essential (local storage)</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">colorSchemePreference</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Web app. Remembers whether you chose System, Light or Dark appearance</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Until you clear site data</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Preferences (local storage)</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">expensemate.pending-invite</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Web app. Holds the group ID from an invite link so that the invite survives signing in or signing up. Cleared once you join</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Until you close the browser tab</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Essential (session storage)</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">firebase:authUser:…</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Web app. Keeps you signed in, set by Firebase Authentication. If you untick &quot;Keep me signed in&quot; it moves to session storage instead, so the session ends when the tab is closed</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Until you sign out or clear site data, or until the tab closes</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Essential (local or session storage)</td>
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
                    <td className="px-3 py-4 text-sm text-gray-500">Website and web app. Used by PostHog to understand funnels and session continuity (only ever set after you accept analytics on that origin)</td>
                    <td className="px-3 py-4 text-sm text-gray-500">According to PostHog project settings</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Analytics</td>
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
              <li><strong>PostHog</strong>, product analytics on both the marketing website and the web app, active only with your consent on that origin. Session replay is optional and off by default on the marketing website, and is <strong>switched off entirely in the web app</strong>. PostHog&apos;s privacy policy applies: <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">posthog.com/privacy</a></li>
              <li><strong>Vercel Analytics</strong>, on the marketing website only. Cookieless, privacy-first analytics that collects only aggregated, anonymised data. No cookies are set and no personal data is stored. Vercel&apos;s privacy policy applies: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">vercel.com/legal/privacy-policy</a></li>
            </ul>
            <p className="mt-6">
              The web app also sends error reports to <strong>Sentry</strong>. It is not an analytics tool, it sets no cookie and stores nothing on your device, so it does not appear in the table above — see section 3 and our <Link href="/privacy" className="text-primary hover:text-primary/80">Privacy Policy</Link>. Sentry&apos;s privacy policy applies: <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">sentry.io/privacy</a>
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">6. Managing Cookies</h2>
            <p className="mt-6">
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version. Note that <strong>browser cookie settings do not govern local or session storage</strong>, which is what the web app mainly uses: to clear that, clear <em>site data</em> for app.expensemate.app in your browser&apos;s settings. You can however obtain up-to-date information about blocking and deleting cookies via these links:
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
              When you first visit either the marketing website or the web app, you are presented with a banner that lets you accept or decline non-essential cookies and analytics. Nothing non-essential runs until you answer it, and — because the two are separate origins — you are asked once on each.
            </p>
            <p className="mt-6">
              You can change your mind at any time:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li><strong>On this website:</strong> the &quot;Cookie Settings&quot; link in the footer.</li>
              <li><strong>In the web app:</strong> <strong>Settings → Privacy</strong>, where analytics can be turned off and back on. The banner itself only reappears if the question has never been answered on that browser, so Settings is the route once you have answered it.</li>
            </ul>

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
