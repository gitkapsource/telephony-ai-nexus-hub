import React from 'react';
import { Award, Users, Clock, Shield, Globe, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "25+", label: "VoIP Projects Completed" },
    { icon: Clock, number: "10+", label: "Years Experience" },
    { icon: Shield, number: "24/7", label: "Technical Support" }
  ];

  const expertise = [
    {
      title: "VoIP & IP Telephony Experts",
      description: "Certified experts in FreeSWITCH, Asterisk, Amazon Connect, 3CX, Twilio, SIP trunking, and PBX systems. We've successfully implemented VoIP solutions for businesses across ."
    },
    {
      title: "Voice AI & Chat Bot Specialists",
      description: "Leading Voice AI consultants with expertise in Google Dialogflow, N8N automation, Twilio Voice API, and custom Voice Bot development. We create intelligent conversational AI solutions."
    },
    {
      title: "Cloud VoIP & Migration Experts",
      description: "Specialists in cloud VoIP migration, AWS professional services, and hosted VoIP solutions. We help businesses transition from traditional phone systems to modern cloud communications."
    }
  ];

  return (
    <section id="about" className="py-12 bg-gradient-to-b from-slate-50/50 via-white to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Leading VoIP & Voice AI Expert Solutions
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                IntelVoiz is 's premier consulting firm specializing in VoIP, IP Telephony, and Voice AI solutions. 
                With over a decade of experience, we help businesses transform their communication infrastructure 
                with cutting-edge technology including FreeSWITCH, Asterisk, Amazon Connect, 3CX, Twilio, 
                Google Dialogflow, and N8N automation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of certified VoIP engineers and AI specialists deliver custom solutions that reduce costs, 
                improve efficiency, and enhance customer experience through advanced Voice AI and Chat Bot technologies. 
                We serve clients across  with 24/7 technical support and comprehensive VoIP consulting services.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {expertise.map((area, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose IntelVoiz for VoIP & Voice AI Solutions?
            </h2>
            <p className="text-lg text-gray-600">
              Trusted partner for comprehensive VoIP and Voice AI consulting services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified VoIP Experts</h3>
                <p className="text-gray-600 text-sm">Certified professionals in FreeSWITCH, Asterisk, Amazon Connect, 3CX, and Twilio with proven track record.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Voice AI Specialists</h3>
                <p className="text-gray-600 text-sm">Expert Voice AI consultants with deep knowledge of Google Dialogflow, N8N, and custom Voice Bot development.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Round-the-clock technical support and VoIP maintenance services for uninterrupted business communication.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Coverage</h3>
                <p className="text-gray-600 text-sm">Serving clients worldwide with expertise and understanding of global requirements.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">10+ Years Experience</h3>
                <p className="text-gray-600 text-sm">Over a decade of experience in VoIP, IP Telephony, and Voice AI solutions with 25+ successful projects.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600 text-sm">Tailored VoIP and Voice AI solutions designed specifically for your business needs and requirements.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business Communication?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Get expert VoIP and Voice AI consultation from leading telecommunications experts
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book VoIP Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
