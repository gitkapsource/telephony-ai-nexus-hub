import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What VoIP services does IntelVoiz provide in ?",
      answer: "IntelVoiz provides comprehensive VoIP services including FreeSWITCH and Asterisk implementation, Amazon Connect and 3CX setup, SIP trunking, PBX systems, VoIP migration, and 24/7 technical support across ."
    },
    {
      question: "What Voice AI solutions do you offer?",
      answer: "We offer Voice AI solutions including Google Dialogflow implementation, N8N automation workflows, Twilio Voice API integration, custom Voice Bot development, Chat Bot creation, and conversational AI solutions."
    },
    {
      question: "Do you provide VoIP consulting in ?",
      answer: "Yes, IntelVoiz is 's leading VoIP consulting firm, providing expert IP Telephony solutions, Voice AI services, and technical support across  with over 10 years of experience and 25+ successful projects."
    },
    {
      question: "What VoIP platforms do you support?",
      answer: "We support all major VoIP platforms including FreeSWITCH, Asterisk, Amazon Connect, 3CX, Twilio, OpenSIPS, Kamailio, and custom VoIP solutions. We also provide SIP trunking and PBX system implementation."
    },
    {
      question: "How much does VoIP implementation cost?",
      answer: "VoIP implementation costs vary based on your requirements. We offer consultation to assess your needs and provide customized pricing. Contact us for a detailed quote tailored to your business."
    },
    {
      question: "Do you provide 24/7 VoIP support?",
      answer: "Yes, we provide 24/7 technical support for all VoIP systems, Voice AI solutions, and ongoing maintenance services to ensure uninterrupted business communication."
    },
    {
      question: "What Voice AI technologies do you use?",
      answer: "We use Google Dialogflow, N8N automation, Twilio Voice API, custom AI development, and various Voice Bot and Chat Bot technologies to create intelligent conversational AI solutions."
    },
    {
      question: "Can you help with VoIP migration from traditional phone systems?",
      answer: "Absolutely! We specialize in VoIP migration services, helping businesses transition from traditional phone systems to modern IP telephony solutions with minimal disruption and maximum efficiency."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = {
        name: form.name,
        email: form.email,
        company: form.company || null,
        service: form.service || null,
        message: form.message || `Contact form submission. Phone: ${form.phone || 'N/A'}`,
      };
      console.log('[ContactSection] Inserting into contacts', payload);
      const { data, error } = await supabase.from('contacts').insert(payload).select();
      if (error) {
        console.error('[ContactSection] Supabase insert error:', error);
        throw error;
      }
      console.log('[ContactSection] Inserted row(s):', data);
      toast({ title: 'Thanks! We received your message.' });
      setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      console.error('[ContactSection] Submission failed:', err);
      toast({ title: 'Failed to submit', description: message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Information */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact IntelVoiz - VoIP & Voice AI Experts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert VoIP and Voice AI consultation from leading telecommunications experts. 
            Consultation available for all VoIP and Voice AI projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Book VoIP & Voice AI Consultation
            </h2>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input 
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Company Name"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                <select 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                >
                  <option value="">Select Service</option>
                  <option value="voip-telephony">VoIP & IP Telephony Solutions</option>
                  <option value="voice-ai">Voice AI & Chat Bot Services</option>
                  <option value="fs-asterisk">FreeSWITCH & Asterisk Support</option>
                  <option value="amazon-3cx">Amazon Connect & 3CX Implementation</option>
                  <option value="dialogflow-n8n">Google Dialogflow & N8N Automation</option>
                  <option value="voip-migration">VoIP Migration Services</option>
                  <option value="support-24x7">24/7 VoIP Support</option>
                  <option value="ms-teams">MS Teams Complete Setup</option>
                  <option value="us-uk-canada-did">US/UK/Canada DID</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your VoIP or Voice AI requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting...' : 'Book VoIP Consultation'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+16824280781</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg">
                    <svg
                      viewBox="0 0 240 240"
                      className="h-10 w-10"
                    >
                      <circle cx="120" cy="120" r="120" fill="#2AABEE" />
                      <path
                        d="M52 123.5L170 75.5C175 73.5 179.5 76.5 178 82.5L157 172.5C155.5 178.5 151.5 180 146.5 177L116 155L101 169.5C99.5 171 98.5 172 96 172L98 141L157 90C159.5 87.5 156.5 86.5 153.5 88.5L79 135.5L50.5 126.5C44.5 124.5 44.5 120.5 52 123.5Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telegram</h3>
                    <p className="text-gray-600">+16824280781</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@intelvoiz.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Global Coverage</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Support Hours</h3>
                    <p className="text-gray-600">24/7 Technical Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Quick Links */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>FreeSWITCH & Asterisk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Amazon Connect & 3CX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Google Dialogflow</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span>N8N Automation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>SIP Trunking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>Voice AI Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions - VoIP & Voice AI
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our VoIP and Voice AI services in 
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg mb-4">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
