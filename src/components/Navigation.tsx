import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const industries = [
    'Real Estate',
    'Healthcare',
    'Recruitment',
    'Restaurants',
    'E-commerce',
    'Travel Hospitality',
    'Logistics',
    'Solar',
    'Mortgage',
    'Car Dealerships',
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/76923a56-250c-4961-a336-c37c70150296.png" 
              alt="IntelVoiz Communications" 
              className="h-16 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
              title="IntelVoiz Communications"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-indigo-600 px-4 py-2 text-base font-medium transition-colors rounded-lg hover:bg-indigo-50/50"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-indigo-600 px-4 py-2 text-base font-medium transition-colors rounded-lg hover:bg-indigo-50/50"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('industries')}
                className="text-gray-700 hover:text-indigo-600 px-4 py-2 text-base font-medium transition-colors rounded-lg hover:bg-indigo-50/50"
              >
                Industries
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-indigo-600 px-4 py-2 text-base font-medium transition-colors rounded-lg hover:bg-indigo-50/50"
              >
                About
              </button>
              <Link 
                to="/blog"
                className="text-gray-700 hover:text-indigo-600 px-4 py-2 text-base font-medium transition-colors rounded-lg hover:bg-indigo-50/50"
              >
                Blog
              </Link>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-indigo-600 px-4 py-2 text-base font-medium transition-colors rounded-lg hover:bg-indigo-50/50"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center text-gray-600 text-base font-medium hover:text-indigo-600 transition-colors">
              <div className="p-2 bg-indigo-50 rounded-lg mr-2">
                <Phone className="h-4 w-4 text-indigo-600" />
              </div>
              <span>+16824280781</span>
            </div>
            <div className="flex items-center text-gray-600 text-base font-medium hover:text-indigo-600 transition-colors">
              <div className="p-2 bg-indigo-50 rounded-lg mr-2">
                <Mail className="h-4 w-4 text-indigo-600" />
              </div>
              <span>info@intelvoiz.com</span>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-blue-600 w-full text-left"
            >
              AI Automation Industries
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-blue-600 w-full text-left"
            >
              About
            </button>
            <Link 
              to="/blog"
              className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Blog
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-lg font-medium text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
