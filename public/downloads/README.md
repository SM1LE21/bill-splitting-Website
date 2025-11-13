# ExpenseMate Downloads Directory

This directory contains all downloadable versions of ExpenseMate. The website automatically detects and serves files from this directory structure.

## Directory Structure

```
downloads/
├── v1.0.0/
│   ├── expensemate.apk
│   └── expensemate-debug.apk
├── v1.1.0/
│   ├── expensemate.apk
│   └── expensemate-debug.apk
├── v1.2.0/
│   └── expensemate.apk
└── README.md (this file)
```

## How It Works

1. **Automatic Detection**: The website scans this directory at build time
2. **Version Format**: Use semantic versioning (e.g., `v1.0.0`, `v1.1.0`, `v2.0.0`)
3. **File Access**: Files are accessible at `/downloads/{version}/{filename}`
4. **Latest Version**: The highest version number is automatically marked as "Latest"

## Adding New Versions

To add a new version:

1. Create a new directory with the version name (e.g., `v1.3.0`)
2. Place your APK or other files in that directory
3. Deploy the website - it will automatically detect the new version

## Example URLs

- Latest version page: `https://expensemate.app/downloads`
- Direct download: `https://expensemate.app/downloads/v1.0.0/expensemate.apk`
- Debug version: `https://expensemate.app/downloads/v1.0.0/expensemate-debug.apk`

## Supported File Types

- `.apk` - Android Package
- `.pdf` - PDF documents
- `.zip` - ZIP archives
- `.exe` - Windows executables
- `.dmg` - macOS disk images
- `.deb` - Debian packages
- `.rpm` - RPM packages

## Notes

- Files are served with appropriate MIME types
- Downloads include proper headers for file downloads
- The system supports multiple files per version
- Version sorting is done semantically (v1.10.0 comes after v1.9.0)

## Current Status

🚀 **Ready to use!** Just add your version directories and files. 