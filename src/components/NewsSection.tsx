
import React from 'react';
import { Button } from './ui/button';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Campanha de Inverno arrecada agasalhos",
    excerpt: "Nossa campanha de arrecadação de agasalhos para as crianças e famílias assistidas pela Casa do Adalto bateu recordes...",
    date: "10/06/2023",
    imageSrc: "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
    link: "/noticias/campanha-inverno"
  },
  {
    id: 2,
    title: "Festa de aniversário de 21 anos da ACAN",
    excerpt: "Celebramos no último mês os 21 anos da Associação Casa do Adalto com um evento especial que reuniu apoiadores...",
    date: "28/07/2023",
    imageSrc: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
    link: "/noticias/aniversario-acan"
  },
  {
    id: 3,
    title: "Nova parceria amplia atendimento de transporte",
    excerpt: "A nova parceria firmada com empresa de transporte municipal permitirá que mais crianças tenham acesso facilitado...",
    date: "15/08/2023",
    imageSrc: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
    link: "/noticias/parceria-transporte"
  },
  {
    id: 4,
    title: "Voluntários renovam espaço de recreação",
    excerpt: "Um grupo de voluntários dedicou seu fim de semana para renovar completamente o espaço de recreação das crianças...",
    date: "22/09/2023",
    imageSrc: "https://images.unsplash.com/photo-1564500601645-ec3fb928be14",
    link: "/noticias/renovacao-espaco"
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-casa-gray">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          FIQUE POR DENTRO DAS NOVIDADES DA ACAN
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.imageSrc} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Button variant="link" className="text-casa-blue p-0 h-auto" asChild>
                  <a href={item.link} className="inline-flex items-center">
                    Leia mais...
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="secondary" asChild>
            <a href="/noticias">
              Ver todas as notícias
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
