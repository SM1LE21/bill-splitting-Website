'use client';

import { motion } from 'framer-motion';

const roadmapData = [
  {
    phase: "Q3 2025",
    milestone: "Version 1.1 Launch",
    date: "Live by July 2025",
    features: [
      "One-tap sign-in with Google & Apple",
      "Expense Categories + Item-level categories",
      "Multi-language support (German & French)",
      "Various UI/UX improvements and bug fixes"
    ]
  },
  {
    phase: "Q3 2025",
    milestone: "Android App v 1.0",
    date: "Live by August 2025",
    features: [
      "Opens the full ExpenseMate experience to Android",
      "Feature-parity with current iOS"
    ]
  },
  {
    phase: "Q3 2025",
    milestone: "ExpenseMate Web",
    date: "Live by September 2025",
    features: [
      "Browser access for quick expense edits",
      "Perfect for laptops & shared desktops"
    ]
  },
  {
    phase: "Q4 2025",
    milestone: "Version 1.2 Launch",
    date: "Live by December 2025",
    features: [
      "Generate PDF/CSV reports for your groups",
      "Customize your groups with photos and categories",
      "Seamless Excel data import for easy transition",
      "Extended language support (Spanish & Portuguese)",
      "Offline mode for planes & bad Wi-Fi"
    ]
  },
  {
    phase: "Q1 2026",
    milestone: "Personal Space",
    date: "Live by March 2026",
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
    date: "Live by September 2026",
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
            All your expenses, one home. 2025 focuses on universal access and friction-free log-ins.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {roadmapData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex items-center gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {item.milestone}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {item.phase}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{item.date}</p>
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