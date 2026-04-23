'use client';

import { motion } from 'framer-motion';

export default function AppShowcase() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 lg:items-center">
          {/* App Screenshots */}
          <motion.div
            className="relative order-last lg:order-first"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative mx-auto max-w-[280px] sm:max-w-[320px]">
              {/* iPhone Frame */}
              <div className="relative rounded-[3rem] overflow-hidden bg-[#1D1D1F] aspect-[9/19.5] shadow-2xl">
                {/* Inner bezel */}
                <div className="absolute inset-[3px] rounded-[2.85rem] overflow-hidden border-[6px] border-[#1D1D1F] z-10">
                  {/* Video */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
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

          {/* Description */}
          <motion.div
            className="relative px-4 sm:px-0 order-first lg:order-last"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Scan Receipts,<br />Split Instantly
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Just snap a photo of your receipt and watch as ExpenseMate automatically identifies items and
              calculates splits. Easily assign expenses to group members with a few taps. No more manual entry or confusion about who owes what.
            </p>

            {/* Feature List */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-base text-gray-600">Snap a photo of any receipt</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-base text-gray-600">Automatic item recognition</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-base text-gray-600">Instant cost calculation & splitting</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
} 