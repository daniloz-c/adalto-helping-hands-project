
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Social */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Logo />
            </div>
            <p className="text-gray-400">
              Associação Casa do Adalto para apoio às Crianças e Adolescentes com Neoplasia (ACAN) - Organização sem fins lucrativos.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/casadoadalto" className="hover:text-casa-yellow" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com/casadoadalto" className="hover:text-casa-yellow" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://youtube.com/casadoadalto" className="hover:text-casa-yellow" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <p><span className="font-medium text-white">Telefone:</span> (47) 3635-5597</p>
              <p><span className="font-medium text-white">Noeli:</span> (47) 99988-7766</p>
              <p><span className="font-medium text-white">Fabíola:</span> (47) 99977-6655</p>
              <p><span className="font-medium text-white">Email:</span> adaltochagas@gmail.com</p>
              <p><span className="font-medium text-white">Endereço:</span> Rua Inambú, n° 3.290 Bairro Costa e Silva - Joinville/SC</p>
            </div>
          </div>
          
          {/* Links Úteis */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="/nossa-historia" className="text-gray-400 hover:text-casa-yellow">Nossa História</a></li>
              <li><a href="/como-ajudar" className="text-gray-400 hover:text-casa-yellow">Como Ajudar</a></li>
              <li><a href="/nossos-servicos" className="text-gray-400 hover:text-casa-yellow">Nossos Serviços</a></li>
              <li><a href="/depoimentos" className="text-gray-400 hover:text-casa-yellow">Depoimentos</a></li>
              <li><a href="/transparencia" className="text-gray-400 hover:text-casa-yellow">Transparência</a></li>
            </ul>
          </div>
          
          {/* Newsletter/Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Receba Novidades</h3>
            <p className="text-gray-400 mb-4">Inscreva-se para receber atualizações sobre nosso trabalho e como você pode ajudar.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-casa-yellow"
              />
              <Button type="submit" className="w-full">
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>© {currentYear} Associação Casa do Adalto - ACAN. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
