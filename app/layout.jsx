import Script from 'next/script';
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
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
});

export const metadata = {
  metadataBase: new URL('https://www.siyaradigitals.com'),
  title: 'Web Design Company & SEO Services Jaipur | Siyara Innovations',
  description: 'Siyara Innovations is a Jaipur digital agency building high-speed websites, local SEO, social media marketing, and brand identity for growing businesses.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/',
    siteName: 'Siyara Innovations',
    title: 'Web Design Company & SEO Services Jaipur | Siyara Innovations',
    description: 'Siyara Innovations is a Jaipur digital agency building high-speed websites, local SEO, social media marketing, and brand identity for growing businesses.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Siyara Innovations · Digital Marketing & Web Design Agency in Jaipur',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company & SEO Services Jaipur | Siyara Innovations',
    description: 'Siyara Innovations is a Jaipur digital agency building high-speed websites, local SEO, social media marketing, and brand identity for growing businesses.',
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
    <html lang="en-IN" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${manrope.className} ${cormorant.variable} ${manrope.variable} bg-[#070A09] text-[#F3EFE3] antialiased selection:bg-[#071E18] selection:text-[#D9B45F] overflow-x-hidden font-sans`}>
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#D9B45F] focus:text-[#070A09] focus:font-sans focus:font-semibold focus:text-sm focus:rounded focus:outline-none focus:ring-2 focus:ring-[#F3EFE3]"
        >
          Skip to main content
        </a>

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
                  'name': 'Siyara Innovations',
                  'alternateName': ['Siyara', 'Siyara Innovations Jaipur'],
                  'url': 'https://www.siyaradigitals.com',
                  'logo': {
                    '@type': 'ImageObject',
                    '@id': 'https://www.siyaradigitals.com/#logo',
                    'url': 'https://www.siyaradigitals.com/logo.webp',
                    'caption': 'Siyara Innovations Logo'
                  },
                  'image': 'https://www.siyaradigitals.com/images/siyara_og_image.png',
                  'description': 'Siyara Innovations is a web development, SEO, social media marketing, and branding agency serving Jaipur, Rajasthan, India.',
                  'email': 'info@siyaradigitals.com',
                  'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': 'Jaipur',
                    'addressRegion': 'Rajasthan',
                    'addressCountry': 'IN'
                  },
                  'areaServed': [
                    { '@type': 'City', 'name': 'Jaipur' },
                    { '@type': 'State', 'name': 'Rajasthan' },
                    { '@type': 'Country', 'name': 'India' }
                  ],
                  'contactPoint': {
                    '@type': 'ContactPoint',
                    'email': 'info@siyaradigitals.com',
                    'contactType': 'customer service',
                    'availableLanguage': ['English', 'Hindi']
                  },
                  'sameAs': [
                    'https://www.linkedin.com/company/siyarainnovations/',
                    'https://www.instagram.com/siyarainnovations/'
                  ]
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.siyaradigitals.com/#website',
                  'url': 'https://www.siyaradigitals.com',
                  'name': 'Siyara Innovations',
                  'description': 'Web design, SEO, and digital marketing agency in Jaipur, India.',
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

        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Shared Footer */}
        <Footer />
        <FloatingContact />

        {/* Google Analytics 4 (Only when NEXT_PUBLIC_GA_ID is provided) */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Microsoft Clarity (Only when NEXT_PUBLIC_CLARITY_ID is provided) */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script
            id="microsoft-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}
