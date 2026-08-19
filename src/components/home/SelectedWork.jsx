import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: '01',
      title: 'RISHABH JEWELLERS',
      tagline: 'Fine Jewellery & Heritage E-Commerce',
      description: 'Architectural brand positioning, bespoke digital showcase, and automated high-conversion growth system.',
      services: ['BRANDING', 'WEB DEVELOPMENT', 'CRO & GROWTH'],
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
      brandLogo: 'RISHABH',
      heroHeadline: 'HERITAGE CRAFTSMANSHIP & FINE JEWELLERY',
      heroSubline: 'Timeless elegance meets modern digital architecture.',
      ctaText: 'DISCOVER COLLECTION',
    },
    {
      id: '02',
      title: 'BEYOND SPACES',
      tagline: 'Luxury Real Estate & Villa Architecture',
      description: 'Immersive villa booking portal, high-intent client lead funnels, and global brand authority platform.',
      services: ['LUXURY REAL ESTATE', 'WEB SYSTEM', 'LEAD ACQUISITION'],
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      brandLogo: 'BEYOND SPACES',
      heroHeadline: 'ARCHITECTURAL RESIDENCES & PRIVATE VILLAS',
      heroSubline: 'Curated living spaces engineered for discerning clientele.',
      ctaText: 'EXPLORE RESIDENCES',
    },
    {
      id: '03',
      title: 'DR. NEHA SHARMA',
      tagline: 'Aesthetic Dermatology & Clinical Authority',
      description: 'High-trust clinical web portal, patient enrolment architecture, and local GEO search domination.',
      services: ['HEALTHCARE BRANDING', 'PATIENT FUNNEL', 'SEO & GEO'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      brandLogo: 'DR. NEHA SHARMA',
      heroHeadline: 'ADVANCED AESTHETIC DERMATOLOGY & CARE',
      heroSubline: 'Science-backed skincare and aesthetic clinical excellence.',
      ctaText: 'BOOK CONSULTATION',
    },
    {
      id: '04',
      title: 'THE BREW CHAPTER',
      tagline: 'Specialty Coffee & Hospitality Brand',
      description: 'Direct-to-consumer e-commerce, hospitality brand storytelling, and automated subscription backend.',
      services: ['D2C E-COMMERCE', 'BRAND STORYTELLING', 'AUTO SUBSCRIPTIONS'],
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      brandLogo: 'BREW CHAPTER',
      heroHeadline: 'SINGLE ORIGIN CRAFT COFFEE ROASTERS',
      heroSubline: 'Artisanal roasts delivered directly to your doorstep.',
      ctaText: 'SHOP ROASTS',
    },
  ];

  const currentProject = projects[activeIndex];

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background Emerald Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-70 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D4AF37]">
            02
          </span>
          <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
            Selected Work
          </span>
        </motion.div>

        {/* Section Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Project Metadata & Copy */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-xs font-mono text-[#D4AF37] tracking-widest mb-3">
                  {currentProject.id} / 04
                </div>

                <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl text-[#F3EFE4] font-normal leading-tight mb-4">
                  {currentProject.title}
                </h2>

                <p className="font-sans text-sm sm:text-base text-[#E5C378] font-medium mb-3">
                  {currentProject.tagline}
                </p>

                <p className="font-sans text-xs sm:text-sm text-[#CFC9BB] font-light leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentProject.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-[#080B0A]/80 border border-[#D4AF37]/20 text-[10px] font-sans tracking-[0.16em] text-[#CFC9BB] uppercase"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={`#project-${currentProject.id}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-[#D4AF37]/50 bg-[#080B0A] hover:bg-[#D4AF37] text-[#F3EFE4] hover:text-[#080B0A] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-lg group"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:text-[#080B0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center Column: Dominant Project Website Laptop Visual */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Laptop Display Outer Frame */}
                <div className="relative rounded-t-xl bg-[#121615] border border-[#D4AF37]/30 p-2 sm:p-3 shadow-2xl overflow-hidden">
                  {/* Laptop Top Bar */}
                  <div className="flex items-center justify-between px-3 py-1 bg-[#0A0D0C] rounded-t-lg border-b border-white/5 mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                      <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                      <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                    </div>
                    <div className="text-[9px] font-mono text-[#CFC9BB]/40">
                      {currentProject.title.toLowerCase().replace(/\s+/g, '')}.com
                    </div>
                    <div className="w-6" />
                  </div>

                  {/* Laptop Screen Content showing selected project UI */}
                  <div className="relative bg-[#080B0A] rounded-md overflow-hidden aspect-[16/10] border border-white/5">
                    {/* Project Hero Image */}
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-[#080B0A]/60 to-transparent" />

                    {/* Website Header Bar inside mockup */}
                    <div className="relative z-10 flex items-center justify-between p-4 border-b border-white/10">
                      <span className="font-serif text-sm font-bold text-[#E5C378]">
                        {currentProject.brandLogo}
                      </span>
                      <div className="flex items-center gap-3 text-[7px] tracking-widest text-[#CFC9BB]/70">
                        <span>HOME</span>
                        <span>ABOUT</span>
                        <span>COLLECTION</span>
                        <span>CONTACT</span>
                      </div>
                    </div>

                    {/* Website Inner Content inside mockup */}
                    <div className="relative z-10 p-6 flex flex-col justify-center h-[calc(100%-40px)] max-w-xs">
                      <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE4] leading-tight mb-2">
                        {currentProject.heroHeadline}
                      </h3>
                      <p className="text-[9px] text-[#CFC9BB]/80 font-light mb-4 leading-relaxed">
                        {currentProject.heroSubline}
                      </p>
                      <div className="inline-flex items-center px-3 py-1.5 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-[8px] font-semibold tracking-widest uppercase w-fit">
                        {currentProject.ctaText}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base */}
                <div className="h-3 bg-gradient-to-b from-[#1C211F] to-[#0A0D0C] rounded-b-xl border-x border-b border-white/10 shadow-2xl relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#121615] rounded-b-md" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Editorial Numerical Project Index (01 — 04) */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="flex flex-col gap-5 border-l border-[#D4AF37]/20 pl-6">
              {projects.map((project, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveIndex(idx)}
                    className="flex items-center gap-4 text-left group focus:outline-none py-1"
                  >
                    <span
                      className={`text-xs font-mono font-semibold transition-colors duration-300 ${
                        isActive ? 'text-[#D4AF37]' : 'text-[#CFC9BB]/50 group-hover:text-[#F3EFE4]'
                      }`}
                    >
                      {project.id}
                    </span>

                    <span
                      className={`font-sans text-sm sm:text-base font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-[#E5C378] translate-x-1'
                          : 'text-[#CFC9BB]/70 group-hover:text-[#F3EFE4]'
                      }`}
                    >
                      {project.title}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] ml-auto shadow-[0_0_8px_#D4AF37]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
