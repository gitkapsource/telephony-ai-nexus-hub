
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
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
                      <span className="text-gray-700">AWS Certified</span>
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
