
import React, { useEffect, useState } from 'react';

interface Partner {
  id: number;
  name: string;
  logoSrc: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Parceiro 1",
    logoSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&h=100&q=60"
  },
  {
    id: 2,
    name: "Parceiro 2",
    logoSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=200&h=100&q=60"
  },
  {
    id: 3,
    name: "Parceiro 3",
    logoSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=200&h=100&q=60"
  },
  {
    id: 4,
    name: "Parceiro 4",
    logoSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=200&h=100&q=60"
  },
  {
    id: 5,
    name: "Parceiro 5",
    logoSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&h=100&q=60"
  },
  {
    id: 6,
    name: "Parceiro 6",
    logoSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=200&h=100&q=60"
  }
];

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4; // Number of partners visible at once
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= partners.length ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? partners.length - 1 : prevIndex - 1
    );
  };
  
  const getVisiblePartners = () => {
    const result = [];
    for (let i = 0; i < visibleItems; i++) {
      const index = (currentIndex + i) % partners.length;
      result.push(partners[index]);
    }
    return result;
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  return (
    <section className="py-16 bg-casa-gray">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          EMPRESAS PARCEIRAS
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex gap-6 items-center justify-center">
              {getVisiblePartners().map((partner) => (
                <div 
                  key={partner.id}
                  className="w-full sm:w-1/2 md:w-1/4 p-4 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <img 
                    src={partner.logoSrc}
                    alt={partner.name}
                    className="max-h-16 max-w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-casa-gray/80"
            onClick={prevSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-casa-gray/80"
            onClick={nextSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {partners.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index >= currentIndex && index < currentIndex + visibleItems 
                  ? 'w-8 bg-casa-blue' 
                  : 'w-2 bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
