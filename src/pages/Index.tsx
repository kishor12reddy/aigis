import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SecurityTestsSection from "@/components/SecurityTestsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Header />
      <HeroSection />
      <SecurityTestsSection />
      <HowItWorksSection />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
