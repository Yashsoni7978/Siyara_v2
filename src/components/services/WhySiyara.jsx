'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Monitor, Search, Filter, Bot, TrendingUp } from 'lucide-react';

export default function WhySiyara() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const easeCustom = [0.16, 1, 0.3, 1];

  const outcomes = [
    {
      id: '01',
      title: 'STRONGER POSITIONING',
      description: 'Clear brand identity, architectural positioning, and market authority.',
      icon: Target,
    },
    {
      id: '02',
      title: 'BETTER DIGITAL EXPERIENCE',
      description: 'High-speed, intuitive web applications built to command trust.',
      icon: Monitor,
    },
    {
      id: '03',
      title: 'SEARCH VISIBILITY',
      description: 'Organic search domination, AI generative engine visibility, and GEO ranking.',
      icon: Search,
    },
    {
      id: '04',
      title: 'HIGHER CONVERSION',
      description: 'Friction-free user funnels engineered for high-intent client enrolment.',
      icon: Filter,
    },
    {
      id: '05',
      title: 'AUTOMATION',
      description: 'Streamlined CRM workflows, business operations automation, and saved time.',
      icon: Bot,
    },
    {
      id: '06',
      title: 'MEASURABLE GROWTH',
      description: 'Continuous analytics tracking, performance tuning, and scalable business ROI.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="outcomes" className="relative py-16 sm:py-20 bg-[#070A09] border-t border-[#D9B45F]/15 overflow-hidden">
      {/* Deep Emerald Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071E18]/60 via-[#070A09] to-[#070A09] opacity-80 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D9B45F]">
            05
          </span>
          <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
            Outcomes Over Features
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: easeCustom }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F3EFE3] font-normal leading-[0.98] tracking-tight"
          >
            WE DON'T SELL SERVICES. <br />
            <span className="text-[#D9B45F] font-normal">WE BUILD OUTCOMES.</span>
          </motion.h2>
        </div>

        {/* 6 Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="p-8 bg-[#071E18]/30 border border-[#D9B45F]/20 hover:border-[#D9B45F]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-full border flex items-center justify-center mb-6 transition-all duration-300 ${
                      isHovered
                        ? 'border-[#D9B45F] bg-[#071E18] text-[#D9B45F] scale-105 shadow-[0_0_15px_rgba(217,180,95,0.3)]'
                        : 'border-[#D9B45F]/30 bg-[#070A09] text-[#D9B45F]'
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  <span className="text-[10px] font-sans tracking-[0.2em] text-[#D9B45F] font-bold block mb-2">
                    {item.id}
                  </span>

                  <h3
                    className={`font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-3 transition-colors duration-300 ${
                      isHovered ? 'text-[#D9B45F]' : 'text-[#F3EFE3]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

