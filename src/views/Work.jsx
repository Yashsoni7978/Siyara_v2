'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Compass,
  Filter,
  Layers,
  Cpu,
  ShieldCheck,
  MessageCircle,
  Search,
  X,
  Code2,
} from 'lucide-react';
import SectionConnector from '../components/common/SectionConnector';
import { siteConfig } from '../data/siteConfig';
import {
  projectsData,
  CLASSIFICATION_CONFIG,
  getDisciplineCategories,
  getFeaturedProjects,
} from '../data/projectsData';

export default function Work() {
  const [selectedDiscipline, setSelectedDiscipline] = useState('ALL');
  const [selectedType, setSelectedType] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayLimit, setDisplayLimit] = useState(12);

  // Sync with URL query parameters if present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      const typeParam = params.get('type');

      if (catParam) {
        const normalized = catParam.toUpperCase();
        if (['WEBSITES', 'ECOMMERCE', 'BRAND', 'GROWTH', 'CONCEPTS'].includes(normalized)) {
          setSelectedDiscipline(normalized);
        }
      }

      if (typeParam) {
        const normalizedType = typeParam.toUpperCase();
        if (['LIVE', 'CONCEPT'].includes(normalizedType)) {
          setSelectedType(normalizedType);
        }
      }
    }
  }, []);

  // Update query params on filter change
  const handleSelectDiscipline = (discId) => {
    setSelectedDiscipline(discId);
    setDisplayLimit(12);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (discId === 'ALL') {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', discId.toLowerCase());
      }
      window.history.pushState({}, '', url.toString());
    }
  };

  const handleSelectType = (typeId) => {
    setSelectedType(typeId);
    setDisplayLimit(12);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (typeId === 'ALL') {
        url.searchParams.delete('type');
      } else {
        url.searchParams.set('type', typeId.toLowerCase());
      }
      window.history.pushState({}, '', url.toString());
    }
  };

  const handleResetFilters = () => {
    setSelectedDiscipline('ALL');
    setSelectedType('ALL');
    setSearchQuery('');
    setDisplayLimit(12);

    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('category');
      url.searchParams.delete('type');
      window.history.pushState({}, '', url.toString());
    }
  };

  // Helper to map project to discipline
  const mapProjectToDiscipline = (project) => {
    const ind = project.industry;
    if (ind === 'E-Commerce' || ind === 'Fashion') return 'ECOMMERCE';
    if (
      ind === 'Events' ||
      ind === 'Anchor / Emcee' ||
      ind === 'Food & Beverage' ||
      ind === 'Interior & Spatial Design' ||
      ind === 'Design & Spatial Living'
    ) {
      return 'BRAND';
    }
    if (ind === 'Fintech') return 'GROWTH';
    return 'WEBSITES';
  };

  // Filtered list of projects for explorer
  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      // 1. Discipline filter
      let matchesDiscipline = true;
      if (selectedDiscipline === 'CONCEPTS') {
        matchesDiscipline = p.classification === 'CONCEPT';
      } else if (selectedDiscipline !== 'ALL') {
        matchesDiscipline = mapProjectToDiscipline(p) === selectedDiscipline;
      }

      // 2. Type filter
      let matchesType = true;
      if (selectedType === 'LIVE_DEMO') {
        matchesType = p.classification === 'LIVE_DEMO';
      } else if (selectedType === 'INTERNAL') {
        matchesType = p.classification === 'INTERNAL_PROJECT';
      } else if (selectedType === 'CONCEPT') {
        matchesType = p.classification === 'CONCEPT';
      } else if (selectedType === 'LIVE') {
        matchesType = p.classification === 'LIVE_DEMO' || p.classification === 'INTERNAL_PROJECT' || p.status === 'LIVE';
      }

      // 3. Search query
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        matchesSearch =
          p.name.toLowerCase().includes(query) ||
          p.industry.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          (p.services && p.services.some((s) => s.toLowerCase().includes(query)));
      }

      return matchesDiscipline && matchesType && matchesSearch;
    });
  }, [selectedDiscipline, selectedType, searchQuery]);

  const displayedProjects = filteredProjects.slice(0, displayLimit);
  const hasMore = filteredProjects.length > displayLimit;
  const isFiltered = selectedDiscipline !== 'ALL' || selectedType !== 'ALL' || searchQuery.trim().length > 0;

  // Discipline Category items with counts
  const disciplineCategories = useMemo(() => getDisciplineCategories(), []);
  const featuredProjects = useMemo(() => getFeaturedProjects(), []);

  // Verified dynamic statistics derived from projectsData
  const totalShowcases = projectsData.length;
  const liveDemoCount = projectsData.filter((p) => p.classification === 'LIVE_DEMO').length;
  const industryCategoryCount = new Set(projectsData.map((p) => p.industry)).size;
  const internalPlatformCount = projectsData.filter((p) => p.classification === 'INTERNAL_PROJECT').length;
  const conceptCount = projectsData.filter((p) => p.classification === 'CONCEPT').length;

  return (
    <div className="bg-[#080B0A] text-[#F3EFE4] selection:bg-[#063C2D] selection:text-[#D4AF37]">
      
      {/* ========================================================================= */}
      {/* 01. PORTFOLIO HERO (DARK OBSIDIAN / EMERALD ATMOSPHERE)                    */}
      {/* ========================================================================= */}
      <section
        id="work-hero"
        aria-label="Portfolio Hero"
        className="relative min-h-[85svh] pt-32 pb-16 lg:pt-36 lg:pb-24 bg-[#080B0A] overflow-hidden flex items-center"
      >
        {/* Ambient Gradient Glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#080B0A] via-[#05261C] to-[#041710] pointer-events-none" />
        <div
          className="absolute top-1/4 right-1/4 w-[650px] h-[450px] rounded-full pointer-events-none opacity-25"
          style={{
            background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.35) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -top-20 left-1/4 w-[500px] h-[300px] rounded-full pointer-events-none opacity-15"
          style={{
            background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-roboto text-[#C5D2CE]/70 mb-6">
            <Link href="/" className="hover:text-[#E5C378] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#E5C378] font-medium">Selected Work</span>
          </nav>

          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 mb-5 sm:mb-6"
            >
              <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
                — SIYARA PORTFOLIO &amp; SHOWCASE ARCHIVE —
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-roboto text-4xl sm:text-6xl lg:text-[70px] font-normal text-[#F3EFE4] leading-[1.08] tracking-tight mb-6 sm:mb-8"
            >
              Digital Craft Built for{' '}
              <span className="font-lora italic text-[#E5C378]">
                Measurable Impact.
              </span>
            </motion.h1>

            {/* Transparent Supporting Copy */}
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-lora text-sm sm:text-base lg:text-[18px] text-[#C5D2CE] font-light leading-relaxed max-w-2xl mb-10 sm:mb-12"
            >
              Explore our curated showcase of production platforms, live interactive demonstrations, and strategic concepts engineered across 11 industry verticals.
            </motion.p>

            {/* Dual Actions */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-14 sm:mb-16"
            >
              <a
                href="#featured-work"
                className="inline-flex items-center justify-center min-h-[48px] gap-2.5 px-8 py-3.5 bg-[#152D24] hover:bg-[#1C3B30] border border-[#0B5741] hover:border-[#147A5C] text-[#F3EFE4] text-xs sm:text-sm font-roboto font-bold tracking-[0.14em] rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_0_16px_rgba(25,168,120,0.25)] hover:-translate-y-0.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878]"
              >
                <span>Explore Featured Highlights</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] gap-2.5 px-8 py-3.5 bg-[#152D24] hover:bg-[#1C3B30] border border-[#0B5741] hover:border-[#147A5C] text-[#F3EFE4] text-xs sm:text-sm font-roboto font-medium tracking-[0.14em] rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_16px_rgba(25,168,120,0.25)] hover:-translate-y-0.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878]"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* Transparent & Verified Portfolio Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10"
            >
              <div>
                <span className="font-roboto text-2xl sm:text-3xl font-bold text-[#E5C378] block">
                  {totalShowcases}
                </span>
                <span className="text-[11px] font-roboto tracking-wider uppercase text-[#C5D2CE]/80 font-medium mt-1 block">
                  Portfolio Showcases
                </span>
              </div>

              <div>
                <span className="font-roboto text-2xl sm:text-3xl font-bold text-[#E5C378] block">
                  {liveDemoCount}
                </span>
                <span className="text-[11px] font-roboto tracking-wider uppercase text-[#C5D2CE]/80 font-medium mt-1 block">
                  Live Demonstrations
                </span>
              </div>

              <div>
                <span className="font-roboto text-2xl sm:text-3xl font-bold text-[#E5C378] block">
                  {industryCategoryCount}
                </span>
                <span className="text-[11px] font-roboto tracking-wider uppercase text-[#C5D2CE]/80 font-medium mt-1 block">
                  Industry Categories
                </span>
              </div>

              <div>
                <span className="font-roboto text-2xl sm:text-3xl font-bold text-[#E5C378] block">
                  {internalPlatformCount}
                </span>
                <span className="text-[11px] font-roboto tracking-wider uppercase text-[#C5D2CE]/80 font-medium mt-1 block">
                  Internal Production Platform
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CONNECTOR: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* ========================================================================= */}
      {/* 02. FEATURED PROJECTS SHOWCASE (WARM IVORY)                               */}
      {/* ========================================================================= */}
      <section
        id="featured-work"
        aria-label="Featured Projects Showcase"
        className="relative py-20 sm:py-24 lg:py-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#C99742] uppercase">
              — CURATED HIGHLIGHTS —
            </span>
          </div>

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-16 mb-14 sm:mb-18">
            <div>
              <h2 className="font-roboto text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#080B0A] leading-[1.12] tracking-tight">
                Selected Live Platforms<br />
                <span className="font-lora italic text-[#C99742]">&amp; Demonstrations.</span>
              </h2>
            </div>
            <div className="lg:border-l lg:border-[#080B0A]/15 lg:pl-8 max-w-md">
              <p className="font-lora text-xs sm:text-sm text-[#4A504D] leading-relaxed">
                Featured interactive systems deployed with Next.js, headless CMS, and responsive editorial craft. Click to launch the live platform.
              </p>
            </div>
          </div>

          {/* EDITORIAL SHOWCASE LAYOUT (VARIED PROPORTIONS) */}
          <div className="space-y-8 sm:space-y-10">
            
            {/* 1. LEAD HERO PROJECT (Full Width Card: Aranya Resort) */}
            {featuredProjects[0] && (
              <div className="group relative rounded-2xl overflow-hidden bg-[#080B0A] text-[#F3EFE4] border border-[#080B0A]/10 shadow-xl transition-all duration-500 hover:shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  
                  {/* Left Visual Preview */}
                  <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[480px] overflow-hidden bg-[#0A0E0C]">
                    <Image
                      src={featuredProjects[0].image}
                      alt={`${featuredProjects[0].name} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-transparent lg:hidden" />
                  </div>

                  {/* Right Content Column */}
                  <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      {/* Badge & Industry */}
                      <div className="flex items-center gap-2.5 mb-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-roboto font-bold tracking-[0.14em] uppercase bg-[#E5C378]/20 text-[#E5C378] border border-[#E5C378]/40 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#E5C378]" />
                          <span>Live Interactive Demo</span>
                        </span>
                        <span className="text-[11px] font-roboto font-semibold tracking-wider uppercase text-[#C5D2CE]/70">
                          {featuredProjects[0].industry}
                        </span>
                      </div>

                      <h3 className="font-roboto text-2xl sm:text-3xl lg:text-4xl text-[#F3EFE4] font-normal mb-3 group-hover:text-[#E5C378] transition-colors leading-snug">
                        {featuredProjects[0].name}
                      </h3>

                      <p className="font-lora text-xs sm:text-sm text-[#C5D2CE] font-light leading-relaxed mb-6">
                        {featuredProjects[0].description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {featuredProjects[0].services.map((srv, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-sm bg-white/10 text-[10px] font-mono tracking-wider uppercase text-[#F3EFE4]"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/15">
                      {featuredProjects[0].link && (
                        <a
                          href={featuredProjects[0].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#152D24] hover:bg-[#1C3B30] border border-[#0B5741] hover:border-[#147A5C] text-[#F3EFE4] text-xs font-roboto font-bold tracking-[0.12em] uppercase transition-all duration-300 shadow-md hover:shadow-[0_0_14px_rgba(25,168,120,0.22)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878]"
                        >
                          <span>Launch Live Platform</span>
                          <ExternalLink className="w-3.5 h-3.5 stroke-[2.2]" />
                        </a>
                      )}

                      <Link
                        href={`/work/${featuredProjects[0].slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-roboto font-semibold tracking-wider text-[#C5D2CE] hover:text-[#E5C378] uppercase transition-colors"
                      >
                        <span>View Project Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* 2 & 3. EDITORIAL SIDE-BY-SIDE PAIR (Tarini & Anchor Ritvika Solanki) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              {featuredProjects.slice(1, 3).map((project, idx) => {
                const isInternal = project.classification === 'INTERNAL_PROJECT';

                return (
                  <div
                    key={idx}
                    className="group rounded-2xl overflow-hidden bg-[#080B0A] text-[#F3EFE4] border border-[#080B0A]/10 shadow-xl transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
                  >
                    {/* Visual */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0E0C]">
                      <Image
                        src={project.image}
                        alt={`${project.name} preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center gap-2.5 mb-3">
                          <span
                            className={`px-3 py-1 rounded-full text-[10px] font-roboto font-bold tracking-[0.14em] uppercase border flex items-center gap-1.5 ${
                              isInternal
                                ? 'bg-[#063C2D] text-[#19A878] border-[#19A878]/40'
                                : 'bg-[#E5C378]/20 text-[#E5C378] border-[#E5C378]/40'
                            }`}
                          >
                            {isInternal ? (
                              <>
                                <CheckCircle2 className="w-3 h-3 text-[#19A878]" />
                                <span>Production Platform</span>
                              </>
                            ) : (
                              <>
                                <Sparkles className="w-3 h-3 text-[#E5C378]" />
                                <span>Live Interactive Demo</span>
                              </>
                            )}
                          </span>
                          <span className="text-[11px] font-roboto font-semibold tracking-wider uppercase text-[#C5D2CE]/70">
                            {project.industry}
                          </span>
                        </div>

                        <h3 className="font-roboto text-xl sm:text-2xl text-[#F3EFE4] font-normal mb-2.5 group-hover:text-[#E5C378] transition-colors leading-snug">
                          {project.name}
                        </h3>

                        <p className="font-lora text-xs sm:text-[13px] text-[#C5D2CE] font-light leading-relaxed mb-6 line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-5 border-t border-white/15">
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-roboto font-bold tracking-wider text-[#E5C378] hover:text-white uppercase transition-colors"
                          >
                            <span>Launch Live</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span />
                        )}

                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-roboto font-semibold tracking-wider text-[#C5D2CE] hover:text-[#E5C378] uppercase transition-colors"
                        >
                          <span>Case Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* 4 & 5. SECOND EDITORIAL PAIR (Shri Property & Noor Restaurant) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              {featuredProjects.slice(3, 5).map((project, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl overflow-hidden bg-[#080B0A] text-[#F3EFE4] border border-[#080B0A]/10 shadow-xl transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
                >
                  {/* Visual */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0E0C]">
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-7 sm:p-9 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-roboto font-bold tracking-[0.14em] uppercase bg-[#E5C378]/20 text-[#E5C378] border border-[#E5C378]/40 flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#E5C378]" />
                          <span>Live Interactive Demo</span>
                        </span>
                        <span className="text-[11px] font-roboto font-semibold tracking-wider uppercase text-[#C5D2CE]/70">
                          {project.industry}
                        </span>
                      </div>

                      <h3 className="font-roboto text-xl sm:text-2xl text-[#F3EFE4] font-normal mb-2.5 group-hover:text-[#E5C378] transition-colors leading-snug">
                        {project.name}
                      </h3>

                      <p className="font-lora text-xs sm:text-[13px] text-[#C5D2CE] font-light leading-relaxed mb-6 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-white/15">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-roboto font-bold tracking-wider text-[#E5C378] hover:text-white uppercase transition-colors"
                        >
                          <span>Launch Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span />
                      )}

                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-roboto font-semibold tracking-wider text-[#C5D2CE] hover:text-[#E5C378] uppercase transition-colors"
                      >
                        <span>Case Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. COMPLETE PORTFOLIO EXPLORER & FILTER SYSTEM (WARM IVORY)               */}
      {/* ========================================================================= */}
      <section
        id="explore-portfolio"
        aria-label="Portfolio Explorer"
        className="relative pt-6 pb-24 sm:pb-28 lg:pb-32 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#C99742] uppercase">
              — COMPLETE SHOWCASE ARCHIVE —
            </span>
          </div>

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <h2 className="font-roboto text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#080B0A] leading-[1.15] tracking-tight">
                Explore All Disciplines<br />
                <span className="font-lora italic text-[#C99742]">&amp; Industry Categories.</span>
              </h2>
            </div>
            
            {/* Search Input Box */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDisplayLimit(12);
                }}
                className="w-full px-4 py-2.5 pl-10 text-xs font-roboto bg-[#EFE9DC] border border-[#080B0A]/15 rounded-full text-[#080B0A] placeholder-[#080B0A]/40 focus:outline-none focus:border-[#C99742]"
              />
              <Search className="w-4 h-4 text-[#080B0A]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#080B0A]/50 hover:text-[#080B0A]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* ── PRIMARY DISCIPLINE NAVIGATION TABS ───────────────────────── */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-[#080B0A]/10 no-scrollbar">
            {disciplineCategories.map((cat) => {
              const isSelected = selectedDiscipline === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectDiscipline(cat.id)}
                  className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-roboto font-medium tracking-wider uppercase transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#080B0A] text-[#F3EFE4] shadow-md'
                      : 'bg-[#EFE9DC] hover:bg-[#E5DFD0] text-[#080B0A]/80 border border-[#080B0A]/10'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                      isSelected ? 'bg-white/20 text-[#E5C378]' : 'bg-[#080B0A]/10 text-[#080B0A]/60'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── SECONDARY TYPE FILTER (ALL / LIVE DEMOS / CONCEPTS / INTERNAL) ──────── */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-3 sm:p-4 rounded-xl bg-[#EFE9DC] border border-[#080B0A]/8">
            <div className="flex items-center gap-2 text-xs font-roboto font-semibold tracking-wider uppercase text-[#C99742]">
              <Filter className="w-3.5 h-3.5" />
              <span>Project Classification:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'ALL', label: `All Showcases (${totalShowcases})` },
                { id: 'LIVE_DEMO', label: `Live Demonstrations (${liveDemoCount})` },
                { id: 'INTERNAL', label: `Internal Platform (${internalPlatformCount})` },
                { id: 'CONCEPT', label: `Design Concepts (${conceptCount})` },
              ].map((typeItem) => {
                const isActive = selectedType === typeItem.id;

                return (
                  <button
                    key={typeItem.id}
                    onClick={() => handleSelectType(typeItem.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-roboto font-medium transition-all ${
                      isActive
                        ? 'bg-[#063C2D] text-[#F3EFE4] shadow-xs'
                        : 'bg-white/70 hover:bg-white text-[#080B0A]/80 border border-[#080B0A]/8'
                    }`}
                  >
                    {typeItem.label}
                  </button>
                );
              })}

              {isFiltered && (
                <button
                  onClick={handleResetFilters}
                  className="px-3.5 py-1.5 rounded-full text-xs font-roboto font-bold text-[#C99742] hover:text-[#080B0A] transition-colors uppercase ml-2"
                >
                  Reset Filters ↺
                </button>
              )}
            </div>
          </div>

          {/* ── PORTFOLIO CLASSIFICATION SCOPE DISCLOSURE ────────────────── */}
          <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-[#EFE9DC] border border-[#080B0A]/10 text-xs text-[#4A504D] leading-relaxed">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-[#080B0A]/10">
              <span className="font-roboto font-bold tracking-widest text-[#080B0A] uppercase text-xs flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#063C2D]" />
                Portfolio Scope &amp; Transparency Standard
              </span>
              <span className="font-mono text-[11px] text-[#080B0A]/60">
                85 Showcases · Verified Dynamic Data
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <strong className="text-[#080B0A] font-roboto block mb-1">Internal Production Platform (1)</strong>
                A live, production-grade digital platform engineered and operated in-house for studio leadership initiatives.
              </div>
              <div>
                <strong className="text-[#080B0A] font-roboto block mb-1">Live Demonstrations (16)</strong>
                Fully interactive web applications deployed on live infrastructure to demonstrate layout hierarchy, user journeys, and technical speed.
              </div>
              <div>
                <strong className="text-[#080B0A] font-roboto block mb-1">Design Concepts (68)</strong>
                Strategic design prototypes exploring visual identity, user experience, and responsive interface workflows across 11 industry verticals.
              </div>
            </div>
          </div>

          {/* ── PROJECT GRID ────────────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedDiscipline}-${selectedType}-${searchQuery}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {displayedProjects.length === 0 ? (
                <div className="col-span-full py-20 text-center border border-dashed border-[#080B0A]/20 p-8 rounded-2xl bg-[#EFE9DC]/60">
                  <p className="font-roboto text-2xl text-[#080B0A] mb-2 font-normal">
                    No matching projects found
                  </p>
                  <p className="font-lora text-xs sm:text-sm text-[#4A504D] mb-6">
                    Try adjusting your filters or search keywords to explore our portfolio.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="px-6 py-2.5 rounded-full bg-[#152D24] hover:bg-[#1C3B30] border border-[#0B5741] hover:border-[#147A5C] text-[#F3EFE4] text-xs font-roboto font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-[0_0_12px_rgba(25,168,120,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878]"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                displayedProjects.map((project, idx) => {
                  const isLive = project.status === 'LIVE' || project.classification === 'LIVE_DEMO' || project.classification === 'INTERNAL_PROJECT';
                  const isInternal = project.classification === 'INTERNAL_PROJECT';

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.4, delay: (idx % 3) * 0.05 }}
                    >
                      <Link
                        href={`/work/${project.slug}`}
                        className="group flex flex-col justify-between h-[420px] rounded-2xl overflow-hidden bg-[#080B0A] text-[#F3EFE4] border border-[#080B0A]/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 block"
                      >
                        {/* Thumbnail Visual */}
                        <div className="relative h-[210px] w-full overflow-hidden bg-[#0A0E0C]">
                          <Image
                            src={project.image}
                            alt={`${project.name} thumbnail`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-transparent to-transparent opacity-80" />
                          
                          {/* Top Badges */}
                          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                            <span className="text-[10px] font-mono font-bold text-[#E5C378] px-2 py-0.5 rounded-sm bg-black/60 backdrop-blur-md border border-white/10">
                              {project.id}
                            </span>

                            <span
                              className={`text-[9px] font-roboto font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border backdrop-blur-md flex items-center gap-1 ${
                                isInternal
                                  ? 'bg-[#063C2D]/80 text-[#19A878] border-[#19A878]/40'
                                  : isLive
                                  ? 'bg-[#080B0A]/80 text-[#E5C378] border-[#E5C378]/40'
                                  : 'bg-black/60 text-[#C5D2CE] border-white/15'
                              }`}
                            >
                              {isInternal ? (
                                <>
                                  <CheckCircle2 className="w-2.5 h-2.5 text-[#19A878]" />
                                  <span>Production</span>
                                </>
                              ) : isLive ? (
                                <>
                                  <Sparkles className="w-2.5 h-2.5 text-[#E5C378]" />
                                  <span>Live Demo</span>
                                </>
                              ) : (
                                <>
                                  <Compass className="w-2.5 h-2.5 text-[#C5D2CE]" />
                                  <span>Concept</span>
                                </>
                              )}
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6 flex flex-col justify-between flex-grow">
                          <div>
                            <span className="text-[10px] font-roboto font-semibold tracking-wider text-[#C99742] uppercase block mb-1">
                              {project.industry}
                            </span>

                            <h3 className="font-roboto text-xl text-[#F3EFE4] font-normal group-hover:text-[#E5C378] transition-colors leading-snug mb-2 line-clamp-1">
                              {project.name}
                            </h3>

                            <p className="font-lora text-xs text-[#C5D2CE] font-light leading-relaxed line-clamp-2">
                              {project.description}
                            </p>
                          </div>

                          {/* Footer Action */}
                          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-roboto font-bold tracking-wider uppercase text-[#C5D2CE] group-hover:text-[#E5C378] transition-colors">
                            <span>View Case Overview</span>
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>

                        </div>
                      </Link>
                    </motion.div>
                  );
                })
              )}
            </motion.div>
          </AnimatePresence>

          {/* ── PAGINATION & LOAD MORE ──────────────────────────────────── */}
          {hasMore && (
            <div className="mt-14 sm:mt-16 text-center">
              <button
                onClick={() => setDisplayLimit((prev) => prev + 12)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#152D24] hover:bg-[#1C3B30] border border-[#0B5741] hover:border-[#147A5C] text-[#F3EFE4] text-xs font-roboto font-bold tracking-[0.14em] uppercase transition-all duration-300 shadow-xl hover:shadow-[0_0_16px_rgba(25,168,120,0.25)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878]"
              >
                <span>Load More Showcases</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
              <p className="font-lora text-xs text-[#4A504D] mt-3">
                Showing {displayedProjects.length} of {filteredProjects.length} projects
              </p>
            </div>
          )}

        </div>
      </section>

      {/* CONNECTOR: IVORY → DARK EMERALD */}
      <SectionConnector fromDark={false} />

      {/* ========================================================================= */}
      {/* 04. OUR DIGITAL CRAFT & DELIVERY APPROACH (DEEP EMERALD)                  */}
      {/* ========================================================================= */}
      <section
        id="our-approach"
        aria-label="Delivery Approach"
        className="relative py-20 sm:py-24 lg:py-28 bg-[#063C2D] text-[#F3EFE4] overflow-hidden"
      >
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#063C2D] via-[#05261C] to-[#041A13] pointer-events-none" />
        
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
              — HOW WE BUILD —
            </span>
          </div>

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-16 mb-16 sm:mb-20">
            <div>
              <h2 className="font-lora text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#F3EFE4] leading-[1.12] tracking-tight">
                Our Digital Craft<br />
                <span className="italic text-[#E5C378]">&amp; Delivery Philosophy.</span>
              </h2>
            </div>
            <div className="lg:border-l lg:border-white/15 lg:pl-8 max-w-md">
              <p className="font-lora text-xs sm:text-sm text-[#C5D2CE] font-light leading-relaxed">
                Every project unites strategic intent, bespoke typography, clean Next.js engineering, and conversion-focused user journeys.
              </p>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Strategic Discovery',
                desc: 'We analyze your commercial goals, target audience buying psychology, and competitor positioning to establish a clear category differentiator.',
              },
              {
                step: '02',
                title: 'Editorial & Brand Craft',
                desc: 'We design bespoke typography scales, tailored color tokens, and responsive mobile-first layouts that inspire immediate institutional trust.',
              },
              {
                step: '03',
                title: 'Clean Engineering',
                desc: 'We build on Next.js 15, React 19, and headless CMS frameworks, ensuring sub-1.8s load times, zero layout shift, and Schema.org structured data.',
              },
              {
                step: '04',
                title: 'Conversion Funnels',
                desc: 'We engineer intuitive client pathways with direct WhatsApp scoping links and progressive disclosure lead intake, turning visitors into inquiries.',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#082E23]/60 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-roboto text-2xl font-bold text-[#E5C378] block mb-3">
                    {pillar.step}
                  </span>
                  <h3 className="font-roboto font-bold text-lg text-[#F3EFE4] mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-lora text-xs sm:text-[13px] text-[#C5D2CE] font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONNECTOR: EMERALD → DARK OBSIDIAN */}
      <SectionConnector fromDark={true} />

      {/* ========================================================================= */}
      {/* 05. CLOSING CONVERSION CTA (DARK OBSIDIAN)                                */}
      {/* ========================================================================= */}
      <section
        id="work-cta"
        aria-label="Portfolio Closing Call to Action"
        className="relative py-24 sm:py-28 lg:py-32 bg-[#080B0A] text-[#F3EFE4] overflow-hidden text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#080B0A] via-[#05261C] to-[#041710] pointer-events-none" />
        
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
              — LET&apos;S BUILD YOUR NEXT SUCCESS STORY —
            </span>
          </div>

          <h2 className="font-roboto text-4xl sm:text-5xl lg:text-[58px] text-[#F3EFE4] font-normal leading-[1.1] tracking-tight mb-5 sm:mb-6 max-w-3xl mx-auto">
            Ready to Build a High-Performance{' '}
            <span className="font-lora italic text-[#E5C378]">
              Digital Flagship?
            </span>
          </h2>

          <p className="font-lora text-sm sm:text-base text-[#C5D2CE] font-light max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            Connect directly with our studio directors for project scoping, deliverables planning, and transparent fixed-investment proposals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on WhatsApp"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] gap-2 px-9 py-3.5 bg-[#152D24] hover:bg-[#1C3B30] border border-[#0B5741] hover:border-[#147A5C] text-[#F3EFE4] text-xs font-roboto font-bold tracking-[0.14em] rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_0_16px_rgba(25,168,120,0.25)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878]"
            >
              <span>Book a Strategy Session</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] gap-2 px-9 py-3.5 bg-[#152D24] hover:bg-[#1C3B30] border border-[#0B5741] hover:border-[#147A5C] text-[#F3EFE4] text-xs font-roboto font-medium tracking-[0.14em] rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_0_16px_rgba(25,168,120,0.25)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878]"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
