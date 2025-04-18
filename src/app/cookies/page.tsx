import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';

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
            <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark">
              <HomeIcon className="h-5 w-5 mr-1" aria-hidden="true" />
              Back to ExpenseMate
            </Link>
          </div>
          
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cookie Policy</h1>
          <p className="mt-6 text-base leading-8">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="mt-10 max-w-2xl">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">1. Introduction</h2>
            <p className="mt-6">
              This Cookie Policy explains how ExpenseMate (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar technologies on our website at expensemate.app. This policy should be read alongside our <Link href="/privacy" className="text-primary hover:text-primary-dark">Privacy Policy</Link>, which explains how we use personal information.
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
                <strong>Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our website. They help us know which pages are the most and least popular and see how visitors move around the website.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These cookies may be set through our website by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other websites.
              </li>
            </ul>

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
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Stores your cookie consent preference</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1 year</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Essential</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">_ga</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Used by Google Analytics to distinguish users</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2 years</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Analytics</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">_ga_[ID]</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Used by Google Analytics to persist session state</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2 years</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Analytics</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">_fbp</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Used by Facebook to deliver advertisements</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">3 months</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Targeting</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">5. Third-Party Cookies</h2>
            <p className="mt-6">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements, and so on. These cookies may include:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>Google Analytics cookies to analyze website usage</li>
              <li>Google AdSense cookies for advertising purposes</li>
              <li>Facebook Pixel for advertising and retargeting</li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">6. Managing Cookies</h2>
            <p className="mt-6">
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, and from version to version. You can however obtain up-to-date information about blocking and deleting cookies via these links:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">Microsoft Edge</a></li>
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
              Email: tun.keltesch@expensemate.app
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
