import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Phone, Clock, Navigation, Zap } from "lucide-react";

interface MapSectionProps {
  onOpenForm: () => void;
}

const MapSection = ({ onOpenForm }: MapSectionProps) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("bangalore");

  const locations = [
    {
      id: "bangalore",
      city: "Bangalore",
      state: "Karnataka",
      dealerships: 12,
      chargingStations: 45,
      coordinates: { lat: 12.9716, lng: 77.5946 },
      featured: true
    },
    {
      id: "chennai",
      city: "Chennai",
      state: "Tamil Nadu",
      dealerships: 8,
      chargingStations: 32,
      coordinates: { lat: 13.0827, lng: 80.2707 },
      featured: true
    },
    {
      id: "hyderabad",
      city: "Hyderabad",
      state: "Telangana",
      dealerships: 6,
      chargingStations: 28,
      coordinates: { lat: 17.3850, lng: 78.4867 },
      featured: false
    },
    {
      id: "pune",
      city: "Pune",
      state: "Maharashtra",
      dealerships: 5,
      chargingStations: 22,
      coordinates: { lat: 18.5204, lng: 73.8567 },
      featured: false
    }
  ];

  const nearbyDealerships = [
    {
      name: "Ather Space - Koramangala",
      address: "80 Feet Road, Koramangala 4th Block, Bangalore",
      phone: "+91 80 4718 0000",
      hours: "10:00 AM - 8:00 PM",
      services: ["Test Rides", "Sales", "Service", "Charging"],
      distance: "2.3 km"
    },
    {
      name: "Ather Space - Indiranagar",
      address: "100 Feet Road, Indiranagar, Bangalore",
      phone: "+91 80 4718 0001",
      hours: "10:00 AM - 8:00 PM",
      services: ["Test Rides", "Sales", "Service"],
      distance: "3.8 km"
    },
    {
      name: "Ather Space - Whitefield",
      address: "ITPL Main Road, Whitefield, Bangalore",
      phone: "+91 80 4718 0002",
      hours: "10:00 AM - 8:00 PM",
      services: ["Test Rides", "Sales", "Service", "Charging"],
      distance: "8.2 km"
    }
  ];

  const currentLocation = locations.find(loc => loc.id === selectedLocation) || locations[0];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-ather-blue border-ather-blue">
            Find Us Near You
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Visit an Ather
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Experience Center</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Test ride, explore our scooters, and get expert advice at our experience centers across India
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Search */}
          <div className="space-y-6">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search your city..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Popular Cities */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Popular Cities</h3>
              <div className="space-y-2">
                {locations.map((location) => (
                  <Button
                    key={location.id}
                    variant={selectedLocation === location.id ? "default" : "ghost"}
                    className={`w-full justify-start p-4 h-auto ${
                      selectedLocation === location.id
                        ? "bg-ather-blue hover:bg-ather-blue/90"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setSelectedLocation(location.id)}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="text-left">
                        <div className="font-medium flex items-center">
                          {location.city}
                          {location.featured && (
                            <Badge className="ml-2 text-xs bg-ather-orange">Featured</Badge>
                          )}
                        </div>
                        <div className="text-sm opacity-70">{location.state}</div>
                      </div>
                      <div className="text-right text-sm">
                        <div>{location.dealerships} Centers</div>
                        <div className="opacity-70">{location.chargingStations} Chargers</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="border-ather-blue/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Ather Network in {currentLocation.city}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ather-blue">
                      {currentLocation.dealerships}
                    </div>
                    <div className="text-sm text-muted-foreground">Experience Centers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ather-orange">
                      {currentLocation.chargingStations}
                    </div>
                    <div className="text-sm text-muted-foreground">Ather Grid Points</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-medium">
              {/* Map Header */}
              <div className="bg-ather-blue text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="font-medium">{currentLocation.city}, {currentLocation.state}</span>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white text-ather-blue hover:bg-white/90"
                  >
                    <Navigation className="h-4 w-4 mr-1" />
                    Get Directions
                  </Button>
                </div>
              </div>

              {/* Map Area */}
              <div className="aspect-[16/10] bg-gradient-to-br from-ather-light to-muted relative overflow-hidden">
                {/* Simulated Map */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--ather-blue))_2px,_transparent_2px)] [background-size:40px_40px] opacity-20" />
                
                {/* Location Markers */}
                <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-ather-blue rounded-full shadow-medium animate-pulse" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-ather-blue text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Koramangala
                  </div>
                </div>
                
                <div className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-ather-orange rounded-full shadow-medium animate-pulse" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-ather-orange text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Charging Hub
                  </div>
                </div>
                
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-ather-blue rounded-full shadow-medium animate-pulse" />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-ather-blue text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Indiranagar
                  </div>
                </div>

                {/* Map Center Indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 border-4 border-ather-blue bg-white rounded-full shadow-medium flex items-center justify-center">
                    <div className="w-2 h-2 bg-ather-blue rounded-full" />
                  </div>
                </div>
              </div>

              {/* Nearby Locations List */}
              <div className="p-4 bg-white border-t">
                <h4 className="font-semibold text-foreground mb-4">
                  Nearby Ather Experience Centers
                </h4>
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {nearbyDealerships.map((dealership, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-medium text-foreground">{dealership.name}</h5>
                        <span className="text-sm text-ather-blue font-medium">{dealership.distance}</span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">{dealership.address}</p>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Phone className="h-4 w-4 mr-1" />
                        <span className="mr-4">{dealership.phone}</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{dealership.hours}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {dealership.services.map((service) => (
                          <Badge key={service} variant="secondary" className="text-xs">
                            {service === "Charging" && <Zap className="h-3 w-3 mr-1" />}
                            {service}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          Get Directions
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1 bg-ather-blue hover:bg-ather-blue/90"
                          onClick={onOpenForm}
                        >
                          Book Visit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;