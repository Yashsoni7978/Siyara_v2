import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';
import { FEATURED_ARTICLE, BLOG_ARTICLES } from '../../../src/data/blogArticles';

// Retrieve article matching slug
function getArticle(slug) {
  if (FEATURED_ARTICLE.slug === slug) return FEATURED_ARTICLE;
  const match = BLOG_ARTICLES.find((art) => art.slug === slug);
  return match || null;
}

// Generate params for all dynamic blog paths
export async function generateStaticParams() {
  const allArticles = [FEATURED_ARTICLE, ...BLOG_ARTICLES];
  return allArticles.map((art) => ({
    slug: art.slug,
  }));
}

// Dynamically generate metadata per blog post
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const metaTitle = article.metaTitle || article.title;
  const metaDesc = article.metaDescription || article.excerpt || article.executiveSummary;

  return {
    title: `${metaTitle} · Siyara Insights`,
    description: metaDesc,
    alternates: {
      canonical: `https://www.siyaradigitals.com/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      url: `https://www.siyaradigitals.com/blog/${slug}`,
      title: `${metaTitle} · Siyara Insights`,
      description: metaDesc,
      publishedTime: new Date(article.date).toISOString(),
      images: [
        {
          url: article.image?.startsWith('http')
            ? article.image
            : `https://www.siyaradigitals.com${article.image}`,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${metaTitle} · Siyara Insights`,
      description: metaDesc,
      images: [
        article.image?.startsWith('http')
          ? article.image
          : `https://www.siyaradigitals.com${article.image}`,
      ],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const isOrgAuthor = article.author?.name === 'Siyara Innovations';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': article.title,
    'description': article.metaDescription || article.excerpt || article.executiveSummary,
    'image': article.image?.startsWith('http')
      ? article.image
      : article.image
        ? `https://www.siyaradigitals.com${article.image}`
        : 'https://www.siyaradigitals.com/images/siyara_og_image.png',
    'datePublished': new Date(article.date).toISOString(),
    'author': isOrgAuthor
      ? {
          '@type': 'Organization',
          'name': 'Siyara Innovations',
          'url': 'https://www.siyaradigitals.com',
        }
      : {
          '@type': 'Person',
          'name': article.author?.name || 'Siyara Editor',
          'jobTitle': article.author?.role || 'Contributor',
          'image': article.author?.avatar || 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        },
    'publisher': {
      '@type': 'Organization',
      'name': 'Siyara Innovations',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.siyaradigitals.com/images/siyara_og_image.png',
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://www.siyaradigitals.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostClient article={article} />
    </>
  );
}
