import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [industriesTimeout, setIndustriesTimeout] = useState<NodeJS.Timeout | null>(null);

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
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/76923a56-250c-4961-a336-c37c70150296.png" 
              alt="Intelligent Voice" 
              className="h-8"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <div className="relative inline-block text-left"
                onMouseEnter={() => {
                  if (industriesTimeout) {
                    clearTimeout(industriesTimeout);
                    setIndustriesTimeout(null);
                  }
                  setIsIndustriesOpen(true);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setIsIndustriesOpen(false);
                  }, 150);
                  setIndustriesTimeout(timeout);
                }}
              >
                <button
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                  type="button"
                >
                  AI Automation Industries
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {isIndustriesOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    onMouseEnter={() => {
                      if (industriesTimeout) {
                        clearTimeout(industriesTimeout);
                        setIndustriesTimeout(null);
                      }
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setIsIndustriesOpen(false);
                      }, 150);
                      setIndustriesTimeout(timeout);
                    }}
                  >
                    <div className="py-1">
                      {industries.map((item) => (
                        <Link
                          key={item}
                          to={`/industries/${item.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer"
                          onClick={() => setIsIndustriesOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <Link 
                to="/blog"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </Link>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-gray-600 text-sm">
              <Phone className="h-4 w-4 mr-1" />
              <span>+91-9825597662</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Mail className="h-4 w-4 mr-1" />
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
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Services
            </button>
            <div>
              <button
                onClick={() => setIsMobileIndustriesOpen((prev) => !prev)}
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 text-left"
              >
                AI Automation Industries
                <svg className={`ml-2 h-4 w-4 transform transition-transform ${isMobileIndustriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isMobileIndustriesOpen && (
                <div className="pl-4">
                  {industries.map((item) => (
                    <Link
                      key={item}
                      to={`/industries/${item.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`}
                      className="block px-3 py-2 text-base text-gray-700 hover:bg-blue-50 rounded cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
            >
              About
            </button>
            <Link 
              to="/blog"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Blog
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
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
