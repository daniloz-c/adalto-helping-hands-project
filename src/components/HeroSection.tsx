
import React from 'react';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';
import { AspectRatio } from './ui/aspect-ratio';

const slides = [
  {
    id: 1,
    imageSrc: "/lovable-uploads/a618962f-bec6-4fe6-b37f-44a25c2919af.png",
    title: "Apoie uma Criança em Tratamento",
    description: "Sua doação transforma vidas e traz esperança para crianças e adolescentes em tratamento contra o câncer.",
    primaryCta: { text: "Doe Agora", href: "/doe" },
    secondaryCta: { text: "Saiba Mais", href: "/nossa-historia" }
  },
  {
    id: 2,
    imageSrc: "/lovable-uploads/a8a00bdb-14fb-4c3a-9821-88991ae74cb7.png",
    title: "Sua Doação Transforma Vidas",
    description: "Ajude-nos a proporcionar hospedagem, alimentação e transporte para crianças em tratamento e suas famílias.",
    primaryCta: { text: "Como Ajudar", href: "/como-ajudar" },
    secondaryCta: { text: "Nossos Serviços", href: "/nossos-servicos" }
  },
  {
    id: 3,
    imageSrc: "/lovable-uploads/452d060c-2d7b-4f09-9318-5c65ab3516fd.png",
    title: "Conheça a Casa de Apoio",
    description: "Um espaço de acolhimento e cuidado para crianças e adolescentes em tratamento contra o câncer.",
    primaryCta: { text: "Conheça Nossa História", href: "/nossa-historia" },
    secondaryCta: { text: "Seja Voluntário", href: "/como-ajudar#voluntariado" }
  }
];

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative">
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img 
                    src={slide.imageSrc} 
                    alt={slide.title}
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center px-6 max-w-3xl">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-white text-lg md:text-xl mb-8">
                        {slide.description}
                      </p>
                      <div className="space-x-4">
                        <Button size="lg" asChild>
                          <a href={slide.primaryCta.href} className="px-8">
                            {slide.primaryCta.text}
                          </a>
                        </Button>
                        <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20" asChild>
                          <a href={slide.secondaryCta.href} className="px-8">
                            {slide.secondaryCta.text}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;
