import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Compass, 
  MessageCircle, 
  Mail,
  ShieldCheck,
  Calendar,
  Code2
} from 'lucide-react';
import { projectsData, CLASSIFICATION_CONFIG } from '../../../src/data/projectsData';
import { siteConfig } from '../../../src/data/siteConfig';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Siyara Innovations',
      description: 'The requested portfolio project could not be found.',
    };
  }

  const title = `${project.name || project.title} · ${project.industry} Architecture`;
  const description = `${project.description} Explore this ${project.industry} digital architecture and Next.js web system engineered by Siyara Innovations.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.siyaradigitals.com/work/${project.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `https://www.siyaradigitals.com/work/${project.slug}`,
      title,
      description,
      siteName: 'Siyara Innovations',
      images: [
        {
          url: project.image || 'https://www.siyaradigitals.com/images/siyara_og_image.png',
          width: 1200,
          height: 630,
          alt: `${project.name} · Siyara Innovations Portfolio`,
        },
      ],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.image || 'https://www.siyaradigitals.com/images/siyara_og_image.png'],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const classification = project.classification || (project.status === 'LIVE' ? 'LIVE_DEMO' : 'CONCEPT');
  const classConfig = CLASSIFICATION_CONFIG[classification] || CLASSIFICATION_CONFIG.CONCEPT;

  // Find 3 related projects from same industry (excluding current)
  let relatedProjects = projectsData
    .filter((p) => p.id !== project.id && p.industry === project.industry)
    .slice(0, 3);

  // If fewer than 3, backfill with featured or other projects
  if (relatedProjects.length < 3) {
    const additional = projectsData
      .filter((p) => p.id !== project.id && !relatedProjects.some((rp) => rp.id === p.id))
      .slice(0, 3 - relatedProjects.length);
    relatedProjects = [...relatedProjects, ...additional];
  }

  // Schema.org Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.siyaradigitals.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Work',
            item: 'https://www.siyaradigitals.com/work',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.name || project.title,
            item: `https://www.siyaradigitals.com/work/${project.slug}`,
          },
        ],
      },
      {
        '@type': 'CreativeWork',
        '@id': `https://www.siyaradigitals.com/work/${project.slug}#project`,
        url: `https://www.siyaradigitals.com/work/${project.slug}`,
        name: project.name || project.title,
        headline: project.heroHeadline || project.projectType || project.name,
        description: project.description,
        image: project.image,
        genre: project.industry,
        creator: {
          '@type': 'Organization',
          name: 'Siyara Innovations',
          url: 'https://www.siyaradigitals.com',
        },
      },
    ],
  };

  return (
    <article className="min-h-screen bg-[#080B0A] text-[#F3EFE4] selection:bg-[#063C2D] selection:text-[#19A878]">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── SECTION 01: PROJECT HERO ─────────────────────────────────── */}
      <header className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#080B0A] via-[#0B110F] to-[#080B0A]">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-glow opacity-60 pointer-events-none blur-3xl" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.16em] uppercase text-[#A5B8AA] hover:text-[#19A878] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#19A878] py-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio</span>
            </Link>

            {/* Classification Badge */}
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-[0.14em] uppercase border ${classConfig.badgeClass}`}>
              {classification === 'DELIVERED_PROJECT' && <CheckCircle2 className="w-3 h-3 text-[#19A878]" />}
              {classification === 'LIVE_DEMO' && <Sparkles className="w-3 h-3 text-[#D9B45F]" />}
              {classification === 'CONCEPT' && <Compass className="w-3 h-3 text-[#A5B8AA]" />}
              <span>{classConfig.badgeText}</span>
            </div>
          </div>

          {/* Project Title & Headline */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-sans text-xs font-bold tracking-[0.24em] text-[#D9B45F]">
                PROJECT {project.id}
              </span>
              <span className="h-[1px] w-6 bg-white/20" />
              <span className="font-sans text-xs font-medium tracking-[0.2em] text-[#A5B8AA] uppercase">
                {project.industry}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-[#F3EFE4] mb-6">
              {project.name || project.title}
            </h1>

            <p className="font-sans text-base sm:text-xl text-[#A5B8AA] font-light leading-relaxed mb-8 max-w-3xl">
              {project.projectType || project.tagline}
            </p>

            {/* Live Link Action (if present) */}
            {project.link && (
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <span className="text-xs font-sans text-[#A5B8AA]">
                  Opens interactive system in a new tab
                </span>
              </div>
            )}
          </div>

          {/* Project Specification Metadata Strip */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <span className="text-[10px] font-sans font-semibold tracking-widest text-[#D9B45F] uppercase block mb-1">
                Classification
              </span>
              <span className="font-sans text-sm text-[#F3EFE4] font-medium">
                {classConfig.label}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-sans font-semibold tracking-widest text-[#D9B45F] uppercase block mb-1">
                Industry
              </span>
              <span className="font-sans text-sm text-[#F3EFE4] font-medium">
                {project.industry}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-sans font-semibold tracking-widest text-[#D9B45F] uppercase block mb-1">
                Core Capabilities
              </span>
              <span className="font-sans text-sm text-[#F3EFE4] font-medium">
                {Array.isArray(project.services) ? project.services.join(', ') : 'Digital Architecture'}
              </span>
            </div>

            <div>
              <span className="text-[10px] font-sans font-semibold tracking-widest text-[#D9B45F] uppercase block mb-1">
                Status
              </span>
              <span className="font-sans text-sm text-[#F3EFE4] font-medium flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${project.status === 'LIVE' ? 'bg-[#19A878]' : 'bg-[#D9B45F]'}`} />
                <span>{project.status === 'LIVE' ? 'Live & Interactive' : 'Architectural Concept'}</span>
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* ── SECTION 02: HERO VISUAL SHOWCASE ─────────────────────────── */}
      <section className="relative -mt-6 sm:-mt-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 z-20">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden border border-white/15 shadow-2xl bg-[#0B110F]">
          <Image
            src={project.image}
            alt={`${project.name} architectural interface preview`}
            fill
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-transparent opacity-60" />
        </div>
      </section>

      {/* ── SECTION 03: ARCHITECTURAL OVERVIEW & SPECIFICATIONS ──────── */}
      <section className="py-20 sm:py-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Narrative Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Project Overview */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F3EFE4] font-normal mb-4">
                System Overview
              </h2>
              <div className="h-[1px] w-12 bg-[#19A878] mb-6" />
              <p className="font-sans text-base sm:text-lg text-[#A5B8AA] font-light leading-relaxed mb-6">
                {project.description}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#A5B8AA]/90 font-light leading-relaxed">
                Engineered to demonstrate high-performance web architecture, conversion-focused layout hierarchy, and responsive interface design for the {project.industry} category. Built with modern web standards and structured for speed, crawlability, and fluid cross-device execution.
              </p>
            </div>

            {/* System Capabilities */}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE4] font-normal mb-4">
                Architectural Capabilities
              </h3>
              <div className="h-[1px] w-12 bg-[#D9B45F] mb-6" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Array.isArray(project.services) && project.services.map((service, idx) => (
                  <div key={idx} className="p-4 border border-white/10 bg-[#063C2D]/20 rounded-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Layers className="w-4 h-4 text-[#19A878]" />
                      <span className="font-sans text-xs font-semibold tracking-wider text-[#F3EFE4] uppercase">
                        {service}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[#A5B8AA] font-light leading-relaxed">
                      Integrated into the core digital system architecture for performance, clarity, and conversion flow.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Classification Transparency Notice */}
            <div className="p-6 sm:p-8 border border-white/15 bg-[#063C2D]/25 rounded-sm relative overflow-hidden">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#19A878] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-sm font-bold tracking-wider uppercase text-[#F3EFE4] mb-2">
                    Transparent Scope Disclosure · {classConfig.label}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#A5B8AA] leading-relaxed mb-4">
                    {classification === 'DELIVERED_PROJECT' && (
                      'This project is a custom production platform engineered and deployed for live production use under the client’s domain.'
                    )}
                    {classification === 'LIVE_DEMO' && (
                      `This project is a fully functioning live demonstration engineered by Siyara Innovations to illustrate real-time performance, layout architecture, and user flows for the ${project.industry} vertical. Prospective clients can test and evaluate the interactive system directly.`
                    )}
                    {classification === 'CONCEPT' && (
                      `This project is an architectural concept and design prototype developed by Siyara Innovations exploring user experience, visual identity, and interface workflows for ${project.industry} businesses.`
                    )}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-bold tracking-wider text-[#D9B45F] hover:text-[#19A878] transition-colors uppercase"
                    >
                      <span>Explore Live Demonstration (New Tab)</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Right Specification Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Tech Stack Card */}
            <div className="p-6 border border-white/10 bg-[#0B110F] rounded-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <Code2 className="w-4 h-4 text-[#D9B45F]" />
                <h3 className="font-sans text-xs font-bold tracking-widest text-[#F3EFE4] uppercase">
                  Technical Foundation
                </h3>
              </div>

              <ul className="space-y-3 text-xs font-sans text-[#A5B8AA]">
                <li className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-[#A5B8AA]/70">Framework</span>
                  <span className="font-medium text-[#F3EFE4]">Next.js (App Router)</span>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-[#A5B8AA]/70">Rendering</span>
                  <span className="font-medium text-[#F3EFE4]">Static & Edge Optimized</span>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-[#A5B8AA]/70">Styling</span>
                  <span className="font-medium text-[#F3EFE4]">Tailwind CSS</span>
                </li>
                <li className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-[#A5B8AA]/70">Structured Data</span>
                  <span className="font-medium text-[#F3EFE4]">Schema.org JSON-LD</span>
                </li>
                <li className="flex items-center justify-between py-1">
                  <span className="text-[#A5B8AA]/70">Deployment</span>
                  <span className="font-medium text-[#F3EFE4]">Global Edge Network</span>
                </li>
              </ul>
            </div>

            {/* Direct Consultation Box */}
            <div className="p-6 border border-[#19A878]/30 bg-[#063C2D]/30 rounded-sm">
              <h3 className="font-sans text-xs font-bold tracking-widest text-[#19A878] uppercase mb-2">
                Engineer a Similar System
              </h3>
              <p className="font-sans text-xs text-[#A5B8AA] leading-relaxed mb-6">
                Discuss custom digital architecture, high-speed Next.js web development, or search positioning for your business.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.email}?subject=Project%20Inquiry%20regarding%20${encodeURIComponent(project.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#19A878] hover:bg-[#1EB884] text-[#080B0A] font-sans text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Studio</span>
                </a>

                <a
                  href={`${siteConfig.whatsappUrl}&text=Hello%20Siyara%20Innovations%2C%20I%20am%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(project.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-white/20 hover:border-[#19A878] bg-white/5 text-[#F3EFE4] font-sans text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#19A878]" />
                  <span>WhatsApp Studio</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 04: RELATED PROJECTS ─────────────────────────────── */}
      <section className="py-20 border-t border-white/10 bg-[#070A09]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] uppercase block mb-2">
                Portfolio Continuity
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EFE4] font-normal">
                Related {project.industry} Systems
              </h2>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-bold tracking-widest text-[#19A878] hover:text-[#F3EFE4] transition-colors uppercase"
            >
              <span>Explore All 85 Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedProjects.map((rel) => {
              const relClass = rel.classification || (rel.status === 'LIVE' ? 'LIVE_DEMO' : 'CONCEPT');
              const relConfig = CLASSIFICATION_CONFIG[relClass] || CLASSIFICATION_CONFIG.CONCEPT;

              return (
                <Link
                  key={rel.id}
                  href={`/work/${rel.slug}`}
                  className="group block p-6 border border-white/10 bg-[#0A0E0C] hover:border-[#19A878]/40 transition-all duration-300 rounded-sm"
                >
                  <div className="relative aspect-[16/10] w-full mb-4 overflow-hidden rounded-sm bg-[#070A09]">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className={`text-[9px] font-sans font-bold tracking-wider px-2 py-0.5 rounded-full uppercase border ${relConfig.badgeClass}`}>
                        {relConfig.shortLabel}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-sans font-semibold tracking-widest text-[#D9B45F] uppercase block mb-1">
                    {rel.industry}
                  </span>
                  <h3 className="font-serif text-xl text-[#F3EFE4] font-normal group-hover:text-[#19A878] transition-colors mb-2">
                    {rel.name}
                  </h3>
                  <p className="font-sans text-xs text-[#A5B8AA] line-clamp-2 leading-relaxed">
                    {rel.description}
                  </p>
                </Link>
              );
            })}
          </div>

        </div>
      </section>
    </article>
  );
}
