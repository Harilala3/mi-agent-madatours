import { useState, useCallback, useEffect } from "react";
import Preloader from "@/components/Preloader";
import HeroSection from "@/components/HeroSection";
import BiodiversitySection from "@/components/BiodiversitySection";
import BentoDestinations from "@/components/BentoDestinations";
import RegionsSection from "@/components/RegionsSection";
import TimelineSection from "@/components/TimelineSection";
import ExperienceSection from "@/components/ExperienceSection";
import FloatingContact from "@/components/FloatingContact";
import ContactForm from "@/components/ContactForm";
import { Navbar, Footer } from "@/components/NavFooter";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleComplete = useCallback(() => {
    setLoading(false);
  }, []);

  // Handle #contact hash to open contact modal
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#contact") {
        setContactModalOpen(true);
        // Remove hash from URL without scrolling
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

    // Check on mount
    handleHashChange();

    // Also check if hash is contact
    if (window.location.hash === "#contact") {
      setContactModalOpen(true);
      window.history.replaceState(null, "", window.location.pathname);
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handleComplete} />}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Navbar onContactClick={() => setContactModalOpen(true)} />
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
        <ContactForm open={contactModalOpen} onOpenChange={setContactModalOpen} />
      </div>
    </>
  );
};

export default Index;
