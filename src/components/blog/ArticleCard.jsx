'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCard({ article, index = 0, onSelectArticle }) {
  const handleClick = () => {
    if (onSelectArticle) {
      onSelectArticle(article);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '60px 0px' }}
      transition={{ duration: 0.4, delay: Math.min((index % 3) * 0.04, 0.08) }}
      className="h-full flex flex-col"
    >
      <Link
        href={`/insights/${article.slug}`}
        onClick={handleClick}
        aria-label={`Read article: ${article.title}`}
        className="group relative flex flex-col h-full bg-[#080B0A] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/5 rounded-xl block focus:outline-none focus:ring-2 focus:ring-[#19A878]"
      >
        {/* Subtle Ambient Hover Overlay */}
        <div className="absolute inset-0 bg-radial from-[#19A878]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Article Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#063C2D]/30 border-b border-[#D4AF37]/15">
          <Image 
            src={article.image} 
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-[#080B0A]/20 to-transparent" />
          
          {/* Category Pill Tag */}
          <div className="absolute top-4 left-4 border border-[#D4AF37]/35 bg-[#080B0A]/90 backdrop-blur-md px-3 py-1 text-[10px] font-sans font-medium tracking-widest text-[#D4AF37] uppercase rounded-full">
            {article.category}
          </div>
        </div>

        {/* Article Body Content */}
        <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between relative z-10">
          <div>
            {/* Metadata Row */}
            <div className="flex items-center justify-between gap-2 text-xs font-sans text-[#CFC9BB]/60 mb-3.5">
              <span>{article.date}</span>
              <div className="flex items-center gap-1.5 font-sans text-[#D4AF37]/90 text-[11px]">
                <Clock className="w-3 h-3 text-[#19A878]" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-roboto text-xl sm:text-2xl font-light text-[#F3EFE4] group-hover:text-[#E5C378] transition-colors duration-300 leading-snug mb-3 line-clamp-2">
              {article.title}
            </h3>

            {/* Excerpt */}
            <p className="font-lora text-xs sm:text-[13px] text-[#CFC9BB]/75 font-light leading-relaxed line-clamp-3 mb-6">
              {article.excerpt}
            </p>
          </div>

          {/* Footer Author & Action */}
          <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between gap-3 mt-auto">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#D4AF37]/30 bg-[#063C2D]/40 shrink-0">
                <Image 
                  src={article.author?.avatar || '/logo.webp'} 
                  alt={article.author?.name || 'Siyara Author'}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-sans text-xs font-medium text-[#CFC9BB]">
                {article.author?.name || 'Siyara Editorial Team'}
              </span>
            </div>

            <div className="w-8 h-8 rounded-full border border-[#D4AF37]/30 bg-[#063C2D]/20 group-hover:bg-[#D4AF37] group-hover:text-[#080B0A] text-[#F3EFE4] flex items-center justify-center transition-all duration-300 shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
