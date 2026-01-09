import React from 'react';
import { useParams, Link } from 'react-router-dom';

const industryData: Record<string, { name: string; description: string; details: string }> = {
  'real-estate': {
    name: 'Real Estate',
    description: 'AI-powered automation for property management, lead generation, and customer engagement in real estate.',
    details: 'Our AI solutions help real estate companies automate lead capture, qualify prospects, schedule property visits, and provide 24/7 customer support through voice and chat bots.'
  },
  'healthcare': {
    name: 'Healthcare',
    description: 'Voice AI and automation for patient engagement, appointment scheduling, and telemedicine.',
    details: 'Enable automated appointment reminders, patient triage, and virtual assistants for healthcare providers, improving patient experience and reducing operational costs.'
  },
  'recruitment': {
    name: 'Recruitment',
    description: 'Automate candidate screening, interview scheduling, and onboarding with AI-driven solutions.',
    details: 'Streamline recruitment workflows with AI chatbots for candidate engagement, automated interview scheduling, and onboarding support.'
  },
  'restaurants': {
    name: 'Restaurants',
    description: 'AI Voicebots and voice ordering for restaurants, reservations, and customer service.',
    details: 'Offer voice ordering, reservation management, and instant customer support for restaurants using conversational AI.'
  },
  'e-commerce': {
    name: 'E-commerce',
    description: 'Conversational AI for product recommendations, order tracking, and customer support.',
    details: 'Boost sales and customer satisfaction with AI-powered product recommendations, order status updates, and automated support.'
  },
  'travel-hospitality': {
    name: 'Travel Hospitality',
    description: 'AI automation for bookings, customer queries, and personalized travel experiences.',
    details: 'Enhance guest experience with AI-driven booking assistants, personalized recommendations, and instant support for travelers.'
  },
  'logistics': {
    name: 'Logistics',
    description: 'Optimize supply chain, shipment tracking, and customer notifications with AI.',
    details: 'Automate shipment tracking, delivery notifications, and customer queries for logistics companies.'
  },
  'solar': {
    name: 'Solar',
    description: 'AI solutions for lead generation, customer support, and remote monitoring in solar industry.',
    details: 'Generate more leads, provide instant support, and monitor installations remotely with AI-powered tools for solar businesses.'
  },
  'mortgage': {
    name: 'Mortgage',
    description: 'Automate loan processing, customer queries, and document management with AI.',
    details: 'Speed up loan processing, answer customer questions, and manage documents efficiently using AI automation.'
  },
  'car-dealerships': {
    name: 'Car Dealerships',
    description: 'Voice AI for lead capture, test drive booking, and customer follow-ups in auto sales.',
    details: 'Capture leads, schedule test drives, and automate follow-ups for car dealerships using conversational AI.'
  },
};

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? industryData[slug] : undefined;

  if (!industry) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Industry Not Found</h1>
        <Link to="/industries" className="text-blue-600 hover:underline">Back to Industries</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <img 
              src="/lovable-uploads/76923a56-250c-4961-a336-c37c70150296.png" 
              alt="IntelVoiz Communications" 
              className="h-12 mx-auto hover:opacity-80 transition-opacity duration-300 cursor-pointer"
              title="IntelVoiz Communications"
            />
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{industry.name}</h1>
        </div>
        <p className="text-lg text-gray-700 mb-6">{industry.description}</p>
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-2">How We Help {industry.name} Companies</h2>
          <p className="text-gray-700 mb-4">{industry.details}</p>
        </div>
        <Link to="/industries" className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 font-medium transition-colors">Back to All Industries</Link>
      </div>
    </div>
  );
};

export default IndustryDetail; 
