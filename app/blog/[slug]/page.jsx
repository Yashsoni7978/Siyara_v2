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

  return {
    title: `${article.title} · Siyara Insights`,
    description: article.excerpt || article.executiveSummary,
    alternates: {
      canonical: `https://www.siyaradigitals.com/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      url: `https://www.siyaradigitals.com/blog/${slug}`,
      title: `${article.title} · Siyara Insights`,
      description: article.excerpt || article.executiveSummary,
      publishedTime: new Date(article.date).toISOString(),
      images: [
        {
          url: article.image || 'https://www.siyaradigitals.com/images/siyara_og_image.png',
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} · Siyara Insights`,
      description: article.excerpt || article.executiveSummary,
      images: [article.image || 'https://www.siyaradigitals.com/images/siyara_og_image.png'],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': article.title,
    'description': article.excerpt || article.executiveSummary,
    'image': article.image || 'https://www.siyaradigitals.com/images/siyara_og_image.png',
    'datePublished': new Date(article.date).toISOString(),
    'author': {
      '@type': 'Person',
      'name': article.author?.name || 'Siyara Editor',
      'jobTitle': article.author?.role || 'Contributor',
      'image': article.author?.avatar || 'https://www.siyaradigitals.com/images/siyara_og_image.png',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Siyara',
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
