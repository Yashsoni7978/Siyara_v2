'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Sparkles, CheckCircle2, Compass, ExternalLink, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData, CLASSIFICATION_CONFIG, getClassificationCategories } from '../../data/projectsData';

export default function FeaturedWorkGrid({
  selectedIndustry,
  selectedClassification = 'ALL',
  onSelectClassification,
  onClearFilter,
}) {
  const [displayLimit, setDisplayLimit] = useState(12);

  const classificationCategories = getClassificationCategories();

  // Dual Filtering: By Industry AND By Classification
  const filteredProjects = projectsData.filter((p) => {
    const matchesIndustry = selectedIndustry === 'ALL' || p.industry === selectedIndustry;
    const matchesClassification = selectedClassification === 'ALL' || p.classification === selectedClassification;
    return matchesIndustry && matchesClassification;
  });

  const displayedProjects = filteredProjects.slice(0, displayLimit);
  const hasMore = filteredProjects.length > displayLimit;

  const isFiltered = selectedIndustry !== 'ALL' || selectedClassification !== 'ALL';

  return (
    <section id="featured-work" className="relative py-16 sm:py-24 bg-[#F3EFE3] text-[#101613]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 border-b border-[#0B5E49]/15 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-sans font-bold tracking-[0.24em] text-[#B9923F]">
                02
              </span>
              <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
              <span className="text-[11px] sm:text-[12px] font-sans font-bold tracking-[0.24em] text-[#0B5E49] uppercase">
                {selectedIndustry === 'ALL' ? 'PORTFOLIO ARCHIVE' : `${selectedIndustry} ARCHIVE`}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#101613] font-normal leading-[1.05]">
              A closer look <br className="hidden sm:block" />
              <span className="italic text-[#0B5E49]">at our work.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 max-w-md">
            <p className="font-sans text-xs sm:text-sm text-[#101613]/70 font-light leading-relaxed md:text-right">
              Showing {filteredProjects.length} of {projectsData.length} multi-industry systems, live functional demonstrations, and architectural concepts.
            </p>
            {isFiltered && (
              <button
                onClick={() => {
                  if (onClearFilter) onClearFilter();
                  setDisplayLimit(12);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-sans font-bold tracking-[0.18em] text-[#B9923F] hover:text-[#0B5E49] transition-colors uppercase focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0B5E49]"
              >
                <span>RESET ALL FILTERS ({projectsData.length}) →</span>
              </button>
            )}
          </div>
        </div>

        {/* ── PROJECT DISCOVERY & CLASSIFICATION TABS BAR ─────────────── */}
        <div className="mb-10 p-3 sm:p-4 bg-[#ECE7D8] rounded-sm border border-[#0B5E49]/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-sans font-semibold tracking-wider text-[#0B5E49] uppercase px-2 py-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Classification Filter:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {classificationCategories.map((cat) => {
              const isActive = selectedClassification === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (onSelectClassification) onSelectClassification(cat.id);
                    setDisplayLimit(12);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold tracking-wider transition-all duration-200 uppercase flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5E49] ${
                    isActive
                      ? 'bg-[#0B5E49] text-[#F3EFE4] shadow-sm'
                      : 'bg-white/60 hover:bg-white text-[#101613]/80 hover:text-[#101613] border border-[#0B5E49]/15'
                  }`}
                >
                  {cat.id === 'DELIVERED_PROJECT' && <CheckCircle2 className={`w-3 h-3 ${isActive ? 'text-[#19A878]' : 'text-[#0B5E49]'}`} />}
                  {cat.id === 'LIVE_DEMO' && <Sparkles className={`w-3 h-3 ${isActive ? 'text-[#E8C979]' : 'text-[#B9923F]'}`} />}
                  {cat.id === 'CONCEPT' && <Compass className={`w-3 h-3 ${isActive ? 'text-white' : 'text-[#101613]/60'}`} />}
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-black/5 text-[#101613]/60'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── PROJECT GRID ────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedIndustry}-${selectedClassification}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8"
          >
            {displayedProjects.length === 0 ? (
              <div className="col-span-12 py-16 text-center border border-dashed border-[#0B5E49]/20 p-8 rounded-sm">
                <p className="font-serif text-2xl text-[#101613] mb-3">No matching projects found</p>
                <p className="font-sans text-xs text-[#101613]/70 mb-6">
                  No projects in the &ldquo;{selectedIndustry}&rdquo; industry match the &ldquo;{selectedClassification}&rdquo; classification.
                </p>
                <button
                  onClick={() => {
                    if (onClearFilter) onClearFilter();
                    setDisplayLimit(12);
                  }}
                  className="btn-gold"
                >
                  <span>Reset All Filters</span>
                </button>
              </div>
            ) : (
              displayedProjects.map((project, idx) => {
                const classification = project.classification || (project.status === 'LIVE' ? 'LIVE_DEMO' : 'CONCEPT');
                const classConfig = CLASSIFICATION_CONFIG[classification] || CLASSIFICATION_CONFIG.CONCEPT;

                // First 2 projects in default view get 6 cols each on desktop for editorial emphasis
                const isFirstRow = !isFiltered && idx < 2;
                const colSpan = isFirstRow ? 'lg:col-span-6' : 'lg:col-span-4';
                const cardHeight = isFirstRow ? 'h-[440px] sm:h-[500px]' : 'h-[390px] sm:h-[430px]';

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: (idx % 3) * 0.04 }}
                    className={`${colSpan}`}
                  >
                    <Link
                      href={`/work/${project.slug}`}
                      className={`group relative w-full ${cardHeight} rounded-none overflow-hidden bg-[#0A0E0C] border border-[#101613]/20 hover:border-[#D4AF37]/60 shadow-xl flex flex-col justify-between p-6 sm:p-8 text-[#F3EFE3] transition-all duration-300 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5E49]`}
                    >
                      {/* Background Visual */}
                      <Image
                        src={project.image}
                        alt={`${project.name} preview thumbnail`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out"
                      />

                      {/* Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-[#070A09]/70 to-black/50 group-hover:via-[#070A09]/60 transition-colors duration-500" />

                      {/* Top Bar: ID, Classification Badge, Industry */}
                      <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-4">
                        <span className="font-sans text-xs font-bold tracking-widest text-[#B9923F]">
                          {project.id}
                        </span>

                        <div className="flex items-center gap-2">
                          {/* 3-Tier Classification Badge */}
                          <span className={`font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-1 rounded-full border backdrop-blur-md flex items-center gap-1 ${classConfig.badgeClass}`}>
                            {classification === 'DELIVERED_PROJECT' && <CheckCircle2 className="w-2.5 h-2.5" />}
                            {classification === 'LIVE_DEMO' && <Sparkles className="w-2.5 h-2.5" />}
                            {classification === 'CONCEPT' && <Compass className="w-2.5 h-2.5" />}
                            <span>{classConfig.shortLabel}</span>
                          </span>

                          <span className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] text-[#F3EFE3]/80 uppercase px-2 py-0.5 bg-black/50 backdrop-blur-md border border-white/15 hidden sm:inline-block rounded-sm">
                            {project.industry}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Content */}
                      <div className="relative z-10 pt-8 mt-auto">
                        <span className="text-[10px] font-sans text-[#D4AF37] tracking-widest uppercase font-semibold block mb-1">
                          {project.projectType || project.industry}
                        </span>

                        <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFE4] font-normal leading-tight group-hover:text-[#D9B45F] transition-colors mb-2">
                          {project.name || project.title}
                        </h3>

                        <p className="font-sans text-xs sm:text-sm text-[#F3EFE3]/75 font-light leading-relaxed line-clamp-2 mb-4">
                          {project.description}
                        </p>

                        {/* Card Action Bar */}
                        <div className="flex items-center justify-between pt-3 border-t border-white/10">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-sans font-semibold tracking-wider text-[#19A878] group-hover:text-[#F3EFE4] transition-colors uppercase">
                            <span>Explore System Details</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </span>

                          {project.link && (
                            <span
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(project.link, '_blank', 'noopener,noreferrer');
                              }}
                              title="Launch external live demo"
                              className="text-[10px] font-sans font-semibold text-[#D9B45F] hover:text-white inline-flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-sm border border-[#D9B45F]/30 hover:border-[#D9B45F] transition-all"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── LOAD MORE / FULL ARCHIVE DISCOVERY BAR ──────────────────── */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setDisplayLimit((prev) => prev + 12)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#0B5E49] bg-[#0B5E49] hover:bg-[#063C2D] text-[#F3EFE4] font-sans text-xs font-bold tracking-[0.16em] uppercase transition-all duration-300 shadow-lg shadow-[#0B5E49]/20 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5E49]"
            >
              <Plus className="w-4 h-4" />
              <span>Load More Projects ({filteredProjects.length - displayLimit} Remaining)</span>
            </button>
            <p className="mt-3 text-xs font-sans text-[#101613]/60">
              Showing {displayedProjects.length} of {filteredProjects.length} matching architectural projects
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
