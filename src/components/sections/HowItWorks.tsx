import {
  UsersIcon,
  ReceiptPercentIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    id: '01',
    name: 'Create a group',
    description: 'Invite your friends, roommates, or travel companions in seconds.',
    icon: UsersIcon,
  },
  {
    id: '02',
    name: 'Add expenses',
    description: 'Log bills as they happen — choose who paid and who pitches in.',
    icon: ReceiptPercentIcon,
  },
  {
    id: '03',
    name: 'Split & settle',
    description: 'The app works out who owes what. Tap to settle up and move on.',
    icon: CheckBadgeIcon,
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            How it works
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Three steps. That&apos;s the whole flow.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get a group set up and splitting bills in under a minute.
          </p>
        </div>

        <ol className="relative mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-3">
          {/* Connector line: only on lg, behind the step numbers */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-8 hidden h-px bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30 lg:block"
          />

          {steps.map((step) => (
            <li key={step.id} className="relative flex flex-col items-center text-center">
              {/* Numbered disc */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-8 ring-white">
                <span className="text-xl font-bold">{step.id}</span>
              </div>
              {/* Icon badge pinned to the disc */}
              <div className="absolute left-1/2 top-0 z-20 -translate-x-[calc(50%-28px)] -translate-y-1 rounded-full bg-white p-1 shadow ring-1 ring-gray-200">
                <step.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                {step.name}
              </h3>
              <p className="mt-2 max-w-xs text-base leading-7 text-gray-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-20 flex justify-center">
          <a
            href="#cta"
            className="rounded-full bg-primary px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
          >
            Start splitting bills now
          </a>
        </div>
      </div>
    </div>
  );
}
