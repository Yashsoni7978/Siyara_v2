'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, HeartPulse, GraduationCap, ShoppingBag, UtensilsCrossed, Gem, Cpu, ArrowUpRight } from 'lucide-react';

export default function ServicesIndustries() {
  const easeCustom = [0.16, 1, 0.3, 1];

  const industryItems = [
    { name: 'Real Estate', icon: Home },
    { name: 'Healthcare', icon: HeartPulse },
    { name: 'Education', icon: GraduationCap },
    { name: 'E-commerce', icon: ShoppingBag },
    { name: 'Hospitality', icon: UtensilsCrossed },
    { name: 'Jewellery & Luxury', icon: Gem },
    { name: 'SaaS & Tech', icon: Cpu },
    { name: 'And More', icon: ArrowUpRight },
  ];

  return (
    <section id="industries" className="relative py-28 sm:py-36 bg-[#F3EFE3] overflow-hidden">
      {/* Editorial Ivory Atmosphere */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-70 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#B9923F]">
            06
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            Specialist System & Industries
          </span>
        </motion.div>

        {/* Section 06 Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 sm:mb-20 max-w-3xl"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#101613] font-normal leading-[0.98]">
            EIGHT DISCIPLINE <br />
            <span className="text-[#0B5E49] italic font-normal">SPECIALIST SYSTEM.</span>
          </h2>
        </motion.div>

        {/* 8 DISCIPLINE SPECIALIST CAPABILITY GROUPS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {[
            { id: '01', name: 'STRATEGY', tags: 'Brand / Market / Business / Growth' },
            { id: '02', name: 'BRAND', tags: 'Identity / Positioning / Messaging' },
            { id: '03', name: 'EXPERIENCE', tags: 'UX / UI / Web / Product' },
            { id: '04', name: 'VISIBILITY', tags: 'SEO / Content / Social / Performance' },
            { id: '05', name: 'CONVERSION', tags: 'CRO / Funnels / Lead Generation' },
            { id: '06', name: 'AUTOMATION', tags: 'AI / CRM / Workflows / Integrations' },
            { id: '07', name: 'ANALYTICS', tags: 'Data / BI / Dashboards / Intelligence' },
            { id: '08', name: 'GROWTH', tags: 'Optimization / Scaling / Performance' },
          ].map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.04, ease: easeCustom }}
              className="p-6 bg-[#ECE7D8] border border-[#B9923F]/30 hover:border-[#0B5E49] transition-all duration-300 group shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-[#B9923F] tracking-widest block mb-2">
                  {item.id} / 08
                </span>
                <h3 className="font-sans text-sm font-bold tracking-[0.16em] uppercase text-[#101613] group-hover:text-[#0B5E49] transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="font-sans text-xs text-[#101613]/70 font-light leading-relaxed">
                  {item.tags}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

