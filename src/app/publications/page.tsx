import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, Filter, Download, ExternalLink, Quote, Calendar, Users, BookOpen } from "lucide-react";

export default function PublicationsPage() {
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
                      <Badge variant="destructive" className="text-xs">High Impact</Badge>
                      <span className="text-xs text-muted-foreground">IF: 48.5</span>
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
                      <span className="text-xs text-muted-foreground">IF: 15.7</span>
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
                      <Badge variant="secondary" className="text-xs">Breakthrough</Badge>
                      <span className="text-xs text-muted-foreground">IF: 18.3</span>
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
                      <Badge variant="secondary" className="text-xs">Breakthrough</Badge>
                      <span className="text-xs text-muted-foreground">IF: 23.9</span>
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
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search publications..."
                      className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="default" className="cursor-pointer">All Years</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">2024</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">2023</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">2022</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">2021</Badge>
                <Separator orientation="vertical" className="h-6" />
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Journal Articles</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Conference Papers</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Book Chapters</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Preprints</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Publications List */}
        <div className="space-y-8">
          {/* 2024 Publications */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              2024
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-semibold text-base mb-1">
                  Ab initio characterization of protein molecular dynamics with AI2BMD
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Wang, T.</strong>, He, X., Li, M., Li, Y., Bi, R., Wang, Y., Cheng, C., Shen, X., Meng, J., Zhang, H., Liu, H., Wang, Z., Li, S., Shao, B., & Liu, T. Y. (2024). <em>Nature</em>, <em>635</em>, 1019-1027.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Nature</Badge>
                  <Badge variant="destructive">High Impact</Badge>
                  <Badge variant="outline">IF: 48.5</Badge>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-semibold text-base mb-1">
                  Overcoming the barrier of orbital-free density functional theory for molecular systems using deep learning
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Zhang, H., Liu, S., You, J., Liu, C., Zheng, S., Lu, Z., <strong>Wang, T.</strong>, Zheng, N., & Shao, B. (2024). <em>Nature Computational Science</em>, <em>4</em>(3), 210-223.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Nature Computational Science</Badge>
                  <Badge variant="outline">IF: 18.3</Badge>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-semibold text-base mb-1">
                  Enhancing geometric representations for molecules with equivariant vector-scalar interactive message passing
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Wang, Y., <strong>Wang, T.</strong>, Li, S., He, X., Li, M., Wang, Z., Zheng, N., Shao, B., & Liu, T. Y. (2024). <em>Nature Communications</em>, <em>15</em>(1), 313.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Nature Communications</Badge>
                  <Badge variant="destructive">Editors' Highlights</Badge>
                  <Badge variant="outline">IF: 15.7</Badge>
                </div>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4 py-2">
                <h4 className="font-semibold text-base mb-1">
                  Long-short-range message-passing: A physics-informed framework to capture non-local interaction for scalable molecular dynamics simulation
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Li, Y., Wang, Y., Huang, L., Yang, H., Wei, X., Zhang, J., <strong>Wang, T.</strong>, Wang, Z., Shao, B., & Liu, T. Y. (2024). <em>Proceedings of the International Conference on Learning Representations (ICLR)</em>.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">ICLR</Badge>
                  <Badge variant="outline">Top-tier ML</Badge>
                </div>
              </div>

              <div className="border-l-4 border-gray-500 pl-4 py-2">
                <h4 className="font-semibold text-base mb-1">
                  U.S. Patent Application No. 18/687,404
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Wang, T.</strong>, Shao, B., & Liu, T. Y. (2024).
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Patent</Badge>
                </div>
              </div>

              <div className="border-l-4 border-gray-500 pl-4 py-2">
                <h4 className="font-semibold text-base mb-1">
                  U.S. Patent Application No. 18/037,682
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Wang, T.</strong>, Shao, B., & Liu, T. Y. (2024).
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Patent</Badge>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <h4 className="font-semibold text-base mb-1">
                  Innovative application of a novel di-d-fructofuranose 1, 2′: 2, 3′-dianhydride hydrolase (DFA-IIIase) from Duffyella gerundensis A4 to burdock root to improve nutrition
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Yu, S., Wang, Z., Li, Q., <strong>Wang, T.</strong>, & Zhao, W. (2024). <em>Food & Function</em>, <em>15</em>(2), 1021-1030.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Food & Function</Badge>
                  <Badge variant="outline">IF: 5.4</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* 2023 Publications */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              2023
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-semibold text-base mb-1">
                  Efficiently incorporating quintuple interactions into geometric deep learning force fields
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Wang, Z., Liu, G., Zhou, Y., <strong>Wang, T.</strong>, & Shao, B. (2023). <em>Advances in Neural Information Processing Systems</em>, <em>36</em>, 77043-77055.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">NeurIPS</Badge>
                  <Badge variant="outline">Top-tier ML</Badge>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-semibold text-base mb-1">
                  Geometric transformer with interatomic positional encoding
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Wang, Y., Li, S., <strong>Wang, T.</strong>, Shao, B., Zheng, N., & Liu, T. Y. (2023). <em>Advances in Neural Information Processing Systems</em>, <em>36</em>, 55981-55994.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">NeurIPS</Badge>
                  <Badge variant="outline">Top-tier ML</Badge>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-semibold text-base mb-1">
                  AIMD-Chig: Exploring the conformational space of a 166-atom protein Chignolin with ab initio molecular dynamics
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Wang, T.</strong>, He, X., Li, M., Shao, B., & Liu, T. Y. (2023). <em>Scientific Data</em>, <em>10</em>(1), 549.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Scientific Data</Badge>
                  <Badge variant="outline">IF: 6.9</Badge>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4 py-2">
                <h4 className="font-semibold text-base mb-1">
                  Improving machine learning force fields for molecular dynamics simulations with fine-grained force metrics
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Wang, Z., Wu, H., Sun, L., He, X., Liu, Z., Shao, B., <strong>Wang, T.</strong>, & Liu, T. Y. (2023). <em>The Journal of Chemical Physics</em>, <em>159</em>(3), 034102.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Journal of Chemical Physics</Badge>
                  <Badge variant="outline">IF: 3.1</Badge>
                </div>
              </div>

              <div className="border-l-4 border-gray-500 pl-4 py-2">
                <h4 className="font-semibold text-base mb-1">
                  AI2BMD: Efficient characterization of protein dynamics with ab initio accuracy
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Wang, T.</strong>, He, X., Li, M., Wang, Y., Wang, Z., Li, S., Shao, B., & Liu, T. Y. (2023). <em>bioRxiv</em>, 2023-07.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">Preprint</Badge>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h4 className="font-semibold text-base mb-1">
                  DSN-DDI: An accurate and generalized framework for drug–drug interaction prediction by dual-view representation learning
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Li, Z., Zhu, S., Shao, B., Zeng, X., <strong>Wang, T.</strong>, & Liu, T. Y. (2023). <em>Briefings in Bioinformatics</em>, <em>24</em>(1), bbac597.
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">Briefings in Bioinformatics</Badge>
                  <Badge variant="outline">IF: 7.7</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Earlier Years Summary */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              2013-2022
            </h2>

            <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Selected Publications (2019-2022)</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Wang, T.</strong>, Qiao, Y., Ding, W., Mao, W., Zhou, Y., & Gong, H. (2019). <em>Nature Machine Intelligence</em>, <em>1</em>(8), 347-355.</p>
                      <p>Liu, S., Wang, Y., Deng, Y., He, L., Shao, B., Yin, J., <strong>Wang, T.</strong>, & Liu, T. Y. (2022). <em>Briefings in Bioinformatics</em>, <em>23</em>(5), bbac162.</p>
                      <p>Lan, J., He, X., Ren, Y., Wang, Z., Zhou, H., Fan, S., ..., <strong>Wang, T.</strong>, & Wang, X. (2022). <em>Cell Research</em>, <em>32</em>(6), 593-595.</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Early Career (2013-2018)</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Wang, T.</strong>, Yang, Y., Zhou, Y., & Gong, H. (2017). <em>Bioinformatics</em>, <em>33</em>(5), 677-684.</p>
                      <p>Mao, W., <strong>Wang, T.</strong>, Zhang, W., & Gong, H. (2018). <em>BMC Bioinformatics</em>, <em>19</em>(1), 146.</p>
                      <p>Jiang, H. S., Sun, C., <strong>Wang, T.</strong>, Zhao, X. F., & Wang, J. X. (2013). <em>Fish & Shellfish Immunology</em>, <em>35</em>(2), 310-318.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t text-center">
                  <Button variant="outline">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Complete Publication List
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Total: 35 publications spanning 2013-2024
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


      </div>
    </div>
  );
}
