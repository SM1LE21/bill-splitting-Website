'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

type Row = { name: string; free: string; premium: string };

const rows: Row[] = [
  { name: 'Groups', free: 'Up to 2', premium: 'Unlimited' },
  { name: 'Receipt scans', free: '30 / month', premium: 'Unlimited' },
  { name: 'Expense history', free: 'Last 90 days', premium: 'Full history' },
  { name: 'Export reports (PDF & CSV)', free: '—', premium: 'Any period' },
  { name: 'Multi-currency conversion', free: '—', premium: 'Included' },
];

export default function Premium() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40" id="premium">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Premium</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Free for the everyday. Premium when you scale.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to split a bill is free. Go Premium to remove the limits — unlimited
            groups, scans and history, plus report exports and multi-currency conversion.
          </p>
        </motion.div>

        {/* Pricing */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="relative rounded-3xl border-2 border-primary bg-gradient-to-br from-primary/5 to-white p-8 shadow-sm">
            <span className="absolute right-6 top-6 inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
              Save 30%
            </span>
            <h3 className="text-lg font-semibold text-gray-900">Yearly</h3>
            <p className="mt-3 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">€24.99</span>
              <span className="text-sm font-medium text-gray-500">/year</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">Just €2.08 / month — best value.</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Monthly</h3>
            <p className="mt-3 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">€2.99</span>
              <span className="text-sm font-medium text-gray-500">/month</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">Flexible, cancel anytime.</p>
          </div>
        </div>

        {/* Free vs Premium comparison */}
        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-gray-200">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-gray-50 text-sm font-semibold text-gray-900">
            <div className="px-5 py-4">What you get</div>
            <div className="px-5 py-4 text-center">Free</div>
            <div className="px-5 py-4 text-center text-primary">Premium</div>
          </div>
          {rows.map((row) => (
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

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-gray-500">
          Premium is an in-app purchase, billed through the App Store — cancel anytime. Already using
          ExpenseMate? As a thank-you, early users keep Premium free — unlimited groups, full
          history, report exports and multi-currency. Receipt scans stay at 30 a month.
        </p>
      </div>
    </div>
  );
}
