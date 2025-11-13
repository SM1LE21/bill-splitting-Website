import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { isValidVersion, readVersionMetadata } from '@/utils/versionUtils';

// Force dynamic rendering for all download routes
export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ version: string; filename: string }> }
) {
  try {
    const { version, filename } = await params;

    // Validate version format
    if (!isValidVersion(version)) {
      return NextResponse.json(
        { error: 'Invalid version format' },
        { status: 400 }
      );
    }

    // Construct version path and read metadata
    const versionPath = join(process.cwd(), 'public', 'downloads', version);
    const metadata = await readVersionMetadata(versionPath);

    // Check if metadata has a download URL
    if (metadata?.downloadUrl) {
      // Redirect to the external download URL
      return NextResponse.redirect(metadata.downloadUrl, { status: 302 });
    }

    // Fallback: try to serve local file (for backward compatibility)
    const filePath = join(versionPath, filename);

    try {
      const fileBuffer = await readFile(filePath);
      const contentType = getContentType(filename);

      const headers = new Headers({
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': fileBuffer.length.toString(),
      });

      return new NextResponse(fileBuffer, {
        status: 200,
        headers,
      });
    } catch (fileError) {
      // File not found locally
      return NextResponse.json(
        { error: 'File not available for download' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Download service temporarily unavailable' },
      { status: 500 }
    );
  }
}

function getContentType(filename: string): string {
  const extension = filename.split('.').pop()?.toLowerCase();
  
  switch (extension) {
    case 'apk':
      return 'application/vnd.android.package-archive';
    case 'pdf':
      return 'application/pdf';
    case 'zip':
      return 'application/zip';
    case 'exe':
      return 'application/x-msdownload';
    case 'dmg':
      return 'application/x-apple-diskimage';
    case 'deb':
      return 'application/x-debian-package';
    case 'rpm':
      return 'application/x-rpm';
    default:
      return 'application/octet-stream';
  }
} 