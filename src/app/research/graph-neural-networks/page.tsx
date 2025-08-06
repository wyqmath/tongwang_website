import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Network, 
  Brain, 
  Atom, 
  TrendingUp, 
  Users, 
  BookOpen, 
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Zap,
  Target
} from "lucide-react";
import Link from "next/link";

export default function GraphNeuralNetworksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <Network className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">ML Force Fields</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Developing cutting-edge graph neural networks, geometric deep learning algorithms, and
            machine learning force fields for molecular systems and biomolecular interactions
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Brain className="mr-2 text-primary" />
                Research Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our research in this area focuses on three interconnected domains: Graph Neural Networks (GNNs)
                for molecular representation learning, Geometric Deep Learning that respects the fundamental
                symmetries of molecular systems, and Machine Learning Force Fields that bridge quantum mechanical
                accuracy with computational efficiency. By representing molecules as graphs where atoms are nodes
                and bonds are edges, we create powerful models that can capture complex molecular interactions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This comprehensive approach enables us to develop next-generation computational tools for
                molecular property prediction, interaction modeling, and dynamics simulation, with applications
                spanning from fundamental biomolecular research to practical drug discovery and materials design.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Research Areas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Network className="mr-3 text-primary" />
            Key Research Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Network className="mr-2 text-blue-600" />
                  Graph Neural Networks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developing advanced graph neural network architectures for molecular
                  representation learning and property prediction.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Message passing networks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Graph attention mechanisms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Multi-scale graph learning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 text-yellow-600" />
                  Geometric Deep Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Development of rotation and translation equivariant neural networks
                  that respect the fundamental symmetries of molecular systems.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    SE(3)-equivariant architectures
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Spherical harmonics integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Invariant feature learning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 text-red-600" />
                  ML Force Fields
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Creating machine learning-based force fields that combine quantum
                  mechanical accuracy with classical molecular dynamics efficiency.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Neural network potentials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Multi-body interactions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Transferable models
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Innovations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Zap className="mr-3 text-primary" />
            Technical Innovations
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Novel Architectures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We develop cutting-edge graph neural network architectures that push the boundaries 
                  of what's possible in molecular modeling:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Network className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Multi-Scale GNNs</h4>
                    <p className="text-sm text-muted-foreground">
                      Hierarchical representations from atoms to complexes
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Brain className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Attention Mechanisms</h4>
                    <p className="text-sm text-muted-foreground">
                      Learning important molecular interactions dynamically
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Target className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Equivariant Layers</h4>
                    <p className="text-sm text-muted-foreground">
                      Preserving molecular symmetries in predictions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Accuracy Improvements</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 50% reduction in force prediction errors</li>
                      <li>• 10x improvement in energy conservation</li>
                      <li>• State-of-the-art on QM9 benchmark</li>
                      <li>• Superior performance on MD17 dataset</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Computational Efficiency</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 100x faster than DFT calculations</li>
                      <li>• Linear scaling with system size</li>
                      <li>• GPU-optimized implementations</li>
                      <li>• Distributed training capabilities</li>
                    </ul>
                  </div>
                </div>
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
                <CardTitle>Current Applications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Drug Discovery</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Virtual screening acceleration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Lead optimization guidance
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        ADMET property prediction
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Drug-target interaction modeling
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Materials Science</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Catalyst design and optimization
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Battery material discovery
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Polymer property prediction
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Crystal structure prediction
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Future Directions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our research roadmap includes several exciting directions that will further 
                  advance the field of molecular modeling:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Methodological Advances</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Quantum-classical hybrid models</li>
                      <li>• Uncertainty quantification methods</li>
                      <li>• Active learning strategies</li>
                      <li>• Interpretable GNN architectures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Application Expansion</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Protein design and engineering</li>
                      <li>• Metabolic pathway modeling</li>
                      <li>• Environmental chemistry</li>
                      <li>• Quantum materials discovery</li>
                    </ul>
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
            Key Publications
          </h2>

          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      Enhancing geometric representations for molecules with equivariant vector-scalar interactive message passing
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Wang, Y., Wang, T., Li, S., He, X., Li, M., Wang, Z., Zheng, N., Shao, B., & Liu, T. Y.
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <Badge className="bg-orange-600 hover:bg-orange-700">Nature Communications</Badge>
                      <Badge variant="outline" className="text-purple-700 border-purple-700">Editors' Highlights</Badge>
                      <span className="text-muted-foreground">2024</span>
                      <span className="text-muted-foreground">IF: 15.7</span>
                      <span className="text-muted-foreground">15(1), 313</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      Long-short-range message-passing: A physics-informed framework to capture non-local interaction for scalable molecular dynamics simulation
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Li, Y., Wang, Y., Huang, L., Yang, H., Wei, X., Zhang, J., Wang, T., Wang, Z., Shao, B., & Liu, T. Y.
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <Badge className="bg-indigo-600 hover:bg-indigo-700">ICLR</Badge>
                      <Badge variant="outline" className="text-green-700 border-green-700">Top-tier ML</Badge>
                      <span className="text-muted-foreground">2024</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      Efficiently incorporating quintuple interactions into geometric deep learning force fields
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Wang, Z., Liu, G., Zhou, Y., Wang, T., & Shao, B.
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <Badge className="bg-red-600 hover:bg-red-700">NeurIPS</Badge>
                      <Badge variant="outline" className="text-green-700 border-green-700">Top-tier ML</Badge>
                      <span className="text-muted-foreground">2023</span>
                      <span className="text-muted-foreground">36, 77043-77055</span>
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




      </div>
    </div>
  );
}
