'use client';
import { useCallback, useState, useEffect } from 'react';
import { useEvents } from '@/hooks/useEvents';
import EventCard from './events/EventCard';
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../championships/carousel.css';

export default function NextEvent() {
  const { events, loading, error } = useEvents(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Initialize Embla Carousel with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: events?.length === 1 ? 'center' : 'start',
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
    <section className="bg-gaming-darker flex flex-col items-center justify-center py-10">
      <div className="relative z-10 text-center px-4 mb-8">
        <h1 className="text-center py-2 text-4xl md:text-4xl font-bold text-white">
          Próximos <span className="text-red-500">Eventos</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Participe dos maiores torneios de e-sports e conquiste prêmios
          incríveis
        </p>
      </div>

      {loading ? (
        <div className="text-center py-8 text-white">
          Carregando eventos...
        </div>
      ) : error ? (
        <div className="text-center py-8 text-white">
          Erro ao carregar eventos. Por favor, tente novamente mais tarde.
        </div>
      ) : (
        <div className="w-full overflow-hidden max-w-7xl mx-auto px-4">
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {events.map((event) => (
                  <div key={event.entity.id} className={`embla__slide ${events.length === 1 ? 'single-slide' : ''}`}>
                    <div className="px-3">
                      <EventCard event={event} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {events.length > 1 && (
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

          {events.length === 0 && (
            <div className="text-center py-8 text-white">
              Não há eventos disponíveis no momento. Fique atento para novidades!
            </div>
          )}
        </div>
      )}
    </section>
  );
}
