
import React from 'react';
import { ShoppingBag, Shield, TrendingUp } from 'lucide-react';

const Offer = () => {
  return (
    <section id="offer" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="headline">
            O que estamos oferecendo?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="rounded-image">
            <img 
              src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
              alt="Corretor de imóveis em reunião" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-4">
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-secondary">Ferramenta Inteligente</h3>
                <p className="text-gray-600">
                  Um marketplace que conecta você rapidamente aos melhores empreendimentos do mercado, de acordo com o perfil de seus clientes que já chegam com crédito aprovado.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-secondary">Suporte Contínuo</h3>
                <p className="text-gray-600">
                  Nossa IA, Bella, estará sempre à sua disposição para apoiar e recuperar cotações que ficaram pelo caminho.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-secondary">Oportunidade de Crescimento</h3>
                <p className="text-gray-600">
                  Aumente sua taxa de conversão e maximize seus lucros com leads que já têm a aprovação de crédito.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="#contact" className="btn-primary inline-block">
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default Offer;
