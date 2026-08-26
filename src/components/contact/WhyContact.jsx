import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, TrendingUp, Gem } from 'lucide-react';

export default function WhyContact() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const easeCustom = [0.16, 1, 0.3, 1];

  const principles = [
    {
      id: '01',
      title: 'QUICK RESPONSE',
      subtitle: 'Clear & Timely',
      description: 'Clear communication and timely responses to keep your project moving forward.',
      icon: Clock,
    },
    {
      id: '02',
      title: 'EXPERT TEAM',
      subtitle: 'All-In-One Studio',
      description: 'Strategy, design, technology and growth experts working together under one roof.',
      icon: Users,
    },
    {
      id: '03',
      title: 'LONG-TERM PARTNERSHIP',
      subtitle: 'Continuous Scale',
      description: 'We don\'t disappear after launch. We continuously optimize and grow when you grow.',
      icon: TrendingUp,
    },
    {
      id: '04',
      title: 'RESULTS DRIVEN',
      subtitle: 'Performance First',
      description: 'Visually captivating digital experiences engineered for measurable business impact.',
      icon: Gem,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-[#063C2D]/25 border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Atmosphere Glow */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-80 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow & Headline Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeCustom }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
                WHY WORK WITH SIYARA
              </span>
              <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeCustom }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F3EFE4] font-normal leading-[1.04] tracking-tight"
            >
              Your Goals. <br />
              Our <span className="text-[#19A878] ">Commitment.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeCustom }}
              className="font-sans text-xs sm:text-sm text-[#CFC9BB]/80 font-light leading-relaxed max-w-sm"
            >
              We bring strategy, creativity and technology together to turn your vision into measurable growth.
            </motion.p>
          </div>
        </div>

        {/* 4 Principles Grid (Matching Reference Composition with Gold Dividers) */}
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
                  {/* Icon Container */}
                  <div
                    className={`w-12 h-12 rounded-full border flex items-center justify-center mb-6 transition-all duration-300 ${
                      isHovered
                        ? 'border-[#19A878] bg-[#063C2D] text-[#D4AF37] scale-105 shadow-[0_0_15px_rgba(25,168,120,0.4)]'
                        : 'border-[#D4AF37]/30 bg-[#080B0A] text-[#19A878]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className={`font-sans text-xs font-semibold tracking-[0.18em] uppercase mb-1 transition-colors duration-300 ${
                      isHovered ? 'text-[#E5C378]' : 'text-[#F3EFE4]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  
                  <span className="text-[10px] font-sans text-[#D4AF37] block mb-3">
                    {item.subtitle}
                  </span>

                  {/* Description */}
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
