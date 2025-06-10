
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI & IP Telephony
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Expert consulting services in IP Telephony and AI Automation solutions. 
                We help businesses modernize their communication infrastructure and 
                streamline operations with cutting-edge technology.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Enterprise-grade IP Telephony Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Custom AI Automation Implementation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">24/7 Technical Support & Maintenance</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                View Our Services
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&crop=center"
                alt="Modern technology and communication solutions"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
