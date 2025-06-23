
import React from 'react';
import { Phone, Bot, Zap, Cloud, Settings, MessageSquare } from 'lucide-react';

const ServicesSection = () => {
  const mainServices = [
    {
      icon: Phone,
      title: "VoIP & IP Telephony Solutions",
      description: "Complete VoIP infrastructure setup, migration from traditional phone systems, and ongoing maintenance for crystal-clear business communication.",
      features: ["VoIP System Design", "PBX Implementation", "SIP Trunking", "Quality Assurance"]
    },
    {
      icon: Bot,
      title: "Voice AI & Chat Bot Services",
      description: "Intelligent Voice AI and Chat Bot automation solutions that streamline business processes, reduce costs, and improve customer experience.",
      features: ["Voice Bot Development", "Chat Bot Integration", "AI Automation", "Workflow Optimization"]
    },
    {
      icon: Zap,
      title: "VoIP Performance Optimization",
      description: "Continuous monitoring and optimization to ensure peak performance of your VoIP and IP telephony communication infrastructure.",
      features: ["Network Monitoring", "Performance Analytics", "Capacity Planning", "VoIP Optimization Reports"]
    }
  ];

  const servicesPortfolio = [
    {
      icon: Settings,
      title: "VoIP Platform Onboarding",
      services: ["3CX VoIP Systems", "Twilio Voice API", "N8N Automation", "Amazon Connect"]
    },
    {
      icon: Bot,
      title: "Voice AI & Voice Bots",
      services: ["N8N with VAPI Integration", "N8N with Twilio Voice"]
    },
    {
      icon: Phone,
      title: "VoIP Consulting & Technical Support",
      services: [
        "FreeSWITCH Application & Support",
        "Asterisk VoIP Support",
        "OpenSIPS/Kamailio Configuration & Support",
        "Amazon Connect Consulting Service",
        "SIP Trunking Optimization",
        "VoIP Call Centre Setup"
      ]
    },
    {
      icon: MessageSquare,
      title: "Conversational AI & Chat Bots",
      services: ["Google Dialogflow CX", "Custom Chat Bot Development"]
    },
    {
      icon: Bot,
      title: "AI Automation & Agentic AI",
      services: ["N8N.com Workflows", "make.com Integration"]
    },
    {
      icon: Cloud,
      title: "Cloud VoIP Services",
      services: ["AWS Cloud Professional Services", "Cloud VoIP Migration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert VoIP, IP Telephony & AI Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive VoIP consulting and Voice AI solutions designed to modernize your business 
            communication and automate complex processes with cutting-edge IP telephony technology.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
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

        {/* Services Portfolio */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              VoIP & Voice AI Services Portfolio
            </h3>
            <p className="text-lg text-gray-600">
              Specialized expertise across multiple VoIP platforms, Voice AI technologies, and automation tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesPortfolio.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h4>
                </div>
                
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
