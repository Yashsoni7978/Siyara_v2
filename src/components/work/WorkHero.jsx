'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
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
        <Image
          src="/images/hero_work_bg.webp"
          alt="Siyara Innovations Digital Architecture Artwork"
          priority
          fill
          sizes="100vw"
          className="object-cover object-[60%_center] lg:object-center"
        />
        {/* Subtle, restrained left gradient overlay for text legibility without obscuring artwork */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A09]/85 via-[#070A09]/30 to-transparent w-full lg:w-[60%] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A09]/60 via-transparent to-[#070A09]/90 pointer-events-none" />
      </div>

      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column Editorial Side Annotation */}
          <div className="hidden lg:flex lg:col-span-1 flex-col gap-4 border-l border-[#D4AF37]/35 pl-4 text-[9px] font-sans tracking-[0.3em] text-[#F3EFE3]/60 uppercase font-semibold select-none">
            <span>IDEAS</span>
            <span>BRANDS</span>
            <span>DIGITAL</span>
            <span>EXPERIENCES</span>
            <span>GROWTH</span>
          </div>

          {/* Main Hero Content Area (Left 40% of screen over negative space) */}
          <div className="lg:col-span-10 flex flex-col items-start lg:pr-8">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-sans font-bold tracking-[0.24em] text-[#D4AF37]">
                01
              </span>
              <span className="h-[1px] w-8 bg-[#D4AF37]/40" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.26em] text-[#F3EFE3] uppercase">
                OUR WORK
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-roboto text-4xl sm:text-7xl lg:text-8xl text-[#F3EFE3] font-normal leading-[0.96] tracking-tight mb-6 max-w-xl break-words">
              Brands <br />
              <span className="italic font-normal text-[#D4AF37] font-roboto">
                in Action.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-lora text-sm sm:text-base text-[#F3EFE3]/85 font-light leading-relaxed max-w-[540px] mb-8">
              A digital showcase of 85 multi-industry platforms, live demonstrations, and concepts from our 110+ completed business engagements.
            </p>

            {/* Primary CTA (Rectangular / Editorial) */}
            <div className="mb-10 lg:mb-12">
              <a
                href="#explore-industry"
                className="inline-flex items-center justify-center min-h-[48px] gap-3 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E5C378] text-[#070A09] text-xs font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-2xl group border border-[#D4AF37] rounded-sm"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowDown className="w-4 h-4 text-[#070A09] group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Project Proof Statistics (Lower-Left) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-8 sm:gap-12 pt-6 border-t border-[#D4AF37]/25 w-full max-w-lg"
            >
              <div className="flex flex-col">
                <span className="font-roboto text-2xl sm:text-3xl font-normal text-[#D4AF37]">
                  110+
                </span>
                <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-[#F3EFE3]/70 uppercase mt-0.5">
                  DELIVERED PROJECTS
                </span>
              </div>

              <div className="h-8 w-[1px] bg-[#D4AF37]/20" />

              <div className="flex flex-col">
                <span className="font-roboto text-2xl sm:text-3xl font-normal text-[#D4AF37]">
                  12
                </span>
                <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-[#F3EFE3]/70 uppercase mt-0.5">
                  INDUSTRIES
                </span>
              </div>

              <div className="h-8 w-[1px] bg-[#D4AF37]/20" />

              <div className="flex flex-col">
                <span className="font-roboto text-2xl sm:text-3xl font-normal text-[#D4AF37]">
                  60+
                </span>
                <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-[#F3EFE3]/70 uppercase mt-0.5">
                  CLIENTS SERVED
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
