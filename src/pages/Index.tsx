import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import MapSection from "@/components/MapSection";
import FormPopup from "@/components/FormPopup";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showFormPrompt, setShowFormPrompt] = useState(false);

  useEffect(() => {
    // Check if user has submitted form before
    const hasSubmittedForm = localStorage.getItem("ather-form-submitted");
    
    if (!hasSubmittedForm) {
      // Show form prompt after user has been on page for 30 seconds
      const timer = setTimeout(() => {
        setShowFormPrompt(true);
      }, 30000);

      // Or show form when user tries to leave
      const handleBeforeUnload = () => {
        if (!hasSubmittedForm && !isFormOpen) {
          setIsFormOpen(true);
        }
      };

      window.addEventListener("beforeunload", handleBeforeUnload);
      
      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [isFormOpen]);

  useEffect(() => {
    if (showFormPrompt && !isFormOpen) {
      setIsFormOpen(true);
      setShowFormPrompt(false);
    }
  }, [showFormPrompt, isFormOpen]);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection onOpenForm={handleOpenForm} />

      {/* Product Showcase */}
      <ProductShowcase onOpenForm={handleOpenForm} />

      {/* Map Section */}
      <MapSection onOpenForm={handleOpenForm} />

      {/* Form Popup */}
      <FormPopup isOpen={isFormOpen} onClose={handleCloseForm} />

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  );
};

export default Index;
