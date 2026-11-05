'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';

export default function FeaturedArticle({ article, onSelectArticle }) {
  if (!article) return null;

  return (
    <section
      id="featured-insight"
      aria-label="Featured Insight"
      className="relative py-12 sm:py-16 bg-[#080B0A] text-[#F3EFE4] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <Link
          href={`/insights/${article.slug}`}
          aria-label={`Read featured insight: ${article.title}`}
          className="group relative block rounded-2xl bg-[#0B1410]/70 border border-white/10 hover:border-[#E5C378]/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-[#D4AF37]/5 focus:outline-none focus:ring-2 focus:ring-[#19A878]"
        >
          {/* Subtle Hover Gradient Glow */}
          <div className="absolute inset-0 bg-radial from-[#19A878]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Visual Cover Column (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-[440px] overflow-hidden bg-[#0A0E0C]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                className="object-cover object-center opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-[#080B0A]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#080B0A]/40 lg:to-[#080B0A]" />

              {/* Category Pill Tag */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3 py-1 text-[10px] font-roboto font-bold tracking-widest text-[#E5C378] uppercase rounded-full bg-black/70 backdrop-blur-md border border-white/10">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Editorial Content Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative z-10">
              <div>
                {/* Eyebrow Label & Date */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-roboto font-bold tracking-wider uppercase text-[#D4AF37]">
                    <Sparkles className="w-3.5 h-3.5 text-[#19A878]" />
                    Featured Insight
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="text-xs font-roboto text-[#C5D2CE]/70">
                    {article.date}
                  </span>
                </div>

                {/* Article Title */}
                <h2 className="font-roboto text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F3EFE4] group-hover:text-[#E5C378] transition-colors duration-300 leading-tight mb-4">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="font-lora text-xs sm:text-sm text-[#C5D2CE] font-light leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Author Lockup & Read Action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full border border-white/20 object-cover"
                  />
                  <div>
                    <div className="font-roboto text-xs font-semibold text-[#F3EFE4]">
                      {article.author.name}
                    </div>
                    <div className="font-lora text-[11px] text-[#C5D2CE]/70">
                      {article.author.role}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-5">
                  <div className="flex items-center gap-1.5 text-xs font-roboto text-[#C5D2CE]/80">
                    <Clock className="w-3.5 h-3.5 text-[#E5C378]" />
                    <span>{article.readTime}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-roboto font-bold tracking-wider text-[#E5C378] group-hover:text-white uppercase transition-colors">
                    <span>Read Insight</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </Link>

      </div>
    </section>
  );
}
