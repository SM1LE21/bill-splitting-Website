'use client';

import { motion } from 'framer-motion';

const PEOPLE = [
  { letter: 'T', color: '#007AFF' },
  { letter: 'V', color: '#EC4899' },
  { letter: 'M', color: '#F59E0B' },
];

const items = [
  { name: 'Veg. Schinkenspicker', price: '2.29 €', personIndex: 0 },
  { name: 'ALN Streichcreme', price: '2.59 €', personIndex: 1 },
  { name: 'Red Bull White Edition', price: '1.59 €', personIndex: 0 },
  { name: 'Bagels (4 pack)', price: '3.49 €', personIndex: 2 },
];

export default function ProductFlowSplit() {
  return (
    <div className="flex h-full flex-col bg-[#F2F2F7]">
      <div className="bg-white px-4 pt-2 pb-1.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-[#007AFF]">Cancel</span>
          <span className="text-[12px] font-semibold text-gray-900">
            Scanned Receipt
          </span>
          <span className="w-8" />
        </div>
      </div>

      <div className="flex-1 space-y-2.5 overflow-hidden px-3 pt-3">
        <div className="overflow-hidden rounded-xl bg-white">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-[11px] text-gray-700">Category</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-900">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#22C55E]"
              />
              Groceries
            </span>
          </div>
        </div>

        <div>
          <p className="px-2 pb-1 text-[8px] font-semibold uppercase tracking-wider text-gray-500">
            Split Type
          </p>
          <div className="flex rounded-lg bg-gray-200/80 p-0.5">
            <div className="flex-1 rounded-md bg-white py-1 text-center text-[10px] font-semibold text-gray-900 shadow-sm">
              Receipt Items
            </div>
            <div className="flex-1 py-1 text-center text-[10px] font-medium text-gray-500">
              Equal
            </div>
          </div>
        </div>

        <div>
          <p className="px-2 pb-1 text-[8px] font-semibold uppercase tracking-wider text-gray-500">
            Items
          </p>
          <div className="overflow-hidden rounded-xl bg-white">
            {items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.15 + i * 0.1 }}
                className="flex items-center justify-between border-t border-gray-100 px-3 py-2 first:border-t-0"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <ItemAvatar
                    initialIndex={item.personIndex}
                    cycle={i === 0}
                    delay={i * 0.1}
                  />
                  <span className="truncate text-[10px] text-gray-700">
                    {item.name}
                  </span>
                </div>
                <span className="ml-2 text-[10px] font-semibold tabular-nums text-gray-900">
                  {item.price}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemAvatar({
  initialIndex,
  cycle,
  delay,
}: {
  initialIndex: number;
  cycle: boolean;
  delay: number;
}) {
  const person = PEOPLE[initialIndex];
  if (!cycle) {
    return (
      <span
        className="flex h-4 w-4 flex-none items-center justify-center rounded-full text-[7px] font-bold text-white"
        style={{ backgroundColor: person.color }}
        aria-hidden="true"
      >
        {person.letter}
      </span>
    );
  }
  return (
    <motion.span
      className="flex h-4 w-4 flex-none items-center justify-center rounded-full text-[7px] font-bold text-white"
      animate={{
        backgroundColor: [PEOPLE[0].color, PEOPLE[1].color, PEOPLE[0].color],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      aria-hidden="true"
    >
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        {person.letter}
      </motion.span>
    </motion.span>
  );
}
