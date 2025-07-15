import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import { FiPlay } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail } = FiIcons;

const FloatingCTA = ({ onContactClick, onPlayClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3"
    >
      {/* Play Button */}
      <motion.button
        onClick={onPlayClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-red-600 hover:bg-red-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors group"
        aria-label="Odtwórz film"
      >
        <FiPlay className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.button>
      {/* Phone Button */}
      <motion.a
        href="tel:538530676"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors group"
      >
        <SafeIcon icon={FiPhone} className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.a>

      {/* Contact Button */}
      <motion.button
        onClick={onContactClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gray-900 hover:bg-gray-800 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors group"
      >
        <SafeIcon icon={FiMail} className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.button>
    </motion.div>
  );
};

export default FloatingCTA;