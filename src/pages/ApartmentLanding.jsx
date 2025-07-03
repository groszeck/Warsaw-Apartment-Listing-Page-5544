import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import ContactSection from '../components/ContactSection';
import Contact from '../components/Contact';
import FloatingCTA from '../components/FloatingCTA';

const ApartmentLanding = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Hero onContactClick={() => setIsContactOpen(true)} />
      <Features />
      <Gallery />
      <Location />
      <ContactSection />
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FloatingCTA onContactClick={() => setIsContactOpen(true)} />
    </div>
  );
};

export default ApartmentLanding;