import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Car, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormPopup = ({ isOpen, onClose }: FormPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    model: "",
    interest: "",
    agreedToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.agreedToTerms) {
      toast({
        title: "Please fill all required fields",
        description: "Make sure to complete all required information and agree to terms.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Thank you for your interest!",
      description: "Our team will contact you within 24 hours to schedule your test ride.",
    });
    
    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      model: "",
      interest: "",
      agreedToTerms: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl font-bold text-ather-dark">
            <Car className="mr-2 h-6 w-6 text-ather-blue" />
            Book Your Test Ride
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address *
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number *
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="phone"
                type="tel"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          {/* City */}
          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-medium">
              City
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="city"
                type="text"
                placeholder="Enter your city"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Model Interest */}
          <div className="space-y-2">
            <Label htmlFor="model" className="text-sm font-medium">
              Which model interests you?
            </Label>
            <Select onValueChange={(value) => handleInputChange("model", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rizta">Ather Rizta</SelectItem>
                <SelectItem value="450s">Ather 450S</SelectItem>
                <SelectItem value="450apex">Ather 450 Apex</SelectItem>
                <SelectItem value="all">Compare All Models</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Interest Type */}
          <div className="space-y-2">
            <Label htmlFor="interest" className="text-sm font-medium">
              Primary Interest
            </Label>
            <Select onValueChange={(value) => handleInputChange("interest", value)}>
              <SelectTrigger>
                <SelectValue placeholder="What are you looking for?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="test-ride">Test Ride</SelectItem>
                <SelectItem value="purchase">Ready to Purchase</SelectItem>
                <SelectItem value="information">More Information</SelectItem>
                <SelectItem value="charging">Charging Solutions</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="terms"
              checked={formData.agreedToTerms}
              onCheckedChange={(checked) => handleInputChange("agreedToTerms", checked as boolean)}
              className="mt-1"
            />
            <Label
              htmlFor="terms"
              className="text-xs leading-relaxed text-muted-foreground cursor-pointer"
            >
              I agree to receive communications from Ather Energy regarding their products and services. 
              I understand that I can unsubscribe at any time. *
            </Label>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-ather-blue hover:bg-ather-blue/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book Test Ride"}
            </Button>
          </div>
        </form>

        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute right-4 top-4 p-2"
        >
          <X className="h-4 w-4" />
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default FormPopup;