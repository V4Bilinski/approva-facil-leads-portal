
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <img 
            src="/public/lovable-uploads/1bbde089-85b9-48c1-82b5-cc9100e5542b.png" 
            alt="Approva Fácil" 
            className="h-12"
          />
        </div>
        
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">
            &copy; {currentYear} Approva Fácil. Todos os direitos reservados.
          </p>
          <p>
            Designed By V4 Company
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
