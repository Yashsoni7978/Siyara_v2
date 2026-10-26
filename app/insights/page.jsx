import BlogClient from '../blog/BlogClient';
import JsonLd, { buildBreadcrumbs } from '../../src/components/common/JsonLd';

export const metadata = {
  title: 'Digital Insights & SEO Guides Jaipur',
  description: 'Strategic perspectives on Next.js web engineering, SEO algorithms, generative search, and brand positioning from the Siyara studio in Jaipur.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/insights',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/insights',
    siteName: 'Siyara Innovations',
    title: 'Digital Insights & SEO Guides Jaipur | Siyara Innovations',
    description: 'Strategic perspectives on Next.js web engineering, SEO algorithms, generative search, and brand positioning from the Siyara studio in Jaipur.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Siyara Innovations Studio Insights · Web Development & SEO',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Insights & SEO Guides Jaipur | Siyara Innovations',
    description: 'Strategic perspectives on Next.js web engineering, SEO algorithms, generative search, and brand positioning from the Siyara studio in Jaipur.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function InsightsListPage() {
  const breadcrumbSchema = buildBreadcrumbs([
    { name: 'Home', url: 'https://www.siyaradigitals.com' },
    { name: 'Insights', url: 'https://www.siyaradigitals.com/insights' },
  ]);

  return (
    <>
      <JsonLd schema={breadcrumbSchema} />
      <BlogClient />
    </>
  );
}
