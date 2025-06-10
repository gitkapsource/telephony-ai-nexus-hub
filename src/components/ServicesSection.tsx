
import React from 'react';
import { Phone, Bot, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Phone,
      title: "IP Telephony Solutions",
      description: "Complete VoIP infrastructure setup, migration from traditional systems, and ongoing maintenance for crystal-clear communication.",
      features: ["VoIP System Design", "PBX Implementation", "SIP Trunking", "Quality Assurance"]
    },
    {
      icon: Bot,
      title: "AI Automation Services",
      description: "Intelligent automation solutions that streamline business processes, reduce costs, and improve operational efficiency.",
      features: ["Process Automation", "Chatbot Development", "AI Integration", "Workflow Optimization"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization to ensure peak performance of your communication infrastructure.",
      features: ["Network Monitoring", "Performance Analytics", "Capacity Planning", "Optimization Reports"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Expert Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive consulting solutions designed to modernize your business 
            communication and automate complex processes with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
