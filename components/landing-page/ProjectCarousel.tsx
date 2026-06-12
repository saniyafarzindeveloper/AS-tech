"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCarouselProps = {
  images: string[];
};

export default function ProjectCarousel({
  images,
}: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ]
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative h-full overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="
              relative
              min-w-full
              h-[650px]
            "
          >
            <Image
              src={image}
              alt={`Project ${index + 1}`}
              fill
              className="
                object-cover
                transition-transform
                duration-700
              "
            />
          </div>
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={scrollPrev}
        className="
          absolute
          left-5
          top-1/2
          z-30
          -translate-y-1/2

          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-full

          border
          border-white/10

          bg-black/40
          backdrop-blur-xl

          text-white

          hover:bg-[#8B5CF6]/30
          transition-all
        "
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next */}
      <button
        onClick={scrollNext}
        className="
          absolute
          right-5
          top-1/2
          z-30
          -translate-y-1/2

          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-full

          border
          border-white/10

          bg-black/40
          backdrop-blur-xl

          text-white

          hover:bg-[#8B5CF6]/30
          transition-all
        "
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-30

          flex
          -translate-x-1/2
          gap-2
        "
      >
        {images.map((_, index) => (
          <div
            key={index}
            className="
              h-2
              w-2
              rounded-full
              bg-white/50
            "
          />
        ))}
      </div>
    </div>
  );
}