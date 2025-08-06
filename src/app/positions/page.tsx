import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  GraduationCap, 
  Briefcase, 
  Clock, 
  MapPin, 
  DollarSign, 
  Mail, 
  Calendar,
  CheckCircle,
  Star
} from "lucide-react";

export default function PositionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Open Positions</h1>
          <p className="text-xl text-muted-foreground">
            Join our research group and contribute to cutting-edge AI research in biomolecular structure
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Star className="mr-2 text-primary" />
                Why Join Our Research Group?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Tong Wang Research Group is at the forefront of AI-driven biomolecular structure research. 
                We offer a collaborative environment where innovation meets scientific rigor, providing 
                exceptional opportunities for career development and impactful research.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Cutting-edge Research</h4>
                    <p className="text-sm text-muted-foreground">Work on AI + biomolecular structure projects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Collaborative Environment</h4>
                    <p className="text-sm text-muted-foreground">Interdisciplinary team of experts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Career Development</h4>
                    <p className="text-sm text-muted-foreground">Mentorship and professional growth</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Publication Opportunities</h4>
                    <p className="text-sm text-muted-foreground">High-impact journals and conferences</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Current Openings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-3 text-primary" />
            Current Openings
          </h2>

          {/* Postdoc Position */}
          <Card className="mb-8 border-2 border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <Badge variant="default" className="mr-2">Featured</Badge>
                    <Badge variant="secondary">Full-time</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">Postdoctoral Research Associate</CardTitle>
                  <CardDescription className="text-base">
                    AI-driven Biomolecular Structure Research
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    Beijing, China
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    Posted: Jan 2025
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Position Overview</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We are seeking a highly motivated postdoctoral research associate to join our team 
                  working on cutting-edge AI applications in biomolecular structure prediction and 
                  drug discovery. The successful candidate will contribute to developing novel deep 
                  learning methods for understanding protein dynamics and molecular interactions.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Develop and implement AI/ML algorithms for biomolecular structure analysis</li>
                  <li>Conduct research on protein folding and molecular dynamics simulations</li>
                  <li>Collaborate with interdisciplinary team members</li>
                  <li>Publish research findings in top-tier journals and conferences</li>
                  <li>Mentor graduate students and contribute to grant writing</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Required Qualifications</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>PhD in Computer Science, Bioinformatics, Computational Biology, or related field</li>
                  <li>Strong background in machine learning and deep learning</li>
                  <li>Experience with protein structure analysis or molecular simulations</li>
                  <li>Proficiency in Python, PyTorch/TensorFlow</li>
                  <li>Strong publication record in relevant areas</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">2-3 years</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Competitive salary</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">1 position</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Research Assistant Position */}
          <Card className="mb-8 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <Badge variant="secondary" className="mr-2">Part-time/Full-time</Badge>
                    <Badge variant="outline">Entry Level</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">Research Assistant (RA)</CardTitle>
                  <CardDescription className="text-base">
                    Computational Biology and AI Research Support
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    Beijing, China
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    Posted: Jan 2025
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Position Overview</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We are looking for dedicated research assistants to support our ongoing projects 
                  in AI-driven biomolecular research. This position offers excellent opportunities 
                  for hands-on experience in computational biology and machine learning research.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Key Responsibilities</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Assist with data collection, processing, and analysis</li>
                  <li>Support development and testing of ML models</li>
                  <li>Maintain research databases and computational resources</li>
                  <li>Assist with literature reviews and technical documentation</li>
                  <li>Support lab operations and research coordination</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Required Qualifications</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Bachelor's or Master's degree in relevant field</li>
                  <li>Basic programming skills (Python preferred)</li>
                  <li>Interest in computational biology or machine learning</li>
                  <li>Strong attention to detail and organizational skills</li>
                  <li>Good communication and teamwork abilities</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Flexible</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Competitive</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">2-3 positions</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Application Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <GraduationCap className="mr-3 text-primary" />
            Application Process
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">How to Apply</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                      <p className="text-sm text-muted-foreground">Submit your application via email with required documents</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                      <p className="text-sm text-muted-foreground">Initial screening and review of applications</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                      <p className="text-sm text-muted-foreground">Interview with research team members</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                      <p className="text-sm text-muted-foreground">Final decision and offer notification</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4">Required Documents</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Detailed CV/Resume
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Cover letter explaining research interests
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Academic transcripts
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      2-3 reference letters
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                      Representative publications (if applicable)
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Mail className="mr-2 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                For questions about positions or the application process, please contact:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span className="font-medium">tongwang@mail.tsinghua.edu.cn</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>Tsinghua University, Beijing, China</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Please include "[Position Application]" in your email subject line and specify 
                which position you are applying for.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
