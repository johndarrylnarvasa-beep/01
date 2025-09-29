import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;