import React from 'react';
import { ArrowRight, CheckCircle, Phone, Bot, Zap } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
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
              <span className="inline-flex items-center px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
                IntelVoiz Communications
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                VoIP and Voice AI
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Solutions Provider
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Expert VoIP consulting, IP Telephony solutions, and Voice AI automation services. 
                We help businesses modernize communication infrastructure with FreeSWITCH, Asterisk, 
                Amazon Connect, 3CX, Twilio, and cutting-edge Voice Bot technology.
                <span className="block text-2xl font-semibold text-gray-900 mt-4">
                  Intelligent Voice for a Connected World.
                </span>
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">FreeSWITCH, Asterisk, Amazon Connect VoIP Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Voice AI, Chat Bots, Google Dialogflow Implementation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">SIP Trunking, PBX Systems, 3CX, Twilio Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">24/7 VoIP Support & Voice AI Consulting India</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Book VoIP Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={scrollToServices}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                View Voice AI Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>+91-9825597662</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4 text-purple-600" />
                  <span>Voice AI Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-green-600" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&crop=center"
                alt="VoIP IP Telephony and Voice AI automation technology solutions - FreeSWITCH, Asterisk, Amazon Connect, 3CX, Twilio, Voice Bots, Chat Bots"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-purple-600">Expert</div>
                <div className="text-gray-600">VoIP & Voice AI</div>
                <div className="text-sm text-gray-500">Consulting India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
