
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Card, CardContent } from './ui/card';

const partners = [
  { id: 1, name: "Empresa Parceira 1", logo: "https://images.unsplash.com/photo-1472266408199-74dd6f7b632f" },
  { id: 2, name: "Empresa Parceira 2", logo: "https://images.unsplash.com/photo-1561070791-9cb2e8e8f4ab" },
  { id: 3, name: "Empresa Parceira 3", logo: "https://images.unsplash.com/photo-1554200876-e522cf1f1f13" },
  { id: 4, name: "Empresa Parceira 4", logo: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b" },
  { id: 5, name: "Empresa Parceira 5", logo: "https://images.unsplash.com/photo-1604079628298-8526cc0710a1" },
  { id: 6, name: "Empresa Parceira 6", logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f" },
  { id: 7, name: "Empresa Parceira 7", logo: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43" },
  { id: 8, name: "Empresa Parceira 8", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          EMPRESAS QUE ABRAÇAM NOSSA CAUSA
        </h2>
        
        <div className="relative">
          <Carousel className="w-full" 
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {partners.map((partner) => (
                <CarouselItem key={partner.id} className="md:basis-1/3 lg:basis-1/4">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <div className="overflow-hidden rounded-lg bg-white p-2 w-full h-full">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-full w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex" />
            </div>
          </Carousel>
        </div>
        
        <p className="text-center mt-10 text-lg text-gray-700">
          Agradecemos a todas as empresas e instituições que apoiam nosso trabalho. 
          <a href="/parceiros" className="text-casa-blue font-medium hover:underline ml-2">
            Seja um parceiro
          </a>
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
