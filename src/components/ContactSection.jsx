import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiUser, FiSend, FiCalendar } = FiIcons;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'Jestem zainteresowany/a mieszkaniem przy ul. Zaborowskiej. Proszę o kontakt w sprawie umówienia oglądania.',
    selectedDate: '',
    selectedTime: ''
  });

  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate calendar data with availability
  const generateCalendarData = () => {
    const today = new Date();
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const currentDate = new Date(startDate);
    
    // Generate 42 days (6 weeks)
    for (let i = 0; i < 42; i++) {
      const dayData = {
        date: new Date(currentDate),
        dateString: currentDate.toISOString().split('T')[0],
        day: currentDate.getDate(),
        isCurrentMonth: currentDate.getMonth() === month,
        isToday: currentDate.toDateString() === today.toDateString(),
        isPast: currentDate < today,
        isWeekend: currentDate.getDay() === 0 || currentDate.getDay() === 6,
        availability: getAvailabilityForDate(currentDate)
      };
      
      days.push(dayData);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return days;
  };

  // Mock availability data
  const getAvailabilityForDate = (date) => {
    const dayOfWeek = date.getDay();
    const today = new Date();
    
    if (date < today) return 'unavailable';
    if (dayOfWeek === 0) return 'unavailable'; // Sunday
    
    // Mock some busy days
    const busyDates = [
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + 12)
    ];
    
    if (busyDates.some(busyDate => busyDate.toDateString() === date.toDateString())) {
      return 'busy';
    }
    
    if (dayOfWeek === 6) return 'limited'; // Saturday - limited hours
    return 'available';
  };

  // Generate time slots based on day and availability
  const generateTimeSlots = (date) => {
    if (!date) return [];
    
    const dayOfWeek = date.getDay();
    const slots = [];
    
    if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Monday to Friday
      // Morning slots
      for (let hour = 9; hour <= 11; hour++) {
        slots.push({
          time: `${hour}:00`,
          available: Math.random() > 0.3 // Mock availability
        });
        slots.push({
          time: `${hour}:30`,
          available: Math.random() > 0.3
        });
      }
      // Afternoon slots
      for (let hour = 14; hour <= 17; hour++) {
        slots.push({
          time: `${hour}:00`,
          available: Math.random() > 0.3
        });
        slots.push({
          time: `${hour}:30`,
          available: Math.random() > 0.3
        });
      }
    } else if (dayOfWeek === 6) { // Saturday
      for (let hour = 10; hour <= 15; hour++) {
        slots.push({
          time: `${hour}:00`,
          available: Math.random() > 0.5
        });
        slots.push({
          time: `${hour}:30`,
          available: Math.random() > 0.5
        });
      }
    }
    
    return slots;
  };

  const calendarDays = generateCalendarData();
  const selectedDateObj = calendarDays.find(day => day.dateString === formData.selectedDate);
  const timeSlots = selectedDateObj ? generateTimeSlots(selectedDateObj.date) : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Dziękujemy za zgłoszenie! Skontaktujemy się z Tobą w ciągu 24 godzin.');
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

  const handleDateSelect = (dateString) => {
    setFormData({
      ...formData,
      selectedDate: dateString,
      selectedTime: ''
    });
  };

  const handleTimeSelect = (time) => {
    setFormData({
      ...formData,
      selectedTime: time
    });
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'limited':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'busy':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-400 border-gray-200';
    }
  };

  const monthNames = [
    'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
    'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
  ];

  const weekDays = ['Nd', 'Pn', 'Wt', 'Śr', 'Cz', 'Pt', 'Sb'];

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
            Skontaktuj się z nami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Umów oglądanie mieszkania lub zadaj pytanie. Jesteśmy do Twojej dyspozycji.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Dane kontaktowe
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiUser} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Barbara Lorek</h4>
                    <p className="text-gray-600">Agent nieruchomości</p>
                    <p className="text-sm text-gray-500 mt-1">Doświadczenie: 8 lat</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiPhone} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">602 XXX XXX</h4>
                    <p className="text-gray-600">Telefon</p>
                    <p className="text-sm text-gray-500 mt-1">Dostępny: Pn-Pt 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiMail} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">bl@example.com</h4>
                    <p className="text-gray-600">Email</p>
                    <p className="text-sm text-gray-500 mt-1">Odpowiedź w ciągu 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ul. Zaborowska</h4>
                    <p className="text-gray-600">Warszawa, Bemowo</p>
                    <p className="text-sm text-gray-500 mt-1">Oglądanie na miejscu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Legend */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Legenda dostępności:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Dostępny</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Ograniczone godziny</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Zajęty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">Niedostępny</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    Telefon *
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
                  Email *
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
                  Wiadomość
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Dodatkowe informacje..."
                />
              </div>

              {/* Calendar */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Wybierz datę oglądania
                </label>
                
                {/* Calendar Header */}
                <div className="bg-blue-50 rounded-t-xl p-4 border border-blue-200">
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={prevMonth}
                      className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 text-blue-600 rotate-180" />
                    </button>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </h4>
                    <button
                      type="button"
                      onClick={nextMonth}
                      className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="border-x border-gray-200 bg-white">
                  {/* Week days header */}
                  <div className="grid grid-cols-7 border-b border-gray-200">
                    {weekDays.map((day) => (
                      <div key={day} className="p-3 text-center text-sm font-medium text-gray-500 bg-gray-50">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar days */}
                  <div className="grid grid-cols-7">
                    {calendarDays.map((day, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => day.availability !== 'unavailable' && day.isCurrentMonth && handleDateSelect(day.dateString)}
                        disabled={day.availability === 'unavailable' || !day.isCurrentMonth}
                        className={`
                          p-3 text-sm border-b border-r border-gray-200 hover:bg-blue-50 transition-colors relative
                          ${!day.isCurrentMonth ? 'text-gray-300 bg-gray-50' : ''}
                          ${day.isToday ? 'bg-blue-100 font-bold' : ''}
                          ${formData.selectedDate === day.dateString ? 'bg-blue-200 text-blue-800' : ''}
                          ${day.availability === 'unavailable' ? 'cursor-not-allowed opacity-50' : ''}
                        `}
                      >
                        <div className="flex flex-col items-center">
                          <span>{day.day}</span>
                          {day.isCurrentMonth && day.availability !== 'unavailable' && (
                            <div className={`w-2 h-2 rounded-full mt-1 ${
                              day.availability === 'available' ? 'bg-green-400' :
                              day.availability === 'limited' ? 'bg-yellow-400' :
                              day.availability === 'busy' ? 'bg-red-400' : 'bg-gray-400'
                            }`}></div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time Slots */}
              {formData.selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <label className="block text-sm font-medium text-gray-700">
                    Wybierz godzinę
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => slot.available && handleTimeSelect(slot.time)}
                        disabled={!slot.available}
                        className={`
                          p-3 rounded-xl text-sm font-medium transition-colors
                          ${slot.available 
                            ? (formData.selectedTime === slot.time 
                                ? 'bg-blue-600 text-white border-2 border-blue-600' 
                                : 'bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700')
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed border-2 border-gray-100'
                          }
                        `}
                      >
                        <SafeIcon icon={FiClock} className="w-4 h-4 mx-auto mb-1" />
                        {slot.time}
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
                  className="bg-blue-50 border border-blue-200 rounded-xl p-4"
                >
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Wybrany termin
                  </h4>
                  <div className="text-sm text-blue-700">
                    <span className="font-medium">
                      {selectedDateObj?.date.toLocaleDateString('pl-PL', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="font-medium">{formData.selectedTime}</span>
                  </div>
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiSend} className="w-5 h-5" />
                <span>Wyślij wiadomość</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;