import CtaProducer from "@/components/producers components/CtaProducer";
import FeaturesSection from "@/components/producers components/FeaturesSection";
import MissionSection from "@/components/producers components/MissionSection";
import NextEvent from "@/components/producers components/NextEvent";
import PartnerSection from "@/components/producers components/PartnerSection";
import ProducersHeroSection from "@/components/producers components/ProducersHeroSection";
import TestimonialsSection from "@/components/producers components/TestimonialsSection";
import SocialMediaSection from "@/components/SocialMediaSection";

export default function Producers() {
  return (
    <div>
      <ProducersHeroSection />
      <MissionSection />
      <FeaturesSection/>
      <PartnerSection/>
      <NextEvent/>
      <CtaProducer/>
      <TestimonialsSection/>
      <SocialMediaSection />
    </div>
  );
}
