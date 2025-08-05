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

const Industries = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-8">
        <Link to="/" className="inline-block mb-6">
          <img 
            src="/lovable-uploads/76923a56-250c-4961-a336-c37c70150296.png" 
            alt="IntelVoiz" 
            className="h-12 mx-auto hover:opacity-80 transition-opacity"
          />
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Automation Industries</h1>
        <p className="text-lg text-gray-600">Discover how AI automation can transform your industry</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {industries.map((industry) => (
          <div key={industry.slug} className="bg-white rounded-lg shadow p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">{industry.name}</h2>
              <p className="text-gray-600 mb-4">{industry.description}</p>
            </div>
            <Link to={`/industries/${industry.slug}`} className="inline-block mt-auto bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 font-medium transition-colors">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Industries; 