'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { FEATURED_ARTICLE, BLOG_ARTICLES } from '../../data/blogArticles.js';

export default function Insights() {
  const leadArticle = FEATURED_ARTICLE;
  const secondaryArticles = BLOG_ARTICLES.slice(0, 2);

  return (
    <section id="insights" className="relative py-16 sm:py-20 bg-[#F3EFE3] overflow-hidden">
      {/* Editorial Ivory Atmosphere */}
      <div className="absolute inset-0 ivory-texture pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3EFE3] via-[#ECE7D8]/60 to-[#F3EFE3] opacity-70 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#B9923F]">
            10
          </span>
          <span className="h-[1px] w-8 bg-[#0B5E49]/30" />
          <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#0B5E49] uppercase">
            Studio Insights & Perspectives
          </span>
        </div>

        {/* Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#101613] font-normal leading-[0.98] tracking-tight">
              THINKING BEYOND <br />
              THE <span className="text-[#0B5E49] font-normal">WEBSITE.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end flex-col items-start lg:items-end">
            <p className="font-sans text-xs sm:text-sm text-[#101613]/70 font-light leading-relaxed max-w-sm mb-4">
              Strategic insights on digital growth, brand positioning, search intelligence, and conversion engineering.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#0B5E49] hover:text-[#B9923F] transition-colors uppercase"
            >
              <span>VIEW ALL INSIGHTS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Editorial Article Layout (1 Dominant Lead + 2 Supporting Articles) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Dominant Lead Article (7 cols) */}
          <Link
            href={`/blog/${leadArticle.slug}`}
            className="lg:col-span-7 group flex flex-col justify-between p-8 sm:p-12 border border-[#B9923F]/30 bg-[#ECE7D8] hover:border-[#0B5E49] transition-all duration-500 relative overflow-hidden shadow-xl"
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

              <h3 className="font-serif text-2xl sm:text-4xl text-[#101613] font-normal leading-tight mb-4 group-hover:text-[#0B5E49] transition-colors">
                {leadArticle.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#101613]/70 font-light leading-relaxed max-w-xl mb-8">
                {leadArticle.excerpt}
              </p>
            </div>

            <div className="relative h-64 sm:h-72 my-6 overflow-hidden border border-[#B9923F]/20">
              <img
                src={leadArticle.image}
                alt={leadArticle.title}
                className="w-full h-full object-cover opacity-75 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-95 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ECE7D8] via-transparent to-transparent" />
            </div>

            <div className="pt-6 border-t border-[#B9923F]/20 flex items-center justify-between relative z-10">
              <span className="text-xs font-sans font-semibold tracking-[0.18em] text-[#101613] group-hover:text-[#0B5E49] transition-colors uppercase">
                READ FEATURED INSIGHT
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#0B5E49] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Link>

          {/* Supporting Articles (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {secondaryArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group flex flex-col justify-between p-7 border border-[#B9923F]/30 bg-[#ECE7D8] hover:border-[#0B5E49] transition-all duration-500 flex-1 shadow-lg"
              >
                <div>
                  <div className="relative h-36 mb-5 overflow-hidden border border-[#B9923F]/20">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover opacity-65 mix-blend-luminosity group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ECE7D8] via-transparent to-transparent" />
                  </div>

                  <span className="text-[9px] font-sans tracking-[0.2em] text-[#0B5E49] uppercase mb-2 block group-hover:text-[#B9923F] transition-colors font-bold">
                    {article.category}
                  </span>

                  <h4 className="font-serif text-xl sm:text-2xl text-[#101613] font-normal leading-snug mb-3 group-hover:text-[#0B5E49] transition-colors">
                    {article.title}
                  </h4>

                  <p className="font-sans text-xs text-[#101613]/70 font-light leading-relaxed mb-4 line-clamp-2">
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
