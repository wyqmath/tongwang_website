"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Search, Filter, ExternalLink, Quote, Calendar, Users, BookOpen } from "lucide-react";
import { useState, useMemo } from "react";

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [showAllPublications, setShowAllPublications] = useState(false);

  // Complete publications data
  const allPublications = useMemo(() => [
    // 2024
    {
      id: 1,
      year: 2024,
      type: "journal",
      title: "Ab initio characterization of protein molecular dynamics with AI2BMD",
      authors: "Wang, T., He, X., Li, M., Li, Y., Bi, R., Wang, Y., Cheng, C., Shen, X., Meng, J., Zhang, H., Liu, H., Wang, Z., Li, S., Shao, B., & Liu, T. Y.",
      journal: "Nature",
      volume: "635",
      pages: "1019-1027",
      badges: [],
      borderColor: "border-blue-500"
    },
    {
      id: 2,
      year: 2024,
      type: "journal",
      title: "Overcoming the barrier of orbital-free density functional theory for molecular systems using deep learning",
      authors: "Zhang, H., Liu, S., You, J., Liu, C., Zheng, S., Lu, Z., Wang, T., Zheng, N., & Shao, B.",
      journal: "Nature Computational Science",
      volume: "4(3)",
      pages: "210-223",
      badges: [],
      borderColor: "border-purple-500"
    },
    {
      id: 3,
      year: 2024,
      type: "journal",
      title: "Enhancing geometric representations for molecules with equivariant vector-scalar interactive message passing",
      authors: "Wang, Y., Wang, T., Li, S., He, X., Li, M., Wang, Z., Zheng, N., Shao, B., & Liu, T. Y.",
      journal: "Nature Communications",
      volume: "15(1)",
      pages: "313",
      badges: ["Editors' Highlights"],
      borderColor: "border-green-500"
    },
    {
      id: 4,
      year: 2024,
      type: "conference",
      title: "Long-short-range message-passing: A physics-informed framework to capture non-local interaction for scalable molecular dynamics simulation",
      authors: "Li, Y., Wang, Y., Huang, L., Yang, H., Wei, X., Zhang, J., Wang, T., Wang, Z., Shao, B., & Liu, T. Y.",
      journal: "International Conference on Learning Representations (ICLR)",
      volume: "",
      pages: "",
      badges: ["Top-tier ML"],
      borderColor: "border-indigo-500"
    },
    {
      id: 5,
      year: 2024,
      type: "patent",
      title: "U.S. Patent Application No. 18/687,404",
      authors: "Wang, T., Shao, B., & Liu, T. Y.",
      journal: "Patent",
      volume: "",
      pages: "",
      badges: ["Patent"],
      borderColor: "border-gray-500"
    },
    {
      id: 6,
      year: 2024,
      type: "patent",
      title: "U.S. Patent Application No. 18/037,682",
      authors: "Wang, T., Shao, B., & Liu, T. Y.",
      journal: "Patent",
      volume: "",
      pages: "",
      badges: ["Patent"],
      borderColor: "border-gray-500"
    },
    {
      id: 7,
      year: 2024,
      type: "journal",
      title: "Innovative application of a novel di-d-fructofuranose 1, 2': 2, 3'-dianhydride hydrolase (DFA-IIIase) from Duffyella gerundensis A4 to burdock root to improve nutrition",
      authors: "Yu, S., Wang, Z., Li, Q., Wang, T., & Zhao, W.",
      journal: "Food & Function",
      volume: "15(2)",
      pages: "1021-1030",
      badges: [],
      borderColor: "border-yellow-500"
    },
    // 2023
    {
      id: 8,
      year: 2023,
      type: "conference",
      title: "Efficiently incorporating quintuple interactions into geometric deep learning force fields",
      authors: "Wang, Z., Liu, G., Zhou, Y., Wang, T., & Shao, B.",
      journal: "Conference on Neural Information Processing Systems (NeurIPS)",
      volume: "36",
      pages: "77043-77055",
      badges: ["Top-tier ML"],
      borderColor: "border-purple-500"
    },
    {
      id: 9,
      year: 2023,
      type: "conference",
      title: "Geometric transformer with interatomic positional encoding",
      authors: "Wang, Y., Li, S., Wang, T., Shao, B., Zheng, N., & Liu, T. Y.",
      journal: "Conference on Neural Information Processing Systems (NeurIPS)",
      volume: "36",
      pages: "55981-55994",
      badges: ["Top-tier ML"],
      borderColor: "border-blue-500"
    },
    {
      id: 10,
      year: 2023,
      type: "journal",
      title: "AIMD-Chig: Exploring the conformational space of a 166-atom protein Chignolin with ab initio molecular dynamics",
      authors: "Wang, T., He, X., Li, M., Shao, B., & Liu, T. Y.",
      journal: "Scientific Data",
      volume: "10(1)",
      pages: "549",
      badges: [],
      borderColor: "border-green-500"
    },
    {
      id: 11,
      year: 2023,
      type: "journal",
      title: "Improving machine learning force fields for molecular dynamics simulations with fine-grained force metrics",
      authors: "Wang, Z., Wu, H., Sun, L., He, X., Liu, Z., Shao, B., Wang, T., & Liu, T. Y.",
      journal: "Journal of Chemical Physics",
      volume: "159(3)",
      pages: "034102",
      badges: [],
      borderColor: "border-red-500"
    },
    {
      id: 12,
      year: 2023,
      type: "preprint",
      title: "AI2BMD: Efficient characterization of protein dynamics with ab initio accuracy",
      authors: "Wang, T., He, X., Li, M., Wang, Y., Wang, Z., Li, S., Shao, B., & Liu, T. Y.",
      journal: "bioRxiv",
      volume: "2023-07",
      pages: "",
      badges: ["Preprint"],
      borderColor: "border-gray-500"
    },
    {
      id: 13,
      year: 2023,
      type: "journal",
      title: "DSN-DDI: An accurate and generalized framework for drug-drug interaction prediction by dual-view representation learning",
      authors: "Li, Z., Zhu, S., Shao, B., Zeng, X., Wang, T., & Liu, T. Y.",
      journal: "Briefings in Bioinformatics",
      volume: "24(1)",
      pages: "bbac597",
      badges: [],
      borderColor: "border-orange-500"
    },
    // 2022
    {
      id: 14,
      year: 2022,
      type: "preprint",
      title: "An ensemble of VisNet, Transformer-M, and pretraining models for molecular property prediction in OGB Large-Scale Challenge@ Conference on Neural Information Processing Systems (NeurIPS) 2022",
      authors: "Wang, Y., Li, S., Wang, T., He, X., Shao, B., Liu, T. Y., & Wang, T.",
      journal: "arXiv",
      volume: "arXiv:2211.12791",
      pages: "",
      badges: ["Preprint"],
      borderColor: "border-gray-500"
    },
    {
      id: 15,
      year: 2022,
      type: "journal",
      title: "Stochastic lag time parameterization for Markov state models of protein dynamics",
      authors: "Gong, S., He, X., Meng, Q., Ma, Z., Shao, B., Wang, T., & Liu, T. Y.",
      journal: "The Journal of Physical Chemistry B",
      volume: "126(46)",
      pages: "9465-9475",
      badges: [],
      borderColor: "border-blue-500"
    },
    {
      id: 16,
      year: 2022,
      type: "journal",
      title: "Improved drug-target interaction prediction with intermolecular graph transformer",
      authors: "Liu, S., Wang, Y., Deng, Y., He, L., Shao, B., Yin, J., Wang, T., & Liu, T. Y.",
      journal: "Briefings in Bioinformatics",
      volume: "23(5)",
      pages: "bbac162",
      badges: [],
      borderColor: "border-green-500"
    },
    {
      id: 17,
      year: 2022,
      type: "preprint",
      title: "Tailoring molecules for protein pockets: a transformer-based generative solution for structured-based drug design",
      authors: "Wu, K., Xia, Y., Fan, Y., Deng, P., Liu, H., Wu, L., Xie, S., Wang, T., Qin, T., & Liu, T. Y.",
      journal: "arXiv",
      volume: "arXiv:2209.06158",
      pages: "",
      badges: ["Preprint"],
      borderColor: "border-gray-500"
    },
    {
      id: 18,
      year: 2022,
      type: "journal",
      title: "Loss of Spike N370 glycosylation as an important evolutionary event for the enhanced infectivity of SARS-CoV-2",
      authors: "Zhang, S., Liang, Q., He, X., Zhao, C., Ren, W., Yang, Z., Wang, Z., Ding, Q., Deng, H., Wang, T., Zhang, L., & Wang, X.",
      journal: "Cell Research",
      volume: "32(3)",
      pages: "315-318",
      badges: [],
      borderColor: "border-red-500"
    },
    {
      id: 19,
      year: 2022,
      type: "preprint",
      title: "Direct molecular conformation generation",
      authors: "Zhu, J., Xia, Y., Liu, C., Wu, L., Xie, S., Wang, Y., Wang, T., Qin, T., Zhou, W., Li, H., Liu, H., & Liu, T. Y.",
      journal: "arXiv",
      volume: "arXiv:2202.01356",
      pages: "",
      badges: ["Preprint"],
      borderColor: "border-gray-500"
    },
    {
      id: 20,
      year: 2022,
      type: "journal",
      title: "Structural insights into the SARS-CoV-2 Omicron RBD-ACE2 interaction",
      authors: "Lan, J., He, X., Ren, Y., Wang, Z., Zhou, H., Fan, S., Qi, C., Guo, A., Wang, L., Wang, T., & Wang, X.",
      journal: "Cell Research",
      volume: "32(6)",
      pages: "593-595",
      badges: [],
      borderColor: "border-red-500"
    },
    {
      id: 21,
      year: 2022,
      type: "preprint",
      title: "ViSNet: a scalable and accurate geometric deep learning potential for molecular dynamics simulation",
      authors: "Wang, Y., Li, S., He, X., Li, M., Wang, Z., Zheng, N., Shao, B., Wang, T., & Liu, T. Y.",
      journal: "arXiv",
      volume: "arXiv:2210.16518",
      pages: "",
      badges: ["Preprint"],
      borderColor: "border-gray-500"
    },
    // 2021
    {
      id: 22,
      year: 2021,
      type: "journal",
      title: "SAMF: a self-adaptive protein modeling framework",
      authors: "Ding, W., Xu, Q., Liu, S., Wang, T., Shao, B., Gong, H., & Liu, T. Y.",
      journal: "Bioinformatics",
      volume: "37(22)",
      pages: "4075-4082",
      badges: [],
      borderColor: "border-blue-500"
    },
    {
      id: 23,
      year: 2021,
      type: "journal",
      title: "Exploring the regulatory function of the N-terminal domain of SARS-CoV-2 Spike protein through molecular dynamics simulation",
      authors: "Li, Y., Wang, T., Zhang, J., Shao, B., Gong, H., Wang, Y., Wang, Z., & Liu, T. Y.",
      journal: "Advanced Theory and Simulations",
      volume: "4(10)",
      pages: "2100152",
      badges: [],
      borderColor: "border-purple-500"
    },
    {
      id: 24,
      year: 2021,
      type: "journal",
      title: "Complementing sequence-derived features with structural information extracted from fragment libraries for protein structure prediction",
      authors: "Liu, S., Wang, T., Xu, Q., Shao, B., Yin, J., & Liu, T. Y.",
      journal: "BMC Bioinformatics",
      volume: "22(1)",
      pages: "351",
      badges: [],
      borderColor: "border-green-500"
    },
    // 2019
    {
      id: 25,
      year: 2019,
      type: "preprint",
      title: "Improved fragment-based movement with LRFragLib for all-atom ab initio protein folding",
      authors: "Wang, T., Gong, H., & Shakhnovich, E. I.",
      journal: "arXiv",
      volume: "arXiv:1906.05785",
      pages: "",
      badges: ["Preprint"],
      borderColor: "border-gray-500"
    },
    {
      id: 26,
      year: 2019,
      type: "journal",
      title: "Improved fragment sampling for ab initio protein structure prediction using deep neural networks",
      authors: "Wang, T., Qiao, Y., Ding, W., Mao, W., Zhou, Y., & Gong, H.",
      journal: "Nature Machine Intelligence",
      volume: "1(8)",
      pages: "347-355",
      badges: [],
      borderColor: "border-orange-500"
    },
    // 2018
    {
      id: 27,
      year: 2018,
      type: "journal",
      title: "Identification of residue pairing in interacting β-strands from a predicted residue contact map",
      authors: "Mao, W., Wang, T., Zhang, W., & Gong, H.",
      journal: "BMC Bioinformatics",
      volume: "19(1)",
      pages: "146",
      badges: [],
      borderColor: "border-blue-500"
    },
    // 2017
    {
      id: 28,
      year: 2017,
      type: "journal",
      title: "LRFragLib: an effective algorithm to identify fragments for de novo protein structure prediction",
      authors: "Wang, T., Yang, Y., Zhou, Y., & Gong, H.",
      journal: "Bioinformatics",
      volume: "33(5)",
      pages: "677-684",
      badges: [],
      borderColor: "border-green-500"
    },
    // 2013
    {
      id: 29,
      year: 2013,
      type: "journal",
      title: "A single whey acidic protein domain containing protein (SWD) inhibits bacteria invasion and dissemination in shrimp Marsupenaeus japonicus",
      authors: "Jiang, H. S., Sun, C., Wang, T., Zhao, X. F., & Wang, J. X.",
      journal: "Fish & Shellfish Immunology",
      volume: "35(2)",
      pages: "310-318",
      badges: [],
      borderColor: "border-yellow-500"
    }
  ], []);

  // Filter publications based on search and filters
  const filteredPublications = useMemo(() => {
    return allPublications.filter(pub => {
      const matchesSearch = searchTerm === "" ||
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesYear = selectedYear === "all" || pub.year.toString() === selectedYear;
      const matchesType = selectedType === "all" || pub.type === selectedType;

      return matchesSearch && matchesYear && matchesType;
    });
  }, [searchTerm, selectedYear, selectedType, allPublications]);

  // Get unique years for filter dropdown
  const availableYears = [...new Set(allPublications.map(pub => pub.year))].sort((a, b) => b - a);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Publications</h1>
          <p className="text-xl text-muted-foreground">
            Research contributions and scholarly publications from our group
          </p>
        </div>
        
        {/* Statistics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">29</div>
                <p className="text-xs text-muted-foreground">Total Publications</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Quote className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">861</div>
                <p className="text-xs text-muted-foreground">Total Citations</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">17</div>
                <p className="text-xs text-muted-foreground">H-Index</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">19</div>
                <p className="text-xs text-muted-foreground">I10-Index</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Publications / Editors' Highlights */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <span className="text-2xl mr-2">⭐</span>
              Featured Publications & Editors' Highlights
            </CardTitle>
            <CardDescription>
              Selected high-impact publications and editor-highlighted works from our research group
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nature Paper */}
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="bg-blue-600 text-white">Nature</Badge>
                    <Badge variant="outline">2024</Badge>
                  </div>
                  <h4 className="font-semibold text-sm mb-2 leading-tight">
                    Ab initio characterization of protein molecular dynamics with AI2BMD
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    <strong>Wang, T.</strong>, He, X., Li, M., Li, Y., Bi, R., Wang, Y., Cheng, C., Shen, X., Meng, J., Zhang, H., Liu, H., Wang, Z., Li, S., Shao, B., & Liu, T. Y.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Nature Communications Paper */}
              <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="bg-green-600 text-white">Nature Communications</Badge>
                    <Badge variant="outline">2024</Badge>
                  </div>
                  <h4 className="font-semibold text-sm mb-2 leading-tight">
                    Enhancing geometric representations for molecules with equivariant vector-scalar interactive message passing
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    Wang, Y., <strong>Wang, T.</strong>, Li, S., He, X., Li, M., Wang, Z., Zheng, N., Shao, B., & Liu, T. Y.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge variant="destructive" className="text-xs">Editors' Highlights</Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Nature Computational Science Paper */}
              <Card className="border-2 border-purple-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="bg-purple-600 text-white">Nature Computational Science</Badge>
                    <Badge variant="outline">2024</Badge>
                  </div>
                  <h4 className="font-semibold text-sm mb-2 leading-tight">
                    Overcoming the barrier of orbital-free density functional theory for molecular systems using deep learning
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    Zhang, H., Liu, S., You, J., Liu, C., Zheng, S., Lu, Z., <strong>Wang, T.</strong>, Zheng, N., & Shao, B.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Nature Machine Intelligence Paper */}
              <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="bg-orange-600 text-white">Nature Machine Intelligence</Badge>
                    <Badge variant="outline">2019</Badge>
                  </div>
                  <h4 className="font-semibold text-sm mb-2 leading-tight">
                    Improved fragment sampling for ab initio protein structure prediction using deep neural networks
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    <strong>Wang, T.</strong>, Qiao, Y., Ding, W., Mao, W., Zhou, Y., & Gong, H.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 pt-4 border-t text-center">
              <Button variant="outline">
                <BookOpen className="h-4 w-4 mr-2" />
                View All Publications Below
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filter and Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filter & Search
            </CardTitle>
            <CardDescription>
              Found {filteredPublications.length} publication{filteredPublications.length !== 1 ? 's' : ''}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search publications by title, author, or journal..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Years</option>
                    {availableYears.map(year => (
                      <option key={year} value={year.toString()}>{year}</option>
                    ))}
                  </select>

                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All Types</option>
                    <option value="journal">Journal</option>
                    <option value="conference">Conference</option>
                    <option value="preprint">Preprint</option>
                    <option value="patent">Patent</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Quick filters:</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchTerm("Wang, T.")}
                  className="h-7 text-xs"
                >
                  First Author
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedYear("2024")}
                  className="h-7 text-xs"
                >
                  Recent (2024)
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedType("journal")}
                  className="h-7 text-xs"
                >
                  Journal Only
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedYear("all");
                    setSelectedType("all");
                  }}
                  className="h-7 text-xs"
                >
                  Clear All
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Publications List */}
        <div className="space-y-8">
          {filteredPublications.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No publications found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or filters
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedYear("all");
                    setSelectedType("all");
                  }}
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Group publications by year */}
              {(() => {
                // Limit to first 10 publications if not showing all
                const displayedPublications = showAllPublications ? filteredPublications : filteredPublications.slice(0, 10);

                return availableYears.map(year => {
                  const yearPublications = displayedPublications.filter(pub => pub.year === year);
                  if (yearPublications.length === 0) return null;

                return (
                  <div key={year}>
                    <h2 className="text-2xl font-semibold mb-6 flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      {year}
                    </h2>

                    <div className="space-y-4">
                      {yearPublications.map(pub => (
                        <div key={pub.id} className={`border-l-4 ${pub.borderColor} pl-4 py-2`}>
                          <h4 className="font-semibold text-base mb-1">
                            {pub.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            <span dangerouslySetInnerHTML={{
                              __html: pub.authors.replace(/Wang, T\./g, '<strong>Wang, T.</strong>')
                            }} />
                            {pub.volume && ` (${pub.year}). `}
                            <em>{pub.journal}</em>
                            {pub.volume && `, ${pub.volume}`}
                            {pub.pages && `, ${pub.pages}`}.
                          </p>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{pub.journal}</Badge>
                            {pub.badges.map(badge => {
                              // Filter out Breakthrough and High Impact badges
                              if (badge === "Breakthrough" || badge === "High Impact") {
                                return null;
                              }
                              return (
                                <Badge
                                  key={badge}
                                  variant={badge === "Editors' Highlights" ? "destructive" : "outline"}
                                >
                                  {badge}
                                </Badge>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  );
                });
              })()}

              {/* Show more button if not showing all publications */}
              {!showAllPublications && filteredPublications.length > 10 && (
                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setShowAllPublications(true)}
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Complete Publication List
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Showing first 10 publications - Total: {allPublications.length} publications (2013-2024)
                  </p>
                </div>
              )}
            </>
          )}
        </div>



      </div>
    </div>
  );
}
