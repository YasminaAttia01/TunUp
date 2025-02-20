import Hero from "@/components/Hero";
import PartnersSection from "@/components/PartnersSection";
import BusinessUnitsSection from "@/components/BusinessUnitsSection";
import ValuesSection from "@/components/ValuesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessUnitsSection />
      <ValuesSection />
      <PartnersSection />
    </>
  );
}
