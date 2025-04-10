
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            src="/public/lovable-uploads/1bbde089-85b9-48c1-82b5-cc9100e5542b.png" 
            alt="Approva Fácil" 
            className="h-10 md:h-12"
          />
        </a>
        
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-secondary hover:text-primary font-medium transition-colors">
            Por que escolher
          </a>
          <a href="#testimonials" className="text-secondary hover:text-primary font-medium transition-colors">
            Depoimentos
          </a>
          <a href="#offer" className="text-secondary hover:text-primary font-medium transition-colors">
            O que oferecemos
          </a>
          <a href="#contact" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-medium">
            Inscreva-se
          </a>
        </div>
        
        <button 
          className="md:hidden text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-secondary hover:text-primary font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Por que escolher
            </a>
            <a 
              href="#testimonials" 
              className="text-secondary hover:text-primary font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#offer" 
              className="text-secondary hover:text-primary font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              O que oferecemos
            </a>
            <a 
              href="#contact" 
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Inscreva-se
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
