'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import the map component with no SSR
const MapComponent = dynamic(() => import('./map-component'), {
  ssr: false,
  loading: () => <div className="bg-gray-100 h-[450px] rounded-lg flex items-center justify-center">
    <p className="text-gray-600">Loading map...</p>
  </div>
});

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
              <CardDescription>
                We welcome inquiries about our research, potential collaborations,
                and opportunities to join our team.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">tongwang@mail.tsinghua.edu.cn</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">010-62794752</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Office Address</p>
                  <p className="text-muted-foreground">
                    Room A216-A, Biomedical Building<br />
                    Tsinghua University<br />
                    Haidian District, Beijing, China
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Laboratory Address</p>
                  <p className="text-muted-foreground">
                    Room A208, Biomedical Building<br />
                    Tsinghua University<br />
                    Haidian District, Beijing, China
                  </p>
                </div>
              </div>
              

            </CardContent>
          </Card>

          {/* Research Inquiries */}
          <Card>
            <CardHeader>
              <CardTitle>Research Opportunities</CardTitle>
              <CardDescription>
                Interested in joining our research group or collaborating with us?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Join Our Research Group</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  We are always looking for motivated students, postdoctoral researchers,
                  and research assistants with strong backgrounds in computer science,
                  mathematics, or related fields.
                </p>
                <Link href="/positions">
                  <Button variant="outline" size="sm">
                    View Open Positions
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Map */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Location</CardTitle>
            <CardDescription>
              Tsinghua University Biomedical Building
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MapComponent />
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                <strong>Directions:</strong> The Biomedical Building is located
                in the heart of Tsinghua University campus, easily accessible by public transportation
                and with visitor parking available nearby.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Research Areas</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about our research focus
                </p>
                <Link href="/#research-areas">
                  <Button variant="outline" size="sm">
                    About Our Research
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Latest Publications</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore our recent research contributions
                </p>
                <Link href="/publications">
                  <Button variant="outline" size="sm">
                    View Publications
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">News</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with our latest news
                </p>
                <Link href="/news">
                  <Button variant="outline" size="sm">
                    Latest News
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
