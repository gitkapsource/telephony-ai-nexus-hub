
import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Clock, value: "99.9%", label: "Uptime Achieved" },
    { icon: Target, value: "1000+", label: "Projects Completed" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading the Future of 
                <span className="block text-blue-600">Business Communication</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in telecommunications and emerging AI technologies, 
                TechConsult Pro has established itself as a trusted partner for businesses seeking 
                to modernize their communication infrastructure.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of certified experts combines deep technical knowledge with practical 
                business insights to deliver solutions that not only meet today's needs but 
                also position your organization for future growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center"
                alt="Professional team working on advanced technology solutions"
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Our Expertise</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-gray-700">Cisco Certified</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                      <span className="text-gray-700">AI/ML Specialists</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                      <span className="text-gray-700">Cloud Solutions</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                      <span className="text-gray-700">Security Experts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
