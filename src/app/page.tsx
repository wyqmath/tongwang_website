"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {

  // 图片轮播数据
  const carouselImages = [
    {
      src: "/Geoformer Architecture.png",
      alt: "Geoformer Architecture",
      title: "Geoformer Architecture",
      description: "Advanced geometric transformer architecture for molecular structure analysis"
    },
    {
      src: "/The overall architecture of ViSNet.webp",
      alt: "ViSNet Architecture",
      title: "ViSNet Architecture",
      description: "The overall architecture of ViSNet for molecular property prediction"
    },
    {
      src: "/The overall pipeline of AI2BMD.webp",
      alt: "AI2BMD Pipeline",
      title: "AI2BMD Pipeline",
      description: "The overall pipeline of AI2BMD for biomolecular dynamics simulation"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000); // 每5秒切换一次

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % carouselImages.length
    );
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner with Background Image */}
      <section className="relative w-full">
        <div className="relative w-full">
          <Image
            src="/background.png"
            alt="Research Background"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* Banner Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <h2 className="font-bold text-white text-center max-w-4xl mx-auto leading-tight drop-shadow-lg" style={{ fontSize: '3.5vw' }}>
              Empower Biological Structural Research by Artificial Intelligence
            </h2>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-bold text-gray-900 mb-6 text-left" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>
              Welcome to the Wang Lab
            </h2>
            <ul className="text-gray-600 text-left leading-relaxed space-y-2 list-disc list-inside" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)' }}>
              <li>An interdisciplinary team of biologists, chemists, computer scientists, software engineers, and pharmacologists.</li>
              <li>Advancing AI Structural Biology research for decoding life and designing molecules in a dynamic manner.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Interest */}
      <section id="research-areas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Research Interest</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* System */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/System.png"
                    alt="System - AI driven biomolecular dynamics simulation"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-sm font-medium leading-relaxed">
                      AI driven biomolecular dynamics simulation with accuracy, efficiency and generalizability
                    </p>
                  </div>
                </div>
              </div>

              {/* Modeling */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/Modeling.png"
                    alt="Modeling - Biological structures encoding"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-sm font-medium leading-relaxed">
                      Biological structures encoding by deep learning for modeling, prediction, simulation and design
                    </p>
                  </div>
                </div>
              </div>

              {/* Application */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src="/Application.png"
                    alt="Application - Biomechanism detection and drug design"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-sm font-medium leading-relaxed">
                      Biomechanism detection and drug design in a dynamic manner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Research Highlights</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our cutting-edge research architectures and methodologies
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl bg-gray-100">
                <Image
                  src={carouselImages[currentImageIndex].src}
                  alt={carouselImages[currentImageIndex].alt}
                  fill
                  className="object-contain transition-opacity duration-500"
                  priority
                />

                {/* 导航按钮 */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* 指示器 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? 'bg-primary scale-110'
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* 图片描述 */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {carouselImages[currentImageIndex].title}
                </h3>
                <p className="text-muted-foreground">
                  {carouselImages[currentImageIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Latest News</h2>
              <Button variant="outline" asChild>
                <Link href="/news">View All News</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Badge variant="default" className="mr-2">Recognition</Badge>
                    <Badge variant="secondary">Bioinformatics</Badge>
                  </div>
                  <CardTitle className="text-lg">
                    Top 10 Advances in Chinese Bioinformatics for 2024
                  </CardTitle>
                  <CardDescription className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    2024
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Outstanding contribution to bioinformatics research in China
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Chinese Society for Bioinformatics</Badge>
                    <Badge variant="outline">Top 10 Advances</Badge>
                    <Badge variant="outline">Bioinformatics</Badge>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Link href="https://gpb.big.ac.cn/news/1022" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in our research or potential collaboration?
              We'd love to hear from you.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
