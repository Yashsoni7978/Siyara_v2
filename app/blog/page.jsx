import BlogClient from './BlogClient';

export const metadata = {
  title: 'Digital Insights: Web Development, SEO & Branding | Siyara',
  description: 'Strategic perspectives on web development, SEO algorithms, social media marketing, and brand positioning from the Siyara Innovations studio in Jaipur.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/blog',
    siteName: 'Siyara Innovations',
    title: 'Digital Insights: Web Development, SEO & Branding | Siyara',
    description: 'Strategic perspectives on web development, SEO algorithms, social media marketing, and brand positioning from the Siyara Innovations studio in Jaipur.',
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
    title: 'Digital Insights: Web Development, SEO & Branding | Siyara',
    description: 'Strategic perspectives on web development, SEO algorithms, social media marketing, and brand positioning from the Siyara Innovations studio in Jaipur.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function BlogListPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.siyaradigitals.com',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Blog',
        'item': 'https://www.siyaradigitals.com/blog',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}
