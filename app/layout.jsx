import Script from 'next/script';
import '../src/index.css';
import Navbar from '../src/components/layout/Navbar';
import Footer from '../src/components/home/Footer';
import FloatingContact from '../src/components/layout/FloatingContact';
import CursorSpotlight from '../src/components/common/CursorSpotlight';
import JsonLd, { getRootOrganizationGraph } from '../src/components/common/JsonLd';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://www.siyaradigitals.com'),
  title: {
    default: 'Web Design Company & SEO Services Jaipur | Siyara Innovations',
    template: '%s | Siyara Innovations',
  },
  description: 'Siyara Innovations is a Jaipur digital studio engineering high-speed Next.js websites, local SEO, AI search visibility, and brand architecture.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com',
    siteName: 'Siyara Innovations',
    title: 'Web Design Company & SEO Services Jaipur | Siyara Innovations',
    description: 'Siyara Innovations is a Jaipur digital studio engineering high-speed Next.js websites, local SEO, AI search visibility, and brand architecture.',
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
    description: 'Siyara Innovations is a Jaipur digital studio engineering high-speed Next.js websites, local SEO, AI search visibility, and brand architecture.',
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
    <html lang="en-IN" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} ${cormorant.variable} ${inter.variable} bg-[#080B0A] text-[#F3EFE4] antialiased selection:bg-[#063C2D] selection:text-[#19A878] overflow-x-hidden font-sans`}>
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#19A878] focus:text-[#080B0A] focus:font-sans focus:font-semibold focus:text-sm focus:rounded focus:outline-none focus:ring-2 focus:ring-[#F3EFE4]"
        >
          Skip to main content
        </a>

        {/* Global Schema.org JSON-LD Graph */}
        <JsonLd schema={getRootOrganizationGraph()} />
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
