import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
              and a researcher at the Tsinghua-Peking Center for Life Sciences and Beijing Frontier Research
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
                    <p className="text-sm text-muted-foreground">Tsinghua-Peking Center for Life Sciences</p>
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

        {/* Representative Publications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">📚</span>
              Representative Publications
            </CardTitle>
            <CardDescription>
              Selected recent publications from our research group
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-sm mb-1">
                  Ab initio characterization of protein molecular dynamics with AI2BMD
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  Wang, T.#*; He, X.#; Li, M.#; Li, Y.#; Bi, R.; Wang, Y.; Cheng, C.; Shen, X.; Meng, J.; Zhang, H.; Liu, H.; Wang, Z.; Li, S.; Shao, B.*; Liu, T.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Nature</Badge>
                  <Badge variant="outline">2024</Badge>
                  <Badge variant="outline">635, 1019-1027</Badge>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-sm mb-1">
                  Enhancing geometric representations for molecules with equivariant vector-scalar interactive message passing
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  Wang, Y.#; Wang, T.#*; Li, S.#; He, X.; Li, M.; Wang, Z.; Zheng, N.; Shao, B.; Liu, T.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Nature Communications</Badge>
                  <Badge variant="outline">2024</Badge>
                  <Badge variant="outline">15 (1), 313</Badge>
                  <Badge variant="destructive">Editors' Highlights</Badge>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-sm mb-1">
                  Long-short-range message-passing: A physics-informed framework to capture non-local interaction for scalable molecular dynamics simulation
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  Li, Y.#; Wang, Y.#; Huang, L.*; Yang, H.; Wei, X.; Zhang, J.*; Wang, T.*; Wang, Z.; Shao, B.; Liu, T.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">ICLR</Badge>
                  <Badge variant="outline">2024</Badge>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-sm mb-1">
                  Improved fragment sampling for ab initio protein structure prediction using deep neural networks
                </h4>
                <p className="text-xs text-muted-foreground mb-2">
                  Wang, T.; Qiao, Y.; Ding, W.; Mao, W.; Zhou, Y.*; Gong, H.*
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Nature Machine Intelligence</Badge>
                  <Badge variant="outline">2019</Badge>
                  <Badge variant="outline">1 (8), 347-355</Badge>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                #: Co-first author; *: Corresponding author
              </p>
              <div className="mt-2">
                <Button variant="outline" size="sm">
                  View All Publications
                </Button>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• IEEE Computer Society (Senior Member)</li>
                    <li>• Association for Computing Machinery (ACM)</li>
                    <li>• International Machine Learning Society (IMLS)</li>
                    <li>• Association for the Advancement of Artificial Intelligence (AAAI)</li>
                  </ul>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Society for Industrial and Applied Mathematics (SIAM)</li>
                    <li>• International Association for Pattern Recognition (IAPR)</li>
                    <li>• Neural Information Processing Systems Foundation</li>
                    <li>• International Conference on Learning Representations</li>
                  </ul>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Badge variant="secondary" className="mr-2">Editorial</Badge>
                  Editorship
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Journal of Machine Learning Research</p>
                      <p className="text-sm text-muted-foreground">Associate Editor</p>
                    </div>
                    <Badge variant="outline">2022-Present</Badge>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">IEEE Transactions on Pattern Analysis and Machine Intelligence</p>
                      <p className="text-sm text-muted-foreground">Editorial Board Member</p>
                    </div>
                    <Badge variant="outline">2021-Present</Badge>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Neural Networks</p>
                      <p className="text-sm text-muted-foreground">Guest Editor</p>
                    </div>
                    <Badge variant="outline">2023</Badge>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Artificial Intelligence</p>
                      <p className="text-sm text-muted-foreground">Reviewer</p>
                    </div>
                    <Badge variant="outline">2019-Present</Badge>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Badge variant="secondary" className="mr-2">Leadership</Badge>
                  Conference Chairs/Keynote/Plenary Speakers
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Conference Leadership</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm">International Conference on Machine Learning (ICML 2024)</p>
                          <p className="text-xs text-muted-foreground">Area Chair</p>
                        </div>
                        <Badge variant="outline">2024</Badge>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm">Neural Information Processing Systems (NeurIPS 2023)</p>
                          <p className="text-xs text-muted-foreground">Senior Program Committee</p>
                        </div>
                        <Badge variant="outline">2023</Badge>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm">International Conference on Learning Representations (ICLR 2023)</p>
                          <p className="text-xs text-muted-foreground">Program Committee</p>
                        </div>
                        <Badge variant="outline">2023</Badge>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Invited Talks</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm">AI for Science Symposium</p>
                          <p className="text-xs text-muted-foreground">Keynote Speaker</p>
                        </div>
                        <Badge variant="outline">2024</Badge>
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm">International Workshop on Machine Learning Theory</p>
                          <p className="text-xs text-muted-foreground">Plenary Speaker</p>
                        </div>
                        <Badge variant="outline">2023</Badge>
                      </div>
                    </div>
                  </div>
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
                      <p className="font-medium">Outstanding Research Award</p>
                      <p className="text-sm text-muted-foreground">University Excellence in Research Program</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Recognized for groundbreaking contributions to machine learning theory
                      </p>
                    </div>
                    <Badge variant="secondary">2024</Badge>
                  </div>

                  <div className="flex justify-between items-start p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Best Paper Award</p>
                      <p className="text-sm text-muted-foreground">International Conference on Machine Learning (ICML)</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        "Novel Optimization Techniques for Deep Neural Networks"
                      </p>
                    </div>
                    <Badge variant="secondary">2023</Badge>
                  </div>

                  <div className="flex justify-between items-start p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Early Career Researcher Award</p>
                      <p className="text-sm text-muted-foreground">National Science Foundation</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Five-year research grant for innovative AI research
                      </p>
                    </div>
                    <Badge variant="secondary">2022</Badge>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3">Additional Recognition</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• IEEE Computer Society Outstanding Contribution Award (2023)</li>
                    <li>• ACM SIGKDD Rising Star Award (2022)</li>
                    <li>• University Teaching Excellence Award (2021)</li>
                    <li>• Outstanding Reviewer Award - NeurIPS (2021, 2022)</li>
                  </ul>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Google Faculty Research Award (2020)</li>
                    <li>• Microsoft Research Faculty Fellowship (2019)</li>
                    <li>• Outstanding PhD Dissertation Award (2018)</li>
                    <li>• Graduate Student Research Excellence Award (2017)</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Media Publicity */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">📺</span>
              Media Publicity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <Badge variant="outline" className="mr-2">Featured</Badge>
                  Recent Media Coverage
                </h4>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">"AI Breakthrough: New Algorithm Revolutionizes Machine Learning"</h5>
                      <Badge variant="outline">2024</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Featured in Science Daily, highlighting our recent research on optimization algorithms
                    </p>
                    <div className="flex space-x-2">
                      <Badge variant="secondary">Science Daily</Badge>
                      <Badge variant="secondary">Tech News</Badge>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">"The Future of AI: Expert Insights"</h5>
                      <Badge variant="outline">2023</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Podcast interview discussing the future directions of artificial intelligence research
                    </p>
                    <div className="flex space-x-2">
                      <Badge variant="secondary">AI Podcast</Badge>
                      <Badge variant="secondary">Interview</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-3">Public Engagement</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">Media Interviews</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• IEEE Spectrum Magazine (2024)</li>
                      <li>• Nature News & Views (2023)</li>
                      <li>• MIT Technology Review (2023)</li>
                      <li>• Wired Magazine (2022)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Public Talks</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• TEDx University Talk (2024)</li>
                      <li>• Science Museum Public Lecture (2023)</li>
                      <li>• Industry AI Summit Keynote (2023)</li>
                      <li>• University Alumni Event (2022)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Social Media & Online Presence</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Google Scholar</Badge>
                  <Badge variant="outline">ResearchGate</Badge>
                  <Badge variant="outline">LinkedIn</Badge>
                  <Badge variant="outline">Twitter/X</Badge>
                  <Badge variant="outline">ORCID</Badge>
                  <Badge variant="outline">Personal Website</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
