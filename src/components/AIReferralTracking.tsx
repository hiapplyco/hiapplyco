import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      parameters?: {
        [key: string]: any;
      }
    ) => void;
  }
}

const AIReferralTracking = () => {
  useEffect(() => {
    // Track AI referrals based on referrer patterns
    const trackAIReferral = () => {
      const referrer = document.referrer.toLowerCase();
      const currentPath = window.location.pathname;
      
      // AI platform referrer patterns
      const aiPlatforms: { [key: string]: string } = {
        'chat.openai.com': 'chatgpt',
        'chatgpt.com': 'chatgpt',
        'perplexity.ai': 'perplexity',
        'claude.ai': 'claude',
        'bard.google.com': 'bard',
        'gemini.google.com': 'gemini',
        'you.com': 'you.com',
        'phind.com': 'phind',
        'poe.com': 'poe'
      };

      // Check if referrer is from an AI platform
      let aiSource = 'direct';
      for (const [domain, platform] of Object.entries(aiPlatforms)) {
        if (referrer.includes(domain)) {
          aiSource = platform;
          break;
        }
      }

      // Track AI referral event if from AI platform
      if (aiSource !== 'direct' && window.gtag) {
        window.gtag('event', 'ai_referral', {
          'ai_source': aiSource,
          'landing_page': currentPath,
          'referrer': referrer,
          'timestamp': new Date().toISOString()
        });

        // Also track as custom dimension for easier analysis
        window.gtag('event', 'page_view', {
          'custom_dimension_ai_source': aiSource
        });
      }

      // Track query parameters that might indicate AI traffic
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const ref = urlParams.get('ref');
      
      if (utmSource?.toLowerCase().includes('ai') || 
          utmSource?.toLowerCase().includes('chat') ||
          ref?.toLowerCase().includes('ai')) {
        window.gtag('event', 'ai_referral_utm', {
          'utm_source': utmSource,
          'ref': ref,
          'landing_page': currentPath
        });
      }
    };

    // Track on mount
    trackAIReferral();

    // Set up custom tracking for specific AI-driven behaviors
    const trackAIBehavior = () => {
      // Track scroll depth for AI visitors
      let maxScroll = 0;
      const handleScroll = () => {
        const scrollPercentage = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercentage > maxScroll) {
          maxScroll = scrollPercentage;
          
          // Track milestone scroll depths
          if ([25, 50, 75, 90].includes(maxScroll)) {
            window.gtag('event', 'ai_visitor_scroll', {
              'scroll_depth': maxScroll,
              'page': window.location.pathname
            });
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    };

    const cleanup = trackAIBehavior();
    return cleanup;
  }, []);

  // Track CTA clicks for AI visitors
  useEffect(() => {
    const trackCTAClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const ctaElement = target.closest('a, button');
      
      if (ctaElement) {
        const href = ctaElement.getAttribute('href');
        const text = ctaElement.textContent || '';
        
        // Track if it's a link to apply.codes
        if (href?.includes('apply.codes')) {
          window.gtag('event', 'ai_visitor_apply_codes_click', {
            'link_text': text,
            'link_url': href,
            'source_page': window.location.pathname
          });
        }
        
        // Track other important CTAs
        if (text.toLowerCase().includes('schedule') || 
            text.toLowerCase().includes('demo') ||
            text.toLowerCase().includes('get started')) {
          window.gtag('event', 'ai_visitor_cta_click', {
            'cta_text': text,
            'cta_type': href?.startsWith('#') ? 'internal' : 'external',
            'source_page': window.location.pathname
          });
        }
      }
    };

    document.addEventListener('click', trackCTAClick);
    return () => document.removeEventListener('click', trackCTAClick);
  }, []);

  // No visual output, just tracking
  return null;
};

export default AIReferralTracking;