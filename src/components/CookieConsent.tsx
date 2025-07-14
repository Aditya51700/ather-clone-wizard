import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, X, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem("ather-cookie-consent");
    if (!hasConsent) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("ather-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  const handleReject = () => {
    localStorage.setItem("ather-cookie-consent", "rejected");
    setIsVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem("ather-cookie-consent", "dismissed");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Cookie Consent Card */}
      <Card className={cn(
        "relative w-full max-w-md bg-ather-dark text-white border-0 shadow-strong transition-all duration-300",
        showDetails ? "max-h-96 overflow-y-auto" : "max-h-80"
      )}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <Cookie className="h-6 w-6 text-ather-orange mr-2" />
              <h3 className="text-lg font-semibold">Cookie Settings</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-white hover:bg-white/10 p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <p className="text-sm text-white/90 leading-relaxed">
              We use cookies to give you a great user experience on our website and to analyze how you interact with our content.
            </p>

            {showDetails && (
              <div className="space-y-3 text-sm">
                <div className="border-t border-white/20 pt-3">
                  <h4 className="font-medium mb-2">Essential Cookies</h4>
                  <p className="text-white/80 text-xs">
                    Required for the website to function properly. These cannot be disabled.
                  </p>
                </div>
                
                <div className="border-t border-white/20 pt-3">
                  <h4 className="font-medium mb-2">Analytics Cookies</h4>
                  <p className="text-white/80 text-xs">
                    Help us understand how visitors interact with our website by collecting and reporting information.
                  </p>
                </div>
                
                <div className="border-t border-white/20 pt-3">
                  <h4 className="font-medium mb-2">Marketing Cookies</h4>
                  <p className="text-white/80 text-xs">
                    Used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={handleCustomize}
                className="text-ather-orange hover:text-ather-orange/80 text-sm font-medium transition-colors flex items-center"
              >
                <Settings className="h-4 w-4 mr-1" />
                {showDetails ? "Hide Details" : "Customize"}
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button
              variant="outline"
              onClick={handleReject}
              className="flex-1 border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Reject All
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="flex-1 bg-ather-orange hover:bg-ather-orange/90 text-white"
            >
              Accept All
            </Button>
          </div>

          {/* Privacy Link */}
          <div className="mt-4 text-center">
            <a
              href="#privacy"
              className="text-xs text-white/70 hover:text-ather-orange transition-colors underline"
            >
              View Privacy Policy
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;