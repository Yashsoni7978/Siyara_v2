import React from 'react';

/**
 * Reusable JsonLd Component for Next.js App Router
 * Renders structured Schema.org JSON-LD markup safely.
 */
export default function JsonLd({ schema }) {
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

/**
 * Base Organization, LocalBusiness, and ProfessionalService Schema Graph
 * Unified NAP, geo coordinates, verified founder node, and corporate identity.
 * Linked @id nodes allow all page-level schemas to reference the root entity.
 */
export function getRootOrganizationGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.siyaradigitals.com/#organization',
        'name': 'Siyara Innovations',
        'alternateName': [
          'Siyara Digitals',
          'Siyara',
          'Siyara Innovations Jaipur',
        ],
        'url': 'https://www.siyaradigitals.com',
        'logo': {
          '@type': 'ImageObject',
          '@id': 'https://www.siyaradigitals.com/#logo',
          'url': 'https://www.siyaradigitals.com/logo.webp',
          'caption': 'Siyara Innovations Logo',
          'width': '512',
          'height': '512',
        },
        'image': 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        'description':
          'Siyara Innovations is a digital engineering agency, Next.js web development company, and search optimization partner based in Jaipur, Rajasthan, India. We engineer web systems for businesses across jewellery, real estate, healthcare, hospitality, and retail sectors.',
        'email': 'info@siyaradigitals.com',
        'priceRange': '₹₹₹',
        'currenciesAccepted': 'INR, USD',
        'paymentAccepted': 'Bank Transfer, UPI, Credit Card',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Jaipur',
          'addressRegion': 'Rajasthan',
          'addressCountry': 'IN',
        },
        'areaServed': [
          { '@type': 'City', 'name': 'Jaipur' },
          { '@type': 'State', 'name': 'Rajasthan' },
          { '@type': 'Country', 'name': 'India' },
        ],
        'knowsAbout': [
          'Web Development',
          'Next.js Web Engineering',
          'Generative Engine Optimization (GEO)',
          'Search Engine Optimization (SEO)',
          'Brand Identity Systems',
          'Core Web Vitals Performance Engineering',
          'Conversion Rate Optimization',
          'B2B Web Design',
          'Jewellery Website Design',
          'Real Estate Web Development',
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'customer support',
          'email': 'info@siyaradigitals.com',
          'url': 'https://wa.me/919587269209',
          'availableLanguage': ['English', 'Hindi'],
        },
        'sameAs': [
          'https://www.linkedin.com/company/siyarainnovations/',
          'https://www.instagram.com/siyarainnovations/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.siyaradigitals.com/#website',
        'url': 'https://www.siyaradigitals.com',
        'name': 'Siyara Innovations',
        'description':
          'High-Performance Web Systems — Next.js Development, SEO, and Brand Systems in Jaipur, India.',
        'publisher': {
          '@id': 'https://www.siyaradigitals.com/#organization',
        },
        'inLanguage': 'en-IN',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': {
            '@type': 'EntryPoint',
            'urlTemplate': 'https://www.siyaradigitals.com/insights?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
}

/**
 * BreadcrumbList Schema Generator
 * @param {Array<{name: string, url: string}>} items
 */
export function buildBreadcrumbs(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  };
}

/**
 * Service & OfferCatalog Schema Generator
 * @param {{ name, serviceType, description, url, offers }} params
 */
export function buildServiceSchema({ name, serviceType, description, url, offers = [] }) {
  const schema = {
    '@type': 'Service',
    'name': name,
    'serviceType': serviceType || name,
    'description': description,
    'provider': {
      '@id': 'https://www.siyaradigitals.com/#organization',
    },
    'areaServed': [
      { '@type': 'City', 'name': 'Jaipur' },
      { '@type': 'State', 'name': 'Rajasthan' },
      { '@type': 'Country', 'name': 'India' },
    ],
  };

  if (url) {
    schema['url'] = url;
  }

  if (offers && offers.length > 0) {
    schema['hasOfferCatalog'] = {
      '@type': 'OfferCatalog',
      'name': `${name} Solutions`,
      'itemListElement': offers.map((offerName) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': offerName,
        },
      })),
    };
  }

  return schema;
}

/**
 * FAQPage Schema Generator (Validated, non-deprecated)
 * @param {Array<{q: string, a: string}>} faqs
 */
export function buildFaqSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a,
      },
    })),
  };
}

/**
 * BlogPosting Schema Builder with linked Organization and Person @ids
 * @param {{ article, slug }} params
 */
export function buildBlogPostingSchema({ article, slug }) {
  const url = `https://www.siyaradigitals.com/insights/${slug}`;
  const imageUrl = article.image?.startsWith('http')
    ? article.image
    : article.image
    ? `https://www.siyaradigitals.com${article.image}`
    : 'https://www.siyaradigitals.com/images/siyara_og_image.png';

  let publishedDate;
  try {
    publishedDate = new Date(article.date).toISOString();
  } catch {
    publishedDate = new Date().toISOString();
  }

  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    'headline': article.title,
    'description': article.metaDescription || article.excerpt || article.executiveSummary || '',
    'image': imageUrl,
    'datePublished': publishedDate,
    'dateModified': publishedDate,
    'author': {
      '@type': 'Organization',
      '@id': 'https://www.siyaradigitals.com/#organization',
      'name': 'Siyara Innovations',
      'url': 'https://www.siyaradigitals.com',
    },
    'publisher': {
      '@type': 'Organization',
      '@id': 'https://www.siyaradigitals.com/#organization',
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': url,
    },
    'keywords': article.tags?.join(', ') || '',
    'inLanguage': 'en-IN',
    'isPartOf': {
      '@id': 'https://www.siyaradigitals.com/#website',
    },
  };
}
