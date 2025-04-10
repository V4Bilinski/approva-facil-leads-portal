
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Offer from '@/components/Offer';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero 
          url="/lovable-uploads/c176386f-f8be-4e0c-9f4e-42b7bb68dd43.png"
          text="Corretor, está pronto para transformar sua carreira imobiliária?"
        />
        <About />
        <Testimonials />
        <Offer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
