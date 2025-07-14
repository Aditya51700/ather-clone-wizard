import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ChevronRight } from "lucide-react";
import heroScooter from "@/assets/hero-scooter.jpg";

interface HeroSectionProps {
  onOpenForm: () => void;
}

const HeroSection = ({ onOpenForm }: HeroSectionProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--border))_1px,_transparent_0)] [background-size:24px_24px] opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen pt-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12 py-12">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-ather-blue/10 text-ather-blue rounded-full text-sm font-medium mb-4">
                The Most Awarded Electric Scooter
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Meet{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Rizta
              </span>
              .
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              The most awarded electric scooter of the year. Experience the future of mobility with cutting-edge technology and sustainable design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-ather-blue hover:bg-ather-blue/90 text-white px-8"
                onClick={onOpenForm}
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-ather-blue text-ather-blue hover:bg-ather-blue hover:text-white px-8"
                onClick={onOpenForm}
              >
                Explore Offers
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-ather-blue">120km</div>
                <div className="text-sm text-muted-foreground">True Range</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-ather-blue">0-40</div>
                <div className="text-sm text-muted-foreground">in 3.3s</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-ather-blue">90km/h</div>
                <div className="text-sm text-muted-foreground">Top Speed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-ather-blue">7"</div>
                <div className="text-sm text-muted-foreground">Touchscreen</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Video */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-strong">
                <img
                  src={heroScooter}
                  alt="Ather Electric Scooter"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Video Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white text-ather-dark rounded-full p-4 shadow-medium"
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>

                {/* Floating Award Badges */}
                <div className="absolute top-4 right-4 space-y-2">
                  <div className="bg-ather-orange text-white px-3 py-1 rounded-full text-xs font-medium shadow-medium">
                    🏆 Award Winner
                  </div>
                  <div className="bg-ather-blue text-white px-3 py-1 rounded-full text-xs font-medium shadow-medium">
                    ⚡ Electric
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-ather-blue/10 rounded-full blur-xl" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ather-orange/10 rounded-full blur-xl" />
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="bg-white rounded-lg shadow-medium p-4 max-w-48">
                  <div className="text-sm font-medium text-foreground">Smart Features</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    OTA Updates, Navigation, Music Control
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-20 hidden lg:block">
                <div className="bg-white rounded-lg shadow-medium p-4 max-w-48">
                  <div className="text-sm font-medium text-foreground">Fast Charging</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    0-80% in just 5.5 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ather-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ather-blue rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;