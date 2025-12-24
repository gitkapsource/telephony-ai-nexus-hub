import React from 'react';
import { Users, CheckCircle, Zap, Globe } from 'lucide-react';

const ClientsSection = () => {
  const clients = [
    {
      name: "Zasya Online",
      description: "WebRTC Softphone - CRM Integration with FusionPBX/FreeSWITCH Back End Engine",
      icon: Zap,
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Auxocare",
      description: "Azure Communications Services Direct Routing TLS/SRTP Integration with FusionPBX/FreeSWITCH",
      icon: Globe,
      color: "from-purple-600 to-purple-800"
    },
    {
      name: "GoZupees",
      description: "Kamailio based Intelligent Call Routing - Dynamic Phone Numbers based Routing to Voice AI Systems and CPaaS Solution Providers",
      icon: CheckCircle,
      color: "from-green-600 to-green-800"
    }
  ];

  return (
    <section id="clients" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Growing with Satisfied Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with innovative businesses to deliver cutting-edge VoIP and Voice AI solutions. 
            Here are some of our satisfied clients who trust us with their communication infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${client.color} rounded-lg mb-6`}>
                <client.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {client.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {client.description}
              </p>

              <div className="mt-6 flex items-center text-sm text-gray-500">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span>Successfully Deployed</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Join our growing list of satisfied clients and transform your communication infrastructure
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Become Our Next Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;



