'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Clock, 
  Eye, 
  Share2, 
  Twitter, 
  Linkedin, 
  Copy, 
  Check, 
  Bookmark, 
  Sparkles,
  ArrowUpRight,
  User
} from 'lucide-react';
import ArticleCard from './ArticleCard.jsx';
import NewsletterCTA from './NewsletterCTA.jsx';

export default function BlogPost({ article, allArticles = [], onBack, onSelectArticle }) {
  const [copied, setCopied] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0 && progressBarRef.current) {
          const ratio = Math.min(1, Math.max(0, window.scrollY / totalHeight));
          progressBarRef.current.style.transform = `scaleX(${ratio})`;
        }
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this insight from Siyara Innovations: "${article.title}"`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const handleShareLinkedin = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  // Curated highly relevant related articles for all 31 articles (balanced distribution)
  const CURATED_ARTICLE_MAP = {
    'featured-1': ['art-original-1', 'art-c4', 'art-c5'],
    'art-a1': ['art-c7', 'art-a2', 'art-d5'],
    'art-a2': ['art-c2', 'art-a1', 'art-original-3'],
    'art-a3': ['art-c5', 'art-d2', 'art-c6'],
    'art-a4': ['art-b1', 'art-a2', 'art-original-4'],
    'art-a5': ['art-a2', 'art-c2', 'art-original-3'],
    'art-b1': ['art-b7', 'art-a4', 'art-b6'],
    'art-b2': ['art-original-4', 'art-c8', 'art-b6'],
    'art-b3': ['art-c6', 'art-d4', 'art-original-4'],
    'art-b4': ['art-b8', 'art-b7', 'art-c8'],
    'art-b5': ['art-d4', 'art-original-4', 'art-c6'],
    'art-b6': ['art-b1', 'art-b2', 'art-original-1'],
    'art-b7': ['art-b4', 'art-original-2', 'art-b1'],
    'art-b8': ['art-b4', 'art-b7', 'art-original-4'],
    'art-c1': ['art-c5', 'art-a3', 'art-d2'],
    'art-c2': ['art-original-3', 'art-a2', 'art-c3'],
    'art-c3': ['art-c2', 'art-d2', 'art-c5'],
    'art-c4': ['featured-1', 'art-original-1', 'art-d3'],
    'art-d1': ['art-d5', 'art-a1', 'art-d4'],
    'art-d2': ['art-a3', 'art-c1', 'art-c3'],
    'art-d3': ['art-c4', 'art-original-1', 'art-d5'],
    'art-c5': ['art-c1', 'art-a3', 'art-d2'],
    'art-c6': ['art-c8', 'art-b3', 'art-a3'],
    'art-d4': ['art-d1', 'art-b5', 'art-a1'],
    'art-d5': ['art-d1', 'art-a1', 'art-d3'],
    'art-c7': ['art-a1', 'art-a2', 'art-c2'],
    'art-c8': ['art-c6', 'art-b2', 'art-b4'],
    'art-original-1': ['art-original-2', 'art-c4', 'featured-1'],
    'art-original-2': ['art-original-1', 'art-b7', 'art-b1'],
    'art-original-3': ['art-c2', 'art-a5', 'art-original-4'],
    'art-original-4': ['art-original-3', 'art-b2', 'art-a4']
  };

  // Curated article recommendations with algorithmic similarity fallback
  let relatedArticles = [];
  const curatedIds = CURATED_ARTICLE_MAP[article?.id];
  if (Array.isArray(curatedIds) && curatedIds.length > 0) {
    relatedArticles = curatedIds
      .map((id) => allArticles.find((item) => item.id === id))
      .filter(Boolean);
  }

  if (relatedArticles.length < 3) {
    const existingIds = new Set(relatedArticles.map((a) => a.id));
    const scoredFallbacks = allArticles
      .filter((item) => item.id !== article?.id && !existingIds.has(item.id))
      .map((item) => {
        let score = 0;
        if (item.category === article?.category) score += 4;
        if (Array.isArray(item.tags) && Array.isArray(article?.tags)) {
          const overlap = item.tags.filter((t) => article.tags.includes(t));
          score += overlap.length * 2;
        }
        return { item, score };
      })
      .sort((a, b) => b.score - a.score)
      .map((x) => x.item);

    relatedArticles = [...relatedArticles, ...scoredFallbacks].slice(0, 3);
  }

  // Precise article-to-service mapping for maximum contextual relevance across all 31 articles
  const ARTICLE_SERVICE_MAP = {
    'featured-1': [
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'Scalable Next.js applications engineered for high-concurrency enterprise traffic.' },
      { title: 'Brand Strategy & Market Positioning', slug: 'brand-strategy', desc: 'Define your market category, core commercial pillars, and distinct pricing power.' }
    ],
    'art-a1': [
      { title: 'Website Design & Digital Brand Experience', slug: 'web-design-development', desc: 'Modern responsive UX, luxury brand aesthetics, and headless CMS publishing.' },
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'Full-stack Next.js applications, server actions, and PostgreSQL database architectures.' }
    ],
    'art-a2': [
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'Scalable Next.js 15 web applications, React Server Components, and custom APIs.' },
      { title: 'Conversion Rate Optimization (CRO) & Growth Analytics', slug: 'growth-optimization', desc: 'Identify conversion friction and transform organic search visitors into qualified inquiries.' }
    ],
    'art-a3': [
      { title: 'Generative Engine Optimization (GEO) & Technical SEO', slug: 'seo-geo', desc: 'Technical SEO, structured data architectures, and Generative Engine Optimization (GEO).' },
      { title: 'Conversion Rate Optimization (CRO) & Growth Analytics', slug: 'growth-optimization', desc: 'Transform organic search visitors into qualified commercial inquiries.' }
    ],
    'art-a4': [
      { title: 'Custom E-Commerce Store Design & Development', slug: 'ecommerce-development', desc: 'High-speed Next.js storefronts, custom checkout funnels, and payment gateways.' },
      { title: 'Paid Advertising & Performance Marketing', slug: 'performance-marketing', desc: 'Data-driven paid search and social campaigns synchronized with fast landing pages.' }
    ],
    'art-a5': [
      { title: 'Cross-Platform Mobile Application Development', slug: 'mobile-app-development', desc: 'Unified React Native iOS and Android applications with offline synchronization.' },
      { title: 'UI/UX Product Design & Digital Interfaces', slug: 'ui-ux-design', desc: 'Mobile-first ergonomics, intuitive gestures, and platform-native UI patterns.' }
    ],
    'art-b1': [
      { title: 'Custom E-Commerce Store Design & Development', slug: 'ecommerce-development', desc: 'Bespoke Next.js storefronts, international currencies, and catalog architecture.' },
      { title: 'Website Design & Digital Brand Experience', slug: 'web-design-development', desc: 'Luxury editorial presentation and high-resolution portfolio layouts.' }
    ],
    'art-b2': [
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'Interactive property portals, RERA-compliant inventory filters, and CRM sync.' },
      { title: 'CRM Integration & Automated Lead Management Systems', slug: 'crm-lead-systems', desc: 'Automated WhatsApp lead capture and direct broker inquiry routing.' }
    ],
    'art-b3': [
      { title: 'Website Design & Digital Brand Experience', slug: 'web-design-development', desc: 'Patient-centric interfaces, doctor credential showcases, and clean UX.' },
      { title: 'CRM Integration & Automated Lead Management Systems', slug: 'crm-lead-systems', desc: 'Frictionless clinic appointment scheduling and WhatsApp consultation alerts.' }
    ],
    'art-b4': [
      { title: 'Website Design & Digital Brand Experience', slug: 'web-design-development', desc: 'Immersive visual storytelling, suite galleries, and heritage aesthetics.' },
      { title: 'Paid Advertising & Performance Marketing', slug: 'performance-marketing', desc: 'Targeted seasonal traveler acquisition and commission-free direct booking funnels.' }
    ],
    'art-b5': [
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'Student enrollment portals, course catalogs, and admission inquiry filters.' },
      { title: 'CRM Integration & Automated Lead Management Systems', slug: 'crm-lead-systems', desc: 'Automated student lead capture, WhatsApp notifications, and CRM distribution.' }
    ],
    'art-b6': [
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'Industrial product specification catalogs, export RFQ forms, and client portals.' },
      { title: 'Generative Engine Optimization (GEO) & Technical SEO', slug: 'seo-geo', desc: 'B2B export search visibility and entity knowledge graph architecture.' }
    ],
    'art-b7': [
      { title: 'Website Design & Digital Brand Experience', slug: 'web-design-development', desc: 'Architectural portfolio galleries, bespoke typography, and fast image pipelines.' },
      { title: 'Brand Identity, Content Strategy & Creative Direction', slug: 'content-creative', desc: 'Comprehensive brand identity systems, strategic website copywriting, and bespoke typography.' }
    ],
    'art-b8': [
      { title: 'Website Design & Digital Brand Experience', slug: 'web-design-development', desc: 'Editorial destination wedding showcases, testimonial carousels, and luxury aesthetics.' },
      { title: 'CRM Integration & Automated Lead Management Systems', slug: 'crm-lead-systems', desc: 'High-intent event inquiry forms and automated WhatsApp consultations.' }
    ],
    'art-c1': [
      { title: 'Generative Engine Optimization (GEO) & Technical SEO', slug: 'seo-geo', desc: 'Algorithmic consensus across Google Search, SearchGPT, and Perplexity.' },
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'Semantic HTML, SSR edge rendering, and structured JSON-LD architectures.' }
    ],
    'art-c2': [
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'High-performance Next.js architectures achieving sub-1.8s LCP and clean INP.' },
      { title: 'Generative Engine Optimization (GEO) & Technical SEO', slug: 'seo-geo', desc: 'Technical SEO and Schema.org graph modeling for modern search crawlers.' }
    ],
    'art-c3': [
      { title: 'Generative Engine Optimization (GEO) & Technical SEO', slug: 'seo-geo', desc: 'Technical crawl budget optimization, canonical URL enforcement, and sitemap health.' },
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'Clean server-side rendering and edge routing to resolve indexing bottlenecks.' }
    ],
    'art-c4': [
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'Resilient web application architecture built with Next.js, Node.js, and TypeScript.' },
      { title: 'Website Design & Digital Brand Experience', slug: 'web-design-development', desc: 'Bespoke corporate website design, visual identity systems, and responsive layouts.' }
    ],
    'art-d1': [
      { title: 'Website Design & Digital Brand Experience', slug: 'web-design-development', desc: 'Modern responsive corporate web design tailored for established enterprises.' },
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'Full-stack engineering for custom portals, client dashboards, and dynamic systems.' }
    ],
    'art-d2': [
      { title: 'Generative Engine Optimization (GEO) & Technical SEO', slug: 'seo-geo', desc: 'Enterprise technical search audits, entity knowledge graphs, and AI search visibility.' },
      { title: 'Conversion Rate Optimization (CRO) & Growth Analytics', slug: 'growth-optimization', desc: 'Ensure technical search visitors convert into verified commercial inquiries.' }
    ],
    'art-d3': [
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'Modern web engineering, robust cloud backends, and full source code ownership.' },
      { title: 'Website Design & Digital Brand Experience', slug: 'web-design-development', desc: 'Bespoke corporate websites engineered for brand authority and mobile performance.' }
    ],
    'art-c5': [
      { title: 'Generative Engine Optimization (GEO) & Technical SEO', slug: 'seo-geo', desc: 'Transition from traditional keyword search to AI engine citations and synthesis.' },
      { title: 'Conversion Rate Optimization (CRO) & Growth Analytics', slug: 'growth-optimization', desc: 'Design conversion funnels for high-intent visitors arriving from AI search.' }
    ],
    'art-c6': [
      { title: 'Generative Engine Optimization (GEO) & Technical SEO', slug: 'seo-geo', desc: 'Google Business Profile local 3-pack optimization and local citation consistency.' },
      { title: 'CRM Integration & Automated Lead Management Systems', slug: 'crm-lead-systems', desc: 'Instant WhatsApp routing and lead capture for local business inquiries.' }
    ],
    'art-d4': [
      { title: 'Website Design & Digital Brand Experience', slug: 'web-design-development', desc: 'Professional corporate website design that builds commercial credibility.' },
      { title: 'Conversion Rate Optimization (CRO) & Growth Analytics', slug: 'growth-optimization', desc: 'Identify conversion friction and turn casual visitors into paying clients.' }
    ],
    'art-d5': [
      { title: 'Website Design & Digital Brand Experience', slug: 'web-design-development', desc: 'Transparent contract deliverables, design tokens, and responsive mobile UX.' },
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'Complete code ownership, zero proprietary vendor lock-in, and modern frameworks.' }
    ],
    'art-c7': [
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'Transparent engineering cost breakdowns for enterprise Next.js applications.' },
      { title: 'Website Design & Digital Brand Experience', slug: 'web-design-development', desc: 'Corporate website design pricing, design systems, and headless CMS integrations.' }
    ],
    'art-c8': [
      { title: 'Generative Engine Optimization (GEO) & Technical SEO', slug: 'seo-geo', desc: 'Multi-branch local SEO architectures, store locators, and localized schema graphs.' },
      { title: 'CRM Integration & Automated Lead Management Systems', slug: 'crm-lead-systems', desc: 'Multi-location inquiry routing to regional sales representatives via WhatsApp.' }
    ],
    'art-original-1': [
      { title: 'Brand Strategy & Market Positioning', slug: 'brand-strategy', desc: 'Establish distinct market positioning, category differentiation, and buyer persona alignment.' },
      { title: 'Conversion Rate Optimization (CRO) & Growth Analytics', slug: 'growth-optimization', desc: 'Systematically optimize digital conversion funnels to scale commercial inquiry rates.' }
    ],
    'art-original-2': [
      { title: 'Brand Strategy & Market Positioning', slug: 'brand-strategy', desc: 'Strategic brand positioning, messaging frameworks, and category creation.' },
      { title: 'Brand Identity, Content Strategy & Creative Direction', slug: 'content-creative', desc: 'Comprehensive brand identity systems, bespoke typography, and vector iconography.' }
    ],
    'art-original-3': [
      { title: 'Custom Web Application & Next.js Development', slug: 'web-development', desc: 'High-performance Next.js architecture, edge caching, and resilient database queries.' },
      { title: 'Conversion Rate Optimization (CRO) & Growth Analytics', slug: 'growth-optimization', desc: 'Server-side GA4 telemetry and behavioral heatmaps to pinpoint user friction.' }
    ],
    'art-original-4': [
      { title: 'Conversion Rate Optimization (CRO) & Growth Analytics', slug: 'growth-optimization', desc: 'Server-side GA4 telemetry, user session testing, and A/B funnel experimentation.' },
      { title: 'CRM Integration & Automated Lead Management Systems', slug: 'crm-lead-systems', desc: 'Progressive disclosure intake forms and automated WhatsApp routing.' }
    ]
  };

  const getRelatedServices = () => {
    if (ARTICLE_SERVICE_MAP[article?.id]) {
      return ARTICLE_SERVICE_MAP[article.id];
    }

    const cat = article?.category || '';
    if (cat === 'Web Development' || cat === 'Technology') {
      return [
        { title: 'Custom Web Application & Next.js Engineering', slug: 'web-development', desc: 'Scalable Next.js applications, server actions, and PostgreSQL database architectures.' },
        { title: 'Bespoke Website Design & Digital Brand Experience', slug: 'web-design-development', desc: 'Modern responsive UX, luxury brand aesthetics, and headless CMS publishing.' }
      ];
    }
    if (cat === 'SEO & GEO' || cat === 'SEO') {
      return [
        { title: 'Generative Engine Optimization (GEO) & Technical SEO', slug: 'seo-geo', desc: 'Algorithmic consensus across Google Search, SearchGPT, and Perplexity.' },
        { title: 'Conversion Rate Optimization & Growth Analytics', slug: 'growth-optimization', desc: 'Identify conversion friction and transform organic search visitors into qualified inquiries.' }
      ];
    }
    if (cat === 'E-commerce') {
      return [
        { title: 'Custom E-Commerce Store Design & Development', slug: 'ecommerce-development', desc: 'High-speed Next.js storefronts, Shopify Storefront API, and custom UPI checkouts.' },
        { title: 'Paid Advertising & Performance Marketing', slug: 'performance-marketing', desc: 'Data-driven paid acquisition campaigns synchronized with dedicated landing pages.' }
      ];
    }
    if (cat === 'Brand' || cat === 'Design') {
      return [
        { title: 'Strategic Brand Positioning & Identity Design', slug: 'brand-strategy', desc: 'Establish market differentiation, pricing power, and commercial trust.' },
        { title: 'UI/UX Product Design & Digital Interfaces', slug: 'ui-ux-design', desc: 'Bespoke Figma component systems, accessible design tokens, and user journeys.' }
      ];
    }
    if (cat === 'Conversion' || cat === 'Growth') {
      return [
        { title: 'Conversion Rate Optimization & Growth Analytics', slug: 'growth-optimization', desc: 'Server-side GA4 telemetry, user session testing, and A/B funnel experimentation.' },
        { title: 'CRM Integration & Automated Lead Management Systems', slug: 'crm-lead-systems', desc: 'Instant WhatsApp routing and automated inquiry qualification.' }
      ];
    }
    return [
      { title: 'Custom Web Application & Next.js Engineering', slug: 'web-development', desc: 'Scalable Next.js applications engineered for high-concurrency enterprise traffic.' },
      { title: 'Generative Engine Optimization (GEO) & Technical SEO', slug: 'seo-geo', desc: 'Technical SEO and generative answer engine citation architecture.' }
    ];
  };

  const relatedServices = getRelatedServices();

  if (!article) return null;

  return (
    <article className="relative bg-[#080B0A] text-[#F3EFE4] selection:bg-[#063C2D] selection:text-[#E5C378]">
      {/* Top Fixed Reading Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#063C2D] z-50">
        <div 
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#19A878] origin-left will-change-transform"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {/* Atmospheric Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#063C2D]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Back Navigation & Breadcrumb */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 px-3.5 py-2 border border-[#D4AF37]/30 bg-[#063C2D]/20 text-[#CFC9BB] hover:text-[#F3EFE4] hover:border-[#D4AF37] font-sans text-xs uppercase tracking-widest transition-all duration-300 min-h-[40px]"
          >
            <ArrowLeft className="w-4 h-4 text-[#D4AF37] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 border border-[#D4AF37]/30 bg-[#063C2D]/30 px-3 py-1 text-[10px] font-sans text-[#D4AF37] uppercase tracking-widest">
            <Bookmark className="w-3 h-3 text-[#19A878]" />
            <span>{article.category}</span>
          </div>
        </div>

        {/* Article Header Lockup */}
        <header className="max-w-4xl mb-8 sm:mb-12">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-sans text-[#CFC9BB]/70 mb-4 sm:mb-6">
            <span className="px-2.5 py-1 border border-[#D4AF37]/40 bg-[#080B0A] text-[#D4AF37] uppercase tracking-widest text-[10px]">
              {article.category}
            </span>
            <span>{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-[#19A878]" />
            <div className="flex items-center gap-1.5 text-[#D4AF37]">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
            {article.views && (
              <>
                <span className="w-1 h-1 rounded-full bg-[#19A878]" />
                <div className="flex items-center gap-1.5 text-[#CFC9BB]/60">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{article.views}</span>
                </div>
              </>
            )}
          </div>

          {/* Article Title */}
          <h1 className="font-roboto text-2xl sm:text-4xl lg:text-5xl font-light text-[#F3EFE4] leading-[1.18] sm:leading-[1.12] tracking-tight mb-6 sm:mb-8 break-words">
            {article.title}
          </h1>

          {/* Author & Share Bar */}
          <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            {/* Author Profile */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full border border-[#D4AF37]/40 bg-[#063C2D]/40 flex items-center justify-center p-2 shrink-0">
                <Image 
                  src="/logo.webp" 
                  alt="Siyara Innovations"
                  width={32}
                  height={32}
                  className="object-contain"
                  style={{ mixBlendMode: 'screen' }}
                />
              </div>
              <div>
                <div className="font-sans text-sm font-semibold text-[#F3EFE4]">
                  Siyara Editorial Team
                </div>
                <div className="font-sans text-xs text-[#CFC9BB]/70">
                  Technology &amp; Strategy Desk
                </div>
              </div>
            </div>

            {/* Share Controls */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#CFC9BB]/60 mr-2 hidden sm:inline">
                Share:
              </span>
              
              <button
                onClick={handleShareTwitter}
                aria-label="Share on Twitter"
                className="w-9 h-9 border border-[#D4AF37]/20 bg-[#063C2D]/20 hover:border-[#D4AF37] hover:bg-[#063C2D] text-[#CFC9BB] hover:text-[#F3EFE4] flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                title="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </button>

              <button
                onClick={handleShareLinkedin}
                aria-label="Share on LinkedIn"
                className="w-9 h-9 border border-[#D4AF37]/20 bg-[#063C2D]/20 hover:border-[#D4AF37] hover:bg-[#063C2D] text-[#CFC9BB] hover:text-[#F3EFE4] flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopyLink}
                aria-label="Copy article link"
                className="relative w-9 h-9 border border-[#D4AF37]/20 bg-[#063C2D]/20 hover:border-[#D4AF37] hover:bg-[#063C2D] text-[#CFC9BB] hover:text-[#F3EFE4] flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                title="Copy Link"
              >
                {copied ? <Check className="w-4 h-4 text-[#19A878]" /> : <Copy className="w-4 h-4" />}
                
                {/* Toast Notification */}
                {copied && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#063C2D] border border-[#D4AF37]/40 text-[#F3EFE4] text-[10px] font-sans px-2.5 py-1 shadow-lg">
                    Link copied
                  </div>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="relative aspect-[21/9] min-h-[320px] max-h-[520px] w-full overflow-hidden border border-[#D4AF37]/25 mb-16 bg-[#063C2D]/30">
          <Image 
            src={article.image} 
            alt={article.title}
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-transparent" />
        </div>

        {/* Executive Summary Callout Box */}
        {article.executiveSummary && (
          <div className="max-w-4xl mx-auto mb-10 sm:mb-14 border border-[#D4AF37]/35 bg-[#063C2D]/20 p-5 sm:p-8 relative backdrop-blur-md rounded-xl sm:rounded-none">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
            
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="font-sans text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
                Executive Summary
              </h3>
            </div>
            <p className="font-lora text-sm sm:text-base text-[#F3EFE4]/90 font-normal leading-relaxed">
              "{article.executiveSummary}"
            </p>
          </div>
        )}

        {/* Article Body & Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Sticky Left Sidebar (Table of Contents & Key Takeaways) */}
          <aside className="lg:col-span-4 space-y-6 sm:space-y-8">
            {/* Table of Contents */}
            {article.sections && article.sections.length > 0 && (
              <div className="p-4 sm:p-6 border border-[#D4AF37]/20 bg-[#063C2D]/15 backdrop-blur-sm rounded-xl sm:rounded-none">
                <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3 sm:mb-4 pb-2 border-b border-[#D4AF37]/15">
                  Table of Contents
                </h4>
                <nav className="space-y-2.5 sm:space-y-3 font-sans text-xs">
                  {article.sections.map((sec, idx) => (
                    <a 
                      key={sec.id || idx}
                      href={`#${sec.id || `sec-${idx}`}`}
                      className="block text-[#CFC9BB]/70 hover:text-[#D4AF37] transition-colors leading-snug py-0.5"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Key Takeaways Card */}
            {article.keyTakeaways && article.keyTakeaways.length > 0 && (
              <div className="p-4 sm:p-6 border border-[#19A878]/30 bg-[#080B0A] relative rounded-xl sm:rounded-none">
                <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#19A878] mb-3 sm:mb-4 pb-2 border-b border-[#19A878]/20 flex items-center gap-2">
                  <Bookmark className="w-3.5 h-3.5 text-[#19A878]" />
                  Key Takeaways
                </h4>
                <ul className="space-y-2.5 sm:space-y-3 font-sans text-xs text-[#CFC9BB]/85 leading-relaxed">
                  {article.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          {/* Main Editorial Body Content */}
          <div className="lg:col-span-8 space-y-12">
            {article.sections && article.sections.map((section, idx) => (
              <section id={section.id || `sec-${idx}`} key={idx} className="scroll-mt-32 space-y-6">
                {/* Section Title */}
                <h2 className="font-roboto text-2xl sm:text-3xl font-normal text-[#F3EFE4] leading-tight pb-3 border-b border-[#D4AF37]/15">
                  {section.title}
                </h2>

                {/* Section Content Paragraphs */}
                {section.content && section.content.map((p, pIdx) => {
                  if (typeof p === 'string' && (p.includes('<ul') || p.includes('<ol') || p.includes('<p>') || p.includes('<strong>'))) {
                    return (
                      <div 
                        key={pIdx} 
                        className="font-sans text-sm sm:text-base text-[#CFC9BB]/90 leading-relaxed font-light article-prose space-y-4"
                        dangerouslySetInnerHTML={{ __html: p }} 
                      />
                    );
                  }
                  return (
                    <p key={pIdx} className="font-lora text-sm sm:text-base text-[#CFC9BB]/90 leading-relaxed font-light">
                      {p}
                    </p>
                  );
                })}

                {/* Supporting In-Article Visual */}
                {section.image && (
                  <figure className="my-8 relative aspect-[16/9] w-full overflow-hidden border border-[#D4AF37]/25 bg-[#063C2D]/20">
                    <Image 
                      src={section.image} 
                      alt={section.imageAlt || section.title || article.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                    {section.imageCaption && (
                      <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-xs font-sans text-[#CFC9BB]/70 border-t border-[#D4AF37]/15 bg-[#080B0A]/90 z-10">
                        {section.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {/* Optional Pull Quote */}
                {section.quote && (
                  <blockquote className="my-8 p-6 border-l-2 border-[#D4AF37] bg-[#063C2D]/30 font-lora text-lg text-[#F3EFE4] leading-relaxed">
                    "{section.quote}"
                  </blockquote>
                )}
              </section>
            ))}

            {/* Tags Lockup */}
            {article.tags && (
              <div className="pt-8 border-t border-[#D4AF37]/20 flex flex-wrap items-center gap-2">
                <span className="text-xs font-sans uppercase text-[#CFC9BB]/60 mr-2">Tags:</span>
                {article.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 border border-[#D4AF37]/20 bg-[#080B0A] text-[#CFC9BB]/80 text-xs font-sans">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* ============================================ */}
            {/* Visible FAQ Section — Powers FAQPage Schema */}
            {/* ============================================ */}
            {article.faqs && article.faqs.length > 0 && (
              <section className="mt-14 pt-10 border-t border-[#D4AF37]/20" aria-label="Frequently Asked Questions">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-[2px] bg-[#D4AF37]" />
                  <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {article.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-[#D4AF37]/20 bg-[#063C2D]/10 p-5 hover:border-[#D4AF37]/40 transition-colors duration-200"
                    >
                      <h3 className="font-sans text-sm font-semibold text-[#F3EFE4] mb-3 leading-snug">
                        {faq.q}
                      </h3>
                      <p className="font-lora text-xs sm:text-sm text-[#CFC9BB]/85 leading-relaxed font-light">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Detailed Author Profile Card */}
        <div className="max-w-4xl mx-auto mt-20 p-8 sm:p-10 border border-[#D4AF37]/25 bg-[#063C2D]/15 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37]/40 bg-[#063C2D]/40 flex items-center justify-center p-3 shrink-0">
            <Image 
              src="/logo.webp" 
              alt="Siyara Innovations"
              width={64}
              height={64}
              className="object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
          </div>
          <div>
            <div className="text-xs font-sans uppercase tracking-widest text-[#D4AF37] mb-1">
              Published By
            </div>
            <h3 className="font-roboto text-xl text-[#F3EFE4] font-normal mb-1">
              Siyara Editorial Team
            </h3>
            <p className="text-xs font-lora text-[#19A878] font-medium mb-3">
              Technology &amp; Strategy Desk
            </p>
            <p className="font-lora text-xs text-[#CFC9BB]/80 leading-relaxed font-light">
              The research and editorial desk at Siyara Innovations, analyzing modern web engineering, search engine optimization, and connected digital systems for growing businesses.
            </p>
          </div>
        </div>

        {/* Related Services Pathways */}
        {relatedServices && relatedServices.length > 0 && (
          <section className="mt-20 pt-12 border-t border-[#D4AF37]/20">
            <div className="mb-6">
              <span className="text-xs font-sans uppercase tracking-widest text-[#19A878] font-semibold">
                RELATED CAPABILITIES
              </span>
              <h3 className="font-roboto text-xl sm:text-2xl font-normal text-[#F3EFE4] mt-1">
                Explore Engineering &amp; Strategic Disciplines
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {relatedServices.map((svc, sIdx) => (
                <Link
                  key={sIdx}
                  href={`/services/${svc.slug}`}
                  className="p-5 rounded-xl bg-[#063C2D]/15 border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:bg-[#063C2D]/30 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-roboto text-base sm:text-lg text-[#F3EFE4] group-hover:text-[#D4AF37] transition-colors mb-2 leading-snug">
                      {svc.title}
                    </h4>
                    <p className="font-lora text-xs text-[#CFC9BB]/75 font-light leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D4AF37]/10 flex items-center justify-between text-xs font-medium text-[#19A878] group-hover:text-[#D4AF37] transition-colors">
                    <span>View Service Discipline</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Recommended Insights */}
        {relatedArticles.length > 0 && (
          <section className="mt-20 pt-16 border-t border-[#D4AF37]/20">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-sans uppercase tracking-widest text-[#D4AF37]">
                  RECOMMENDED READING
                </span>
                <h3 className="font-roboto text-2xl sm:text-3xl font-light text-[#F3EFE4] mt-1">
                  More Strategic Insights
                </h3>
              </div>

              <Link
                href="/insights"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider hover:text-[#E5C378]"
              >
                <span>View All Articles</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relArt) => (
                <div key={relArt.id}>
                  <ArticleCard article={relArt} onSelectArticle={onSelectArticle} />
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Integrated Newsletter Subscription CTA */}
      <NewsletterCTA />
    </article>
  );
}
