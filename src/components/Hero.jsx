import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiHome, FiTrendingUp, FiPhone, FiCheck, FiDollarSign, FiUser } = FiIcons;

const Hero = ({ onContactClick }) => {
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

      {/* Direct Owner Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-lg">
          <div className="flex items-center space-x-2 text-sm font-semibold">
            <SafeIcon icon={FiCheck} className="w-4 h-4" />
            <span>{t('directOffer')}</span>
            <SafeIcon icon={FiDollarSign} className="w-4 h-4" />
            <span>{t('noCommission')}</span>
            <SafeIcon icon={FiCheck} className="w-4 h-4" />
          </div>
        </div>
      </motion.div>

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
                <div className="text-3xl font-bold text-gray-900 mb-2">870 000 zł</div>
                <div className="text-gray-600 text-sm">15 485,94 zł/m²</div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                  <SafeIcon icon={FiHome} className="w-6 h-6 text-blue-600 mx-auto mb-2" />
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
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-sm">
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
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern apartment interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
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
    </section>
  );
};

export default Hero;