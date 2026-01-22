import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Wrench } from "lucide-react";
import { getSoftwareData } from "@/lib/data";
import type { Software } from "@/types";

export default function SoftwarePage() {
  const data = getSoftwareData();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{data.pageTitle}</h1>
          <p className="text-xl text-muted-foreground">
            {data.pageSubtitle}
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
              {data.comingSoonMessage}
            </p>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Stay tuned for updates on our latest software releases and documentation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Software Preview Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.software.map((sw: Software) => (
            <Card key={sw.id} className="border-dashed">
              <CardHeader>
                <CardTitle className="text-lg">{sw.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {sw.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

