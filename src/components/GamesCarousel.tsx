"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../components/championships/carousel.css";

const images = [

  { src: "/jogos/valorant.jpg", title: "Valorant" },
  { src: "/jogos/lol.jpg", title: "League of Legends" },
  { src: "/jogos/fortnite.jpg", title: "Fortnite" },
  { src: "/jogos/cs2.jpg", title: "CS2" },
];

export default function GamesCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((item, i) => (
              <div key={i} className="embla__slide">
                <div className="min-w-[300px] md:min-w-[320px] lg:min-w-[360px] flex-shrink-0 bg-gaming-dark rounded-xl overflow-hidden relative">
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
              </div>
            ))}
          </div>
        </div>

        <button 
          className="embla__prev" 
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="embla__next" 
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>


      </div>
    </div>
  );
}
