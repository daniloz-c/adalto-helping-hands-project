
import React from 'react';
import { Home, Utensils, Car, Heart, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    id: 1,
    title: "Acolhimento e Hospedagem",
    description: "Oferecemos hospedagem para crianças e adolescentes em tratamento, junto com seus acompanhantes, priorizando o conforto durante esse momento difícil.",
    icon: <Home className="h-10 w-10 text-casa-blue" />,
    link: "/nossos-servicos#hospedagem"
  },
  {
    id: 2,
    title: "Alimentação Completa",
    description: "Fornecemos todas as refeições diárias, preparadas com carinho e atenção às necessidades nutricionais dos nossos assistidos.",
    icon: <Utensils className="h-10 w-10 text-casa-yellow" />,
    link: "/nossos-servicos#alimentacao"
  },
  {
    id: 3,
    title: "Transporte para Tratamentos",
    description: "Realizamos o transporte das crianças e adolescentes para hospitais, clínicas e consultas médicas, facilitando o acesso ao tratamento.",
    icon: <Car className="h-10 w-10 text-casa-red" />,
    link: "/nossos-servicos#transporte"
  },
  {
    id: 4,
    title: "Apoio Emocional e Social",
    description: "Oferecemos suporte emocional, orientação e atividades que promovem bem-estar durante o período de tratamento.",
    icon: <Heart className="h-10 w-10 text-casa-purple" />,
    link: "/nossos-servicos#apoio"
  },
  {
    id: 5,
    title: "Orientação e Encaminhamentos",
    description: "Auxiliamos as famílias com orientações sobre direitos, documentação e encaminhamentos necessários para o tratamento via SUS.",
    icon: <FileText className="h-10 w-10 text-casa-blue" />,
    link: "/nossos-servicos#orientacao"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-casa-light-yellow">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          NOSSOS SERVIÇOS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-0 flex flex-col items-center">
                {service.icon}
                <CardTitle className="mt-4 text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-center text-gray-700">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center pt-0">
                <Button variant="link" className="text-casa-blue" asChild>
                  <a href={service.link}>Saiba mais</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="secondary" asChild>
            <a href="/nossos-servicos">
              Conheça todos os nossos serviços
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
