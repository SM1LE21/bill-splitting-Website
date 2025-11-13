'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const benefits = [
  {
    title: 'Save Time',
    description: 'No more manual calculations or spreadsheets. ExpenseMate handles all the math instantly.',
  },
  {
    title: 'Avoid Conflicts',
    description: 'Keep friendships intact with clear, transparent expense tracking and fair splitting.',
  },
  {
    title: 'Stay Organized',
    description: 'All your shared expenses in one place, with detailed history and expense breakdowns.',
  },
  {
    title: 'Peace of Mind',
    description: 'Never worry about who paid what or who owes whom. Everything is tracked automatically.',
  },
];

export default function Benefits() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" id="benefits">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2
            className="text-base font-semibold leading-7 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Benefits
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Why choose ExpenseMate?
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-12">
          <motion.div
            className="lg:col-span-5 lg:w-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative w-fit mx-auto">
              {/* Main Phone - Group Summary */}
              <Image
                src="/images/GroupSummary.png"
                alt="ExpenseMate Group Summary"
                width={208}
                height={450}
                className="relative z-0"
              />
              {/* Secondary Phone - Expenses View */}
              <Image
                src="/images/ExpensesView.png"
                alt="ExpenseMate Expenses View"
                width={130}
                height={280}
                className="absolute -right-10 bottom-0 z-10"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-7 lg:flex lg:items-center">
            <dl className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="relative pl-16"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                >
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <div className="h-6 w-2 text-white">{index + 1}</div>
                    </div>
                    {benefit.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-300">{benefit.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 