import {
  ClockIcon,
  HandRaisedIcon,
  ArchiveBoxIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const benefits = [
  {
    title: 'Save time',
    description:
      'No manual calculations, no spreadsheets. ExpenseMate handles the math instantly.',
    icon: ClockIcon,
  },
  {
    title: 'Avoid conflicts',
    description:
      'Keep friendships intact with clear, transparent expense tracking and fair splitting.',
    icon: HandRaisedIcon,
  },
  {
    title: 'Stay organised',
    description:
      'All your shared expenses in one place, with detailed history and expense breakdowns.',
    icon: ArchiveBoxIcon,
  },
  {
    title: 'Peace of mind',
    description:
      'Never worry about who paid what or who owes whom. Everything is tracked automatically.',
    icon: SparklesIcon,
  },
];

export default function Benefits() {
  return (
    <div
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32 lg:py-40"
      id="benefits"
    >
      {/* Decorative: abstract receipt silhouettes fading at the edges */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-10 -z-10 h-[320px] w-[220px] opacity-[0.06] text-gray-900"
        viewBox="0 0 220 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 10 H200 V290 L180 310 L160 290 L140 310 L120 290 L100 310 L80 290 L60 310 L40 290 L20 310 Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        {[50, 80, 110, 140, 170, 200, 230].map((y) => (
          <line key={y} x1="40" x2="180" y1={y} y2={y} stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
        ))}
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-10 -z-10 h-[320px] w-[220px] rotate-6 opacity-[0.06] text-gray-900"
        viewBox="0 0 220 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 10 H200 V290 L180 310 L160 290 L140 310 L120 290 L100 310 L80 290 L60 310 L40 290 L20 310 Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        {[50, 80, 110, 140, 170, 200, 230].map((y) => (
          <line key={y} x1="40" x2="180" y1={y} y2={y} stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
        ))}
      </svg>
      {/* Soft radial tint on top of the pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/[0.04] via-transparent to-secondary/[0.04]"
      />

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

        <dl className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </span>
                {benefit.title}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {benefit.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
