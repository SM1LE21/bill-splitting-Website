import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
import { POLICY_DATES } from '@/constants/policyDates';

export const metadata: Metadata = {
  title: 'Privacy Policy | ExpenseMate',
  description: 'Learn how ExpenseMate handles your personal data and ensures GDPR compliance.',
};

export default function PrivacyPolicy() {
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
          
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-6 text-base leading-8">
            Last updated: {POLICY_DATES.PRIVACY_POLICY}
          </p>

          <div className="mt-10 max-w-2xl">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">1. Introduction</h2>
            <p className="mt-6">
              Welcome to ExpenseMate (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website at expensemate.app (regardless of where you visit it from) or use our mobile application, and tell you about your privacy rights and how the law protects you.
            </p>
            <p className="mt-6">
              This privacy policy applies to both our website and mobile application (collectively referred to as &quot;Services&quot;).
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">2. Data Controller</h2>
            <p className="mt-6">
              The controller responsible for your personal data is:
            </p>
            <div className="mt-4 pl-4 space-y-1">
              <p className="font-semibold text-gray-900">TK MEDIA S.à r.l.-S</p>
              <p>13, In Bedigen</p>
              <p>L-9283 Diekirch, Luxembourg</p>
              <p>RCS Luxembourg: B306819</p>
              <p>Email: <a href="mailto:tun.keltesch@tkmedia.lu" className="text-primary hover:text-primary-dark">tun.keltesch@tkmedia.lu</a></p>
            </div>
            <p className="mt-6">
              For full company details, see our <Link href="/legal" className="text-primary hover:text-primary-dark">Legal Notice</Link>.
            </p>
            <p className="mt-6">
              If you have any questions about this privacy policy, or if you wish to exercise any of your legal rights, please contact us at the email address above.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">3. The Data We Collect</h2>
            <p className="mt-6">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and optionally telephone numbers.</li>
              <li><strong>Financial Data</strong> includes expense records, receipt data, and payment information that you choose to share with the app.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our Services.</li>
              <li><strong>Profile Data</strong> includes your username and password, your preferences, feedback, and survey responses.</li>
              <li><strong>Usage Data</strong> includes information about how you use our Services.</li>
              <li><strong>Image Data</strong> includes photographs of receipts you upload to the application.</li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">4. How We Collect Your Data</h2>
            <p className="mt-6">
              We use different methods to collect data from and about you including through:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li><strong>Direct interactions:</strong> You may give us your Identity, Contact, and Financial Data by filling in forms or by corresponding with us through the Services.</li>
              <li><strong>Automated technologies or interactions:</strong> As you interact with our Services, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.</li>
              <li><strong>Third-party analytics providers:</strong> We use Google Analytics (with your consent) and Vercel Analytics (cookieless, always active) to understand how visitors use our website. Vercel Analytics does not store personal data or set cookies — it collects only aggregated, anonymized metrics such as page views, referrer, device type, and approximate country.</li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">5. How We Use Your Data</h2>
            <p className="mt-6">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            <p className="mt-6">
              We use your data for the following purposes:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>To register you as a new user</li>
              <li>To provide and maintain our Services</li>
              <li>To process and analyze your receipts and expenses</li>
              <li>To improve our Services</li>
              <li>To notify you about changes to our Services</li>
              <li>To allow you to participate in interactive features of our Services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Services</li>
              <li>To monitor the usage of our Services</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">6. Recipients and Sub-Processors</h2>
            <p className="mt-6">
              We do not sell your personal data. We share it only with a limited number of service providers (processors under GDPR Art. 28) who process it on our behalf and under our instructions in order to operate the Services:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Provider</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Purpose</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm text-gray-600">
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Google LLC (Firebase Authentication, Cloud Storage, Cloud Run, Cloud SQL)</td>
                    <td className="px-3 py-4">Authentication, file storage, API hosting, database</td>
                    <td className="px-3 py-4">EU / United States</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Google LLC (Gemini API)</td>
                    <td className="px-3 py-4">Receipt OCR / item extraction</td>
                    <td className="px-3 py-4">United States</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">OpenAI, L.L.C.</td>
                    <td className="px-3 py-4">Receipt OCR / item extraction (fallback)</td>
                    <td className="px-3 py-4">United States</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Vercel Inc.</td>
                    <td className="px-3 py-4">Website hosting and cookieless analytics</td>
                    <td className="px-3 py-4">United States (global edge)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              Receipt image content is sent to OCR providers only for the time needed to extract the data; we do not authorise them to use your content to train their models. We may additionally disclose personal data where required by law, court order, or a legitimate request from a public authority, or where necessary to protect our rights, the safety of our users, or the integrity of the Services.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">7. International Data Transfers</h2>
            <p className="mt-6">
              Some of our sub-processors are established outside the European Economic Area (EEA), notably in the United States. When we transfer your personal data outside the EEA, we ensure an adequate level of protection using one or more of the following safeguards:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>Transfer to providers certified under the <strong>EU–US Data Privacy Framework</strong> (where applicable).</li>
              <li>Standard Contractual Clauses (SCCs) adopted by the European Commission (Decision (EU) 2021/914), supplemented with technical and organisational measures where required.</li>
              <li>For Google services, Google&apos;s published cross-border transfer mechanisms.</li>
            </ul>
            <p className="mt-6">
              You may request a copy of the safeguards in place for a given transfer by contacting us at the email address listed in section 2.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">8. Infrastructure</h2>
            <p className="mt-6">
              Your data is processed and stored on Google Cloud infrastructure. We specifically use <strong>Google Cloud Storage</strong> for receipt images and files, <strong>Firebase Authentication</strong> for sign-in, <strong>Google Cloud Run</strong> for our API services, and <strong>Google Cloud SQL</strong> for the database.
            </p>
            <p className="mt-6">
              Our website is hosted on <strong>Vercel</strong>, which also provides cookieless, privacy-first website analytics. Vercel processes request metadata (such as IP addresses) transiently to derive aggregate country-level statistics. IP addresses are not stored by Vercel Analytics. For more information, see <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">Vercel&apos;s Privacy Policy</a>.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">9. Data Security</h2>
            <p className="mt-6">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
            <p className="mt-6">
              We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">10. Data Retention</h2>
            <p className="mt-6">
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
            </p>
            <p className="mt-6">
              To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">11. Your Legal Rights</h2>
            <p className="mt-6">
              Under the GDPR, you have various rights with respect to our use of your personal data:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li><strong>Access:</strong> You have the right to request a copy of your personal data that we hold.</li>
              <li><strong>Rectification:</strong> You have the right to request that we correct any inaccurate or incomplete personal data.</li>
              <li><strong>Erasure:</strong> You have the right to request that we delete your personal data in certain circumstances.</li>
              <li><strong>Restrict processing:</strong> You have the right to request that we restrict the processing of your personal data in certain circumstances.</li>
              <li><strong>Data portability:</strong> You have the right to request that we provide you with your personal data in a structured, commonly used and machine-readable format.</li>
              <li><strong>Object:</strong> You have the right to object to the processing of your personal data in certain circumstances.</li>
            </ul>
            <p className="mt-6">
              You can exercise any of these rights by contacting us at tun.keltesch@tkmedia.lu. We will respond within one month of receiving your request.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">12. Cookies and Tracking</h2>
            <p className="mt-6">
              Our website uses cookies and similar tracking technologies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
            </p>
            <p className="mt-6">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">13. Changes to the Privacy Policy</h2>
            <p className="mt-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
            </p>
            <p className="mt-6">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">14. Contact Us</h2>
            <p className="mt-6">
              If you have any questions about this Privacy Policy, please contact us at tun.keltesch@tkmedia.lu.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
