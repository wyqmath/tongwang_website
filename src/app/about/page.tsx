import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Left-Right Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 mb-12">
          {/* Left Side - Profile Photo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="https://life.tsinghua.edu.cn/__local/F/D2/87/2265FA369D1288DC194D3218CB2_BC23290E_1B676B.jpg"
              alt="Dr. Tong Wang"
              width={300}
              height={375}
              className="w-full max-w-[300px] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Information with Light Background */}
          <div className="bg-gray-50 rounded-lg p-8 space-y-6">
            {/* Name and Title */}
            <div>
              <h1 className="text-4xl font-bold mb-4">Tong Wang, PhD</h1>

              <div className="space-y-2 text-base leading-relaxed">
                <p>
                  Principal Investigator and Assistant Professor,{" "}
                  <Link
                    href="https://life.tsinghua.edu.cn/lifeen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    School of Life Sciences, Tsinghua University
                  </Link>
                </p>

                <p>
                  Principal Investigator,{" "}
                  <Link
                    href="http://www.cls.edu.cn/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    Tsinghua-Peking Center for Life Sciences
                  </Link>
                </p>

                <p>
                  Principal Investigator,{" "}
                  <Link
                    href="https://www.frcbs.tsinghua.edu.cn/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    Beijing Frontier Research Center for Biological Structure
                  </Link>
                </p>

                <p>
                  Principal Investigator,{" "}
                  <Link
                    href="https://www.biomembrane.tsinghua.edu.cn/yanjiurenyuan/1613.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    State Key Laboratory of Membrane Biology
                  </Link>
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Office Address: </span>
                <span className="text-muted-foreground">Room A216-A, Biomedical Building, Tsinghua University, Haidian District, Beijing, China</span>
              </p>

              <p>
                <span className="font-semibold">Lab Address: </span>
                <span className="text-muted-foreground">Room A208, Biomedical Building, Tsinghua University, Haidian District, Beijing, China</span>
              </p>

              <p>
                <span className="font-semibold">Phone: </span>
                <span className="text-muted-foreground">010-62794752</span>
              </p>
            </div>
          </div>
        </div>

        {/* Brief Bio */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">🎓</span>
              Brief Bio
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Dr. Wang Tong is the Principal Investigator (PI) of the School of Life Sciences, Tsinghua University,
              Tsinghua University-Peking University Center for Life Sciences (CLS), Beijing Frontier Research Center
              for Biological Structures, and State Key Laboratory of Membrane Biology. Prior to joining Tsinghua in 2025,
              he was a Senior Researcher at Microsoft Research. He received his Ph.D. at Tsinghua University in 2019 and
              worked as a visiting scholar at Harvard University from 2016 to 2017.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His main research directions include AI-driven biomolecular dynamics simulation system (Nature, 2024),
              molecular structure modeling and prediction (Nat Commun, 2024), AI aided drug discovery (Brief Bioinform, 2023)
              and biomechanism detection via simulations (Cell Res, 2022 a,b). Over the past five years, as first or
              corresponding author, he has published more than 30 papers in journals such as Nature, Nat Mach Intell,
              and top computer science conference, such as NeurlPS and ICLR. He also holds more than ten patents in China
              and the United States. He has been working as Committee Member of Chinese Bioinformatics Society in protein
              structure prediction and simulation since it launched.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Dr. Wang has received Capital Frontier Academic Achievement Award (2025), Top Ten Advances in Chinese
              Bioinformatics Award (2024), Champion in First Global AI Drug Development Competition (2023), Top Downloaded
              Article Award (2022) and honored reviewer in ACS journals (2022, 2023).
            </p>

            
          </CardContent>
        </Card>

        {/* Education and Career */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">🎓</span>
              Education and Career
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Badge variant="secondary" className="mr-2">Career</Badge>
                Professional Experience
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Assistant Professor</p>
                    <p className="text-sm text-muted-foreground">School of Life Sciences, Tsinghua University</p>
                    <p className="text-sm text-muted-foreground">Tsinghua University-Peking University Center for Life Sciences</p>
                    <p className="text-sm text-muted-foreground">Beijing Frontier Research Center for Biological Structure</p>
                  </div>
                  <Badge variant="outline">2025-Present</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Senior Researcher</p>
                    <p className="text-sm text-muted-foreground">Microsoft Research</p>
                  </div>
                  <Badge variant="outline">2019-2025</Badge>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Badge variant="secondary" className="mr-2">Education</Badge>
                Academic Background
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Ph.D. in Life Sciences</p>
                    <p className="text-sm text-muted-foreground">Tsinghua University</p>
                  </div>
                  <Badge variant="outline">2014-2019</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Ph.D. in Computational Biology</p>
                    <p className="text-sm text-muted-foreground">Harvard University</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Work as visiting a PhD student<br />
                      Research on protein 3D structure prediction in Nobel Prize lab
                    </p>
                  </div>
                  <Badge variant="outline">2016-2017</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Bachelor's Degree</p>
                    <p className="text-sm text-muted-foreground">Shandong University</p>
                  </div>
                  <Badge variant="outline">2010-2014</Badge>
                </div>
              </div>
            </div>


          </CardContent>
        </Card>

        


        {/* Committees/Professional Groups/Services */}
        {/*
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="text-2xl mr-2">🤝</span>
              Committees/Professional Groups/Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Badge variant="secondary" className="mr-2">Professional</Badge>
                  Membership
                </h3>
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-lg">Coming Soon</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Badge variant="secondary" className="mr-2">Editorial</Badge>
                  Editorship
                </h3>
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-lg">Coming Soon</p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Badge variant="secondary" className="mr-2">Leadership</Badge>
                  Conference Chairs/Keynote/Plenary Speakers
                </h3>
                <div className="text-center py-8">
                  <p className="text-muted-foreground text-lg">Coming Soon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        */}

        


      </div>
    </div>
  );
}
