import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/seo/JsonLd';

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#F8F5EF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://birvaboutique.com'),
  title: 'Birva Boutique | Elegant Jewellery Boutique in Bardoli',
  description:
    'Discover Birva Boutique in Bardoli, Gujarat. Explore beautiful jewellery styles and connect with us for enquiries and boutique visits.',
  keywords: [
    'Birva Boutique',
    'Jewellery Boutique Bardoli',
    'Jewellery Shop Bardoli',
    'Bridal Jewellery Bardoli',
    'Traditional Jewellery Gujarat',
    'Sunrise Complex Bardoli',
    'Mahatma Gandhi Road Bardoli',
  ],
  authors: [{ name: 'Birva Boutique' }],
  openGraph: {
    title: 'Birva Boutique | Elegant Jewellery Boutique in Bardoli',
    description:
      'Discover Birva Boutique in Bardoli, Gujarat. Explore beautiful jewellery styles and connect with us for enquiries and boutique visits.',
    url: 'https://birvaboutique.com',
    siteName: 'Birva Boutique',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/hero/hero-necklace.jpg',
        width: 1200,
        height: 630,
        alt: 'Birva Boutique Luxury Jewellery Bardoli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birva Boutique | Elegant Jewellery Boutique in Bardoli',
    description:
      'Discover Birva Boutique in Bardoli, Gujarat. Explore beautiful jewellery styles and connect with us for enquiries and boutique visits.',
    images: ['/images/hero/hero-necklace.jpg'],
  },
  alternates: {
    canonical: 'https://birvaboutique.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${manrope.variable} h-full antialiased selection:bg-[#B59660] selection:text-[#FCFAF6]`}
    >
      <body className="min-h-[100dvh] flex flex-col bg-[#F8F5EF] text-[#30251F] font-sans antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
