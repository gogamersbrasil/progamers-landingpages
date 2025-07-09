'use client';
import { useCallback, useState, useEffect } from 'react';
import { BaseResponse } from '@/hooks/interfaces/base';
import { IChampionships } from '@/hooks/interfaces/championships.interface';
import ChampionshipCard from '../card/ChampionshipCard';
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './carousel.css';

interface ChampionshipListProps {
  championships: BaseResponse<IChampionships>[];
}

export default function ChampionshipList({ championships }: ChampionshipListProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Initialize Embla Carousel with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false
    },
    [
      AutoPlay({ 
        delay: 4000,
        stopOnInteraction: false 
      })
    ]
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
    <div className="w-full overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Campeonatos</h2>
        <p className="text-gray-300 mt-2">Confira os campeonatos disponíveis</p>
      </div>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {championships.map((championship) => (
              <div key={championship.entity.id} className="embla__slide">
                <div className="px-3">
                  <ChampionshipCard championship={championship} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {championships.length > 1 && (
          <>
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

            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`${index === selectedIndex ? 'embla__dot--selected' : ''}`}
                  type="button"
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {championships.length === 0 && (
        <div className="text-center py-8 text-white">
          Não há campeonatos disponíveis no momento. Fique atento para novidades!
        </div>
      )}
    </div>
  );
}
