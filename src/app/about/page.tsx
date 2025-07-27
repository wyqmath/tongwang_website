import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Professor Tong Wang</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Principal Investigator & Research Group Leader
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="secondary">Machine Learning</Badge>
            <Badge variant="secondary">Artificial Intelligence</Badge>
            <Badge variant="secondary">Data Science</Badge>
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
              Professor Tong Wang is a distinguished researcher and educator in the fields of
              machine learning and artificial intelligence. He currently serves as a Professor
              in the Department of Computer Science at [University Name], where he leads a
              dynamic research group focused on advancing the theoretical foundations and
              practical applications of AI systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Wang received his Ph.D. in Computer Science from [University Name] in [Year],
              where his dissertation work on [Research Topic] laid the groundwork for his
              subsequent research contributions. Prior to his current position, he held
              research positions at [Previous Institution] and completed postdoctoral
              research at [Postdoc Institution].
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His research has been published in top-tier venues including Nature, Science,
              ICML, NeurIPS, and ICLR, with over [X] publications and [Y] citations.
              Dr. Wang's work has been recognized with several prestigious awards and has
              led to practical applications in healthcare, autonomous systems, and
              scientific discovery.
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
              The Tong Wang Research Group is a vibrant and collaborative environment
              that brings together researchers from diverse backgrounds to tackle
              challenging problems in machine learning and artificial intelligence.
              Our group consists of PhD students, Master's students, postdoctoral
              researchers, and visiting scholars.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <h4 className="font-semibold mb-2">Laboratory Facilities</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• High-performance computing cluster with GPU acceleration</li>
                  <li>• Dedicated workstations for algorithm development</li>
                  <li>• Collaborative meeting and presentation spaces</li>
                  <li>• Access to university supercomputing resources</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Research Infrastructure</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cloud computing resources (AWS, Google Cloud)</li>
                  <li>• Large-scale dataset storage and management</li>
                  <li>• Specialized software and development tools</li>
                  <li>• Industry partnership computing resources</li>
                </ul>
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
              Our research spans multiple areas of machine learning and artificial
              intelligence, with a focus on developing both theoretical foundations
              and practical applications that can make a real-world impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Core</Badge>
                    Machine Learning Theory
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Developing new algorithms for optimization, generalization,
                    and robustness in machine learning systems.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Core</Badge>
                    Deep Learning
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Novel architectures, training methods, and applications
                    of deep neural networks.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Applied</Badge>
                    Computer Vision
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Image recognition, object detection, and visual understanding
                    for real-world applications.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Applied</Badge>
                    Natural Language Processing
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Language understanding, generation, and multimodal
                    language-vision systems.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Badge variant="outline" className="mr-2">Emerging</Badge>
                    AI for Science
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Applying machine learning to accelerate scientific
                    discovery in physics, chemistry, and biology.
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
