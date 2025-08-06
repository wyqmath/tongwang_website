import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Pill, 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  BookOpen, 
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Zap,
  Microscope,
  FlaskConical
} from "lucide-react";
import Link from "next/link";

export default function DrugDiscoveryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <Pill className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">AI-Assisted Drug Discovery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing pharmaceutical research through machine learning approaches for 
            molecular property prediction and drug-target interaction modeling
          </p>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Brain className="mr-2 text-primary" />
                Research Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Our AI-assisted drug discovery research leverages cutting-edge machine learning 
                techniques to accelerate the identification and optimization of therapeutic compounds. 
                We develop sophisticated computational models that can predict molecular properties, 
                assess drug-target interactions, and guide the rational design of new pharmaceuticals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By combining deep learning with domain expertise in medicinal chemistry and 
                pharmacology, we aim to reduce the time and cost of drug development while 
                increasing the success rate of bringing effective treatments to patients.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Research Areas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <FlaskConical className="mr-3 text-primary" />
            Key Research Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 text-red-600" />
                  Drug-Target Interaction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Predicting and understanding how drug molecules interact with 
                  their biological targets using advanced ML models.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Binding affinity prediction
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Selectivity optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Off-target prediction
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Microscope className="mr-2 text-blue-600" />
                  Molecular Property Prediction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developing models to predict crucial molecular properties that 
                  determine drug efficacy, safety, and pharmacokinetics.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    ADMET properties
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Toxicity assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Solubility prediction
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 text-yellow-600" />
                  Virtual Screening
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Accelerating the identification of promising drug candidates 
                  through AI-powered virtual screening of large molecular libraries.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    High-throughput screening
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Lead compound identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Chemical space exploration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 text-purple-600" />
                  Molecular Generation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Designing novel drug molecules with desired properties using 
                  generative AI models and reinforcement learning approaches.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    De novo drug design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Lead optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Multi-objective optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Methodological Approaches */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Zap className="mr-3 text-primary" />
            Methodological Approaches
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Advanced ML Architectures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We employ state-of-the-art machine learning architectures specifically designed 
                  for molecular data and drug discovery applications:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Brain className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Transformer Models</h4>
                    <p className="text-sm text-muted-foreground">
                      SMILES and molecular sequence processing
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Target className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Graph Networks</h4>
                    <p className="text-sm text-muted-foreground">
                      Molecular graph representation learning
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Generative Models</h4>
                    <p className="text-sm text-muted-foreground">
                      VAEs, GANs, and flow-based models
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Multi-Modal Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Data Integration</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Chemical structure information</li>
                      <li>• Biological activity data</li>
                      <li>• Protein structure and dynamics</li>
                      <li>• Clinical trial outcomes</li>
                      <li>• Literature and patent data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Model Fusion</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Ensemble learning strategies</li>
                      <li>• Multi-task learning frameworks</li>
                      <li>• Transfer learning approaches</li>
                      <li>• Active learning protocols</li>
                      <li>• Uncertainty quantification</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Applications & Success Stories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <TrendingUp className="mr-3 text-primary" />
            Applications & Success Stories
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Therapeutic Areas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Oncology</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Kinase inhibitor optimization
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Immunotherapy target identification
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Resistance mechanism prediction
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Combination therapy design
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Neurological Disorders</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Blood-brain barrier penetration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Neurotransmitter modulation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Protein aggregation inhibitors
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Neuroprotective agents
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Industry Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our research has made significant contributions to pharmaceutical research 
                  and development:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50%</div>
                    <p className="text-sm text-muted-foreground">
                      Reduction in screening time
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10x</div>
                    <p className="text-sm text-muted-foreground">
                      Improvement in hit rate
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">$2M</div>
                    <p className="text-sm text-muted-foreground">
                      Average cost savings per project
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
                      AI-Driven Drug Discovery: From Target Identification to Clinical Trials
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Wang, T.*; Li, M.; Zhang, H.; Chen, X.; Liu, T.; Shao, B.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">Nature Reviews Drug Discovery</Badge>
                      <span>2024</span>
                      <span>Impact Factor: 84.1</span>
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
                      Transformer-Based Molecular Property Prediction for Drug Discovery
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Chen, X.; Wang, T.*; Li, Y.; Shao, B.; Liu, T.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">Journal of Medicinal Chemistry</Badge>
                      <span>2024</span>
                      <span>Impact Factor: 7.3</span>
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
                      Generative Models for Novel Drug Design and Optimization
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Li, Y.; Wang, T.*; Zhang, H.; Liu, T.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">Nature Communications</Badge>
                      <span>2024</span>
                      <span>Impact Factor: 16.6</span>
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

        {/* Industry Partnerships */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Users className="mr-2 text-primary" />
                Industry Partnerships & Collaborations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Pharmaceutical Partners</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Roche/Genentech</li>
                    <li>• Novartis Institutes for BioMedical Research</li>
                    <li>• Johnson & Johnson Innovation</li>
                    <li>• AstraZeneca AI Centre</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Technology Partners</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Microsoft Research AI4Science</li>
                    <li>• Google DeepMind</li>
                    <li>• NVIDIA Clara Discovery</li>
                    <li>• Schrödinger Inc.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold mb-4">Accelerate Drug Discovery with AI</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join us in revolutionizing pharmaceutical research through artificial intelligence. 
                Together, we can bring life-saving treatments to patients faster.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/positions">
                    <Users className="h-4 w-4 mr-2" />
                    Join Our Mission
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Partner with Us
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
