import About from '../../src/views/About';

export const metadata = {
  title: 'About Siyara | Digital Architecture Studio · Jaipur, Rajasthan',
  description: 'Siyara Innovations is Jaipur’s digital architecture studio — brand strategy, web design, SEO, and growth systems built as one connected system for Jaipur businesses.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/about',
    siteName: 'Siyara',
    title: 'About Siyara | Digital Architecture Studio · Jaipur, Rajasthan',
    description: 'Siyara Innovations is Jaipur’s digital architecture studio — brand strategy, web design, SEO, and growth systems built as one connected system for Jaipur businesses.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'About Siyara · Digital Architecture Studio',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@siyaradigital',
    title: 'About Siyara | Digital Architecture Studio · Jaipur, Rajasthan',
    description: 'Siyara Innovations is Jaipur’s digital architecture studio — brand strategy, web design, SEO, and growth systems built as one connected system for Jaipur businesses.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function AboutPage() {
  return <About />;
}
