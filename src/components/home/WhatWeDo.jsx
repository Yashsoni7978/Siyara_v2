'use client';

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
    <section id="services" className="relative py-28 sm:py-36 bg-[#070A09] border-t border-[#D9B45F]/15 overflow-hidden">
      {/* Background Emerald-Black Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071E18]/60 via-[#070A09] to-[#070A09] opacity-80 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#0C6B52]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D9B45F]">
            01
          </span>
          <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
            What We Do
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#F3EFE3] font-normal leading-[0.98]">
            One connected system, <br />
            eight disciplines <br />
            working <span className="text-[#D9B45F] font-normal">together.</span>
          </h2>
        </motion.div>

        {/* Continuous Flowing Line & Node Flow (Desktop Horizontal / Mobile Responsive) */}
        <div className="relative pt-8 pb-12">
          
          {/* Continuous Glowing SVG Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-[2px] z-0">
            <div className="w-full h-full bg-gradient-to-r from-[#0C6B52]/20 via-[#D9B45F]/40 to-[#0C6B52]/20" />
            <svg className="absolute -top-[5px] left-0 w-full h-[12px]" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="6"
                x2="100%"
                y2="6"
                stroke="#D9B45F"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                className="opacity-50"
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
                      className={`absolute -inset-3 rounded-full bg-[#18A982]/20 blur-md transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    {/* Node Circular Icon Container */}
                    <div
                      className={`relative w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isHovered
                          ? 'border-[#D9B45F] bg-[#071E18] text-[#D9B45F] scale-110 shadow-[0_0_20px_rgba(217,180,95,0.3)]'
                          : 'border-[#D9B45F]/30 bg-[#070A09] text-[#D9B45F] group-hover:border-[#D9B45F]'
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[1.75] transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Subtle Node Indicator Dot */}
                    <div
                      className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                        isHovered ? 'bg-[#D9B45F]' : 'bg-[#D9B45F]/30'
                      }`}
                    />
                  </div>

                  {/* Service Title */}
                  <h3
                    className={`font-sans text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase mb-2 transition-all duration-300 h-10 ${
                      isHovered ? 'text-[#D9B45F] -translate-y-0.5' : 'text-[#F3EFE3]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="font-sans text-[11px] text-[#9D9B91] font-light leading-relaxed max-w-[160px]">
                    {service.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* See full system link */}
        <div className="mt-12 flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#D9B45F]/40" />
          <a
            href="/services"
            className="font-sans text-xs font-semibold tracking-[0.18em] text-[#9D9B91] hover:text-[#D9B45F] transition-colors uppercase"
          >
            See the full system on the Services page
          </a>
        </div>
      </div>
    </section>
  );
}
