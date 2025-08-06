import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  MapPin,
  Mail,
  Calendar
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


        {/* Current Openings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-3 text-primary" />
            Current Openings
          </h2>

          {/* Research Assistant Position */}
          <Card className="mb-8 border-2 border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <Badge variant="default" className="mr-2">Research Assistant</Badge>
                    <Badge variant="secondary">Full-time</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">Research Assistant</CardTitle>
                  <CardDescription className="text-base">
                    Participate in deep learning model design and training, project optimization and acceleration, molecular dynamics simulation research
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    Beijing, China
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    From June 2025
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Job Responsibilities</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Participate in deep learning model design and training, project optimization and acceleration, molecular dynamics simulation research</li>
                  <li>Participate in laboratory computing resource management, maintenance, procurement, and laboratory website design</li>
                  <li>Actively participate in team work</li>
                  <li>May independently undertake research projects based on work performance</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  (Applications accepted from June 2025, long-term validity until positions are filled; candidates interested in pursuing PhD studies in our group are given priority)
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Qualifications</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Bachelor's degree or above, no specific major requirement; candidates with backgrounds in computer science, software engineering, electronics, computational chemistry, biomolecular dynamics simulation are preferred</li>
                  <li>Good English reading, writing, and communication skills; programming abilities (C++, Python, etc.) and deep learning model development skills (PyTorch, etc.)</li>
                  <li>Familiarity with biomolecular dynamics simulation (Amber, Gromacs), quantum simulation (ORCA, Gaussian, etc.), density functional theory (DFT), and strong deep learning research experience are preferred</li>
                  <li>ACM competition awards, software development, system optimization experience are preferred</li>
                  <li>Recognize the impact of AI on biological research, work rigorously and seriously, strong self-motivation, good communication and collaboration skills, good academic ethics, and integrity</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Benefits</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Enjoy Tsinghua University non-tenure track personnel benefits (including five insurances and one fund), handled according to Tsinghua University contract personnel regulations; the research group will provide living allowances and performance bonuses based on work performance</li>
                  <li>Provide Tsinghua University's first-class computing platform and interdisciplinary research environment; opportunities to attend academic conferences and international collaborations</li>
                </ul>
              </div>


            </CardContent>
          </Card>

          {/* Postdoc Position */}
          <Card className="mb-8 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <Badge variant="default" className="mr-2">Postdoc</Badge>
                    <Badge variant="secondary">Full-time</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">Postdoctoral Researcher</CardTitle>
                  <CardDescription className="text-base">
                    Computational Chemistry, Computational Biology, Computer Science and related fields
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    Beijing, China
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    From June 2025
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Job Responsibilities</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Independently conduct research projects as a core team member</li>
                  <li>Assist in supervising students and technical staff</li>
                  <li>Actively participate in team work</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  (Applications accepted from June 2025, long-term validity until positions are filled)
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Qualifications</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>PhD degree, no specific major requirement; candidates with backgrounds in computational chemistry, computational biology, biomolecular dynamics simulation, quantum simulation, computer science, software engineering, and interdisciplinary fields are preferred</li>
                  <li>Published papers as first author in high-level journals or top computer science conferences; excellent English reading, writing, and communication skills</li>
                  <li>Ability to conduct independent research; programming skills (C++ or Python, etc.) and deep learning model development capabilities (PyTorch, etc.)</li>
                  <li>Familiarity with biomolecular dynamics simulation (Amber, Gromacs), quantum simulation (ORCA, Gaussian, etc.), density functional theory (DFT), and strong deep learning research experience are preferred</li>
                  <li>Recognize the impact of AI on biological research, work rigorously and seriously, strong self-motivation, good communication and collaboration skills, good academic ethics, and integrity</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Benefits</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Enjoy national and Tsinghua University postdoctoral benefits; support applications for various postdoctoral funding programs including Tsinghua-PKU Center for Life Sciences Postdoctoral Fund, Beijing Frontier Research Center for Biological Structure "Excellence Scholar", Tsinghua University "Shuimu Scholar" program</li>
                  <li>Support postdoctoral fund and National Natural Science Foundation applications; the research group will provide living allowances and performance bonuses based on work performance</li>
                  <li>Tsinghua University provides excellent educational resources (Tsinghua kindergarten, primary school, etc., subject to Beijing policies) and rentable postdoctoral apartments. Postdocs also enjoy household registration transfer policies for themselves and family members upon completion</li>
                  <li>Provide Tsinghua University's first-class computing platform and interdisciplinary research environment</li>
                </ul>
              </div>


            </CardContent>
          </Card>
        </section>

        {/* Application Process */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Mail className="mr-2 text-green-600" />
                How to Apply
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Research Assistant Application Materials</h4>
                <p className="text-muted-foreground mb-3">
                  Please send the following materials to <strong>tongwang@mail.tsinghua.edu.cn</strong> (Email subject: Research Assistant Application + Name)
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Detailed resume (including research experience and achievements)</li>
                  <li>Personal application letter (personal statement, application reasons, research plans and interests)</li>
                  <li>Contact information of 1-2 references (one should be undergraduate advisor or master's supervisor)</li>
                  <li>Other materials demonstrating research and work capabilities</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3">Postdoctoral Application Materials</h4>
                <p className="text-muted-foreground mb-3">
                  Please send the following materials to <strong>tongwang@mail.tsinghua.edu.cn</strong> (Email subject: Postdoc Application + Name)
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Detailed resume (including research experience and achievements)</li>
                  <li>Personal application letter (brief personal statement, application reasons, research summary and plans)</li>
                  <li>Contact information of 2-3 references (one should be PhD supervisor)</li>
                  <li>Other materials demonstrating research capabilities (representative publications, awards, etc.)</li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  For suitable candidates, we will contact you promptly and arrange interviews. This recruitment is long-term and valid until positions are filled.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
