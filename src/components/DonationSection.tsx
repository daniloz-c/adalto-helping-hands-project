
import React from 'react';
import { Button } from './ui/button';

const DonationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/3">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-casa-light-yellow rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6" 
                alt="Mãos segurando um coração" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-casa-light-blue rounded-full -z-10"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">SUA AJUDA É ESSENCIAL - DOE AGORA</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Sua doação contribui diretamente para a alimentação, hospedagem, transporte e bem-estar das crianças e adolescentes em tratamento contra o câncer, assim como suas famílias que vêm de outros municípios para tratamento em Joinville.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Cada contribuição, seja grande ou pequena, faz diferença real na vida das famílias acolhidas pela Casa do Adalto. Você pode ajudar com doações financeiras, de alimentos, roupas ou até mesmo com seu tempo como voluntário.
            </p>
            
            <div className="space-y-4">
              <Button className="w-full sm:w-auto text-center bg-casa-red hover:bg-casa-red/90" size="lg" asChild>
                <a href="/doe">
                  DOE COM CARTÃO DE CRÉDITO
                </a>
              </Button>
              
              <Button className="w-full sm:w-auto text-center bg-casa-blue hover:bg-casa-blue/90 mt-4" size="lg" asChild>
                <a href="/como-ajudar">
                  OUTRAS FORMAS DE DOAR
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
