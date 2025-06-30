"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Hero() {
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
    <div className="relative w-full h-105 pt-25 pb-16 overflow-hidden">
    
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/video.mp4"
        autoPlay
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 z-0" />

      
      {showContent && (
        <div className="mt-50 container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
     
           

            <div>
              <button
                className="bg-gradient-to-r from-red-600 to-red-400 
                  hover:from-red-700 hover:to-red-500 
                  text-white px-6 py-2.5 
                  rounded-md shadow-md shadow-red-500/30 
                  hover:shadow-lg hover:shadow-red-600/50 
                  transition-all duration-300 
                  focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
                onClick={() => router.push("/signup")}
              >
                Começar a Jogar
                <ChevronRight className="ml-2 h-5 w-5 inline" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
