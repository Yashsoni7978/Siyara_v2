import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: '01',
      title: 'Rishabh Jewellers',
      tagline: 'Crafting Trust. Delivering Value.',
      description: 'A refined digital experience that reflects elegance and drives growth for a premier heritage jewellery brand.',
      services: ['BRANDING', 'WEBSITE', 'SEO'],
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
      heroHeadline: 'Timeless Elegance. Crafted to Perfection.',
      heroSubline: 'Discover our finest collection of handcrafted jewellery.',
      ctaText: 'EXPLORE COLLECTION',
      brandLogo: 'RJ',
      accentColor: '#D4AF37',
    },
    {
      id: '02',
      title: 'Beyond Spaces',
      tagline: 'Architecture & Modern Spatial Design.',
      description: 'An editorial portfolio website built to showcase high-end architectural concepts and structural luxury.',
      services: ['WEB DESIGN', '3D EXPERIENCE', 'GEO'],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      heroHeadline: 'Structuring Modern Architectural Luxury.',
      heroSubline: 'Award-winning spatial designs & contemporary environments.',
      ctaText: 'VIEW PORTFOLIO',
      brandLogo: 'BS',
      accentColor: '#19A878',
    },
    {
      id: '03',
      title: 'Dr. Neha Sharma',
      tagline: 'Precision Dermatology & Clinical Excellence.',
      description: 'A seamless patient acquisition platform with online consultation booking and specialized healthcare search visibility.',
      services: ['WEB PLATFORM', 'PATIENT FUNNEL', 'SEO'],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
      heroHeadline: 'Advanced Aesthetic & Clinical Dermatology.',
      heroSubline: 'Evidence-based skincare treatments and digital booking.',
      ctaText: 'BOOK CONSULTATION',
      brandLogo: 'NS',
      accentColor: '#E5C378',
    },
    {
      id: '04',
      title: 'The Brew Chapter',
      tagline: 'Artisanal Coffee & Direct-to-Consumer Growth.',
      description: 'An immersive e-commerce experience designed for high-conversion subscription flows and brand storytelling.',
      services: ['E-COMMERCE', 'BRAND IDENTITY', 'GROWTH'],
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      heroHeadline: 'Fresh Roasted Specialty Coffee Beans.',
      heroSubline: 'Sourced responsibly from sustainable single-origin estates.',
      ctaText: 'SHOP BEANS',
      brandLogo: 'BC',
      accentColor: '#D4AF37',
    },
  ];

  const currentProject = projects[activeIndex];

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-[#063C2D]/30 border-t border-[#D4AF37]/15 overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-70 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono font-medium tracking-[0.24em] text-[#D4AF37]">
            02
          </span>
          <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
            Selected Work
          </span>
        </div>

        {/* Selected Work Layout: 3-column asymmetric layout (Info | Mockup | Index) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
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

          {/* Right Column: Editorial Numerical Project Index (01–04) */}
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
