
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="w-12 h-12 bg-casa-yellow rounded-full flex items-center justify-center text-black font-bold text-lg">
        ACAN
      </div>
      <span className="ml-3 text-xl font-bold text-casa-blue hidden md:block">Casa do Adalto</span>
    </Link>
  );
};

export default Logo;
