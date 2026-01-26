'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GroupPhoto {
  src: string;
  alt: string;
}

interface GroupPhotoCarouselProps {
  photos: GroupPhoto[];
}

export default function GroupPhotoCarousel({ photos }: GroupPhotoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (photos.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all hover:scale-110"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all hover:scale-110"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      </div>
    </div>
  );
}
