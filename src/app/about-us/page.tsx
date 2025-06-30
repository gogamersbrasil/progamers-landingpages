
import AboutHeroSection from "@/components/about components/AboutHeroSection";
import ContactSection from "@/components/about components/ContactSection";
import HistorySection from "@/components/about components/HistorySection";
import MissionSection from "@/components/about components/MissionSection";
import TeamSection from "@/components/about components/TeamSection";


import SocialMediaSection from "@/components/SocialMediaSection";


export default function About() {
  return (
    <div>
      <AboutHeroSection/>
      <MissionSection/>
      <HistorySection/>
      <TeamSection/>
      <ContactSection/>
      <SocialMediaSection/>
      
    </div>
  );
}