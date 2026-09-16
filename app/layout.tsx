import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devoirrealty.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Devoir Realty | Premium Real Estate in Lucknow',
  description: 'Devoir Realty helps you find luxurious homes, smart investments and commercial spaces in Lucknow with trusted, transparent and expert real estate solutions.',
  keywords: [
    'Devoir Realty',
    'real estate Lucknow',
    'property in Lucknow',
    'flats in Lucknow',
    'commercial property Lucknow',
    'residential property Lucknow'
  ],
  authors: [{ name: 'Devoir Realty' }],
  icons: {
    icon: '/favicon.ico',
  },
};

import GlobalLayout from '@/components/GlobalLayout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalLayout>
          {children}
        </GlobalLayout>
      </body>
    </html>
  );
}
