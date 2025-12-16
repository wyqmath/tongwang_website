import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Left-Right Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 mb-12">
          {/* Left Side - Profile Photo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="https://life.tsinghua.edu.cn/__local/F/D2/87/2265FA369D1288DC194D3218CB2_BC23290E_1B676B.jpg"
              alt="Dr. Tong Wang"
              width={300}
              height={375}
              className="w-full max-w-[300px] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Information with Light Background */}
          <div className="bg-gray-50 rounded-lg p-8 space-y-6">
            {/* Name and Title */}
            <div>
              <h1 className="text-4xl font-bold mb-4">Tong Wang, PhD</h1>

              <div className="space-y-2 text-base leading-relaxed">
                <p>
                  Principal Investigator and Assistant Professor,{" "}
                  <Link
                    href="https://life.tsinghua.edu.cn/lifeen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    School of Life Sciences, Tsinghua University
                  </Link>
                </p>

                <p>
                  Principal Investigator,{" "}
                  <Link
                    href="http://www.cls.edu.cn/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    Tsinghua-Peking Center for Life Sciences
                  </Link>
                </p>

                <p>
                  Principal Investigator,{" "}
                  <Link
                    href="https://www.frcbs.tsinghua.edu.cn/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    Beijing Frontier Research Center for Biological Structure
                  </Link>
                </p>

                <p>
                  Principal Investigator,{" "}
                  <Link
                    href="https://www.biomembrane.tsinghua.edu.cn/yanjiurenyuan/1613.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    State Key Laboratory of Membrane Biology
                  </Link>
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Office Address: </span>
                <span className="text-muted-foreground">Room A216-A, Biomedical Building, Tsinghua University, Haidian District, Beijing, China</span>
              </p>

              <p>
                <span className="font-semibold">Lab Address: </span>
                <span className="text-muted-foreground">Room A208, Biomedical Building, Tsinghua University, Haidian District, Beijing, China</span>
              </p>

              <p>
                <span className="font-semibold">Phone: </span>
                <span className="text-muted-foreground">010-62794752</span>
              </p>

              <div className="pt-2">
                <Link
                  href="https://life.tsinghua.edu.cn/lifeen/info/1034/1871.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Full CV
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Brief Bio */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">🎓</span>
              Brief Bio
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Dr. Wang Tong is the Principal Investigator (PI) of the School of Life Sciences, Tsinghua University,
              Tsinghua University-Peking University Center for Life Sciences (CLS), Beijing Frontier Research Center
              for Biological Structures, and State Key Laboratory of Membrane Biology. Prior to joining Tsinghua in 2025,
              he was a Senior Researcher at Microsoft Research. He received his Ph.D. at Tsinghua University in 2019 and
              worked as a visiting scholar at Harvard University from 2016 to 2017.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His main research directions include AI-driven biomolecular dynamics simulation system (Nature, 2024),
              molecular structure modeling and prediction (Nat Commun, 2024), AI aided drug discovery (Breif Bioinform, 2023)
              and biomechanism detection via simulations (Cell Res, 2022 a,b). Over the past five years, as first or
              corresponding author, he has published more than 30 papers in journals such as Nature, Nat Mach Intell,
              and top computer science conference, such as NeurlPS and ICLR. He also holds more than ten patents in China
              and the United States. He has been working as Committee Member of Chinese Bioinformatics Society in protein
              structure prediction and simulation since it launched.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Wang has received Capital Frontier Academic Achievement Award (2025), Top Ten Advances in Chinese
              Bioinformatics Award (2024), Champion in First Global AI Drug Development Competition (2023), Top Downloaded
              Article Award (2022) and honored reviewer in ACS journals (2022, 2023).
            </p>

            
          </CardContent>
        </Card>

        {/* Research Group and Laboratories */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">🔬</span>
              Research Group and Laboratories
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              The Tong Wang Research Group focuses on "Artificial Intelligence + Biomolecular Structure,"
              bringing together researchers from computational biology, machine learning, and structural
              biology to tackle challenging problems in biomolecular dynamics and drug discovery.
              Our group consists of PhD students, Master's students, postdoctoral researchers, and
              visiting scholars working on cutting-edge AI applications in life sciences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="font-semibold mb-2">Laboratory Facilities</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>- High-performance computing cluster for molecular simulations</li>
                  <li>- GPU workstations for deep learning model training</li>
                  <li>- Access to Tsinghua University supercomputing resources</li>
                  <li>- Collaborative workspace in Biomedical Building A216-1</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Research Environment</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>- Weekly group meetings and journal clubs</li>
                  <li>- Collaboration with Microsoft Research and industry partners</li>
                  <li>- International research exchange programs</li>
                  <li>- Access to cutting-edge molecular datasets and simulation tools</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education and Career */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">🎓</span>
              Education and Career
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Badge variant="secondary" className="mr-2">Career</Badge>
                Professional Experience
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Assistant Professor</p>
                    <p className="text-sm text-muted-foreground">School of Life Sciences, Tsinghua University</p>
                    <p className="text-sm text-muted-foreground">Tsinghua University-Peking University Center for Life Sciences</p>
                    <p className="text-sm text-muted-foreground">Beijing Frontier Research Center for Biological Structure</p>
                  </div>
                  <Badge variant="outline">2025-Present</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Senior Researcher</p>
                    <p className="text-sm text-muted-foreground">Microsoft Research</p>
                  </div>
                  <Badge variant="outline">2019-2025</Badge>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Badge variant="secondary" className="mr-2">Education</Badge>
                Academic Background
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Ph.D. in Life Sciences</p>
                    <p className="text-sm text-muted-foreground">Tsinghua University</p>
                  </div>
                  <Badge variant="outline">2014-2019</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Ph.D. in Computational Biology</p>
                    <p className="text-sm text-muted-foreground">Harvard University</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Work as visiting a PhD student<br />
                      Research on protein 3D structure prediction in Nobel Prize lab
                    </p>
                  </div>
                  <Badge variant="outline">2016-2017</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Bachelor's Degree</p>
                    <p className="text-sm text-muted-foreground">Shandong University</p>
                  </div>
                  <Badge variant="outline">2010-2014</Badge>
                </div>
              </div>
            </div>


          </CardContent>
        </Card>

        {/* Research Interests */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">🧠</span>
              Research Interests
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Our research focuses on "Artificial Intelligence + Biomolecular Structure," utilizing deep learning
              for structural representation learning, property and interaction prediction, dynamics simulation,
              and sequence design of biological macromolecules and drug molecules to reveal the dynamic mechanisms
              of life activities and assist in drug discovery.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Core</Badge>
                    AI-Driven Molecular Dynamics
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Design and application of AI-driven biomolecular dynamics simulation
                    algorithms, including ab initio molecular dynamics with machine learning.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Core</Badge>
                    Graph Neural Networks
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Development of geometric deep learning algorithms and machine learning
                    force fields for molecular systems.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Applied</Badge>
                    AI-Assisted Drug Discovery
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Machine learning approaches for molecular property prediction,
                    drug-target interaction, and drug discovery applications.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Applied</Badge>
                    Protein Structure Prediction
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Deep learning methods for protein structure prediction,
                    conformational sampling, and dynamics analysis.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Emerging</Badge>
                    Biomolecular Design
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    AI-driven sequence design and optimization of biological
                    macromolecules for therapeutic applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Emerging</Badge>
                    Responsible AI
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Fairness, interpretability, and ethical considerations
                    in AI system development.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* Committees/Professional Groups/Services */}
        {/*
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">🤝</span>
              Committees/Professional Groups/Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Badge variant="secondary" className="mr-2">Professional</Badge>
                  Membership
                </h3>
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-lg">Coming Soon</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Badge variant="secondary" className="mr-2">Editorial</Badge>
                  Editorship
                </h3>
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-lg">Coming Soon</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Badge variant="secondary" className="mr-2">Leadership</Badge>
                  Conference Chairs/Keynote/Plenary Speakers
                </h3>
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-lg">Coming Soon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        */}

        {/* Honours/Awards/Prizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">🏆</span>
              Honours/Awards/Prizes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Badge className="mr-2">Recent</Badge>
                  Major Awards & Recognition
                </h4>
                <div className="space-y-4">


                  <div className="flex justify-between items-start p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Top 10 Advances in Chinese Bioinformatics for 2024</p>
                      <p className="text-sm text-muted-foreground">Chinese Society for Bioinformatics</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Outstanding contribution to bioinformatics research in China
                      </p>
                    </div>
                    <Badge variant="secondary">2024</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>


      </div>
    </div>
  );
}
