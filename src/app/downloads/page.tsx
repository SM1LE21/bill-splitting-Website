import { Metadata } from 'next';
import Link from 'next/link';
import { HomeIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { getAvailableVersions, getLatestVersion, Version } from '@/utils/versionUtils';
import Layout from '@/components/layout/Layout';
import TrackedDownloadLink from '@/components/ui/TrackedDownloadLink';

export const metadata: Metadata = {
  title: 'Downloads - ExpenseMate',
  description: 'Download different versions of ExpenseMate for Android and other platforms.',
};

export default async function DownloadsPage() {
  const versions = await getAvailableVersions();
  const latestVersion = await getLatestVersion();

  const formatFileSize = (version: Version): string => {
    // Use metadata file size if available, otherwise show placeholder
    return version.metadata?.fileSize || 'APK';
  };

  const formatDate = (version: Version): string => {
    // Use actual release date from metadata if available
    if (version.metadata?.releaseDate) {
      const date = new Date(version.metadata.releaseDate);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    return 'Release date available soon';
  };

  return (
    <Layout minimal>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
              <HomeIcon className="h-5 w-5 mr-1" aria-hidden="true" />
              Back to ExpenseMate
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Downloads
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Download ExpenseMate for Android and start splitting bills with friends
            </p>
          </div>

          {versions.length === 0 ? (
            <div className="text-center py-12">
              <ArrowDownTrayIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-semibold text-gray-900">No downloads available</h3>
              <p className="mt-1 text-sm text-gray-500">
                Download files will appear here once they&apos;re available.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Latest Version Highlight */}
              {latestVersion && (
                <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-primary-900">
                        Latest Version: {latestVersion.version}
                      </h2>
                      <p className="text-primary-700 mt-1">
                        Recommended download
                      </p>
                      {latestVersion.metadata?.releaseNotes && (
                        <p className="text-primary-600 mt-2 text-sm">
                          {latestVersion.metadata.releaseNotes}
                        </p>
                      )}
                    </div>
                    <div className="bg-primary-100 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-primary-800">Latest</span>
                    </div>
                  </div>
                  
                  {/* Release Notes for Latest Version */}
                  {latestVersion.metadata?.changelog && latestVersion.metadata.changelog.length > 0 && (
                    <div className="mb-4 p-4 bg-white rounded-lg border border-primary-200">
                      <h4 className="font-semibold text-primary-900 mb-2">What&apos;s New:</h4>
                      <ul className="text-sm text-primary-700 space-y-1">
                        {latestVersion.metadata.changelog.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="grid gap-3">
                    {latestVersion.files.map((file) => (
                      <div key={file} className="flex items-center justify-between bg-white p-4 rounded-lg border border-primary-200">
                        <div className="flex items-center space-x-3">
                          <ArrowDownTrayIcon className="h-5 w-5 text-primary-600" />
                          <div>
                            <p className="font-medium text-gray-900">{file}</p>
                            <p className="text-sm text-gray-500">{formatFileSize(latestVersion)}</p>
                          </div>
                        </div>
                        <TrackedDownloadLink
                          href={`/downloads/${latestVersion.version}/${file}`}
                          version={latestVersion.version}
                          filename={file}
                          isLatest
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                          Download
                        </TrackedDownloadLink>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* All Versions */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">All Versions</h2>
                <div className="space-y-6">
                  {versions.map((version) => (
                    <div key={version.version} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                            Version {version.version}
                            {version.version === latestVersion?.version && (
                              <span className="ml-2 bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full">
                                Latest
                              </span>
                            )}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {formatDate(version)}
                          </p>
                          {version.metadata?.releaseNotes && (
                            <p className="text-sm text-gray-600 mt-2">
                              {version.metadata.releaseNotes}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      {/* Release Notes for Each Version */}
                      {version.metadata?.changelog && version.metadata.changelog.length > 0 && (
                        <div className="mb-4 p-4 bg-white rounded-lg border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">Release Notes:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {version.metadata.changelog.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-gray-400 mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="grid gap-3">
                        {version.files.map((file) => (
                          <div key={file} className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200">
                            <div className="flex items-center space-x-3">
                              <ArrowDownTrayIcon className="h-5 w-5 text-gray-400" />
                              <div>
                                <p className="font-medium text-gray-900">{file}</p>
                                <p className="text-sm text-gray-500">{formatFileSize(version)}</p>
                              </div>
                            </div>
                            <TrackedDownloadLink
                              href={`/downloads/${version.version}/${file}`}
                              version={version.version}
                              filename={file}
                              isLatest={version.version === latestVersion?.version}
                              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                            >
                              Download
                            </TrackedDownloadLink>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Installation Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Installation Instructions
                </h3>
                <div className="space-y-3 text-sm text-blue-800">
                  <div>
                    <strong>Android (APK):</strong>
                    <ol className="list-decimal ml-5 mt-2 space-y-1">
                      <li>Download the APK file to your Android device</li>
                      <li>Enable &quot;Install from unknown sources&quot; in your Android settings</li>
                      <li>Open the downloaded APK file and follow the installation prompts</li>
                      <li>Launch ExpenseMate from your app drawer</li>
                    </ol>
                  </div>
                  <div className="pt-3">
                    <strong>Note:</strong> This is a test version. Please report any issues you encounter to help us improve the app.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
