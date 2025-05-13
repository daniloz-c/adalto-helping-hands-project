
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-24 flex items-center justify-center flex-col">
          <h1 className="text-6xl font-bold text-casa-blue mb-6">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! Página não encontrada</p>
          <p className="text-gray-500 mb-8 max-w-md text-center">
            A página que você está procurando não existe ou foi movida.
          </p>
          <a 
            href="/" 
            className="btn btn-primary"
          >
            Voltar para a Página Inicial
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
