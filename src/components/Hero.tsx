
import React from 'react';

interface HeroProps {
  url?: string;
  text?: string;
}

const Hero = ({ 
  url = "/lovable-uploads/c176386f-f8be-4e0c-9f4e-42b7bb68dd43.png", 
  text = "Corretor, está pronto para transformar sua carreira imobiliária?" 
}: HeroProps) => {
  return (
    <section 
      className="relative py-20 md:py-28 min-h-[90vh] flex items-center"
      style={{
        backgroundImage: `url('${url}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      id="hero"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] text-shadow">
            {text}
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-white animate-fade-in-up-delay-1 drop-shadow-md">
            Receba leads qualificados com crédito aprovado e venda mais!
            A oportunidade que você esperava está aqui:
          </p>
          <div className="mt-8 animate-fade-in-up-delay-2">
            <a 
              href="#contact" 
              className="btn-primary inline-block hover:scale-105 transition-transform duration-300"
            >
              Quero viver esse sonho!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
