
import React from 'react';

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
    title: "Campanha de arrecadação de alimentos",
    excerpt: "Nossa campanha de arrecadação de alimentos para as famílias assistidas pela Casa do Adalto foi um grande sucesso...",
    date: "15/05/2023",
    imageSrc: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    link: "/noticias/campanha-alimentos"
  },
  {
    id: 2,
    title: "Voluntários realizam festa junina",
    excerpt: "No último sábado, nossos voluntários organizaram uma linda festa junina para as crianças e adolescentes...",
    date: "28/06/2023",
    imageSrc: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    link: "/noticias/festa-junina"
  },
  {
    id: 3,
    title: "Parceria com hospital amplia atendimento",
    excerpt: "A nova parceria firmada com o Hospital Regional permitirá que mais crianças tenham acesso a tratamentos...",
    date: "10/07/2023",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    link: "/noticias/parceria-hospital"
  },
  {
    id: 4,
    title: "Doação de empresa local transforma espaço de lazer",
    excerpt: "Graças à generosa doação da empresa XYZ, conseguimos reformar completamente nosso espaço de lazer...",
    date: "05/08/2023",
    imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    link: "/noticias/reforma-espaco"
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-casa-gray">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ACONTECE NA ASSOCIAÇÃO CASA DO ADALTO
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
                <a 
                  href={item.link}
                  className="text-casa-blue hover:underline font-medium inline-flex items-center"
                >
                  Leia mais...
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="/noticias"
            className="btn btn-secondary inline-flex items-center"
          >
            Ver todas as notícias
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
