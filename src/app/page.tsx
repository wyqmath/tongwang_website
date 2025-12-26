"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {

  // 最新出版物数据
  const recentPublications = [
    {
      title: "Recent advances in artificial intelligence–driven biomolecular dynamics simulations based on machine learning force fields",
      authors: "Cui, T., Zhou, Y., & Wang, T.",
      year: "2025",
      journal: "Current Opinion in Structural Biology",
      volume: "95",
      pages: "103191",
      image: "/1.png",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0959440X2500209X"
    },
    {
      title: "Ab initio characterization of protein molecular dynamics with AI2BMD",
      authors: "Wang, T., He, X., Li, M., Li, Y., Bi, R., Wang, Y., ... & Liu, T. Y.",
      year: "2024",
      journal: "Nature",
      volume: "635(8040)",
      pages: "1019-1027",
      image: "/The overall pipeline of AI2BMD.webp",
      link: "https://www.nature.com/articles/s41586-024-08127-z"
    },
    {
      title: "Dynamic insights into the structural evolution of ACE2–RBD interactions through molecular dynamics simulation, Markov state modeling, and large language model mutation prediction",
      authors: "Zhou, Y., Wang, T.",
      year: "2025",
      journal: "J. Chem. Phys.",
      volume: "163(19)",
      pages: "",
      image: "/2.png",
      link: "https://pubs.aip.org/aip/jcp/article/163/19/195101/3329563/Dynamic-insights-into-the-structural-evolution-of",
      note: "JCP 2025 JCP Emerging Investigators Special Collection"
    },
    {
      title: "Enhancing geometric representations for molecules with equivariant vector-scalar interactive message passing",
      authors: "Wang, Y., Wang, T., Li, S., He, X., Li, M., Wang, Z., ... & Liu, T. Y.",
      year: "2024",
      journal: "Nature Communications",
      volume: "15(1)",
      pages: "313",
      image: "/The overall architecture of ViSNet.webp",
      link: "https://www.nature.com/articles/s41467-023-43720-2"
    }
  ];

  // Lab News 数据 - 最新4条，其中1条为招聘信息
  const labNews = [
    {
      id: 1,
      title: "Prof. Wang Receives 2025 Capital Frontier Academic Achievement Award",
      date: "December 6, 2025",
      image: "/news/image14.jpeg",
      isRecruiting: false,
      link: "/news"
    },
    {
      id: 2,
      title: "Prof. Wang's Team Reviews Advances in AI-Driven Biomolecular Simulations",
      date: "November 28, 2025",
      image: "/news/image13.png",
      isRecruiting: false,
      link: "/news"
    },
    {
      id: 3,
      title: "Prof. Wang Presents at BIOHK2025 and AI Forum in Hong Kong",
      date: "September 11, 2025",
      image: "/news/image11.jpeg",
      isRecruiting: false,
      link: "/news"
    },
    {
      id: 4,
      title: "Join Our Team - Multiple Positions Available",
      date: "Recruiting",
      image: "/news/image1.jpeg",
      isRecruiting: true,
      link: "/positions"
    }
  ];

  const [currentPublicationIndex, setCurrentPublicationIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

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
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner with Background Image */}
      <section className="relative w-full h-[50vh] min-h-[300px] max-h-[650px] md:h-[32.14vw]">
        <Image
          src="/background.png"
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
              }}>
            Empower Biological Structural Research<br />by Artificial Intelligence
          </h2>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="font-bold text-gray-900 mb-4 md:mb-6 text-left text-2xl sm:text-3xl md:text-4xl">
            Welcome to the Wang Lab
          </h2>
          <ul className="text-gray-600 text-left leading-relaxed space-y-2 md:space-y-3 list-disc list-inside text-base sm:text-lg md:text-xl lg:text-2xl">
            <li className="pl-2">An interdisciplinary team of biologists, chemists, computer scientists, software engineers, and pharmacologists.</li>
            <li className="pl-2">Advancing AI Structural Biology research for decoding life and designing molecules in a dynamic manner.</li>
          </ul>
        </div>
      </section>

      {/* Research Interest */}
      <section id="research-areas" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Research Interest</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {/* Simulation */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 aspect-[4/3]">
                  <Image
                    src="/Simulation.png"
                    alt="Simulation - AI driven biomolecular dynamics simulation"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600">Simulation</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    AI driven biomolecular dynamics simulation with <span className="font-semibold text-blue-600">accuracy</span>, <span className="font-semibold text-blue-600">efficiency</span> and <span className="font-semibold text-blue-600">generalizability</span>
                  </p>
                </div>
              </div>

              {/* Modeling */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 aspect-[4/3]">
                  <Image
                    src="/Modeling.png"
                    alt="Modeling - Biological structures encoding"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-green-600">Modeling</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Biological structures encoding by deep learning for <span className="font-semibold text-green-600">modeling</span>, <span className="font-semibold text-green-600">prediction</span>, <span className="font-semibold text-green-600">simulation</span> and <span className="font-semibold text-green-600">design</span>
                  </p>
                </div>
              </div>

              {/* Application */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 aspect-[4/3]">
                  <Image
                    src="/Application.png"
                    alt="Application - Biomechanism detection and drug design"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-purple-600">Application</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    <span className="font-semibold text-purple-600">Biomechanism detection</span> and <span className="font-semibold text-purple-600">drug design</span> in a dynamic manner
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Recent Publications</h2>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/publications">
                <BookOpen className="h-4 w-4 mr-2" />
                View All Publications
              </Link>
            </Button>
          </div>

          <div className="relative">
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
                      <Badge variant="default" className="text-xs sm:text-sm">{recentPublications[currentPublicationIndex].year}</Badge>
                      <Badge variant="secondary" className="text-xs sm:text-sm">{recentPublications[currentPublicationIndex].journal}</Badge>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight line-clamp-3">
                      {recentPublications[currentPublicationIndex].title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                      {recentPublications[currentPublicationIndex].authors}
                    </p>

                    <div className="text-xs sm:text-sm text-gray-500">
                      <span className="font-semibold">{recentPublications[currentPublicationIndex].journal}</span>
                      {recentPublications[currentPublicationIndex].volume && (
                        <>, {recentPublications[currentPublicationIndex].volume}</>
                      )}
                      {recentPublications[currentPublicationIndex].pages && (
                        <>, {recentPublications[currentPublicationIndex].pages}</>
                      )}
                    </div>

                    {recentPublications[currentPublicationIndex].note && (
                      <div className="text-xs sm:text-sm text-purple-600 font-bold mt-2">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Lab News</h2>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/news">View All News</Link>
            </Button>
          </div>

          {/* News Carousel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {labNews.map((news, index) => (
              <Card
                key={news.id}
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
                    <h3 className="font-semibold text-xs sm:text-sm line-clamp-2 mb-2 min-h-[2.5rem] sm:min-h-[2.5rem] flex items-start">
                      {news.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {news.date}
                    </p>
                    <Badge variant={news.isRecruiting ? "default" : "secondary"} className="text-xs">
                      {news.isRecruiting ? "Recruiting" : "Lab News"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
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

      </div>
  );
}
