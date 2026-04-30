'use client';

import { useEffect, useRef, useState, type FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ClockIcon,
  HandRaisedIcon,
  ArchiveBoxIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const SCENE_DURATION = 7000;

type Scene = {
  title: string;
  description: string;
  Icon: typeof ClockIcon;
  Visual: FC;
  accent: string;
};

const scenes: Scene[] = [
  {
    title: 'Save time',
    description:
      'No manual calculations, no spreadsheets. ExpenseMate handles the math instantly.',
    Icon: ClockIcon,
    Visual: SaveTimeVisual,
    accent: '#2563EB',
  },
  {
    title: 'Avoid conflicts',
    description:
      'Keep friendships intact with clear, transparent expense tracking and fair splitting.',
    Icon: HandRaisedIcon,
    Visual: AvoidConflictsVisual,
    accent: '#22C55E',
  },
  {
    title: 'Stay organised',
    description:
      'All your shared expenses in one place, with detailed history and category breakdowns.',
    Icon: ArchiveBoxIcon,
    Visual: StayOrganisedVisual,
    accent: '#F59E0B',
  },
  {
    title: 'Peace of mind',
    description:
      'Never worry about who paid what or who owes whom. Everything is tracked automatically.',
    Icon: SparklesIcon,
    Visual: PeaceOfMindVisual,
    accent: '#EC4899',
  },
];

export default function Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.25 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const id = setInterval(() => {
      if (inViewRef.current && !paused) {
        setActiveIndex((i) => (i + 1) % scenes.length);
      }
    }, SCENE_DURATION);
    return () => clearInterval(id);
  }, [paused]);

  const active = scenes[activeIndex];
  const Visual = active.Visual;
  const Icon = active.Icon;

  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40" id="benefits">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Benefits
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why choose ExpenseMate?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Four small things that add up to not arguing about €7 coffees on a trip.
          </p>
        </div>

        <div
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 via-white to-gray-50 sm:aspect-[4/3] lg:aspect-[16/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0 grid grid-rows-[1fr_auto] gap-4 px-6 pb-12 pt-8 sm:px-10 sm:pb-14 sm:pt-10"
              >
                <div className="flex items-center justify-center">
                  <Visual />
                </div>
                <div className="text-center">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${active.accent}1A` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: active.accent }} />
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                      {active.title}
                    </h3>
                  </div>
                  <p className="mx-auto max-w-md text-sm leading-6 text-gray-600 sm:text-base">
                    {active.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              {scenes.map((scene, i) => (
                <button
                  key={scene.title}
                  type="button"
                  aria-label={`Show benefit: ${scene.title}`}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex
                      ? 'w-6 bg-primary'
                      : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SaveTimeVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="relative h-32 w-24 sm:h-40 sm:w-28">
        <div className="absolute inset-0 rounded-md bg-[#F4F1EA] shadow-md">
          <div className="h-2 w-full rounded-t-md bg-gray-800" />
          <div className="px-3 pt-2">
            <p className="text-center text-[8px] font-bold tracking-wide text-gray-700">
              BILLA
            </p>
            <div className="mt-2 space-y-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 1, 1] }}
                  transition={{
                    duration: 1.4,
                    delay: i * 0.25,
                    repeat: Infinity,
                    repeatDelay: 4,
                  }}
                  className="flex items-center justify-between gap-2"
                >
                  <span className="h-1 flex-1 rounded-full bg-gray-700" />
                  <CheckGlyph
                    delay={i * 0.25}
                    accent="#2563EB"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <motion.div
          className="absolute -right-12 top-1/2 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-white shadow-lg sm:-right-14 sm:text-xs"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: -10 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 300 }}
        >
          0:08
        </motion.div>
      </div>
    </div>
  );
}

function CheckGlyph({ delay, accent }: { delay: number; accent: string }) {
  return (
    <motion.svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5 + delay, type: 'spring', stiffness: 400 }}
    >
      <circle cx="4" cy="4" r="4" fill={accent} />
      <path
        d="M2 4l1.5 1.5L6 3"
        stroke="white"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function AvoidConflictsVisual() {
  const people = [
    { letter: 'T', color: '#2563EB', share: '12.40' },
    { letter: 'V', color: '#EC4899', share: '12.40' },
    { letter: 'M', color: '#F59E0B', share: '12.40' },
  ];
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="flex items-center gap-3 sm:gap-6">
        {people.map((person, i) => (
          <motion.div
            key={person.letter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-md sm:h-12 sm:w-12 sm:text-base"
              style={{ backgroundColor: person.color }}
            >
              {person.letter}
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.15 }}
              className="rounded-md bg-white px-1.5 py-0.5 text-[9px] font-semibold tabular-nums text-gray-900 shadow-sm ring-1 ring-gray-200 sm:text-xs"
            >
              {person.share}&nbsp;€
            </motion.span>
          </motion.div>
        ))}
      </div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-1/2 -z-10 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gray-300 to-transparent sm:inset-x-16"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </div>
  );
}

function StayOrganisedVisual() {
  const categories = [
    { name: 'Groceries', color: '#22C55E', total: '142.30' },
    { name: 'Transport', color: '#3B82F6', total: '38.50' },
    { name: 'Restaurants', color: '#F59E0B', total: '264.80' },
    { name: 'Lifestyle', color: '#EC4899', total: '92.10' },
  ];
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12, type: 'spring', stiffness: 300 }}
            className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-gray-200 sm:px-3 sm:py-2"
          >
            <span
              aria-hidden="true"
              className="h-2 w-2 flex-none rounded-full"
              style={{ backgroundColor: cat.color }}
            />
            <span className="text-[10px] font-medium text-gray-900 sm:text-xs">
              {cat.name}
            </span>
            <span className="ml-auto text-[10px] font-semibold tabular-nums text-gray-700 sm:text-xs">
              {cat.total}&nbsp;€
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PeaceOfMindVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="relative flex flex-col items-center gap-3">
        <motion.div
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md ring-1 ring-gray-200"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <CheckSparkle />
          <span className="text-sm font-semibold text-gray-900 sm:text-base">
            Everyone&apos;s squared up
          </span>
        </motion.div>
        <BalanceTicker />
      </div>
    </div>
  );
}

function BalanceTicker() {
  const [value, setValue] = useState(463.92);
  useEffect(() => {
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(463.92 * (1 - eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const settled = value < 0.01;

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-gray-900 px-4 py-3 text-white shadow-lg sm:px-5 sm:py-3.5">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider text-gray-400 sm:text-xs">
          You owe Vera
        </span>
        <span
          className={`text-lg font-bold tabular-nums sm:text-xl ${
            settled ? 'text-[#22C55E]' : 'text-[#FF3B30]'
          }`}
        >
          {value.toFixed(2)}&nbsp;€
        </span>
      </div>
    </div>
  );
}

function CheckSparkle() {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3, type: 'spring', stiffness: 400 }}
    >
      <circle cx="10" cy="10" r="9" fill="#22C55E" />
      <path
        d="M5.5 10.5l3 3 6-6.5"
        stroke="white"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
