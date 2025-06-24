import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Leading VoIP & Voice AI Experts
              </h1>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
