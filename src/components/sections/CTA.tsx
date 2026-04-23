'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const APP_STORE_URL = 'https://apps.apple.com/lu/app/exepensemate/id6745098337';

export default function CTA() {
  return (
    <div className="relative isolate" id="cta">
      <div className="mx-auto max-w-7xl sm:px-6 sm:py-32">
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 text-center shadow-2xl sm:rounded-3xl -mx-4 sm:mx-0">
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl px-6 sm:px-12"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start Splitting Bills Today
              <br />
              <span className="text-primary">No More Awkward Money Talks</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join a growing community of users who are simplifying their shared expenses. Download the app now and experience stress-free bill splitting.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-[220px] items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 text-gray-900 shadow-sm transition-transform hover:scale-[1.02]"
                aria-label="Download ExpenseMate on the App Store"
              >
                <FaApple className="h-7 w-7" aria-hidden="true" />
                <span className="flex flex-col items-start leading-tight text-left">
                  <span className="text-[10px] uppercase tracking-wide opacity-70">Download on the</span>
                  <span className="text-lg font-semibold">App Store</span>
                </span>
              </Link>

              <div
                aria-disabled="true"
                className="inline-flex w-full sm:w-[220px] items-center justify-center gap-3 rounded-xl border border-white/30 bg-transparent px-5 py-3 text-white/70 cursor-not-allowed"
                title="Android version coming soon"
              >
                <FaGooglePlay className="h-7 w-7" aria-hidden="true" />
                <span className="flex flex-col items-start leading-tight text-left">
                  <span className="text-[10px] uppercase tracking-wide opacity-80">Coming soon on</span>
                  <span className="text-lg font-semibold">Google Play</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
