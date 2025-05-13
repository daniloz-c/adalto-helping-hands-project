
import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
  imageSrc: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "APOIE A NOSSA VAKINHA",
    subtitle: "Ajude a transformar vidas",
    cta: "DOE AGORA",
    ctaLink: "/doe",
    secondaryCta: "VOCÊ PODE FAZER DOAÇÕES DO VALOR QUE SEU CORAÇÃO MANDAR",
    secondaryCtaLink: "/como-ajudar",
    imageSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
  },
  {
    id: 2,
    title: "SEPARE ALIMENTOS PARA DOAR",
    subtitle: "Sua ajuda é fundamental",
    cta: "SAIBA COMO",
    ctaLink: "/como-ajudar",
    imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
  },
  {
    id: 3,
    title: "TORNE-SE VOLUNTÁRIO",
    subtitle: "Compartilhe seu tempo e amor",
    cta: "PARTICIPE",
    ctaLink: "/como-ajudar",
    secondaryCta: "FAÇA A DIFERENÇA NA VIDA DE CRIANÇAS E ADOLESCENTES",
    secondaryCtaLink: "/como-ajudar",
    imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]);
  
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.imageSrc})`,
              filter: 'brightness(0.7)'
            }}
          />
          
          {/* Content */}
          <div className="relative container h-full flex flex-col items-center justify-center text-center text-white z-10 px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h1>
            <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={slide.ctaLink}
                className="btn bg-casa-red hover:bg-casa-red/90 text-white text-lg px-6 py-3 rounded-md font-medium"
              >
                {slide.cta}
              </a>
            </div>
            
            {slide.secondaryCta && (
              <a 
                href={slide.secondaryCtaLink}
                className="mt-6 text-white bg-black/30 px-6 py-3 rounded-md hover:bg-black/40 transition-colors text-sm md:text-base"
              >
                {slide.secondaryCta}
              </a>
            )}
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button 
        className="absolute top-1/2 left-4 z-10 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <span className="sr-only">Anterior</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="absolute top-1/2 right-4 z-10 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <span className="sr-only">Próximo</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-casa-yellow' : 'w-2 bg-white/60'
            }`}
            onClick={() => goToSlide(index)}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
