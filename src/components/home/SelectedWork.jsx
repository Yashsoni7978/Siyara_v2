'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData, CLASSIFICATION_CONFIG } from '../../data/projectsData';

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  // The 5 official Siyara Innovations engagements
  const targetSlugs = [
    'anchor-yash-soni',
    'aranya-resort',
    'ember-ivory-events',
    'tarini',
    'noor',
  ];

  const officialProjects = targetSlugs
    .map((slug) => projectsData.find((p) => p.slug === slug))
    .filter(Boolean);

  const currentProject = officialProjects[activeIndex] || officialProjects[0];
  const classConfig = CLASSIFICATION_CONFIG[currentProject?.classification] || CLASSIFICATION_CONFIG.LIVE_DEMO;

  return (
    <section id="work" className="relative py-20 sm:py-28 bg-[#070A09] text-[#F3EFE3] overflow-hidden border-t border-[#D9B45F]/15">
      {/* Background Deep Emerald Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071E18]/50 via-[#070A09] to-[#070A09] opacity-80 pointer-events-none" />
      <div 
        className="absolute top-1/4 right-10 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(12, 107, 82, 0.18) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-8 border-b border-[#D9B45F]/15">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-sans font-bold tracking-[0.24em] text-[#D9B45F]">
                07
              </span>
              <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.24em] text-[#D9B45F] uppercase">
                OFFICIAL ENGAGEMENTS &amp; PORTFOLIO
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F3EFE3] font-normal leading-[1.05] tracking-tight">
              Selected Engagements &amp; <br className="hidden sm:block" />
              <span className="italic text-[#D9B45F] font-normal">Digital Platforms.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 max-w-md">
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed md:text-right">
              Showcasing verified client engagements, internal brand platforms, and functional digital systems engineered across diverse commercial industries.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-[0.18em] text-[#D9B45F] hover:text-[#E8C979] transition-colors uppercase group"
            >
              <span>EXPLORE ALL ARCHIVE PROJECTS ({projectsData.length})</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Brand Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {officialProjects.map((project, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={project.slug}
                onClick={() => setActiveIndex(idx)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-sans font-semibold tracking-wider transition-all duration-300 uppercase flex items-center gap-2 min-h-[44px] ${
                  isActive
                    ? 'bg-[#D9B45F] text-[#070A09] shadow-lg shadow-[#D9B45F]/20'
                    : 'bg-[#0B110F] text-[#ECE7D8]/80 hover:text-[#F3EFE3] border border-[#D9B45F]/20 hover:border-[#D9B45F]/50'
                }`}
              >
                <span>{project.name}</span>
                <span className={`text-[10px] tracking-normal font-mono px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-[#070A09]/20 text-[#070A09]' : 'bg-white/10 text-[#9D9B91]'
                }`}>
                  {project.industry}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Project Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.slug}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12 rounded-2xl bg-[#0B110F] border border-[#D9B45F]/25 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#071E18]/40 blur-3xl rounded-full pointer-events-none" />

            {/* Left Column: Project Metadata, Classification & Scope */}
            <div className="lg:col-span-5 flex flex-col justify-center relative z-10">
              
              {/* Classification Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-bold tracking-[0.16em] uppercase border ${classConfig.badgeClass}`}>
                  {currentProject.classification === 'INTERNAL_PROJECT' ? (
                    <CheckCircle2 className="w-3 h-3 text-[#19A878]" />
                  ) : (
                    <Sparkles className="w-3 h-3 text-[#D9B45F]" />
                  )}
                  <span>{classConfig.badgeText}</span>
                </span>
                <span className="text-[11px] font-sans text-[#9D9B91] tracking-widest uppercase">
                  {currentProject.industry}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3EFE3] font-normal leading-[1.08] mb-3 break-words">
                {currentProject.name}
              </h3>

              {/* Tagline */}
              <p className="font-sans text-xs sm:text-sm text-[#D9B45F] font-semibold tracking-wide uppercase mb-4">
                {currentProject.tagline || currentProject.projectType}
              </p>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-[#ECE7D8]/80 font-light leading-relaxed mb-6">
                {currentProject.description}
              </p>

              {/* Scope & Capability Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {Array.isArray(currentProject.services) && currentProject.services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 rounded-sm bg-[#070A09] border border-[#D9B45F]/20 text-[10px] font-sans tracking-[0.14em] text-[#ECE7D8]/80 uppercase font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href={`/work/${currentProject.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-md min-h-[46px]"
                >
                  <span>VIEW SPECIFICATIONS</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </Link>

                {currentProject.link && (
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#F3EFE3]/25 hover:border-[#D9B45F] text-[#F3EFE3] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 min-h-[46px] bg-[#070A09]/40"
                  >
                    <span>
                      {currentProject.classification === 'INTERNAL_PROJECT'
                        ? 'VISIT PLATFORM'
                        : 'LIVE DEMO'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>

            {/* Right Column: High-Fidelity Visual Preview */}
            <div className="lg:col-span-7 relative z-10">
              <div className="relative rounded-xl overflow-hidden border border-[#D9B45F]/30 bg-[#070A09] aspect-[16/10] shadow-2xl group">
                <Image
                  src={currentProject.image}
                  alt={`${currentProject.name} platform preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-sans tracking-widest uppercase">
                  <span className="text-[#D9B45F] font-bold">
                    {currentProject.title}
                  </span>
                  <span className="text-[#ECE7D8]/70 font-mono text-[10px]">
                    {currentProject.industry}
                  </span>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Full Portfolio Discovery Callout */}
        <div className="mt-14 sm:mt-16 pt-10 border-t border-[#D9B45F]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] font-normal mb-1">
              Looking for a specific industry architecture?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light">
              Explore our full catalog of 85 client systems, live functional demonstrations, and architectural concepts.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#D9B45F] text-[#D9B45F] hover:bg-[#D9B45F] hover:text-[#070A09] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shrink-0 min-h-[46px]"
          >
            <span>VIEW COMPLETE WORK ARCHIVE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
