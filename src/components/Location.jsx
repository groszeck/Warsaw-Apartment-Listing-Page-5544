import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiNavigation, FiShoppingCart, FiTrain, FiTree, FiExternalLink } = FiIcons;

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

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-900 font-semibold">
                    ul. Zaborowska 1C, Bemowo
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/place/Zaborowska+1C,+01-462+Warszawa/@52.2430108,20.9218862,468m/data=!3m2!1e3!4b1!4m6!3m5!1s0x471ecb04c9b00169:0x5c508adfb7f5a2bf!8m2!3d52.2430108!4d20.9244665!16s%2Fg%2F11c18j0x16?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                >
                  <span>Zobacz na mapie</span>
                  <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                </a>
              </div>

              {/* Interactive Map */}
              <div className="relative rounded-xl overflow-hidden shadow-inner bg-gray-100">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=20.86%2C52.18%2C20.99%2C52.31&layer=mapnik&marker=52.2430108%2C20.9244665"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa lokalizacji mieszkania na ul. Zaborowskiej 1C"
                  className="w-full h-96 rounded-xl"
                ></iframe>

                {/* Map overlay with location info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <SafeIcon icon={FiMapPin} className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-gray-900 text-sm">
                      ul. Zaborowska 1C, 01-462 Warszawa
                    </span>
                  </div>
                  <div className="text-xs text-gray-600">
                    Bemowo • Metro Ulrychów 450m • Wola Park 5 min
                  </div>
                </div>
              </div>

              {/* Alternative Map View */}
              <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <div className="font-semibold text-blue-800 mb-1">Alternatywny widok mapy:</div>
                    <div className="text-blue-700">Google Maps • Apple Maps • Mapy.cz</div>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href="https://www.google.com/maps/place/Zaborowska+1C,+01-462+Warszawa/@52.2430108,20.9218862,468m/data=!3m2!1e3!4b1!4m6!3m5!1s0x471ecb04c9b00169:0x5c508adfb7f5a2bf!8m2!3d52.2430108!4d20.9244665!16s%2Fg%2F11c18j0x16?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Google Maps
                    </a>
                    <a
                      href="https://maps.apple.com/?q=52.2430108,20.9244665"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apple Maps
                    </a>
                    <a
                      href="https://mapy.cz/zakladni?x=20.9244665&y=52.2430108&z=15"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Mapy.cz
                    </a>
                  </div>
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

              {/* Additional location info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Współrzędne GPS
                </h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <div>Szerokość: 52.2430108°N</div>
                  <div>Długość: 20.9244665°E</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Neighborhood highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Atrakcje w okolicy
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <SafeIcon icon={FiTrain} className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-900 mb-1">Metro Ulrychów</div>
              <div className="text-sm text-gray-600">Linia M2, bezpośrednie połączenie z centrum</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <SafeIcon icon={FiShoppingCart} className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-900 mb-1">Wola Park</div>
              <div className="text-sm text-gray-600">Centrum handlowe z ponad 200 sklepami</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <SafeIcon icon={FiTree} className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-900 mb-1">Parki miejskie</div>
              <div className="text-sm text-gray-600">Zieleń, rekreacja i spacery</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-2xl">
              <SafeIcon icon={FiNavigation} className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-900 mb-1">Centrum</div>
              <div className="text-sm text-gray-600">15 min metrem do Śródmieścia</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;