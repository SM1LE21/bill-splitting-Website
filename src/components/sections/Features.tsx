import {
  CalculatorIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  BellIcon,
  CameraIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Smart Bill Splitting',
    description: 'Automatically calculate each person\'s share based on custom rules and percentages.',
    icon: CalculatorIcon,
  },
  {
    name: 'Receipt Scanning',
    description: 'Simply snap a photo of your receipt and let ExpenseMate automatically identify items and calculate splits.',
    icon: CameraIcon,
  },
  {
    name: 'Group Management',
    description: 'Create and manage multiple groups for different occasions or living situations.',
    icon: UserGroupIcon,
  },
  {
    name: 'Expense Tracking',
    description: 'Keep track of all expenses and settlements in one place with detailed history.',
    icon: ChartBarIcon,
  },
  {
    name: 'Real-time Updates',
    description: 'Get instant notifications when expenses are added or bills are settled.',
    icon: BellIcon,
  },
  {
    name: 'Debt Settlement',
    description: 'Simplify debt settlement with automated calculations and payment tracking.',
    icon: CurrencyDollarIcon,
  },
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
            Everything you need to manage shared expenses
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ExpenseMate comes packed with all the tools you need to make expense sharing and tracking effortless.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.name}
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
