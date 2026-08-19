import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

// Faceted Emerald Crystal Component for Physical Light-Reactive Depth Overlays
function EmeraldCrystal({ size = 'md', className = '', style = {}, delay = 0, floatDuration = 6 }) {
  const [hovered, setHovered] = useState(false);

  const scale = size === 'lg' ? 'w-24 h-40 sm:w-32 sm:h-52 lg:w-40 lg:h-64' : size === 'md' ? 'w-14 h-22 sm:w-18 sm:h-28' : 'w-8 h-14 sm:w-11 sm:h-18';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
      className={`absolute cursor-pointer transition-transform duration-500 ease-out ${scale} ${className}`}
    >
      <div
        className="w-full h-full relative"
        style={{
          transform: hovered ? 'rotate(6deg) scale(1.12)' : 'rotate(0deg) scale(1)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: `crystalFloat ${floatDuration}s ease-in-out infinite`,
        }}
      >
        <svg
          viewBox="0 0 100 160"
          className="w-full h-full filter drop-shadow-[0_12px_32px_rgba(6,60,45,0.7)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`facetTopLeft-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#19A878" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#063C2D" stopOpacity="0.98" />
            </linearGradient>
            <linearGradient id={`facetTopRight-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B5A43" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#04261C" stopOpacity="0.99" />
            </linearGradient>
            <linearGradient id={`facetBottomLeft-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#04261C" stopOpacity="0.99" />
              <stop offset="100%" stopColor="#084433" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id={`facetBottomRight-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#084433" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#19A878" stopOpacity="0.95" />
            </linearGradient>
            <radialGradient id={`crystalGlow-${size}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#19A878" stopOpacity={hovered ? 0.75 : 0.3} />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Internal Glow Sphere */}
          <circle cx="50" cy="80" r="45" fill={`url(#crystalGlow-${size})`} />

          {/* Faceted 3D Crystal Gem Polygons */}
          <polygon points="50,5 82,65 50,95" fill={`url(#facetTopRight-${size})`} />
          <polygon points="50,5 18,65 50,95" fill={`url(#facetTopLeft-${size})`} />
          <polygon points="50,95 18,65 50,155" fill={`url(#facetBottomLeft-${size})`} />
          <polygon points="50,95 82,65 50,155" fill={`url(#facetBottomRight-${size})`} />

          {/* Specular Facet Highlight Lines */}
          <line x1="50" y1="5" x2="82" y2="65" stroke="#E5C378" strokeWidth="1.2" strokeOpacity={hovered ? '0.95' : '0.7'} />
          <line x1="50" y1="5" x2="18" y2="65" stroke="#F3EFE4" strokeWidth="1.0" strokeOpacity="0.5" />
          <line x1="50" y1="5" x2="50" y2="95" stroke="#D4AF37" strokeWidth="1.4" strokeOpacity={hovered ? '1.0' : '0.75'} />
          <line x1="18" y1="65" x2="82" y2="65" stroke="#E5C378" strokeWidth="0.8" strokeOpacity="0.4" />
          <line x1="50" y1="95" x2="82" y2="65" stroke="#D4AF37" strokeWidth="1.0" strokeOpacity="0.5" />
          <line x1="50" y1="95" x2="50" y2="155" stroke="#E5C378" strokeWidth="1.2" strokeOpacity={hovered ? '0.9' : '0.6'} />

          {/* Specular Point Highlight */}
          <circle cx="50" cy="95" r="2.5" fill="#E5C378" className="animate-pulse" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  
  // Mouse position state for subtle desktop parallax
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

      {/* LAYER 02: Deep Emerald Atmosphere Smoke */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.15 }}
        style={{
          ...getParallaxStyle(3),
          maskImage: 'radial-gradient(ellipse 90% 90% at 70% 50%, black 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 70% 50%, black 30%, transparent 85%)',
        }}
        className="absolute inset-0 pointer-events-none z-[1] overflow-hidden"
      >
        <img
          src="/images/Gemini_Generated_Image_v8ldi5v8ldi5v8ld.png"
          alt="Siyara Emerald Atmosphere"
          className="w-full h-full object-cover object-right mix-blend-screen opacity-45 animate-atmosphere scale-105"
        />
      </motion.div>

      {/* LAYER 03: MASTER HERO ARTIFACT (Seamlessly Integrated Master Artwork) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.9, ease: easeCustom }}
        style={{
          ...getParallaxStyle(6),
          maskImage: 'radial-gradient(ellipse 80% 88% at 65% 50%, black 45%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 88% at 65% 50%, black 45%, transparent 90%)',
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[62%] h-[92%] pointer-events-none z-[2] overflow-hidden flex items-center justify-end"
      >
        <img
          src="/images/siyara_hero_artwork.png"
          alt="Siyara Master Hero Artwork — Luminous Emerald Silk & Crystals"
          className="w-full h-full object-contain object-right mix-blend-screen contrast-[1.12] brightness-[1.02] drop-shadow-[0_30px_70px_rgba(0,0,0,0.95)] animate-atmosphere scale-105"
        />
      </motion.div>

      {/* LAYER 04: Champagne-Gold Energy Trails Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.3 }}
        style={{
          ...getParallaxStyle(10),
          maskImage: 'radial-gradient(ellipse 80% 80% at 70% 50%, black 35%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 70% 50%, black 35%, transparent 85%)',
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[55%] h-[85%] pointer-events-none z-[3] overflow-hidden"
      >
        <img
          src="/images/Gemini_Generated_Image_p03y7gp03y7gp03y.png"
          alt="Champagne Gold Energy Trails"
          className="w-full h-full object-cover object-right mix-blend-screen opacity-45 animate-gold-flow"
        />
      </motion.div>

      {/* LAYER 05: Fine Gold Glints & Stardust Particles Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        style={{
          ...getParallaxStyle(18),
          maskImage: 'radial-gradient(circle at 60% 50%, black 25%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 60% 50%, black 25%, transparent 75%)',
        }}
        className="absolute right-[5%] top-[5%] w-[500px] h-[500px] pointer-events-none z-[4] overflow-hidden"
      >
        <img
          src="/images/Gemini_Generated_Image_19sjf619sjf619sj.png"
          alt="Fine Gold Stardust"
          className="w-full h-full object-cover mix-blend-screen opacity-40 animate-glint"
        />
      </motion.div>

      {/* LAYER 06: Faceted Translucent Emerald Crystal Field (Suspended 3D Geometry Overlays) */}
      <div style={getParallaxStyle(14)} className="absolute inset-0 pointer-events-auto z-[5]">
        {/* Crystal 1: Prominent Large Foreground Crystal (Bottom Right) */}
        <EmeraldCrystal
          size="lg"
          delay={1.2}
          floatDuration={7}
          style={{ right: '10%', bottom: '12%' }}
        />

        {/* Crystal 2: Medium Floating Crystal (Top Center-Right) */}
        <EmeraldCrystal
          size="md"
          delay={1.35}
          floatDuration={6.5}
          style={{ right: '35%', top: '16%' }}
        />

        {/* Crystal 3: Medium Floating Crystal (Mid Right) */}
        <EmeraldCrystal
          size="md"
          delay={1.5}
          floatDuration={8}
          style={{ right: '6%', top: '36%' }}
        />

        {/* Crystal 4: Small Fragment (Center Floating) */}
        <EmeraldCrystal
          size="sm"
          delay={1.65}
          floatDuration={5.5}
          style={{ right: '46%', bottom: '36%' }}
        />

        {/* Crystal 5: Small Fragment (Top Far Right) */}
        <EmeraldCrystal
          size="sm"
          delay={1.8}
          floatDuration={6}
          style={{ right: '20%', top: '26%' }}
        />

        {/* Crystal 6: Small Fragment (Bottom Far Right) */}
        <EmeraldCrystal
          size="sm"
          delay={1.95}
          floatDuration={7.5}
          style={{ right: '26%', bottom: '20%' }}
        />
      </div>

      {/* LAYER 07: Ambient Emerald Radial Glow */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#063C2D]/60 via-[#19A878]/20 to-transparent blur-3xl rounded-full pointer-events-none z-[6]" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

          {/* LEFT COLUMN: Master Editorial Typography & Action CTAs */}
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

            {/* Master Headline */}
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

            {/* Master Action CTAs (Pill-Shaped Buttons) */}
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
