import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiGlobe } = FiIcons;

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = languages[currentLanguage];

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 px-4 py-2 rounded-full shadow-lg border border-gray-200 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <SafeIcon icon={FiGlobe} className="w-4 h-4" />
        <span className="text-2xl font-emoji" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>
          {currentLang.flag}
        </span>
        <span className="font-medium text-sm">{currentLang.code.toUpperCase()}</span>
        <SafeIcon 
          icon={FiChevronDown} 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden z-50 min-w-[180px]"
          >
            {Object.entries(languages).map(([code, lang]) => (
              <motion.button
                key={code}
                onClick={() => {
                  changeLanguage(code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  currentLanguage === code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
                whileHover={{ 
                  backgroundColor: currentLanguage === code ? '#dbeafe' : '#f9fafb' 
                }}
              >
                <span 
                  className="text-xl font-emoji" 
                  style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}
                >
                  {lang.flag}
                </span>
                <div className="flex-1">
                  <div className="font-medium text-sm">{lang.name}</div>
                  <div className="text-xs text-gray-500">{code.toUpperCase()}</div>
                </div>
                {currentLanguage === code && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)} 
        />
      )}
    </div>
  );
};

export default LanguageSelector;