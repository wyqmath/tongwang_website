'use client';

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

// 动态导入地图组件，禁用 SSR
const FooterMap = dynamic(() => import('./footer-map'), {
  ssr: false,
  loading: () => <div className="w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
    <p className="text-gray-600">Loading map...</p>
  </div>
});

export function Footer() {
  const pathname = usePathname();

  // 如果是 contact 页面，不显示 footer
  if (pathname === '/contact') {
    return null;
  }

  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Contact Information Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Contact Information</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Contact Details */}
              <div className="flex flex-col space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:tongwang@mail.tsinghua.edu.cn"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      tongwang@mail.tsinghua.edu.cn
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">010-62794752</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Office: Room A216-A, Biomedical Building<br />
                      Lab: Room A208, Biomedical Building<br />
                      Tsinghua University, Haidian District, Beijing, China
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle & Right: Map and Affiliations with matching height */}
              <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Middle: Map Screenshot */}
                <div className="rounded-lg overflow-hidden shadow-lg h-full">
                  <FooterMap />
                </div>

                {/* Right: Affiliations */}
                <div className="flex flex-col h-full">
                  <h4 className="font-semibold mb-4">Affiliations</h4>
                  <div className="flex-1 flex flex-col justify-between space-y-3">
                    {/* 清华大学生命学院 */}
                    <Link
                      href="https://life.tsinghua.edu.cn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-105 inline-block"
                    >
                      <Image
                        src="/tsinghua-life-school.jpg"
                        alt="School of Life Sciences, Tsinghua University"
                        width={240}
                        height={80}
                        className="object-contain w-full"
                      />
                    </Link>

                    {/* 结构中心 */}
                    <Link
                      href="https://www.frcbs.tsinghua.edu.cn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-105 inline-block"
                    >
                      <Image
                        src="/frcbs.svg"
                        alt="Beijing Frontier Research Center for Biological Structure"
                        width={240}
                        height={80}
                        className="object-contain w-full"
                      />
                    </Link>

                    {/* CLS */}
                    <Link
                      href="https://cls.tsinghua.edu.cn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-105 inline-block"
                    >
                      <Image
                        src="/cls.png"
                        alt="Center for Life Sciences"
                        width={160}
                        height={56}
                        className="object-contain max-w-[70%]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Tong Wang Research Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
