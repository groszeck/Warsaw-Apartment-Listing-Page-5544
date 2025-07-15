import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/1.jpg?raw=true",
      alt: 'Zdjęcie 1',
      title: t('galleryImage1')
    },
    {
      id: 2,
      src: "https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/2.jpg?raw=true",
      alt: 'Przestronny salon z dużą ilością naturalnego światła, wygodną sofą i jadalnią.',
      title: 'Przestronny salon z dużą ilością naturalnego światła, wygodną sofą i jadalnią.'
    },
    {
      id: 3,
      src: "https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/3.jpg?raw=true",
      alt: 'Widok na wejście i strefę dzienną – mieszkanie jasne i funkcjonalne.',
      title: 'Widok na wejście i strefę dzienną – mieszkanie jasne i funkcjonalne.'
    },
    {
      id: 4,
      src: "https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/3a.jpg?raw=true",
      alt: 'Przytulny salon z wygodnym miejscem do relaksu i stołem do pracy lub posiłków.',
      title: 'Przytulny salon z wygodnym miejscem do relaksu i stołem do pracy lub posiłków.'
    },
    {
      id: 5,
      src: "https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/4.jpg?raw=true",
      alt: 'Stylowa łazienka z wanną, pralką i widokiem na sypialnię z przesuwnymi drzwiami.',
      title: 'Stylowa łazienka z wanną, pralką i widokiem na sypialnię z przesuwnymi drzwiami.'
    },
    {
      id: 6,
      src: "https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/5.jpg?raw=true",
      alt: 'Sypialnia z dużym łóżkiem, szafą z lustrzanymi drzwiami i wyjściem na balkon.',
      title: 'Sypialnia z dużym łóżkiem, szafą z lustrzanymi drzwiami i wyjściem na balkon.'
    },
    {
      id: 7,
      src: "https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/6.jpg?raw=true",
      alt: 'Nowoczesna łazienka z prysznicem typu walk-in i podświetlanym lustrem.',
      title: 'Nowoczesna łazienka z prysznicem typu walk-in i podświetlanym lustrem.'
    },
    {
      id: 8,
      src: "https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/7.jpg?raw=true",
      alt: 'Jasny korytarz prowadzący do kuchni i salonu – wygodny układ mieszkania.',
      title: 'Jasny korytarz prowadzący do kuchni i salonu – wygodny układ mieszkania.'
    },
    {
      id: 9,
      src: "https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/8.jpg?raw=true",
      alt: 'Funkcjonalna kuchnia z pełnym wyposażeniem i dużym blatem roboczym.',
      title: 'Funkcjonalna kuchnia z pełnym wyposażeniem i dużym blatem roboczym.'
    },
    {
      id: 10,
      src: "https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/9.jpg?raw=true",
      alt: 'Widok na kuchnię z drugiej strony – elegancka zabudowa i nowoczesny sprzęt.',
      title: 'Widok na kuchnię z drugiej strony – elegancka zabudowa i nowoczesny sprzęt.'
    },
    {
      id: 11,
      src: "https://github.com/groszeck/Warsaw-Apartment-Listing-Page-5544/blob/main/src/assets/images/9b.jpg?raw=true",
      alt: 'Balkon z widokiem na zielone patio – idealne miejsce na poranną kawę.',
      title: 'Balkon z widokiem na zielone patio – idealne miejsce na poranną kawę.'
    },
  ];

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('gallery')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('galleryDescription')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain rounded-2xl"
                />

                {/* Close button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-6 h-6" />
                </button>

                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                >
                  <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                >
                  <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
                </button>

                {/* Image title */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <h3 className="text-white text-xl font-semibold bg-black/50 backdrop-blur-sm rounded-xl px-4 py-2 inline-block">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;