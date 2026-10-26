'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Sparkles,
  Code,
  Search,
  Filter,
  Bot,
  BarChart3,
  TrendingUp,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react';

export default function ServiceIndex({ onNavigate }) {
  const [activeDisciplineIdx, setActiveDisciplineIdx] = useState(0);
  const easeCustom = [0.16, 1, 0.3, 1];

  const disciplines = [
    {
      id: '01',
      name: 'STRATEGY',
      tagline: 'Brand positioning, market research, business strategy and digital direction.',
      description: 'Brand positioning, market research, and a clear growth roadmap for your business in the Jaipur market.',
      icon: Compass,
      slug: '/services/brand-strategy',
      subServices: [
        'Brand Strategy',
        'Market Research',
        'Positioning',
        'Growth Strategy',
        'Digital Roadmaps',
      ],
    },
    {
      id: '02',
      name: 'BRAND',
      tagline: 'Identity systems, messaging, visual language and brand architecture.',
      description: 'Architectural visual identity, luxury brand positioning systems, and high-trust editorial design.',
      icon: Sparkles,
      slug: '/services/content-creative',
      subServices: [
        'Brand Strategy',
        'Brand Identity',
        'Brand Positioning',
        'Messaging',
        'Visual Systems',
      ],
    },
    {
      id: '03',
      name: 'EXPERIENCE',
      tagline: 'UI/UX, web design, digital products and customer experience.',
      description: 'Bespoke web applications, high-conversion UI/UX digital portals, and fast engineering.',
      icon: Code,
      slug: '/services/web-design-development',
      subServices: [
        'UI/UX Design',
        'Website Design',
        'Web Development',
        'Web Applications',
        'Conversion Experience',
      ],
    },
    {
      id: '04',
      name: 'VISIBILITY',
      tagline: 'SEO, GEO, content discoverability and search visibility.',
      description: 'Organic search domination, generative AI search visibility, and technical SEO infrastructure.',
      icon: Search,
      slug: '/services/seo-geo',
      subServices: [
        'SEO',
        'GEO / AI Search Visibility',
        'Technical SEO',
        'Local SEO',
        'Content Strategy',
      ],
    },
    {
      id: '05',
      name: 'CONVERSION',
      tagline: 'CRO, landing experiences, funnels and conversion architecture.',
      description: 'High-intent lead capture funnels, CRO testing, and frictionless client conversion pathways.',
      icon: Filter,
      slug: '/services/crm-lead-systems',
      subServices: [
        'CRO',
        'Landing Pages',
        'Funnel Architecture',
        'Lead Generation',
        'Performance Optimization',
      ],
    },
    {
      id: '06',
      name: 'AUTOMATION',
      tagline: 'AI workflows, integrations and intelligent business systems.',
      description: 'Intelligent AI business workflows, automated CRM lead nurture, and operations optimization.',
      icon: Bot,
      slug: '/services/ai-automation',
      subServices: [
        'AI Automation',
        'Business Automation',
        'CRM Automation',
        'Workflow Systems',
        'AI Integrations',
      ],
    },
    {
      id: '07',
      name: 'ANALYTICS',
      tagline: 'Measurement, dashboards, attribution and performance intelligence.',
      description: 'Comprehensive analytics dashboards, attribution tracking, and real-time business data insights.',
      icon: BarChart3,
      slug: '/services/growth-optimization',
      subServices: [
        'Analytics',
        'Tracking & Measurement',
        'Dashboards',
        'Performance Intelligence',
        'Data Insights',
      ],
    },
    {
      id: '08',
      name: 'GROWTH',
      tagline: 'Optimization, experimentation and scalable growth systems.',
      description: 'Data-backed performance media, continuous CRO experimentation, and multi-channel scale.',
      icon: TrendingUp,
      slug: '/services/performance-marketing',
      subServices: [
        'Digital Marketing',
        'Performance Marketing',
        'Social Media',
        'Growth Systems',
        'Continuous Optimization',
      ],
    },
  ];

  const currentDiscipline = disciplines[activeDisciplineIdx];

  return (
    <section id="services-capabilities" className="relative py-16 sm:py-20 bg-[#F3EFE3] overflow-hidden">
      {/* Editorial Ivory Atmosphere */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-70 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6 sm:mb-10"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#B9923F]">
            01 · THE SIYARA SYSTEM
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-[#101613] font-normal leading-[1.05] sm:leading-[0.98] break-words">
              ONE SYSTEM. <br />
              EIGHT DISCIPLINES. <br />
              ONE DIRECTION: <span className="text-[#0B5E49] font-normal">GROWTH.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <p className="font-sans text-xs sm:text-sm text-[#101613]/70 font-light leading-relaxed max-w-sm">
             Every discipline plays a role for Jaipur businesses - together, they build one system, not eight disconnected services.
            </p>
          </motion.div>
        </div>

        {/* 8 CIRCULAR DISCIPLINES ORBITAL CONSTELLATION STRIP */}
        <div className="relative mb-12 sm:mb-16 pt-2 sm:pt-4 pb-4 sm:pb-8">
          
          {/* Orbital Line - aligns with circle centers */}
          <div className="hidden lg:block absolute top-[60px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-[#B9923F]/40 to-transparent pointer-events-none opacity-60 z-0" />
          <div className="hidden lg:block absolute top-[56px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0B5E49] opacity-50 animate-pulse pointer-events-none z-0" />

          {/* 8 Circular Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-6 relative z-10">
            {disciplines.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeDisciplineIdx;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveDisciplineIdx(idx)}
                  onMouseEnter={() => setActiveDisciplineIdx(idx)}
                  className={`group flex flex-col items-center text-center p-2.5 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer min-h-[44px] ${
                    isActive ? 'scale-105 bg-[#ECE7D8]/50 sm:bg-transparent' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Circular Node */}
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border flex items-center justify-center mb-2 sm:mb-3 transition-all duration-300 ${
                      isActive
                        ? 'border-[#0B5E49] bg-[#0B5E49] text-[#F3EFE3] shadow-[0_0_25px_rgba(11,94,73,0.35)]'
                        : 'border-[#B9923F]/40 bg-[#ECE7D8] text-[#0B5E49] group-hover:border-[#0B5E49]'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 stroke-[1.75]" />
                  </div>

                  {/* Number */}
                  <span
                    className={`text-[9px] sm:text-[10px] font-sans tracking-widest uppercase mb-0.5 sm:mb-1 font-bold ${
                      isActive ? 'text-[#0B5E49]' : 'text-[#B9923F]'
                    }`}
                  >
                    {item.id}
                  </span>

                  {/* Name */}
                  <span
                    className={`font-sans text-[11px] sm:text-xs font-bold tracking-[0.12em] sm:tracking-[0.14em] uppercase transition-colors leading-tight ${
                      isActive ? 'text-[#0B5E49]' : 'text-[#101613]'
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE DISCIPLINE DETAILS & SUB-SERVICES REVEAL PANEL */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDiscipline.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: easeCustom }}
            className="p-5 sm:p-8 md:p-12 bg-[#070A09] border border-[#D9B45F]/30 shadow-2xl relative overflow-hidden rounded-xl sm:rounded-none"
          >
            {/* Fine Glow Atmosphere */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0C6B52]/20 to-transparent blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Left Column: Discipline Detail & Tagline */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F]">
                      DISCIPLINE {currentDiscipline.id} / 08
                    </span>
                    <span className="h-[1px] w-6 bg-[#D9B45F]/30" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] font-normal leading-tight mb-3 break-words">
                    {currentDiscipline.name} <span className="text-[#D9B45F]">CAPABILITY.</span>
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#D9B45F] font-medium leading-relaxed mb-3 sm:mb-4">
                    {currentDiscipline.tagline}
                  </p>

                  <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed mb-6 sm:mb-8">
                    {currentDiscipline.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] sm:tracking-[0.18em] uppercase transition-all duration-300 w-full sm:w-fit group shadow-md rounded-full min-h-[44px]"
                >
                  <span>REQUEST {currentDiscipline.name} AUDIT</span>
                  <ArrowUpRight className="w-4 h-4 text-[#101613] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Right Column: 5 Sub-Services Hierarchy List */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-[#D9B45F] uppercase">
                    SPECIALIZED SUB-SERVICES ({currentDiscipline.subServices.length})
                  </span>
                  <span className="h-[1px] flex-grow bg-[#D9B45F]/20" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {currentDiscipline.subServices.map((sub, sIdx) => (
                    <motion.div
                      key={sub}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: sIdx * 0.03 }}
                      className="p-3.5 sm:p-4 bg-[#071E18]/40 border border-[#D9B45F]/20 hover:border-[#D9B45F] flex items-center justify-between group transition-all duration-300 hover:shadow-md cursor-pointer rounded-lg sm:rounded-none min-h-[44px]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-sans font-bold text-[#D9B45F]">
                          0{sIdx + 1}
                        </span>
                        <span className="font-sans text-xs font-semibold text-[#F3EFE3] group-hover:text-[#D9B45F] transition-colors leading-snug">
                          {sub}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#D9B45F] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}



