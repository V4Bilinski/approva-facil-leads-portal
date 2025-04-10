
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    rg: '',
    birthdate: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally would submit to a backend, but we'll just show a toast for now
    toast({
      title: "Inscrição recebida!",
      description: "Entraremos em contato em breve.",
      variant: "default",
    });
    // Reset form
    setFormData({
      name: '',
      rg: '',
      birthdate: '',
      email: '',
      phone: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary text-white">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            O próximo passo é seu!
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Acelere suas vendas e junte-se à Approva Fácil agora mesmo!
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-secondary font-medium mb-2">Nome Completo</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
              />
            </div>
            
            <div>
              <label htmlFor="rg" className="block text-secondary font-medium mb-2">RG</label>
              <input 
                type="text" 
                id="rg" 
                name="rg" 
                required
                value={formData.rg}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
              />
            </div>
            
            <div>
              <label htmlFor="birthdate" className="block text-secondary font-medium mb-2">Data de Nascimento</label>
              <input 
                type="date" 
                id="birthdate" 
                name="birthdate" 
                required
                value={formData.birthdate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-secondary font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-secondary font-medium mb-2">Telefone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-900"
              />
            </div>
            
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors uppercase tracking-wider"
              >
                Quero me inscrever
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
