
import React from 'react';
import { FileText, Users, CalendarDays } from 'lucide-react';
import { Button } from './ui/button';

interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

const statItems: StatItem[] = [
  {
    id: 1,
    value: "3.800+",
    label: "Atendimentos realizados anualmente",
    icon: <Users className="h-12 w-12 text-casa-blue" />
  },
  {
    id: 2,
    value: "36.500+",
    label: "Refeições servidas por ano",
    icon: <CalendarDays className="h-12 w-12 text-casa-yellow" />
  },
  {
    id: 3,
    value: "4.200+",
    label: "Transportes para hospitais e clínicas",
    icon: <FileText className="h-12 w-12 text-casa-red" />
  }
];

const ImpactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          NOSSO IMPACTO EM NÚMEROS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statItems.map((item) => (
            <div 
              key={item.id}
              className="bg-casa-gray p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2 text-gray-800">{item.value}</h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-lg text-gray-700 mb-8">
            Cada gesto de apoio se reflete diretamente no bem-estar das crianças e adolescentes que acolhemos. Sua contribuição faz a diferença em cada sorriso e em cada pequena vitória conquistada durante o tratamento.
          </p>
          
          <Button variant="outline" className="bg-black text-white hover:bg-gray-800 border-none" asChild>
            <a href="/transparencia">
              Clique aqui para ver nosso Balanço Social
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
