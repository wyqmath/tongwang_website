import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink, GraduationCap, Users, Briefcase } from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-muted-foreground">
            Meet the researchers driving innovation in machine learning and AI
          </p>
        </div>
        
        {/* PI Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Users className="mr-2" />
            Principal Investigator
          </h2>
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">Professor Tong Wang</CardTitle>
                  <CardDescription className="text-lg mt-2">
                    Principal Investigator & Research Group Leader
                  </CardDescription>
                </div>
                <div className="flex flex-col space-y-2">
                  <Badge variant="default">PI</Badge>
                  <Badge variant="secondary">Professor</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Professor Tong Wang leads our research group with expertise in machine learning, 
                artificial intelligence, and data science. His research focuses on developing 
                novel algorithms and theoretical foundations for AI systems with real-world impact.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Research Interests</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">AI + Biomolecular Structure</Badge>
                    <Badge variant="outline">Molecular Dynamics</Badge>
                    <Badge variant="outline">Graph Neural Networks</Badge>
                    <Badge variant="outline">Drug Discovery</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contact</h4>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2" />
                      tongwang@mail.tsinghua.edu.cn
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        <GraduationCap className="h-4 w-4 mr-1" />
                        Google Scholar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Students */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <GraduationCap className="mr-2" />
            Current Students
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Zhuoxuan Yang</CardTitle>
                    <CardDescription>Laboratory Administrator</CardDescription>
                  </div>
                  <Badge variant="secondary">Admin</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Laboratory administrator responsible for managing lab operations,
                  coordinating research activities, and supporting team members.
                </p>
                <div>
                  <h5 className="font-medium text-sm mb-1">Research Areas</h5>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">AI + Biomolecular Structure</Badge>
                    <Badge variant="outline">Molecular Dynamics</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We are always looking for motivated students and researchers to join our group. 
            If you are passionate about machine learning and AI research, we would love to hear from you.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/positions">
              <Button size="lg">
                <Briefcase className="mr-2 h-4 w-4" />
                Positions
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
