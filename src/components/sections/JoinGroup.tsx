import React from 'react';
import Link from 'next/link';
import AppRedirect from '@/components/ui/AppRedirect';
import { isValidUUID } from '@/utils/deviceUtils';
import Layout from '@/components/layout/Layout';

interface JoinGroupProps {
  groupId: string | null;
}

const JoinGroup: React.FC<JoinGroupProps> = ({ groupId }) => {
  // Handle invalid or missing group ID
  if (!groupId || !isValidUUID(groupId)) {
    return (
      <Layout>
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Invalid Group Link</h1>
            <p className="text-gray-700 mb-6">
              The group link you followed is invalid or has expired.
            </p>
            <Link 
              href="/"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
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
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <AppRedirect groupId={groupId} />
      </div>
    </Layout>
  );
};

export default JoinGroup; 