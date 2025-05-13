
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from './ui/aspect-ratio';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="h-16 w-auto">
        <AspectRatio ratio={2 / 1} className="flex items-center justify-center">
          <img 
            src="/lovable-uploads/6016fe2a-5cbb-4466-86fa-94d749fe7c49.png" 
            alt="Casa do Adalto - Apoio às crianças com câncer" 
            className="h-full w-auto object-contain"
            onError={(e) => {
              console.error("Erro ao carregar a imagem do logo");
              e.currentTarget.style.display = 'none';
            }}
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
