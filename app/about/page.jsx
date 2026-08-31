import About from '../../src/views/About';

export const metadata = {
  title: 'About Siyara | Digital Architecture Studio · Jaipur, Rajasthan',
  description: 'Siyara is a digital architecture studio based in Jaipur. We combine creativity, technology and strategy to build connected digital systems for ambitious businesses.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/about',
    siteName: 'Siyara',
    title: 'About Siyara | Digital Architecture Studio · Jaipur, Rajasthan',
    description: 'Siyara is a digital architecture studio based in Jaipur. We combine creativity, technology and strategy to build connected digital systems for ambitious businesses.',
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
    description: 'Siyara is a digital architecture studio based in Jaipur. We combine creativity, technology and strategy to build connected digital systems for ambitious businesses.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function AboutPage() {
  return <About />;
}
