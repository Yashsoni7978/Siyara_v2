'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import ComingSoonModal from './ComingSoonModal';

export default function FeaturedWorkGrid({ selectedIndustry, onClearFilter }) {
  const [showAll, setShowAll] = useState(false);
  const [activeComingSoonProject, setActiveComingSoonProject] = useState(null);

  // Filter projects based on selectedIndustry
  const filteredProjects = selectedIndustry === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.industry === selectedIndustry);

  // Determine displayed projects
  // When an industry is selected, show ALL projects for that industry.
  // When 'ALL' is selected, show initial limit unless showAll is true.
  const initialLimit = 12;
  const displayedProjects = (showAll || selectedIndustry !== 'ALL')
    ? filteredProjects
    : filteredProjects.slice(0, initialLimit);

  const hasMore = selectedIndustry === 'ALL' && !showAll && filteredProjects.length > initialLimit;

  const handleCardClick = (e, project) => {
    if (project.status === 'COMING_SOON' || !project.link) {
      e.preventDefault();
      setActiveComingSoonProject(project);
    }
  };

  return (
    <section id="featured-work" className="relative py-16 sm:py-24 bg-[#F3EFE3] text-[#101613]">
      {/* Modal for Coming Soon Projects */}
      <ComingSoonModal
        project={activeComingSoonProject}
        onClose={() => setActiveComingSoonProject(null)}
      />

      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#0B5E49]/15 pb-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-xs font-sans font-bold tracking-[0.24em] text-[#B9923F]">
                02
              </span>
              <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
              <span className="text-[11px] sm:text-[12px] font-sans font-bold tracking-[0.24em] text-[#0B5E49] uppercase">
                {selectedIndustry === 'ALL' ? 'PORTFOLIO ARCHIVE' : `${selectedIndustry} PROJECTS (${filteredProjects.length})`}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl text-[#101613] font-normal leading-[1.05]"
            >
              A closer look <br className="hidden sm:block" />
              <span className="italic text-[#0B5E49]">at our work.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start md:items-end gap-3 max-w-md"
          >
            <p className="font-sans text-xs sm:text-sm text-[#101613]/70 font-light leading-relaxed md:text-right">
              Explore our live completed systems alongside reserved upcoming project concepts built for high-growth brands.
            </p>
            {selectedIndustry !== 'ALL' && (
              <button
                onClick={onClearFilter}
                className="inline-flex items-center gap-1.5 text-xs font-sans font-bold tracking-[0.18em] text-[#B9923F] hover:text-[#0B5E49] transition-colors uppercase"
              >
                <span>VIEW ALL PROJECTS ({projectsData.length}) →</span>
              </button>
            )}
          </motion.div>
        </div>

        {/* Dynamic Editorial Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8"
          >
            {displayedProjects.map((project, idx) => {
              const isComingSoon = project.status === 'COMING_SOON';
              
              // First 2 projects in 'ALL' view get 6 cols each on desktop for visual weight
              const isFirstRow = selectedIndustry === 'ALL' && idx < 2;
              const colSpan = isFirstRow ? 'lg:col-span-6' : 'lg:col-span-4';
              const cardHeight = isFirstRow ? 'h-[440px] sm:h-[520px]' : 'h-[380px] sm:h-[420px]';

              const cardContent = (
                <div
                  className={`group relative w-full ${cardHeight} rounded-none overflow-hidden bg-[#0A0E0C] border ${
                    isComingSoon ? 'border-white/10 hover:border-[#D4AF37]/40' : 'border-[#101613]/20 hover:border-[#D4AF37]/50'
                  } shadow-xl flex flex-col justify-between p-6 sm:p-8 text-[#F3EFE3] cursor-pointer block transition-all duration-300`}
                >
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={`${project.name} thumbnail`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                      isComingSoon
                        ? 'opacity-35 grayscale contrast-125 group-hover:scale-105 group-hover:opacity-45'
                        : 'opacity-55 group-hover:opacity-70 group-hover:scale-105'
                    }`}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-[#070A09]/70 to-black/50 group-hover:via-[#070A09]/60 transition-colors duration-500" />

                  {/* Top Bar: Project ID & Status Badges */}
                  <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-4">
                    <span className="font-sans text-xs font-bold tracking-widest text-[#B9923F]">
                      {project.id}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.isFounder && (
                        <span className="font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#070A09] uppercase px-2.5 py-1 bg-[#D4AF37] border border-[#D4AF37] shadow-md">
                          FOUNDER'S BRAND
                        </span>
                      )}

                      {isComingSoon ? (
                        <span className="font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase px-2.5 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 backdrop-blur-md flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>COMING SOON</span>
                        </span>
                      ) : (
                        <span className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-[#19A878] uppercase px-2.5 py-1 bg-[#19A878]/15 border border-[#19A878]/40 backdrop-blur-md">
                          LIVE
                        </span>
                      )}

                      <span className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-[#F3EFE3]/80 uppercase px-2.5 py-1 bg-black/50 backdrop-blur-md border border-white/15 hidden sm:inline-block">
                        {project.industry}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 pt-8 mt-auto flex items-end justify-between gap-4">
                    <div className="max-w-md">
                      <span className="text-[10px] font-sans text-[#D4AF37] tracking-widest uppercase font-semibold block mb-1">
                        {project.projectType || project.industry}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F3EFE3] font-normal leading-tight group-hover:text-[#D9B45F] transition-colors mb-2">
                        {project.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#F3EFE3]/75 font-light leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Circular Action Icon */}
                    <div
                      className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                        isComingSoon
                          ? 'border-[#D4AF37]/40 bg-black/60 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#070A09]'
                          : 'border-[#D9B45F]/40 bg-black/50 text-[#D9B45F] group-hover:bg-[#0B5E49] group-hover:border-[#0B5E49] group-hover:text-[#F3EFE3]'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.05 }}
                  className={`${colSpan}`}
                >
                  {isComingSoon ? (
                    <div onClick={(e) => handleCardClick(e, project)}>
                      {cardContent}
                    </div>
                  ) : (
                    <a
                      href={project.link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleCardClick(e, project)}
                    >
                      {cardContent}
                    </a>
                  )}
                </motion.div>
              );
            })}

            {/* Has More Card / Button */}
            {hasMore && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setShowAll(true)}
                className="lg:col-span-4 h-[380px] sm:h-[420px] bg-[#0A0E0C] border border-[#D9B45F]/30 p-8 flex flex-col justify-between cursor-pointer group hover:bg-[#071E18] transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0C6B52]/20 blur-2xl pointer-events-none" />

                <div className="relative z-10 flex items-center gap-2 text-[#D9B45F] text-xs font-sans font-bold tracking-widest uppercase">
                  <Plus className="w-4 h-4" />
                  <span>EXPAND PORTFOLIO ARCHIVE</span>
                </div>

                <div className="relative z-10 my-auto">
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F3EFE3] font-normal leading-tight mb-3">
                    Explore {filteredProjects.length - initialLimit} More Entries
                  </h3>
                  <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                    View our complete multi-industry portfolio spanning real estate, healthcare, hospitality, fashion, e-commerce, architecture, events, AI, and fintech.
                  </p>
                </div>

                <div className="relative z-10 inline-flex items-center gap-3 text-xs font-sans font-bold tracking-[0.2em] text-[#D9B45F] group-hover:text-[#F3EFE3] transition-colors uppercase">
                  <span>SHOW ALL {filteredProjects.length} PROJECTS</span>
                  <div className="w-8 h-8 rounded-full border border-[#D9B45F]/40 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
