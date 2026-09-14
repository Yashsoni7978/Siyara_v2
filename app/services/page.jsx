import Services from '../../src/views/Services';

export const metadata = {
  title: 'Services | Siyara · 8-Discipline Digital Architecture System · Jaipur',
  description: 'Siyara Innovations offers digital strategy, brand, web design, SEO, and growth services as one connected system for Jaipur businesses — not six disconnected vendors.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/services',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/services',
    siteName: 'Siyara',
    title: 'Services | Siyara · 8-Discipline Digital Architecture System · Jaipur',
    description: 'Siyara Innovations offers digital strategy, brand, web design, SEO, and growth services as one connected system for Jaipur businesses — not six disconnected vendors.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Siyara Services · 8-Discipline Digital Architecture System',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@siyaradigital',
    title: 'Services | Siyara · 8-Discipline Digital Architecture System · Jaipur',
    description: 'Siyara Innovations offers digital strategy, brand, web design, SEO, and growth services as one connected system for Jaipur businesses — not six disconnected vendors.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function ServicesPage() {
  return <Services />;
}
