// Sources cited on the comparison pages. First-party only: pages Splitwise owns, plus
// Apple. Deliberately no third-party blogs — the category is full of them and they
// contradict each other. Re-check these before changing the date.
export const CHECKED_ON = '31 July 2026';

// Splitwise's Pro feature list and its platform line were re-opened and re-read on this
// date; every Pro-only claim on the comparison page still matched splitwise.com/pro
// verbatim, and splitwise.com still reads "Free for iPhone, Android, and web".
// Deliberately a separate date from CHECKED_ON: the App Store rating count, the in-app
// purchase tiers and the 500-review sample were NOT re-sampled and keep their July date.
export const PRO_CHECKED_ON = '14 August 2026';

export const SOURCES = [
  {
    label: 'Splitwise — Pro features and pricing page',
    url: 'https://www.splitwise.com/pro',
  },
  {
    label: 'Splitwise help centre — What is Splitwise Pro and who can use it? (states the 4 expenses per day free limit)',
    url: 'https://kb.splitwise.com/pro/what-is-splitwise-pro-and-who-can-use-it',
  },
  {
    label: 'Splitwise help centre — Why am I seeing an expense limit?',
    url: 'https://feedback.splitwise.com/knowledgebase/articles/2010350-why-am-i-seeing-an-expense-limit',
  },
  {
    label: 'Splitwise — home page (platform availability)',
    url: 'https://www.splitwise.com/',
  },
  {
    label: 'Splitwise on the App Store (rating, review count and in-app purchase tiers)',
    url: 'https://apps.apple.com/us/app/splitwise/id458023433',
  },
] as const;
