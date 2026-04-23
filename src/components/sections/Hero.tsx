'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  CameraIcon,
  SparklesIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const scanSteps = [
  {
    title: 'Snap a photo',
    description: 'Any receipt — restaurant, grocery store, road-trip stop.',
    icon: CameraIcon,
  },
  {
    title: 'Automatic itemisation',
    description: 'Every line is recognised and totalled without manual entry.',
    icon: SparklesIcon,
  },
  {
    title: 'Split instantly',
    description: 'Assign items to group members with a few taps.',
    icon: CurrencyDollarIcon,
  },
];

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      {/* Background: soft primary-tinted gradient + subtle horizontal receipt-line pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-b from-primary/5 via-white to-white"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 28px)',
          color: '#1f2937',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-16">
          {/* Left: headline + copy + CTAs */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Snap the receipt.
              <br />
              <span className="text-primary">We&apos;ll split the rest.</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ExpenseMate scans your receipt, recognises every item, and does the math — so you can stop having awkward money conversations with friends, roommates, and travel buddies.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-x-6 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="#cta"
                className="rounded-full bg-primary w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors text-center"
              >
                Get Started - It&apos;s Free
              </Link>
              <Link
                href="#how-it-works"
                className="text-base sm:text-lg font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: phone + looping receipt-scan demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Decorative scan beam behind the phone */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-24 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-2xl"
            />

            <div className="relative mx-auto max-w-[240px] sm:max-w-[280px]">
              {/* iPhone Frame */}
              <div className="relative rounded-[3rem] overflow-hidden bg-[#1D1D1F] aspect-[9/19.5] shadow-2xl">
                <div className="absolute inset-[3px] rounded-[2.85rem] overflow-hidden border-[6px] border-[#1D1D1F] z-10">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-label="Animated demo: scanning a paper receipt with the ExpenseMate app and splitting the items between group members."
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/images/videoCover.png"
                  >
                    <source src="/videos/receipt-scan-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* Side button */}
                <div className="absolute right-[-14px] top-[120px] w-[3px] h-[30px] bg-[#2A2A2C] rounded-full" />
                {/* Volume buttons */}
                <div className="absolute left-[-14px] top-[100px] w-[3px] h-[30px] bg-[#2A2A2C] rounded-full" />
                <div className="absolute left-[-14px] top-[140px] w-[3px] h-[30px] bg-[#2A2A2C] rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Receipt-scan three-step strip — tightens the narrative instead of a standalone section */}
        <motion.dl
          className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 sm:mt-24 sm:grid-cols-3 lg:mt-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {scanSteps.map((step) => (
            <div
              key={step.title}
              className="flex items-start gap-4 rounded-2xl border border-gray-200/70 bg-white/70 p-5 backdrop-blur"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-base font-semibold leading-6 text-gray-900">
                  {step.title}
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-600">
                  {step.description}
                </dd>
              </div>
            </div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
}
