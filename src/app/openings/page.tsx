import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Mail,
  GraduationCap,
  Lightbulb
} from "lucide-react";

export default function PositionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
            Open Positions
          </h1>
          <p className="text-xl text-muted-foreground">
            Dr. Tong Wang&apos;s &quot;AI + Computational Biology&quot; Research Group, Tsinghua University
          </p>
        </div>

        {/* Postdoc Position */}
        <section className="mb-16">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="text-base px-4 py-1" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}>
                Postdoctoral Fellow
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-1">On-site</Badge>
              <span className="flex items-center text-muted-foreground ml-auto">
                <MapPin className="h-4 w-4 mr-1" />
                Beijing, China
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Postdoctoral Fellows</h2>
            <p className="text-lg text-muted-foreground">
              Computational Chemistry, Computational Biology, Computer Science, etc.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
                <Briefcase className="mr-2 h-5 w-5" />
                Responsibilities
              </h3>
              <p className="text-muted-foreground mb-3">
                We are recruiting several postdoctoral fellows to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Lead and conduct independent research projects as core team members in the following aspects:
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• MD simulations for biomolecules</li>
                      <li>• Deep learning model design for biological structures</li>
                      <li>• Distributed simulation system design, development and acceleration</li>
                    </ul>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Assist in supervising students and technical staff</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Actively participate in team activities</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
                <GraduationCap className="mr-2 h-5 w-5" />
                Qualifications
              </h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>PhD degree required. Candidates with backgrounds in Computational Chemistry, Computational Biology, Biomolecular Dynamics Simulation, Quantum Simulation, Computer Science, Software Engineering, or related interdisciplinary fields are preferred.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Publication record as a first author in high-impact journals or top-tier computer science conferences; strong English reading, writing, and communication skills.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Ability to conduct independent research; proficiency in programming (e.g., C++ or Python) and deep learning model development (e.g., PyTorch).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Priority consideration for candidates familiar with:
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• Biomolecular dynamics simulation (e.g., Amber, Gromacs)</li>
                      <li>• Quantum simulation (e.g., ORCA, Gaussian, etc.)</li>
                      <li>• Density Functional Theory (DFT)</li>
                      <li>• Extensive experience in deep learning research</li>
                    </ul>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Strong belief in the impact of AI on biological research; rigorous work ethic, strong self-motivation, collaborative spirit, and academic integrity.</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
                <Lightbulb className="mr-2 h-5 w-5" />
                Compensation & Benefits
              </h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Standard postdoctoral benefits of Tsinghua University and the State. Support for applying to various funding programs based on academic background, including the CLS Postdoctoral Fund, the &quot;Excellent Scholar&quot; program of the Beijing Advanced Innovation Center for Structural Biology, and the Tsinghua University &quot;Shuimu Scholar&quot; program. The group supports applications for the China Postdoctoral Science Foundation and the National Natural Science Foundation of China. Competitive living allowances and performance bonuses will be provided based on work performance.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Access to Tsinghua University&apos;s high-quality educational resources for children and postdoctoral housing. Postdocs enjoy policies regarding household registration migration for themselves and their families upon completing the program.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Access to world-class computing platforms and a deeply interdisciplinary research environment at Tsinghua University.</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
                <Mail className="mr-2 h-5 w-5" />
                How to Apply
              </h3>
              <p className="text-muted-foreground mb-3">
                Please send the following materials to <strong>tongwang@mail.tsinghua.edu.cn</strong> with the subject line: <strong>&quot;Postdoc Application + Name&quot;</strong>
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Detailed CV (including research experience and achievements)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Personal Statement (brief introduction, reasons for application, research summary, and future plan)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Contact information for 2-3 referees (one must be your PhD supervisor)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Other materials demonstrating research capabilities (representative papers, awards, etc.)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="my-12 border-t-2" style={{ borderColor: 'oklch(0.3722 0.17 321.61 / 0.2)' }}></div>

        {/* PhD Students */}
        <section className="mb-16">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="text-base px-4 py-1" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}>
                PhD Student
              </Badge>
            </div>
            <h2 className="text-3xl font-bold mb-2">PhD Students</h2>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground text-lg">
              Students who have obtained doctoral admission eligibility through the School of Life Sciences, School of Basic Medicine, School of Pharmaceutical Sciences (Biology track), CLS Program, or PTN Program at Tsinghua University, and are committed to &quot;AI-driven Computational Biology&quot; with a solid computational foundation, are welcome to apply.
            </p>

            <hr className="border-gray-200" />

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
                <Mail className="mr-2 h-5 w-5" />
                How to Apply
              </h3>
              <p className="text-muted-foreground mb-2">
                Please send your CV, transcripts, and publication list (if any) to <strong>tongwang@mail.tsinghua.edu.cn</strong> with the subject line: <strong>&quot;PhD Rotation + Name&quot;</strong> to discuss rotation and supervision opportunities.
              </p>
            </div>
          </div>
        </section>

        <div className="my-12 border-t-2" style={{ borderColor: 'oklch(0.3722 0.17 321.61 / 0.2)' }}></div>

        {/* Research Assistant */}
        <section className="mb-16">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="text-base px-4 py-1" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}>
                Research Assistant
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-1">On-site</Badge>
              <span className="flex items-center text-muted-foreground ml-auto">
                <MapPin className="h-4 w-4 mr-1" />
                Beijing, China
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Research Assistants</h2>
            <p className="text-lg text-muted-foreground">
              Computer Science, Software Engineering, Electronics, Computational Chemistry, etc.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
                <Briefcase className="mr-2 h-5 w-5" />
                Responsibilities
              </h3>
              <p className="text-muted-foreground mb-3">
                We are recruiting several research assistants to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Participate in research projects involving deep learning model design/training, engineering optimization/acceleration, and molecular dynamics simulations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Assist in lab computing resource management, maintenance, purchasing, and website design</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Actively participate in team work</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Undertake independent research topics depending on performance</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
                <GraduationCap className="mr-2 h-5 w-5" />
                Qualifications
              </h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Bachelor&apos;s degree or higher. Backgrounds in Computer Science, Software Engineering, Electronics, Computational Chemistry, or Biomolecular Dynamics Simulation are preferred.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Proficient in English reading, writing, and communication; skilled in programming (C++, Python) and deep learning model development (PyTorch).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Priority consideration for candidates familiar with MD simulation (Amber, Gromacs), Quantum simulation (ORCA, Gaussian), DFT, or having strong deep learning research experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Experience in ACM competitions, software development, or system optimization is a plus.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Strong belief in AI for biology; rigorous work ethic, self-motivated, collaborative, and honest.</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
                <Lightbulb className="mr-2 h-5 w-5" />
                Compensation & Benefits
              </h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Employment under Tsinghua University&apos;s contract system (non-faculty academic staff), including social insurance and housing fund (&quot;Five Insurances and One Fund&quot;). Living allowances and performance bonuses provided based on work performance.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Access to world-class computing platforms and an interdisciplinary environment; opportunities to attend academic conferences and participate in international collaborations.</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
                <Mail className="mr-2 h-5 w-5" />
                How to Apply
              </h3>
              <p className="text-muted-foreground mb-3">
                Please send the following materials to <strong>tongwang@mail.tsinghua.edu.cn</strong> with the subject line: <strong>&quot;Research Assistant Application + Name&quot;</strong>
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Detailed CV (including research experience and achievements)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Personal Statement (brief introduction, reasons for application, research summary, and future plan)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Contact information for 1-2 referees (one must be your undergraduate or master&apos;s supervisor)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Other materials demonstrating research capabilities (representative papers, awards, etc.)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="my-12 border-t-2" style={{ borderColor: 'oklch(0.3722 0.17 321.61 / 0.2)' }}></div>

        {/* Interns */}
        <section className="mb-16">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="text-base px-4 py-1" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}>
                Intern
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-1">On-site / Remote</Badge>
            </div>
            <h2 className="text-3xl font-bold mb-2">Interns</h2>
            <p className="text-lg text-muted-foreground">
              Current undergraduate or graduate students, all majors welcome
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
                <Briefcase className="mr-2 h-5 w-5" />
                Responsibilities
              </h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Participate in research involving deep learning model design/training, engineering optimization, and molecular dynamics simulations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Participate in team activities (Priority given to candidates intending to pursue a PhD in the group)</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
                <GraduationCap className="mr-2 h-5 w-5" />
                Qualifications
              </h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Current undergraduate or graduate student; all majors welcome; must guarantee fixed working hours</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Basic ability to read English literature; passed CET-6; basic programming and deep learning research skills; aptitude for learning new knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Rigorous work ethic, self-motivated, collaborative, and honest</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
                <Lightbulb className="mr-2 h-5 w-5" />
                Compensation & Benefits
              </h3>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Access to world-class computing platforms, an interdisciplinary environment, and research guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Guidance on paper writing and performance-based bonuses</span>
                </li>
              </ul>
            </div>

            <hr className="border-gray-200" />

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center" style={{ color: 'oklch(0.3722 0.17 321.61)' }}>
                <Mail className="mr-2 h-5 w-5" />
                How to Apply
              </h3>
              <p className="text-muted-foreground mb-3">
                Please send the following materials to <strong>tongwang@mail.tsinghua.edu.cn</strong> with the subject line: <strong>&quot;Intern Application + Name&quot;</strong>
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Detailed CV</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Academic transcripts (for undergraduates)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61)' }}></span>
                  <span>Personal Statement (brief introduction, reasons for application, and research interests)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center py-8 px-6 rounded-lg" style={{ backgroundColor: 'oklch(0.3722 0.17 321.61 / 0.08)' }}>
          <p className="text-lg text-muted-foreground">
            This recruitment is long-term and valid until positions are filled. For suitable candidates, we will contact you promptly and arrange interviews.
          </p>
        </div>
      </div>
    </div>
  );
}
