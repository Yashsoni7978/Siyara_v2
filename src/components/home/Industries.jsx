'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const industries = [
    {
      id: '01',
      name: 'REAL ESTATE',
      href: '/industries/real-estate',
      description: 'Architectural web platforms, high-conversion property showcases, and automated lead acquisition for builders & developers.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
      tag: 'Luxury Properties & Developers',
    },
    {
      id: '02',
      name: 'HEALTHCARE & CLINICS',
      href: '/industries/healthcare',
      description: 'Patient trust funnels, medical specialization showcases, and high-ranking local GEO search optimization for Jaipur doctors.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
      tag: 'Clinics & Medical Groups',
    },
    {
      id: '03',
      name: 'JEWELLERY & LUXURY',
      href: '/industries/jewellery-luxury',
      description: 'Bespoke Next.js flagships, macro gemstone portfolios, and local luxury SEO for heritage jewellery houses.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80',
      tag: 'Heritage & Fine Jewellery',
    },
    {
      id: '04',
      name: 'INTERIOR DESIGN',
      href: '/industries/interior-design',
      description: 'High-aesthetic spatial portfolios, editorial case studies, and affluent client inquiry acquisition for architects & designers.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
      tag: 'Interior Designers & Architects',
    },
    {
      id: '05',
      name: 'HOSPITALITY & RESORTS',
      href: '/industries/hospitality',
      description: 'Direct booking engines, destination wedding showcases, and local tourism SEO for boutique heritage hotels.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      tag: 'Hotels & Heritage Havelis',
    },
    {
      id: '06',
      name: 'E-COMMERCE & D2C',
      href: '/industries/ecommerce',
      description: 'Headless Next.js storefronts, sub-second product pages, and Google Shopping SEO for retail brands.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80',
      tag: 'Direct-to-Consumer Brands',
    },
    {
      id: '07',
      name: 'MANUFACTURING & EXPORT',
      href: '/industries/manufacturing',
      description: 'Industrial B2B catalogs, RFQ intake funnels, and international export SEO for manufacturers and mills.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
      tag: 'Industrial & B2B Exporters',
    },
  ];

  const activeIndustry = industries[hoveredIndex] || industries[0];

  return (
    <section id="industries" className="relative py-12 sm:py-16 bg-[#070A09] border-t border-[#D9B45F]/15 overflow-hidden">
      {/* Background Emerald-Black Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071E18]/60 via-[#070A09] to-[#070A09] opacity-80 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#0C6B52]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6 sm:mb-8"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D9B45F]">
            07
          </span>
          <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
            Industries We Serve
          </span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-3xl"
        >
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F3EFE3] font-normal leading-[1.05] sm:leading-[0.98] tracking-tight break-words">
            BUILT FOR <br />
            AMBITIOUS <span className="text-[#D9B45F] font-normal">INDUSTRIES.</span>
          </h2>
        </motion.div>

        {/* Open Editorial Typography Layout (List + Interactive Image Preview) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Flowing Editorial Typography List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
            }}
            className="lg:col-span-7 flex flex-col divide-y divide-[#D9B45F]/15"
          >
            {industries.map((item, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block group"
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                    }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    className="py-3.5 sm:py-5 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-baseline gap-3 sm:gap-6">
                        <span
                          className={`text-xs font-sans font-medium transition-colors duration-300 ${
                            isHovered ? 'text-[#D9B45F]' : 'text-[#9D9B91]/60'
                          }`}
                        >
                          {item.id}
                        </span>
                        
                        <h3
                          className={`font-serif text-xl sm:text-3xl lg:text-4xl tracking-wide font-normal transition-all duration-300 leading-snug break-words ${
                            isHovered
                              ? 'text-[#D9B45F] translate-x-1 sm:translate-x-2'
                              : 'text-[#F3EFE3] group-hover:text-[#D9B45F]'
                          }`}
                        >
                          {item.name}
                        </h3>
                      </div>

                      <ArrowUpRight
                        className={`w-4 h-4 sm:w-6 sm:h-6 transition-all duration-300 shrink-0 ${
                          isHovered
                            ? 'text-[#D9B45F] translate-x-0.5 -translate-y-0.5 opacity-100'
                            : 'text-[#F3EFE3]/40 opacity-70 sm:opacity-0 group-hover:opacity-100'
                        }`}
                      />
                    </div>

                    {/* Fine Gold Underline Draw on Hover */}
                    <div className="relative mt-3 sm:mt-4 h-[1px] w-full bg-white/5 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-[#D9B45F] via-[#0C6B52] to-transparent transition-transform duration-500 origin-left ${
                          isHovered ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>

          {/* Right Column: Contextual Industry Image Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative mx-auto max-w-md">
              {/* Outer Atmosphere Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#071E18] via-[#18A982]/20 to-transparent blur-2xl opacity-60 rounded-3xl" />

              {/* Image Frame with Architectural Curved Edge */}
              <Link href={activeIndustry.href} className="block group">
                <div className="relative rounded-tl-[60px] rounded-br-[60px] rounded-tr-2xl rounded-bl-2xl overflow-hidden border border-[#D9B45F]/30 shadow-2xl p-2 bg-[#070A09] group-hover:border-[#D9B45F] transition-colors duration-300">
                  <div className="relative aspect-[4/5] rounded-tl-[52px] rounded-br-[52px] overflow-hidden bg-[#071E18]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndustry.id}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={activeIndustry.image}
                          alt={activeIndustry.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-[#070A09]/40 to-transparent" />

                    {/* Overlay Info Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-sans tracking-[0.2em] text-[#D9B45F] uppercase font-bold">
                          {activeIndustry.tag}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#D9B45F] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="font-serif text-2xl text-[#F3EFE3] mb-2 font-normal group-hover:text-[#D9B45F] transition-colors">
                        {activeIndustry.name}
                      </h3>
                      <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed">
                        {activeIndustry.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
