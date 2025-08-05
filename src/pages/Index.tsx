
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import LeadCaptureSection from '@/components/LeadCaptureSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SEOTracker from '@/components/SEOTracker';
import LeadCapture from '@/components/LeadCapture';

const Index = () => {
  const seoData = {
    pageTitle: "IntelVoiz - #1 VoIP & Voice AI Solutions Provider | IP Telephony & Chat Bot Experts",
    pageDescription: "India's leading VoIP and Voice AI solutions provider. Expert IP Telephony, Voice Bots, Chat Bots, SIP Trunking, PBX Systems, FreeSWITCH, Asterisk, Amazon Connect, 3CX, Twilio consulting.",
    keywords: [
      "VoIP Services India",
      "Voice AI Solutions",
      "IP Telephony Consulting",
      "FreeSWITCH Support",
      "Asterisk VoIP",
      "Amazon Connect",
      "3CX Implementation",
      "Twilio Integration",
      "Google Dialogflow",
      "N8N Automation",
      "SIP Trunking",
      "PBX Systems",
      "Voice Bot Development",
      "Chat Bot Services"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOTracker 
        pageTitle={seoData.pageTitle}
        pageDescription={seoData.pageDescription}
        keywords={seoData.keywords}
      />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LeadCaptureSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <LeadCapture />
    </div>
  );
};

export default Index;
