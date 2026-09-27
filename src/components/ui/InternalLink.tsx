'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface InternalLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

// On /join the URL carries a groupId (a join capability): leave with a full page load and no referrer, so GA never loads over it.
export default function InternalLink({ href, className, children }: InternalLinkProps) {
  const onJoin = usePathname()?.startsWith('/join');

  if (onJoin) {
    return (
      <a href={href} rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
