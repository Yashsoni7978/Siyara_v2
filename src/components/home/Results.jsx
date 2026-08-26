'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Search, Target, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Results() {
  const proofPillars = [
    {
      id: '01',
      title: 'ENGINEERING & SPEED',
      label: 'Core Web Vitals & performance optimization',
      category: 'Performance',
      icon: Cpu,
    },
    {
      id: '02',
      title: 'SEARCH & GEO VISIBILITY',
      label: 'Organic + AI search engine visibility',
      category: 'Visibility',
      icon: Search,
    },
    {
      id: '03',
      title: 'CONVERSION DESIGN',
      label: 'High-intent user funnels & UX architecture',
      category: 'Conversion',
      icon: Target,
    },
    {
      id: '04',
      title: 'METHODOLOGY',
      label: 'Structured milestone execution & QA',
      category: 'Delivery',
      icon: ShieldCheck,
    },
    {
      id: '05',
      title: 'GROWTH SYSTEMS',
      label: 'Continuous performance & CRO iteration',
      category: 'Optimization',
      icon: TrendingUp,
    },
  ];

  const confirmedProjects = [
    'RISHABH JEWELLERS',
    'BEYOND SPACES',
    'DR. NEHA SHARMA',
    'THE BREW CHAPTER',
    'LUXE HABITAT',
  ];

  return (
    <section id="results" className="relative py-16 sm:py-20 bg-[#F3EFE3] overflow-hidden">
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
            06
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            Proof & Deliverables
          </span>
        </motion.div>

        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#101613] font-normal leading-[0.98] tracking-tight uppercase mb-4">
            REAL OUTCOMES. <br />
            MEASURABLE <span className="text-[#0B5E49] font-normal">IMPACT.</span>
          </h2>
          <p className="font-sans text-sm text-[#101613] font-normal leading-relaxed mb-6 max-w-lg">
            We design and engineer scalable digital systems engineered to elevate brands, increase visibility, and drive long-term business value.
          </p>
          <a
            href="#work"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-[#0B5E49] bg-[#101613] hover:bg-[#0B5E49] text-[#F3EFE3] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-lg group rounded-full"
          >
            <span>EXPLORE SELECTED WORK</span>
            <ArrowUpRight className="w-4 h-4 text-[#F3EFE3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* 5 Proof Pillars Container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
              {proofPillars.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="p-5 sm:p-6 bg-[#ECE7D8] border border-[#B9923F]/30 hover:border-[#0B5E49]/60 rounded-none transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-md"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full border border-[#0B5E49]/30 bg-[#F3EFE3] flex items-center justify-center text-[#0B5E49] group-hover:bg-[#0B5E49] group-hover:text-[#F3EFE3] group-hover:border-[#0B5E49] mb-6 transition-colors">
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>

                    {/* Pillar Title */}
                    <div className="font-sans text-xs font-bold text-[#0B5E49] tracking-[0.12em] uppercase mb-2">
                      {item.title}
                    </div>

                    {/* Label */}
                    <p className="font-sans text-[11px] text-[#101613] font-medium leading-snug mb-4">
                      {item.label}
                    </p>

                    {/* Divider & Category */}
                    <div className="pt-3 border-t border-[#B9923F]/20">
                      <span className="text-[9px] font-sans tracking-[0.16em] text-[#B9923F] uppercase font-sans font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

        {/* Client Brand Strip - Tags Approach */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="pt-12 border-t border-[#101613]/10 flex flex-col items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] text-[#0B5E49] uppercase font-bold text-center">
            <span>Featured Client Projects</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-4 max-w-4xl mx-auto">
            {confirmedProjects.map((brand) => (
              <div
                key={brand}
                className="px-5 py-2.5 rounded-full border border-[#B9923F]/30 bg-[#ECE7D8] hover:border-[#0B5E49]/60 hover:bg-[#F3EFE3] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 group cursor-default shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#B9923F]/60 group-hover:bg-[#0B5E49] transition-colors" />
                <span className="font-sans text-xs sm:text-[13px] tracking-[0.15em] text-[#101613]/80 group-hover:text-[#101613] transition-colors uppercase font-semibold">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
