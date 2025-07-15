import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useState } from 'react';
import { FiPlay } from 'react-icons/fi';

const { FiMapPin, FiHome, FiTrendingUp, FiPhone, FiCheck, FiDollarSign, FiUser } = FiIcons;

const Hero = ({ onContactClick, isVideoOpen, setIsVideoOpen }) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-blue-500/5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-2 text-blue-600"
              >
                <SafeIcon icon={FiMapPin} className="w-5 h-5" />
                <span className="text-sm font-medium">{t('location')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                {t('modernApartment')}
                <span className="text-blue-600 block">{t('apartment')}</span>
                <span className="text-2xl md:text-3xl font-medium text-gray-700">
                  56,18 m²
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-600 max-w-xl"
              >
                {t('heroDescription')}
              </motion.p>
            </div>

            {/* Direct Owner Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <SafeIcon icon={FiCheck} className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">{t('directSale')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">{t('noAgency')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiDollarSign} className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">{t('save')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiUser} className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">{t('owner')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiPhone} className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">{t('phone')}</span>
                </div>
              </div>
            </motion.div>

            {/* Price & Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-700 font-medium">{t('price')}</span>
                  <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">887 000 zł</div>
                <div className="text-gray-600 text-sm">15 485,94 zł/m²</div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">2</div>
                  <div className="text-xs text-gray-500">{t('rooms')}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">1</div>
                  <div className="text-xs text-gray-500">{t('floor')}</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900">2012</div>
                  <div className="text-xs text-gray-500">{t('buildYear')}</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onContactClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t('contact')}</span>
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-sm"
                onClick={() => {
                  const gallery = document.getElementById('gallery-section');
                  if (gallery) {
                    gallery.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('seeMore')}
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/1.jpg?raw=true"
                alt="Modern apartment interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              {/* Play button */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center group"
                style={{ background: 'rgba(0,0,0,0.15)' }}
                aria-label="Odtwórz film"
              >
                <span className="bg-white/80 rounded-full p-6 shadow-lg group-hover:bg-white transition-colors">
                  <FiPlay className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-200"
            >
              <div className="text-sm text-gray-600 mb-1">{t('monthlyRent')}</div>
              <div className="text-2xl font-bold text-gray-900">789 zł</div>
              <div className="text-xs text-gray-500 mt-1">{t('electricity')}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modal z YouTube */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, type: 'spring', bounce: 0.25 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[420px] h-full flex flex-col justify-center items-center overflow-hidden p-0"
              style={{ maxHeight: '100vh' }}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 rounded-full p-2 z-10"
                aria-label="Zamknij"
              >
                <FiIcons.FiX className="w-6 h-6 text-gray-600" />
              </button>
              <div className="w-full flex items-center justify-center bg-black"
                   style={{ height: '75vh', maxHeight: 560 }}>
                <iframe
                  width="315"
                  height="560"
                  src="https://www.youtube.com/embed/FQvpKJ7ShOE?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full object-contain rounded-t-3xl"
                  style={{ aspectRatio: '9/16', maxWidth: '100vw', maxHeight: '75vh' }}
                ></iframe>
              </div>
              <div className="flex flex-col items-center justify-center py-6">
                <button
                  onClick={() => {
                    setIsVideoOpen(false);
                    onContactClick();
                  }}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 shadow-lg text-lg"
                >
                  <FiIcons.FiPhone className="w-6 h-6 mr-2" />
                  <span>{t('contact')}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;