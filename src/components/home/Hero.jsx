'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  
  // Single coordinated parallax mouse state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const isMobile = !isDesktop;

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(mq.matches);
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Ensure video is 100% MUTED with zero volume and no audio output
  useEffect(() => {
    if (isDesktop && videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.volume = 0;
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay prevented or interrupted:', err);
      });
    }
  }, [isDesktop]);

  const handleMouseMove = (e) => {
    if (isMobile || shouldReduceMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);
    
    setMousePos({
      x: Math.max(-1, Math.min(1, normX)),
      y: Math.max(-1, Math.min(1, normY)),
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const easeCustom = [0.16, 1, 0.3, 1];

  const fadeUp = (delayMs) => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delayMs / 1000, ease: easeCustom },
    },
  });

  const getParallaxStyle = (multiplier) => {
    if (isMobile || shouldReduceMotion) return {};
    return {
      transform: `translate3d(${mousePos.x * multiplier}px, ${mousePos.y * multiplier}px, 0)`,
      transition: 'transform 0.3s ease-out',
    };
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[#070A09] overflow-hidden flex items-center"
    >
      {/* LAYER 01: Obsidian Black Canvas Base */}
      <div className="absolute inset-0 bg-[#070A09] z-0" />

      {/* LAYER 02: Fine Emerald Ambient Glow Sphere Behind Video */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#071E18]/60 via-[#18A982]/18 to-transparent blur-3xl rounded-full pointer-events-none z-[1]" />

      {/* LAYER 03: Atmospheric Bridge (Headline -> Video Transition Haze) */}
      <div className="absolute left-[25%] right-[15%] top-1/2 -translate-y-1/2 h-[520px] bg-gradient-to-r from-transparent via-[#071E18]/30 to-[#18A982]/12 blur-3xl pointer-events-none z-[2]" />

      {/* LAYER 04: MASTER HERO CINEMATIC VIDEO - Rendered ONLY on Desktop to avoid bandwidth on Mobile */}
      {isDesktop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: easeCustom }}
          style={{
            ...getParallaxStyle(2),
            maskImage: 'radial-gradient(ellipse 86% 90% at 72% 50%, black 45%, transparent 95%)',
            WebkitMaskImage: 'radial-gradient(ellipse 86% 90% at 72% 50%, black 45%, transparent 95%)',
          }}
          className="absolute right-0 top-0 bottom-0 w-full lg:w-[66%] xl:w-[70%] h-full pointer-events-none z-[3] hidden lg:flex items-center justify-end overflow-hidden"
        >
          <video
            ref={videoRef}
            src="/images/siyara_hero_video.mp4"
            poster="/images/siyara_hero_artwork.webp"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="w-full h-full object-cover object-right drop-shadow-[0_20px_60px_rgba(0,0,0,0.95)] opacity-100 pointer-events-none"
          />
        </motion.div>
      )}

      <div className="max-w-[1500px] mx-auto pl-5 pr-6 sm:pl-6 sm:pr-8 lg:pl-10 lg:pr-12 xl:pl-16 xl:pr-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

          {/* LEFT COLUMN: Clean Editorial Typography & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
            
            {/* Eyebrow */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(350)}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-[#D9B45F]/60" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.26em] text-[#D9B45F] uppercase">
                DIGITAL ARCHITECTURE STUDIO
              </span>
            </motion.div>

            {/* Headline - single H1 with decorative visual split preserved */}
            <div className="mb-6">
              <h1 className="font-serif leading-[1.0] tracking-tight">
                {/* Line 1: WE BUILD BRANDS - large */}
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp(500)}
                  className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#F3EFE3]"
                >
                  WE BUILD BRANDS
                </motion.span>

                {/* Line 2: THAT - small, gold, spaced like a label */}
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp(620)}
                  className="block font-sans text-sm sm:text-base lg:text-lg font-semibold tracking-[0.3em] text-[#D9B45F] uppercase my-2"
                >
                  THAT
                </motion.span>

                {/* Line 3: DOMINATE. - massive gold */}
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp(700)}
                  className="block text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-normal leading-[0.88] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26] drop-shadow-[0_4px_30px_rgba(217,180,95,0.22)]"
                >
                  DOMINATE.
                </motion.span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(850)}
              className="mb-10 max-w-lg"
            >
              <p className="font-sans text-base sm:text-lg text-[#9D9B91] font-light leading-relaxed">
                Siyara Innovations is a Jaipur-based digital architecture studio: brand strategy, websites, SEO, and growth systems built as one connected system, not campaigns that compete with each other.
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(950)}
              className="flex flex-wrap items-center gap-5"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:shadow-[#D9B45F]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>BOOK STRATEGY SESSION</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                href="/#work"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#F3EFE3]/25 hover:border-[#D9B45F]/60 text-[#F3EFE3] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-300 group bg-[#070A09]/40 backdrop-blur-sm"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowRight className="w-4 h-4 text-[#D9B45F] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE: Refined Architectural Studio Callout Annotation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.2, ease: easeCustom }}
        style={getParallaxStyle(3)}
        className="absolute right-4 sm:right-8 lg:right-12 xl:right-16 bottom-6 sm:bottom-10 lg:bottom-14 z-20 flex flex-col items-center pointer-events-none select-none origin-bottom-right scale-75 sm:scale-85 md:scale-95 lg:scale-100 max-w-[calc(100vw-2rem)]"
      >
        {/* Subtle Top Architectural Connector Line */}
        <div className="w-[1px] h-6 sm:h-8 lg:h-10 bg-gradient-to-t from-[#D4AF37]/90 via-[#D4AF37]/40 to-transparent relative" />

        {/* Plaque Plate Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Architectural Marker Tick */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-gradient-to-r from-[#19A878] to-[#D4AF37]" />

          {/* Architectural Obsidian & Emerald Plaque Plate */}
          <div className="relative px-6 py-4 sm:px-7 sm:py-5 lg:px-8 lg:py-6 bg-[#080B0A]/95 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.06),0_0_12px_rgba(6,60,45,0.25)]">
            {/* SVG Chamfered & Asymmetric Architectural Border */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="siyara-gold-border" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.95" />
                  <stop offset="45%" stopColor="#E5C378" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#063C2D" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.9" />
                </linearGradient>
                <radialGradient id="siyara-plaque-bg" cx="15%" cy="15%" r="85%">
                  <stop offset="0%" stopColor="#063C2D" stopOpacity="0.22" />
                  <stop offset="50%" stopColor="#080B0A" stopOpacity="0.96" />
                  <stop offset="100%" stopColor="#080B0A" stopOpacity="0.98" />
                </radialGradient>
              </defs>

              {/* Architectural Polygon: Clipped Upper/Lower Corners + Asymmetric Side Notch */}
              <polygon
                points="6,0 94,0 100,8 100,54 97,58 100,62 100,92 94,100 6,100 0,92 0,62 3,58 0,54 0,8"
                fill="url(#siyara-plaque-bg)"
                stroke="url(#siyara-gold-border)"
                strokeWidth="1.2"
                vectorEffect="non-scaling-stroke"
              />

              {/* Asymmetric Restrained Architectural Details */}
              <line x1="6" y1="0" x2="18" y2="0" stroke="#19A878" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeOpacity="0.9" />
              <line x1="100" y1="8" x2="100" y2="18" stroke="#D4AF37" strokeWidth="1.2" vectorEffect="non-scaling-stroke" strokeOpacity="0.8" />

              {/* Micro Corner Framing Marks */}
              <path d="M 3,12 L 3,3 L 12,3" fill="none" stroke="#E5C378" strokeWidth="0.8" strokeOpacity="0.5" vectorEffect="non-scaling-stroke" />
              <path d="M 97,88 L 97,97 L 88,97" fill="none" stroke="#E5C378" strokeWidth="0.8" strokeOpacity="0.5" vectorEffect="non-scaling-stroke" />
            </svg>

            {/* Studio Annotation Typography */}
            <div className="relative z-10 flex flex-col items-center text-center gap-1">
              <span className="font-sans text-[10px] sm:text-[11px] lg:text-xs font-bold tracking-[0.24em] text-[#D4AF37] uppercase whitespace-nowrap drop-shadow-[0_1px_4px_rgba(212,175,55,0.2)]">
                BUILDING WHAT&apos;S NEXT
              </span>
              <span className="font-sans text-[11px] sm:text-xs font-light tracking-[0.05em] text-[#E5E0D4]/90 whitespace-nowrap">
                Strategy. Technology. Growth.
              </span>
            </div>
          </div>

          {/* Right Architectural Marker Tick */}
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-gradient-to-l from-[#19A878] to-[#D4AF37]" />
        </div>

        {/* Bottom Vertical Gold Marker Line with Terminal Dot Structure */}
        <div className="w-[1px] h-7 sm:h-9 lg:h-11 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/60 to-[#19A878]/40 relative flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#080B0A] border border-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.7)] absolute bottom-0 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
