import { Header } from "./components/Header";
import { HeroSection } from "./components/Hero";
import { FeaturesSection } from "./components/Features";
import { BeneficiesSection } from "./components/Beneficies";
import { PricingSection } from "./components/Pricing";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <BeneficiesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
