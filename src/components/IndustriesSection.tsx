import React from 'react';
import { Link } from 'react-router-dom';

const industries = [
  { name: 'Real Estate', slug: 'real-estate', description: 'AI-powered automation for property management, lead generation, and customer engagement in real estate.' },
  { name: 'Healthcare', slug: 'healthcare', description: 'Voice AI and automation for patient engagement, appointment scheduling, and telemedicine.' },
  { name: 'Recruitment', slug: 'recruitment', description: 'Automate candidate screening, interview scheduling, and onboarding with AI-driven solutions.' },
  { name: 'Restaurants', slug: 'restaurants', description: 'AI chatbots and voice ordering for restaurants, reservations, and customer service.' },
  { name: 'E-commerce', slug: 'e-commerce', description: 'Conversational AI for product recommendations, order tracking, and customer support.' },
  { name: 'Travel Hospitality', slug: 'travel-hospitality', description: 'AI automation for bookings, customer queries, and personalized travel experiences.' },
  { name: 'Logistics', slug: 'logistics', description: 'Optimize supply chain, shipment tracking, and customer notifications with AI.' },
  { name: 'Solar', slug: 'solar', description: 'AI solutions for lead generation, customer support, and remote monitoring in solar industry.' },
  { name: 'Mortgage', slug: 'mortgage', description: 'Automate loan processing, customer queries, and document management with AI.' },
  { name: 'Car Dealerships', slug: 'car-dealerships', description: 'Voice AI for lead capture, test drive booking, and customer follow-ups in auto sales.' },
];

const IndustriesSection = () => (
  <section id="industries" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          AI Automation Industries
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how AI automation can transform your industry. We provide specialized solutions for businesses across various sectors.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry) => (
          <div key={industry.slug} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
            </div>
            <Link 
              to={`/industries/${industry.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
            >
              Learn More
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Don't see your industry? We can customize solutions for any business type.
        </p>
        <Link 
          to="/contact"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Get Custom Solution
        </Link>
      </div>
    </div>
  </section>
);

export default IndustriesSection; 