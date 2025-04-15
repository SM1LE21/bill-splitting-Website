'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className="bg-white py-16" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Have Questions?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We&apos;re here to help! Reach out for support or inquiries.
          </p>
          <div className="mt-6">
            <a
              href="mailto:contact@expensemate.com"
              className="inline-flex items-center gap-x-2 rounded-full bg-white px-6 py-3 text-lg font-semibold text-primary ring-1 ring-primary hover:ring-2 transition-all"
            >
              <EnvelopeIcon className="h-5 w-5" />
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 