
import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "500+", label: "VoIP Projects Completed" },
    { icon: Award, number: "10+", label: "Years VoIP Experience" },
    { icon: Clock, number: "24/7", label: "Technical Support" },
    { icon: Shield, number: "99.9%", label: "VoIP Uptime Guaranteed" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading VoIP & Voice AI Experts
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                IntelVoiz is a premier consulting firm specializing in VoIP, IP Telephony, and Voice AI solutions. 
                With over a decade of experience, we help businesses transform their communication infrastructure 
                with cutting-edge technology and expert implementation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of certified VoIP engineers and AI specialists deliver custom solutions that reduce costs, 
                improve efficiency, and enhance customer experience through advanced Voice AI and Chat Bot technologies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center"
                alt="VoIP and Voice AI technology team working on telecommunications solutions"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Trusted by</div>
                <div className="text-lg">500+ Businesses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
