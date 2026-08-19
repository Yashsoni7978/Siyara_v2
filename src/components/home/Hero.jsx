import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

// Light-Reactive Hotspot for Crystal Specular Highlight Responses
function CrystalHotspot({ className = '', style = {} }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
      className={`absolute cursor-pointer rounded-full transition-all duration-500 ease-out pointer-events-auto ${className}`}
    >
      <div
        className="w-full h-full rounded-full transition-all duration-500 flex items-center justify-center"
        style={{
          boxShadow: hovered
            ? '0 0 40px 15px rgba(25, 168, 120, 0.55), 0 0 20px 8px rgba(229, 195, 120, 0.45)'
            : '0 0 0px 0px transparent',
          transform: hovered ? 'scale(1.25)' : 'scale(1)',
        }}
      >
        <div
          className={`w-3 h-3 rounded-full bg-[#E5C378] transition-opacity duration-300 ${
            hovered ? 'opacity-90 animate-ping' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  
  // Single coordinated parallax mouse state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      transition: 'transform 0.25s ease-out',
    };
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-[96vh] pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[#080B0A] overflow-hidden flex items-center"
    >
      {/* LAYER 01: Obsidian Black Canvas Base */}
      <div className="absolute inset-0 bg-[#080B0A] z-0" />

      {/* LAYER 02: Deep Emerald Atmosphere Backdrop (Parallax: 2px) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.15 }}
        style={{
          ...getParallaxStyle(2),
          maskImage: 'radial-gradient(ellipse 90% 90% at 65% 50%, black 25%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 65% 50%, black 25%, transparent 85%)',
        }}
        className="absolute inset-0 pointer-events-none z-[1] overflow-hidden"
      >
        <img
          src="/images/Gemini_Generated_Image_v8ldi5v8ldi5v8ld.png"
          alt="Siyara Emerald Atmosphere"
          className="w-full h-full object-cover object-right mix-blend-screen opacity-30 scale-105"
        />
      </motion.div>

      {/* LAYER 03: Atmospheric Bridge (Headline -> Artwork Haze Transition) */}
      <div className="absolute left-[30%] right-[20%] top-1/2 -translate-y-1/2 h-[500px] bg-gradient-to-r from-transparent via-[#063C2D]/25 to-[#19A878]/15 blur-3xl pointer-events-none z-[2]" />

      {/* LAYER 04: THE MASTER HERO ARTWORK (Photorealistic Integrated Artwork — Zero Rectangular Box) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.5, ease: easeCustom }}
        style={{
          ...getParallaxStyle(5),
          maskImage: 'radial-gradient(ellipse 88% 92% at 72% 50%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 88% 92% at 72% 50%, black 40%, transparent 95%)',
        }}
        className="absolute -right-[4%] -bottom-[4%] top-1/2 -translate-y-1/2 w-full lg:w-[68%] xl:w-[72%] h-[98%] pointer-events-none z-[3] flex items-center justify-end overflow-hidden"
      >
        <img
          src="/images/siyara_hero_artwork.png"
          alt="Siyara Master Artwork — Luminous Emerald Silk & Crystals"
          className="w-full h-full object-contain object-right drop-shadow-[0_20px_60px_rgba(0,0,0,0.95)] opacity-100 scale-110"
        />
      </motion.div>

      {/* LAYER 05: Crystal Light Response Hotspots (Parallax: 10px) */}
      <div style={getParallaxStyle(10)} className="absolute inset-0 pointer-events-auto z-[4]">
        {/* Hotspot 1: Large Crystal (Bottom Right) */}
        <CrystalHotspot style={{ right: '12%', bottom: '18%', width: '120px', height: '180px' }} />
        {/* Hotspot 2: Medium Crystal (Top Center-Right) */}
        <CrystalHotspot style={{ right: '36%', top: '20%', width: '80px', height: '110px' }} />
        {/* Hotspot 3: Medium Crystal (Mid Right) */}
        <CrystalHotspot style={{ right: '8%', top: '38%', width: '90px', height: '130px' }} />
      </div>

      {/* LAYER 06: Fine Gold Glints Overlay (Parallax: 14px) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0 }}
        style={{
          ...getParallaxStyle(14),
          maskImage: 'radial-gradient(circle at 60% 50%, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 60% 50%, black 20%, transparent 70%)',
        }}
        className="absolute right-[4%] top-[4%] w-[500px] h-[500px] pointer-events-none z-[5] overflow-hidden"
      >
        <img
          src="/images/Gemini_Generated_Image_19sjf619sjf619sj.png"
          alt="Fine Gold Glints"
          className="w-full h-full object-cover mix-blend-screen opacity-35"
        />
      </motion.div>

      {/* LAYER 07: Ambient Emerald Radial Glow */}
      <div className="absolute right-[6%] top-1/2 -translate-y-1/2 w-[680px] h-[680px] bg-gradient-to-tr from-[#063C2D]/55 via-[#19A878]/18 to-transparent blur-3xl rounded-full pointer-events-none z-[6]" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
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
              <span className="h-[1px] w-8 bg-[#D4AF37]/60" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.26em] text-[#D4AF37] uppercase">
                DIGITAL ARCHITECTURE STUDIO
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mb-6">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(500)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-[#F3EFE4]"
              >
                WE BUILD BRANDS
              </motion.h1>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(620)}
                className="font-serif text-lg sm:text-2xl lg:text-2xl text-[#E5C378] tracking-[0.25em] uppercase my-1 font-sans font-medium"
              >
                THAT
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(700)}
                className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-normal leading-[1.02] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#B38F26] drop-shadow-[0_4px_30px_rgba(212,175,55,0.22)]"
              >
                DOMINATE.
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(850)}
              className="mb-10 max-w-lg"
            >
              <p className="font-sans text-base sm:text-lg text-[#CFC9BB]/90 font-light leading-relaxed">
                Digital architecture studio for ambitious businesses ready to lead their industry.
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp(950)}
              className="flex flex-wrap items-center gap-5"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#E5C378] hover:bg-[#D4AF37] text-[#080B0A] text-xs font-bold tracking-[0.18em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>BOOK STRATEGY SESSION</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#F3EFE4]/25 hover:border-[#D4AF37]/60 text-[#F3EFE4] hover:text-[#D4AF37] text-xs font-semibold tracking-[0.18em] uppercase rounded-full transition-all duration-300 group bg-[#080B0A]/40 backdrop-blur-sm"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      {/* BOTTOM LEFT: Scroll Indicator Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-8 sm:left-12 z-20 flex flex-col items-center gap-3 hidden sm:flex"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#D4AF37] to-transparent relative">
          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full absolute top-0 -left-[2.5px] animate-ping" />
        </div>
        <span className="text-[9px] font-mono tracking-[0.24em] text-[#CFC9BB]/60 uppercase">
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
