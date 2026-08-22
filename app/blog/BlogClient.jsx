'use client';

import React from 'react';
import Blog from '../../src/views/Blog';
import { useRouter } from 'next/navigation';

export default function BlogClient() {
  const router = useRouter();

  const handleSelectArticle = (article) => {
    router.push(`/blog/${article.slug}`);
  };

  return <Blog onSelectArticle={handleSelectArticle} />;
}
