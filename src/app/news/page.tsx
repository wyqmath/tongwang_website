"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";
import { getNewsData } from "@/lib/data";
import { useAdmin, FloatingEditButton } from "@/components/admin";
import { NewsArticleEditor } from "@/components/admin/editors/NewsEditors";
import type { NewsArticle, NewsData } from "@/types";

// 获取类别标签
function getCategoryLabel(category: NewsArticle['category']) {
  const labels = {
    'lab-news': 'Lab News',
    'publication': 'Publication',
    'award': 'Award',
    'conference': 'Conference'
  };
  return labels[category] || 'Lab News';
}

// 新闻条目组件
function NewsItem({
  article,
  onEdit
}: {
  article: NewsArticle;
  onEdit?: () => void;
}) {
  return (
    <article className="relative border-b border-gray-200 pb-16">
      {onEdit && (
        <FloatingEditButton
          label="Edit"
          onClick={onEdit}
          position="top-right"
        />
      )}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left side - Text content */}
        <div className="flex-1 w-full lg:w-auto">
          <div className="text-sm text-muted-foreground mb-2">
            {article.date}
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4 hover:underline cursor-pointer">
            {article.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {article.content}
          </p>
          {article.links && article.links.length > 0 && (
            <div className="flex gap-4 mb-4 flex-wrap">
              {article.links.map((link, index) => (
                <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="link" className="text-primary p-0 h-auto">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {link.text}
                  </Button>
                </Link>
              ))}
            </div>
          )}
          <div className="mt-4 text-sm text-primary">
            {getCategoryLabel(article.category)}
          </div>
        </div>

        {/* Right side - Image Carousel */}
        {article.images.length > 0 && (
          <div className="w-full lg:w-80 flex-shrink-0">
            <ImageCarousel
              images={article.images}
              alt={article.title}
            />
          </div>
        )}
      </div>
    </article>
  );
}

export default function NewsPage() {
  const { isDevMode } = useAdmin();
  const [data, setData] = useState<NewsData>(getNewsData());
  const { articles } = data;

  // Editing states
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null);

  // Refresh data callback
  const refreshData = useCallback(() => {
    setData(getNewsData());
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
        </div>

        {/* Recent News */}
        <section className="mb-12">
          <div className="space-y-16">
            {articles.map((article) => (
              <NewsItem
                key={article.id}
                article={article}
                onEdit={isDevMode ? () => setEditingArticle(article) : undefined}
              />
            ))}
          </div>
        </section>

      </div>

      {/* Edit Modals */}
      {isDevMode && editingArticle && (
        <NewsArticleEditor
          isOpen={!!editingArticle}
          onClose={() => setEditingArticle(null)}
          initialData={editingArticle}
          onSave={refreshData}
        />
      )}
    </div>
  );
}
