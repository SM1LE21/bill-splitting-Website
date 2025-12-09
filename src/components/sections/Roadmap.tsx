'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const roadmapData = [
  {
    phase: "Q2 2025",
    milestone: "Version 1.1 Launch",
    date: "Live by June 2025",
    features: [
      "One-tap sign-in with Google and Apple",
      "Multi-language support (German & French)",
      "Various UI/UX improvements and bug fixes",
      "Better onboarding experience",
    ],
    status: "completed"
  },
  {
    phase: "Q3 2025",
    milestone: "Version 1.2 Launch (iOS only)",
    date: "Live by end of August 2025",
    features: [
      "Extended language support (Spanish & Portuguese)",
      "Improved Group creation and sharing",
      "Expense categories",
      "Automatic currency conversion",
      "Improved Receipt Item management"
    ],
    status: "completed"
  },
  {
    phase: "Q1 2026",
    milestone: "Android App v 1.0",
    date: "Target: February 2026",
    features: [
      "Opens the full ExpenseMate experience to Android",
      "Feature-parity with current iOS"
    ],
    status: "delayed",
    note: "Delayed due to Play Store publication process. Want early access? Join our closed testing team!"
  },
  {
    phase: "Q1 2026",
    milestone: "Version 1.2 for Android",
    date: "Target: March 2026",
    features: [
      "Language support for French, German, Spanish, Portuguese",
      "UX/UI improvements to get close to the iOS app",
      "Improved Group creation and sharing",  
      "Expense categories"
    ]
  },
  {
    phase: "Q1 2026",
    milestone: "Version 1.3 Launch",
    date: "Target: February 2026",
    features: [
      "Group categories",
      "Excel data import for easy transition",
      "Generate PDF/CSV reports for your groups",
      "Placeholder members, invite friends later, claim spots anytime"
    ]
  },
  {
    phase: "Q2 2026",
    milestone: "ExpenseMate Web",
    date: "Target: April 2026",
    features: [
      "Desktop-optimized version with full expense management",
      "Custom dashboards for better overview",
      "Perfect for laptops & shared desktops"
    ]
  },
  {
    phase: "Q2 2026",
    milestone: "Personal Space",
    date: "Target: May 2026",
    features: [
      "Keep track of your personal expenses",
      "Scan feature for quick adding expenses",
      "Unified view of all expenses in one place",
      "Import your existing data from Excel sheets"
    ]
  },
  {
    phase: "Q3 2026",
    milestone: "Work Space",
    date: "Target: July 2026",
    features: [
      "Business-trip tracker with company-card vs personal-money toggle",
      "One-click PDF/CSV expense reports",
      "Still visible inside Personal Space for an all-in-one overview"
    ]
  }
];

export default function Roadmap() {
  return (
    <div className="bg-white py-24 sm:py-32" id="roadmap">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-base font-semibold leading-7 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Roadmap
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Journey Ahead
          </motion.p>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            All your expenses, one home. 2026 brings Android support, web access, and powerful new features.
          </motion.p>
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/release-notes" 
              className="text-sm font-semibold leading-6 text-primary hover:text-primary/80"
            >
              View detailed release notes <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {roadmapData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col rounded-2xl border p-8 shadow-sm hover:shadow-md transition-shadow ${
                  item.status === "completed" 
                    ? "border-green-200 bg-green-50/50" 
                    : item.status === "delayed"
                    ? "border-amber-200 bg-amber-50/50"
                    : "border-gray-200"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex items-center gap-x-4 flex-wrap">
                  <div className="flex items-center gap-x-2">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">
                      {item.milestone}
                    </h3>
                    {item.status === "completed" && (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 whitespace-nowrap">
                        Completed
                      </span>
                    )}
                    {item.status === "delayed" && (
                      <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 whitespace-nowrap">
                        Delayed
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary whitespace-nowrap">
                    {item.phase}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{item.date}</p>
                {item.note && (
                  <div className="mt-3 rounded-lg bg-blue-50 border border-blue-200 p-3">
                    <p className="text-sm text-blue-800">
                      <span className="font-semibold">Note:</span> {item.note}
                    </p>
                    <Link 
                      href="#contact" 
                      className="mt-2 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Contact me to join →
                    </Link>
                  </div>
                )}
                <ul className="mt-4 space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-2 text-sm text-gray-600">
                      <svg className="h-5 w-5 flex-none text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}