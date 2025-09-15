import React, { useState } from 'react';
import { Phone, Mail, Download, Calendar, CheckCircle, ArrowRight, Clock, Users, Award } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const LeadCaptureSection = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name,
        email,
        company: company || null,
        service: selectedService || null,
        message: `Lead from website. Phone: ${phone || 'N/A'}`,
      };
      console.log('[LeadCapture] Inserting into contacts', payload);
      const { data, error } = await supabase.from('contacts').insert(payload).select();

      if (error) {
        console.error('[LeadCapture] Supabase insert error:', error);
        throw error;
      }

      console.log('[LeadCapture] Inserted row(s):', data);

      toast({
        title: 'Submitted successfully',
        description: "We'll contact you within 24 hours.",
      });

      setSubmitted(true);
      setEmail('');
      setPhone('');
      setName('');
      setCompany('');
      setSelectedService('');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      console.error('[LeadCapture] Submission failed:', err);
      toast({
        title: 'Submission failed',
        description: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const offers = [
    {
      icon: Download,
      title: "Free VoIP Migration Guide",
      description: "Complete 25-page guide to VoIP migration for Indian businesses",
      cta: "Download Free Guide",
      color: "from-blue-600 to-purple-600",
      value: "₹5,000 value"
    },
    {
      icon: Calendar,
      title: "Free VoIP Consultation",
      description: "30-minute consultation with VoIP experts",
      cta: "Book Free Consultation",
      color: "from-green-600 to-blue-600",
      value: "₹2,000 value"
    },
    {
      icon: Phone,
      title: "Free VoIP Assessment",
      description: "Get a free cost analysis for your business",
      cta: "Get Free Assessment",
      color: "from-purple-600 to-pink-600",
      value: "₹3,000 value"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions India",
      text: "IntelVoiz helped us save 60% on our phone bills with VoIP migration.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "E-commerce Startup",
      text: "Their Voice AI implementation increased our sales by 40%.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Call Center Manager",
      text: "Best VoIP consulting service in India. Highly recommended!",
      rating: 5
    }
  ];

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            We'll contact you within 24 hours with your free consultation.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="lead-capture" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Free VoIP & Voice AI Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 500+ Indian businesses that have transformed their communication with our expert VoIP and Voice AI solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Lead Capture Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get Your Free Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Company Name"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input 
                    type="tel" 
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Service</option>
                  <option value="voip-migration">VoIP Migration</option>
                  <option value="voice-ai">Voice AI Solutions</option>
                  <option value="freeswitch">FreeSWITCH Support</option>
                  <option value="asterisk">Asterisk Implementation</option>
                  <option value="amazon-connect">Amazon Connect</option>
                  <option value="sip-trunking">SIP Trunking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Get Free VoIP Consultation</span>
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Offers and Testimonials */}
          <div className="space-y-8">
            {/* Free Offers */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Free Resources for Indian Businesses
              </h3>
              <div className="space-y-4">
                {offers.map((offer, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                    <div className="flex items-start space-x-4">
                      <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${offer.color} rounded-lg`}>
                        <offer.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{offer.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{offer.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-green-600 text-sm font-medium">{offer.value}</span>
                          <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1">
                            <span>Get Now</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center space-x-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-3">"{testimonial.text}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency CTA */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-6 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="h-6 w-6" />
                <h4 className="text-lg font-semibold">Limited Time Offer</h4>
              </div>
              <p className="mb-4">
                Get 50% off on VoIP migration services for the first 10 businesses this month!
              </p>
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Claim Your Discount
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection; 