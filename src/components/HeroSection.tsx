import React from 'react';
import { ArrowRight, CheckCircle, Phone, Bot, Zap } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-sm sm:text-base font-semibold tracking-[0.18em] uppercase shadow-lg shadow-blue-500/30">
                IntelVoiz Communications
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Global Leader in VoIP & Voice AI Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Expert VoIP consulting, IP Telephony solutions, and Voice AI automation services. 
                We help businesses modernize communication infrastructure with FreeSWITCH, Asterisk, 
                Amazon Connect, 3CX, Twilio, and cutting-edge Voice Bot technology.
              </p>
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg">
                <p className="text-xl font-bold">Intelligent Voice for a Connected World.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">FreeSWITCH, Asterisk, Amazon Connect VoIP Solutions</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">Voice AI, Chat Bots, Google Dialogflow Implementation</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">SIP Trunking, PBX Systems, 3CX, Twilio Integration</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">24/7 VoIP Support & Voice AI Consulting</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <span>Book VoIP Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-300 shadow-sm">
                View Voice AI Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200/60">
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <div className="p-1.5 bg-blue-50 rounded-lg">
                    <Phone className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="font-medium">+91-7935901473</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <div className="p-1.5 bg-purple-50 rounded-lg">
                    <Bot className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="font-medium">Voice AI Experts</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors">
                  <div className="p-1.5 bg-emerald-50 rounded-lg">
                    <Zap className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="font-medium">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&crop=center"
                    alt="VoIP IP Telephony and Voice AI automation technology solutions - FreeSWITCH, Asterisk, Amazon Connect, 3CX, Twilio, Voice Bots, Chat Bots"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-xl p-5 shadow-xl border border-gray-100">
                  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Expert</div>
                  <div className="text-gray-700 font-semibold text-sm">VoIP & Voice AI</div>
                  <div className="text-xs text-gray-500 mt-1">Consulting Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
