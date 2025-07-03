import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiWifi, FiThermometer, FiShield, FiZap, FiDroplet } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiHome,
      title: "Wysoki standard",
      description: "Nowoczesne wykończenie i zabudowa na wymiar"
    },
    {
      icon: FiZap,
      title: "Pełne wyposażenie",
      description: "Płyta indukcyjna, zmywarka, lodówka, mikrofalówka"
    },
    {
      icon: FiThermometer,
      title: "Ogrzewanie miejskie",
      description: "Wliczone w czynsz administracyjny"
    },
    {
      icon: FiDroplet,
      title: "2 łazienki",
      description: "Łazienka z prysznicem i łazienka z wanną"
    },
    {
      icon: FiShield,
      title: "Monitoring i ochrona",
      description: "Bezpieczeństwo 24/7"
    },
    {
      icon: FiWifi,
      title: "Winda",
      description: "Wygodny dostęp do mieszkania"
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
            Dlaczego warto wybrać to mieszkanie?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nowoczesne rozwiązania i wysoki standard wykończenia w doskonałej lokalizacji
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
            Szczegóły mieszkania
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">56,18 m²</div>
              <div className="text-gray-600">Powierzchnia całkowita</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">2,82 m²</div>
              <div className="text-gray-600">Powierzchnia piwnicy</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Pięter w budynku</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">Cegła</div>
              <div className="text-gray-600">Materiał budynku</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;