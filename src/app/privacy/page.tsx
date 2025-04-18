import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';

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
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="mt-10 max-w-2xl">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">1. Introduction</h2>
            <p className="mt-6">
              Welcome to ExpenseMate (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website at expense.app (regardless of where you visit it from) or use our mobile application, and tell you about your privacy rights and how the law protects you.
            </p>
            <p className="mt-6">
              This privacy policy applies to both our website and mobile application (collectively referred to as &quot;Services&quot;).
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">2. Data Controller</h2>
            <p className="mt-6">
              TK Media is the controller and responsible for your personal data.
            </p>
            <p className="mt-6">
              If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact us at: privacy@expense.app
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
              <li><strong>Direct interactions.</strong> You may give us your Identity, Contact, and Financial Data by filling in forms or by corresponding with us through the Services.</li>
              <li><strong>Automated technologies or interactions.</strong> As you interact with our Services, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.</li>
              <li><strong>Third parties or publicly available sources.</strong> We may receive Technical Data about you from analytics providers such as Google.</li>
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

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">6. Data Processing and Storage</h2>
            <p className="mt-6">
              Your data is processed and stored on Google Cloud infrastructure, which provides robust security measures. We specifically use:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li><strong>Google Cloud Storage (Buckets)</strong> for storing receipt images and other files</li>
              <li><strong>Firebase Authentication</strong> for secure user authentication</li>
              <li><strong>Google Cloud Run</strong> for hosting our API services</li>
              <li><strong>Google Cloud SQL</strong> for database hosting and management</li>
            </ul>
            <p className="mt-6">
              Additionally, receipt images may be processed by Google Gemini and/or OpenAI services to extract data and analyze receipt content. This processing is essential for the core functionality of our application.
            </p>
            <p className="mt-6">
              All data processing and storage is necessary for the functioning of the application and providing the services you request.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">7. Data Security</h2>
            <p className="mt-6">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
            <p className="mt-6">
              We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">8. Data Retention</h2>
            <p className="mt-6">
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
            </p>
            <p className="mt-6">
              To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">9. Your Legal Rights</h2>
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
              You can exercise any of these rights by contacting us at privacy@expense.app. We will respond to all legitimate requests within one month.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">10. Cookies and Tracking</h2>
            <p className="mt-6">
              Our website uses cookies and similar tracking technologies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
            </p>
            <p className="mt-6">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">11. Changes to the Privacy Policy</h2>
            <p className="mt-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
            </p>
            <p className="mt-6">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">12. Contact Us</h2>
            <p className="mt-6">
              If you have any questions about this Privacy Policy, please contact us at privacy@expense.app.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 