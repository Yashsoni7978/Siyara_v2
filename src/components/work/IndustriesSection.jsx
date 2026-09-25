'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

export default function IndustriesSection() {
  // Extract distinct industries from projectsData with a representative project image
  const industryList = [
    {
      name: 'REAL ESTATE',
      label: 'REAL ESTATE & LUXURY SPACES',
      tagline: 'High-intent lead acquisition & architectural brand storytelling',
      project: projectsData.find((p) => p.industry === 'Real Estate') || projectsData[0]
    },
    {
      name: 'HEALTHCARE',
      label: 'HEALTHCARE & CLINICAL CARE',
      tagline: 'High-trust patient enrolment funnels & GEO authority',
      project: projectsData.find((p) => p.industry === 'Healthcare') || projectsData[2]
    },
    {
      name: 'HOSPITALITY',
      label: 'HOSPITALITY & HERITAGE RESORTS',
      tagline: 'Direct guest reservation architecture & immersive stays',
      project: projectsData.find((p) => p.industry === 'Hospitality') || projectsData[5]
    },
    {
      name: 'EVENTS',
      label: 'EVENTS & CULTURAL FESTIVALS',
      tagline: 'High-capacity ticketing platforms & dynamic venue guides',
      project: projectsData.find((p) => p.industry === 'Events') || projectsData[6]
    },
    {
      name: 'ANCHOR / EMCEE',
      label: 'ANCHOR & EMCEE PORTFOLIOS',
      tagline: 'Bilingual live event hosting, galas, and founder brand platforms',
      project: projectsData.find((p) => p.industry === 'Anchor / Emcee') || projectsData[15]
    },
    {
      name: 'FASHION',
      label: 'FASHION & COUTURE D2C',
      tagline: 'Seamless luxury e-commerce & high-converting brand lookbooks',
      project: projectsData.find((p) => p.industry === 'Fashion') || projectsData[8]
    },
    {
      name: 'E-COMMERCE',
      label: 'E-COMMERCE & ARTISAN BRANDS',
      tagline: 'Headless storefronts & rapid multi-channel growth systems',
      project: projectsData.find((p) => p.industry === 'E-Commerce') || projectsData[9]
    },
    {
      name: 'ARCHITECTURE & INTERIORS',
      label: 'ARCHITECTURE & INTERIOR STUDIOS',
      tagline: 'Spatial design portfolios with individual case study showcases',
      project: projectsData.find((p) => p.industry === 'Architecture & Interiors') || projectsData[11]
    },
    {
      name: 'FOOD & BEVERAGE',
      label: 'FOOD & BEVERAGE & DINING',
      tagline: 'D2C subscription platforms & local dining brand engines',
      project: projectsData.find((p) => p.industry === 'Food & Beverage') || projectsData[14]
    },
    {
      name: 'AI / AUTOMATION',
      label: 'AI & CLAUDE INTEGRATIONS',
      tagline: 'Live Claude API lead qualification chat widgets and automated funnels',
      project: projectsData.find((p) => p.industry === 'AI / Automation') || projectsData[12]
    },
    {
      name: 'FINTECH',
      label: 'FINTECH & PERSONAL FINANCE',
      tagline: 'Personal finance dashboards, investment trackers, and wealth portals',
      project: projectsData.find((p) => p.industry === 'Fintech') || projectsData[13]
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const currentIndustry = industryList[activeIdx];

  return (
    <section className="relative py-20 sm:py-28 bg-[#070A09] text-[#F3EFE3] overflow-hidden border-t border-[#D9B45F]/15 border-b border-[#D9B45F]/15">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-80 pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#0C6B52]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 border-b border-white/10 pb-12">
          
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D9B45F]">
                03
              </span>
              <span className="h-[1px] w-8 bg-[#D9B45F]/40" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.26em] text-[#F3EFE3] uppercase">
                INDUSTRIES WE WORK WITH
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F3EFE3] font-normal leading-[1.02] max-w-3xl"
            >
              Different Industries. <br className="hidden sm:block" />
              Different Challenges. <br />
              <span className="italic text-gold-gradient font-serif">
                One Digital Discipline.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed mb-6">
              Every industry has a different audience, buying behaviour and business goal. Our strategy, design and technology adapt to the unique context of each brand, helping them create meaningful digital experiences and sustainable growth.
            </p>

            <div className="hidden lg:flex flex-col gap-2 border-l border-[#D9B45F]/30 pl-4 text-[10px] font-sans tracking-[0.26em] text-[#9D9B91] uppercase">
              <span>REAL BUSINESSES</span>
              <span>REAL SOLUTIONS</span>
              <span>REAL IMPACT</span>
            </div>
          </div>

        </div>

        {/* Section Interactive Body: List + Dynamic Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Vertical Industry List */}
          <div className="lg:col-span-6 flex flex-col gap-2">
            {industryList.map((item, idx) => {
              const isActive = idx === activeIdx;

              return (
                <button
                  key={item.name}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group w-full flex items-center justify-between py-3.5 px-4 sm:px-6 text-left transition-all duration-300 border-b border-white/5 ${
                    isActive
                      ? 'bg-[#071E18]/80 border-l-4 border-l-[#D9B45F] text-[#F3EFE3] pl-6 sm:pl-8'
                      : 'hover:bg-white/[0.02] text-[#9D9B91] hover:text-[#F3EFE3]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-sans tracking-widest transition-colors ${
                        isActive ? 'text-[#D9B45F] font-bold' : 'text-[#9D9B91]/50'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-serif text-xl sm:text-2xl transition-all ${
                        isActive ? 'text-[#F3EFE3] font-normal translate-x-1' : 'font-light'
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isActive && (
                      <span className="hidden sm:inline-block text-[9px] font-sans tracking-[0.2em] text-[#D9B45F] uppercase mr-2 font-semibold">
                        ACTIVE PREVIEW
                      </span>
                    )}
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive
                          ? 'text-[#D9B45F] translate-x-1'
                          : 'text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Project Preview Showcase */}
          <div className="lg:col-span-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndustry.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="relative bg-[#101613] border border-[#D9B45F]/30 p-6 sm:p-8 shadow-2xl overflow-hidden group"
              >
                {/* Background Image Preview */}
                <div className="relative aspect-[16/10] overflow-hidden mb-6 border border-white/10">
                  <img
                    src={currentIndustry.project.image}
                    alt={currentIndustry.project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101613] via-transparent to-black/20" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-[#071E18]/90 backdrop-blur-md border border-[#D9B45F]/40 text-[10px] font-sans tracking-[0.2em] text-[#D9B45F] uppercase font-bold">
                    <Sparkles className="w-3 h-3 text-[#D9B45F]" />
                    <span>{currentIndustry.name}</span>
                  </div>
                </div>

                {/* Information */}
                <div>
                  <div className="text-[10px] font-sans tracking-[0.22em] text-[#D9B45F] uppercase font-bold mb-1">
                    REPRESENTATIVE CASE STUDY
                  </div>
                  <h3 className="font-serif text-3xl text-[#F3EFE3] font-normal leading-tight mb-2">
                    {currentIndustry.project.name}
                  </h3>
                  <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed mb-4">
                    {currentIndustry.tagline}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {currentIndustry.project.services.map((serv) => (
                      <span
                        key={serv}
                        className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-[9px] font-sans tracking-[0.16em] text-[#F3EFE3]/80 uppercase"
                      >
                        {serv}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
