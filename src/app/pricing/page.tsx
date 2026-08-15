import { Metadata } from 'next';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/layout/Layout';
import { PREMIUM_ROWS, upgradeUrl } from '@/constants/premiumPlans';

// Canonical is inherited: the root layout sets a relative `./`, so every route already
// publishes a self-referencing canonical. Linked from the footer only — no nav entry.
export const metadata: Metadata = {
  title: 'Pricing — ExpenseMate',
  description:
    'What ExpenseMate costs: a free plan that stays useful, and Premium at €2.99 a month or €24.99 a year, VAT included, on the iPhone or in your browser.',
};

const freeIncludes = [
  'Splitting bills and settling up, with as many people as you like',
  'Scanning and itemising receipts, 30 scans a month',
  'Creating up to two groups, and joining any number you are invited to',
  'Your last 90 days of expenses',
];

const faqs = [
  {
    question: 'Do I need Premium to use ExpenseMate?',
    answer:
      'No. Splitting bills, scanning receipts, itemising them and settling up are all free, and they stay free. The free plan covers two groups you create, any number of groups you are invited to, 30 receipt scans a month and your last 90 days of expenses. Premium removes those limits and adds report exports and multi-currency conversion.',
  },
  {
    question: 'Does Premium bought on the web work in the iPhone app?',
    answer:
      'Yes. It is one subscription on one account. Buy it in the browser and it is active in the iOS app as soon as you sign in with the same account, and the other way round.',
  },
  {
    question: 'How do I cancel?',
    answer:
      'Where you bought it. If you subscribed on the web, manage or cancel it through Stripe/Link at link.com or from the link in the receipt email. If you subscribed in the iOS app, cancel it in Apple’s subscription settings, under Settings → your name → Subscriptions. Either way you keep Premium until the end of the period you have already paid for.',
  },
  {
    question: 'What does "unlimited receipt scans" mean?',
    answer:
      'Unlimited for normal personal use — scan as many of your own receipts as you like, and we do not count them. It is not a bulk document-processing service: automated, scripted or commercial-volume scanning may be limited so the service keeps working for everyone else.',
  },
  {
    question: 'What will appear on my bank statement?',
    answer:
      'For a web purchase, LINK.COM* — Link is the consumer brand of Stripe, which sells and bills the web subscription as merchant of record and handles VAT. It is not a duplicate charge. A purchase made in the iOS app is billed by Apple and appears as an App Store charge.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function Pricing() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to split a bill is free, and stays free. Premium is for when
              you outgrow the limits — unlimited groups, scans and history, plus report exports
              and multi-currency conversion.
            </p>
          </div>

          {/* Plans */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative rounded-3xl border-2 border-primary bg-gradient-to-br from-primary/5 to-white p-8 shadow-sm">
              <span className="absolute right-6 top-6 inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
                Save 30%
              </span>
              <h2 className="text-lg font-semibold text-gray-900">Yearly</h2>
              <p className="mt-3 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">€24.99</span>
                <span className="text-sm font-medium text-gray-500">/year</span>
              </p>
              <p className="mt-1 text-sm text-gray-500">Just €2.08 / month — best value.</p>
              <a
                href={upgradeUrl('annual', 'site-pricing')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90"
              >
                Get Premium yearly
              </a>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">Monthly</h2>
              <p className="mt-3 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">€2.99</span>
                <span className="text-sm font-medium text-gray-500">/month</span>
              </p>
              <p className="mt-1 text-sm text-gray-500">Flexible, cancel anytime.</p>
              <a
                href={upgradeUrl('monthly', 'site-pricing')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-colors hover:bg-gray-50"
              >
                Get Premium monthly
              </a>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-gray-500">
            Prices include VAT. Both plans renew automatically until you cancel, and cancelling
            leaves Premium active until the end of the period you have paid for.{' '}
            <strong className="font-medium text-gray-700">It works on your iPhone too:</strong>{' '}
            Premium bought on the web is available in the iOS app as soon as you sign in with the
            same account.
          </p>

          {/* Free vs Premium. Fixed tracks need ~310px, more than a 360px phone leaves, so it scrolls. */}
          <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-gray-200">
            <div className="overflow-x-auto">
              <div className="min-w-[22rem]">
                <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-gray-50 text-sm font-semibold text-gray-900">
                  <div className="px-5 py-4">What you get</div>
                  <div className="px-5 py-4 text-center">Free</div>
                  <div className="px-5 py-4 text-center text-primary">Premium</div>
                </div>
                {PREMIUM_ROWS.map((row) => (
                  <div
                    key={row.name}
                    className="grid grid-cols-[1.4fr_1fr_1fr] border-t border-gray-200 text-sm"
                  >
                    <div className="px-5 py-4 font-medium text-gray-900">{row.name}</div>
                    <div className="px-5 py-4 text-center text-gray-500">{row.free}</div>
                    <div className="flex items-center justify-center gap-1 px-5 py-4 text-center font-medium text-gray-900">
                      <CheckIcon className="h-4 w-4 flex-none text-primary" aria-hidden="true" />
                      {row.premium}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              What the free plan includes
            </h2>
            <ul className="mt-6 space-y-3 text-base leading-7 text-gray-600">
              {freeIncludes.map((item) => (
                <li key={item} className="flex gap-x-3">
                  <CheckIcon className="mt-1.5 h-4 w-4 flex-none text-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Early users keep Premium free as a thank-you — unlimited groups, full history, report
              exports and multi-currency conversion. Receipt scans stay at 30 a month.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Common questions</h2>
            <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200">
              {faqs.map((faq) => (
                <div key={faq.question} className="px-5 py-4">
                  <h3 className="text-base font-semibold text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-gray-500">
              The full terms of the subscription — renewal, cancellation, the 14-day right of
              withdrawal and fair use — are in our{' '}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
