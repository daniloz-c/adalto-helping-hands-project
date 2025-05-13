
import React from 'react';

interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

const statItems: StatItem[] = [
  {
    id: 1,
    value: "5.200+",
    label: "Atendimentos realizados anualmente",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-casa-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    id: 2,
    value: "45.000+",
    label: "Refeições servidas por ano",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-casa-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18V3H3zm14 14H7V7h10v10z" />
      </svg>
    )
  },
  {
    id: 3,
    value: "120+",
    label: "Eventos e atividades recreativas",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-casa-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

const ImpactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
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
            O investimento das doações é feito com total transparência. 85% dos recursos são destinados diretamente para as atividades de auxílio às crianças e adolescentes, enquanto 15% são utilizados para a manutenção da estrutura e custos administrativos necessários.
          </p>
          
          <a 
            href="/transparencia"
            className="btn bg-black text-white hover:bg-gray-800 inline-flex items-center"
          >
            Clique aqui para ver o balanço de 2022
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
