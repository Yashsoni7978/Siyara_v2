'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Palette, 
  Sparkles, 
  Code2, 
  ShoppingBag, 
  Search, 
  Share2, 
  TrendingUp, 
  BarChart3, 
  Cpu, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';
import Link from 'next/link';

export default function Capabilities() {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];

  const disciplineGroups = [
    {
      category: 'Brand & Creative',
      description: 'Foundational positioning, editorial visual identity, and compelling creative storytelling.',
      services: [
        {
          name: 'Brand Strategy & Identity',
          description: 'Market positioning, naming, and visual identity systems that build brand equity.',
          href: '/services/brand-strategy',
          icon: Palette,
        },
        {
          name: 'Content & Creative Studio',
          description: 'High-fidelity editorial content, visual styling, and brand communications.',
          href: '/services/content-creative',
          icon: Sparkles,
        },
      ],
    },
    {
      category: 'Digital Architecture',
      description: 'Custom React & Next.js web systems engineered for speed, responsiveness, and scale.',
      services: [
        {
          name: 'Web Design & Development',
          description: 'Bespoke Next.js platforms engineered for visual richness and zero layout shift.',
          href: '/services/web-design-development',
          icon: Code2,
        },
        {
          name: 'E-Commerce Architecture',
          description: 'High-conversion catalog browsing, multi-currency cart flows, and mobile checkout.',
          href: '/services/ecommerce-development',
          icon: ShoppingBag,
        },
      ],
    },
    {
      category: 'Search & Visibility',
      description: 'Structured search discovery optimized for Google, local discovery, and AI generative engines.',
      services: [
        {
          name: 'SEO & GEO (AI Search)',
          description: 'Schema.org structured data, local authority, and AI search indexing.',
          href: '/services/seo-geo',
          icon: Search,
        },
        {
          name: 'Social & Digital Marketing',
          description: 'Strategic social communication and digital channel engagement to amplify reach.',
          href: '/services/performance-marketing',
          icon: Share2,
        },
      ],
    },
    {
      category: 'Performance & Scale',
      description: 'High-intent client acquisition campaigns and full-funnel conversion rate optimization.',
      services: [
        {
          name: 'Performance Marketing',
          description: 'Data-driven paid search and social campaigns targeting qualified business leads.',
          href: '/services/performance-marketing',
          icon: TrendingUp,
        },
        {
          name: 'Analytics & Growth Optimization',
          description: 'Funnel analytics, commercial CRO, and customer journey optimization.',
          href: '/services/growth-optimization',
          icon: BarChart3,
        },
      ],
    },
    {
      category: 'Systems & Intelligence',
      description: 'Automated lead pipelines, CRM integrations, and intelligent workflow operations.',
      services: [
        {
          name: 'AI & Business Automation',
          description: 'Automated workflows, AI integrations, and operational efficiency systems.',
          href: '/services/ai-automation',
          icon: Cpu,
        },
        {
          name: 'CRM & Lead Engine Systems',
          description: 'Automated inquiry routing, lead qualification, and customer relationship funnels.',
          href: '/services/crm-lead-systems',
          icon: Layers,
        },
      ],
    },
  ];

  return (
    <section
      id="capabilities"
      aria-label="Siyara Innovations Connected Capabilities"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F3EFE4] text-[#080B0A] overflow-hidden border-t border-[#080B0A]/10"
    >
      {/* Warm Ivory Atmospheric Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE4] via-[#ECE7D8]/60 to-[#F3EFE4] opacity-90 pointer-events-none" />
      
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #080B0A 1px, transparent 1px), linear-gradient(to bottom, #080B0A 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Identifier */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="text-xs font-roboto font-medium tracking-[0.24em] text-[#B9923F]">
            04
          </span>
          <span className="w-8 h-[1px] bg-[#063C2D]/30" />
          <span className="text-[11px] sm:text-xs font-roboto font-semibold tracking-[0.24em] text-[#063C2D] uppercase">
            OUR CAPABILITIES
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '60px 0px' }}
            transition={{ duration: 0.5, ease: easeCustom }}
            className="font-roboto text-3xl sm:text-4xl lg:text-5xl font-normal text-[#080B0A] leading-[1.12] sm:leading-[1.08] tracking-tight mb-4"
          >
            Different disciplines.{' '}
            <span className="italic font-roboto text-[#063C2D]">
              One connected vision.
            </span>
          </motion.h2>
          <p className="font-lora text-sm sm:text-base text-[#101613]/75 font-light leading-relaxed max-w-2xl">
            Ten core capabilities organized into five integrated pillars. Every discipline works together to drive measurable commercial results.
          </p>
        </div>

        {/* Grouped Capabilities Grid */}
        <div className="space-y-8 sm:space-y-10">
          {disciplineGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '60px 0px' }}
              transition={{ duration: 0.5, delay: 0.05 * groupIdx, ease: easeCustom }}
              className="p-6 sm:p-8 rounded-3xl bg-[#ECE7D8]/80 border border-[#063C2D]/15 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Group Heading & Scope */}
                <div className="lg:col-span-4 pr-0 lg:pr-6">
                  <span className="text-[10px] font-roboto font-semibold tracking-[0.2em] text-[#B9923F] uppercase block mb-1">
                    PILLAR 0{groupIdx + 1}
                  </span>
                  <h3 className="font-roboto text-xl sm:text-2xl font-normal text-[#080B0A] mb-2">
                    {group.category}
                  </h3>
                  <p className="font-lora text-xs sm:text-sm text-[#101613]/70 font-light leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Services in this Group */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.services.map((srv, srvIdx) => {
                    const Icon = srv.icon;
                    return (
                      <Link
                        key={srvIdx}
                        href={srv.href}
                        className="p-5 sm:p-6 rounded-2xl bg-[#F3EFE4] border border-[#063C2D]/10 hover:border-[#B9923F]/50 hover:bg-white transition-all duration-300 group flex flex-col justify-between shadow-sm hover:-translate-y-0.5"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-9 h-9 rounded-xl bg-[#063C2D]/10 text-[#063C2D] flex items-center justify-center group-hover:bg-[#063C2D] group-hover:text-[#F3EFE4] transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-[#B9923F] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                          </div>
                          <h4 className="font-roboto text-sm sm:text-base font-semibold text-[#080B0A] mb-1.5 group-hover:text-[#063C2D] transition-colors">
                            {srv.name}
                          </h4>
                          <p className="font-lora text-xs text-[#101613]/70 font-light leading-relaxed">
                            {srv.description}
                          </p>
                        </div>
                        <div className="pt-3 mt-3 border-t border-[#080B0A]/5 text-[10px] font-roboto font-medium tracking-wider text-[#B9923F] uppercase flex items-center gap-1">
                          <span>Explore Discipline</span>
                          <span>→</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

