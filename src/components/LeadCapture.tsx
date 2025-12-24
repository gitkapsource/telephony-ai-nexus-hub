import React, { useState } from 'react';
import { Phone, Mail, Download, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const LeadCapture = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setEmail('');
      setPhone('');
      setName('');
      setCompany('');
      setSelectedService('');
    }, 1000);
  };

  const offers = [
    {
      icon: Download,
      title: "VoIP Migration Guide",
      description: "Complete 25-page guide to VoIP migration for n businesses",
      cta: "Download Free Guide",
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: Calendar,
      title: "VoIP Consultation",
      description: "30-minute consultation with VoIP experts",
      cta: "Book Consultation",
      color: "from-green-600 to-blue-600"
    },
    {
      icon: Phone,
      title: "VoIP Assessment",
      description: "Get a cost analysis for your business",
      cta: "Get Assessment",
      color: "from-purple-600 to-pink-600"
    }
  ];

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            We'll contact you within 24 hours with your consultation.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Floating CTA Button */}
      <button
        onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
      >
        <Phone className="h-5 w-5" />
        <span>Book VoIP Consultation</span>
      </button>
    </div>
  );
};

export default LeadCapture; 