
import React from 'react';
import { Button } from './ui/button';

const AboutSection = () => {
  return (
    <section className="py-16 bg-casa-light-blue">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            NOSSA HISTÓRIA: DO LUTO À ESPERANÇA
          </h2>
          
          <p className="text-lg mb-6">
            A Associação Casa do Adalto (ACAN) foi fundada em 2002 pela Sra. Noeli Teresinha Chagas, mãe de Adalto, que foi diagnosticado com Neuroblastoma aos 4 anos e faleceu aos 5 anos de idade.
          </p>
          
          <p className="text-lg mb-6">
            Sensibilizada pelas dificuldades enfrentadas durante o tratamento do filho e percebendo a necessidade de apoio a outras famílias na mesma situação, especialmente aquelas vindas de outros municípios para tratamento via SUS (TFD – Tratamento Fora de Domicílio), Noeli decidiu transformar sua dor em amor ao próximo.
          </p>
          
          <p className="text-lg mb-8">
            Hoje, a ACAN acolhe, apoia e orienta crianças e adolescentes com neoplasia e seus acompanhantes, oferecendo alimentação, hospedagem, transporte, roupas, orientação e apoio emocional e social, trazendo dignidade e esperança durante o difícil processo de tratamento.
          </p>
          
          <Button variant="secondary" asChild>
            <a href="/nossa-historia">
              Conheça a Trajetória da Sra. Noeli e do Adalto
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
