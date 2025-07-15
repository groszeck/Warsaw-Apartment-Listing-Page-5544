import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiPhone, FiMail, FiUser, FiMessageSquare, FiSend, FiCalendar, FiClock, FiCheck } = FiIcons;

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
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Umów oglądanie mieszkania
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="p-8">
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;