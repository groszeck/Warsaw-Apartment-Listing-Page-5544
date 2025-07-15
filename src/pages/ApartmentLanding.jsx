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
import { useLanguage } from "../contexts/LanguageContext";
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/../common/SafeIcon';

const ApartmentLanding = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <LanguageProvider>
      <div className="fixed top-0 left-0 w-full z-50 bg-white/90 shadow-md flex flex-col sm:flex-row items-center justify-between px-4 py-2 gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow flex items-center space-x-2">
            <SafeIcon icon={FiIcons.FiCheck} className="w-4 h-4" />
            <span>{t('directOffer')}</span>
            <SafeIcon icon={FiIcons.FiDollarSign} className="w-4 h-4" />
            <span>{t('noCommission')}</span>
            <SafeIcon icon={FiIcons.FiCheck} className="w-4 h-4" />
          </span>
        </div>
        <div className="">
          <LanguageSelector />
        </div>
      </div>
      <div className="pt-16 min-h-screen bg-white">
        <Hero
          onContactClick={() => setIsContactOpen(true)}
          isVideoOpen={isVideoOpen}
          setIsVideoOpen={setIsVideoOpen}
        />
        <Gallery />
        <AboutMeSection onContactClick={() => setIsContactOpen(true)} />
        <Features />
        <Location />
        <ContactSection />
        <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <FloatingCTA
          onContactClick={() => setIsContactOpen(true)}
          onPlayClick={() => setIsVideoOpen(true)}
        />
      </div>
    </LanguageProvider>
  );
};

export default ApartmentLanding;