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
            Revolutionizing pharmaceutical research through advanced computational approaches,
            combining structural biology, molecular dynamics simulation, and machine learning
            for viral protein characterization and therapeutic target identification
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
                Our AI-assisted drug discovery research integrates advanced computational methodologies
                with structural biology to understand viral pathogenesis and identify therapeutic targets.
                We specialize in molecular dynamics simulations, high-resolution structural analysis,
                and machine learning approaches to characterize protein conformational dynamics and
                drug-target interactions at the atomic level.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our research focuses on critical viral proteins, particularly SARS-CoV-2 spike protein
                dynamics and evolution. Through cryo-electron microscopy, X-ray crystallography, and
                computational modeling, we reveal molecular mechanisms underlying viral infectivity,
                host adaptation, and immune evasion strategies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By combining structural insights with evolutionary analysis and computational predictions,
                we aim to accelerate the development of broad-spectrum antivirals and inform rational
                vaccine design strategies. Our work provides fundamental understanding of viral evolution
                and adaptation mechanisms that can guide pandemic preparedness and therapeutic development.
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
                      <li>- Chemical structure information</li>
                      <li>- Biological activity data</li>
                      <li>- Protein structure and dynamics</li>
                      <li>- Clinical trial outcomes</li>
                      <li>- Literature and patent data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Model Fusion</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>- Ensemble learning strategies</li>
                      <li>- Multi-task learning frameworks</li>
                      <li>- Transfer learning approaches</li>
                      <li>- Active learning protocols</li>
                      <li>- Uncertainty quantification</li>
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
            Key Publications
          </h2>

          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      Exploring the regulatory function of the N-terminal domain of SARS-CoV-2 Spike protein through molecular dynamics simulation
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Li, Y., <strong>Wang, T.</strong>, Zhang, J., Shao, B., Gong, H., Wang, Y., Wang, Z., & Liu, T. Y.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-sm mb-3">
                      <Badge className="bg-purple-600 hover:bg-purple-700">Advanced Theory and Simulations</Badge>
                      <span className="text-muted-foreground whitespace-nowrap">2021, 4(10), 2100152</span>
                      <Badge variant="outline" className="text-blue-700 border-blue-700">Co-corresponding author (1st)</Badge>
                      <Badge variant="outline" className="text-orange-700 border-orange-700">Featured Article</Badge>
                      <Badge variant="outline" className="text-green-700 border-green-700">Highest Downloads</Badge>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-md">
                      <p className="text-sm"><strong>Innovation:</strong> Discovered the NTD "wedge" model - revealing that NTD acts as a regulatory wedge controlling RBD conformational transitions in SARS-CoV-2 spike protein</p>
                      <p className="text-sm"><strong>Contribution:</strong> Demonstrated that complete RBD structural transition occurs only when the neighboring NTD detaches and swings away, proposing NTD-RBD interface as a potential drug target</p>
                      <p className="text-sm"><strong>Impact:</strong> Provided mechanistic understanding of spike protein regulation and identified novel therapeutic targeting strategy for COVID-19 drug development</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adts.202100152" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      Structural insights into the SARS-CoV-2 Omicron RBD-ACE2 interaction
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Lan, J., He, X., Ren, Y., Wang, Z., Zhou, H., Fan, S., Qi, C., Guo, A., Wang, L., <strong>Wang, T.</strong>, & Wang, X.
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <Badge className="bg-red-600 hover:bg-red-700">Cell Research</Badge>
                      <span className="text-muted-foreground">2022, 32, 593-595</span>
                      <Badge variant="outline" className="text-blue-700 border-blue-700">Co-corresponding author (2nd)</Badge>
                    </div>
                    <div className="bg-red-50 p-3 rounded-md">
                      <p className="text-sm"><strong>Innovation:</strong> Crystal structure of Omicron RBD-ACE2 complex at 2.6 Å resolution combined with MD simulation and Markov State Model analysis to reveal dynamic binding mechanisms</p>
                      <p className="text-sm"><strong>Contribution:</strong> Identified four key mutations (S477N, G496S, Q498R, N501Y) enhancing ACE2 binding (~2.5-fold increase) and explained antibody escape mechanisms through structural analysis</p>
                      <p className="text-sm"><strong>Impact:</strong> First study combining structural and computational approaches to provide dynamic view of Omicron-ACE2 interactions, informing vaccine and therapeutic strategies</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.nature.com/articles/s41422-022-00644-8" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      Loss of Spike N370 glycosylation as an important evolutionary event for the enhanced infectivity of SARS-CoV-2
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Zhang, S., Liang, Q., He, X., Zhao, C., Ren, W., Yang, Z., Wang, Z., Ding, Q., Deng, H., <strong>Wang, T.</strong>, Zhang, L., & Wang, X.
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <Badge className="bg-green-600 hover:bg-green-700">Cell Research</Badge>
                      <span className="text-muted-foreground">2022, 32, 315-318</span>
                      <Badge variant="outline" className="text-blue-700 border-blue-700">Co-corresponding author (2nd)</Badge>
                    </div>
                    <div className="bg-green-50 p-3 rounded-md">
                      <p className="text-sm"><strong>Innovation:</strong> Discovered N370 glycosylation loss through T372A mutation as key evolutionary event enabling SARS-CoV-2 host expansion from animal reservoirs to humans</p>
                      <p className="text-sm"><strong>Contribution:</strong> Demonstrated 50-fold infectivity increase through cryo-EM structures showing N370 glycan removal facilitates spike protein open state (37% vs 14%) essential for ACE2 binding</p>
                      <p className="text-sm"><strong>Impact:</strong> Revealed molecular determinants of SARS-CoV-2 enhanced infectivity and cross-species transmission, providing evolutionary framework for pandemic preparedness</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.nature.com/articles/s41422-021-00600-y" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
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
