import Hero from "@/components/Hero";
import BusinessUnitsSection from "@/components/BusinessUnitsSection";
import ValuesSection from "@/components/ValuesSection";
import AboutSection from "@/components/AboutSection";
import WorkTogetherSection from "@/components/WorkTogetherSection";
import ScrollAnimationWrapper from "./providers/ScrollAnimationWrapper ";

export default function Home() {
  return (
    <>
      <Hero 
      title="for the next challenge."
      highlight="UP"
      description="At TunUp (Tunisia Upload & Print), we support four Cimpress business units within the Upload & Print Group through high-quality Customer Care and expert Design Services. Our teams work every day to deliver personalized experiences and creative solutions that bring printed products to life—across Europe and the US. "
        buttonText="Get to Know us Better"
        buttonLink="/About"
        image="/images/tunup-background.jpg"/>

      <AboutSection/>
      <ScrollAnimationWrapper>
      <WorkTogetherSection/>
      <BusinessUnitsSection />
      <ValuesSection />
      </ScrollAnimationWrapper>
      
      
    </>
  );
}
