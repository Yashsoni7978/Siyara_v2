import React from 'react';
import { notFound } from 'next/navigation';
import JsonLd, { buildBreadcrumbs, buildServiceSchema, buildFaqSchema } from '../../../src/components/common/JsonLd';
import { FEATURED_ARTICLE, BLOG_ARTICLES } from '../../../src/data/blogArticles';
import { SERVICES_DATA, SERVICE_RELATED_ARTICLES } from '../../../src/data/servicesData';
import ServiceDetailView from '../../../src/views/ServiceDetailView';

// Re-export SERVICES_DATA & SERVICE_RELATED_ARTICLES for sitemap and downstream modules
export { SERVICES_DATA, SERVICE_RELATED_ARTICLES };

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

const PROMOTED_SERVICES = new Set([
  'web-design-development',
  'seo-services',
  'social-media-marketing',
  'branding',
]);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return {};

  const isNoindex = !PROMOTED_SERVICES.has(slug);

  return {
    ...(isNoindex && {
      robots: {
        index: false,
        follow: true,
      },
    }),
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.siyaradigitals.com/services/${slug}`,
    },
    openGraph: {
      type: 'website',
      url: `https://www.siyaradigitals.com/services/${slug}`,
      siteName: 'Siyara Innovations',
      title: `${service.metaTitle} | Siyara Innovations`,
      description: service.metaDescription,
      images: [
        {
          url: service.heroImage || 'https://www.siyaradigitals.com/images/siyara_og_image.png',
          width: 1200,
          height: 630,
          alt: `${service.name} · Siyara Innovations Jaipur`,
        },
      ],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.metaTitle} | Siyara Innovations`,
      description: service.metaDescription,
      images: [service.heroImage || 'https://www.siyaradigitals.com/images/siyara_og_image.png'],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  const allArticles = [FEATURED_ARTICLE, ...BLOG_ARTICLES];
  const relatedSlugs = SERVICE_RELATED_ARTICLES[slug] || [];
  const relatedArticles = relatedSlugs
    .map((s) => allArticles.find((a) => a.slug === s))
    .filter(Boolean);

  const breadcrumbsSchema = buildBreadcrumbs([
    { name: 'Home', url: 'https://www.siyaradigitals.com' },
    { name: 'Services', url: 'https://www.siyaradigitals.com/services' },
    { name: service.name, url: `https://www.siyaradigitals.com/services/${slug}` },
  ]);

  const serviceSchema = buildServiceSchema({
    name: service.name,
    serviceType: service.serviceType,
    description: service.metaDescription,
    url: `https://www.siyaradigitals.com/services/${slug}`,
    offers: service.subServices,
  });

  const faqSchema = buildFaqSchema(service.faqs);

  const fullSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbsSchema,
      serviceSchema,
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  return (
    <>
      <JsonLd schema={fullSchema} />
      <ServiceDetailView service={service} relatedArticles={relatedArticles} />
    </>
  );
}
