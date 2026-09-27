import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { FaApple } from 'react-icons/fa';
import type { JoinLinks } from '@/utils/joinLinks';
import { APP_STORE_URL } from '@/utils/joinLinks';

interface JoinHandoffProps {
  links: JoinLinks;
  /** iOS gets the app first; Android and desktop get the browser first. */
  preferApp: boolean;
}

const PRIMARY =
  'inline-flex w-full items-center justify-center gap-x-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors';
const SECONDARY =
  'inline-flex w-full items-center justify-center gap-x-2 rounded-full border border-gray-300 px-6 py-3 text-base font-semibold text-gray-900 hover:border-primary hover:text-primary transition-colors';

/**
 * Offers the three ways into an invite. It never navigates on its own: a custom-scheme
 * redirect on a device without the app shows a browser error (see expensemate-web
 * src/components/join/open-in-app.tsx).
 */
export default function JoinHandoff({ links, preferApp }: JoinHandoffProps) {
  const { appSchemeUrl, webAppUrl } = links;
  const appFirst = Boolean(appSchemeUrl) && preferApp;

  const openInApp = appSchemeUrl && (
    // A plain <a>: `expensemate://` is not a site route.
    <a href={appSchemeUrl} className={appFirst ? PRIMARY : SECONDARY}>
      <DevicePhoneMobileIcon className="h-5 w-5" aria-hidden />
      Open in the ExpenseMate app
    </a>
  );

  const inBrowser = (
    <a href={webAppUrl} className={appFirst ? SECONDARY : PRIMARY}>
      <ArrowTopRightOnSquareIcon className="h-5 w-5" aria-hidden />
      Continue in the browser
    </a>
  );

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <p className="text-base font-semibold text-primary">Group invite</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Join the group on ExpenseMate
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          {appSchemeUrl
            ? 'Open the invite in the ExpenseMate app, or join in your browser. Both use the same account.'
            : 'Continue in the browser to open this invite.'}
        </p>

        <div className="mt-8 flex flex-col gap-3">
          {appFirst ? openInApp : inBrowser}
          {appFirst ? inBrowser : openInApp}
        </div>

        {appSchemeUrl && (
          <p className="mt-3 text-sm text-gray-500">
            If the app does not open, it is not installed on this device yet.
          </p>
        )}

        <Link
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-x-2 text-base font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
        >
          <FaApple className="h-5 w-5" aria-hidden />
          Download on the App Store <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
