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
      description: 'We construct data-driven growth architecture, competitive intelligence, and market position roadmaps.',
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

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#B9923F]">
            01 · THE SIYARA SYSTEM
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#101613] font-normal leading-[0.98]">
              ONE SYSTEM. <br />
              EIGHT DISCIPLINES. <br />
              ONE DIRECTION: <span className="text-[#0B5E49] font-normal">GROWTH.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <p className="font-sans text-xs sm:text-sm text-[#101613]/70 font-light leading-relaxed max-w-sm">
              Every discipline plays a role. Together, they build momentum. Together, they drive growth.
            </p>
          </motion.div>
        </div>

        {/* 8 CIRCULAR DISCIPLINES ORBITAL CONSTELLATION STRIP */}
        <div className="relative mb-16 pt-4 pb-8">
          
          {/* Orbital SVG Path & Energy Trace */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-30 stroke-[#B9923F]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="5%" y1="50%" x2="95%" y2="50%" strokeWidth="1" strokeDasharray="6 8" />
            <circle cx="50%" cy="50%" r="4" fill="#0B5E49" className="animate-pulse" />
          </svg>

          {/* 8 Circular Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 relative z-10">
            {disciplines.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeDisciplineIdx;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveDisciplineIdx(idx)}
                  onMouseEnter={() => setActiveDisciplineIdx(idx)}
                  className={`group flex flex-col items-center text-center p-4 transition-all duration-300 cursor-pointer ${
                    isActive ? 'scale-105' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Circular Node */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border flex items-center justify-center mb-3 transition-all duration-300 ${
                      isActive
                        ? 'border-[#0B5E49] bg-[#0B5E49] text-[#F3EFE3] shadow-[0_0_25px_rgba(11,94,73,0.35)]'
                        : 'border-[#B9923F]/40 bg-[#ECE7D8] text-[#0B5E49] group-hover:border-[#0B5E49]'
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                  </div>

                  {/* Number */}
                  <span
                    className={`text-[10px] font-sans tracking-widest uppercase mb-1 font-bold ${
                      isActive ? 'text-[#0B5E49]' : 'text-[#B9923F]'
                    }`}
                  >
                    {item.id}
                  </span>

                  {/* Name */}
                  <span
                    className={`font-sans text-xs font-bold tracking-[0.14em] uppercase transition-colors ${
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: easeCustom }}
            className="p-8 sm:p-12 bg-[#ECE7D8] border border-[#B9923F]/40 shadow-xl relative overflow-hidden"
          >
            {/* Fine Glow Atmosphere */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0B5E49]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Left Column: Discipline Detail & Tagline */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-sans font-bold tracking-widest text-[#B9923F]">
                      DISCIPLINE {currentDiscipline.id} / 08
                    </span>
                    <span className="h-[1px] w-6 bg-[#0B5E49]/40" />
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#101613] font-normal leading-tight mb-3">
                    {currentDiscipline.name} <span className="text-[#0B5E49] ">CAPABILITY.</span>
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#0B5E49] font-medium leading-relaxed mb-4">
                    {currentDiscipline.tagline}
                  </p>

                  <p className="font-sans text-xs text-[#101613]/70 font-light leading-relaxed mb-8">
                    {currentDiscipline.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0B5E49] hover:bg-[#084838] text-[#F3EFE3] text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 w-fit group shadow-md rounded-full"
                >
                  <span>REQUEST {currentDiscipline.name} AUDIT</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D9B45F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Right Column: 5 Sub-Services Hierarchy List */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#0B5E49] uppercase">
                    SPECIALIZED SUB-SERVICES ({currentDiscipline.subServices.length})
                  </span>
                  <span className="h-[1px] flex-grow bg-[#B9923F]/30" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentDiscipline.subServices.map((sub, sIdx) => (
                    <motion.div
                      key={sub}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: sIdx * 0.06 }}
                      className="p-4 bg-[#F3EFE3] border border-[#B9923F]/30 hover:border-[#0B5E49] flex items-center justify-between group transition-all duration-300 hover:shadow-md cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-sans font-bold text-[#B9923F]">
                          0{sIdx + 1}
                        </span>
                        <span className="font-sans text-xs font-semibold text-[#101613] group-hover:text-[#0B5E49] transition-colors">
                          {sub}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#B9923F] group-hover:text-[#0B5E49] group-hover:translate-x-1 transition-all" />
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



