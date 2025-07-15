import React from 'react';

const AboutMeSection = ({ onContactClick }) => (
  <section className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-shrink-0">
        <img src="https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/zg.png?raw=true" alt="Właściciel mieszkania" className="w-64 h-64 object-cover rounded-3xl shadow-xl border-4 border-blue-100" />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">O mnie</h2>
        <p className="text-lg text-gray-700 mb-6">
          Cześć! Nazywam się Zbyszek i jestem prywatnym właścicielem tego mieszkania. Sam mieszkałem tu przez kilka lat i włożyłem w to miejsce dużo serca oraz energii. To wyjątkowe mieszkanie, które urządziłem z myślą o wygodzie i codziennym komforcie. 
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Sprzedaję je, ponieważ niedawno wziąłem ślub i czas iść dalej przez życie za miłością. Mam nadzieję, że nowy właściciel będzie cieszył się tym miejscem przez długie lata, tak jak ja.
        </p>
        <button
          onClick={onContactClick}
          className="mt-4 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg shadow-lg transition-colors"
        >
          Umówmy się w mieszkaniu
        </button>
      </div>
    </div>
  </section>
);

export default AboutMeSection; 