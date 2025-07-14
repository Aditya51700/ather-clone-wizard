import { useState, useEffect } from "react";

const ImageCarousel = () => {
  const images = [
    "/lovable-uploads/22b6a4d9-6443-4364-87c7-5bf2a456f1b8.png", // Person with scooter at sports court
    "/lovable-uploads/57792068-3923-45db-84f6-7ac19eb264e6.png", // Close-up Ather scooter at night
    "/lovable-uploads/e4364045-5cb6-4336-a35c-86cd09a5e263.png", // Person riding on road
    "/lovable-uploads/57b87044-8202-4226-b4d3-ad536c224939.png", // Multiple scooters in tunnel
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-strong p-4 max-w-80">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={images[currentImageIndex]}
            alt={`Ather Electric Scooter ${currentImageIndex + 1}`}
            className="w-full h-48 object-cover transition-opacity duration-1000"
          />
          
          {/* Image Indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? "bg-ather-blue scale-125" 
                    : "bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Caption */}
        <div className="mt-3 text-center">
          <h3 className="text-sm font-semibold text-foreground">
            Experience Ather
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            Real riders, real experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;