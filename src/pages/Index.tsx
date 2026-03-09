import { useState, useCallback } from "react";
import Preloader from "@/components/Preloader";
import HeroSection from "@/components/HeroSection";
import BiodiversitySection from "@/components/BiodiversitySection";
import BentoDestinations from "@/components/BentoDestinations";
import TimelineSection from "@/components/TimelineSection";
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
          <TimelineSection />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </>
  );
};

export default Index;
