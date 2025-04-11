import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Bill Splitting App - Split Expenses with Friends Easily",
  description: "The easiest way to split bills and track expenses with friends, roommates, and groups. No more awkward money conversations.",
  keywords: "bill splitting, expense tracking, shared expenses, roommate expenses, group payments",
  authors: [{ name: "Your Company" }],
  robots: "index, follow",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Bill Splitting App",
    title: "Bill Splitting App - Split Expenses with Friends Easily",
    description: "The easiest way to split bills and track expenses with friends, roommates, and groups.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bill Splitting App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bill Splitting App - Split Expenses with Friends Easily",
    description: "The easiest way to split bills and track expenses with friends, roommates, and groups.",
    images: ["/images/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
