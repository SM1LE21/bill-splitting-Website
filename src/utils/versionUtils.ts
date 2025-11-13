import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

export interface VersionMetadata {
  version: string;
  releaseDate: string;
  releaseNotes?: string;
  fileSize?: string;
  downloads?: number;
  changelog?: string[];
  downloadUrl?: string;
}

export interface Version {
  version: string;
  files: string[];
  path: string;
  metadata?: VersionMetadata;
}

export async function readVersionMetadata(versionPath: string): Promise<VersionMetadata | undefined> {
  try {
    const metadataPath = join(versionPath, 'metadata.json');
    const metadataContent = await readFile(metadataPath, 'utf-8');
    return JSON.parse(metadataContent);
  } catch {
    // If metadata.json doesn't exist, return undefined
    return undefined;
  }
}

export async function getAvailableVersions(): Promise<Version[]> {
  const downloadsPath = join(process.cwd(), 'public', 'downloads');
  
  try {
    const entries = await readdir(downloadsPath, { withFileTypes: true });
    const versions: Version[] = [];
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const versionPath = join(downloadsPath, entry.name);
        const files = await readdir(versionPath);
        
        // Filter out hidden files and metadata.json
        const validFiles = files.filter(file => !file.startsWith('.') && file !== 'metadata.json');
        
        if (validFiles.length > 0) {
          // Read metadata if available
          const metadata = await readVersionMetadata(versionPath);
          
          versions.push({
            version: entry.name,
            files: validFiles,
            path: `/downloads/${entry.name}`,
            metadata
          });
        }
      }
    }
    
    // Sort versions in descending order (newest first)
    return versions.sort((a, b) => {
      // If both have metadata with release dates, sort by date
      if (a.metadata?.releaseDate && b.metadata?.releaseDate) {
        return new Date(b.metadata.releaseDate).getTime() - new Date(a.metadata.releaseDate).getTime();
      }
      
      // Fallback to version string sorting
      const aVersion = a.version.replace(/^v/, '');
      const bVersion = b.version.replace(/^v/, '');
      return bVersion.localeCompare(aVersion, undefined, { numeric: true });
    });
  } catch {
    console.log('Downloads directory not found, returning empty versions array');
    return [];
  }
}

export async function getLatestVersion(): Promise<Version | null> {
  const versions = await getAvailableVersions();
  return versions.length > 0 ? versions[0] : null;
}

export function isValidVersion(version: string): boolean {
  // Basic version validation (allows v1.0.0 or 1.0.0 format)
  const versionRegex = /^v?\d+\.\d+\.\d+$/;
  return versionRegex.test(version);
} 