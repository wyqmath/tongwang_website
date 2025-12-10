import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Wrench } from "lucide-react";

export default function SoftwarePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Software</h1>
          <p className="text-xl text-muted-foreground">
            Tools and software developed by our research group
          </p>
        </div>

        {/* Coming Soon Card */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-3xl">
              <Wrench className="mr-3 h-8 w-8 text-primary" />
              Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="flex justify-center">
              <Code2 className="h-24 w-24 text-primary/40" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are currently preparing our software tools and packages for public release.
              This page will soon feature our research software, computational tools, and
              open-source packages for AI-driven biomolecular dynamics simulation.
            </p>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Stay tuned for updates on our latest software releases and documentation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Future Software Categories Preview */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="text-lg">AI2BMD Suite</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                AI-driven biomolecular dynamics simulation tools with ab initio accuracy
              </p>
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="text-lg">Molecular Analysis Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Advanced tools for molecular structure characterization and property prediction
              </p>
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="text-lg">Visualization Packages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Interactive visualization tools for biomolecular dynamics and structural analysis
              </p>
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="text-lg">Machine Learning Models</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Pre-trained models and frameworks for molecular property prediction
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

