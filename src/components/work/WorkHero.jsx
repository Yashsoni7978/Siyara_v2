'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { projectsData, getIndustryCategories } from '../../data/projectsData';

export default function WorkHero() {
  const totalProjects = projectsData.length;
  const categories = getIndustryCategories();
  // Count distinct non-'ALL' categories
  const totalIndustries = categories.filter((c) => c.id !== 'ALL').length;

  return (
    <section className="relative w-full min-h-screen bg-[#070A09] text-[#F3EFE3] pt-28 pb-16 lg:pt-32 lg:pb-20 flex flex-col justify-between overflow-hidden border-b border-[#D4AF37]/20">
      
      {/* FULL-BLEED ARCHITECTURAL BACKGROUND ARTWORK */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_work_bg.png"
          alt="Siyara Innovations Digital Architecture Artwork"
          className="w-full h-full object-cover object-[60%_center] lg:object-center"
        />
        {/* Subtle, restrained left gradient overlay for text legibility without obscuring artwork */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A09]/85 via-[#070A09]/30 to-transparent w-full lg:w-[60%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A09]/60 via-transparent to-[#070A09]/90 pointer-events-none" />
      </div>

      <div className="max-w-[1550px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column Editorial Side Annotation */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hidden lg:flex lg:col-span-1 flex-col gap-4 border-l border-[#D4AF37]/35 pl-4 text-[9px] font-sans tracking-[0.3em] text-[#F3EFE3]/60 uppercase font-semibold select-none"
          >
            <span>IDEAS</span>
            <span>BRANDS</span>
            <span>DIGITAL</span>
            <span>EXPERIENCES</span>
            <span>GROWTH</span>
          </motion.div>

          {/* Main Hero Content Area (Left 40% of screen over negative space) */}
          <div className="lg:col-span-10 flex flex-col items-start lg:pr-8">
            
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-sans font-bold tracking-[0.24em] text-[#D4AF37]">
                01
              </span>
              <span className="h-[1px] w-8 bg-[#D4AF37]/40" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.26em] text-[#F3EFE3] uppercase">
                OUR WORK
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl text-[#F3EFE3] font-normal leading-[0.94] tracking-tight mb-6 max-w-xl"
            >
              Brands <br />
              <span className="italic font-normal text-[#D4AF37] font-serif">
                in Action.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-sans text-sm sm:text-base text-[#F3EFE3]/85 font-light leading-relaxed max-w-[540px] mb-8"
            >
              A showcase of {totalProjects}+ projects across industries — turning bold ideas into meaningful digital experiences.
            </motion.p>

            {/* Primary CTA (Rectangular / Editorial) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-10 lg:mb-12"
            >
              <a
                href="#explore-industry"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] hover:bg-[#E5C378] text-[#070A09] text-xs font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-2xl group border border-[#D4AF37]"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowDown className="w-4 h-4 text-[#070A09] group-hover:translate-y-1 transition-transform" />
              </a>
            </motion.div>

            {/* Project Proof Statistics (Lower-Left) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-8 sm:gap-12 pt-6 border-t border-[#D4AF37]/25 w-full max-w-lg"
            >
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-normal text-[#D4AF37]">
                  {totalProjects}+
                </span>
                <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-[#F3EFE3]/70 uppercase mt-0.5">
                  PROJECTS
                </span>
              </div>

              <div className="h-8 w-[1px] bg-[#D4AF37]/20" />

              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-normal text-[#D4AF37]">
                  {totalIndustries}+
                </span>
                <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-[#F3EFE3]/70 uppercase mt-0.5">
                  INDUSTRIES
                </span>
              </div>

              <div className="h-8 w-[1px] bg-[#D4AF37]/20" />

              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-normal text-[#D4AF37]">
                  1
                </span>
                <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-[#F3EFE3]/70 uppercase mt-0.5">
                  DIGITAL DISCIPLINE
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column Editorial Side Annotation */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-1 flex-col gap-4 border-r border-[#D4AF37]/35 pr-4 text-right text-[9px] font-sans tracking-[0.3em] text-[#F3EFE3]/60 uppercase font-semibold ml-auto select-none"
          >
            <span>STRATEGY</span>
            <span>CREATIVE</span>
            <span>TECHNOLOGY</span>
            <span>GROWTH</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
