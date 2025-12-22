import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4">News & Updates</h1>
        </div>

        {/* Recent News */}
        <section className="mb-12">
          <div className="space-y-16">

            {/* News 6 - December 2025 */}
            <article className="border-b border-gray-200 pb-16">
              <div className="flex gap-8 items-start">
                {/* Left side - Text content */}
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">
                    December 6, 2025
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4 hover:underline cursor-pointer">
                    Prof. Wang Receives 2025 Capital Frontier Academic Achievement Award
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Prof. Wang was honored with the 2025 Capital Frontier Academic Achievement Award. Organized by the Beijing Computer Society, this prestigious selection involved a rigorous two-stage peer review process aimed at highlighting top-tier innovations at the intersection of Artificial Intelligence and Computer Science. Prof. Wang attended the award ceremony and delivered an invited talk, sharing insights on the development of the AI2BMD framework and its impact on the field.
                  </p>
                  <Link href="https://mp.weixin.qq.com/s/2F9G0QLxlF9Uwo8OHGcCAw" target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="text-primary p-0 h-auto">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read More (Chinese)
                    </Button>
                  </Link>
                  <div className="mt-4 text-sm text-primary">
                    Lab News
                  </div>
                </div>

                {/* Right side - Image */}
                <div className="w-64 flex-shrink-0">
                  <Image
                    src="/news/image14.jpeg"
                    alt="Prof. Wang Receives Award"
                    width={256}
                    height={192}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </article>

            {/* News 5 - November 2025 */}
            <article className="border-b border-gray-200 pb-16">
              <div className="flex gap-8 items-start">
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">
                    November 28, 2025
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4 hover:underline cursor-pointer">
                    Prof. Wang&apos;s Team Reviews Advances in AI-Driven Biomolecular Simulations
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Prof. Wang&apos;s group published a comprehensive review titled &quot;Recent Advances in Artificial Intelligence-Driven Biomolecular Dynamics Simulations Based on Machine Learning Force Fields&quot; in Current Opinion in Structural Biology. This article systematically surveys the landscape of Machine Learning Force Fields (MLFFs), evaluating architectures ranging from classically parametrized terms to end-to-end neural networks. It highlights how MLFFs resolve the long-standing trade-off between computational efficiency and quantum mechanical accuracy, and discusses emerging universal models like AI2BMD.
                  </p>
                  <div className="flex gap-4 mb-4">
                    <Link href="https://doi.org/10.1016/j.sbi.2025.103191" target="_blank" rel="noopener noreferrer">
                      <Button variant="link" className="text-primary p-0 h-auto">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read Paper
                      </Button>
                    </Link>
                    <Link href="https://www.tsinghua.edu.cn/info/1175/122851.htm" target="_blank" rel="noopener noreferrer">
                      <Button variant="link" className="text-primary p-0 h-auto">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Tsinghua News (Chinese)
                      </Button>
                    </Link>
                  </div>
                  <div className="text-sm text-primary">
                    Publication
                  </div>
                </div>

                <div className="w-64 flex-shrink-0">
                  <Image
                    src="/news/image13.png"
                    alt="Review Article"
                    width={256}
                    height={192}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </article>

            {/* News 4 - September 2025 */}
            <article className="border-b border-gray-200 pb-16">
              <div className="flex gap-8 items-start">
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">
                    September 11, 2025
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4 hover:underline cursor-pointer">
                    Prof. Wang Delivers Invited Speech at BIOHK2025 AI Forum
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    On September 11, Prof. Wang delivered an invited speech at BIOHK2025 in Hong Kong. He presented at the AI Forum, a highlight session co-hosted by the School of Life Sciences, Tsinghua University. As part of the university&apos;s delegation, Prof. Wang shared insights on the intersection of artificial intelligence and life sciences, contributing to the significant presence of Tsinghua researchers at this international convention.
                  </p>
                  <div className="text-sm text-primary">
                    Lab News
                  </div>
                </div>

                <div className="w-64 flex-shrink-0">
                  <Image
                    src="/news/image11.jpeg"
                    alt="BIOHK2025 Conference"
                    width={256}
                    height={192}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </article>

            {/* News 3 - August 2025 */}
            <article className="border-b border-gray-200 pb-16">
              <div className="flex gap-8 items-start">
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">
                    August 18, 2025
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4 hover:underline cursor-pointer">
                    Prof. Wang Presents Latest Research at ACS Fall 2025
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Prof. Wang attended the American Chemical Society (ACS) Fall 2025 meeting held in Washington, DC from August 17–21. On August 18, he delivered two presentations titled &quot;The Coming Age of AI-Driven Biomolecular Dynamics Simulation with Ab Initio Accuracy&quot; and &quot;Machine Learning Force Field for AI-Driven Protein Molecular Dynamics Simulation.&quot; These talks highlighted the laboratory&apos;s recent breakthroughs in applying machine learning to enhance the accuracy and efficiency of protein molecular dynamics simulations.
                  </p>
                  <div className="text-sm text-primary">
                    Lab News
                  </div>
                </div>

                <div className="w-64 flex-shrink-0">
                  <Image
                    src="/news/image8.jpeg"
                    alt="ACS Fall 2025"
                    width={256}
                    height={192}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </article>

            {/* News 2 - June 2025 Conferences */}
            <article className="border-b border-gray-200 pb-16">
              <div className="flex gap-8 items-start">
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">
                    June 2025
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4 hover:underline cursor-pointer">
                    Prof. Tong Wang Presents at Major Conferences in June
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Concurrent with the establishment of the new laboratory, Prof. Wang participated in a series of academic conferences throughout June. He delivered an invited speech at the National Conference on Artificial Intelligence Biology in Hangzhou on June 7, followed by another invited speech at the Artificial Intelligence for BioPharma Conference in Shanghai on June 12. Subsequently, on June 15, he presented a keynote speech at the National Conference of Biomolecular Structure Prediction and Simulation in Changchun.
                  </p>
                  <div className="text-sm text-primary">
                    Lab News
                  </div>
                </div>

                <div className="w-64 flex-shrink-0">
                  <Image
                    src="/news/image5.jpeg"
                    alt="Conference Presentation"
                    width={256}
                    height={192}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </article>

            {/* News 1 - Lab Launch */}
            <article className="border-b border-gray-200 pb-16">
              <div className="flex gap-8 items-start">
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground mb-2">
                    June 9, 2025
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-4 hover:underline cursor-pointer">
                    Official Launch of the Wang Lab at Tsinghua University
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We are excited to announce that the Wang Lab was officially established at Tsinghua University on June 9, 2025. Our new research facilities are located in the Biomedicine Hall, Tsinghua University, with Prof. Tong Wang&apos;s office in Room A216-A and the main laboratory in Room A208. This marks the beginning of a new chapter, and we welcome researchers, students and anyone who is interested in our lab research to visit our new space to discuss innovation and collaboration.
                  </p>
                  <div className="text-sm text-primary">
                    Lab News
                  </div>
                </div>

                <div className="w-64 flex-shrink-0">
                  <Image
                    src="/news/image1.jpeg"
                    alt="Wang Lab Facilities"
                    width={256}
                    height={192}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </article>

          </div>
        </section>

      </div>
    </div>
  );
}
