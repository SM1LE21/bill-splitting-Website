'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  isIOS, 
  isAndroid, 
  attemptAppRedirect, 
  getAppStoreURL,
  createAppSchemeLink
} from '@/utils/deviceUtils';

interface AppRedirectProps {
  groupId: string;
}

const AppRedirect: React.FC<AppRedirectProps> = ({ groupId }) => {
  const [redirectState, setRedirectState] = useState<'initial' | 'attempting' | 'failed'>('initial');
  const [isIOSDevice, setIsIOSDevice] = useState(false);
  const [isAndroidDevice, setIsAndroidDevice] = useState(false);

  useEffect(() => {
    // Check device type on client side
    setIsIOSDevice(isIOS());
    setIsAndroidDevice(isAndroid());

    // Start redirect attempt
    setRedirectState('attempting');
    
    if (isIOS()) {
      attemptAppRedirect(groupId, () => {
        // Fallback if the app doesn't open
        setRedirectState('failed');
      });
    } else {
      // For non-iOS devices, go straight to the failed state (show download options)
      setRedirectState('failed');
    }
  }, [groupId]);

  const handleManualOpen = () => {
    window.location.href = createAppSchemeLink(groupId);
  };

  // Render different content based on the redirect state
  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-md mx-auto text-center">
      {redirectState === 'attempting' && (
        <>
          <div className="animate-pulse mb-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h1 className="text-2xl font-bold mb-2">Opening ExpenseMate...</h1>
            <p className="text-gray-600">Please wait while we redirect you to the app.</p>
          </div>
        </>
      )}

      {redirectState === 'failed' && (
        <>
          <h1 className="text-2xl font-bold mb-4">Join Group in ExpenseMate</h1>
          
          {/* Message based on device type */}
          {isIOSDevice && (
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                We couldn&apos;t open the ExpenseMate app automatically.
              </p>
              <div className="flex flex-col gap-4">
                <Link 
                  href={getAppStoreURL()} 
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download from App Store
                </Link>
                
                <button
                  onClick={handleManualOpen}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition"
                >
                  Try Opening App Again
                </button>
              </div>
            </div>
          )}
          
          {isAndroidDevice && (
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                ExpenseMate is coming soon to Android.
              </p>
            </div>
          )}
          
          {!isIOSDevice && !isAndroidDevice && (
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                ExpenseMate is available on iOS. Scan this QR code on your iOS device to join the group.
              </p>
              {/* Placeholder for QR code - would need QR code generation library */}
              <div className="w-48 h-48 bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <p className="text-sm text-gray-500">QR Code Placeholder</p>
              </div>
            </div>
          )}
          
          <div className="mt-6">
            <Link
              href="/"
              className="text-blue-600 hover:underline"
            >
              Return to Homepage
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default AppRedirect; 