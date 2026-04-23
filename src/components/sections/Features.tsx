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
    <div className="bg-white py-24 sm:py-32" id="features">
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
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
