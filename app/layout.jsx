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
  title: 'Siyara | Digital Architecture Studio · Strategy, Brand & Web Systems · Jaipur',
  description: 'Siyara is a digital architecture studio based in Jaipur, Rajasthan. We build connected systems across 8 disciplines: Strategy, Brand, Experience, Visibility, Conversion, Automation, Analytics and Growth, for ambitious businesses.',
  keywords: 'digital architecture studio, brand strategy, web design Jaipur, SEO Jaipur, digital marketing Rajasthan, web development India, AI automation, conversion optimisation, Siyara',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/',
    siteName: 'Siyara',
    title: 'Siyara | Digital Architecture Studio · Strategy, Brand & Web Systems · Jaipur',
    description: 'A digital architecture studio building connected systems for ambitious businesses. Strategy, Brand, Experience, Visibility, Conversion, Automation, Analytics and Growth.',
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
    title: 'Siyara | Digital Architecture Studio · Jaipur',
    description: 'Connected systems across 8 disciplines for ambitious businesses. Strategy, Brand, Experience, Visibility, Conversion, Automation, Analytics and Growth.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
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
