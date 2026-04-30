import Image from 'next/image';

const screenshots = [
  {
    src: '/images/screenshots/01-receipt-scan.png',
    alt: 'Scanned receipt screen showing the photo, store name, total, currency, payer, and category in the ExpenseMate iOS app.',
  },
  {
    src: '/images/screenshots/02-receipt-split.png',
    alt: 'Receipt items list with split type toggle and per-item amounts in the ExpenseMate iOS app.',
  },
  {
    src: '/images/screenshots/03-balances.png',
    alt: 'Group balances, group stats, and an action centre suggesting a settlement in the ExpenseMate iOS app.',
  },
  {
    src: '/images/screenshots/04-categories.png',
    alt: 'Category picker with recently used categories and grouped icons in the ExpenseMate iOS app.',
  },
  {
    src: '/images/screenshots/05-expenses.png',
    alt: 'Group expense list with daily totals, category chips, and currency-formatted amounts in the ExpenseMate iOS app.',
  },
  {
    src: '/images/screenshots/06-group-list.png',
    alt: 'Group expense feed view tilted into a hero composition for the ExpenseMate iOS app.',
  },
];

export default function AppScreenshots() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40" id="screenshots">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Real screens
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See it in your hand
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Straight from the iOS app, no mockups.
          </p>
        </div>

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {screenshots.map((shot) => (
            <li
              key={shot.src}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={1242}
                height={2688}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                className="h-auto w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
