
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-casa-blue">Siga-nos</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://instagram.com/casadoadalto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-casa-gray rounded-full hover:bg-casa-blue hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5c-1 0-2-.5-2-2s1-2 2-2 2 .5 2 2-.5 2-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7.5h.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              
              <a 
                href="https://facebook.com/casadoadalto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-casa-gray rounded-full hover:bg-casa-blue hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              
              <a 
                href="https://youtube.com/casadoadalto" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-casa-gray rounded-full hover:bg-casa-blue hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10 10-4.5 10-10z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12 9 8v8l6-4z" />
                </svg>
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-casa-blue">Contatos</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-casa-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-medium">Noeli: (11) 98765-4321</p>
                  <p className="font-medium">Fabíola: (11) 91234-5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-casa-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="font-medium">contato@casadoadalto.org.br</p>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-casa-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-medium">Av. Principal, 123 - Bairro, Cidade - SP, 00000-000</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-casa-blue">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="/entidade" className="hover:text-casa-blue transition-colors">A Entidade</a>
              </li>
              <li>
                <a href="/como-ajudar" className="hover:text-casa-blue transition-colors">Como ajudar?</a>
              </li>
              <li>
                <a href="/depoimentos" className="hover:text-casa-blue transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="/galeria" className="hover:text-casa-blue transition-colors">Galeria de arte</a>
              </li>
              <li>
                <a href="/noticias" className="hover:text-casa-blue transition-colors">Notícias</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy;2023 Associação Casa do Adalto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
