// Google Analytics 4, загружается только после согласия пользователя (GDPR).
// Тот же ключ localStorage читают standalone-страницы /check/ и /audit/.
// Рядом в index.html (и в /catering/, /check/, /audit/) стоит GoatCounter: без cookie,
// поэтому грузится без согласия и считает всех; свои визиты (ga-ignore) тоже пропускает.
export const GA_MEASUREMENT_ID = "G-ZZSM623SC2";

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

// Свои визиты не считаем: открыть любую страницу сайта с ?me=1 — этот браузер
// больше не грузит GA (на всех страницах, ключ общий), ?me=0 — вернуть подсчёт.
export const IGNORE_KEY = "ga-ignore";

export const isIgnored = (): boolean => {
  try {
    return localStorage.getItem(IGNORE_KEY) === "1";
  } catch {
    return false;
  }
};

export const applyIgnoreParam = () => {
  try {
    const url = new URL(window.location.href);
    const me = url.searchParams.get("me");
    if (me !== "1" && me !== "0") return;
    if (me === "1") localStorage.setItem(IGNORE_KEY, "1");
    else localStorage.removeItem(IGNORE_KEY);
    url.searchParams.delete("me");
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    setTimeout(() => {
      window.alert(
        me === "1"
          ? "Готово: визиты с этого браузера больше не попадают в статистику."
          : "Статистика для этого браузера снова включена.",
      );
    }, 300);
  } catch {
    // localStorage недоступен — ничего не делаем
  }
};

let loaded = false;

export const loadAnalytics = () => {
  if (loaded || isIgnored() || !GA_MEASUREMENT_ID.startsWith("G-") || GA_MEASUREMENT_ID.includes("XXXX")) return;
  loaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  // gtag.js принимает только объект `arguments`, не массив — иначе события игнорируются
  function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
};

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
