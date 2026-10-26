import { notFound } from 'next/navigation';
import BlogPostClient from '../../blog/[slug]/BlogPostClient';
import JsonLd, {
  buildBreadcrumbs,
  buildFaqSchema,
  buildBlogPostingSchema,
} from '../../../src/components/common/JsonLd';
import { FEATURED_ARTICLE, BLOG_ARTICLES } from '../../../src/data/blogArticles';

function getArticle(slug) {
  if (FEATURED_ARTICLE.slug === slug) return FEATURED_ARTICLE;
  const match = BLOG_ARTICLES.find((art) => art.slug === slug);
  return match || null;
}

export async function generateStaticParams() {
  const allArticles = [FEATURED_ARTICLE, ...BLOG_ARTICLES];
  return allArticles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const rawTitle = article.metaTitle || article.title;
  // Truncate to <= 38 chars so rendered <title> with " | Siyara Innovations" stays ≤ 60 chars total
  const formattedTitle = rawTitle.length > 38 ? `${rawTitle.slice(0, 35)}...` : rawTitle;

  const rawDesc =
    article.metaDescription ||
    article.excerpt ||
    article.executiveSummary ||
    '';
  const formattedDesc =
    rawDesc.length > 155
      ? `${rawDesc.slice(0, 152)}...`
      : rawDesc.length < 120
      ? `${rawDesc} Strategic insights from Siyara Innovations, Jaipur.`
      : rawDesc;

  const canonicalUrl = `https://www.siyaradigitals.com/insights/${slug}`;

  const imageUrl = article.image?.startsWith('http')
    ? article.image
    : `https://www.siyaradigitals.com${article.image}`;

  return {
    title: formattedTitle,
    description: formattedDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      siteName: 'Siyara Innovations',
      title: `${formattedTitle} | Siyara Innovations`,
      description: formattedDesc,
      publishedTime: new Date(article.date).toISOString(),
      authors: ['https://www.yashsoni.in'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@siyarainnovations',
      title: `${formattedTitle} | Siyara Innovations`,
      description: formattedDesc,
      images: [imageUrl],
    },
  };
}

export default async function InsightsDetailPage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const baseUrl = 'https://www.siyaradigitals.com';
  const articleUrl = `${baseUrl}/insights/${slug}`;

  // === 1. BreadcrumbList Schema ===
  const breadcrumbsSchema = buildBreadcrumbs([
    { name: 'Home', url: baseUrl },
    { name: 'Insights', url: `${baseUrl}/insights` },
    { name: article.metaTitle || article.title, url: articleUrl },
  ]);

  // === 2. BlogPosting Schema with linked @id nodes ===
  const blogPostingSchema = buildBlogPostingSchema({ article, slug });

  // === 3. FAQPage Schema (only if article.faqs exists) ===
  const faqSchema = buildFaqSchema(article.faqs || []);

  // === Compose full @graph ===
  const graphNodes = [breadcrumbsSchema, blogPostingSchema];
  if (faqSchema) graphNodes.push(faqSchema);

  const fullSchema = {
    '@context': 'https://schema.org',
    '@graph': graphNodes,
  };

  return (
    <>
      <JsonLd schema={fullSchema} />
      <BlogPostClient article={article} />
    </>
  );
}
