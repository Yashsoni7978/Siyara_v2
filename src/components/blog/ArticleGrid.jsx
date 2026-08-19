import React from 'react';
import ArticleCard from './ArticleCard.jsx';

export default function ArticleGrid({ articles, onSelectArticle, totalCount }) {
  if (articles.length === 0) {
    return (
      <section className="py-20 bg-[#080B0A] text-center">
        <div className="max-w-md mx-auto px-6">
          <div className="text-3xl font-serif text-[#D4AF37] mb-3">No Insights Found</div>
          <p className="font-sans text-xs text-[#CFC9BB]/70 font-light leading-relaxed mb-6">
            We couldn't find any articles matching your search query or selected category. Try searching for another topic or resetting your category filter.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="article-grid" className="py-12 md:py-16 bg-[#080B0A] scroll-mt-24">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {articles.map((article, index) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              index={index} 
              onSelectArticle={onSelectArticle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
