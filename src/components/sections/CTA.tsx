'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

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
            className="mx-auto max-w-2xl px-12" 
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start Splitting Bills Today
              <br />
              <span className="text-primary">No More Awkward Money Talks</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join thousands of happy users who have simplified their shared expenses. Download the app now and experience stress-free bill splitting.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-x-6">
              <motion.div
                whileHover={{ scale: 1 }}
                className="w-full sm:w-auto"
              >
                {/* Original iOS button - uncomment when available */}
                {/*
                <Link
                  href="#"
                  className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-colors block text-center"
                >
                  Download for iOS
                </Link>
                */}
                
                {/* Coming Soon version */}
                <div
                  className="rounded-full bg-gray-600 px-8 py-4 text-lg font-semibold text-white shadow-sm cursor-not-allowed relative overflow-hidden group block text-center"
                >
                  <span className="opacity-50">Download for iOS</span>
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-gray-700/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    Coming Soon
                  </span>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1 }}
                className="w-full sm:w-auto"
              >
                <div
                  className="rounded-full bg-gray-600 px-8 py-4 text-lg font-semibold text-white shadow-sm cursor-not-allowed relative overflow-hidden group block text-center"
                >
                  <span className="opacity-50">Download for Android</span>
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-gray-700/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    Coming Soon
                  </span>
                </div>
              </motion.div>
            </div>
            
            {/* TODO: Add this back when we have Android support */}
            {/*<div className="mt-8 flex items-center justify-center gap-x-2 text-gray-300">
              <ArrowDownIcon className="h-5 w-5" />
              <span className="text-sm">Available on all major platforms</span>
            </div>*/}

            {/*<motion.div
              className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-col items-center gap-y-2">
                <div className="text-3xl font-bold text-white">100K+</div>
                <div className="text-sm text-gray-300">Active Users</div>
              </div>
              <div className="flex flex-col items-center gap-y-2">
                <div className="text-3xl font-bold text-white">4.8/5</div>
                <div className="text-sm text-gray-300">App Store Rating</div>
              </div>
              <div className="flex flex-col items-center gap-y-2">
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-sm text-gray-300">Bills Split</div>
              </div>
              <div className="flex flex-col items-center gap-y-2">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
            </motion.div>*/}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 