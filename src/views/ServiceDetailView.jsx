'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  HelpCircle,
  Clock,
  Layers,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';
import SectionConnector from '../components/common/SectionConnector.jsx';
import { siteConfig } from '../data/siteConfig';

export default function ServiceDetailView({ service, relatedArticles = [] }) {
  const shouldReduceMotion = useReducedMotion();
  const easeCustom = [0.16, 1, 0.3, 1];
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const fadeUp = (delayMs) => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: delayMs / 1000, ease: easeCustom },
    },
  });

  return (
    <div className="bg-[#080B0A] text-[#F3EFE4] selection:bg-[#063C2D] selection:text-[#D4AF37]">
      
      {/* ========================================================================= */}
      {/* 01. DISTINCTIVE SERVICE-SPECIFIC HERO (DARK EMERALD / OBSIDIAN)            */}
      {/* ========================================================================= */}
      <section
        id="service-hero"
        aria-label={`${service.name} Hero`}
        className="relative min-h-[85svh] pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#080B0A] overflow-hidden flex items-center"
      >
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#080B0A] via-[#05261C] to-[#041710] pointer-events-none" />
        
        {/* Ambient Glows */}
        <div
          className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-25"
          style={{
            background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.35) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -top-24 left-1/4 w-[500px] h-[300px] rounded-full pointer-events-none opacity-15"
          style={{
            background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-roboto text-[#C5D2CE]/70 mb-6">
            <Link href="/" className="hover:text-[#E5C378] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#E5C378] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#E5C378] font-medium">{service.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Editorial Typography & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Eyebrow Label */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(150)}
                className="flex items-center gap-2.5 mb-5 sm:mb-6"
              >
                <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
                  — {service.disciplineTag || 'STUDIO DISCIPLINE'} —
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp(300)}
                className="font-roboto text-3xl sm:text-4xl lg:text-[50px] xl:text-[56px] font-normal text-[#F3EFE4] leading-[1.12] tracking-tight mb-5 sm:mb-6"
              >
                {service.heroHeadlineMain || service.h1Title || service.name}{' '}
                <span className="font-lora italic text-[#E5C378]">
                  {service.heroHeadlineAccent || ''}
                </span>
              </motion.h1>

              {/* Supporting Copy */}
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp(450)}
                className="font-lora text-sm sm:text-base lg:text-[17px] text-[#C5D2CE] font-light leading-relaxed max-w-xl mb-8 sm:mb-10"
              >
                {service.heroSubtitle || service.metaDescription}
              </motion.p>

              {/* Dual CTAs */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp(600)}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
              >
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a Strategy Session on WhatsApp"
                  className="inline-flex items-center justify-center min-h-[48px] gap-2.5 px-8 py-3.5 bg-[#E5C378] hover:bg-[#D4AF37] text-[#080B0A] text-xs sm:text-sm font-roboto font-bold tracking-[0.14em] rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 group"
                >
                  <span>Book a Strategy Session</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center min-h-[48px] gap-2.5 px-8 py-3.5 border border-[#E5C378]/50 bg-[#063C2D]/50 hover:bg-[#063C2D] text-[#F3EFE4] hover:text-[#E5C378] text-xs sm:text-sm font-roboto font-medium tracking-[0.14em] rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5 group"
                >
                  <span>Explore Case Studies</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>

            </div>

            {/* RIGHT COLUMN: Service-Specific Luxury Abstract Artwork */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: easeCustom }}
              className="lg:col-span-5 flex justify-center lg:justify-end relative"
            >
              <div className="relative w-full max-w-[460px] lg:max-w-none aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl bg-[#03150E]/80 border border-[#D4AF37]/20">
                <Image
                  src={service.heroImage || '/images/services/service-brand-strategy.webp'}
                  alt={`${service.name} visual`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A]/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CONNECTOR: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* ========================================================================= */}
      {/* 02. STRATEGIC OVERVIEW & CORE IMPACT (WARM IVORY)                          */}
      {/* ========================================================================= */}
      <section
        id="overview"
        aria-label="Strategic Overview"
        className="relative py-20 sm:py-24 lg:py-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#C99742] uppercase">
              — STRATEGIC OVERVIEW —
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl mb-8 sm:mb-10">
            <h2 className="font-lora text-2xl sm:text-3xl lg:text-4xl font-normal text-[#080B0A] leading-[1.2] tracking-tight">
              {service.questionH2 || `How Does ${service.name} Drive Enterprise Growth?`}
            </h2>
          </div>

          {/* Narrative Paragraph */}
          <div className="max-w-4xl font-lora text-sm sm:text-base lg:text-[17px] text-[#3A403D] leading-relaxed space-y-4 mb-12 sm:mb-14">
            <p>{service.citabilityAnswer}</p>
          </div>

          {/* Quality & Discipline Benchmarks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#080B0A]/12">
            {(service.benchmarks || [
              'Structured Discovery Sprints',
              'Tailored Delivery Frameworks',
              'Verified Quality Standards',
              'Full Cross-Device Optimization'
            ]).map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] font-roboto font-medium text-[#080B0A]">
                <CheckCircle2 className="w-4 h-4 text-[#C99742] shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. COMMERCIAL PROBLEM SOLVING & CHALLENGES ADDRESSED (WARM IVORY)          */}
      {/* ========================================================================= */}
      {service.deepDive && service.deepDive.length > 0 && (
        <section
          id="challenges"
          aria-label="Commercial Diagnosis"
          className="relative pt-8 pb-20 sm:pb-24 lg:pb-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
        >
          <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#C99742] uppercase">
                — COMMERCIAL DIAGNOSIS —
              </span>
            </div>

            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-16 mb-14 sm:mb-18">
              <div>
                <h2 className="font-roboto text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#080B0A] leading-[1.12] tracking-tight">
                  The Critical Challenges<br />
                  <span className="font-lora italic text-[#C99742]">We Solve.</span>
                </h2>
              </div>
              <div className="lg:border-l lg:border-[#080B0A]/15 lg:pl-8 max-w-md">
                <p className="font-lora text-xs sm:text-sm text-[#4A504D] leading-relaxed">
                  How our studio deconstructs commercial and technical bottlenecks to deliver measurable speed, market authority and compounding returns.
                </p>
              </div>
            </div>

            {/* 3-Column Open Editorial Problem/Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-[#080B0A]/12">
              {service.deepDive.map((item, idx) => (
                <div
                  key={idx}
                  className={`pt-8 md:pt-0 ${
                    idx === 0 ? 'md:pr-8' : idx === 2 ? 'md:pl-8' : 'md:px-8'
                  } flex flex-col justify-between`}
                >
                  <div>
                    <span className="text-xs font-roboto font-bold text-[#C99742] tracking-widest block mb-2">
                      0{idx + 1} — CASE ANALYSIS
                    </span>
                    <h3 className="font-roboto font-bold text-lg sm:text-xl text-[#080B0A] leading-snug mb-4">
                      {item.title}
                    </h3>
                    
                    {/* The Bottleneck */}
                    <div className="mb-4 pb-4 border-b border-[#080B0A]/8">
                      <span className="text-[10px] font-roboto font-bold uppercase tracking-wider text-[#A84236] block mb-1">
                        The Industry Bottleneck:
                      </span>
                      <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>

                    {/* Siyara Solution */}
                    <div>
                      <span className="text-[10px] font-roboto font-bold uppercase tracking-wider text-[#19A878] block mb-1">
                        Siyara Solution:
                      </span>
                      <p className="font-lora text-xs sm:text-[13px] text-[#2D3230] leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 04. SPECIFICATIONS & CORE DELIVERABLES (WARM IVORY)                        */}
      {/* ========================================================================= */}
      <section
        id="deliverables"
        aria-label="Capabilities and Deliverables"
        className="relative pt-6 pb-20 sm:pb-24 lg:pb-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
      >
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#C99742] uppercase">
              — SPECIFICATIONS &amp; DELIVERABLES —
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Technology Stack / Frameworks Deployed */}
            <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#EFE9DC] border border-[#080B0A]/8">
              <div className="flex items-center gap-2.5 mb-6">
                <Cpu className="w-5 h-5 text-[#C99742]" />
                <h3 className="font-roboto font-bold text-lg sm:text-xl text-[#080B0A]">
                  Engineered With
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {(service.techStack || [
                  'Next.js 15 App Router',
                  'React 19 Concurrent Mode',
                  'Tailwind CSS v4',
                  'TypeScript',
                  'Schema.org JSON-LD',
                  'Edge CDN Caching',
                  'Serverless APIs',
                  'PostgreSQL'
                ]).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/80 border border-[#080B0A]/8 text-[#080B0A] text-xs font-mono font-medium shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Key Deliverables Checklist */}
            <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-[#EFE9DC] border border-[#080B0A]/8">
              <div className="flex items-center gap-2.5 mb-6">
                <ShieldCheck className="w-5 h-5 text-[#C99742]" />
                <h3 className="font-roboto font-bold text-lg sm:text-xl text-[#080B0A]">
                  Key Deliverables &amp; Outcomes
                </h3>
              </div>
              <div className="space-y-4">
                {(service.deliverables || service.subServices).map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#C99742]/15 text-[#C99742] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="font-lora text-xs sm:text-sm text-[#2D3230] leading-relaxed">
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONNECTOR: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* ========================================================================= */}
      {/* 05. 4-STAGE EXECUTION METHODOLOGY (DEEP EMERALD)                           */}
      {/* ========================================================================= */}
      <section
        id="methodology"
        aria-label="Execution Methodology"
        className="relative py-20 sm:py-24 lg:py-28 bg-[#063C2D] text-[#F3EFE4] overflow-hidden"
      >
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#063C2D] via-[#05261C] to-[#041A13] pointer-events-none" />
        <div
          className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[450px] rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.35) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
              — WORKING METHODOLOGY —
            </span>
          </div>

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-16 mb-16 sm:mb-20">
            <div>
              <h2 className="font-lora text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#F3EFE4] leading-[1.12] tracking-tight">
                Our 4-Stage<br />
                <span className="italic text-[#E5C378]">Execution Methodology.</span>
              </h2>
            </div>
            <div className="lg:border-l lg:border-white/15 lg:pl-8 max-w-md">
              <p className="font-lora text-xs sm:text-sm text-[#C5D2CE] font-light leading-relaxed">
                From initial commercial discovery through strategic blueprinting, engineering production, and post-launch optimization.
              </p>
            </div>
          </div>

          {/* 4-Stage Horizontal Timeline (Desktop) & Clean Vertical (Mobile) */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1.5px] bg-[#D4AF37]/40 z-0"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
              {(service.process || [
                {
                  step: '01',
                  title: 'Strategic Discovery',
                  timeline: 'Week 1',
                  desc: 'Deep audit of commercial requirements, target audience economics, competitor benchmarks, and conversion KPIs.'
                },
                {
                  step: '02',
                  title: 'Strategy & Blueprint',
                  timeline: 'Weeks 2–3',
                  desc: 'Strategic roadmaps, high-fidelity prototypes, accessible component systems, and responsive typography hierarchies.'
                },
                {
                  step: '03',
                  title: 'Production & Engineering',
                  timeline: 'Weeks 4–6',
                  desc: 'Clean Next.js engineering, serverless endpoint configuration, responsive fluid styling, and Schema.org graphs.'
                },
                {
                  step: '04',
                  title: 'QA & Launch Growth',
                  timeline: 'Week 7',
                  desc: 'Multi-device stress testing, Core Web Vitals verification, indexation audits, and ongoing conversion optimization.'
                }
              ]).map((proc, idx) => (
                <div key={idx} className="flex flex-col items-start pr-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#082E23] border border-[#D4AF37]/40 text-[#E5C378] flex items-center justify-center shadow-lg shrink-0 font-roboto font-bold text-lg">
                      {proc.step}
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-[#E5C378] border border-[#E5C378]/20">
                      {proc.timeline}
                    </span>
                  </div>

                  <h3 className="font-roboto font-bold text-lg sm:text-xl text-[#F3EFE4] mb-2 leading-snug">
                    {proc.title}
                  </h3>
                  <p className="font-lora text-xs sm:text-sm text-[#C5D2CE] font-light leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CONNECTOR: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* ========================================================================= */}
      {/* 06. SECTOR APPLICATIONS & REAL-WORLD USE CASES (WARM IVORY)                */}
      {/* ========================================================================= */}
      {service.industryApplications && service.industryApplications.length > 0 && (
        <section
          id="applications"
          aria-label="Industry Applications"
          className="relative py-20 sm:py-24 lg:py-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
        >
          <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#C99742] uppercase">
                — SECTOR APPLICATIONS —
              </span>
            </div>

            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-16 mb-14 sm:mb-18">
              <div>
                <h2 className="font-roboto text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#080B0A] leading-[1.12] tracking-tight">
                  Tailored for High-Consideration<br />
                  <span className="font-lora italic text-[#C99742]">Commercial Sectors.</span>
                </h2>
              </div>
              <div className="lg:border-l lg:border-[#080B0A]/15 lg:pl-8 max-w-md">
                <p className="font-lora text-xs sm:text-sm text-[#4A504D] leading-relaxed">
                  How we adapt {service.name} to the unique regulatory, trust, and conversion dynamics of leading industries.
                </p>
              </div>
            </div>

            {/* 4 Sector Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
              {service.industryApplications.map((app, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#EFE9DC]/80 border border-[#080B0A]/8 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-roboto font-bold text-[#C99742] tracking-wider block mb-2">
                      0{idx + 1}
                    </span>
                    <h3 className="font-roboto font-bold text-base sm:text-lg text-[#080B0A] mb-2 leading-snug">
                      {app.name}
                    </h3>
                    <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 07. CONNECTED DISCIPLINES & RELATED SERVICES (WARM IVORY)                  */}
      {/* ========================================================================= */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section
          id="connected-disciplines"
          aria-label="Connected Disciplines"
          className="relative pt-6 pb-20 sm:pb-24 lg:pb-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
        >
          <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#C99742] uppercase">
                — CONNECTED DISCIPLINES —
              </span>
            </div>

            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-16 mb-12 sm:mb-16">
              <div>
                <h2 className="font-lora text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#080B0A] leading-[1.12] tracking-tight">
                  How This Discipline Integrates
                </h2>
              </div>
              <div className="lg:border-l lg:border-[#080B0A]/15 lg:pl-8 max-w-md">
                <p className="font-lora text-xs sm:text-sm text-[#4A504D] leading-relaxed">
                  High-performing brands unite multiple interconnected capabilities into one cohesive growth engine.
                </p>
              </div>
            </div>

            {/* 3 Related Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {service.relatedServices.map((rel, idx) => (
                <Link
                  key={idx}
                  href={`/services/${rel.slug}`}
                  className="group p-6 sm:p-7 rounded-2xl bg-[#EFE9DC]/80 hover:bg-[#EFE9DC] border border-[#080B0A]/8 hover:border-[#C99742]/50 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-roboto font-bold text-base sm:text-lg text-[#080B0A] group-hover:text-[#C99742] transition-colors mb-2 leading-snug">
                      {rel.title}
                    </h3>
                    <p className="font-lora text-xs sm:text-[13px] text-[#4A504D] leading-relaxed mb-6">
                      {rel.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#080B0A]/8 flex items-center justify-between text-xs font-roboto font-bold tracking-[0.1em] text-[#080B0A] group-hover:text-[#C99742] uppercase transition-colors">
                    <span>Explore Discipline</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 08. FREQUENTLY ASKED QUESTIONS (WARM IVORY)                               */}
      {/* ========================================================================= */}
      {service.faqs && service.faqs.length > 0 && (
        <section
          id="faq"
          aria-label="Frequently Asked Questions"
          className="relative pt-6 pb-20 sm:pb-24 lg:pb-28 bg-[#F4EFE6] text-[#080B0A] overflow-hidden"
        >
          <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Left Column: Heading & Subtitle */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.22em] text-[#C99742] uppercase">
                    — FREQUENTLY ASKED QUESTIONS —
                  </span>
                </div>
                <h2 className="font-lora text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#080B0A] leading-[1.15] tracking-tight mb-4">
                  Common Questions<br />
                  <span className="italic text-[#C99742]">About {service.name}.</span>
                </h2>
                <p className="font-lora text-xs sm:text-sm text-[#4A504D] leading-relaxed max-w-sm">
                  Clear answers regarding deliverables, collaboration models, engineering standards, and timelines.
                </p>
              </div>

              {/* Right Column: Accordion List */}
              <div className="lg:col-span-7 divide-y divide-[#080B0A]/10 border-y border-[#080B0A]/10">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIdx === idx;
                  return (
                    <div key={idx} className="py-5 sm:py-6">
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between text-left group gap-4 cursor-pointer focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className="font-roboto font-bold text-sm sm:text-base text-[#080B0A] group-hover:text-[#C99742] transition-colors leading-snug">
                          {faq.q}
                        </span>
                        <span className="text-[#C99742] text-sm shrink-0 font-bold transition-transform duration-200">
                          {isOpen ? '—' : '+'}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: easeCustom }}
                            className="overflow-hidden"
                          >
                            <p className="font-lora text-xs sm:text-sm text-[#4A504D] leading-relaxed pt-3 font-light">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>
      )}

      {/* CONNECTOR: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* ========================================================================= */}
      {/* 09. CLOSING CONVERSION CTA (DEEP EMERALD)                                  */}
      {/* ========================================================================= */}
      <section
        id="service-cta"
        aria-label="Closing Call to Action"
        className="relative py-24 sm:py-28 lg:py-36 bg-[#063C2D] text-[#F3EFE4] overflow-hidden text-center"
      >
        {/* Deep Emerald Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#063C2D] via-[#05261C] to-[#041710] pointer-events-none" />
        
        {/* Ambient Glows */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] rounded-full pointer-events-none opacity-25"
          style={{
            background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.35) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Eyebrow */}
          <div className="mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
              — LET&apos;S BUILD TOGETHER —
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-roboto text-4xl sm:text-5xl lg:text-[60px] text-[#F3EFE4] font-normal leading-[1.1] tracking-tight mb-5 sm:mb-6 max-w-3xl mx-auto">
            Ready to Elevate Your{' '}
            <span className="font-lora italic text-[#E5C378]">
              {service.name.split('&')[0].trim()}?
            </span>
          </h2>

          {/* Supporting Narrative */}
          <p className="font-lora text-sm sm:text-base text-[#C5D2CE] font-light max-w-xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            Directly connect with our studio directors for strategic scoping, deliverables breakdown, and fixed-investment proposal delivery.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on WhatsApp"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] gap-2 px-9 py-3.5 bg-[#E5C378] hover:bg-[#D4AF37] text-[#080B0A] text-xs font-roboto font-bold tracking-[0.14em] rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5"
            >
              <span>Book a Strategy Session</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center min-h-[46px] gap-2 px-9 py-3.5 border border-[#E5C378]/50 bg-[#063C2D]/60 hover:bg-[#063C2D] text-[#F3EFE4] hover:text-[#E5C378] text-xs font-roboto font-medium tracking-[0.14em] rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

