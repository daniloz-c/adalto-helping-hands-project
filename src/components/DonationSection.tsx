
import React from 'react';

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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Mãos segurando um coração" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-casa-light-blue rounded-full -z-10"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">DOE AGORA</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Sua doação é fundamental para mantermos nossos projetos em funcionamento. Com ela, conseguimos oferecer alimentação, transporte, apoio psicológico e diversas outras formas de suporte às crianças, adolescentes e suas famílias durante o tratamento contra o câncer.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Cada centavo doado é utilizado com responsabilidade e transparência, focando sempre no bem-estar dos nossos assistidos. Você pode fazer a diferença na vida dessas pessoas com uma contribuição de qualquer valor.
            </p>
            
            <div className="space-y-4">
              <a 
                href="/doe"
                className="btn bg-casa-red hover:bg-casa-red/90 text-white font-bold py-3 px-8 rounded-md w-full sm:w-auto text-center inline-block"
              >
                FAÇA SUA DOAÇÃO COM O CARTÃO DE CRÉDITO
              </a>
              
              <a 
                href="/como-ajudar"
                className="btn bg-casa-blue hover:bg-casa-blue/90 text-white font-bold py-3 px-8 rounded-md w-full sm:w-auto text-center inline-block mt-4"
              >
                OUTRAS FORMAS DE DOAÇÃO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
