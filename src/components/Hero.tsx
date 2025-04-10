
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white to-green-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight animate-fade-in-up">
              Corretor, está pronto para transformar sua carreira imobiliária?
            </h1>
            <p className="text-xl md:text-2xl mt-6 text-gray-700 animate-fade-in-up-delay-1">
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
          <div className="md:w-1/2 md:pl-10">
            <div className="rounded-image">
              <img 
                src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Corretor de imóveis bem-sucedido" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
