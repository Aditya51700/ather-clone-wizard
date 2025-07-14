import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Zap, Battery, Gauge, Smartphone } from "lucide-react";

interface ProductShowcaseProps {
  onOpenForm: () => void;
}

const ProductShowcase = ({ onOpenForm }: ProductShowcaseProps) => {
  const [activeModel, setActiveModel] = useState("rizta");

  const models = [
    {
      id: "rizta",
      name: "Ather Rizta",
      tagline: "The Most Awarded Electric Scooter",
      price: "₹1,10,000",
      originalPrice: "₹1,20,000",
      image: "/api/placeholder/400/300",
      color: "#2563eb",
      features: [
        { icon: Battery, label: "120km Range", value: "True Range" },
        { icon: Zap, label: "0-40 kmph", value: "3.3 seconds" },
        { icon: Gauge, label: "90 kmph", value: "Top Speed" },
        { icon: Smartphone, label: "7\" Touch", value: "Dashboard" }
      ],
      highlights: ["Award Winner 2024", "Family Friendly", "Smart Features"]
    },
    {
      id: "450s",
      name: "Ather 450S",
      tagline: "Smart. Stylish. Sustainable.",
      price: "₹1,30,000",
      originalPrice: "₹1,40,000",
      image: "/api/placeholder/400/300",
      color: "#ea580c",
      features: [
        { icon: Battery, label: "115km Range", value: "Certified" },
        { icon: Zap, label: "0-40 kmph", value: "3.9 seconds" },
        { icon: Gauge, label: "90 kmph", value: "Top Speed" },
        { icon: Smartphone, label: "7\" Touch", value: "Dashboard" }
      ],
      highlights: ["DeepView Display", "Magic Twist", "OTA Updates"]
    },
    {
      id: "450apex",
      name: "Ather 450 Apex",
      tagline: "Performance Redefined",
      price: "₹1,80,000",
      originalPrice: "₹1,90,000",
      image: "/api/placeholder/400/300",
      color: "#dc2626",
      features: [
        { icon: Battery, label: "150km Range", value: "True Range" },
        { icon: Zap, label: "0-40 kmph", value: "2.9 seconds" },
        { icon: Gauge, label: "100 kmph", value: "Top Speed" },
        { icon: Smartphone, label: "7\" Touch", value: "Dashboard" }
      ],
      highlights: ["Sports Mode", "Premium Design", "Fastest Acceleration"]
    }
  ];

  const currentModel = models.find(model => model.id === activeModel) || models[0];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-ather-blue border-ather-blue">
            Our Product Range
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Perfect
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Electric Ride</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From family-friendly to performance-focused, find the Ather scooter that matches your lifestyle
          </p>
        </div>

        {/* Model Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {models.map((model) => (
            <Button
              key={model.id}
              variant={activeModel === model.id ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveModel(model.id)}
              className={`px-6 py-3 transition-all duration-300 ${
                activeModel === model.id
                  ? "bg-ather-blue hover:bg-ather-blue/90 text-white shadow-medium"
                  : "hover:border-ather-blue hover:text-ather-blue"
              }`}
            >
              {model.name}
            </Button>
          ))}
        </div>

        {/* Selected Model Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Model Image */}
          <div className="relative">
            <div 
              className="relative overflow-hidden rounded-2xl shadow-strong"
              style={{ backgroundColor: `${currentModel.color}10` }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-white to-gray-50 flex items-center justify-center">
                <div 
                  className="w-80 h-60 rounded-lg shadow-lg"
                  style={{ backgroundColor: currentModel.color }}
                >
                  <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
                    {currentModel.name}
                  </div>
                </div>
              </div>
              
              {/* Floating Highlights */}
              <div className="absolute top-4 left-4">
                {currentModel.highlights.slice(0, 2).map((highlight, index) => (
                  <Badge 
                    key={highlight} 
                    className={`mb-2 block w-fit ${
                      index === 0 ? "bg-ather-orange text-white" : "bg-ather-blue text-white"
                    }`}
                  >
                    {highlight}
                  </Badge>
                ))}
              </div>

              {/* Price Badge */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-medium p-3">
                <div className="text-right">
                  <div className="text-sm text-muted-foreground line-through">
                    {currentModel.originalPrice}
                  </div>
                  <div className="text-xl font-bold text-ather-blue">
                    {currentModel.price}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Model Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {currentModel.name}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {currentModel.tagline}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {currentModel.features.map((feature, index) => (
                <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-shadow">
                  <CardContent className="p-4 text-center">
                    <feature.icon className="h-8 w-8 text-ather-blue mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">
                      {feature.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {feature.value}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Key Highlights:</h4>
              <div className="flex flex-wrap gap-2">
                {currentModel.highlights.map((highlight) => (
                  <Badge key={highlight} variant="secondary" className="px-3 py-1">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg" 
                className="bg-ather-blue hover:bg-ather-blue/90 px-8"
                onClick={onOpenForm}
              >
                Book Test Ride
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-ather-blue text-ather-blue hover:bg-ather-blue hover:text-white px-8"
                onClick={onOpenForm}
              >
                Learn More
              </Button>
            </div>

            {/* Compare Option */}
            <div className="pt-4 border-t">
              <Button variant="ghost" className="text-ather-blue hover:text-ather-blue/80">
                Compare All Models
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;