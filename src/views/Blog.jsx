'use client';

import React, { useState, useMemo, useEffect } from 'react';
import BlogHero from '../components/blog/BlogHero.jsx';
import FeaturedArticle from '../components/blog/FeaturedArticle.jsx';
import BlogControls from '../components/blog/BlogControls.jsx';
import ArticleGrid from '../components/blog/ArticleGrid.jsx';
import BlogPagination from '../components/blog/BlogPagination.jsx';
import NewsletterCTA from '../components/blog/NewsletterCTA.jsx';
import BlogPost from '../components/blog/BlogPost.jsx';
import { BLOG_CATEGORIES, FEATURED_ARTICLE, BLOG_ARTICLES } from '../data/blogArticles.js';

const ARTICLES_PER_PAGE = 6;

export default function Blog({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // All available articles list including featured article in standard list
  const allArticles = useMemo(() => {
    return [FEATURED_ARTICLE, ...BLOG_ARTICLES];
  }, []);

  // Filter articles based on active category and search query
  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      const matchesQuery = 
        searchQuery.trim() === '' ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  // Calculate total pagination pages
  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE));
  }, [filteredArticles]);

  // Paginated slice for the current grid view
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const gridElement = document.getElementById('article-grid');
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamically update document title based on view state
  useEffect(() => {
    if (selectedArticle) {
      document.title = `${selectedArticle.title} â€” SIYARA INSIGHTS`;
    } else {
      document.title = 'Siyara Insights | Digital Strategy, Technology, Marketing & Growth';
    }
  }, [selectedArticle]);

  // Render Full Article View if an article is selected
  if (selectedArticle) {
    return (
      <BlogPost 
        article={selectedArticle}
        allArticles={allArticles}
        onBack={handleBackToBlog}
        onSelectArticle={handleSelectArticle}
      />
    );
  }

  return (
    <div className="bg-[#080B0A] text-[#F3EFE4] selection:bg-[#063C2D] selection:text-[#E5C378]">
      {/* 01 BLOG HERO */}
      <BlogHero />

      {/* 02 FEATURED ARTICLE */}
      <FeaturedArticle 
        article={FEATURED_ARTICLE} 
        onSelectArticle={handleSelectArticle} 
      />

      {/* 03 CATEGORY FILTERS & SEARCH */}
      <BlogControls 
        categories={BLOG_CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={handleCategorySelect}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        totalResults={filteredArticles.length}
      />

      {/* 04 MAIN ARTICLE GRID */}
      <ArticleGrid 
        articles={paginatedArticles} 
        onSelectArticle={handleSelectArticle}
        totalCount={filteredArticles.length}
      />

      {/* 05 PAGINATION */}
      {filteredArticles.length > 0 && totalPages > 1 && (
        <BlogPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {/* 06 NEWSLETTER INSIGHTS CTA */}
      <NewsletterCTA />
    </div>
  );
}
