import Work from '../../src/views/Work';

export const metadata = {
  title: 'Our Work | Siyara Innovations — Digital Architecture Studio',
  description: 'Explore Siyara Innovations’ work across industries including jewellery, real estate, hospitality, healthcare, fashion, education and e-commerce.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/work',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/work',
    siteName: 'Siyara',
    title: 'Our Work | Siyara Innovations — Digital Architecture Studio',
    description: 'Explore Siyara Innovations’ work across industries including jewellery, real estate, hospitality, healthcare, fashion, education and e-commerce.',
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
    description: 'Explore Siyara Innovations’ work across industries including jewellery, real estate, hospitality, healthcare, fashion, education and e-commerce.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function WorkPage() {
  return <Work />;
}
