
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-casa-light-blue">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            SOBRE A ORGANIZAÇÃO ASSOCIAÇÃO CASA DO ADALTO
          </h2>
          
          <p className="text-lg mb-6">
            A Associação Casa do Adalto foi fundada em 2005 com o objetivo de acolher e dar suporte a crianças e adolescentes em tratamento contra o câncer, bem como suas famílias. Nossa inspiração veio de Adalto, um jovem que enfrentou a doença com muita coragem e cuja história motivou a criação deste espaço de apoio, acolhimento e esperança.
          </p>
          
          <p className="text-lg mb-6">
            Hoje, atendemos dezenas de famílias mensalmente, oferecendo hospedagem, alimentação, transporte para hospitais, apoio psicológico, atividades recreativas e muito mais. Nossa missão é minimizar o sofrimento durante o tratamento e proporcionar um ambiente acolhedor e humanizado para todos.
          </p>
          
          <p className="text-lg mb-8">
            Trabalhamos com uma equipe de profissionais dedicados e contamos com o apoio essencial de voluntários e doadores, que são fundamentais para a continuidade do nosso trabalho.
          </p>
          
          <a 
            href="/entidade"
            className="btn btn-secondary inline-flex items-center"
          >
            Clique aqui e saiba mais
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
