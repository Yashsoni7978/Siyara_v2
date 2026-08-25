'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, HeartPulse, Gem, UtensilsCrossed, GraduationCap, ShoppingBag, Briefcase, Cpu, ArrowUpRight } from 'lucide-react';

export default function ServicesApplications() {
  const [activeIdx, setActiveIdx] = useState(0);
  const easeCustom = [0.16, 1, 0.3, 1];

  const categories = [
    {
      id: '01',
      name: 'REAL ESTATE',
      icon: Home,
      tagline: 'High-yield digital architecture for premier developments, luxury brokerages & real estate funds.',
      details: 'Elevating property portfolios through immersive web portals, 3D interactive floor plans, and high-intent buyer acquisition funnels.',
    },
    {
      id: '02',
      name: 'HEALTHCARE & WELLNESS',
      icon: HeartPulse,
      tagline: 'Patient acquisition portals and high-trust medical practice positioning systems.',
      details: 'Architecting HIPAA-compliant booking engines, patient trust systems, and specialized SEO visibility for medical centers.',
    },
    {
      id: '03',
      name: 'JEWELLERY & LUXURY',
      icon: Gem,
      tagline: 'Bespoke digital luxury boutiques, high-ticket conversion and VIP client journeys.',
      details: 'Creating ultra-high-contrast editorial e-commerce, private appointment booking, and brand storytelling.',
    },
    {
      id: '04',
      name: 'HOSPITALITY & LEISURE',
      icon: UtensilsCrossed,
      tagline: 'Direct booking engines and immersive digital experiences for boutique luxury hotels & dining.',
      details: 'Reducing OTA commission dependency with high-converting direct booking portals and brand positioning.',
    },
    {
      id: '05',
      name: 'EDUCATION & ACADEMIES',
      icon: GraduationCap,
      tagline: 'Student enrollment funnels and educational brand authority architecture.',
      details: 'Scaling institutional prestige, international student recruitment, and digital application portals.',
    },
    {
      id: '06',
      name: 'E-COMMERCE & D2C',
      icon: ShoppingBag,
      tagline: 'Scalable digital commerce architecture, conversion rate optimization & retention automation.',
      details: 'Headless storefront engineering, high-ROAS acquisition systems, and automated customer lifetime value tracking.',
    },
    {
      id: '07',
      name: 'PROFESSIONAL SERVICES',
      icon: Briefcase,
      tagline: 'Authority positioning for law firms, advisory practices & financial consultancies.',
      details: 'Establishing market leadership, high-value corporate client acquisition, and automated lead qualification.',
    },
    {
      id: '08',
      name: 'STARTUPS & TECHNOLOGY',
      icon: Cpu,
      tagline: 'Go-to-market launch systems, product UI/UX & investor pitch digital collateral.',
      details: 'Accelerating product-market fit, SaaS user onboarding funnels, and high-conversion landing systems.',
    },
  ];

  const currentCategory = categories[activeIdx];

  return (
    <section id="applications" className="relative py-28 sm:py-36 bg-[#070A09] text-[#F3EFE3] overflow-hidden">
      {/* Background Deep Emerald Haze */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A09] via-[#071E18]/40 to-[#070A09] opacity-90 pointer-events-none" />
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0C6B52]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeCustom }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D9B45F]">
            07
          </span>
          <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
            Specialist Applications & Sectors
          </span>
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#F3EFE3] font-normal leading-[0.98]">
            WHERE THE SYSTEM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26] font-normal">
              IS APPLIED.
            </span>
          </h2>
        </motion.div>

        {/* Editorial Sector List & Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Editorial Category List */}
          <div className="lg:col-span-6 space-y-2">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = idx === activeIdx;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`w-full text-left p-5 transition-all duration-300 flex items-center justify-between border-b ${
                    isActive
                      ? 'border-[#D9B45F] bg-[#071E18]/60 text-[#F3EFE3] pl-6'
                      : 'border-[#F3EFE3]/10 text-[#9D9B91] hover:text-[#F3EFE3] hover:border-[#D9B45F]/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-sans font-bold ${isActive ? 'text-[#D9B45F]' : 'text-[#9D9B91]/60'}`}>
                      {cat.id}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#D9B45F]' : 'text-[#9D9B91]'}`} />
                    <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">
                      {cat.name}
                    </span>
                  </div>

                  <ArrowUpRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#D9B45F] opacity-100 translate-x-0.5 -translate-y-0.5' : 'opacity-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Featured Sector Detail Showcase Card */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: easeCustom }}
                className="p-8 sm:p-12 bg-[#071E18]/40 border border-[#D9B45F]/30 backdrop-blur-md relative overflow-hidden h-full flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#0C6B52]/20 blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F]">
                      SECTOR APPLICATION {currentCategory.id} / 08
                    </span>
                    <span className="h-[1px] flex-grow bg-[#D9B45F]/20" />
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F3EFE3] font-normal leading-tight mb-4">
                    {currentCategory.name} <span className="text-[#D9B45F] font-normal">SYSTEM.</span>
                  </h3>

                  <p className="font-sans text-sm sm:text-base text-[#D9B45F] font-medium leading-relaxed mb-6">
                    {currentCategory.tagline}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed mb-8">
                    {currentCategory.details}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 w-fit shadow-lg shadow-[#D9B45F]/15"
                >
                  <span>APPLY SYSTEM TO {currentCategory.name}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
