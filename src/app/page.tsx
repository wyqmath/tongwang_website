import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
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
              Pioneering AI-driven biomolecular structure research to reveal life's dynamic
              mechanisms and accelerate drug discovery through deep learning innovations.
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
      <section className="py-16">
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
                      Design and application of AI-driven biomolecular dynamics simulation
                      algorithms, including ab initio molecular dynamics with machine learning.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/research/graph-neural-networks">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle>ML Force Fields</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Development of graph neural networks, geometric deep learning algorithms
                      and machine learning force fields for molecular systems and interactions.
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
                      Machine learning approaches for molecular property prediction,
                      drug-target interaction, and accelerating pharmaceutical research.
                    </p>
                  </CardContent>
                </Card>
              </Link>
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">New Research Grant Awarded</CardTitle>
                  <CardDescription>January 15, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our research group has been awarded a significant grant from
                    the National Science Foundation...
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Paper Accepted at ICML 2025</CardTitle>
                  <CardDescription>December 20, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our latest research on deep learning optimization has been
                    accepted for presentation at ICML 2025...
                  </p>
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
