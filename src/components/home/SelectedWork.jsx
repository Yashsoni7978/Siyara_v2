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

  // The 6 verified projects with authentic commercial challenges, deliverables, and outcomes
  const projects = [
    {
      id: '01',
      slug: 'anchor-ritika',
      name: 'Anchor Ritvika Solanki',
      industry: 'Events & Media',
      category: 'EVENT & MEDIA PLATFORM',
      challenge: 'Needed a performant portfolio platform to showcase stage productions, high-profile wedding events, and manage media inquiries.',
      delivered: 'Bespoke Next.js media portfolio with high-speed video embeds, stage lookbooks, and direct inquiry capture pipeline.',
      verifiedDeliverable: 'Live Portfolio · Media Architecture · Direct Booking Pipeline',
      tags: ['Next.js Platform', 'Media Architecture', 'Inquiry Pipeline'],
      image: '/images/portfolio/anchor-ritika-clean.webp',
      link: 'https://anchor-ritika.vercel.app/',
      isGoldAccent: true,
    },
    {
      id: '02',
      slug: 'aranya-resort',
      name: 'Aranya Resort & Retreat',
      industry: 'Hospitality',
      category: 'HOSPITALITY & LUXURY',
      challenge: 'Udaipur sanctuary built around Mewar architecture required an online presence reflecting its heritage luxury and suites.',
      delivered: 'Architectural web experience, suite discovery, Mewar heritage storytelling, and direct reservation engine integration.',
      verifiedDeliverable: 'Heritage Architecture · Reservation Engine · 0.4s Initial Paint',
      tags: ['Hospitality Platform', 'Reservation Engine', 'Heritage Branding'],
      image: '/images/portfolio/aranya-resort-clean.webp',
      link: 'https://aranya-website-woad.vercel.app/',
      isGoldAccent: false,
    },
    {
      id: '03',
      slug: 'ember-ivory-events',
      name: 'Ember & Ivory Events',
      industry: 'Luxury Events',
      category: 'EVENTS & EXPERIENCES',
      challenge: 'Luxury event production studio needed a visual storytelling showcase for high-concept destination celebrations.',
      delivered: 'Editorial event portfolio, curated campaign galleries, celebration lookbooks, and high-touch inquiry capture.',
      verifiedDeliverable: 'Editorial Event Showcase · High-Touch Lead Funnel · Curated Lookbook',
      tags: ['Editorial Showcase', 'Lead Funnel', 'Campaign Galleries'],
      image: '/images/portfolio/ember-ivory-clean.webp',
      link: 'https://ember-ivory-events.vercel.app/',
      isGoldAccent: true,
    },
    {
      id: '04',
      slug: 'tarini',
      name: 'Tarini Bridal Studio',
      industry: 'Fashion Couture',
      category: 'FASHION & COUTURE',
      challenge: 'Bridal couture label required an elegant digital storefront to showcase bespoke collections and drive boutique consultations.',
      delivered: 'Digital couture storefront, curated collection browsing, client wishlist flow, and consultation booking integration.',
      verifiedDeliverable: 'Couture Storefront · Wishlist Flow · Boutique Consultation Pipeline',
      tags: ['Couture Storefront', 'Wishlist Flow', 'Appointment Booking'],
      image: '/images/portfolio/tarini-bridal-clean.webp',
      link: 'https://tarini-bridal.vercel.app/',
      isGoldAccent: false,
    },
    {
      id: '05',
      slug: 'noor',
      name: 'Noor Restaurant',
      industry: 'Food & Beverage',
      category: 'FOOD & BEVERAGE',
      challenge: 'Contemporary Indian dining venue in Jaipur required a distinctive digital brand presence and dining reservation workflow.',
      delivered: 'Gastronomy-focused brand identity, interactive dining and banquet menus, and table reservation integration.',
      verifiedDeliverable: 'Restaurant Brand Strategy · Interactive Menus · Table Booking System',
      tags: ['Restaurant Branding', 'Interactive Menus', 'Table Reservations'],
      image: '/images/portfolio/noor-restaurant-clean.webp',
      link: 'https://noor-nine-beta.vercel.app/',
      isGoldAccent: true,
    },
    {
      id: '06',
      slug: 'meridian-properties',
      name: 'Meridian Properties',
      industry: 'Real Estate',
      category: 'REAL ESTATE & PROPTECH',
      challenge: 'Jaipur property brokerage required live listing discovery, fast client-side filters, and Schema.org real estate rich snippets.',
      delivered: 'Dynamic property platform with 12 live listings, instant search and filtering, and comprehensive Schema.org infrastructure.',
      verifiedDeliverable: 'Live Property Engine · Schema.org Real Estate Data · 0.4s Fast Initial Paint',
      tags: ['Property Engine', 'Schema.org Markup', 'Fast Initial Paint'],
      image: '/images/portfolio/internal-platform-clean.webp',
      link: 'https://meridian-properties-nine.vercel.app/',
      isGoldAccent: false,
    },
  ];

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate active slide index based on card width
    const cardWidth = 380;
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
    const distance = 390;
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
            <span className="text-xs font-roboto font-medium tracking-[0.24em] text-[#D4AF37]">
              07
            </span>
            <span className="w-8 h-[1px] bg-[#D4AF37]/40" />
            <span className="text-[11px] sm:text-xs font-roboto font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
              SELECTED ENGAGEMENTS &amp; PLATFORMS
            </span>
          </div>

          {/* Heading (Left) & Supporting Text + Archive Link (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left Column: Heading */}
            <div className="lg:col-span-7 xl:col-span-7">
              <h2 className="font-roboto text-3xl sm:text-5xl lg:text-[50px] xl:text-[56px] text-[#F3EFE4] font-normal leading-[1.08] tracking-tight">
                Brands, Platforms &amp;<br />
                <span className="italic font-roboto text-[#D4AF37]">Real Impact.</span>
              </h2>
            </div>

            {/* Right Column: Supporting Description + Explore All Link */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between items-start lg:items-end">
              <p className="font-lora text-xs sm:text-sm text-[#A5B8AA]/85 font-normal leading-relaxed max-w-sm mb-3 lg:text-right">
                A curated showcase of commercial digital platforms, brand architecture and web systems engineered across high-potential industries.
              </p>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-xs font-roboto font-semibold tracking-[0.18em] text-[#D4AF37] hover:text-[#E5C378] uppercase transition-colors group"
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
            className="flex flex-row gap-5 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 cursor-grab active:cursor-grabbing select-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {projects.map((project) => {
              const isGold = project.isGoldAccent;

              return (
                <div
                  key={project.id}
                  className={`portfolio-card shrink-0 snap-start w-[310px] sm:w-[350px] lg:w-[370px] min-h-[490px] rounded-[22px] overflow-hidden flex flex-col justify-between border transition-all duration-300 group shadow-[0_16px_40px_rgba(0,0,0,0.5)] ${
                    isGold
                      ? 'border-[#D4AF37]/30 hover:border-[#D4AF37]/70 bg-[#070D0A]'
                      : 'border-[#0B5A43]/40 hover:border-[#19A878]/70 bg-[#06120E]'
                  }`}
                >
                  <Link
                    href={project.link}
                    aria-label={`View ${project.name} Case Study`}
                    className="flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/70 rounded-[22px]"
                  >
                    {/* Top Visual Image Frame */}
                    <div className="relative w-full h-[200px] sm:h-[215px] overflow-hidden bg-[#0A1410] shrink-0">
                      <Image
                        src={project.image}
                        alt={`${project.name} - ${project.industry}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        sizes="(max-width: 768px) 350px, 370px"
                      />
                      
                      {/* Gentle Image Scrims for Top Badge Legibility */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#070A09]/60 via-transparent to-[#070A09]/80 pointer-events-none" />

                      {/* Top Floating Badge Bar */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                        <span className="px-2.5 py-1 rounded-full border border-white/20 bg-[#080B0A]/75 backdrop-blur-md text-[10px] font-roboto font-semibold tracking-[0.16em] text-[#D4AF37] uppercase">
                          {project.id} · {project.category}
                        </span>

                        <div className="w-7 h-7 rounded-full border border-white/20 bg-[#080B0A]/75 backdrop-blur-md flex items-center justify-center text-[#F3EFE4] group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#080B0A] transition-colors">
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
                        </div>
                      </div>
                    </div>

                    {/* Lower Editorial Storytelling Panel */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 relative z-10 border-t border-white/[0.08]">
                      <div>
                        {/* Project Heading */}
                        <h3 className="font-roboto text-xl sm:text-[22px] text-[#F3EFE4] font-normal leading-snug group-hover:text-[#D4AF37] transition-colors">
                          {project.name}
                        </h3>

                        {/* Industry / Business Discipline */}
                        <div className="text-[11px] font-roboto font-medium tracking-[0.14em] text-[#A5B8AA]/75 uppercase mt-0.5">
                          {project.industry}
                        </div>

                        {/* Requirement / Challenge Story */}
                        <div className="mt-3 text-xs font-lora text-[#A5B8AA] leading-relaxed line-clamp-2">
                          <span className="text-[#D4AF37] font-roboto font-semibold tracking-wider text-[9.5px] uppercase block mb-0.5">
                            Challenge
                          </span>
                          {project.challenge}
                        </div>

                        {/* Siyara Delivery */}
                        <div className="mt-2.5 text-xs font-lora text-[#C2D1C7] leading-relaxed line-clamp-2">
                          <span className="text-[#19A878] font-roboto font-semibold tracking-wider text-[9.5px] uppercase block mb-0.5">
                            Siyara Delivered
                          </span>
                          {project.delivered}
                        </div>

                        {/* Deliverables Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/[0.08]">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md border border-white/10 bg-white/[0.03] text-[9.5px] font-roboto font-medium tracking-[0.08em] text-[#A5B8AA]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action Affordance */}
                      <div className="mt-4 pt-3 flex items-center justify-between border-t border-white/[0.08]">
                        <span className="text-xs font-roboto font-semibold tracking-[0.14em] text-[#D4AF37] group-hover:text-[#E5C378] uppercase inline-flex items-center gap-1.5 transition-colors">
                          <span>Explore Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>

                        <span className="text-[10px] font-roboto tracking-wider text-white/35 uppercase">
                          Live Demo ↗
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
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
