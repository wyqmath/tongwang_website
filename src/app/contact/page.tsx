import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

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
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Office Address</p>
                  <p className="text-muted-foreground">
                    Room A216-1, Biomedical Building<br />
                    School of Life Sciences, Tsinghua University<br />
                    Haidian District, Beijing, China
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    By appointment
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
                <h3 className="font-semibold mb-2">Prospective Students</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  We are always looking for motivated PhD and Master's students
                  with strong backgrounds in computer science, mathematics, or
                  related fields.
                </p>
                <Button variant="outline" size="sm">
                  Application Information
                </Button>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Postdoctoral Researchers</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Opportunities available for postdoctoral researchers with
                  expertise in machine learning and artificial intelligence.
                </p>
                <Button variant="outline" size="sm">
                  Postdoc Positions
                </Button>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Collaborations</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  We welcome collaborations with industry partners and
                  researchers from other institutions.
                </p>
                <Button variant="outline" size="sm">
                  Partnership Opportunities
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Map Placeholder */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Location</CardTitle>
            <CardDescription>
              Find us on campus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Interactive campus map would be embedded here
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                <strong>Directions:</strong> The Computer Science Building is located
                in the heart of campus, easily accessible by public transportation
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
                <h3 className="font-semibold mb-2">Latest Publications</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore our recent research contributions
                </p>
                <Button variant="outline" size="sm">
                  View Publications
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Research Areas</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about our research focus
                </p>
                <Button variant="outline" size="sm">
                  About Our Research
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">News & Updates</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with our latest news
                </p>
                <Button variant="outline" size="sm">
                  Latest News
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
