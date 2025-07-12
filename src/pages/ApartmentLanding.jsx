import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from '../contexts/LanguageContext';
import LanguageSelector from '../components/LanguageSelector';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import ContactSection from '../components/ContactSection';
import Contact from '../components/Contact';
import FloatingCTA from '../components/FloatingCTA';

const ApartmentLanding = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        {/* Language Selector */}
        <div className="fixed top-4 right-4 z-50">
          <LanguageSelector />
        </div>

        <Hero onContactClick={() => setIsContactOpen(true)} />
        <VideoSection />
        <Features />
        <Gallery />
        <Location />
        <ContactSection />
        <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <FloatingCTA onContactClick={() => setIsContactOpen(true)} />
      </div>
    </LanguageProvider>
  );
};

export default ApartmentLanding;