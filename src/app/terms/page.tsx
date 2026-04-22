import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';
import { POLICY_DATES } from '@/constants/policyDates';

export const metadata: Metadata = {
  title: 'Terms of Service | ExpenseMate',
  description: 'Terms and conditions for using ExpenseMate services.',
};

export default function TermsOfService() {
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

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms of Service</h1>
          <p className="mt-6 text-xl font-semibold text-gray-900">
            Last Updated: {POLICY_DATES.TERMS_OF_SERVICE}
          </p>

          <div className="mt-10 max-w-2xl">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">1. Introduction</h2>
            <p className="mt-6">
              Welcome to ExpenseMate. These Terms of Service (&quot;Terms&quot;) govern your use of our website located at expensemate.app (the &quot;Website&quot;) and our mobile application (the &quot;App&quot;)—together referred to as our &quot;Services.&quot;
            </p>
            <p className="mt-6">
              Please read these Terms carefully before using our Services. By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">2. Who We Are</h2>
            <p className="mt-6">
              ExpenseMate is operated by <strong>TK MEDIA S.à r.l.-S</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a Luxembourg simplified limited liability company with its registered office at 13, In Bedigen, L-9283 Diekirch, Luxembourg, registered with the Luxembourg Trade and Companies Register (RCS) under number B306819.
            </p>
            <p className="mt-6">
              You can reach us at <a href="mailto:contact@tkmedia.lu" className="text-primary hover:text-primary-dark">contact@tkmedia.lu</a>. Full company information is available in our <Link href="/legal" className="text-primary hover:text-primary-dark">Legal Notice</Link>.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">3. Services Description</h2>
            <p className="mt-6">
              ExpenseMate provides tools to help users track, manage, and split expenses with others. Our core features include:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>Receipt scanning and data extraction</li>
              <li>Expense itemization</li>
              <li>Bill splitting among multiple users</li>
              <li>Expense history and tracking</li>
              <li>Group expense management</li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">4. User Accounts</h2>
            <p className="mt-6">
              To use certain features of our Services, you may need to create an account. When you create an account, you agree to:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="mt-6">
              We reserve the right to disable any user account if, in our opinion, you have violated any provision of these Terms.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">5. Intellectual Property</h2>
            <p className="mt-6">
              The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by ExpenseMate, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="mt-6">
              These Terms permit you to use the Services for your personal, non‑commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as follows:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
              <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
              <li>You may print or download one copy of a reasonable number of pages of the Website for your own personal, non‑commercial use and not for further reproduction, publication, or distribution.</li>
              <li>If we provide social media features with certain content, you may take such actions as are enabled by such features.</li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">6. User Content</h2>
            <p className="mt-6">
              Our Services may allow you to upload, submit, store, send or receive content, including receipt images, expense data, and user information (&quot;User Content&quot;). You retain ownership of any intellectual property rights that you hold in that User Content.
            </p>
            <p className="mt-6">
              You grant us a limited, non-exclusive, royalty-free, worldwide licence to <strong>host, store, reproduce, transmit, display and process</strong> your User Content <strong>solely to the extent necessary to operate, secure, maintain and provide the Services to you and to the other users you choose to share it with</strong> (for example, the other members of a group you create or join). We also need this licence to carry out technical operations such as backups, replication between data centres, receipt OCR, and compliance with legal obligations.
            </p>
            <p className="mt-6">
              This licence does not grant us any right to use your User Content for advertising, for training third-party AI models, or to publicly display it outside the Services. It ends when you delete the relevant User Content or your account, subject to the retention and anonymisation rules described in our <Link href="/privacy" className="text-primary hover:text-primary-dark">Privacy Policy</Link>, and subject to copies that may remain in backups for a limited period before being overwritten.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">7. Prohibited Uses</h2>
            <p className="mt-6">
              You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk mail,&quot; &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate ExpenseMate, a ExpenseMate employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Services, or which, as determined by us, may harm ExpenseMate or users of the Services, or expose them to liability.</li>
            </ul>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">8. Data Processing</h2>
            <p className="mt-6">
              We use various Google Cloud services to process and store your data, including:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>Google Cloud Storage (Buckets) for file storage</li>
              <li>Firebase Authentication for user authentication</li>
              <li>Google Cloud Run for hosting our API</li>
              <li>Google Cloud SQL for database management</li>
            </ul>
            <p className="mt-6">
              We do not share your data with any third parties; it remains accessible only by you and is a key element of the Services&apos; functionality.
            </p>
            <p className="mt-6">
              Additionally, we may process your receipt images using Google Gemini and/or OpenAI services for data extraction and analysis.
            </p>
            <p className="mt-6">
              By using our Services, you consent to this data processing as it is necessary for providing the functionality of the application.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">9. Disclaimers</h2>
            <p className="mt-6">
              YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. EXPENSEMATE EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-6">
              EXPENSEMATE MAKES NO WARRANTY THAT (i) THE SERVICES WILL MEET YOUR REQUIREMENTS, (ii) THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (iii) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE, OR (iv) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICES WILL MEET YOUR EXPECTATIONS.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">10. Limitation of Liability</h2>
            <p className="mt-6">
              IN NO EVENT SHALL EXPENSEMATE, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (i) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (ii) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (iii) ANY CONTENT OBTAINED FROM THE SERVICES; AND (iv) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">10a. EU Consumer Rights (Mandatory Law)</h2>
            <p className="mt-6">
              Nothing in sections 9 or 10 shall exclude or limit our liability:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>for death or personal injury caused by our negligence;</li>
              <li>for fraud or fraudulent misrepresentation;</li>
              <li>for gross negligence or wilful misconduct;</li>
              <li>for the breach of any essential obligation of this agreement;</li>
              <li>or for any liability that cannot be excluded or limited under the mandatory law applicable to you, including applicable consumer-protection law in Luxembourg and your country of residence in the EU/EEA.</li>
            </ul>
            <p className="mt-6">
              If you use the Services as a consumer, you benefit from the mandatory protections granted to you by the law of the EU Member State in which you habitually reside, and nothing in these Terms deprives you of those rights.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">11. Changes to Terms</h2>
            <p className="mt-6">
              We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Services thereafter.
            </p>
            <p className="mt-6">
              Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">12. Governing Law</h2>
            <p className="mt-6">
              These Terms shall be governed by and construed in accordance with the laws of Luxembourg, without regard to its conflict of law provisions. If you use the Services as a consumer, this does not deprive you of the mandatory protections granted to you by the law of the EU Member State in which you habitually reside.
            </p>
            <p className="mt-6">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">12a. Online Dispute Resolution</h2>
            <p className="mt-6">
              In accordance with Regulation (EU) No 524/2013, the European Commission provides a platform for online dispute resolution (ODR), available at{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                https://ec.europa.eu/consumers/odr
              </a>
              . We are not obliged and not willing to participate in dispute-resolution proceedings before a consumer arbitration board, but consumers may still use the ODR platform to raise a complaint.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">13. Contact Information</h2>
            <p className="mt-6">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-4 pl-4">
              Email: <a href="mailto:contact@tkmedia.lu" className="text-primary hover:text-primary-dark">contact@tkmedia.lu</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
