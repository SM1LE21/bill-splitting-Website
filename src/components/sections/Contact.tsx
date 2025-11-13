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
            Questions or Feedback?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            I&apos;m here to help! Whether you have questions, suggestions, or found a bug - I&apos;d love to hear from you.
          </p>
          <div className="mt-6">
            <a
              href="mailto:tun.keltesch@gmail.com"
              className="inline-flex items-center gap-x-2 rounded-full bg-white px-6 py-3 text-lg font-semibold text-primary ring-1 ring-primary hover:ring-2 transition-all"
            >
              <EnvelopeIcon className="h-5 w-5" />
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 