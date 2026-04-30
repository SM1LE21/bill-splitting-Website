'use client';

import { motion } from 'framer-motion';
import PhoneFrame from '@/components/ui/PhoneFrame';
import ProductFlowScan from './ProductFlowScan';
import ProductFlowSplit from './ProductFlowSplit';
import ProductFlowSettle from './ProductFlowSettle';

const beats = [
  {
    step: '1. Snap',
    title: 'Photograph any receipt',
    description:
      'AI extracts every item, the total, and the currency. Edit anything before you save.',
    Screen: ProductFlowScan,
  },
  {
    step: '2. Split',
    title: 'Assign each item to a person',
    description:
      'Receipt items, equal split, or custom shares. Whatever the bill needs.',
    Screen: ProductFlowSplit,
  },
  {
    step: '3. Settle',
    title: "Tap settle when you're done",
    description:
      'Balances simplify into the fewest payments needed to close the loop.',
    Screen: ProductFlowSettle,
  },
];

export default function ProductFlow() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40" id="product-flow">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            In the app
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Snap. Split. Settle.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Three screens, one minute, and the bill is split.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-0">
          {beats.map((beat, i) => (
            <motion.div
              key={beat.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <PhoneFrame>
                <beat.Screen />
              </PhoneFrame>
              <div className="mt-8 max-w-xs text-center">
                <p className="text-sm font-semibold text-primary">{beat.step}</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  {beat.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {beat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
