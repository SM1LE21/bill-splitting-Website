import {
  CameraIcon,
  SparklesIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Snap a photo',
    description: 'Any receipt — restaurant, grocery store, road-trip gas station.',
    icon: CameraIcon,
  },
  {
    title: 'Automatic itemisation',
    description: 'Every line is recognised and totalled without manual entry.',
    icon: SparklesIcon,
  },
  {
    title: 'Split instantly',
    description: 'Assign items to group members with a few taps — no spreadsheets.',
    icon: CurrencyDollarIcon,
  },
];

export default function AppShowcase() {
  return (
    <div className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Receipt scanning
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From photo to settled, in seconds
          </p>
        </div>

        <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-3 lg:max-w-none">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-start">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <dt className="mt-4 text-base font-semibold leading-7 text-gray-900">
                {step.title}
              </dt>
              <dd className="mt-1 text-base leading-7 text-gray-600">
                {step.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
