import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Award, Trophy } from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest developments from our research group
          </p>
        </div>

        {/* Recent News */}
        <section className="mb-12">
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge variant="default" className="mr-2">Award</Badge>
                      <Badge variant="secondary">AI Drug Discovery</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      Champion of the First Global AI Drug Discovery Competition
                    </CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      2024
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* News Image */}
                <div className="mb-4">
                  <img
                    src="https://www.microsoft.com/en-us/research/wp-content/uploads/2024/08/ai-drug-rd-algorithm-competition-1.jpg"
                    alt="Champion of the First Global AI Drug Discovery Competition"
                    className="w-full h-auto object-contain rounded-lg shadow-md"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Recognized for innovative AI algorithms in pharmaceutical research
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AI Drug Discovery</Badge>
                  <Badge variant="outline">Competition Winner</Badge>
                  <Badge variant="outline">Microsoft Research</Badge>
                </div>
                <div className="flex gap-2 pt-2">
                  <Link href="https://www.microsoft.com/en-us/research/articles/ai-drug-rd-algorithm-competition/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge variant="default" className="mr-2">Recognition</Badge>
                      <Badge variant="secondary">Bioinformatics</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      Top 10 Advances in Chinese Bioinformatics for 2024
                    </CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      2024
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* News Image */}
                <div className="mb-4">
                  <img
                    src="https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-024-08127-z/MediaObjects/41586_2024_8127_Fig1_HTML.png?as=webp"
                    alt="Top 10 Advances in Chinese Bioinformatics for 2024"
                    className="w-full h-auto object-contain rounded-lg shadow-md"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Outstanding contribution to bioinformatics research in China
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Chinese Society for Bioinformatics</Badge>
                  <Badge variant="outline">Top 10 Advances</Badge>
                  <Badge variant="outline">Bioinformatics</Badge>
                </div>
                <div className="flex gap-2 pt-2">
                  <Link href="https://gpb.big.ac.cn/news/1022" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
}
