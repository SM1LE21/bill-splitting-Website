import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsentWrapper from "@/components/ui/CookieConsentWrapper";
import Script from 'next/script';

// Root layout: App-wide HTML structure
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
  metadataBase: new URL('https://expense.app'),
  title: "ExpenseMate - Smart Receipt Scanning & Bill Splitting App",
  description: "Snap a photo of your receipt and let ExpenseMate automatically itemize and split expenses with friends. The smartest way to handle group expenses with receipt scanning technology.",
  keywords: "bill splitting, receipt scanning, expense tracking, itemized receipts, shared expenses, roommate expenses, group payments, receipt OCR",
  authors: [{ name: "TK Media" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://expense.app/",
    siteName: "ExpenseMate",
    title: "ExpenseMate - Smart Receipt Scanning & Bill Splitting App",
    description: "Just snap a photo of your receipt and let ExpenseMate automatically itemize and split expenses with friends. The smartest way to handle group expenses.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ExpenseMate App Preview - Smart Receipt Scanning & Splitting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExpenseMate - Smart Receipt Scanning & Bill Splitting App",
    description: "Just snap a photo of your receipt and let ExpenseMate automatically itemize and split expenses with friends. The smartest way to handle group expenses.",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQMZ01NG9Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DQMZ01NG9Q');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
        <CookieConsentWrapper />
      </body>
    </html>
  );
}
