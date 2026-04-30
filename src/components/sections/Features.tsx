'use client';

import {
  CameraIcon,
  ArrowsRightLeftIcon,
  GlobeEuropeAfricaIcon,
  UserPlusIcon,
  DocumentArrowDownIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'AI receipt scanning',
    description:
      'Snap any receipt and ExpenseMate reads each line, total, and currency. Edit anything before you save.',
    icon: CameraIcon,
  },
  {
    title: 'Smart settlement',
    description:
      'Balances simplify into the fewest payments needed to settle up. No spreadsheet maths required.',
    icon: ArrowsRightLeftIcon,
  },
  {
    title: 'Multi-currency',
    description:
      'Mix euros, dollars, pounds, and more in one trip. Original amounts stay visible after conversion.',
    icon: GlobeEuropeAfricaIcon,
  },
  {
    title: 'Placeholder invites',
    description:
      'Add a friend to a group before they sign up. They claim their seat when they join.',
    icon: UserPlusIcon,
  },
  {
    title: 'Group reports',
    description:
      'Export a clean PDF or CSV of any group, for any period. Share straight from your phone.',
    icon: DocumentArrowDownIcon,
  },
  {
    title: 'Spending insights',
    description:
      'See where the money goes by week, month, quarter, or year, broken down by category and member.',
    icon: ChartPieIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32 lg:py-40" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What ExpenseMate does
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to share expenses without the spreadsheet.
          </p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <dt className="mt-4 text-base font-semibold leading-7 text-gray-900">
                {feature.title}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-center text-sm text-gray-500">
          Available in English, German, French, Spanish, and Portuguese.
        </p>
      </div>
    </div>
  );
}
