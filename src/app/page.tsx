"use client";




import Features from "@/components/Features";
import Games from "@/components/Games";

import Hero from "@/components/Hero";
import NextChampionship from "@/components/NextChampionship";
import SocialMediaSection from "@/components/SocialMediaSection";
import StatsSection from "@/components/StatsSection";


export default function Home() {


  return (
    
    <div >
      <Hero />
      <Features />
      <StatsSection />
      <Games/>
      <NextChampionship />
      <SocialMediaSection />

    </div>
      
    
  );
}
