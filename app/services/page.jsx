import Services from '../../src/views/Services';

export const metadata = {
  title: 'Services | Siyara · 8-Discipline Digital Architecture System · Jaipur',
  description: 'One connected system across 8 disciplines: Strategy, Brand, Experience, Visibility, Conversion, Automation, Analytics and Growth. Built for ambitious businesses.',
  alternates: {
    canonical: 'https://siyara.in/services',
  },
  openGraph: {
    type: 'website',
    url: 'https://siyara.in/services',
    siteName: 'Siyara',
    title: 'Services | Siyara · 8-Discipline Digital Architecture System · Jaipur',
    description: 'One connected system across 8 disciplines: Strategy, Brand, Experience, Visibility, Conversion, Automation, Analytics and Growth. Built for ambitious businesses.',
    images: [
      {
        url: 'https://siyara.in/images/siyara_og_image.png',
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
    description: 'One connected system across 8 disciplines: Strategy, Brand, Experience, Visibility, Conversion, Automation, Analytics and Growth. Built for ambitious businesses.',
    images: ['https://siyara.in/images/siyara_og_image.png'],
  },
};

export default function ServicesPage() {
  return <Services />;
}
