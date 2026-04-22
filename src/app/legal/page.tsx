import { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Legal Notice | ExpenseMate',
  description: 'Legal notice and company information for ExpenseMate, operated by TK MEDIA S.à r.l.-S in Luxembourg.',
};

export default function LegalNotice() {
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

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Legal Notice</h1>
          <p className="mt-2 text-sm text-gray-500">Mentions légales</p>

          <div className="mt-10 max-w-2xl">
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Publisher</h2>
            <p className="mt-6">
              This website (expensemate.app) and the ExpenseMate mobile application are published and operated by:
            </p>
            <div className="mt-6 space-y-1">
              <p className="font-semibold text-gray-900">TK MEDIA S.à r.l.-S</p>
              <p>13, In Bedigen</p>
              <p>L-9283 Diekirch</p>
              <p>Luxembourg</p>
            </div>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Company Details</h2>
            <dl className="mt-6 grid grid-cols-1 gap-y-3 sm:grid-cols-3 sm:gap-x-6">
              <dt className="font-medium text-gray-900">Manager</dt>
              <dd className="sm:col-span-2">Tun Keltesch</dd>

              <dt className="font-medium text-gray-900">Legal form</dt>
              <dd className="sm:col-span-2">Société à responsabilité limitée simplifiée (S.à r.l.-S)</dd>

              <dt className="font-medium text-gray-900">RCS Luxembourg</dt>
              <dd className="sm:col-span-2">B306819</dd>

              <dt className="font-medium text-gray-900">Business authorisation</dt>
              <dd className="sm:col-span-2">N° 10191346/0</dd>

              <dt className="font-medium text-gray-900">VAT</dt>
              <dd className="sm:col-span-2">
                Franchise de TVA regime (Art. 57 Loi TVA, Luxembourg) — no VAT is charged. VAT identification number pending attribution.
              </dd>
            </dl>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Contact</h2>
            <p className="mt-6">
              Email:{' '}
              <a href="mailto:tun.keltesch@tkmedia.lu" className="text-primary hover:text-primary-dark">
                tun.keltesch@tkmedia.lu
              </a>
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Publication Director</h2>
            <p className="mt-6">
              Tun Keltesch, in his capacity as manager (gérant) of TK MEDIA S.à r.l.-S.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Hosting</h2>
            <p className="mt-6">
              This website is hosted by <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, United States. See{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                Vercel&apos;s Privacy Policy
              </a>{' '}
              for details.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Supervisory Authority (Data Protection)</h2>
            <p className="mt-6">
              Commission nationale pour la protection des données (CNPD), 15, Boulevard du Jazz, L-4370 Belvaux, Luxembourg —{' '}
              <a href="https://cnpd.public.lu" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                cnpd.public.lu
              </a>
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Intellectual Property</h2>
            <p className="mt-6">
              All content on this website (text, images, logos, code) is the property of TK MEDIA S.à r.l.-S or used with permission. Any reproduction, representation, modification, or adaptation, in whole or in part, without the prior written consent of TK MEDIA S.à r.l.-S is prohibited.
            </p>

            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Applicable Law</h2>
            <p className="mt-6">
              This legal notice is governed by Luxembourg law. Any dispute relating to this website that cannot be resolved amicably falls under the exclusive jurisdiction of the courts of the Grand Duchy of Luxembourg, without prejudice to the mandatory protection of consumers under their country of residence.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
