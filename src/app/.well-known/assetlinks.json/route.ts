import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the assetlinks.json file from the public directory
    const filePath = path.join(process.cwd(), 'public', '.well-known', 'assetlinks.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Parse and return as JSON with correct headers
    const data = JSON.parse(fileContents);
    
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error serving assetlinks.json:', error);
    return NextResponse.json(
      { error: 'Failed to load assetlinks.json' },
      { status: 500 }
    );
  }
}

