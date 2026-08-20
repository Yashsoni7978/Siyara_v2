import React from 'react';
import { motion } from 'framer-motion';

export default function Numbers() {
  const easeCustom = [0.16, 1, 0.3, 1];

  const stats = [
    {
      id: '01',
      number: '100+',
      label: 'PROJECTS DELIVERED',
      description: 'Across industries and global markets.',
    },
    {
      id: '02',
      number: '50+',
      label: 'BUSINESSES GROWN',
      description: 'Through strategy and digital execution.',
    },
    {
      id: '03',
      number: '4+',
      label: 'YEARS OF EXPERIENCE',
      description: 'Delivering digital systems that matter.',
    },
    {
      id: '04',
      number: '1',
      label: 'MISSION',
      description: 'To help brands scale, dominate and lead.',
    },
  ];

  return (
    <section id="numbers" className="relative py-28 sm:py-36 bg-[#F3EFE3] text-[#101613] overflow-hidden">
      {/* Editorial Ivory Background */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-80 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#B9923F]">
            04
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            PROOF & METRICS
          </span>
        </motion.div>

        {/* 4 Large Editorial Numbers Grid with Thin Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 border-t border-[#B9923F]/30 pt-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: easeCustom }}
              className={`flex flex-col justify-between lg:px-8 relative ${
                idx !== 0 ? 'lg:border-l lg:border-[#B9923F]/30' : ''
              }`}
            >
              <div>
                {/* Large Number */}
                <div className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#0B5E49] font-normal leading-none mb-4 tracking-tight">
                  {stat.number}
                </div>

                {/* Label */}
                <h3 className="font-sans text-xs font-bold tracking-[0.18em] text-[#101613] uppercase mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs text-[#101613]/70 font-light leading-relaxed">
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
