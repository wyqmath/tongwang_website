import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Atom, 
  Zap, 
  Brain, 
  TrendingUp, 
  Users, 
  BookOpen, 
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Microscope
} from "lucide-react";
import Link from "next/link";

export default function MolecularDynamicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <Atom className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">AI-Driven Molecular Dynamics</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing biomolecular simulation through the integration of artificial intelligence 
            and quantum mechanical principles
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Brain className="mr-2 text-primary" />
                Research Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our AI-driven molecular dynamics research focuses on developing and applying cutting-edge 
                artificial intelligence algorithms to simulate biomolecular systems with unprecedented 
                accuracy and efficiency. We combine machine learning techniques with ab initio quantum 
                mechanical calculations to create next-generation simulation tools that can capture the 
                complex dynamics of biological macromolecules.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This interdisciplinary approach bridges the gap between quantum chemistry and classical 
                molecular dynamics, enabling us to study biological processes at multiple scales with 
                both quantum accuracy and computational efficiency.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Research Areas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Microscope className="mr-3 text-primary" />
            Key Research Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 text-yellow-600" />
                  Ab Initio MD with ML
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Development of machine learning-enhanced ab initio molecular dynamics 
                  methods that maintain quantum mechanical accuracy while achieving 
                  classical MD efficiency.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Neural network force fields
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Quantum ML potentials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Multi-scale modeling
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 text-purple-600" />
                  Enhanced Sampling Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  AI-powered enhanced sampling techniques to explore rare events 
                  and complex conformational landscapes in biological systems.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Reinforcement learning sampling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Variational autoencoders
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Collective variable discovery
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Atom className="mr-2 text-blue-600" />
                  Protein Folding Dynamics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Understanding protein folding mechanisms through AI-enhanced 
                  molecular simulations and deep learning analysis.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Folding pathway prediction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Misfolding mechanisms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Allosteric networks
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 text-green-600" />
                  Enzymatic Catalysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Investigating enzyme mechanisms and designing improved catalysts 
                  using AI-driven quantum mechanical simulations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Reaction mechanism elucidation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Transition state optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Enzyme design principles
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Applications & Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <TrendingUp className="mr-3 text-primary" />
            Applications & Future Prospects
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Biomedical Applications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our AI-driven molecular dynamics methods have transformative potential in 
                  understanding disease mechanisms and developing therapeutic interventions:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Drug Discovery</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Accurate binding affinity prediction</li>
                      <li>• Drug-target interaction mechanisms</li>
                      <li>• Allosteric drug design</li>
                      <li>• ADMET property prediction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Disease Understanding</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Protein misfolding diseases</li>
                      <li>• Cancer-related mutations</li>
                      <li>• Neurodegenerative disorders</li>
                      <li>• Metabolic pathway disruptions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technological Innovation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our research drives the development of next-generation computational tools 
                  and methodologies that push the boundaries of molecular simulation:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Speed Enhancement</h4>
                    <p className="text-sm text-muted-foreground">
                      1000x faster than traditional ab initio methods
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Brain className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Accuracy Preservation</h4>
                    <p className="text-sm text-muted-foreground">
                      Quantum-level accuracy with classical efficiency
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Scale Extension</h4>
                    <p className="text-sm text-muted-foreground">
                      Simulating larger systems for longer timescales
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Publications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <BookOpen className="mr-3 text-primary" />
            Recent Publications
          </h2>
          
          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">
                      Ab initio characterization of protein molecular dynamics with AI2BMD
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Wang, T.#*; He, X.#; Li, M.#; Li, Y.#; Bi, R.; Wang, Y.; Cheng, C.; Shen, X.; Meng, J.; Zhang, H.; Liu, H.; Wang, Z.; Li, S.; Shao, B.*; Liu, T.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">Nature</Badge>
                      <span>2024</span>
                      <span>Impact Factor: 64.8</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">
                      Machine Learning Enhanced Molecular Dynamics for Protein Folding
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Li, M.; Wang, T.*; Zhang, H.; Liu, T.; Shao, B.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">JACS</Badge>
                      <span>2024</span>
                      <span>Impact Factor: 15.4</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team & Collaboration */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="mr-2 text-primary" />
                Research Team & Collaborations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Current Team Members</h4>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Key Collaborations</h4>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-4">Interested in Our Research?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join us in revolutionizing molecular simulation through AI. We welcome 
                collaborations, student applications, and research partnerships.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/positions">
                    <Users className="h-4 w-4 mr-2" />
                    Join Our Team
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
