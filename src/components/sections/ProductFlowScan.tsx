'use client';

import { motion } from 'framer-motion';

const fields = [
  { label: 'Store', value: 'BILLA' },
  { label: 'Total', value: '14.72' },
  { label: 'Currency', value: '€', chevron: true },
  { label: 'Paid By', value: 'Tun', chevron: true },
  { label: 'Category', value: 'Groceries', dot: '#22C55E', chevron: true },
];

export default function ProductFlowScan() {
  return (
    <div className="flex h-full flex-col bg-[#F2F2F7]">
      <div className="bg-white px-4 pt-2">
        <span className="text-[11px] font-medium text-[#007AFF]">Cancel</span>
      </div>
      <div className="bg-white px-4 pb-3 pt-1">
        <h3 className="text-[19px] font-bold leading-tight text-gray-900">
          Scanned Receipt
        </h3>
      </div>

      <div className="flex-1 space-y-1.5 overflow-hidden px-3 pt-3">
        <p className="px-2 text-[8px] font-semibold uppercase tracking-wider text-gray-500">
          Scanned Receipt Details
        </p>
        <div className="overflow-hidden rounded-xl bg-white">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center px-3 py-3"
          >
            <ReceiptPhoto />
          </motion.div>
          {fields.map((field, i) => (
            <motion.div
              key={field.label}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.25 + i * 0.1 }}
              className="flex items-center justify-between border-t border-gray-100 px-3 py-2"
            >
              <span className="text-[11px] text-gray-700">{field.label}</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-900">
                {field.dot && (
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: field.dot }}
                  />
                )}
                {field.value}
                {field.chevron && <Chevron />}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReceiptPhoto() {
  return (
    <div className="relative h-[100px] w-[80px] overflow-hidden rounded-md shadow-sm">
      <svg viewBox="0 0 80 100" className="absolute inset-0 h-full w-full">
        <rect width="80" height="100" rx="2" fill="#F4F1EA" />
        <rect width="80" height="6" fill="#1F2937" />
        <text
          x="40"
          y="20"
          textAnchor="middle"
          fontSize="6"
          fontWeight="700"
          fill="#374151"
          fontFamily="system-ui"
        >
          BILLA
        </text>
        <line
          x1="8"
          y1="28"
          x2="72"
          y2="28"
          stroke="#9CA3AF"
          strokeWidth="0.4"
          strokeDasharray="1 1"
        />
        {[34, 42, 50, 58, 66, 74].map((y) => (
          <g key={y}>
            <line x1="8" y1={y} x2="48" y2={y} stroke="#374151" strokeWidth="0.6" />
            <line x1="56" y1={y} x2="72" y2={y} stroke="#374151" strokeWidth="0.6" />
          </g>
        ))}
        <line
          x1="8"
          y1="80"
          x2="72"
          y2="80"
          stroke="#9CA3AF"
          strokeWidth="0.4"
          strokeDasharray="1 1"
        />
        <text
          x="40"
          y="92"
          textAnchor="middle"
          fontSize="6"
          fontWeight="700"
          fill="#1F2937"
          fontFamily="system-ui"
        >
          14.72 €
        </text>
      </svg>
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 h-[1.5px] bg-[#007AFF]"
        style={{ boxShadow: '0 0 6px rgba(0, 122, 255, 0.7)' }}
        initial={{ top: '0%' }}
        animate={{ top: ['0%', '100%', '0%'] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

function Chevron() {
  return (
    <svg
      width="5"
      height="9"
      viewBox="0 0 5 9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className="text-gray-400"
      aria-hidden="true"
    >
      <path d="M1 1l3 3.5-3 3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
