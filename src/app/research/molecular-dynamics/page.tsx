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
                Our research revolutionizes biomolecular dynamics simulation by developing AI-driven methods
                that achieve ab initio accuracy with unprecedented computational efficiency. We have created
                AI2BMD, the first artificial intelligence-based ab initio biomolecular dynamics system capable
                of simulating full-atom large biomolecules (&gt;10,000 atoms) with quantum chemical accuracy while
                reducing computational time by several orders of magnitude compared to density functional theory.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach combines protein fragmentation schemes with machine learning force fields to bridge
                the fundamental gap between fast classical molecular dynamics and accurate quantum chemistry methods.
                This enables exploration of protein conformational dynamics, folding processes, and thermodynamic
                properties with chemical accuracy at timescales previously impossible to achieve.
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
                  AI2BMD System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Revolutionary AI-based ab initio biomolecular dynamics system that enables
                  full-atom simulation of large biomolecules (&gt;10,000 atoms) with quantum
                  chemical accuracy and orders of magnitude speedup.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Protein fragmentation schemes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Machine learning force fields
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Ab initio accuracy at classical speed
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 text-purple-600" />
                  DFT-Level Datasets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive ab initio molecular dynamics datasets at density functional
                  theory level, providing benchmarks for machine learning force field
                  development and protein conformational space exploration.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    2M conformations of 166-atom protein
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Folded, unfolded, and metastable states
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    M06-2X/6-31G* level accuracy
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Atom className="mr-2 text-blue-600" />
                  ML Force Field Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Advanced metrics and methodologies for improving machine learning
                  force fields, addressing generalization and robustness issues in
                  molecular dynamics simulations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Fine-grained force metrics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Element and conformation analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Simulation stability assessment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 text-green-600" />
                  Markov State Models
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Novel stochastic methods for robust Markov state model construction,
                  enhancing the analysis of protein conformational dynamics and
                  slow biological processes.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Stochastic lag time parameterization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Poisson process sampling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Enhanced robustness for slow dynamics
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
                      <li>- Accurate binding affinity prediction</li>
                      <li>- Drug-target interaction mechanisms</li>
                      <li>- Allosteric drug design</li>
                      <li>- ADMET property prediction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Disease Understanding</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>- Protein misfolding diseases</li>
                      <li>- Cancer-related mutations</li>
                      <li>- Neurodegenerative disorders</li>
                      <li>- Metabolic pathway disruptions</li>
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
            Key Publications
          </h2>

          <div className="space-y-6">
            {/* AI2BMD Paper */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      Ab initio characterization of protein molecular dynamics with AI2BMD
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Wang, T.</strong>, He, X., Li, M., Li, Y., Bi, R., Wang, Y., Cheng, C., Shen, X., Meng, J., Zhang, H., Liu, H., Wang, Z., Li, S., Shao, B., & Liu, T. Y.
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <Badge className="bg-red-600 hover:bg-red-700">Nature</Badge>
                      <span className="text-muted-foreground">2024, 635, 1019-1027</span>
                      <Badge variant="outline" className="text-blue-700 border-blue-700">Co-first author (1st), Co-corresponding (primary)</Badge>
                      <Badge variant="outline" className="text-green-700 border-green-700">Top 10 Advances in Chinese Bioinformatics 2024</Badge>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm"><strong>Innovation:</strong> First AI-based ab initio biomolecular dynamics system enabling full-atom simulation of large biomolecules (&gt;10,000 atoms) with chemical accuracy using protein fragmentation and ML force fields</p>
                      <p className="text-sm"><strong>Contribution:</strong> Reduces computational time by several orders of magnitude compared to DFT while maintaining ab initio accuracy, enables nanosecond-scale protein dynamics with accurate 3J couplings matching NMR experiments</p>
                      <p className="text-sm"><strong>Impact:</strong> Enables precise free-energy calculations for protein folding, complements wet-lab experiments, and opens new possibilities for biomedical research previously impossible to conduct</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.nature.com/articles/s41586-024-08127-z" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AIMD-Chig Paper */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      AIMD-Chig: Exploring the conformational space of a 166-atom protein Chignolin with ab initio molecular dynamics
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Wang, T.</strong>, He, X., Li, M., Shao, B., & Liu, T. Y.
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <Badge className="bg-green-600 hover:bg-green-700">Scientific Data</Badge>
                      <span className="text-muted-foreground">2023, 10(1), 549</span>
                      <Badge variant="outline" className="text-blue-700 border-blue-700">Co-first author (1st), Co-corresponding (primary)</Badge>
                    </div>
                    <div className="bg-green-50 p-3 rounded-md">
                      <p className="text-sm"><strong>Innovation:</strong> First comprehensive DFT-level MD dataset for a real-world protein, containing 2 million conformations of 166-atom Chignolin sampled with 7.7M CPU hours at M06-2X/6-31G* level</p>
                      <p className="text-sm"><strong>Contribution:</strong> Covers complete conformational space including folded, unfolded, and metastable states, bringing DFT-level exploration from small molecules to proteins</p>
                      <p className="text-sm"><strong>Impact:</strong> Serves as benchmark for developing machine learning potentials for proteins and facilitates exploration of protein dynamics with ab initio accuracy</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.nature.com/articles/s41597-023-02465-9" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Fine-grained force metrics Paper */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      Improving machine learning force fields for molecular dynamics simulations with fine-grained force metrics
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Wang, Z., Wu, H., Sun, L., He, X., Liu, Z., Shao, B., <strong>Wang, T.</strong>, & Liu, T. Y.
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <Badge className="bg-blue-600 hover:bg-blue-700">Journal of Chemical Physics</Badge>
                      <span className="text-muted-foreground">2023, 159(3), 034102</span>
                      <Badge variant="outline" className="text-blue-700 border-blue-700">Sole corresponding author</Badge>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-md">
                      <p className="text-sm"><strong>Innovation:</strong> Systematic fine-grained force metrics from element and conformation aspects to measure MLFFs for every atom and conformation, addressing generalization and robustness issues</p>
                      <p className="text-sm"><strong>Contribution:</strong> Comprehensive evaluation of state-of-the-art MLFFs (ET, NequIP, ViSNet) on molecules ranging from 21-166 atoms, analyzing relationship between force metrics and simulation stability</p>
                      <p className="text-sm"><strong>Impact:</strong> Enables improved MLFF performance through guided training with force metrics as loss functions, fine-tuning, and recruiting additional unexplored data</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://pubs.aip.org/aip/jcp/article-abstract/159/3/035101/2902663/Improving-machine-learning-force-fields-for" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stochastic lag time Paper */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      Stochastic lag time parameterization for Markov state models of protein dynamics
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Gong, S., He, X., Meng, Q., Ma, Z., Shao, B., <strong>Wang, T.</strong>, & Liu, T. Y.
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <Badge className="bg-purple-600 hover:bg-purple-700">Journal of Physical Chemistry B</Badge>
                      <span className="text-muted-foreground">2022, 126(46), 9465-9475</span>
                      <Badge variant="outline" className="text-blue-700 border-blue-700">Co-corresponding (primary)</Badge>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-md">
                      <p className="text-sm"><strong>Innovation:</strong> Novel stochastic method using Poisson process to generate perturbative lag times for sub-trajectory sampling, replacing fixed lag time approach in MSM construction</p>
                      <p className="text-sm"><strong>Contribution:</strong> Significantly increases robustness and power of constructed MSMs without disturbing Markovian properties, validated on double-well system, WW domain, BPTI, and RBD-ACE2 complex</p>
                      <p className="text-sm"><strong>Impact:</strong> Superior performance amplified for slow dynamic modes in complex biological processes, enabling more robust protein dynamics analysis</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jpcb.2c03711" target="_blank" rel="noopener noreferrer">
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
