
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Suzana Marcusse',
      rating: 5,
      text: '"A Approva Fácil transformou minha carreira como corretora. Com os leads pré-aprovados, minhas vendas aumentaram mais de 60% no primeiro trimestre!"',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
    },
    {
      name: 'Rosilene Lobo de Carvalho',
      rating: 5,
      text: '"Nunca imaginei que seria tão fácil fazer vendas com clientes já qualificados. O suporte da equipe é incrível e os treinamentos transformaram minha abordagem comercial."',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
    },
    {
      name: 'Claudemir Guimarães',
      rating: 5,
      text: '"Em 15 anos como corretor, nunca tive resultados tão expressivos. A Approva Fácil revolucionou minha forma de trabalhar e agora consigo fechar negócios em tempo recorde."',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }
  ];

  return (
    <section id="testimonials" className="py-10 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="headline">
            O que dizem nossos corretores?
          </h2>
          <p className="subheadline">
            Seja parte da transformação que milhares de pessoas já vivenciaram. Esses são apenas alguns dos inúmeros depoimentos da nossa equipe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-bold text-secondary">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} fill="currentColor" size={16} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary inline-block">
            Quero ser um corretor Approva
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
