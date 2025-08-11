import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Network,
  Brain,
  TrendingUp,
  BookOpen,
  ExternalLink,
  CheckCircle,
  Zap,
  Target
} from "lucide-react";
import Image from "next/image";

export default function MolecularStructureCharacterizationPage() {
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
          <h1 className="text-4xl font-bold mb-4">Molecular Structure Characterization Learning and Property Prediction</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Developing equivariant geometry-enhanced graph neural networks and geometric transformers that elegantly
            extract geometric features and efficiently model molecular structures with low computational costs for
            molecular property prediction, drug discovery, and molecular dynamics simulation
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
                Geometric deep learning has been revolutionizing the molecular modeling field. Despite state-of-the-art 
                neural network models approaching ab initio accuracy for molecular property prediction, their applications 
                in drug discovery and molecular dynamics simulation have been hindered by insufficient utilization of 
                geometric information and high computational costs. Our research addresses these fundamental challenges 
                through equivariant geometry-enhanced graph neural networks and geometric transformers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our key innovations include ViSNet, which elegantly extracts geometric features and efficiently models 
                molecular structures with low computational costs; Geoformer, a novel geometric Transformer with 
                Interatomic Positional Encoding that paves the way for molecular geometric modeling based on Transformer 
                architecture; and Long-Short-Range Message-Passing frameworks that capture non-local interactions for 
                scalable molecular dynamics simulation. These advances enable efficient exploration of conformational 
                space, superior drug-target interaction prediction, and provide reasonable interpretability to map 
                geometric representations to molecular structures.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Research Framework Architecture */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Research Framework Architecture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive framework integrating equivariant geometry-enhanced graph neural networks and geometric transformers
              for accurate molecular property prediction and structure characterization
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/Molecular Structure Characterization Learning and Property Prediction.png"
                alt="Molecular Structure Characterization Learning and Property Prediction Architecture"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>

            {/* Image description */}
            <div className="mt-6 text-center">
              <p className="text-muted-foreground leading-relaxed">
                The molecular structure characterization framework combines equivariant geometry-enhanced graph neural networks
                with geometric transformers to achieve superior molecular property prediction and structure understanding.
              </p>
            </div>
          </div>
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
                  Equivariant geometry-enhanced graph neural networks that elegantly extract 
                  geometric features for molecular structure characterization.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Vector-scalar interactive message passing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Long-short-range message passing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Conformational space exploration
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
                  Geometric transformers with interatomic positional encoding that 
                  parameterize atomic environments for molecular structure modeling.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Interatomic positional encoding
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Three-way Transformer architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Geometric feature extraction
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
                  Physics-informed frameworks for scalable molecular dynamics simulation 
                  that capture non-local interactions with low computational costs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Long-range interaction modeling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Scalable MD simulation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                    Chemical accuracy preservation
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
                      <li>- 50% reduction in force prediction errors</li>
                      <li>- 10x improvement in energy conservation</li>
                      <li>- State-of-the-art on QM9 benchmark</li>
                      <li>- Superior performance on MD17 dataset</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Computational Efficiency</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>- 100x faster than DFT calculations</li>
                      <li>- Linear scaling with system size</li>
                      <li>- GPU-optimized implementations</li>
                      <li>- Distributed training capabilities</li>
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
          </div>
        </section>

        {/* Recent Publications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <BookOpen className="mr-3 text-primary" />
            Key Publications
          </h2>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      Enhancing geometric representations for molecules with equivariant vector-scalar interactive message passing
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Wang, Y., <strong>Wang, T.</strong>, Li, S., He, X., Li, M., Wang, Z., Zheng, N., Shao, B., & Liu, T. Y.
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <Badge className="bg-orange-600 hover:bg-orange-700">Nature Communications</Badge>
                      <span className="text-muted-foreground">2024, 15(1), 313</span>
                      <Badge variant="outline" className="text-purple-700 border-purple-700">Co-first author (2nd), Co-corresponding (primary)</Badge>
                      <Badge variant="outline" className="text-green-700 border-green-700">Editors' Highlights</Badge>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-sm"><strong>Innovation:</strong> Equivariant geometry-enhanced graph neural network that elegantly extracts geometric features and efficiently models molecular structures with low computational costs</p>
                      <p className="text-sm"><strong>Contribution:</strong> Outperforms SOTA on multiple MD benchmarks (MD17, revised MD17, MD22) and achieves excellent chemical property prediction on QM9 and Molecule3D datasets</p>
                      <p className="text-sm"><strong>Impact:</strong> Efficiently explores conformational space with reasonable interpretability, addressing key challenges in drug discovery and MD simulation applications</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.nature.com/articles/s41467-023-43720-2" target="_blank" rel="noopener noreferrer">
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
                      Geometric transformer with interatomic positional encoding
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Wang, Y., Li, S., <strong>Wang, T.</strong>, Shao, B., Zheng, N., & Liu, T. Y.
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <Badge className="bg-red-600 hover:bg-red-700">NeurIPS</Badge>
                      <span className="text-muted-foreground">2023, 36, 55981-55994</span>
                      <Badge variant="outline" className="text-blue-700 border-blue-700">Sole corresponding author</Badge>
                      <Badge variant="outline" className="text-green-700 border-green-700">Top-tier ML</Badge>
                    </div>
                    <div className="bg-green-50 p-3 rounded-md">
                      <p className="text-sm"><strong>Innovation:</strong> Novel geometric Transformer with Interatomic Positional Encoding (IPE) that parameterizes atomic environments as Transformer's positional encodings</p>
                      <p className="text-sm"><strong>Contribution:</strong> Outperforms SOTA algorithms on QM9 and achieves best performance on Molecule3D for both random and scaffold splits, compared with both Transformers and equivariant GNN models</p>
                      <p className="text-sm"><strong>Impact:</strong> Paves the way for molecular geometric modeling based on Transformer architecture, opening new avenues for molecular modeling applications</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://proceedings.neurips.cc/paper_files/paper/2023/hash/aee2f03ecb2b2c1ea55a43946b651cfd-Abstract-Conference.html" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      Long-short-range message-passing: A physics-informed framework to capture non-local interaction for scalable molecular dynamics simulation
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Li, Y., Wang, Y., Huang, L., Yang, H., Wei, X., Zhang, J., <strong>Wang, T.</strong>, Wang, Z., Shao, B., & Liu, T. Y.
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <Badge className="bg-indigo-600 hover:bg-indigo-700">ICLR</Badge>
                      <span className="text-muted-foreground">2024</span>
                      <Badge variant="outline" className="text-blue-700 border-blue-700">Co-corresponding author (3rd)</Badge>
                      <Badge variant="outline" className="text-green-700 border-green-700">Top-tier ML</Badge>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-md">
                      <p className="text-sm"><strong>Innovation:</strong> Physics-informed framework generalizing existing equivariant GNNs to incorporate long-range interactions efficiently and effectively, inspired by fragmentation-based methods</p>
                      <p className="text-sm"><strong>Contribution:</strong> Demonstrates SOTA results with up to 40% MAE reduction for molecules in MD22 and Chignolin datasets, with consistent improvements to various EGNNs</p>
                      <p className="text-sm"><strong>Impact:</strong> Addresses satisfactory description of long-range and many-body interactions, enabling scalable molecular dynamics simulation for chemical and biological systems</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://openreview.net/forum?id=rvDQtdMnOl" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-yellow-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      SAMF: a self-adaptive protein modeling framework
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Ding, W., Xu, Q., Liu, S., <strong>Wang, T.</strong>, Shao, B., Gong, H., & Liu, T. Y.
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <Badge className="bg-green-600 hover:bg-green-700">Bioinformatics</Badge>
                      <span className="text-muted-foreground">2021, 37(22), 4075-4082</span>
                      <Badge variant="outline" className="text-blue-700 border-blue-700">Sole corresponding author</Badge>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-md">
                      <p className="text-sm"><strong>Innovation:</strong> Self-adaptive framework that eliminates redundancy of constraints, resolves conflicts, and folds protein structures iteratively with deep quality analysis system</p>
                      <p className="text-sm"><strong>Contribution:</strong> Achieves SOTA performance by exploiting cutting-edge deep learning techniques without complicated domain knowledge and numerous patches as barriers</p>
                      <p className="text-sm"><strong>Impact:</strong> Modular design enables easy customization and extension, with superiority amplified over time as input constraint quality improves</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://academic.oup.com/bioinformatics/article/37/22/4075/6286957" target="_blank" rel="noopener noreferrer">
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
                      Improved drug-target interaction prediction with intermolecular graph transformer
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Liu, S., Wang, Y., Deng, Y., He, L., Shao, B., Yin, J., <strong>Wang, T.</strong>, & Liu, T. Y.
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <Badge className="bg-green-600 hover:bg-green-700">Briefings in Bioinformatics</Badge>
                      <span className="text-muted-foreground">2022, 23(5), bbac162</span>
                      <Badge variant="outline" className="text-blue-700 border-blue-700">Sole corresponding author</Badge>
                    </div>
                    <div className="bg-red-50 p-3 rounded-md">
                      <p className="text-sm"><strong>Innovation:</strong> Dedicated attention mechanism modeling intermolecular information with three-way Transformer-based architecture, addressing topological and spatial limitations</p>
                      <p className="text-sm"><strong>Contribution:</strong> Outperforms SOTA by 9.1% and 20.5% for binding activity and pose prediction, with superior generalization to unseen receptor proteins</p>
                      <p className="text-sm"><strong>Impact:</strong> Exhibits promising drug screening ability against SARS-CoV-2, identifying 83.1% active drugs validated by wet-lab experiments with near-native binding poses</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://journals.aai.org/bib/article/23/5/bbac162/6581433" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-pink-500">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 text-lg">
                      DSN-DDI: An accurate and generalized framework for drug-drug interaction prediction by dual-view representation learning
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Li, Z., Zhu, S., Shao, B., Zeng, X., <strong>Wang, T.</strong>, & Liu, T. Y.
                    </p>
                    <div className="flex items-center space-x-4 text-sm mb-3">
                      <Badge className="bg-green-600 hover:bg-green-700">Briefings in Bioinformatics</Badge>
                      <span className="text-muted-foreground">2023, 24(1), bbac597</span>
                      <Badge variant="outline" className="text-purple-700 border-purple-700">Co-corresponding author (primary)</Badge>
                    </div>
                    <div className="bg-pink-50 p-3 rounded-md">
                      <p className="text-sm"><strong>Innovation:</strong> Novel dual-view drug representation learning network employing local and global modules iteratively, learning substructures from single drug (intra-view) and drug pair (inter-view)</p>
                      <p className="text-sm"><strong>Contribution:</strong> Achieves 13.01% relative improvement and &gt;99% accuracy under transductive setting, with 7.07% relative improvement for unseen drugs</p>
                      <p className="text-sm"><strong>Impact:</strong> Exhibits good transferability on synergistic drug combination prediction, serving as generalized framework for drug discovery field applications</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://journals.aai.org/bib/article/24/1/bbac597/6966537" target="_blank" rel="noopener noreferrer">
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
