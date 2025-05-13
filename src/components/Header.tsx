
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const menuItems = [
    { name: "Página Inicial", href: "/" },
    { name: "Nossa História", href: "/nossa-historia" },
    { name: "Como Ajudar", href: "/como-ajudar" },
    { name: "Nossos Serviços", href: "/nossos-servicos" },
    { name: "Depoimentos", href: "/depoimentos" },
    { name: "Notícias", href: "/noticias" },
    { name: "Doe Agora", href: "/doe", isHighlighted: true }
  ];
  
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => (
            <Link 
              key={item.name}
              to={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${item.isHighlighted 
                  ? 'bg-casa-red text-white hover:bg-casa-red/90' 
                  : 'text-gray-700 hover:bg-casa-gray hover:text-gray-900'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button 
            type="button"
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            <span className="sr-only">Abrir menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg animate-fade-in">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium
                  ${item.isHighlighted
                    ? 'bg-casa-red text-white'
                    : 'text-gray-700 hover:bg-casa-gray hover:text-gray-900'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
