import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Dr. Tong Wang</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Assistant Professor
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary">AI + Biomolecular Structure</Badge>
            <Badge variant="secondary">Deep Learning</Badge>
            <Badge variant="secondary">Molecular Dynamics</Badge>
          </div>
        </div>

        {/* Brief Biosketch */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">👨‍🎓</span>
              Brief Biosketch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Dr. Tong Wang is an Assistant Professor at the School of Life Sciences, Tsinghua University,
              and a researcher at the Tsinghua University-Peking University Center for Life Sciences and Beijing Frontier Research
              Center for Biological Structure. His research focuses on "Artificial Intelligence + Biomolecular
              Structure," utilizing deep learning for structural representation learning, property and interaction
              prediction, dynamics simulation, and sequence design of biological macromolecules and drug molecules.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Wang received his Bachelor's degree from Shandong University (2010-2014) and his Ph.D. from
              Tsinghua University (2014-2019). He served as a Senior Researcher at Microsoft Research (2019-2025)
              before joining Tsinghua University as an Assistant Professor in 2025.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His research has been published in top-tier venues including Nature, Nature Communications,
              ICLR, and NeurIPS. His work on AI-driven molecular dynamics simulation (AI2BMD) was published
              in Nature in 2024, representing a significant breakthrough in ab initio characterization of
              protein molecular dynamics using artificial intelligence.
            </p>

            {/* Academic Links */}
            <div className="pt-4 border-t">
              <h4 className="font-semibold mb-3 text-sm">Academic Profiles</h4>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://scholar.google.com/citations?hl=zh-CN&user=ETiIfc4AAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 1024 1024">
                    <path d="M512 822.24L0 405.334 512 0z" fill="#4285F4"/>
                    <path d="M512 822.24l512-416.906L512 0z" fill="#356AC3"/>
                    <path d="M512 725.334m-298.666 0a298.666 298.666 0 1 0 597.332 0 298.666 298.666 0 1 0-597.332 0Z" fill="#A0C3FF"/>
                    <path d="M242.074 597.334c47.936-100.906 150.784-170.668 269.926-170.668s221.99 69.762 269.926 170.668H242.074z" fill="#76A7FA"/>
                  </svg>
                  <span className="text-sm font-medium">Google Scholar</span>
                </Link>

                <Link
                  href="https://openreview.net/profile?id=%7ETong_Wang2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 bg-red-50 hover:bg-red-100 rounded-md transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 1024 1024">
                    <path d="M0 750.933333V273.066667a273.066667 273.066667 0 0 1 273.066667-273.066667h477.866666a273.066667 273.066667 0 0 1 273.066667 273.066667v477.866666a273.066667 273.066667 0 0 1-273.066667 273.066667H273.066667a273.066667 273.066667 0 0 1-273.066667-273.066667z" fill="#FFFFFF"/>
                    <path d="M0 750.933333V273.066667a273.066667 273.066667 0 0 1 273.066667-273.066667h477.866666a273.066667 273.066667 0 0 1 273.066667 273.066667v477.866666a273.066667 273.066667 0 0 1-273.066667 273.066667H273.066667a273.066667 273.066667 0 0 1-273.066667-273.066667z m34.133333 0q0 98.986667 69.973334 168.96Q174.08 989.866667 273.066667 989.866667h477.866666q98.986667 0 168.96-69.973334Q989.866667 849.92 989.866667 750.933333V273.066667q0-98.986667-69.973334-168.96Q849.92 34.133333 750.933333 34.133333H273.066667Q174.08 34.133333 104.106667 104.106667 34.133333 174.08 34.133333 273.066667v477.866666z" fill="#F0F0F0"/>
                    <path d="M433.425067 417.621333l77.346133 93.457067 227.805867-267.605333c12.049067-16.042667 17.749333-24.4736 12.049066-38.126934a41.5744 41.5744 0 0 0-36.215466-25.531733 32.529067 32.529067 0 0 0-24.302934 8.942933l-256.682666 228.864z" fill="#BDB9B4"/>
                    <path d="M637.405867 462.301867L275.387733 115.029333a48.2304 48.2304 0 0 0-28.4672-17.066666 37.205333 37.205333 0 0 0-35.054933 22.528c-5.700267 13.653333-1.604267 23.2448 10.888533 41.1648l288.085334 349.5936-214.4256 263.3728c-11.3664 11.741867-15.5648 28.672-11.025067 44.373333 5.905067 14.370133 19.968 23.688533 35.498667 23.552a33.860267 33.860267 0 0 0 25.531733-12.458667l290.781867-270.336c28.910933-26.0096 29.013333-71.338667 0.2048-97.450666z" fill="#B31B1B"/>
                    <path d="M801.0752 861.218133l-290.986667-350.72-77.312-93.422933-47.445333 42.8032a70.417067 70.417067 0 0 0 0 101.205333l369.083733 355.669334c6.5536 6.826667 15.872 10.3424 25.326934 9.591466 14.472533-0.238933 27.3408-9.216 32.529066-22.766933a43.008 43.008 0 0 0-11.195733-42.325333z" fill="#BDB9B4"/>
                  </svg>
                  <span className="text-sm font-medium">OpenReview</span>
                </Link>

                <Link
                  href="https://orcid.org/0000-0002-9483-0050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 bg-green-50 hover:bg-green-100 rounded-md transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 1024 1024">
                    <path d="M334.624 587.104a612.576 612.576 0 0 1-58.88-2.208v-216.224c11.232-0.768 24.8-1.152 41.856-1.28l25.216-0.096c73.568 0 114.976 37.92 114.976 106.24 0 69.216-47.008 113.536-123.136 113.536zM896.032 0h-768a128 128 0 0 0-128 128v768a128 128 0 0 0 128 128h768a128 128 0 0 0 128-128V128a128 128 0 0 0-128-128z m-249.6 888.8l-3.808 5.76c-10.752 4.896-27.872 7.84-44.288 7.84-52.48 0-96.672-20.224-126.24-55.808-35.2-40.576-87.52-118.144-136.704-205.824-28.32 0-38.912-0.224-52.608-0.896l-6.912-0.512v144.8c0 48.768 7.84 61.92 31.616 65.504l47.104 6.4 5.536 6.4v26.336l-6.656 6.4a3323.68 3323.68 0 0 0-115.712-2.688c-24.448 0-49.888 0.64-79.584 1.632l-29.792 1.12-6.56-6.4v-26.368l5.248-6.272 34.4-6.4c24.064-4.576 32-17.44 32-65.408V426.272c0-47.968-7.936-60.896-31.872-65.44l-34.464-6.432-5.504-6.176v-26.368l6.656-6.4c52.512 1.504 105.088 1.312 157.568-0.48 31.616-0.928 50.56-1.312 73.312-1.312 114.464 0 188.544 55.68 188.544 155.392 0 70.4-53.376 138.656-124.544 159.456 39.296 68.512 88.672 135.84 132.768 184.192 26.208 28.288 56.704 46.08 84.096 46.08l6.4 6.4z m223.616-586.464c0 19.36-0.352 28.576-1.44 38.816a172.384 172.384 0 0 1-5.76 30.688c-7.936 24.576-20.608 42.24-39.904 55.424-19.2 13.088-43.808 20.192-70.4 20.192-27.232 0-50.4-6.272-69.376-18.912-19.104-12.672-32.8-31.584-40.96-56.32a104.288 104.288 0 0 1-3.84-14.688 283.872 283.872 0 0 1-4.096-40.672 1036.544 1036.544 0 0 1 0-64.64c0.48-13.6 1.824-27.232 4.192-40.608a99.84 99.84 0 0 1 3.808-14.688c8.192-24.8 21.888-43.648 40.992-56.32 18.976-12.672 42.24-18.944 69.472-18.944 13.984 0 26.656 1.664 38.048 4.96 11.36 3.328 21.504 7.84 30.432 13.728s16.512 12.672 22.912 20.48c6.304 7.68 11.52 16 15.456 24.352 3.104 5.536 1.92 11.52-4.48 15.36l-32.416 13.28c-5.984 3.328-12.032 1.152-14.976-4.736-7.936-14.56-13.568-21.536-22.016-26.88a55.232 55.232 0 0 0-32.896-8.672c-14.72 0-21.504 2.272-32.384 9.952a53.504 53.504 0 0 0-21.152 28.704c-2.4 7.296-3.84 14.848-4.352 22.528a824.832 824.832 0 0 0 0 99.84c0.512 7.68 1.952 15.232 4.352 22.528 2.784 10.592 9.472 19.712 18.688 25.6a58.56 58.56 0 0 0 34.912 10.016c12.448 0.352 24.704-3.104 35.2-9.856 8.576-5.792 14.88-14.368 17.824-24.32l1.792-6.24c1.12-3.968 2.016-8.032 2.656-12.128 0.896-5.536 1.12-10.24 1.12-22.56h-49.376l-0.128-0.224c-6.528 0-10.88-4.352-10.88-10.88v-30.08c0-6.432 4.352-10.88 10.88-10.88h97.28c6.432 0 10.88 4.448 10.88 10.88z" fill="#A1C837"/>
                  </svg>
                  <span className="text-sm font-medium">ORCID</span>
                </Link>

                <Link
                  href="https://dblp.org/pid/51/6856-14.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 1024 1024">
                    <path d="M908.798694 622.074333l-104.539656-390.798714s-6.399979-25.182917-30.718899-14.078954L534.606926 328.1343l36.699879 136.538551 46.493847 174.072427 0.415998 2.559991C620.366643 661.369203 600.715708 674.999159 600.715708 674.999159l-80.220736 37.119877 21.34293 80.636735 1.699994 4.255986c2.97599 7.263976 11.935961 25.599916 34.558886 38.814872L874.623807 1017.99803s29.022904 17.499942 22.174927-7.263976L812.323012 694.999093l79.356738-36.699879s23.899921-11.099963 17.054944-36.254881z m-321.682941 3.839987l-0.415999-2.559991L538.477913 443.299921l-28.158907-104.539656-28.573906-106.23765v-1.699995s-6.815978-25.182917-35.838882-42.653859L149.374193 6.00136S120.351289-11.498582 127.199266 13.268336L212.091987 329.830295l-79.772737 37.118877S108.416328 378.053136 115.268306 403.200053L219.803962 793.998767s6.815978 25.182917 30.718899 14.078954L569.228812 659.609209s22.174927-10.239966 17.918941-33.694889z" fill="#004F9F"/>
                  </svg>
                  <span className="text-sm font-medium">DBLP</span>
                </Link>
              </div>
            </div>
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
                  <li>• High-performance computing cluster for molecular simulations</li>
                  <li>• GPU workstations for deep learning model training</li>
                  <li>• Access to Tsinghua University supercomputing resources</li>
                  <li>• Collaborative workspace in Biomedical Building A216-1</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Research Environment</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Weekly group meetings and journal clubs</li>
                  <li>• Collaboration with Microsoft Research and industry partners</li>
                  <li>• International research exchange programs</li>
                  <li>• Access to cutting-edge molecular datasets and simulation tools</li>
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

            <Separator />

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
                <Badge variant="secondary" className="mr-2">Honors</Badge>
                Awards and Recognition
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm">Top 10 Advances in Bioinformatics in China</p>
                  <Badge variant="outline">2024</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm">Champion of the First Global AI Drug Discovery Competition</p>
                  <Badge variant="outline">2023</Badge>
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
                      <p className="font-medium">First AI Drug Development Algorithm Competition Finals</p>
                      <p className="text-sm text-muted-foreground">AI Drug Development Competition</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Recognized for innovative AI algorithms in pharmaceutical research
                      </p>
                    </div>
                    <Badge variant="secondary">2024</Badge>
                  </div>

                  <div className="flex justify-between items-start p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Top Ten Advances in Chinese Bioinformatics for 2024</p>
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
