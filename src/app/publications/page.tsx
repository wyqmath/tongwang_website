import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, Filter, Download, ExternalLink, Quote, Calendar, Users, BookOpen } from "lucide-react";

export default function PublicationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Publications</h1>
          <p className="text-xl text-muted-foreground">
            Research contributions and scholarly publications from our group
          </p>
        </div>
        
        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">45</div>
                <p className="text-xs text-muted-foreground">Total Publications</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Quote className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">Total Citations</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">H-Index</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Publications (2024)</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Filter and Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filter & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search publications..."
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="default" className="cursor-pointer">All Years</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">2024</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">2023</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">2022</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">2021</Badge>
                <Separator orientation="vertical" className="h-6" />
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Journal Articles</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Conference Papers</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Book Chapters</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Preprints</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Publications List */}
        <div className="space-y-6">
          {/* 2024 Publications */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              2024
            </h2>
            
            <Card className="mb-4 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">
                      Advanced Optimization Techniques for Large-Scale Neural Networks
                    </CardTitle>
                    <CardDescription className="text-base">
                      <strong>Tong Wang</strong>, Alex Chen, Maria Rodriguez, David Kim
                    </CardDescription>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Badge variant="default">Journal</Badge>
                    <Badge variant="secondary">2024</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Journal:</strong> Nature Machine Intelligence
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Volume:</strong> 6, Pages: 123-145
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Impact Factor:</strong> 25.898
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        <strong>DOI:</strong> 10.1038/s42256-024-00123-4
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Citations:</strong> 45
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Published:</strong> March 2024
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold mb-2">Abstract</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      This paper presents novel optimization techniques specifically designed for 
                      large-scale neural networks. We introduce a new class of adaptive optimizers 
                      that significantly improve convergence rates while maintaining computational 
                      efficiency. Our methods demonstrate superior performance across various 
                      deep learning tasks, including computer vision and natural language processing.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Deep Learning</Badge>
                    <Badge variant="outline">Optimization</Badge>
                    <Badge variant="outline">Neural Networks</Badge>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">
                      <Download className="h-3 w-3 mr-1" />
                      PDF
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      DOI
                    </Button>
                    <Button size="sm" variant="outline">
                      <Quote className="h-3 w-3 mr-1" />
                      BibTeX
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-4 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">
                      Interpretable AI for Healthcare: A Comprehensive Framework
                    </CardTitle>
                    <CardDescription className="text-base">
                      Maria Rodriguez, <strong>Tong Wang</strong>, Dr. Lisa Thompson
                    </CardDescription>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Badge variant="default">Conference</Badge>
                    <Badge variant="secondary">2024</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Conference:</strong> International Conference on Machine Learning (ICML)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Pages:</strong> 1-12
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Acceptance Rate:</strong> 21.8%
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        <strong>Location:</strong> Vienna, Austria
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Citations:</strong> 23
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Published:</strong> July 2024
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold mb-2">Abstract</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We present a comprehensive framework for developing interpretable AI systems 
                      in healthcare applications. Our approach combines explainable AI techniques 
                      with domain-specific knowledge to create models that are both accurate and 
                      transparent to medical professionals.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Healthcare AI</Badge>
                    <Badge variant="outline">Interpretability</Badge>
                    <Badge variant="outline">Medical Imaging</Badge>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">
                      <Download className="h-3 w-3 mr-1" />
                      PDF
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      DOI
                    </Button>
                    <Button size="sm" variant="outline">
                      <Quote className="h-3 w-3 mr-1" />
                      BibTeX
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Slides
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Load More Section */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Publications
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Showing 2 of 45 publications
          </p>
        </div>
      </div>
    </div>
  );
}
