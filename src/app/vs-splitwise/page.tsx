import { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { CHECKED_ON, PRO_CHECKED_ON, SOURCES } from '@/constants/comparisonSources';

// PUBLISHED 2026-08-15 by owner decision. The publish gate (noindex until Apple approves
// iOS 1.5.0) was met on 2026-08-12; the Batch D funnel condition is deliberately waived —
// analytics arrive later and indexing is not held for them. Listed in src/app/sitemap.ts.
// Still orphaned on purpose — no nav or footer link — so it is reachable by search, not
// by browsing.
export const metadata: Metadata = {
  title: 'ExpenseMate vs Splitwise — an honest comparison',
  description:
    'A sourced side-by-side comparison of ExpenseMate and Splitwise, including what Splitwise does better and where ExpenseMate falls short.',
};

type Row = { feature: string; mate: string; splitwise: string };

const rows: Row[] = [
  {
    feature: 'Platforms',
    mate: 'iPhone, plus a web app in any browser. No Android app',
    splitwise: 'iPhone, Android and web',
  },
  { feature: 'Adding expenses on the free plan', mate: 'No daily limit', splitwise: 'Up to 4 per day' },
  { feature: 'Ads', mate: 'None', splitwise: 'Pro removes ads' },
  {
    feature: 'Receipt scanning',
    mate: 'Free — 30 per month, on the iPhone and in the browser',
    splitwise: 'Pro only',
  },
  {
    feature: 'Receipt itemisation',
    mate: 'Free, on the iPhone and in the browser',
    splitwise: 'Pro only',
  },
  { feature: 'Multi-currency conversion', mate: 'Premium', splitwise: 'Pro only' },
  { feature: 'Charts and spending breakdowns', mate: 'Free', splitwise: 'Pro only' },
  { feature: 'Expense search', mate: 'Free, within a group', splitwise: 'Pro only' },
  { feature: 'Bank or card import', mate: 'Not offered', splitwise: 'Pro, select countries only' },
  { feature: 'Export to CSV or PDF', mate: 'Premium', splitwise: 'Not listed on their pricing pages' },
  { feature: 'Groups on the free plan', mate: 'Create up to 2, join any number', splitwise: 'Not stated' },
  { feature: 'History on the free plan', mate: 'Last 90 days', splitwise: 'Not stated' },
  {
    feature: 'Price',
    mate: 'Free; Premium €2.99/month or €24.99/year',
    splitwise: 'Not published; the App Store lists tiers from $2.99 to $4.99 and $29.99 to $39.99',
  },
];

const splitwiseStrengths = [
  'It has a full Android app on the Play Store. ExpenseMate does not — there is an iPhone app and a web app that runs in any browser, and nothing native on Android. The web app narrows that gap a long way now that it scans receipts too, and it can be added to an Android home screen, but there is no Play Store listing and no push notifications. For a group where even one person is not on an iPhone, Splitwise is still the lower-friction answer.',
  'It imports transactions from a connected credit or debit card, so expenses can be split from real purchases rather than typed in. ExpenseMate has nothing like it.',
  'It settles up through payment rails — Venmo since 2013, and bank transfers through a Tink/Visa partnership since 2024.',
  'It has expense search, charts and default splits, plus offline mode, recurring expenses and 100+ currencies.',
  'It has been running since 2011 and has roughly 27,000 App Store ratings. Fourteen years of edge cases are already handled, and the people you split with probably already have an account.',
];

const limitations = [
  'The only ExpenseMate app is on iPhone. There is no Android app. The web app at app.expensemate.app runs in any browser and does nearly everything the iPhone app does, receipt scanning included, but it is still a companion rather than a replacement: there are no push notifications, and Premium can only be bought on the iPhone, so a web-only user who wants to lift the free-plan limits has no way to pay.',
  'There is no bank or card import. Expense search works inside a group, but there is no search across all your groups at once.',
  'It is small and young. It is built by one developer, and it has nowhere near the track record Splitwise has.',
  'The free plan lets you create two groups and shows the last 90 days. Joining groups you are invited to is unlimited, but if you organise a lot of separate trips you will hit the group limit.',
  'Receipt scanning is capped at 30 scans a month on the free plan.',
];

// Verbatim from Apple's public review feed for Splitwise, US storefront, sampled 2026-07-31.
const reviews = [
  {
    quote:
      'You can only add 4 expenses per day and you have to watch a 10 second ad each time.',
    author: 'The Real Wavid',
    meta: '1 star, app version 26.7.1',
  },
  {
    quote:
      'there is a daily limit (anywhere between 2-4) on the number of transactions you can add per day as a free user. This is the most basic function of the app--adding expenses.',
    author: 'dootdoot13',
    meta: '1 star, app version 26.6.3',
  },
  {
    quote:
      'Even the most basic, features like simply searching for your own transactions are now trapped behind a paywall.',
    author: 'enguneer',
    meta: '1 star, app version 26.6.3',
  },
];

const faqs = [
  {
    question: 'Is ExpenseMate free?',
    answer:
      'Yes. Splitting bills, scanning receipts (30 per month, on the iPhone or in a browser), joining any number of groups and creating up to two of your own are all free. Premium costs €2.99 a month or €24.99 a year and removes those limits, and adds report export and multi-currency conversion. Premium is bought in the iPhone app.',
  },
  {
    question: 'Does Splitwise limit how many expenses you can add?',
    answer:
      'Yes. Splitwise’s help centre states that free users can add up to 4 expenses each day. Splitwise says the limit exists because it relies on paid subscriptions rather than selling data or running heavy advertising.',
  },
  {
    question: 'Is receipt scanning free in Splitwise?',
    answer:
      'No. Splitwise lists receipt scanning and itemisation as Pro features on both its Pro page and its help centre. In ExpenseMate, scanning and itemisation are on the free plan, capped at 30 scans a month, and they work the same way on the iPhone and in a browser at app.expensemate.app.',
  },
  {
    question: 'Can I use ExpenseMate on Android?',
    answer:
      'There is no Android app, but you are not shut out. The web app at app.expensemate.app works in any browser, including on Android, and it scans and itemises receipts exactly as the iPhone app does, in English, German, French, Spanish or Portuguese. You can add it to your home screen. It is still a companion to the iPhone app rather than a replacement: there are no push notifications, and Premium can only be bought on the iPhone. Splitwise has a full Android app, so for a mixed group it remains the more practical choice.',
  },
  {
    question: 'Can I export shared expenses to Excel?',
    answer:
      'ExpenseMate exports any group as a CSV file, which opens directly in Excel, Numbers or Google Sheets, or as a PDF. Export is a Premium feature.',
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

export default function VsSplitwise() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            ExpenseMate vs Splitwise
          </h1>

          <div className="mt-8 rounded-2xl border-l-4 border-primary bg-primary/5 p-6">
            <p className="text-lg font-semibold text-gray-900">The short answer</p>
            <p className="mt-3">
              If anyone in your group uses Android, Splitwise is still the safer choice.
              There is no ExpenseMate app on Android. An Android user is not shut out —
              the web app at app.expensemate.app runs in any browser, scans receipts, and
              can be added to a home screen — but there is no Play Store listing and no
              push notifications, and for a lot of groups that settles it on its own.
            </p>
            <p className="mt-3">
              If what you actually split is itemised receipts — the weekly shop, a big
              supermarket run, a restaurant bill where nobody had the same thing —
              ExpenseMate scans and itemises them on its free plan, on the iPhone and in
              the browser alike, and Splitwise keeps both behind Pro. Splitwise is the
              broader, older, more widely available product. ExpenseMate is narrower and
              does receipt splitting without a daily cap or ads.
            </p>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Every claim about Splitwise on this page links to a page Splitwise owns or to
            Apple. Nothing here is sourced from third-party blogs. Splitwise&apos;s Pro
            feature list and platform line were last re-read on {PRO_CHECKED_ON}; the App
            Store rating, the purchase tiers and the review sample below are from{' '}
            {CHECKED_ON}.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            At a glance
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 text-left font-semibold text-gray-900">
                  <th className="rounded-tl-xl px-4 py-3">&nbsp;</th>
                  <th className="px-4 py-3">ExpenseMate</th>
                  <th className="rounded-tr-xl px-4 py-3">Splitwise</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature} className="border-t border-gray-200 align-top">
                    <th scope="row" className="px-4 py-3 text-left font-medium text-gray-900">
                      {row.feature}
                    </th>
                    <td className="px-4 py-3 text-gray-700">{row.mate}</td>
                    <td className="px-4 py-3 text-gray-700">{row.splitwise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            What Splitwise does better
          </h2>
          <p className="mt-4">
            Quite a lot, and pretending otherwise would not help you decide.
          </p>
          <ul className="mt-6 space-y-4">
            {splitwiseStrengths.map((item) => (
              <li key={item} className="border-l-2 border-gray-200 pl-4">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            What people say about the free plan
          </h2>
          <p className="mt-4">
            The daily expense limit is the thing Splitwise users write about most. In the
            500 most recent US App Store reviews, sampled on {CHECKED_ON}, 261 were rated
            one or two stars, and 93 of those mentioned the daily limit, ads or the
            paywall. Worth knowing that recent-review samples skew negative by nature —
            people rarely open the App Store to report that something worked.
          </p>
          <div className="mt-6 space-y-6">
            {reviews.map((review) => (
              <figure key={review.author} className="rounded-2xl bg-gray-50 p-5">
                <blockquote className="text-gray-800">&ldquo;{review.quote}&rdquo;</blockquote>
                <figcaption className="mt-2 text-sm text-gray-500">
                  {review.author} — {review.meta}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6">
            Splitwise&apos;s own explanation is worth reading next to those. They say they
            are &ldquo;committed to providing an excellent product&rdquo; without
            &ldquo;selling data to marketers, or blanketing our apps with spammy ads&rdquo;,
            and that they depend on &ldquo;paid subscriptions to support our
            operations&rdquo;. That is a reasonable way to run a business. It is also a
            real constraint on what the free plan can do.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Who each app is for
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Choose Splitwise</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
                <li>Anyone in the group is on Android</li>
                <li>You want recurring expenses or offline access</li>
                <li>You want expenses pulled in from a card</li>
                <li>You settle up through Venmo or bank transfer</li>
                <li>Your friends already use it and have history there</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Choose ExpenseMate</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
                <li>Everyone has an iPhone, or is happy working in a browser</li>
                <li>You split itemised receipts, not just round totals</li>
                <li>You add a lot of expenses at once and dislike a daily cap</li>
                <li>You would rather not see ads</li>
                <li>You want a spreadsheet of the trip at the end</li>
              </ul>
            </div>
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Where ExpenseMate falls short
          </h2>
          <ul className="mt-6 space-y-4">
            {limitations.map((item) => (
              <li key={item} className="border-l-2 border-gray-200 pl-4">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Common questions
          </h2>
          <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="px-5 py-4">
                <h3 className="text-base font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm">
            More detail on the spreadsheet side:{' '}
            <Link href="/export-expenses-excel" className="text-primary hover:underline">
              exporting shared expenses to Excel
            </Link>
            .
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Sources</h2>
          <ul className="mt-6 space-y-2 text-sm">
            {SOURCES.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  className="text-primary hover:underline"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            ExpenseMate is made by TK MEDIA S.à r.l.-S. Splitwise is a product of Splitwise
            Inc. and is not affiliated with us. Figures were correct on {CHECKED_ON}, and
            the Pro feature list on {PRO_CHECKED_ON}; both products change, so check the
            linked pages before relying on any of it.
          </p>
        </div>
      </div>
    </Layout>
  );
}
