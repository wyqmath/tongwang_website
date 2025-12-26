'use client';

import Image from 'next/image';

export default function FooterMap() {
  return (
    <div className="w-full h-full relative">
      <Image
        src="/map_screenshot.png"
        alt="Tsinghua University Biomedical Hall Location"
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

