'use client';

import { Player } from '@remotion/player';
import {
  CalculatorIcon,
  CameraIcon,
  UserGroupIcon,
  ChartBarIcon,
  BellIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import { FeaturesShowcase } from '@/remotion/FeaturesShowcase';
import {
  FEATURES_SHOWCASE_DURATION_FRAMES,
  FEATURES_SHOWCASE_FPS,
  FEATURES_SHOWCASE_HEIGHT,
  FEATURES_SHOWCASE_WIDTH,
} from '@/remotion/Root';

const featureChips = [
  { name: 'Smart Bill Splitting', icon: CalculatorIcon },
  { name: 'Receipt Scanning', icon: CameraIcon },
  { name: 'Group Management', icon: UserGroupIcon },
  { name: 'Expense Tracking', icon: ChartBarIcon },
  { name: 'Real-time Updates', icon: BellIcon },
  { name: 'Debt Settlement', icon: CurrencyDollarIcon },
];

export default function Features() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32 lg:py-40" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need, in twelve seconds
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A video tells more than a thousand words.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          <Player
            component={FeaturesShowcase}
            durationInFrames={FEATURES_SHOWCASE_DURATION_FRAMES}
            fps={FEATURES_SHOWCASE_FPS}
            compositionWidth={FEATURES_SHOWCASE_WIDTH}
            compositionHeight={FEATURES_SHOWCASE_HEIGHT}
            autoPlay
            loop
            controls={false}
            style={{ width: '100%', aspectRatio: '16 / 9' }}
          />
        </div>

        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {featureChips.map((chip) => (
            <li
              key={chip.name}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
            >
              <chip.icon className="h-4 w-4 text-primary" aria-hidden="true" />
              {chip.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
