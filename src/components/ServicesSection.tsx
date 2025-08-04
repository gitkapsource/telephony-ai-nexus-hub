import React from 'react';
import { Phone, Bot, Zap, Cloud, Settings, MessageSquare, Shield, Users, Globe } from 'lucide-react';

const ServicesSection = () => {
  const mainServices = [
    {
      icon: Phone,
      title: "VoIP & IP Telephony Solutions",
      description: "Complete VoIP infrastructure setup with FreeSWITCH, Asterisk, Amazon Connect, 3CX, and Twilio. Expert SIP trunking, PBX implementation, and VoIP migration services for crystal-clear business communication.",
      features: ["FreeSWITCH & Asterisk VoIP", "Amazon Connect & 3CX Setup", "SIP Trunking Solutions", "VoIP Migration Services"]
    },
    {
      icon: Bot,
      title: "Voice AI & Chat Bot Services",
      description: "Intelligent Voice AI and Chat Bot automation solutions using Google Dialogflow, N8N workflows, Twilio Voice API, and custom AI development. Streamline business processes and improve customer experience.",
      features: ["Google Dialogflow Implementation", "Voice Bot Development", "N8N Automation Workflows", "Twilio Voice API Integration"]
    },
    {
      icon: Zap,
      title: "VoIP Performance Optimization",
      description: "Continuous monitoring and optimization of VoIP systems, network performance analytics, capacity planning, and comprehensive VoIP support for FreeSWITCH, Asterisk, and cloud VoIP platforms.",
      features: ["VoIP Network Monitoring", "Performance Analytics", "Capacity Planning", "24/7 VoIP Support"]
    }
  ];

  const servicesPortfolio = [
    {
      icon: Settings,
      title: "VoIP Platform Implementation",
      services: ["3CX VoIP Systems Setup", "Twilio Voice API Integration", "N8N Automation Workflows", "Amazon Connect Implementation", "FreeSWITCH Configuration", "Asterisk PBX Setup"]
    },
    {
      icon: Bot,
      title: "Voice AI & Voice Bots",
      services: ["N8N with VAPI Integration", "N8N with Twilio Voice", "Google Dialogflow CX", "Custom Voice Bot Development", "AI Voice Automation", "Conversational AI Solutions"]
    },
    {
      icon: Phone,
      title: "VoIP Consulting & Technical Support",
      services: [
        "FreeSWITCH Application & Support",
        "Asterisk VoIP Support & Configuration",
        "OpenSIPS/Kamailio Configuration",
        "Amazon Connect Consulting Services",
        "SIP Trunking Optimization",
        "VoIP Call Centre Setup India"
      ]
    },
    {
      icon: MessageSquare,
      title: "Conversational AI & Chat Bots",
      services: ["Google Dialogflow CX Implementation", "Custom Chat Bot Development", "AI Chat Automation", "Customer Service Bots", "WhatsApp Bot Integration", "Telegram Bot Development"]
    },
    {
      icon: Bot,
      title: "AI Automation & Agentic AI",
      services: ["N8N.com Workflow Automation", "make.com Integration", "AI Agent Development", "Process Automation", "Workflow Optimization", "AI-Powered Solutions"]
    },
    {
      icon: Cloud,
      title: "Cloud VoIP Services",
      services: ["AWS Cloud Professional Services", "Cloud VoIP Migration", "Cloud PBX Solutions", "Hosted VoIP Services", "Cloud Communication Platforms", "SaaS VoIP Solutions"]
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "VoIP Security & Compliance",
      services: ["VoIP Security Audits", "SIP Security Implementation", "VoIP Compliance Services", "Data Protection", "Encryption Solutions", "Security Best Practices"]
    },
    {
      icon: Users,
      title: "Call Center Solutions",
      services: ["VoIP Call Center Setup", "IVR System Implementation", "Call Routing Optimization", "Call Analytics & Reporting", "Call Center Automation", "Customer Experience Enhancement"]
    },
    {
      icon: Globe,
      title: "International VoIP Services",
      services: ["International SIP Trunking", "Global VoIP Solutions", "Multi-Country VoIP Setup", "International Call Routing", "Global Communication Platforms", "Cross-Border VoIP Services"]
    }
  ];

  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert VoIP and Voice AI Services in India
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive VoIP consulting and Voice AI solutions designed to modernize your business 
            communication with FreeSWITCH, Asterisk, Amazon Connect, 3CX, Twilio, Google Dialogflow, 
            and N8N automation. Leading VoIP provider in India with 10+ years of experience.
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
              Complete VoIP & Voice AI Services Portfolio
            </h3>
            <p className="text-lg text-gray-600">
              Specialized expertise across multiple VoIP platforms, Voice AI technologies, and automation tools. 
              India's trusted VoIP and Voice AI consulting partner.
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

        {/* Additional Services */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized VoIP & Voice AI Solutions
            </h3>
            <p className="text-lg text-gray-600">
              Advanced VoIP and Voice AI services for enterprise-level communication needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg mr-4 shadow-sm">
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
