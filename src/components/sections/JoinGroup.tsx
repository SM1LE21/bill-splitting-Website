'use client';

import React from 'react';
import Link from 'next/link';
import AppRedirect from '@/components/ui/AppRedirect';
import { isValidUUID } from '@/utils/deviceUtils';
import Layout from '@/components/layout/Layout';
import { trackEvent } from '@/utils/analytics';

interface JoinGroupProps {
  groupId: string | null;
}

const JoinGroup: React.FC<JoinGroupProps> = ({ groupId }) => {
  const isValidGroupLink = Boolean(groupId && isValidUUID(groupId));

  React.useEffect(() => {
    trackEvent('join_page_viewed', {
      has_group_id: Boolean(groupId),
      is_valid_group_id: isValidGroupLink,
    });
  }, [groupId, isValidGroupLink]);

  // Handle invalid or missing group ID
  if (!isValidGroupLink || !groupId) {
    return (
      <Layout minimal={true}>
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Invalid Group Link</h1>
            <p className="text-gray-700 mb-6">
              The group link you followed is invalid or has expired.
            </p>
            <Link
              href="/"
              className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Valid group ID, show the app redirect
  return (
    <Layout minimal={true}>
      <div className="container mx-auto py-12 px-4">
        <AppRedirect groupId={groupId} />
      </div>
    </Layout>
  );
};

export default JoinGroup;
