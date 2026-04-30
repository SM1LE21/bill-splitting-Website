'use client';

import Link from 'next/link';
import { trackEvent } from '@/utils/analytics';

interface TrackedDownloadLinkProps {
  href: string;
  version: string;
  filename: string;
  isLatest: boolean;
  className: string;
  children: React.ReactNode;
}

export default function TrackedDownloadLink({
  href,
  version,
  filename,
  isLatest,
  className,
  children,
}: TrackedDownloadLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => trackEvent('download_clicked', {
        version,
        filename,
        is_latest: isLatest,
      })}
      className={className}
    >
      {children}
    </Link>
  );
}
