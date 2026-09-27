// ISO dates (YYYY-MM-DD); pages show them as DD/MM/YYYY through formatPolicyDate.
export const POLICY_DATES = {
  PRIVACY_POLICY: '2026-09-28',
  COOKIE_POLICY: '2026-08-04',
  TERMS_OF_SERVICE: '2026-09-28'
} as const;

export const formatPolicyDate = (iso: string) => iso.split('-').reverse().join('/');
