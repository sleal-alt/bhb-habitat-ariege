import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhyUs from "@/components/home/WhyUs";
import StatsCounter from "@/components/home/StatsCounter";
import ProcessSteps from "@/components/home/ProcessSteps";
import UrgenceSection from "@/components/home/UrgenceSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GarantiesSection from "@/components/home/GarantiesSection";
import RealisationsSection from "@/components/home/RealisationsSection";
import PartenairesScroll from "@/components/home/PartenairesScroll";
import ZonesSection from "@/components/home/ZonesSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import { SITE } from "@/lib/site";

export const metadata = {
  title: `Couvreur Ariège 09 — ${SITE.name} | Démoussage, Toiture, Charpente`,
  description: `Couvreur Ariège (09) — BHB Habitat. Démoussage hydrofuge garanti 10 ans, réfection toiture tuiles, charpente bois, étanchéité terrasse. ${SITE.chantiers}+ chantiers en Ariège. Devis gratuit sous 24h. ☎ ${SITE.phone}`,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <WhyUs />
      <StatsCounter />
      <UrgenceSection />
      <ProcessSteps />
      <TestimonialsSection />
      <GarantiesSection />
      <RealisationsSection />
      <PartenairesScroll />
      <ZonesSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
