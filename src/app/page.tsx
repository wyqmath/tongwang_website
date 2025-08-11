"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Tong Wang Research Group
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Pioneering AI-driven biomolecular dynamics simulation with ab initio accuracy,
              revolutionizing protein research through quantum-level precision at unprecedented scales.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/about">About PI</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/publications">View Publications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section id="research-areas" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Research Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/research/molecular-dynamics">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle>AI-Driven Molecular Dynamics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Revolutionary AI2BMD system enabling ab initio accuracy for large biomolecules
                      (&gt;10,000 atoms) with orders of magnitude speedup, bridging quantum chemistry
                      and classical molecular dynamics.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/research/molecular-structure-characterization">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle>Molecular Structure Characterization Learning and Property Prediction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Equivariant geometry-enhanced graph neural networks and geometric transformers that elegantly
                      extract geometric features and efficiently model molecular structures with low computational
                      costs for drug discovery and molecular dynamics simulation.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/research/drug-discovery">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle>AI-Assisted Drug Discovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Computational approaches for viral protein dynamics, drug-target interactions,
                      and structural insights into pathogen evolution and therapeutic target identification.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI2BMD Showcase */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">AI2BMD in Action</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Watch how our revolutionary AI2BMD system enables ab initio accuracy
                for large biomolecules with unprecedented speed and precision
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                >
                  <source
                    src="https://github.com/user-attachments/assets/912a3e5a-c465-4dc7-8c2d-9f7807cac2a7"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video description */}
              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  This animation illustrates how AI2BMD bridges quantum chemistry and classical molecular dynamics,
                  enabling ab initio accuracy for biomolecular systems with over 10,000 atoms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-gray-50 py-16">
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
      <section className="py-16">
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
