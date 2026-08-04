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
            <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
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
              Welcome to ExpenseMate (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This privacy policy tells you how we look after your personal data, what your privacy rights are, and how the law protects you. It applies to all three places you can use ExpenseMate:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>our <strong>marketing website</strong> at expensemate.app (regardless of where you visit it from);</li>
              <li>the <strong>ExpenseMate web app</strong> at app.expensemate.app;</li>
              <li>the <strong>ExpenseMate mobile application</strong> for iOS.</li>
            </ul>
            <p className="mt-6">
              We refer to the three together as our &quot;Services&quot;. What we process is not identical across them, so wherever the marketing website, the web app and the mobile app differ — analytics and error reporting in particular — this policy says which one it is describing.
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
              <p>Email: <a href="mailto:contact@tkmedia.lu" className="text-primary hover:text-primary/80">contact@tkmedia.lu</a></p>
            </div>
            <p className="mt-6">
              For full company details, see our <Link href="/legal" className="text-primary hover:text-primary/80">Legal Notice</Link>.
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
              <li><strong>Subscription Data</strong> includes your ExpenseMate Premium subscription status, plan, and renewal or expiry dates, together with the anonymised purchase identifiers we receive from the App Store. Premium is bought and managed in the iOS app; there is no purchase path in the web app, so this data only ever reaches us through the App Store. We never receive or store your card or payment details.</li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">4. How We Collect Your Data</h2>
            <p className="mt-6">
              We use different methods to collect data from and about you including through:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li><strong>Direct interactions:</strong> You may give us your Identity, Contact, and Financial Data by filling in forms or by corresponding with us through the Services.</li>
              <li><strong>Automated technologies or interactions:</strong> As you interact with our Services, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.</li>
              <li><strong>Third-party analytics providers:</strong> On our marketing website we use Google Analytics and PostHog (with your consent) and Vercel Analytics (cookieless, always active) to understand how visitors use the site. Vercel Analytics does not store personal data or set cookies, it collects only aggregated, anonymised metrics such as page views, referrer, device type, and approximate country. In the <strong>web app</strong> we use PostHog only if you accept analytics in the web app&apos;s own banner — nothing is loaded or sent before you answer it. In the <strong>mobile app</strong> we use PostHog to collect product-usage events (for example app opens, receipt scans, and which features you use) so we can understand how the app is used and improve it. This is first-party analytics and is not used to track you across other apps or services.</li>
              <li><strong>Error reporting:</strong> When something goes wrong in the web app, an error report is sent to Sentry so we can find and fix it. Those reports carry the error itself and the page it happened on; we configure them to carry no name, email address, expense description or amount.</li>
              <li><strong>How this is linked to you:</strong> In both the web app and the mobile app, the analytics identifier is your internal ExpenseMate account ID — not your name or email address, but a stable identifier for your account, and the same one our error reports carry. It means your activity on iOS and on the web is counted as one person&apos;s rather than two, and it is why this analytics is linked to you rather than anonymous.</li>
              <li><strong>App Store:</strong> When you buy or manage an ExpenseMate Premium subscription, Apple processes the payment and, via RevenueCat, provides us with your subscription status so we can unlock Premium features for your account.</li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">5. How We Use Your Data &amp; Legal Basis</h2>
            <p className="mt-6">
              We only process your personal data where we have a valid legal basis under the GDPR (Regulation (EU) 2016/679). The table below sets out the purposes for which we process your data and the legal basis we rely on for each.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Purpose</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Data categories</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Legal basis (GDPR Art. 6)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm text-gray-600">
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Creating your account and providing the Services (receipt scanning, expense tracking, group splitting)</td>
                    <td className="px-3 py-4">Identity, Contact, Financial, Image, Profile</td>
                    <td className="px-3 py-4">Performance of a contract, Art. 6(1)(b)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Managing your ExpenseMate Premium subscription and unlocking paid features</td>
                    <td className="px-3 py-4">Subscription, Identity</td>
                    <td className="px-3 py-4">Performance of a contract, Art. 6(1)(b)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Processing receipt images to extract items and amounts (AI-assisted OCR)</td>
                    <td className="px-3 py-4">Image, Financial</td>
                    <td className="px-3 py-4">Performance of a contract, Art. 6(1)(b)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Securing the Services, detecting fraud and abuse, and maintaining system integrity</td>
                    <td className="px-3 py-4">Technical, Usage</td>
                    <td className="px-3 py-4">Legitimate interests, Art. 6(1)(f) (running a secure service)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Marketing-website analytics and product improvement, on expensemate.app (Google Analytics and PostHog)</td>
                    <td className="px-3 py-4">Technical, Usage</td>
                    <td className="px-3 py-4">Consent, Art. 6(1)(a)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Product analytics in the web app, on app.expensemate.app (PostHog)</td>
                    <td className="px-3 py-4">Usage, Technical, internal account ID</td>
                    <td className="px-3 py-4">Consent, Art. 6(1)(a)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Product analytics in the iOS app, to understand usage and improve it (PostHog)</td>
                    <td className="px-3 py-4">Usage, Technical, internal account ID</td>
                    <td className="px-3 py-4">Legitimate interests, Art. 6(1)(f) (improving our app)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Detecting and diagnosing errors and crashes in the web app (Sentry)</td>
                    <td className="px-3 py-4">Technical, Usage, internal account ID</td>
                    <td className="px-3 py-4">Legitimate interests, Art. 6(1)(f) (keeping the web app working)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Aggregated, cookieless audience measurement (Vercel Analytics)</td>
                    <td className="px-3 py-4">Technical (transient)</td>
                    <td className="px-3 py-4">Legitimate interests, Art. 6(1)(f) (measuring website reach without identifying visitors)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Responding to support requests and legal-rights requests</td>
                    <td className="px-3 py-4">Identity, Contact, any other relevant data</td>
                    <td className="px-3 py-4">Legal obligation, Art. 6(1)(c) and legitimate interests, Art. 6(1)(f)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Complying with accounting, tax and other legal obligations</td>
                    <td className="px-3 py-4">Identity, Contact, Financial (to the extent applicable)</td>
                    <td className="px-3 py-4">Legal obligation, Art. 6(1)(c)</td>
                  </tr>
                </tbody>
              </table>
            </div>

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
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Google LLC (Firebase Authentication, Cloud Storage, Cloud Run)</td>
                    <td className="px-3 py-4">Sign-in, receipt image and file storage, and a compatibility proxy for older app versions</td>
                    <td className="px-3 py-4">EU / United States</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Cloudflare, Inc.</td>
                    <td className="px-3 py-4">Network routing, TLS termination and protection for our API; every request from the apps to our API passes through it</td>
                    <td className="px-3 py-4">United States company, global network</td>
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
                    <td className="px-3 py-4">Hosting for the marketing website and the web app; cookieless analytics on the marketing website only</td>
                    <td className="px-3 py-4">United States (global edge)</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">PostHog Inc.</td>
                    <td className="px-3 py-4">Product analytics for the marketing website, the web app and the mobile app; optional marketing-website session replay only after analytics consent</td>
                    <td className="px-3 py-4">EU Cloud (Frankfurt) / United States company</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Functional Software, Inc. d/b/a Sentry</td>
                    <td className="px-3 py-4">Error and crash reporting for the web app</td>
                    <td className="px-3 py-4">EU region (Frankfurt) / United States company</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">Apple Inc.</td>
                    <td className="px-3 py-4">App Store subscription billing and management</td>
                    <td className="px-3 py-4">United States / Ireland</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 pr-3 sm:pl-0">RevenueCat, Inc.</td>
                    <td className="px-3 py-4">Subscription status and entitlement management</td>
                    <td className="px-3 py-4">United States</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              Receipt image content is sent to OCR providers only for the time needed to extract the data; we do not authorise them to use your content to train their models. We may additionally disclose personal data where required by law, court order, or a legitimate request from a public authority, or where necessary to protect our rights, the safety of our users, or the integrity of the Services.
            </p>
            <p className="mt-6">
              Two points about the last two rows, because they are easy to state loosely. <strong>Cloudflare</strong> routes the traffic between your device and our API rather than storing your expenses: it necessarily sees the connection and its IP address, and it is on the path of every request the apps make. <strong>Sentry&apos;s</strong> ingest endpoint likewise <em>receives</em> your IP address at the network layer, but we configure Sentry not to store it in the error event. Error events do carry your internal ExpenseMate account ID, which is a persistent identifier for your account, so they are personal data even though they contain no name or email address.
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
              To be precise rather than reassuring: <strong>your account and expense data is stored on a server in Luxembourg</strong> (section 8), our PostHog analytics is on PostHog&apos;s EU Cloud, and our Sentry project is on Sentry&apos;s EU region, so error reports are stored in the EEA. We do not claim that everything is hosted in the EU, because it is not — hosting, OCR and subscription management involve the United States providers listed in section 6, and Cloudflare operates a global network. The Location column in that table is the accurate per-provider answer.
            </p>
            <p className="mt-6">
              You may request a copy of the safeguards in place for a given transfer by contacting us at the email address listed in section 2.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">8. Infrastructure</h2>
            <p className="mt-6">
              <strong>Your account and expense data is stored in a PostgreSQL database on a server we operate in Luxembourg.</strong> Our API runs on that same server and is reached at api.expensemate.org through a <strong>Cloudflare Tunnel</strong>, so Cloudflare routes and secures every request the apps make; it does not store your expense data. We use <strong>Google Cloud Storage</strong> for receipt images and files and <strong>Firebase Authentication</strong> for sign-in. <strong>Google Cloud Run</strong> now hosts only a compatibility proxy for older versions of the mobile app; it stopped being our API host, and the Google Cloud SQL database was retired, in April 2026.
            </p>
            <p className="mt-6">
              Our marketing website at expensemate.app and our web app at app.expensemate.app are both hosted on <strong>Vercel</strong>. On the marketing website, Vercel also provides cookieless, privacy-first analytics: it processes request metadata (such as IP addresses) transiently to derive aggregate country-level statistics, and IP addresses are not stored by Vercel Analytics. For more information, see <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Vercel&apos;s Privacy Policy</a>.
            </p>
            <p className="mt-6">
              With your analytics consent, we also use <strong>PostHog</strong> on the marketing website to measure product funnels such as app-store clicks, downloads, and join-link outcomes, and — again only with your consent, given separately in the web app — inside the web app to understand which features are used. We configure PostHog to avoid sending group IDs, expense descriptions or amounts, and session replay is switched off entirely in the web app. In the mobile app, PostHog is used to collect product-usage events tied to your account identifier so we can understand how the app is used and improve it.
            </p>
            <p className="mt-6">
              The web app reports errors to <strong>Sentry</strong>, on Sentry&apos;s EU region, so that crashes we would otherwise never hear about get fixed. We configure it not to store your IP address in the error event and to drop the breadcrumbs that would record what you typed or what the app logged. Reports do carry your internal ExpenseMate account ID, so repeated errors can be recognised as one person&apos;s. Error reporting sets no cookie and is not part of the analytics consent choice — which is why the web app&apos;s banner tells you errors are always reported.
            </p>
            <p className="mt-6">
              ExpenseMate Premium subscriptions are sold and billed by <strong>Apple</strong> through the App Store. We use <strong>RevenueCat</strong> to receive and manage your subscription status so the app can unlock Premium features for your account. We do not receive or store your payment-card details; payment is handled entirely by Apple under its own terms.
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
              We keep your personal data only for as long as reasonably necessary for the purposes set out in section 5, including to meet any legal, regulatory, tax, accounting or reporting requirements. Concretely:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li><strong>Account data (Identity, Contact, Profile):</strong> kept for as long as your account exists. On deletion, identifying fields are removed within 30 days.</li>
              <li><strong>Expense and group data (Financial):</strong> kept while your account is active. When you delete your account, data that is strictly tied to you is deleted, and data that remains linked to shared groups or expenses of other users is <strong>anonymised</strong> (your identity is removed) rather than deleted, so that the expense history of other group members stays intact and the app continues to function correctly.</li>
              <li><strong>Receipt images (Image):</strong> kept while linked to an expense; deleted when you delete the expense, the group, or your account.</li>
              <li><strong>Technical and server logs:</strong> typically kept for up to 90 days for security, debugging, and abuse-prevention purposes.</li>
              <li><strong>Google Analytics data:</strong> retained for 14 months by default at the GA4 level.</li>
              <li><strong>PostHog analytics data:</strong> retained according to the PostHog project retention settings. On the marketing website and in the web app it is only collected after you accept analytics; in the iOS app it is collected to operate and improve the app, and you may object at any time under section 11.</li>
              <li><strong>Error reports (Sentry):</strong> retained for the retention period configured on our Sentry project, after which the events are deleted automatically. They are kept only to diagnose the error they describe.</li>
              <li><strong>Subscription data:</strong> kept while your account exists and for any period required to meet accounting and tax obligations. Payment and card data are handled by Apple, not by us.</li>
              <li><strong>Accounting and tax records:</strong> retained for 10 years in accordance with Luxembourg accounting law where applicable.</li>
            </ul>
            <p className="mt-6">
              Once anonymised, data is no longer considered personal data under the GDPR and may be retained for statistical and operational purposes.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">11. Your Legal Rights</h2>
            <p className="mt-6">
              Under the GDPR, you have the following rights in relation to your personal data:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li><strong>Access</strong> (Art. 15): request a copy of the personal data we hold about you.</li>
              <li><strong>Rectification</strong> (Art. 16): ask us to correct inaccurate or incomplete data.</li>
              <li><strong>Erasure</strong> (Art. 17): ask us to delete your personal data, subject to the anonymisation approach explained in section 10.</li>
              <li><strong>Restriction</strong> (Art. 18): ask us to limit the processing of your data in certain circumstances.</li>
              <li><strong>Portability</strong> (Art. 20): receive your data in a structured, commonly used, machine-readable format.</li>
              <li><strong>Objection</strong> (Art. 21): object to processing based on legitimate interests.</li>
              <li><strong>Withdraw consent</strong> (Art. 7(3)): where processing is based on consent, withdraw it at any time, without affecting the lawfulness of processing carried out before the withdrawal.</li>
            </ul>
            <p className="mt-6">
              Two of these you can exercise yourself, without asking us: <strong>delete your account</strong> in the iOS app under Settings, or in the web app under Settings, subject to the anonymisation approach explained in section 10; and <strong>withdraw analytics consent</strong> in the web app under Settings → Privacy, or on this website through the &quot;Cookie Settings&quot; link in the footer. For anything else, or if you would rather we did it, contact us at <a href="mailto:contact@tkmedia.lu" className="text-primary hover:text-primary/80">contact@tkmedia.lu</a>. We will respond within one month of receiving your request.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">12. Right to Lodge a Complaint</h2>
            <p className="mt-6">
              You have the right to lodge a complaint with a data protection supervisory authority, in particular in the EU Member State of your habitual residence, place of work, or place of the alleged infringement. In Luxembourg, the competent authority is the <strong>Commission nationale pour la protection des données (CNPD)</strong>:
            </p>
            <div className="mt-4 pl-4 space-y-1">
              <p>15, Boulevard du Jazz</p>
              <p>L-4370 Belvaux, Luxembourg</p>
              <p>
                Website:{' '}
                <a href="https://cnpd.public.lu" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                  cnpd.public.lu
                </a>
              </p>
            </div>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">13. Children</h2>
            <p className="mt-6">
              Our Services are not directed at children under 16. Under Luxembourg law, the age of digital consent under GDPR Art. 8 is 16. We do not knowingly collect personal data from children under 16. If you believe a child has provided us with personal data, please contact us and we will take steps to delete it.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">14. Automated Decision-Making</h2>
            <p className="mt-6">
              Receipt OCR uses AI models to extract items and amounts from images. This is purely a data-extraction step; it does not produce decisions that have legal effects on you or similarly significantly affect you within the meaning of GDPR Art. 22. You remain in control of every expense you save in the app.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">15. Cookies and Tracking</h2>
            <p className="mt-6">
              Our marketing website uses cookies and similar tracking technologies to distinguish you from other visitors. This helps us to provide you with a good experience when you browse the site and also allows us to improve it. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
            <p className="mt-6">
              The <strong>web app</strong> at app.expensemate.app works differently: it sets essentially no cookies of its own and instead uses your browser&apos;s <strong>local and session storage</strong> to keep you signed in, to remember your analytics choice, and to remember whether you prefer light or dark. Browser cookie settings do not govern that storage — you clear it by clearing site data for app.expensemate.app — and analytics can be switched off at any time in the web app under Settings → Privacy. Because the marketing website and the web app are separate origins, a choice made on one is not carried over to the other.
            </p>
            <p className="mt-6">
              Our <Link href="/cookies" className="text-primary hover:text-primary/80">Cookie Policy</Link> covers both and lists the individual keys.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">16. Changes to the Privacy Policy</h2>
            <p className="mt-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
            </p>
            <p className="mt-6">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">17. Contact Us</h2>
            <p className="mt-6">
              If you have any questions about this Privacy Policy, please contact us at contact@tkmedia.lu.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
