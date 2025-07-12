import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiWifi, FiThermometer, FiShield, FiZap, FiDroplet } = FiIcons;

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: FiHome,
      title: t('highStandard'),
      description: t('standardDescription')
    },
    {
      icon: FiZap,
      title: t('fullEquipment'),
      description: t('equipmentDescription')
    },
    {
      icon: FiThermometer,
      title: t('heating'),
      description: t('heatingDescription')
    },
    {
      icon: FiDroplet,
      title: t('bathrooms'),
      description: t('bathroomsDescription')
    },
    {
      icon: FiShield,
      title: t('security'),
      description: t('securityDescription')
    },
    {
      icon: FiWifi,
      title: t('elevator'),
      description: t('elevatorDescription')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

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
            {t('whyChoose')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('featuresDescription')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <SafeIcon icon={feature.icon} className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Apartment Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('apartmentDetails')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">56,18 m²</div>
              <div className="text-gray-600">{t('totalArea')}</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">2,82 m²</div>
              <div className="text-gray-600">{t('basementArea')}</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">{t('floors')}</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">Cegła</div>
              <div className="text-gray-600">{t('buildingMaterial')}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;