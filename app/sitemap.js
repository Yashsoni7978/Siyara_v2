import { FEATURED_ARTICLE, BLOG_ARTICLES } from '../src/data/blogArticles';

export const dynamic = "force-static";

const NOINDEX_ARTICLES = new Set([
  'new-digital-ecosystem-strategy-technology-growth',
  'what-is-digital-architecture',
  'how-to-choose-digital-architecture-studio-rajasthan',
  'building-digital-strategy-drives-growth',
  'what-is-brand-strategy-framework',
  'what-makes-a-high-performing-website',
  'how-to-get-more-enquiries-from-your-website',
  'how-to-rank-chatgpt-perplexity-india',
  'nextjs-vs-wordpress-seo-core-web-vitals',
  'fix-crawled-currently-not-indexed-google-search-console',
  'seo-geo-search-visibility-prepare-for-ai-search',
  'custom-nextjs-website-price-india',
  'ecommerce-website-development-cost-india',
  'mobile-app-development-cost-jaipur',
  'hotel-resort-website-design-rajasthan',
  'coaching-institute-school-website-design-jaipur',
  'b2b-manufacturing-website-sitapura-vki-jaipur',
  'jewellery-website-design-jaipur-johari-bazaar',
]);

export default async function sitemap() {
  const baseUrl = 'https://www.siyaradigitals.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // 1. Core Studio & Agency Routes
  const coreRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/work', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/insights', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/industries', priority: 0.85, changeFrequency: 'weekly' },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. 4 Core Services ONLY (Secondary services are noindexed)
  const coreServiceRoutes = [
    '/services/web-design-development',
    '/services/seo-services',
    '/services/social-media-marketing',
    '/services/branding',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 3. 4 Indexable Industry Verticals ONLY (per Owner Default D3)
  const indexableIndustryRoutes = [
    '/industries/healthcare',
    '/industries/interior-design',
    '/industries/event-management',
    '/industries/real-estate',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.88,
  }));

  // 4. Legal & Compliance Routes
  const legalRoutes = ['/faq', '/privacy', '/terms'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  // 5. Indexable Editorial Articles ONLY (filtering out 18 noindexed articles)
  const allArticles = [FEATURED_ARTICLE, ...BLOG_ARTICLES];
  const indexableArticles = allArticles.filter((art) => !NOINDEX_ARTICLES.has(art.slug));

  const insightRoutes = indexableArticles.map((article) => {
    let articleDate = currentDate;
    try {
      if (article.date) {
        articleDate = new Date(article.date).toISOString().split('T')[0];
      }
    } catch (e) {
      articleDate = currentDate;
    }

    return {
      url: `${baseUrl}/insights/${article.slug}`,
      lastModified: articleDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    };
  });

  return [
    ...coreRoutes,
    ...coreServiceRoutes,
    ...indexableIndustryRoutes,
    ...legalRoutes,
    ...insightRoutes,
  ];
}
