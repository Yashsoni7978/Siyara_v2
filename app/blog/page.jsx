import BlogClient from './BlogClient';

export const metadata = {
  title: 'Studio Insights | Siyara · Digital Strategy, Brand & Growth Intelligence',
  description: 'Strategic perspectives on digital growth, brand positioning, search intelligence and conversion engineering from the Siyara studio.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/blog',
    siteName: 'Siyara',
    title: 'Studio Insights | Siyara · Digital Strategy, Brand & Growth Intelligence',
    description: 'Strategic perspectives on digital growth, brand positioning, search intelligence and conversion engineering from the Siyara studio.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Siyara Studio Insights',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@siyaradigital',
    title: 'Studio Insights | Siyara · Digital Strategy, Brand & Growth Intelligence',
    description: 'Strategic perspectives on digital growth, brand positioning, search intelligence and conversion engineering from the Siyara studio.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function BlogListPage() {
  return <BlogClient />;
}
