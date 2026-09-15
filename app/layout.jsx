import '../src/index.css';
import Navbar from '../src/components/layout/Navbar';
import Footer from '../src/components/home/Footer';
import FloatingContact from '../src/components/layout/FloatingContact';
import CursorSpotlight from '../src/components/common/CursorSpotlight';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
});

export const metadata = {
  metadataBase: new URL('https://www.siyaradigitals.com'),
  title: 'Siyara Innovations | Digital Marketing & Web Design Agency in Jaipur',
  description: 'Siyara Innovations is a Jaipur-based digital agency building brand strategy, websites, SEO/GEO, and automation as one connected system — not six disconnected vendors. Book a strategy session.',
  keywords: 'digital architecture studio, brand strategy, web design Jaipur, SEO Jaipur, digital marketing Rajasthan, web development India, AI automation, conversion optimisation, Siyara',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/',
    siteName: 'Siyara Innovations',
    title: 'Siyara Innovations | Digital Marketing & Web Design Agency in Jaipur',
    description: 'Siyara Innovations is a Jaipur-based digital agency building brand strategy, websites, SEO/GEO, and automation as one connected system — not six disconnected vendors. Book a strategy session.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Siyara · Digital Architecture Studio',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@siyaradigital',
    title: 'Siyara Innovations | Digital Marketing & Web Design Agency in Jaipur',
    description: 'Siyara Innovations is a Jaipur-based digital agency building brand strategy, websites, SEO/GEO, and automation as one connected system — not six disconnected vendors. Book a strategy session.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${manrope.className} ${cormorant.variable} ${manrope.variable} bg-[#070A09] text-[#F3EFE3] antialiased selection:bg-[#071E18] selection:text-[#D9B45F] overflow-x-hidden font-sans`}>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.siyaradigitals.com/#organization',
                  'name': 'Siyara',
                  'alternateName': 'Siyara Digital Architecture Studio',
                  'url': 'https://www.siyaradigitals.com',
                  'logo': {
                    '@type': 'ImageObject',
                    'url': 'https://www.siyaradigitals.com/images/siyara_og_image.png'
                  },
                  'description': 'A digital architecture studio building connected systems across Strategy, Brand, Experience, Visibility, Conversion, Automation, Analytics and Growth.',
                  'foundingDate': '2024',
                  'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Jaipur',
                    'addressRegion': 'Rajasthan',
                    'addressCountry': 'IN'
                  },
                  'contactPoint': {
                    '@type': 'ContactPoint',
                    'telephone': '+91-9587269209',
                    'email': 'info@siyaradigital.com',
                    'contactType': 'customer service',
                    'availableLanguage': ['English', 'Hindi']
                  },
                  'sameAs': [
                    'https://www.linkedin.com/company/siyara',
                    'https://www.instagram.com/siyaradigital',
                    'https://twitter.com/siyaradigital'
                  ]

                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.siyaradigitals.com/#website',
                  'url': 'https://www.siyaradigitals.com',
                  'name': 'Siyara',
                  'description': 'Digital architecture studio building connected systems for ambitious businesses.',
                  'publisher': {
                    '@id': 'https://www.siyaradigitals.com/#organization'
                  }
                }
              ]
            })
          }}
        />
        {/* Interactive Cursor Spotlight */}
        <CursorSpotlight />
        
        {/* Shared Navbar */}
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        {/* Shared Footer */}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
