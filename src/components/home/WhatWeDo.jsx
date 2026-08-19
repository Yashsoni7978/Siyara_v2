import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit3, Code, Search, Megaphone, Sparkles, TrendingUp } from 'lucide-react';

export default function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: '01',
      title: 'BRANDING',
      subtitle: 'Strategy, Identity & Messaging',
      icon: Edit3,
    },
    {
      id: '02',
      title: 'WEB DESIGN & DEVELOPMENT',
      subtitle: 'Websites & Web Applications',
      icon: Code,
    },
    {
      id: '03',
      title: 'SEO & GEO OPTIMIZATION',
      subtitle: 'Search Visibility That Drives Traffic',
      icon: Search,
    },
    {
      id: '04',
      title: 'DIGITAL MARKETING & GROWTH',
      subtitle: 'Paid Media, Social & Performance Marketing',
      icon: Megaphone,
    },
    {
      id: '05',
      title: 'AI & AUTOMATION',
      subtitle: 'Intelligent Workflows & Business Automation',
      icon: Sparkles,
    },
    {
      id: '06',
      title: 'GROWTH SYSTEMS',
      subtitle: 'Analytics, CRO & Scalable Growth',
      icon: TrendingUp,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background Emerald Atmosphere Glow */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-80 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D4AF37]">
            03
          </span>
          <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
            What We Do
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-20 max-w-2xl"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3EFE4] font-normal leading-[1.1]">
            End-to-end digital <br />
            solutions that <br />
            drive <span className="text-[#E5C378] italic">real growth.</span>
          </h2>
        </motion.div>

        {/* Continuous Flowing Line & Node Flow (Desktop Horizontal / Mobile Responsive) */}
        <div className="relative pt-8 pb-12">
          
          {/* Continuous Glowing SVG Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-[2px] z-0">
            <div className="w-full h-full bg-gradient-to-r from-[#063C2D]/40 via-[#D4AF37]/40 to-[#063C2D]/40" />
            <svg className="absolute -top-[5px] left-0 w-full h-[12px]" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="6"
                x2="100%"
                y2="6"
                stroke="#D4AF37"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                className="opacity-60"
              />
            </svg>
          </div>

          {/* 6 Service Nodes Array */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Node Circle Container */}
                  <div className="relative mb-6">
                    {/* Glowing Halo on Hover */}
                    <div
                      className={`absolute -inset-3 rounded-full bg-[#19A878]/20 blur-md transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    {/* Node Circular Icon Container */}
                    <div
                      className={`relative w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isHovered
                          ? 'border-[#D4AF37] bg-[#063C2D] text-[#D4AF37] scale-110 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                          : 'border-[#D4AF37]/30 bg-[#080B0A] text-[#CFC9BB] group-hover:border-[#D4AF37]/60'
                      }`}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Subtle Node Indicator Dot */}
                    <div
                      className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                        isHovered ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/40'
                      }`}
                    />
                  </div>

                  {/* Service Title */}
                  <h3
                    className={`font-sans text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase mb-2 transition-all duration-300 ${
                      isHovered ? 'text-[#E5C378] -translate-y-0.5' : 'text-[#F3EFE4]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="font-sans text-[11px] text-[#CFC9BB]/70 font-light leading-relaxed max-w-[160px]">
                    {service.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
