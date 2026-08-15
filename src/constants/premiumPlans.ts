// Single source of truth for what Free and Premium include — shared by the homepage
// Premium section and /pricing so the two pages cannot drift apart.
export type PremiumRow = { name: string; free: string; premium: string };

export const PREMIUM_ROWS: PremiumRow[] = [
  { name: 'Groups', free: 'Up to 2', premium: 'Unlimited' },
  { name: 'Receipt scans', free: '30 / month', premium: 'Unlimited' },
  { name: 'Expense history', free: 'Last 90 days', premium: 'Full history' },
  { name: 'Export reports (PDF & CSV)', free: '—', premium: 'Any period' },
  { name: 'Multi-currency conversion', free: '—', premium: 'Included' },
];

// Web checkout in the web app; `ref` attributes the click to the surface it came from.
export const upgradeUrl = (plan: 'monthly' | 'annual', ref: string) =>
  `https://app.expensemate.app/upgrade?plan=${plan}&ref=${ref}`;
