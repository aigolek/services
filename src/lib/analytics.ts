declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick(source: string) {
  window.gtag?.("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: source,
  });
}

export function trackPhoneClick(source: string) {
  window.gtag?.("event", "phone_click", {
    event_category: "engagement",
    event_label: source,
  });
}

export function trackCalculatorSubmit() {
  window.gtag?.("event", "calculator_submit", {
    event_category: "engagement",
  });
}
