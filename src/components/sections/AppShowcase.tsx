'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AppShowcase() {
  return (
    <div className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 lg:items-center">
          {/* App Screenshots */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mx-auto max-w-[320px]">
              {/* Phone Mockup - Main screenshot */}
              <Image
                src="/images/GroupSummary.png"
                alt="ExpenseMate App Interface"
                width={320}
                height={650}
                className="drop-shadow-2xl"
              />
              {/* Floating second screenshot */}
              <div className="absolute -right-20 -bottom-12 w-48">
                <Image
                  src="/images/ExpensesView.png"
                  alt="ExpenseMate Receipt Scanning"
                  width={192}
                  height={380}
                  className="drop-shadow-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Video and Description */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Scan Receipts,<br />Split Instantly
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Just snap a photo of your receipt and watch as ExpenseMate automatically identifies items, 
              calculates splits, and assigns expenses. No more manual entry or confusion about who owes what.
            </p>
            
            {/* Video Demo */}
            <div className="mt-8 relative rounded-2xl overflow-hidden shadow-xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full"
                poster="/images/video-poster.jpg"
              >
                <source src="/videos/receipt-scan-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="#cta"
                className="rounded-full bg-primary px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors inline-flex items-center"
              >
                Try Receipt Scanning
                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 