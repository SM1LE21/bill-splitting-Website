import { CheckCircleIcon } from '@heroicons/react/24/solid';

const steps = [
  {
    id: '01',
    name: 'Create a Group',
    description: 'Start by creating a group and inviting your friends, roommates, or travel companions.',
  },
  {
    id: '02',
    name: 'Add Expenses',
    description: 'Add bills and expenses as they occur. Specify who paid and who needs to contribute.',
  },
  {
    id: '03',
    name: 'Split & Settle',
    description: 'The app automatically calculates who owes what. Settle up with just a few taps.',
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white py-24 sm:py-32" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            How It Works
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple steps to split bills
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get started in minutes with ExpenseMate.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-start">
                <div className="rounded-full bg-primary/10 p-2">
                  <CheckCircleIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-gray-900">
                  <span className="text-primary mr-2">{step.id}</span>
                  {step.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{step.description}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 flex justify-center">
            <a
              href="#cta"
              className="rounded-full bg-primary px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
            >
              Start Splitting Bills Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
