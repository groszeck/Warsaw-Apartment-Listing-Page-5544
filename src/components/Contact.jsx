import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiPhone, FiMail, FiUser, FiMessageSquare, FiSend, FiCalendar, FiClock } = FiIcons;

const Contact = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'Jestem zainteresowany/a mieszkaniem przy ul. Zaborowskiej. Proszę o kontakt w sprawie umówienia oglądania.',
    selectedDate: '',
    selectedTime: ''
  });

  const [step, setStep] = useState(1);

  // Generate available dates (next 14 days, excluding Sundays)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip Sundays (0 = Sunday)
      if (date.getDay() !== 0) {
        dates.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('pl-PL', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          dayOfWeek: date.getDay()
        });
      }
    }
    return dates;
  };

  // Generate available time slots
  const generateTimeSlots = (dayOfWeek) => {
    const slots = [];
    
    if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Monday to Friday
      // Morning slots
      for (let hour = 9; hour <= 11; hour++) {
        slots.push(`${hour}:00`);
        slots.push(`${hour}:30`);
      }
      // Afternoon slots
      for (let hour = 14; hour <= 17; hour++) {
        slots.push(`${hour}:00`);
        slots.push(`${hour}:30`);
      }
    } else if (dayOfWeek === 6) { // Saturday
      for (let hour = 10; hour <= 15; hour++) {
        slots.push(`${hour}:00`);
        slots.push(`${hour}:30`);
      }
    }
    
    return slots;
  };

  const availableDates = generateAvailableDates();
  const selectedDateObj = availableDates.find(d => d.date === formData.selectedDate);
  const availableTimeSlots = selectedDateObj ? generateTimeSlots(selectedDateObj.dayOfWeek) : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Dziękujemy za zgłoszenie! Skontaktujemy się z Tobą w ciągu 24 godzin.');
    onClose();
    setStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: 'Jestem zainteresowany/a mieszkaniem przy ul. Zaborowskiej. Proszę o kontakt w sprawie umówienia oglądania.',
      selectedDate: '',
      selectedTime: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDateSelect = (date) => {
    setFormData({
      ...formData,
      selectedDate: date,
      selectedTime: '' // Reset time when date changes
    });
  };

  const handleTimeSelect = (time) => {
    setFormData({
      ...formData,
      selectedTime: time
    });
  };

  const canProceedToStep2 = formData.name && formData.email && formData.phone;
  const canSubmit = canProceedToStep2 && formData.selectedDate && formData.selectedTime;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Umów oglądanie mieszkania
                  </h2>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className={`flex items-center space-x-2 ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                        1
                      </div>
                      <span className="text-sm">Dane kontaktowe</span>
                    </div>
                    <div className="w-8 h-px bg-gray-200"></div>
                    <div className={`flex items-center space-x-2 ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                        2
                      </div>
                      <span className="text-sm">Termin oglądania</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Agent Info */}
            <div className="p-8 bg-gray-50 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Dane kontaktowe agenta
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiUser} className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Barbara Lorek</p>
                    <p className="text-sm text-gray-600">Agent nieruchomości</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiPhone} className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">602 XXX XXX</p>
                    <p className="text-sm text-gray-600">Telefon</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiMail} className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">bl@example.com</p>
                    <p className="text-sm text-gray-600">Email</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">
                      Twoje dane kontaktowe
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Imię i nazwisko *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Twoje imię i nazwisko"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Numer telefonu *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Twój numer telefonu"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adres e-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="twoj@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dodatkowe informacje
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        placeholder="Dodatkowe informacje lub pytania..."
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!canProceedToStep2}
                        className={`px-8 py-3 rounded-xl font-semibold transition-colors flex items-center space-x-2 ${
                          canProceedToStep2
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <span>Wybierz termin</span>
                        <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Wybierz termin oglądania
                      </h3>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        ← Wróć do danych
                      </button>
                    </div>

                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Wybierz datę *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto">
                        {availableDates.map((dateObj) => (
                          <button
                            key={dateObj.date}
                            type="button"
                            onClick={() => handleDateSelect(dateObj.date)}
                            className={`p-4 rounded-xl border-2 transition-all text-left ${
                              formData.selectedDate === dateObj.date
                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-gray-300 text-gray-700'
                            }`}
                          >
                            <div className="font-medium">{dateObj.display}</div>
                            <div className="text-sm text-gray-500 mt-1">
                              Dostępne terminy: {generateTimeSlots(dateObj.dayOfWeek).length}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {formData.selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-4">
                          Wybierz godzinę *
                        </label>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                          {availableTimeSlots.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => handleTimeSelect(time)}
                              className={`p-3 rounded-xl border-2 transition-all text-center ${
                                formData.selectedTime === time
                                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
                              }`}
                            >
                              <SafeIcon icon={FiClock} className="w-4 h-4 mx-auto mb-1" />
                              <div className="text-sm font-medium">{time}</div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Selected appointment summary */}
                    {formData.selectedDate && formData.selectedTime && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-blue-50 border border-blue-200 rounded-xl p-6"
                      >
                        <h4 className="font-semibold text-blue-800 mb-2">
                          Podsumowanie terminu
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <SafeIcon icon={FiCalendar} className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-700">
                              {selectedDateObj?.display}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <SafeIcon icon={FiClock} className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-700">
                              {formData.selectedTime}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <SafeIcon icon={FiUser} className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-700">
                              {formData.name}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                      >
                        Wstecz
                      </button>
                      <button
                        type="submit"
                        disabled={!canSubmit}
                        className={`px-8 py-3 rounded-xl font-semibold transition-colors flex items-center space-x-2 ${
                          canSubmit
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <SafeIcon icon={FiSend} className="w-5 h-5" />
                        <span>Potwierdź oglądanie</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;