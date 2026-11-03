'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FEATURED_ARTICLE, BLOG_ARTICLES } from '../../data/blogArticles.js';

export default function Insights() {
  const leadArticle = FEATURED_ARTICLE;
  const secondaryArticles = BLOG_ARTICLES.slice(0, 2);

  return (
    <section id="insights" className="relative py-16 sm:py-20 bg-[#F3EFE3] overflow-hidden">
      {/* Editorial Ivory Atmosphere */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-70 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 sm:mb-10">
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#B9923F]">
            10
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            Studio Insights & Perspectives
          </span>
        </div>

        {/* Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-8 sm:mb-12">
          <div className="lg:col-span-8">
            <h2 className="font-roboto text-3xl sm:text-5xl lg:text-7xl text-[#101613] font-normal leading-[1.05] sm:leading-[0.98] tracking-tight break-words">
              THINKING BEYOND <br />
              THE <span className="text-[#0B5E49] font-normal">WEBSITE.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end flex-col items-start lg:items-end">
            <p className="font-lora text-xs sm:text-sm text-[#101613]/70 font-light leading-relaxed max-w-sm mb-4">
              Strategic insights on digital growth, brand positioning, search intelligence, and conversion engineering.
            </p>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#0B5E49] hover:text-[#B9923F] transition-colors uppercase min-h-[44px]"
            >
              <span>VIEW ALL INSIGHTS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Editorial Article Layout (1 Dominant Lead + 2 Supporting Articles) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Dominant Lead Article (7 cols) */}
          <Link
            href={`/insights/${leadArticle.slug}`}
            className="lg:col-span-7 group flex flex-col justify-between p-5 sm:p-8 lg:p-12 border border-[#B9923F]/30 bg-[#ECE7D8] hover:border-[#0B5E49] transition-all duration-500 relative overflow-hidden shadow-xl"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-sans tracking-[0.2em] text-[#0B5E49] uppercase font-bold">
                  {leadArticle.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B5E49]" />
                <span className="text-xs font-sans text-[#101613]/60 font-semibold">
                  FEATURED READ
                </span>
              </div>

              <h3 className="font-roboto text-xl sm:text-3xl lg:text-4xl text-[#101613] font-normal leading-snug sm:leading-tight mb-3 sm:mb-4 group-hover:text-[#0B5E49] transition-colors break-words">
                {leadArticle.title}
              </h3>

              <p className="font-lora text-xs sm:text-sm text-[#101613]/70 font-light leading-relaxed max-w-xl mb-6 sm:mb-8">
                {leadArticle.excerpt}
              </p>
            </div>

            <div className="relative h-48 sm:h-64 lg:h-72 my-4 sm:my-6 overflow-hidden border border-[#B9923F]/20">
              <Image
                src={leadArticle.image}
                alt={leadArticle.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover opacity-75 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-95 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ECE7D8] via-transparent to-transparent" />
            </div>

            <div className="pt-4 sm:pt-6 border-t border-[#B9923F]/20 flex items-center justify-between relative z-10 min-h-[44px]">
              <span className="text-xs font-sans font-semibold tracking-[0.16em] sm:tracking-[0.18em] text-[#101613] group-hover:text-[#0B5E49] transition-colors uppercase">
                READ FEATURED INSIGHT
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#0B5E49] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>

          {/* Supporting Articles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 justify-between">
            {secondaryArticles.map((article) => (
              <Link
                key={article.id}
                href={`/insights/${article.slug}`}
                className="group flex flex-col justify-between p-4 sm:p-6 lg:p-7 border border-[#B9923F]/30 bg-[#ECE7D8] hover:border-[#0B5E49] transition-all duration-500 flex-1 shadow-lg"
              >
                <div>
                  <div className="relative h-36 mb-5 overflow-hidden border border-[#B9923F]/20">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover opacity-65 mix-blend-luminosity group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ECE7D8] via-transparent to-transparent" />
                  </div>

                  <span className="text-[9px] font-sans tracking-[0.2em] text-[#0B5E49] uppercase mb-2 block group-hover:text-[#B9923F] transition-colors font-bold">
                    {article.category}
                  </span>

                  <h4 className="font-roboto text-xl sm:text-2xl text-[#101613] font-normal leading-snug mb-3 group-hover:text-[#0B5E49] transition-colors">
                    {article.title}
                  </h4>

                  <p className="font-lora text-xs text-[#101613]/70 font-light leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#B9923F]/20 flex items-center justify-between">
                  <span className="text-[10px] font-sans font-semibold tracking-[0.16em] text-[#101613] group-hover:text-[#0B5E49] transition-colors uppercase">
                    READ ARTICLE
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0B5E49] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
