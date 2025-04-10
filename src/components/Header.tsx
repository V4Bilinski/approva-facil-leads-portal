
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-4 top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/1bbde089-85b9-48c1-82b5-cc9100e5542b.png" 
            alt="Approva Fácil" 
            className="h-5 md:h-6" // Reduzido em 50%
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
