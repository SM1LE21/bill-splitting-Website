'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ProductFlowSettle() {
  return (
    <div className="flex h-full flex-col bg-[#F2F2F7]">
      <div className="bg-white px-3 pb-2 pt-2">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-0.5 text-[11px] font-medium text-[#007AFF]">
            <BackChevron />
            Groups
          </span>
          <span className="truncate text-[11px] font-semibold text-gray-900">
            Malaga Vacation
          </span>
          <span className="w-10" />
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden px-3 pt-3">
        <div>
          <p className="px-2 pb-1 text-[8px] font-semibold uppercase tracking-wider text-gray-500">
            Group Balances
          </p>
          <div className="overflow-hidden rounded-xl bg-white">
            <BalanceRow letter="V" color="#EC4899" name="Vera" amount={463.92} positive />
            <BalanceRow letter="T" color="#007AFF" name="Tun" amount={463.92} />
          </div>
        </div>

        <div>
          <p className="px-2 pb-1 text-[8px] font-semibold uppercase tracking-wider text-gray-500">
            Action Center
          </p>
          <div className="overflow-hidden rounded-xl bg-white">
            <div className="flex items-center justify-between gap-2 px-3 py-2.5">
              <div className="min-w-0">
                <p className="text-[10px] font-medium text-gray-900">You owe Vera</p>
                <p className="text-[11px] font-semibold tabular-nums text-[#FF3B30]">
                  <CountUp to={463.92} />
                  &nbsp;€
                </p>
              </div>
              <motion.button
                type="button"
                className="rounded-md bg-[#007AFF] px-3 py-1 text-[10px] font-semibold text-white"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(0, 122, 255, 0.45)',
                    '0 0 0 8px rgba(0, 122, 255, 0)',
                    '0 0 0 0 rgba(0, 122, 255, 0)',
                  ],
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              >
                Settle
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BalanceRow({
  letter,
  color,
  name,
  amount,
  positive = false,
}: {
  letter: string;
  color: string;
  name: string;
  amount: number;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-t border-gray-100 px-3 py-2 first:border-t-0">
      <div className="flex items-center gap-2">
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-bold text-white"
          style={{ backgroundColor: color }}
          aria-hidden="true"
        >
          {letter}
        </span>
        <span className="text-[11px] font-medium text-gray-900">{name}</span>
      </div>
      <span
        className={`text-[11px] font-semibold tabular-nums ${
          positive ? 'text-[#22C55E]' : 'text-[#FF3B30]'
        }`}
      >
        {positive ? '+' : '−'}
        <CountUp to={amount} />
        &nbsp;€
      </span>
    </div>
  );
}

function CountUp({ to, duration = 1.2 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{value.toFixed(2)}</span>;
}

function BackChevron() {
  return (
    <svg
      width="6"
      height="9"
      viewBox="0 0 6 9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M5 1L1.5 4.5 5 8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
