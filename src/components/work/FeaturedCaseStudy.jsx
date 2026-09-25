'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function FeaturedCaseStudy() {
  return (
    <section id="featured-case-study" className="relative py-20 sm:py-28 bg-[#F3EFE3] text-[#101613] border-b border-[#0B5E49]/15">
      {/* Editorial Ivory Atmosphere */}
      <div className="absolute inset-0 ivory-texture pointer-events-none opacity-80" />

      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-xs font-sans font-bold tracking-[0.24em] text-[#B9923F]">
                04
              </span>
              <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
              <span className="text-[11px] sm:text-[12px] font-sans font-bold tracking-[0.24em] text-[#0B5E49] uppercase">
                FEATURED CASE STUDY
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#101613] font-normal leading-[1.02]"
            >
              From Vision <br className="hidden sm:block" />
              <span className="italic text-[#0B5E49]">to a Digital Legacy.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2">
            <p className="font-sans text-xs sm:text-sm text-[#101613]/70 font-light leading-relaxed mb-6">
              Shri Property — A complete digital architectural showcase for a premier real estate developer, establishing luxury brand authority across 5 flagship projects in 4 cities.
            </p>

            <div className="hidden lg:flex flex-col gap-2 border-l border-[#B9923F]/40 pl-4 text-[10px] font-sans tracking-[0.26em] text-[#0B5E49] uppercase font-bold">
              <span>REAL ESTATE</span>
              <span>ARCHITECTURE</span>
              <span>WEB SYSTEM</span>
              <span>LEAD FUNNEL</span>
              <span>BRANDING</span>
            </div>
          </div>
        </div>

        {/* Laptop Display & Case Study Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Context & Core Deliverables */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ECE7D8] border border-[#B9923F]/40 text-[10px] font-sans tracking-[0.2em] text-[#0B5E49] uppercase font-bold">
                REAL ESTATE & LUXURY SPACES
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#101613] leading-tight font-normal">
                Shri Property
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#101613]/80 font-light leading-relaxed">
                Positioned as a luxury property developer showcase spanning 5 flagship developments across 4 cities, we engineered Shri Property’s digital web presence with interactive tour walkthroughs, high-intent lead funnel architecture, and Schema.org SEO structure.
              </p>

              <div className="space-y-3 pt-2 border-t border-[#0B5E49]/15">
                <div className="flex items-center gap-3 text-xs font-sans text-[#101613]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#B9923F] flex-shrink-0" />
                  <span>Interactive 5-Project Flagship Showcase & Floor Plan Portal</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-sans text-[#101613]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#B9923F] flex-shrink-0" />
                  <span>High-Intent Lead Acquisition & Direct Consultation Funnels</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-sans text-[#101613]/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#B9923F] flex-shrink-0" />
                  <span>Server-Rendered Static Performance & Structured SEO</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://shri-properties.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#101613] hover:bg-[#0B5E49] text-[#F3EFE3] text-xs font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl group"
                >
                  <span>LAUNCH LIVE SITE</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F3EFE3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dominant Laptop & Visual Screen Composition */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Laptop Display Outer Frame */}
              <div className="relative rounded-t-xl bg-[#080B0A] border border-[#B9923F]/40 p-2 sm:p-4 shadow-2xl overflow-hidden">
                {/* Laptop Header Bar */}
                <div className="flex items-center justify-between px-4 py-1.5 bg-[#070A09] rounded-t-lg border-b border-white/10 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="text-[10px] font-sans text-[#D9B45F] tracking-widest uppercase font-semibold">
                    shri-properties.vercel.app
                  </div>
                  <div className="w-8" />
                </div>

                {/* Screen Showcase */}
                <div className="relative bg-[#070A09] rounded-md overflow-hidden aspect-[16/10] border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85"
                    alt="Shri Property Showcase"
                    className="absolute inset-0 w-full h-full object-cover opacity-65 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-[#070A09]/60 to-transparent" />

                  {/* Header Bar inside Mockup */}
                  <div className="relative z-10 flex items-center justify-between p-5 border-b border-white/15">
                    <span className="font-serif text-base font-bold text-[#D9B45F] tracking-widest">
                      SHRI PROPERTY
                    </span>
                    <div className="flex items-center gap-4 text-[8px] tracking-[0.2em] text-[#F3EFE3] font-sans uppercase">
                      <span>PROJECTS</span>
                      <span>VILLAS</span>
                      <span>RESIDENCES</span>
                      <span>CONTACT</span>
                    </div>
                  </div>

                  {/* Inner Hero inside Mockup */}
                  <div className="relative z-10 p-8 flex flex-col justify-center h-[calc(100%-60px)] max-w-sm">
                    <span className="text-[9px] font-sans text-[#D9B45F] tracking-[0.24em] uppercase mb-2 font-bold">
                      FLAGSHIP REAL ESTATE
                    </span>
                    <h4 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] leading-none mb-3 font-normal">
                      Architectural Estates.
                    </h4>
                    <p className="text-[10px] text-[#9D9B91] font-light leading-relaxed mb-6">
                      Luxury real estate developer showcase across 4 major cities.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-[#D9B45F] text-[#070A09] text-[9px] font-sans font-bold tracking-widest uppercase w-fit">
                      EXPLORE PROJECTS
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base Frame */}
              <div className="h-4 bg-gradient-to-b from-[#1A201C] to-[#070A09] rounded-b-xl border-x border-b border-white/15 shadow-2xl relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-[#101613] rounded-b-md" />
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
