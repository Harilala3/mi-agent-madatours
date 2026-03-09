import { useState, useCallback } from "react";
import Preloader from "@/components/Preloader";
import HeroSection from "@/components/HeroSection";
import BiodiversitySection from "@/components/BiodiversitySection";
import BentoDestinations from "@/components/BentoDestinations";
import RegionsSection from "@/components/RegionsSection";
import TimelineSection from "@/components/TimelineSection";
import ExperienceSection from "@/components/ExperienceSection";
import FloatingContact from "@/components/FloatingContact";
import { Navbar, Footer } from "@/components/NavFooter";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handleComplete} />}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Navbar />
        <main>
          <HeroSection />
          <BiodiversitySection />
          <BentoDestinations />
          <RegionsSection />
          <TimelineSection />
          <ExperienceSection />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default Index;
