import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Target, ShieldCheck, TrendingUp } from 'lucide-react';

export default function WhySiyara() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const easeCustom = [0.16, 1, 0.3, 1];

  const principles = [
    {
      id: '01',
      title: 'END-TO-END EXPERTISE',
      description: 'Strategy, design, development, marketing and automation under one roof.',
      icon: Layers,
    },
    {
      id: '02',
      title: 'STRATEGIC APPROACH',
      description: 'Strategy first, always. Every line of code and pixel serves a business goal.',
      icon: Target,
    },
    {
      id: '03',
      title: 'BUILT FOR RESULTS',
      description: 'Visually stunning digital experiences engineered for measurable conversion and growth.',
      icon: ShieldCheck,
    },
    {
      id: '04',
      title: 'LONG-TERM PARTNERSHIP',
      description: 'We don\'t just launch and leave. We continuously optimize and grow with you.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="why-siyara" className="relative py-28 sm:py-36 bg-[#063C2D]/20 border-t border-[#D4AF37]/15 overflow-hidden">
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-80 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Headline */}
        <div className="mb-20 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCustom }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3EFE4] font-normal leading-[1.08]"
          >
            YOUR ENTIRE DIGITAL ECOSYSTEM. <br />
            <span className="text-[#19A878] italic">ONE PARTNER.</span>
          </motion.h2>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`flex flex-col justify-between py-6 lg:px-8 relative transition-all duration-300 ${
                  idx !== 0 ? 'lg:border-l lg:border-[#D4AF37]/20' : ''
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-full border flex items-center justify-center mb-6 transition-all duration-300 ${
                      isHovered
                        ? 'border-[#19A878] bg-[#063C2D] text-[#D4AF37] scale-105 shadow-[0_0_15px_rgba(25,168,120,0.3)]'
                        : 'border-[#D4AF37]/30 bg-[#080B0A] text-[#19A878]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3
                    className={`font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-3 transition-colors duration-300 ${
                      isHovered ? 'text-[#E5C378]' : 'text-[#F3EFE4]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-[#CFC9BB]/80 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
