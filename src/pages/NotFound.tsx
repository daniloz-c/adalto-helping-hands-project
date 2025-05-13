
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-bold text-casa-blue mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Página não encontrada</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            A página que você está procurando não existe ou foi removida. Por favor, verifique o endereço ou volte para a página inicial.
          </p>
          <Button asChild>
            <Link to="/">Voltar para a página inicial</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
