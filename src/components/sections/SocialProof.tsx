import { StarIcon } from '@heroicons/react/24/solid';

const stats = [
  { value: '400+', label: 'Accounts created' },
  { value: '500+', label: 'Receipts split' },
];

export default function SocialProof() {
  return (
    <div className="border-y border-gray-100 bg-gray-50 py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="text-sm font-medium text-gray-500">
                {stat.label}
              </dt>
              <dd className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
                {stat.value}
              </dd>
            </div>
          ))}
          <div className="text-center">
            <dt className="text-sm font-medium text-gray-500">
              On the App Store
            </dt>
            <dd
              className="mt-1 flex items-center justify-center gap-0.5"
              aria-label="5 out of 5 stars on the App Store"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className="h-8 w-8 text-amber-400"
                  aria-hidden="true"
                />
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
