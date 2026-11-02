import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, MessageCircle, CheckCircle, Layers, Award } from 'lucide-react';
import { caseStudies, getApprovedCaseStudies, getCaseStudyBySlug } from '../../../src/data/caseStudies';
import JsonLd, { buildBreadcrumbs } from '../../../src/components/common/JsonLd';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const approved = getApprovedCaseStudies();
  return approved.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: 'Project Not Found | Siyara Innovations',
      robots: { index: false, follow: true },
    };
  }

  const title = `${study.name} Case Study | ${study.industry} Web Design Jaipur`;
  const description = `${study.name} project showcase by Siyara Innovations: ${study.summary.slice(0, 150)}...`;
  const canonicalUrl = `https://www.siyaradigitals.com/work/${study.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: `${title} | Siyara Innovations`,
      description,
      images: [
        {
          url: study.screenshot,
          width: 1200,
          height: 630,
          alt: `${study.name} Web Showcase · Siyara Innovations`,
        },
      ],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Siyara Innovations`,
      description,
      images: [study.screenshot],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbs([
    { name: 'Home', url: 'https://www.siyaradigitals.com' },
    { name: 'Work', url: 'https://www.siyaradigitals.com/work' },
    { name: study.name, url: `https://www.siyaradigitals.com/work/${study.slug}` },
  ]);

  const creativeWorkSchema = {
    '@type': 'CreativeWork',
    '@id': `https://www.siyaradigitals.com/work/${study.slug}#showcase`,
    'name': `${study.name} — Web Design & Digital Showcase`,
    'headline': `${study.name} Project Showcase`,
    'description': study.summary,
    'image': study.screenshot,
    'author': {
      '@type': 'Organization',
      '@id': 'https://www.siyaradigitals.com/#organization',
      'name': 'Siyara Innovations',
      'url': 'https://www.siyaradigitals.com',
    },
    'provider': {
      '@id': 'https://www.siyaradigitals.com/#organization',
    },
    'url': `https://www.siyaradigitals.com/work/${study.slug}`,
    'genre': study.industry,
    'inLanguage': 'en-IN',
  };

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbs, creativeWorkSchema],
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Siyara Innovations, I reviewed your work on ${study.name} (${study.industry}) and would like to discuss a similar project.`
  );
  const whatsappUrl = `https://wa.me/919587269209?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-[#070A09] text-[#F3EFE3] pt-32 pb-24 px-4 sm:px-6 lg:px-12">
      <JsonLd schema={schemaGraph} />

      <div className="max-w-5xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-[#D9B45F] hover:text-[#E8C979] uppercase transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="mb-12 border-b border-[#18A982]/15 pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-[10px] font-sans font-bold tracking-[0.2em] uppercase bg-[#0B5E49]/20 text-[#19A878] border border-[#18A982]/30">
              {study.industry}
            </span>
            <span className="text-xs font-sans text-[#9D9B91]">
              Verified Production Showcase
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F3EFE3] tracking-tight leading-tight mb-6">
            {study.name}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-[#ECE7D8] font-light leading-relaxed max-w-3xl mb-8">
            {study.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {study.demoUrl && (
              <a
                href={study.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all shadow-lg shadow-[#D9B45F]/15 hover:-translate-y-0.5"
              >
                <span>Launch Live Demonstration</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#D9B45F]/40 hover:border-[#D9B45F] text-[#F3EFE3] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-colors bg-[#080B0A]/80"
            >
              <MessageCircle className="w-4 h-4 text-[#D9B45F]" />
              <span>Discuss Similar Project</span>
            </a>
          </div>
        </header>

        {/* Screenshot / Preview */}
        {study.screenshot && (
          <div className="mb-14 rounded-2xl overflow-hidden border border-[#18A982]/20 shadow-2xl relative aspect-[16/9] bg-[#080B0A]">
            <Image
              src={study.screenshot}
              alt={`${study.name} Production Interface`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A09]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* Technical Architecture & Scope Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          {/* What We Built */}
          <div className="p-8 rounded-2xl bg-[#0B110F] border border-[#18A982]/15">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-5 h-5 text-[#D9B45F]" />
              <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#F3EFE3]">
                What We Built &amp; Deployed
              </h2>
            </div>
            <ul className="space-y-3.5">
              {study.whatWeBuilt.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#9D9B91] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#18A982] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results & Standards */}
          <div className="p-8 rounded-2xl bg-[#0B110F] border border-[#18A982]/15">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-[#D9B45F]" />
              <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#F3EFE3]">
                Verified Technical Benchmarks
              </h2>
            </div>
            <ul className="space-y-3.5 mb-8">
              {study.results.map((res, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#ECE7D8] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9B45F] mt-2 shrink-0" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>

            {/* Stack Tags */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-[#D9B45F]" />
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#D9B45F]">
                  Technology Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[#070A09] text-[#9D9B91] border border-[#18A982]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Conversion Box */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0B1A15] to-[#070A09] border border-[#D9B45F]/30 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.24em] text-[#D9B45F] uppercase block mb-3">
              START YOUR PROJECT
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] font-normal mb-4">
              Looking for a similar standard for your business?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light mb-8 leading-relaxed">
              We design and build bespoke Next.js websites, technical SEO architectures, and brand identities with transparent timelines and no template shortcuts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all shadow-xl shadow-[#D9B45F]/15 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Studio on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#F3EFE3]/25 hover:border-[#D9B45F] text-[#F3EFE3] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-colors"
              >
                <span>Submit Inquiry Form</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
