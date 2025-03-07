import Hero from "@/components/Hero";
import PartnersSection from "@/components/PartnersSection";
import BusinessUnitsSection from "@/components/BusinessUnitsSection";
import ValuesSection from "@/components/ValuesSection";
import AboutSection from "@/components/AboutSection";
import WorkTogetherSection from "@/components/WorkTogetherSection";
import ScrollAnimationWrapper from "./providers/ScrollAnimationWrapper ";

export default function Home() {
  return (
    <>
      <Hero 
      title="to the next challenge."
      highlight="UP"
      description="TunUp (Tunis Upload&Print) hosts activities of four Cimpress business units belonging to the Upload&Print Group.     
        We offer a better design for your digital products."
        buttonText="Get to Know us Better"
        buttonLink="/About"
        image="/images/tunUp.jpg"/>

      <AboutSection/>
      <ScrollAnimationWrapper>
      <WorkTogetherSection/>
      <BusinessUnitsSection />
      <ValuesSection />
      <PartnersSection />
      </ScrollAnimationWrapper>
      
      
    </>
  );
}
