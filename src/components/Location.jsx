import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiNavigation, FiShoppingCart, FiTrain, FiTree } = FiIcons;

const Location = () => {
  const locationFeatures = [
    {
      icon: FiTrain,
      title: "Metro Ulrychów",
      description: "450 m od mieszkania",
      distance: "2 min pieszo"
    },
    {
      icon: FiShoppingCart,
      title: "Wola Park",
      description: "Centrum handlowe",
      distance: "5 min pieszo"
    },
    {
      icon: FiTree,
      title: "3 duże parki",
      description: "Sowińskiego, Szymańskiego, Moczydło",
      distance: "W pobliżu"
    },
    {
      icon: FiNavigation,
      title: "Centrum Warszawy",
      description: "Pałac Kultury, Złote Tarasy",
      distance: "7 km"
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
            Doskonała lokalizacja
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Warszawa, Bemowo - spokojny район z doskonałym połączeniem komunikacyjnym
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Location Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {locationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-200"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={feature.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{feature.description}</p>
                  <span className="text-sm text-blue-600 font-medium">
                    {feature.distance}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-2 mb-6">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-blue-600" />
                <span className="text-gray-900 font-semibold">
                  ul. Zaborowska, Bemowo
                </span>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 opacity-20"></div>
                <div className="text-center z-10">
                  <SafeIcon icon={FiMapPin} className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">
                    Doskonała lokalizacja w Bemowie
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Blisko metra, parków i centrum handlowego
                  </p>
                </div>
              </div>

              {/* Transport info */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">450m</div>
                  <div className="text-xs text-gray-600">do metra</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 mb-1">7km</div>
                  <div className="text-xs text-gray-600">do centrum</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;