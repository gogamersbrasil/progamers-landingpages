"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProducersHeroSection() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleEnded = () => {
        setShowContent(true);
        video.pause();
      };

      video.addEventListener("ended", handleEnded);

      return () => {
        video.removeEventListener("ended", handleEnded);
      };
    }
  }, []);

  return (
    <section className="relative w-full h-90 overflow-hidden flex items-center justify-center bg-black">
      {/* Vídeo de fundo */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/video2.mp4"
        autoPlay
        muted
        playsInline
      />

      {/* Gradiente sobreposto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-0" />

      {/* Conteúdo visível após vídeo */}
      {showContent && (
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
              Soluções para Produtores e Marcas
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed drop-shadow-md">
              Potencialize sua presença no universo dos e-sports com nossas
              ferramentas de gestão de alta performance.
            </p>

            <button
              type="button"
              className="mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 text-lg rounded-md shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 w-[280px]"
              onClick={() => router.push("/contato")}
            >
              Fale com um consultor
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
