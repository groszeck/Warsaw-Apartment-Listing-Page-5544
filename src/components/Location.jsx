import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import { MdTrain } from 'react-icons/md';
import SafeIcon from '../common/SafeIcon';
import { useLanguage } from '../contexts/LanguageContext';
import { FaTree } from 'react-icons/fa';

const { FiMapPin, FiNavigation, FiShoppingCart, FiTrain, FiTree, FiExternalLink } = FiIcons;

const Location = () => {
  const { t } = useLanguage();
  const locationFeatures = [
    {
      icon: MdTrain, // pociąg dla Metro Ulrychów (poprawna ikona)
      title: t('metro'),
      description: t('metroDistance'),
      distance: t('walkTime')
    },
    {
      icon: FiShoppingCart,
      title: t('mall'),
      description: t('mallDescription'),
      distance: t('mallTime')
    },
    {
      icon: FaTree, // drzewo dla parków (poprawna ikona)
      title: t('parks'),
      description: t('parksDescription'),
      distance: t('nearby')
    },
    {
      icon: FiNavigation,
      title: t('cityCenter'),
      description: t('centerDescription'),
      distance: t('centerDistance')
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('excellentLocation')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('locationDescription')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {locationFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center text-center"
            >
              <SafeIcon icon={feature.icon} className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-2">{feature.description}</p>
              <span className="text-sm text-gray-500">{feature.distance}</span>
            </motion.div>
          ))}
        </div>

        {/* Interactive Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden shadow-inner bg-gray-100"
        >
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=20.86%2C52.18%2C20.99%2C52.31&layer=mapnik&marker=52.2430108%2C20.9244665"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('mapTitle')}
            className="w-full h-96 rounded-xl"
          ></iframe>

          {/* Map overlay with location info */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="flex items-center space-x-2 mb-2">
              <SafeIcon icon={FiMapPin} className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-gray-900 text-sm">
                {t('addressFull')}
              </span>
            </div>
            <div className="text-xs text-gray-600">
              {t('locationOverlay')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;