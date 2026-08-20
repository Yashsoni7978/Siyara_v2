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
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const easeCustom = [0.16, 1, 0.3, 1];

  const pillars = [
    {
      id: '01',
      name: 'STRATEGY',
      description: 'Data-driven positioning, market intelligence, and growth roadmaps.',
      icon: Compass,
      slug: '/services/brand-strategy',
      subServices: [
        'Digital Strategy',
        'Market Research',
        'Competitor Intelligence',
        'Digital Roadmaps',
        'Growth Strategy',
      ],
    },
    {
      id: '02',
      name: 'BRAND',
      description: 'Architectural brand positioning, visual systems, and identity design.',
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
      description: 'Bespoke UI/UX design, web applications, and conversion portals.',
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
      description: 'Organic search domination, GEO AI search, and technical SEO.',
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
      description: 'CRO, high-intent funnel architecture, and lead acquisition.',
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
      description: 'Intelligent AI workflows, CRM automation, and system integration.',
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
      description: 'Performance measurement, custom dashboards, and data intelligence.',
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
      description: 'Performance marketing, social media systems, and continuous scale.',
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

  const currentPillar = pillars[activePillarIndex];

  return (
    <section id="services-capabilities" className="relative py-28 sm:py-36 bg-[#F3EFE3] overflow-hidden">
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
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#B9923F]">
            02
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            Service Architecture & Pillars
          </span>
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
              THE 8 PRIMARY PILLARS OF <br />
              <span className="text-[#0B5E49] italic font-normal">CONNECTED GROWTH.</span>
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
              Select or hover any capability pillar to inspect its specialized sub-service architecture.
            </p>
          </motion.div>
        </div>

        {/* 8 PRIMARY PILLARS SELECTOR STRIP (Interactive Orbital Ecosystem Buttons) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mb-12 relative z-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = idx === activePillarIndex;

            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarIndex(idx)}
                onMouseEnter={() => setActivePillarIndex(idx)}
                className={`relative flex flex-col items-center justify-center p-4 sm:p-5 transition-all duration-300 text-center cursor-pointer border ${
                  isActive
                    ? 'bg-[#0B5E49] border-[#0B5E49] text-[#F3EFE3] shadow-lg shadow-[#0B5E49]/20 -translate-y-1'
                    : 'bg-[#ECE7D8] hover:bg-[#F3EFE3] border-[#B9923F]/30 hover:border-[#0B5E49]/60 text-[#101613]'
                }`}
              >
                {/* Number Badge */}
                <span
                  className={`text-[10px] font-mono tracking-widest uppercase mb-2 ${
                    isActive ? 'text-[#D9B45F]' : 'text-[#B9923F]'
                  }`}
                >
                  {pillar.id}
                </span>

                {/* Icon */}
                <div className="mb-2">
                  <Icon className={`w-5 h-5 stroke-[1.75] ${isActive ? 'text-[#F3EFE3]' : 'text-[#0B5E49]'}`} />
                </div>

                {/* Name */}
                <span className="font-sans text-xs font-bold tracking-[0.16em] uppercase">
                  {pillar.name}
                </span>

                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activePillarIndicator"
                    className="absolute -bottom-1 left-4 right-4 h-1 bg-[#D9B45F] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ACTIVE PRIMARY PILLAR SHOWCASE & SUB-SERVICES BREAKDOWN */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: easeCustom }}
            className="p-8 sm:p-12 bg-[#ECE7D8] border border-[#B9923F]/40 shadow-xl relative overflow-hidden"
          >
            {/* Fine Decorative Linework Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0B5E49]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Left Column: Primary Pillar Detail */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#B9923F]">
                      PRIMARY PILLAR {currentPillar.id} / 08
                    </span>
                    <span className="h-[1px] w-6 bg-[#0B5E49]/40" />
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#101613] font-normal leading-tight mb-4">
                    {currentPillar.name} <span className="text-[#0B5E49] italic">CAPABILITY.</span>
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#101613]/80 font-light leading-relaxed mb-8">
                    {currentPillar.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0B5E49] hover:bg-[#084838] text-[#F3EFE3] text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 w-fit group shadow-md"
                >
                  <span>REQUEST {currentPillar.name} AUDIT</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D9B45F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Right Column: 5 Sub-Services Hierarchy Grid */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#0B5E49] uppercase">
                    SPECIALIZED SUB-SERVICES ({currentPillar.subServices.length})
                  </span>
                  <span className="h-[1px] flex-grow bg-[#B9923F]/30" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentPillar.subServices.map((sub, sIdx) => (
                    <motion.div
                      key={sub}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: sIdx * 0.06 }}
                      className="p-4 bg-[#F3EFE3] border border-[#B9923F]/30 hover:border-[#0B5E49] flex items-center justify-between group transition-all duration-300 hover:shadow-md cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono font-bold text-[#B9923F]">
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


