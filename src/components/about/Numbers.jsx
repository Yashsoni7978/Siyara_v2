import React from 'react';
import { motion } from 'framer-motion';

export default function Numbers() {
  const easeCustom = [0.16, 1, 0.3, 1];

  const stats = [
    {
      id: '01',
      number: '60+',
      label: 'CLIENTS SERVED',
      description: 'Engagements delivered for businesses across India and internationally.',
    },
    {
      id: '02',
      number: '110+',
      label: 'COMPLETED PROJECTS',
      description: 'Including 70+ websites launched and 30+ digital applications delivered.',
    },
    {
      id: '03',
      number: '12',
      label: 'INDUSTRIES SERVED',
      description: 'Events, hospitality, medical, luxury, e-commerce, technology, real estate, and education.',
    },
    {
      id: '04',
      number: '6+',
      label: 'YEARS COMBINED EXPERIENCE',
      description: 'Combined professional engineering and strategy background (Siyara founded May 2026).',
    },
  ];

  return (
    <section id="numbers" className="relative py-16 sm:py-20 bg-[#F3EFE3] text-[#101613] overflow-hidden">
      {/* Editorial Ivory Background */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-80 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '80px 0px' }}
          transition={{ duration: 0.5, ease: easeCustom }}
          className="flex items-center gap-3 mb-10 sm:mb-16"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#B9923F]">
            04
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            PROOF & METRICS
          </span>
        </motion.div>

        {/* 4 Large Editorial Numbers Grid with Thin Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 border-t border-[#B9923F]/30 pt-8 sm:pt-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '80px 0px' }}
              transition={{ duration: 0.5, delay: 0.04 * idx, ease: easeCustom }}
              className={`flex flex-col justify-between p-5 sm:p-6 lg:p-0 lg:px-8 rounded-xl lg:rounded-none bg-[#ECE7D8]/60 lg:bg-transparent border border-[#0B5E49]/10 lg:border-none relative ${
                idx !== 0 ? 'lg:border-l lg:border-[#B9923F]/30' : ''
              }`}
            >
              <div>
                {/* Large Number */}
                <div className="font-roboto text-6xl sm:text-7xl lg:text-8xl text-[#0B5E49] font-normal leading-none mb-4 tracking-tight">
                  {stat.number}
                </div>

                {/* Label */}
                <h3 className="font-sans text-xs font-bold tracking-[0.18em] text-[#101613] uppercase mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="font-lora text-xs text-[#101613]/70 font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
