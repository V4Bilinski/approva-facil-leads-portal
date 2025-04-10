
import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative py-20 md:py-28 min-h-[80vh] flex items-center"
      style={{
        backgroundImage: "url('/lovable-uploads/64bb5608-34c0-45dc-8589-294f3cab91bc.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Corretor, está pronto para transformar sua carreira imobiliária?
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-white animate-fade-in-up-delay-1">
            Receba leads qualificados com crédito aprovado e venda mais!
            A oportunidade que você esperava está aqui:
          </p>
          <div className="mt-8 animate-fade-in-up-delay-2">
            <a 
              href="#contact" 
              className="btn-primary inline-block"
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
