/**
 * Privacy-safe analytics tracking helper for Siyara Innovations.
 * Dispatches conversion events without capturing any personal information
 * (no visitor names, email addresses, phone numbers, or project descriptions).
 */

export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined') return;

  try {
    // 1. Google Analytics 4 (gtag)
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // 2. dataLayer queue
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  } catch {
    // Silently continue if tracking is blocked or fails
  }
};

export const AnalyticsEvents = {
  // Contact page events
  CONTACT_FORM_STARTED: 'contact_form_started',
  CONTACT_SERVICE_SELECTED: 'contact_service_selected',
  CONTACT_FORM_SUBMITTED: 'contact_form_submitted',
  CONTACT_WHATSAPP_CLICKED: 'contact_whatsapp_clicked',
  CONTACT_EMAIL_CLICKED: 'contact_email_clicked',
};

