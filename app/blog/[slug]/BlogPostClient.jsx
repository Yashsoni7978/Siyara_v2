'use client';

import React from 'react';
import BlogPost from '../../../src/components/blog/BlogPost';
import { useRouter } from 'next/navigation';
import { FEATURED_ARTICLE, BLOG_ARTICLES } from '../../../src/data/blogArticles';

export default function BlogPostClient({ article }) {
  const router = useRouter();
  const allArticles = [FEATURED_ARTICLE, ...BLOG_ARTICLES];

  const handleBack = () => {
    router.push('/blog');
  };

  const handleSelectArticle = (selected) => {
    router.push(`/blog/${selected.slug}`);
  };

  return (
    <BlogPost
      article={article}
      allArticles={allArticles}
      onBack={handleBack}
      onSelectArticle={handleSelectArticle}
    />
  );
}
