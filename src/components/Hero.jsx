import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiHome, FiTrendingUp, FiPhone } = FiIcons;

const Hero = ({ onContactClick }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
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
                className="flex items-center space-x-2 text-blue-400"
              >
                <SafeIcon icon={FiMapPin} className="w-5 h-5" />
                <span className="text-sm font-medium">Warszawa, Bemowo</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
              >
                Nowoczesne
                <span className="text-blue-400 block">Mieszkanie</span>
                <span className="text-2xl md:text-3xl font-medium text-slate-300">
                  56,18 m²
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-slate-300 max-w-xl"
              >
                Przestronne 2-pokojowe mieszkanie z dużym balkonem na 1 piętrze. 
                Wysoki standard wykończenia, pełne wyposażenie i doskonała lokalizacja.
              </motion.p>
            </div>

            {/* Price & Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-400 font-medium">Cena</span>
                  <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">870 000 zł</div>
                <div className="text-slate-300 text-sm">15 485,94 zł/m²</div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                  <SafeIcon icon={FiHome} className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">2</div>
                  <div className="text-xs text-slate-400">Pokoje</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-white">1</div>
                  <div className="text-xs text-slate-400">Piętro</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-white">2012</div>
                  <div className="text-xs text-slate-400">Rok budowy</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={onContactClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Skontaktuj się</span>
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Zobacz więcej
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-slate-200"
            >
              <div className="text-sm text-slate-600 mb-1">Czynsz administracyjny</div>
              <div className="text-2xl font-bold text-slate-900">789 zł</div>
              <div className="text-xs text-slate-500 mt-1">+ prąd wg wskazań</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;