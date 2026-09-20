// Google Analytics 4, загружается только после согласия пользователя (GDPR).
// Тот же ключ localStorage читают standalone-страницы /check/ и /audit/.
export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export const CONSENT_KEY = "analytics-consent";

export type ConsentValue = "granted" | "denied";

export const getConsent = (): ConsentValue | null => {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
};

export const setConsent = (value: ConsentValue) => {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // localStorage может быть недоступен (private mode) — баннер просто покажется снова
  }
  if (value === "granted") loadAnalytics();
};

let loaded = false;

export const loadAnalytics = () => {
  if (loaded || !GA_MEASUREMENT_ID.startsWith("G-") || GA_MEASUREMENT_ID.includes("X")) return;
  loaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
};

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
