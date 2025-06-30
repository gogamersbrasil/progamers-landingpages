"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/jogos/cs2.jpg", title: "CS2" },
  { src: "/jogos/valorant.jpg", title: "Valorant" },
  { src: "/jogos/lol.jpg", title: "League of Legends" },
  { src: "/jogos/fortnite.jpg", title: "Fortnite" },
  { src: "/jogos/dota2.jpg", title: "Dota 2" },
];

export default function GamesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
     
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gaming-darker/80 hover:bg-gaming-dark border border-red-500 text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gaming-darker/80 hover:bg-gaming-dark border border-red-500 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

     
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 px-10">
          {images.map((item, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[320px] lg:min-w-[360px] flex-shrink-0 bg-gaming-dark rounded-xl overflow-hidden relative"
            >
              <div className="relative w-full h-[420px]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                />
              </div>
              <div className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-md">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pontos indicadores */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/70 transition-all"
          />
        ))}
      </div>
    </div>
  );
}
