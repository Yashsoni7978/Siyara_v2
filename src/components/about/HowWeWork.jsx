'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function HowWeWork() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const disciplines = [
    {
      id: '01',
      title: 'Brand & Strategy',
      summary: 'MARKET POSITIONING & CORE MESSAGE',
      description:
        'Diagnosing competitive whitespace, value propositions, and customer expectations to define the foundational strategic roadmap.',
      feedsInto: 'Creative & Content',
      link: '/services/brand-strategy',
    },
    {
      id: '02',
      title: 'Creative & Content',
      summary: 'VISUAL IDENTITY & COMMUNICATIONS',
      description:
        'Translating positioning into high-fidelity design systems, editorial copywriting, and distinctive visual assets that command recognition.',
      feedsInto: 'Digital Experiences & Development',
      link: '/services/content-creative',
    },
    {
      id: '03',
      title: 'Digital Experiences & Development',
      summary: 'HIGH-PERFORMANCE NEXT.JS CODE',
      description:
        'Engineering custom web platforms and e-commerce applications built for sub-second page loads, responsive ergonomics, and zero layout shift.',
      feedsInto: 'Marketing & Discoverability',
      link: '/services/web-design-development',
    },
    {
      id: '04',
      title: 'Marketing & Discoverability',
      summary: 'SEO, GEO & HIGH-INTENT ACQUISITION',
      description:
        'Optimizing structured data for Google and AI engines (ChatGPT, Perplexity) paired with targeted performance campaigns to capture qualified demand.',
      feedsInto: 'Automation & Business Systems',
      link: '/services/seo-geo',
    },
    {
      id: '05',
      title: 'Automation & Business Systems',
      summary: 'CRM WORKFLOWS & LEAD OPERATIONS',
      description:
        'Integrating operational pipelines and automated routing so that inbound inquiries are qualified and processed without manual drag.',
      feedsInto: 'Analytics & Growth',
      link: '/services/ai-automation',
    },
    {
      id: '06',
      title: 'Analytics & Growth',
      summary: 'CONVERSION OPTIMIZATION & ITERATION',
      description:
        'Analyzing user session behavior, funnel drop-offs, and commercial conversion metrics to continuously refine and compound system performance.',
      feedsInto: 'Brand & Strategy',
      link: '/services/growth-optimization',
    },
  ];

  return (
    <section
      id="how-we-work"
      aria-label="How We Work — Connected Approach"
      className="relative py-24 sm:py-28 lg:py-36 bg-[#F3EFE4] text-[#080B0A] overflow-hidden"
    >
      {/* Subtle Warm Ivory Atmosphere (Background remains visible throughout) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE4] via-[#ECE7D8]/40 to-[#F3EFE4] opacity-80 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-roboto font-medium tracking-[0.24em] text-[#B9923F]">
                05
              </span>
              <span className="w-8 h-[1px] bg-[#063C2D]/30" />
              <span className="text-[11px] sm:text-xs font-roboto font-semibold tracking-[0.24em] text-[#063C2D] uppercase">
                HOW WE WORK
              </span>
            </div>
            <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl font-normal text-[#080B0A] leading-[1.12] sm:leading-[1.08] tracking-tight">
              Different disciplines.{' '}
              <span className="italic font-roboto text-[#063C2D]">
                One connected approach.
              </span>
            </h2>
          </div>
          
          <div className="max-w-md">
            <p className="font-lora text-sm sm:text-base text-[#101613]/75 font-light leading-relaxed">
              Each capability operates not in a vacuum, but as part of an interlocking growth architecture where every discipline reinforces the next.
            </p>
          </div>
        </div>

        {/* Open Six-Discipline Editorial Layout (No cards, fine separators) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#080B0A]/10 border-t border-[#080B0A]/10">
          {disciplines.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: easeCustom }}
              className={`py-10 sm:py-12 ${
                idx === 0
                  ? 'md:pr-8 lg:pr-12'
                  : idx === 1
                  ? 'md:px-8 lg:px-12'
                  : 'md:pl-8 lg:pl-12'
              } flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-roboto font-semibold tracking-wider text-[#B9923F]">
                    {item.id}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-roboto font-medium tracking-wider text-[#063C2D] uppercase">
                    <span>FEEDS INTO</span>
                    <ArrowRight className="w-3 h-3 text-[#B9923F]" />
                    <span className="text-[#080B0A]/70 truncate max-w-[130px]">{item.feedsInto}</span>
                  </div>
                </div>

                <h3 className="font-roboto text-2xl sm:text-3xl font-normal text-[#080B0A] mb-1.5 group-hover:text-[#063C2D] transition-colors">
                  {item.title}
                </h3>
                <div className="text-[10px] font-roboto font-semibold tracking-wider text-[#063C2D] uppercase mb-4">
                  {item.summary}
                </div>

                <p className="font-lora text-xs sm:text-sm text-[#101613]/75 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#080B0A]/10">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-xs font-roboto font-semibold tracking-wider text-[#063C2D] hover:text-[#0B5A43] uppercase transition-colors"
                >
                  <span>EXPLORE DISCIPLINE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#063C2D]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row of 3 Disciplines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#080B0A]/10 border-t border-b border-[#080B0A]/10">
          {disciplines.slice(3, 6).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.08, ease: easeCustom }}
              className={`py-10 sm:py-12 ${
                idx === 0
                  ? 'md:pr-8 lg:pr-12'
                  : idx === 1
                  ? 'md:px-8 lg:px-12'
                  : 'md:pl-8 lg:pl-12'
              } flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-roboto font-semibold tracking-wider text-[#B9923F]">
                    {item.id}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-roboto font-medium tracking-wider text-[#063C2D] uppercase">
                    <span>FEEDS INTO</span>
                    <ArrowRight className="w-3 h-3 text-[#B9923F]" />
                    <span className="text-[#080B0A]/70 truncate max-w-[130px]">{item.feedsInto}</span>
                  </div>
                </div>

                <h3 className="font-roboto text-2xl sm:text-3xl font-normal text-[#080B0A] mb-1.5 group-hover:text-[#063C2D] transition-colors">
                  {item.title}
                </h3>
                <div className="text-[10px] font-roboto font-semibold tracking-wider text-[#063C2D] uppercase mb-4">
                  {item.summary}
                </div>

                <p className="font-lora text-xs sm:text-sm text-[#101613]/75 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#080B0A]/10">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-xs font-roboto font-semibold tracking-wider text-[#063C2D] hover:text-[#0B5A43] uppercase transition-colors"
                >
                  <span>EXPLORE DISCIPLINE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#063C2D]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Restrained Editorial Highlight Strip (No heavy boxes) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#080B0A]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-roboto font-semibold tracking-[0.24em] text-[#B9923F] uppercase block mb-1">
              THE VIRTUOUS COMPOUNDING LOOP
            </span>
            <p className="font-lora text-sm sm:text-base text-[#101613]/80 font-light leading-relaxed">
              Analytics insights from live user interactions feed directly back into brand and search strategy, ensuring your digital architecture continuously compounds value quarter over quarter.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center justify-center min-h-[44px] px-8 rounded-full bg-[#152D24] hover:bg-[#1C3B30] border border-[#0B5741] hover:border-[#147A5C] text-[#F3EFE4] text-xs font-roboto font-semibold tracking-[0.16em] uppercase transition-all duration-300 shadow-md hover:shadow-[0_0_14px_rgba(25,168,120,0.22)] flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878]"
          >
            <span>VIEW ALL SERVICES</span>
            <ArrowUpRight className="w-4 h-4 ml-2 text-[#D4AF37]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
