import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
              <h1 className="text-5xl font-bold mb-4">Tong Wang, PhD</h1>

              <div className="space-y-2 text-lg leading-relaxed">
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

                <p>
                  Principal Investigator, Center for Life Sciences and Artificial Intelligence, School of Life Sciences, Tsinghua University
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 text-base">
              <p>
                <span className="font-semibold">Office Address: </span>
                <span className="text-muted-foreground">Room A216-A, Biomedical Hall, Tsinghua University, Haidian District, Beijing, China</span>
              </p>

              <p>
                <span className="font-semibold">Lab Address: </span>
                <span className="text-muted-foreground">Room A208, Biomedical Hall, Tsinghua University, Haidian District, Beijing, China</span>
              </p>

              <p>
                <span className="font-semibold">Phone: </span>
                <span className="text-muted-foreground">010-62794752</span>
              </p>
            </div>
          </div>
        </div>

        {/* Brief Bio */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Brief Bio</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Dr. Wang Tong is the Principal Investigator (PI) of the School of Life Sciences, Tsinghua University,
              Tsinghua University-Peking University Center for Life Sciences (CLS), Beijing Frontier Research Center
              for Biological Structures, State Key Laboratory of Membrane Biology, and Center for Life Sciences and Artificial Intelligence. Prior to joining Tsinghua in 2025,
              he was a Senior Researcher at Microsoft Research. He received his Ph.D. at Tsinghua University in 2019 and
              worked as a visiting scholar at Harvard University from 2016 to 2017.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              His main research directions include AI-driven biomolecular dynamics simulation system (Nature, 2024),
              molecular structure modeling and prediction (Nat Commun, 2024), AI aided drug discovery (Brief Bioinform, 2023)
              and biomechanism detection via simulations (Cell Res, 2022 a,b). Over the past five years, as first or
              corresponding author, he has published more than 30 papers in journals such as Nature, Nat Mach Intell,
              and top computer science conference, such as NeurlPS and ICLR. He also holds more than ten patents in China
              and the United States. He has been working as Committee Member of Chinese Bioinformatics Society in protein
              structure prediction and simulation since it launched.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Dr. Wang has received Capital Frontier Academic Achievement Award (2025), Top Ten Advances in Chinese
              Bioinformatics Award (2024), Champion in First Global AI Drug Development Competition (2023), Top Downloaded
              Article Award (2022) and honored reviewer in ACS journals (2022, 2023).
            </p>
          </div>
        </div>

        {/* Education and Background */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Education and Background</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-lg">Assistant Professor</p>
                <p className="text-base text-muted-foreground">School of Life Sciences, Tsinghua University</p>
                <p className="text-base text-muted-foreground">Tsinghua University-Peking University Center for Life Sciences</p>
                <p className="text-base text-muted-foreground">Beijing Frontier Research Center for Biological Structure</p>
              </div>
              <Badge variant="outline" className="text-base">2025-Present</Badge>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-lg">Senior Researcher</p>
                <p className="text-base text-muted-foreground">Microsoft Research</p>
              </div>
              <Badge variant="outline" className="text-base">2019-2025</Badge>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-lg">Ph.D.</p>
                <p className="text-base text-muted-foreground">Tsinghua University</p>
              </div>
              <Badge variant="outline" className="text-base">2014-2019</Badge>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-lg">Visiting PhD Student</p>
                <p className="text-base text-muted-foreground">Harvard University</p>
              </div>
              <Badge variant="outline" className="text-base">2016-2017</Badge>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-lg">B.S. in Science</p>
                <p className="text-base text-muted-foreground">Shandong University</p>
              </div>
              <Badge variant="outline" className="text-base">2010-2014</Badge>
            </div>
          </div>
        </div>

        {/* Honors, Rewards and Grants */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Honors, Rewards and Grants</h2>
          <div className="space-y-3">
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">Capital Frontier Academic Achievement Award</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">National Key R&D Program of China</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">AI+Life Science Interdisciplinary Research Program, School of Life Sciences, Tsinghua</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">Start-up of scientific research for new PI by Tsinghua University</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">Top Ten Advances in Chinese Bioinformatics (1st rank of teamwork)</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">Champion in the First Global AI Drug Development Competition</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">Certificate of Recognition and Appreciation of ACS Publication Peer Reviewers</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">Runner-up of OGB Large Scale Challenge @NeurIPS2022 competition</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">Top Downloaded Article Award by Wiley Press (1st rank of teamwork)</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">Certificate of Recognition and Appreciation of ACS Publication Peer Reviewers</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">National Scholarship for Doctoral Students</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">First Prize of RONG Scholarship by Tsinghua University</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">Tang Lixin Scholarship by Tsinghua University</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">Innovation Scholarship by Beijing Advanced Innovation Center of Structural Biology</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">Distinguished Study Abroad Scholarship by Tsinghua University</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">Distinguished Graduation Award of Shandong Province</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">Distinguished Graduation Award by Shandong University</p>
            </div>
            <div className="border-b pb-2">
              <p className="text-base text-muted-foreground">First-class Scholarship by Shandong University</p>
            </div>
          </div>
        </div>

        {/* Presentations, Lectures and Courses */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Presentations, Lectures and Courses</h2>

          {/* A) Invited Presentations at Conferences */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Invited Presentations at Conferences</h3>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">Ceremony and Symposium on Capital Frontier Academic Achievements</p>
                <p className="text-sm text-muted-foreground mb-1">Beijing, China</p>
                <p className="text-sm italic">How AI revolutionizes protein dynamics research. (Keynote Speech)</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">AI + Materials Symposium by Beijing Computational Science Research Center</p>
                <p className="text-sm text-muted-foreground mb-1">Chengdu, China</p>
                <p className="text-sm italic">AI driven biomolecular dynamics simulation. (Keynote Speech)</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">National Conference of the Chinese Society of Biochemistry and Molecular Biology</p>
                <p className="text-sm text-muted-foreground mb-1">Nanchang, China</p>
                <p className="text-sm italic">The coming age of AI driven biomolecular dynamics simulation.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">2025 Hong Kong International Biotechnology Convention (BIOHK2025)</p>
                <p className="text-sm text-muted-foreground mb-1">Hong Kong, China</p>
                <p className="text-sm italic">The coming age of AI driven biomolecular dynamics simulation.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">National Conference of American Chemical Society (ACS Fall 2025)</p>
                <p className="text-sm text-muted-foreground mb-1">Washington, DC, U.S.A.</p>
                <p className="text-sm italic">Coming age of AI driven biomolecular dynamics simulation.<br/>Machine learning force field for AI-driven protein molecular dynamics simulation</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">National Conference of Biomolecular Structure Prediction and Simulation</p>
                <p className="text-sm text-muted-foreground mb-1">Changchun, China</p>
                <p className="text-sm italic">The new era of AI driven biomolecular dynamics simulation. (Keynote Speech)</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">Artificial Intelligence for BioPharma Conference (AIBC 2025)</p>
                <p className="text-sm text-muted-foreground mb-1">Shanghai, China</p>
                <p className="text-sm italic">The new era of AI driven biomolecular dynamics simulation.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">National Conference on Artificial Intelligence Biology</p>
                <p className="text-sm text-muted-foreground mb-1">Shanghai, China</p>
                <p className="text-sm italic">The coming age of AI driven biomolecular dynamics simulation with ab initio accuracy.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">National Conference of American Chemical Society (ACS Fall 2024)</p>
                <p className="text-sm text-muted-foreground mb-1">Denver, CO, U.S.A.</p>
                <p className="text-sm italic">Transforming protein dynamics simulation with ab initio accuracy at the cost of empirical force filed.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">The 15th National Conference of Theoretical and Computational Chemistry</p>
                <p className="text-sm text-muted-foreground mb-1">Changchun, China</p>
                <p className="text-sm italic">ViSNet: A general molecular geometry modeling framework for molecular properties prediction and MD simulations</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">The 37th Annual Conference on Neural Information Processing Systems (NeurIPS 2023)</p>
                <p className="text-sm text-muted-foreground mb-1">New Orleans, LA, U.S.A.</p>
                <p className="text-sm italic">Geometric transformer with interatomic positional encoding.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">The Twelfth National Conference on Bioinformatics and System Biology</p>
                <p className="text-sm text-muted-foreground mb-1">Qingdao, China</p>
                <p className="text-sm italic">AI2BMD: transforming protein dynamics simulation with ab initio accuracy at the cost of empirical force filed.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">The Eleventh National Conference on Bioinformatics and System Biology</p>
                <p className="text-sm text-muted-foreground mb-1">Guangzhou, China</p>
                <p className="text-sm italic">AI-powered MD simulation and drug discovery: from algorithm design to applications in combating COVID-19.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">The 36th Annual Conference on Neural Information Processing Systems (NeurIPS 2022)</p>
                <p className="text-sm text-muted-foreground mb-1">Virtual Meeting</p>
                <p className="text-sm italic">How to better introduce geometric information for molecular representation modeling</p>
              </div>
            </div>
          </div>

          {/* B) Invited Lectures at Institutions */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Invited Lectures at Institutions</h3>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">School of AI for Science, Peking University</p>
                <p className="text-sm italic">Beyond AlphaFold: How AI transforms protein dynamics research.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">School of Life Sciences and Technology, Tongji University</p>
                <p className="text-sm italic">Understanding the power of AI in biomolecular dynamics simulation and drug discovery.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">College of Chemistry, Central China Normal University</p>
                <p className="text-sm italic">Recent advances in AI driven biomolecular dynamics simulation.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">Protein Structure In-silicon Forum, Chinese Bioinformatics Society</p>
                <p className="text-sm italic">The coming age of AI driven biomolecular dynamics simulation with ab initio accuracy.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">Beijing Advanced Research Center for Biological Structures, Tsinghua University</p>
                <p className="text-sm italic">The coming age of AI driven biomolecular dynamics simulation with ab initio accuracy.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">Center for Quantitative Biology, Peking University</p>
                <p className="text-sm italic">The coming age of AI driven biomolecular dynamics simulation with ab initio accuracy.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">Institute of Systems and Physical Biology, Shenzhen Bay Laboratory</p>
                <p className="text-sm italic">The coming age of AI driven biomolecular dynamics simulation with ab initio accuracy.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">School of Science, Xi&apos;an Jiaotong-Liverpool University</p>
                <p className="text-sm italic">Advancing the frontiers of protein dynamics research through AI.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">Kuang Yaming Honors School, Nanjing University</p>
                <p className="text-sm italic">Recent advances in machine learning force fields and biomolecular simulations by AI.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">School of Mathematics, Renmin University</p>
                <p className="text-sm italic">Ab initio characterization protein dynamics with AI2BMD.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">Institute of Systems and Physical Biology, Shenzhen Bay Laboratory</p>
                <p className="text-sm italic">AI2BMD: Transforming biomolecular dynamics simulation with ab initio accuracy driven by ViSNet.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">Westlake University</p>
                <p className="text-sm italic">How AI driven MD facilitates biological research.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">Protein Structure In-silicon Forum, Chinese Bioinformatics Society</p>
                <p className="text-sm italic">AI2BMD: Transforming biomolecular dynamics simulation with ab initio accuracy at the cost of empirical force field.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">Beijing Advanced Research Center for Biological Structures, Tsinghua University</p>
                <p className="text-sm italic">Algorithm design and application for MD simulation and drug discovery.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">Protein Structure In-silicon Forum, Chinese Bioinformatics Society</p>
                <p className="text-sm italic">Algorithm design and applications for protein structure computational research.</p>
              </div>

              <div className="border-b pb-3">
                <p className="text-base font-medium mb-2">School of Mathematics, Renmin University</p>
                <p className="text-sm italic">DeepFragLib: improved fragment sampling for ab initio protein structure prediction</p>
              </div>
            </div>
          </div>

          {/* C) Teaching */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Courses</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-base font-medium">AI-driven Biomacromolecule Simulation and Computing</p>
                  <p className="text-sm text-muted-foreground mt-1">Co-taught with other faculty members</p>
                </div>
                <Badge variant="outline" className="text-base">2025 Fall</Badge>
              </div>
            </div>
          </div>
        </div>

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
