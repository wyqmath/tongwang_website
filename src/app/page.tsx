"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { getHomepageData } from "@/lib/data";
import { FloatingEditButton, useAdmin } from "@/components/admin";
import { HeroEditor, WelcomeEditor, ResearchInterestEditor, PublicationItemEditor, LabNewsEditor } from "@/components/admin/editors/HomepageEditors";
import type { ResearchInterest, RecentPublication, LabNewsItem } from "@/types";

export default function Home() {
  // 从 JSON 读取数据 - 使用 state 来支持刷新
  const [homepageData] = useState(getHomepageData());
  const {
    backgroundImage,
    heroTitle,
    welcomeTitle,
    welcomePoints,
    researchInterests,
    recentPublications,
    labNews
  } = homepageData;

  const [currentPublicationIndex, setCurrentPublicationIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  // 编辑状态
  const { isDevMode } = useAdmin(); // Used in conditional rendering below
  const [editingHero, setEditingHero] = useState(false);
  const [editingWelcome, setEditingWelcome] = useState(false);
  const [editingResearchInterest, setEditingResearchInterest] = useState<ResearchInterest | null>(null);
  const [editingPublication, setEditingPublication] = useState<RecentPublication | null>(null);
  const [editingLabNews, setEditingLabNews] = useState<LabNewsItem | null>(null);

  // 刷新数据
  const refreshData = useCallback(() => {
    // 重新加载页面以获取最新数据
    window.location.reload();
  }, []);

  // 自动轮播 - 出版物
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPublicationIndex((prevIndex) =>
        (prevIndex + 1) % recentPublications.length
      );
    }, 3000); // 每3秒切换一次

    return () => clearInterval(interval);
  }, [recentPublications.length]);

  // 自动轮播 - Lab News
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) =>
        (prevIndex + 1) % labNews.length
      );
    }, 3000); // 每3秒切换一次

    return () => clearInterval(interval);
  }, [labNews.length]);

  const goToPreviousPublication = () => {
    setCurrentPublicationIndex((prevIndex) =>
      prevIndex === 0 ? recentPublications.length - 1 : prevIndex - 1
    );
  };

  const goToNextPublication = () => {
    setCurrentPublicationIndex((prevIndex) =>
      (prevIndex + 1) % recentPublications.length
    );
  };
  // 颜色映射
  const colorMap = {
    blue: { title: 'text-blue-600', highlight: 'text-blue-600' },
    green: { title: 'text-green-600', highlight: 'text-green-600' },
    purple: { title: 'text-purple-600', highlight: 'text-purple-600' }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner with Background Image */}
      <section className="relative w-full h-[50vh] min-h-[300px] max-h-[650px] md:h-[32.14vw]">
        <FloatingEditButton onClick={() => setEditingHero(true)} position="top-right" />
        <Image
          src={backgroundImage}
          alt="Research Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Banner Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 z-10">
          <h2 className="font-bold text-white text-center leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] max-w-[90%] md:max-w-[85%]"
              style={{
                textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 25px rgba(0,0,0,0.6), 1px 1px 3px rgba(0,0,0,0.9)',
                lineHeight: '1.3'
              }}
              dangerouslySetInnerHTML={{ __html: heroTitle.replace(/\n/g, '<br />') }}
          />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-white py-12 md:py-16 relative">
        <FloatingEditButton onClick={() => setEditingWelcome(true)} position="top-right" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="font-bold text-gray-900 mb-4 md:mb-6 text-left text-3xl sm:text-4xl md:text-5xl">
            {welcomeTitle}
          </h2>
          <ul className="text-gray-600 text-left leading-relaxed space-y-2 md:space-y-3 list-disc list-inside text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {welcomePoints.map((point, index) => (
              <li key={index} className="pl-2">{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Research Interest */}
      <section id="research-areas" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">Research Interest</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {researchInterests.map((interest) => (
              <div key={interest.id} className="group relative">
                <FloatingEditButton onClick={() => setEditingResearchInterest(interest)} position="top-right" />
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 aspect-[4/3]">
                  <Image
                    src={interest.image}
                    alt={`${interest.title} - ${interest.description}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className={`text-xl sm:text-2xl font-bold ${colorMap[interest.color].title}`}>
                    {interest.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Recent Publications</h2>
            <Button variant="outline" asChild className="w-full sm:w-auto text-base">
              <Link href="/publications">
                <BookOpen className="h-4 w-4 mr-2" />
                View All Publications
              </Link>
            </Button>
          </div>

          <div className="relative">
            <FloatingEditButton
              onClick={() => setEditingPublication(recentPublications[currentPublicationIndex])}
              position="top-right"
            />
            {/* 出版物卡片轮播 */}
            <div className="overflow-hidden rounded-xl shadow-xl bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* 左侧：图片 */}
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px] bg-gray-100">
                  <Image
                    src={recentPublications[currentPublicationIndex].image}
                    alt={recentPublications[currentPublicationIndex].title}
                    fill
                    className="object-contain p-2 sm:p-4 transition-opacity duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* 右侧：文章信息 */}
                <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="default" className="text-sm sm:text-base">{recentPublications[currentPublicationIndex].year}</Badge>
                      <Badge variant="secondary" className="text-sm sm:text-base">{recentPublications[currentPublicationIndex].journal}</Badge>
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight line-clamp-3">
                      {recentPublications[currentPublicationIndex].title}
                    </h3>

                    <p className="text-sm sm:text-base md:text-lg text-gray-600 line-clamp-2">
                      {recentPublications[currentPublicationIndex].authors}
                    </p>

                    <div className="text-sm sm:text-base md:text-lg text-gray-500">
                      <span className="font-semibold">{recentPublications[currentPublicationIndex].journal}</span>
                      {recentPublications[currentPublicationIndex].volume && (
                        <>, {recentPublications[currentPublicationIndex].volume}</>
                      )}
                      {recentPublications[currentPublicationIndex].pages && (
                        <>, {recentPublications[currentPublicationIndex].pages}</>
                      )}
                    </div>

                    {recentPublications[currentPublicationIndex].note && (
                      <div className="text-sm sm:text-base md:text-lg text-purple-600 font-bold mt-2">
                        ({recentPublications[currentPublicationIndex].note})
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-6">
                    <Link
                      href={recentPublications[currentPublicationIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button variant="outline" size="sm" className="w-full sm:w-auto">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read Paper
                      </Button>
                    </Link>

                    {/* 导航控制 */}
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={goToPreviousPublication}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full p-2 transition-all duration-200"
                        aria-label="Previous publication"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <span className="text-sm text-gray-600 min-w-[60px] text-center">
                        {currentPublicationIndex + 1} / {recentPublications.length}
                      </span>

                      <button
                        onClick={goToNextPublication}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full p-2 transition-all duration-200"
                        aria-label="Next publication"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 指示器点 */}
            <div className="flex justify-center mt-6 space-x-2">
              {recentPublications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPublicationIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentPublicationIndex
                      ? 'bg-primary scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to publication ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lab News */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Lab News</h2>
            <Button variant="outline" asChild className="w-full sm:w-auto text-base">
              <Link href="/news">View All News</Link>
            </Button>
          </div>

          {/* News Carousel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {labNews.map((news, index) => (
              <div key={news.id} className="relative">
                <FloatingEditButton onClick={() => setEditingLabNews(news)} position="top-right" />
                <Card
                  className={`hover:shadow-lg transition-all duration-500 ${
                    index === currentNewsIndex ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden rounded-t-lg bg-gray-100">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="font-semibold text-sm sm:text-base line-clamp-2 mb-2 min-h-[2.5rem] sm:min-h-[2.5rem] flex items-start">
                        {news.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {news.date}
                      </p>
                      <Badge variant={news.isRecruiting ? "default" : "secondary"} className="text-xs">
                        {news.isRecruiting ? "Recruiting" : "Lab News"}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {labNews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentNewsIndex(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentNewsIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to news ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Editor Modals */}
      {isDevMode && editingHero && (
        <HeroEditor
          isOpen={editingHero}
          onClose={() => setEditingHero(false)}
          initialData={{ heroTitle, backgroundImage }}
          onSave={refreshData}
        />
      )}

      {editingWelcome && (
        <WelcomeEditor
          isOpen={editingWelcome}
          onClose={() => setEditingWelcome(false)}
          initialData={{ welcomeTitle, welcomePoints }}
          onSave={refreshData}
        />
      )}

      {editingResearchInterest && (
        <ResearchInterestEditor
          isOpen={!!editingResearchInterest}
          onClose={() => setEditingResearchInterest(null)}
          initialData={editingResearchInterest}
          onSave={refreshData}
        />
      )}

      {editingPublication && (
        <PublicationItemEditor
          isOpen={!!editingPublication}
          onClose={() => setEditingPublication(null)}
          initialData={editingPublication}
          onSave={refreshData}
        />
      )}

      {editingLabNews && (
        <LabNewsEditor
          isOpen={!!editingLabNews}
          onClose={() => setEditingLabNews(null)}
          initialData={editingLabNews}
          onSave={refreshData}
        />
      )}
      </div>
  );
}
