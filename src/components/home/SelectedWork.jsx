'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SelectedWork() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mouse drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  // The 6 official projects specified for the showcase
  const projects = [
    {
      id: '01',
      slug: 'anchor-yash-soni',
      name: 'Anchor Yash Soni',
      tagline: 'Events, Weddings & Brand Experiences.',
      category: 'EVENTS',
      image: '/images/portfolio/anchor-yash-soni-clean.webp',
      link: '/work/anchor-yash-soni',
    },
    {
      id: '02',
      slug: 'aranya-resort',
      name: 'Aranya Resort & Retreat',
      tagline: 'Hospitality Branding & Digital Presence.',
      category: 'HOSPITALITY',
      image: '/images/portfolio/aranya-resort-clean.webp',
      link: '/work/aranya-resort',
    },
    {
      id: '03',
      slug: 'ember-ivory-events',
      name: 'Ember & Ivory Events',
      tagline: 'Event Branding, Content & Campaigns.',
      category: 'EVENTS',
      image: '/images/portfolio/ember-ivory-clean.webp',
      link: '/work/ember-ivory-events',
    },
    {
      id: '04',
      slug: 'tarini',
      name: 'Tarini Bridal Studio',
      tagline: 'Fashion Branding & Digital Growth.',
      category: 'FASHION',
      image: '/images/portfolio/tarini-bridal-clean.webp',
      link: '/work/tarini',
    },
    {
      id: '05',
      slug: 'noor',
      name: 'Noor Restaurant',
      tagline: 'Food & Beverage Brand Strategy.',
      category: 'FOOD & BEVERAGE',
      image: '/images/portfolio/noor-restaurant-clean.webp',
      link: '/work/noor',
    },
    {
      id: '06',
      slug: 'internal-brand-platform',
      name: 'Internal Brand Platform',
      tagline: 'Business Systems, CRM & Automation.',
      category: 'BRAND & DIGITAL',
      image: '/images/portfolio/internal-platform-clean.webp',
      link: '/work',
    },
  ];

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate active slide index based on card width
    const cardWidth = 300; // approximate step
    const current = Math.min(
      projects.length - 1,
      Math.max(0, Math.round(scrollLeft / cardWidth))
    );
    setActiveIndex(current);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const distance = 310;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    });
  };

  const scrollToSlide = (index) => {
    if (!carouselRef.current) return;
    const cards = carouselRef.current.querySelectorAll('.portfolio-card');
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  // Mouse drag-to-scroll handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftStart.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section
      id="work"
      aria-label="Selected Engagements & Platforms"
      className="relative pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 bg-[#06140F] text-[#F3EFE4] overflow-hidden border-b border-[#D4AF37]/15"
    >
      {/* Background Deep Emerald Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A09] via-[#061812] to-[#070A09] pointer-events-none" />
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(11, 94, 73, 0.35) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D4AF37]">
              07
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]/40" />
            <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
              SELECTED ENGAGEMENTS &amp; PLATFORMS
            </span>
          </div>

          {/* Heading (Left) & Supporting Text + Archive Link (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left Column: Heading */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] xl:text-[58px] text-[#F3EFE4] font-normal leading-[1.08] tracking-tight">
                Brands, Platforms &amp;<br />
                <span className="italic font-serif text-[#D4AF37]">Real Impact.</span>
              </h2>
            </div>

            {/* Right Column: Supporting Description + Explore All Link */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between items-start lg:items-end">
              <p className="font-sans text-xs sm:text-sm text-[#A5B8AA]/80 font-light leading-relaxed max-w-sm mb-3 lg:text-right">
                A glimpse of the brands, industries, events and digital platforms we&apos;ve worked with across sectors.
              </p>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-[0.18em] text-[#D4AF37] hover:text-[#E5C378] uppercase transition-colors group"
              >
                <span>EXPLORE ALL PROJECTS (85)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HORIZONTAL PORTFOLIO CAROUSEL WITH PREV/NEXT ARROWS                      */}
        {/* ========================================================================= */}
        <div className="relative group/carousel">
          
          {/* Previous Arrow Button */}
          <button
            type="button"
            aria-label="Previous Project"
            onClick={() => scroll('left')}
            className={`hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-[#070A09]/90 backdrop-blur-md text-[#F3EFE4] items-center justify-center shadow-xl transition-all duration-200 cursor-pointer ${
              canScrollLeft ? 'opacity-90 hover:opacity-100 hover:border-[#D4AF37] hover:text-[#D4AF37] scale-100' : 'opacity-30 pointer-events-none'
            }`}
          >
            <ArrowLeft className="w-4 h-4 stroke-[1.75]" />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            aria-label="Next Project"
            onClick={() => scroll('right')}
            className={`hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-[#070A09]/90 backdrop-blur-md text-[#F3EFE4] items-center justify-center shadow-xl transition-all duration-200 cursor-pointer ${
              canScrollRight ? 'opacity-90 hover:opacity-100 hover:border-[#D4AF37] hover:text-[#D4AF37] scale-100' : 'opacity-30 pointer-events-none'
            }`}
          >
            <ArrowRight className="w-4 h-4 stroke-[1.75]" />
          </button>

          {/* Scrollable Track */}
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex flex-row gap-4 sm:gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="portfolio-card shrink-0 snap-start w-[270px] sm:w-[285px] lg:w-[295px] h-[410px] sm:h-[430px] rounded-[22px] overflow-hidden relative border border-[#D4AF37]/25 hover:border-[#D4AF37]/65 bg-[#070A09] shadow-[0_14px_36px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Portrait Project Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    sizes="(max-width: 768px) 285px, 295px"
                  />
                  {/* Subtle Top Lighting Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#070A09]/30 via-transparent to-transparent pointer-events-none" />
                  {/* Bottom Legibility Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-[#070A09]/85 to-transparent pointer-events-none" />
                </div>

                {/* Card Top Spacer */}
                <div className="relative z-10 p-5 pointer-events-none" />

                {/* Card Bottom Content */}
                <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end">
                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-[22px] text-[#F3EFE4] font-normal leading-snug mb-1.5 line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                    {project.name}
                  </h3>

                  {/* Subtitle / Short Description */}
                  <p className="font-sans text-xs text-[#A5B8AA]/85 font-light leading-relaxed mb-4 line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Bottom Row: Category Pill Badge & Circular Arrow Link */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[9.5px] sm:text-[10px] font-sans font-medium tracking-[0.16em] text-[#A5B8AA] uppercase">
                      {project.category}
                    </span>

                    <Link
                      href={project.link}
                      aria-label={`View ${project.name} Case Study`}
                      className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[#F3EFE4] group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#070A09] transition-all duration-200"
                    >
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ========================================================================= */}
          {/* SLIM PAGINATION INDICATORS                                                */}
          {/* ========================================================================= */}
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {projects.map((p, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={p.id}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => scrollToSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive ? 'w-8 bg-[#D4AF37]' : 'w-5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
