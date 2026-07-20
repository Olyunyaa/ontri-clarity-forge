import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CasesSection from "@/components/CasesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieNotice from "@/components/CookieNotice";

const Index = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash !== "#") {
      document.querySelector(hash)?.scrollIntoView();
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <CasesSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
      <CookieNotice />
    </div>
  );
};

export default Index;
