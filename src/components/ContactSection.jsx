import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useLanguage } from '../contexts/LanguageContext';

const { FiPhone, FiMail, FiMapPin, FiClock, FiUser, FiSend, FiCalendar, FiCheck, FiDollarSign } = FiIcons;

const ContactSection = () => {
  const { t } = useLanguage();
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
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </motion.div>

        {/* Direct Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-3xl p-8 mb-12 shadow-xl"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              {t('directOfferBanner')}
            </h3>
            <p className="text-xl mb-6">
              {t('directOfferDescription')}
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <SafeIcon icon={FiCheck} className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold">{t('noAgency')}</h4>
                <p className="text-sm opacity-90">{t('directContact')}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <SafeIcon icon={FiDollarSign} className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold">{t('noCommission')}</h4>
                <p className="text-sm opacity-90">{t('onlyApartmentPrice')}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <SafeIcon icon={FiUser} className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold">{t('owner')}</h4>
                <p className="text-sm opacity-90">{t('ownerName')}</p>
              </div>
            </div>
          </div>
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
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('ownerContactDetails')}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiUser} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('ownerName')}</h4>
                    <p className="text-green-600 font-medium">{t('ownerTitle')}</p>
                    <p className="text-sm text-gray-500 mt-1">{t('directSaleTitle')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiPhone} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('phone')}</h4>
                    <p className="text-gray-600">{t('phone')}</p>
                    <p className="text-sm text-gray-500 mt-1">{t('phoneAvailable')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiMail} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">z.m.grochowski@gmail.com</h4>
                    <p className="text-gray-600">{t('email')}</p>
                    <p className="text-sm text-gray-500 mt-1">{t('emailResponse')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('addressShort')}</h4>
                    <p className="text-gray-600">{t('addressCity')}</p>
                    <p className="text-sm text-gray-500 mt-1">{t('viewingOnSite')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Calculator */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <SafeIcon icon={FiDollarSign} className="w-5 h-5 mr-2 text-yellow-600" />
                {t('savingsWithoutAgency')}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">3%</div>
                  <div className="text-sm text-gray-600">{t('agencyCommission')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">26 100 zł</div>
                  <div className="text-sm text-gray-600">{t('yourSavings')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <iframe 
              src="https://outlook.office.com/book/Ogldaniemieszkania@kpj.waw.pl/s/H-g0igJWXk2lBRICLGcLgg2?ismsaljsauthenabled" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen
              title="Umów oglądanie mieszkania"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;