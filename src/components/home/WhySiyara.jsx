'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck, TrendingUp } from 'lucide-react';

export default function WhySiyara() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const principles = [
    {
      id: '01',
      title: 'STRATEGY FIRST',
      description: 'Every project starts with research into your market and competitors, not a template.',
      icon: Target,
    },
    {
      id: '02',
      title: 'ONE TEAM',
      description: 'Strategists, designers, and developers working from the same brief, in Jaipur.',
      icon: Users,
    },
    {
      id: '03',
      title: 'BUILT TO PERFORM',
      description: 'Sites built on Next.js for speed, Core Web Vitals, and real SEO - not just visuals.',
      icon: ShieldCheck,
    },
    {
      id: '04',
      title: 'LONG-TERM GROWTH',
      description: 'We stay on after launch: optimization, reporting, and iteration month over month.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 bg-[#F3EFE3] overflow-hidden">
      {/* Ivory editorial texture */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-60 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '80px 0px' }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-8 sm:mb-12"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#B9923F]">
            02
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            Why Siyara
          </span>
        </motion.div>

        {/* Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start mb-12 sm:mb-16">
          
          {/* Left Column: Large Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '80px 0px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 pr-0 lg:pr-6"
          >
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#101613] font-normal leading-[1.05] sm:leading-[0.98] mb-4 sm:mb-6 break-words">
              We think in systems, <br />
              not <span className="text-[#0C6B52] font-normal">services.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#101613] font-normal leading-relaxed max-w-md">
              Strategy, design and engineering work as one connected system here, not three vendors stitched together after the fact.
            </p>
          </motion.div>

          {/* Right Column: 4 Principles arranged horizontally with thin vertical dividers */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '80px 0px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 relative"
            >
              {principles.map((item, idx) => {
                const Icon = item.icon;
                const isHovered = hoveredIdx === idx;

                return (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className={`flex flex-col justify-between p-4 sm:p-5 lg:p-0 lg:py-4 lg:px-6 rounded-xl lg:rounded-none bg-[#ECE7D8]/70 lg:bg-transparent border border-[#0B5E49]/10 lg:border-none relative transition-[transform,border-color,box-shadow,background-color] duration-300 ${
                      idx !== 0 ? 'lg:border-l lg:border-[#101613]/12' : ''
                    } ${isHovered ? 'translate-y-[-3px]' : ''}`}
                  >
                    <div>
                      {/* Principle Icon Container */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center border mb-6 transition-all duration-300 ${
                          isHovered
                            ? 'border-[#D9B45F] bg-[#071E18] text-[#D9B45F] scale-105 shadow-[0_0_15px_rgba(7,30,24,0.2)]'
                            : 'border-[#0C6B52]/20 bg-[#F3EFE3] text-[#0C6B52]'
                        }`}
                      >
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>

                      {/* Title */}
                      <h3 className="font-sans text-sm font-bold tracking-[0.18em] uppercase mb-3 text-[#0C6B52] h-12">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-xs text-[#101613] font-normal leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>

        {/* Verified Business Credibility Track Record */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '80px 0px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="pt-10 sm:pt-12 border-t border-[#B9923F]/30"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B5E49] font-normal leading-none mb-2">
                60+
              </div>
              <h4 className="font-sans text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#101613] uppercase mb-1">
                Clients Served
              </h4>
              <p className="font-sans text-[11px] text-[#101613]/70 font-light leading-relaxed">
                Engagements delivered across India and internationally.
              </p>
            </div>

            <div>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B5E49] font-normal leading-none mb-2">
                110+
              </div>
              <h4 className="font-sans text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#101613] uppercase mb-1">
                Completed Projects
              </h4>
              <p className="font-sans text-[11px] text-[#101613]/70 font-light leading-relaxed">
                70+ websites launched and 30+ applications delivered.
              </p>
            </div>

            <div>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B5E49] font-normal leading-none mb-2">
                12
              </div>
              <h4 className="font-sans text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#101613] uppercase mb-1">
                Industries Served
              </h4>
              <p className="font-sans text-[11px] text-[#101613]/70 font-light leading-relaxed">
                Events, luxury, hospitality, healthcare, e-commerce, and education.
              </p>
            </div>

            <div>
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B5E49] font-normal leading-none mb-2">
                6+ Years
              </div>
              <h4 className="font-sans text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#101613] uppercase mb-1">
                Combined Experience
              </h4>
              <p className="font-sans text-[11px] text-[#101613]/70 font-light leading-relaxed">
                Combined professional team background (Founded May 2026).
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
