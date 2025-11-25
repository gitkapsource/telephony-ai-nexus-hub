
import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe, Shield, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "VoIP & IP Telephony Solutions",
    "Voice AI & Chat Bot Services", 
    "FreeSWITCH & Asterisk Support",
    "Amazon Connect & 3CX Implementation",
    "Google Dialogflow & N8N Automation",
    "SIP Trunking & PBX Systems",
    "VoIP Migration Services",
    "24/7 VoIP Support"
  ];

  const technologies = [
    "FreeSWITCH",
    "Asterisk", 
    "Amazon Connect",
    "3CX",
    "Twilio",
    "Google Dialogflow",
    "N8N Automation",
    "OpenSIPS/Kamailio"
  ];

  const industries = [
    "Real Estate",
    "Healthcare", 
    "Recruitment",
    "Restaurants",
    "E-commerce",
    "Travel & Hospitality",
    "Logistics",
    "Solar",
    "Mortgage",
    "Car Dealerships"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/76923a56-250c-4961-a336-c37c70150296.png" 
                alt="IntelVoiz - VoIP & Voice AI Experts" 
                className="h-8"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's leading VoIP and Voice AI solutions provider. Expert IP Telephony, Voice Bots, 
              Chat Bots, SIP trunking, and telecommunications consulting services across India.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+91-7935901473</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@intelvoiz.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Pan-India Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">VoIP & Voice AI Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Technologies We Use</h3>
            <ul className="space-y-3">
              {technologies.map((tech, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Industries We Serve</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-green-400 mb-2" />
              <h4 className="font-semibold text-sm">Certified Experts</h4>
              <p className="text-gray-400 text-xs">FreeSWITCH, Asterisk, Amazon Connect</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-8 w-8 text-blue-400 mb-2" />
              <h4 className="font-semibold text-sm">10+ Years Experience</h4>
              <p className="text-gray-400 text-xs">25+ VoIP Projects Completed</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8 text-purple-400 mb-2" />
              <h4 className="font-semibold text-sm">Pan-India Service</h4>
              <p className="text-gray-400 text-xs">Nationwide Coverage</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-orange-400 mb-2" />
              <h4 className="font-semibold text-sm">24/7 Support</h4>
              <p className="text-gray-400 text-xs">Round-the-clock Technical Support</p>
            </div>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-gray-400 mb-4">VoIP & Voice AI Solutions in India</h4>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
              <span>VoIP Services India</span>
              <span>•</span>
              <span>Voice AI Solutions</span>
              <span>•</span>
              <span>IP Telephony Consulting</span>
              <span>•</span>
              <span>FreeSWITCH Support</span>
              <span>•</span>
              <span>Asterisk VoIP</span>
              <span>•</span>
              <span>Amazon Connect</span>
              <span>•</span>
              <span>3CX Implementation</span>
              <span>•</span>
              <span>Twilio Integration</span>
              <span>•</span>
              <span>Google Dialogflow</span>
              <span>•</span>
              <span>N8N Automation</span>
              <span>•</span>
              <span>SIP Trunking</span>
              <span>•</span>
              <span>PBX Systems</span>
              <span>•</span>
              <span>Voice Bot Development</span>
              <span>•</span>
              <span>Chat Bot Services</span>
              <span>•</span>
              <span>VoIP Migration</span>
              <span>•</span>
              <span>24/7 VoIP Support</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} IntelVoiz - VoIP & Voice AI Experts. All rights reserved. 
            India's leading VoIP and Voice AI solutions provider.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Specializing in FreeSWITCH, Asterisk, Amazon Connect, 3CX, Twilio, Google Dialogflow, 
            N8N automation, SIP trunking, PBX systems, Voice AI, and Chat Bot solutions across India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
