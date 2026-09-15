import { Suspense } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Playfair_Display, Inter, Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/ui/Preloader';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Analytics from '@/components/ui/Analytics';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devoirrealty.com';
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Devoir Realty',
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  telephone: '+91 62832 42916',
  email: 'info@devoirrealty.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '803, Eighth Floor, Skyline Royal Plaza, Sushant Golf City',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Devoir Realty | Premium Real Estate Lucknow',
    template: '%s | Devoir Realty',
  },
  description:
    "Devoir Realty — Lucknow's premier real estate consulting firm. Authorized channel partners of OMAXE, Excella, and leading developers. Find your dream property today.",
  keywords: [
    'real estate Lucknow',
    'property in Lucknow',
    'Devoir Realty',
    'luxury flats Lucknow',
    'commercial property Lucknow',
    'OMAXE channel partner Lucknow',
    'Excella authorized partner',
    'Sushant Golf City properties',
    'Gomti Nagar property',
  ],
  authors: [{ name: 'Devoir Realty' }],
  creator: 'Devoir Realty',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://devoirrealty.com',
    siteName: 'Devoir Realty',
    title: 'Devoir Realty | Luxury Real Estate India',
    description:
      "India's premier luxury real estate advisory. Curating exceptional properties for discerning individuals.",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Devoir Realty — Luxury Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devoir Realty | Luxury Real Estate India',
    description: "India's premier luxury real estate advisory.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${jakarta.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c') }} />
        <Script id="theme-preference" strategy="beforeInteractive">{`
          try {
            const savedTheme = localStorage.getItem('devoir-theme');
            const theme = savedTheme === 'light' || savedTheme === 'dark'
              ? savedTheme
              : window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
            document.documentElement.dataset.theme = theme;
            document.documentElement.style.colorScheme = theme;
          } catch (_) {}
        `}</Script>
        <Preloader />
        <ScrollProgress />
        <CustomCursor />
        <Navigation />
        <ThemeToggle />
        <Suspense fallback={null}>
          <Analytics gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} metaPixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID} />
        </Suspense>
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
