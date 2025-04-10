
import React from 'react';
import { Check, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="headline">
            Por que escolher a Approva Fácil?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card-feature flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary">Leads Prontos para Negociar</h3>
            <p className="text-gray-600">
              Te oferecemos uma carteira de clientes com crédito já aprovado
            </p>
          </div>

          <div className="card-feature flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-secondary">Acelere suas Vendas</h3>
            <p className="text-gray-600">
              Treinamentos para maximizar seus ganhos
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="#contact" className="btn-primary inline-block">
            Quero começar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
