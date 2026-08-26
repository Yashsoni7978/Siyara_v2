'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';

export default function ArticleCard({ article, index = 0, onSelectArticle }) {
  const handleClick = () => {
    if (onSelectArticle) {
      onSelectArticle(article);
    }
  };

  return (
    <motion.article 
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      onClick={handleClick}
      className="group relative flex flex-col h-full bg-[#080B0A] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/5"
    >
      {/* Subtle Atmosphere Hover Overlay */}
      <div className="absolute inset-0 bg-radial from-[#19A878]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Article Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#063C2D]/30 border-b border-[#D4AF37]/15">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B0A] via-[#080B0A]/20 to-transparent" />
        
        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 border border-[#D4AF37]/30 bg-[#080B0A]/85 backdrop-blur-md px-2.5 py-1 text-[9px] font-sans tracking-widest text-[#D4AF37] uppercase">
          {article.category}
        </div>
      </div>

      {/* Article Body Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between relative z-10">
        <div>
          {/* Metadata Row */}
          <div className="flex items-center justify-between gap-2 text-[11px] font-sans text-[#CFC9BB]/60 mb-3">
            <span>{article.date}</span>
            <div className="flex items-center gap-1 font-sans text-[#D4AF37]">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F3EFE4] group-hover:text-[#E5C378] transition-colors duration-300 leading-snug mb-3">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="font-sans text-xs text-[#CFC9BB]/75 font-light leading-relaxed line-clamp-3 mb-6">
            {article.excerpt}
          </p>
        </div>

        {/* Footer Author & Action */}
        <div className="pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between gap-3 mt-auto">
          <div className="flex items-center gap-2.5">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="w-7 h-7 rounded-full border border-[#D4AF37]/30 object-cover"
            />
            <span className="font-sans text-xs font-medium text-[#CFC9BB]">
              {article.author.name}
            </span>
          </div>

          <div className="w-8 h-8 rounded-full border border-[#D4AF37]/30 bg-[#063C2D]/20 group-hover:bg-[#D4AF37] group-hover:text-[#080B0A] text-[#F3EFE4] flex items-center justify-center transition-all duration-300">
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
