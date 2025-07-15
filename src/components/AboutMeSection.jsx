import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutMeSection = ({ onContactClick }) => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img src="https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/zg.png?raw=true" alt={t('aboutMeTitle')} className="w-64 h-64 object-cover rounded-3xl shadow-xl border-4 border-blue-100" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('aboutMeTitle')}</h2>
          <p className="text-lg text-gray-700 mb-6">
            {t('aboutMeText1')}
          </p>
          <p className="text-lg text-gray-700 mb-6">
            {t('aboutMeText2')}
          </p>
          <button
            onClick={onContactClick}
            className="mt-4 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg transition-colors"
          >
            {t('scheduleMeetingBtn')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection; 