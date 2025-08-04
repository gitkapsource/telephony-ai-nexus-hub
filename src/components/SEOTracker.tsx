import React, { useEffect } from 'react';

interface SEOTrackerProps {
  pageTitle: string;
  pageDescription: string;
  keywords: string[];
}

const SEOTracker: React.FC<SEOTrackerProps> = ({ pageTitle, pageDescription, keywords }) => {
  useEffect(() => {
    // Track page view for SEO analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_description: pageDescription,
        keywords: keywords.join(', '),
        custom_parameter_1: 'voip_services',
        custom_parameter_2: 'voice_ai_solutions'
      });
    }

    // Track scroll depth for engagement metrics
    let maxScroll = 0;
    const trackScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll >= 25 && maxScroll < 50) {
          trackEvent('scroll_25_percent');
        } else if (maxScroll >= 50 && maxScroll < 75) {
          trackEvent('scroll_50_percent');
        } else if (maxScroll >= 75) {
          trackEvent('scroll_75_percent');
        }
      }
    };

    // Track time on page
    let startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent >= 30) {
        trackEvent('time_on_page_30_seconds');
      }
      if (timeSpent >= 60) {
        trackEvent('time_on_page_1_minute');
      }
    };

    const trackEvent = (eventName: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, {
          page_title: pageTitle,
          custom_parameter_1: 'voip_services',
          custom_parameter_2: 'voice_ai_solutions'
        });
      }
    };

    // Add event listeners
    window.addEventListener('scroll', trackScroll);
    const timeInterval = setInterval(trackTimeOnPage, 10000); // Check every 10 seconds

    // Track form interactions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', () => {
        trackEvent('form_submission');
      });
    });

    // Track button clicks
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const buttonText = (e.target as HTMLElement).textContent || '';
        if (buttonText.includes('Contact') || buttonText.includes('Consultation')) {
          trackEvent('contact_button_click');
        } else if (buttonText.includes('Service') || buttonText.includes('View')) {
          trackEvent('service_button_click');
        }
      });
    });

    // Track phone number clicks
    const phoneNumbers = document.querySelectorAll('a[href^="tel:"]');
    phoneNumbers.forEach(phone => {
      phone.addEventListener('click', () => {
        trackEvent('phone_number_click');
      });
    });

    // Track email clicks
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(email => {
      email.addEventListener('click', () => {
        trackEvent('email_click');
      });
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScroll);
      clearInterval(timeInterval);
    };
  }, [pageTitle, pageDescription, keywords]);

  // Track section visibility for better SEO insights
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'section_view', {
              section_id: sectionId,
              page_title: pageTitle,
              custom_parameter_1: 'voip_services',
              custom_parameter_2: 'voice_ai_solutions'
            });
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [pageTitle]);

  return null; // This component doesn't render anything
};

export default SEOTracker; 