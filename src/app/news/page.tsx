import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, Star, ExternalLink, Users, Award, Newspaper } from "lucide-react";

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest developments from our research group
          </p>
        </div>

        {/* Featured News */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Star className="mr-2 h-5 w-5 text-yellow-500" />
            Featured News
          </h2>
          
          <Card className="border-2 border-primary/20 mb-6">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Badge variant="default" className="mr-2">Featured</Badge>
                    <Badge variant="secondary">Grant Award</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">
                    $2.5M NSF Grant Awarded for AI Research
                  </CardTitle>
                  <CardDescription className="flex items-center text-base">
                    <Calendar className="h-4 w-4 mr-2" />
                    January 15, 2025
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    2 min read
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We are thrilled to announce that our research group has been awarded a 
                prestigious $2.5 million grant from the National Science Foundation to 
                advance our work on interpretable artificial intelligence systems. This 
                five-year grant will support groundbreaking research into making AI 
                systems more transparent and trustworthy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The funding will enable us to expand our team with new PhD students and 
                postdoctoral researchers, acquire state-of-the-art computing equipment, 
                and collaborate with leading institutions worldwide. This represents one 
                of the largest grants ever awarded to our department.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">NSF Grant</Badge>
                <Badge variant="outline">AI Research</Badge>
                <Badge variant="outline">Interpretability</Badge>
                <Badge variant="outline">$2.5M Funding</Badge>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Full Article
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  NSF Announcement
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Recent News */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Newspaper className="mr-2 h-5 w-5" />
            Recent News
          </h2>
          
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge variant="secondary" className="mr-2">Publication</Badge>
                      <Badge variant="outline">ICML 2025</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      Paper Accepted at ICML 2025
                    </CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      December 20, 2024
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      3 min read
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our latest research paper "Interpretable AI for Healthcare: A Comprehensive 
                  Framework" has been accepted for presentation at the International Conference 
                  on Machine Learning (ICML) 2025. This work, led by PhD student Maria Rodriguez, 
                  represents a significant breakthrough in making AI systems more transparent 
                  and trustworthy for medical applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The paper introduces novel techniques for explaining AI decisions in healthcare 
                  settings, which could revolutionize how medical professionals interact with 
                  AI-powered diagnostic tools.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">ICML</Badge>
                  <Badge variant="outline">Healthcare AI</Badge>
                  <Badge variant="outline">Interpretability</Badge>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Read Paper
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    ICML 2025
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge variant="secondary" className="mr-2">Award</Badge>
                      <Badge variant="outline">Student Achievement</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      PhD Student Wins Best Paper Award
                    </CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      November 30, 2024
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      2 min read
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Congratulations to our PhD student Alex Chen for winning the Best Paper 
                  Award at the International Conference on Artificial Intelligence (ICAI) 
                  2024. His work on "Advanced Optimization Techniques for Large-Scale 
                  Neural Networks" was recognized for its innovative approach and 
                  significant practical impact.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This achievement highlights the exceptional quality of research being 
                  conducted by our students and reinforces our group's reputation for 
                  producing cutting-edge work in machine learning.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Best Paper Award</Badge>
                  <Badge variant="outline">ICAI 2024</Badge>
                  <Badge variant="outline">Student Achievement</Badge>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm">
                    <Award className="h-3 w-3 mr-1" />
                    Award Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Conference
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to receive the latest news and updates 
              from our research group directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>

        {/* Archive Section */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            <Calendar className="mr-2 h-4 w-4" />
            View News Archive
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Browse our complete news archive dating back to 2020
          </p>
        </div>
      </div>
    </div>
  );
}
