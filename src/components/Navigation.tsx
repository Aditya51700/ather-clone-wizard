import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import atherLogo from "@/assets/ather-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    {
      label: "Rizta",
      href: "#rizta"
    },
    {
      label: "Ather 450",
      href: "#ather-450",
      dropdown: [
        { label: "450S", href: "#450s" },
        { label: "450 Apex", href: "#450-apex" },
        { label: "Compare Models", href: "#compare" }
      ]
    },
    {
      label: "Smart Helmet & Accessories",
      href: "#accessories",
      dropdown: [
        { label: "Smart Helmets", href: "#helmets" },
        { label: "Ather Accessories", href: "#accessories" },
        { label: "Chargers", href: "#chargers" }
      ]
    },
    {
      label: "Ather Ecosystem",
      href: "#ecosystem",
      dropdown: [
        { label: "Ather Grid", href: "#grid" },
        { label: "Ather Connect", href: "#connect" },
        { label: "Service Centers", href: "#service" }
      ]
    }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={atherLogo} 
              alt="Ather Energy" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-foreground hover:text-ather-blue transition-colors">
                  <span className="font-medium">{item.label}</span>
                  {item.dropdown && (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background rounded-lg shadow-medium border py-2">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-ather-blue transition-colors"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-ather-blue">
              <MapPin className="h-4 w-4 mr-2" />
              Locate Us
            </Button>
            <Button size="sm" className="bg-ather-blue hover:bg-ather-blue/90">
              Book Test Ride
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                {navigationItems.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <a
                      href={item.href}
                      className="block text-lg font-medium text-foreground hover:text-ather-blue transition-colors"
                    >
                      {item.label}
                    </a>
                    {item.dropdown && (
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block text-sm text-muted-foreground hover:text-ather-blue transition-colors"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-6 space-y-3">
                  <Button variant="outline" className="w-full">
                    <MapPin className="h-4 w-4 mr-2" />
                    Locate Us
                  </Button>
                  <Button className="w-full bg-ather-blue hover:bg-ather-blue/90">
                    Book Test Ride
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;