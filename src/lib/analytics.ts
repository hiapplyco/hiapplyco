// Plausible Analytics Helper Functions
// Lightweight analytics tracking for hiapply.co

declare global {
  interface Window {
    plausible: (eventName: string, options?: { props?: Record<string, string | number> }) => void;
  }
}

// Track custom events
export const trackEvent = (eventName: string, props?: Record<string, string | number>) => {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props });
  }
};

// Common event tracking functions
export const trackClick = (buttonName: string, location?: string) => {
  trackEvent('Click', { button: buttonName, ...(location && { location }) });
};

export const trackFormSubmit = (formName: string, success: boolean = true) => {
  trackEvent('Form Submit', { form: formName, success: success ? 'true' : 'false' });
};

export const trackPageView = (pageName: string) => {
  trackEvent('Page View', { page: pageName });
};

export const trackCTAClick = (ctaName: string, destination: string) => {
  trackEvent('CTA Click', { cta: ctaName, destination });
};

// Track outbound links (especially to apply.codes)
export const trackOutboundLink = (url: string) => {
  trackEvent('Outbound Link', { url });
};

// Track conversion goals
export const trackGoal = (goalName: string, value?: number) => {
  trackEvent(`Goal: ${goalName}`, value ? { value } : undefined);
};