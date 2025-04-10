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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://hook.us1.make.celonis.com/bs3twkryw2u2n6c3a5ka53sj7a39lpwp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário');
      }

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
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-10 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            O próximo passo é seu!
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Acelere suas vendas e junte-se à Approva Fácil agora mesmo!
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
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
