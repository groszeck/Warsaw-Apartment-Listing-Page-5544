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
import AboutMeSection from '../components/AboutMeSection';
import { useTranslation } from 'react-i18next';

const ApartmentLanding = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <LanguageProvider>
      <div className="fixed top-0 left-0 w-full z-50 bg-white/90 shadow-md flex flex-col sm:flex-row items-center justify-between px-4 py-2 gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow">
            <span className="mr-2">{t('directOffer')}</span>
            <span>{t('noCommission')}</span>
          </span>
        </div>
        <div className="">
          <LanguageSelector />
        </div>
      </div>
      <div className="pt-16 min-h-screen bg-white">
        <Hero onContactClick={() => setIsContactOpen(true)} />
        <VideoSection />
        <Gallery />
        <AboutMeSection onContactClick={() => setIsContactOpen(true)} />
        <Features />
        <Location />
        <ContactSection />
        <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <FloatingCTA onContactClick={() => setIsContactOpen(true)} />
      </div>
    </LanguageProvider>
  );
};

export default ApartmentLanding;