import Work from '../../src/views/Work';

export const metadata = {
  title: 'Our Work | Siyara Innovations — Digital Architecture Studio',
  description: 'Explore Siyara Innovations’ work across 17 projects in real estate, hospitality, healthcare, fashion, e-commerce, and more.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/work',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/work',
    siteName: 'Siyara',
    title: 'Our Work | Siyara Innovations — Digital Architecture Studio',
    description: 'Explore Siyara Innovations’ work across 17 projects in real estate, hospitality, healthcare, fashion, e-commerce, and more.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Our Work · Siyara Innovations',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@siyaradigital',
    title: 'Our Work | Siyara Innovations — Digital Architecture Studio',
    description: 'Explore Siyara Innovations’ work across 17 projects in real estate, hospitality, healthcare, fashion, e-commerce, and more.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function OurWorkPage() {
  return <Work />;
}
