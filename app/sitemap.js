import { FEATURED_ARTICLE, BLOG_ARTICLES } from '../src/data/blogArticles';
import { SERVICES_DATA } from './services/[slug]/page';
import { projectsData } from '../src/data/projectsData';

export const dynamic = "force-static";

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
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. High-Intent Commercial Target Landers
  const commercialRoutes = [
    '/nextjs-web-development-jaipur',
    '/geo-agency-india',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.95,
  }));

  // 3. Dedicated Service Disciplines (/services/*)
  const serviceSlugs = Object.keys(SERVICES_DATA);
  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // 4. Industry Verticals (/industries/*)
  const industryRoutes = [
    '/industries/real-estate',
    '/industries/healthcare',
    '/industries/jewellery-luxury',
    '/industries/hospitality',
    '/industries/education',
    '/industries/ecommerce',
    '/industries/manufacturing',
    '/industries/event-management',
    '/industries/interior-design',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.88,
  }));

  // 5. Legal & Compliance Routes
  const legalRoutes = ['/faq', '/privacy', '/terms'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  // 6. Dynamic Editorial & Insights Articles (/insights/* ONLY — canonical)
  const allArticles = [FEATURED_ARTICLE, ...BLOG_ARTICLES];

  const insightRoutes = allArticles.map((article) => {
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

  // 7. Individual Portfolio & Architecture Showcases (/work/*)
  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: project.status === 'LIVE' ? 0.8 : 0.65,
  }));

  return [
    ...coreRoutes,
    ...commercialRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...legalRoutes,
    ...insightRoutes,
    ...projectRoutes,
  ];
}
