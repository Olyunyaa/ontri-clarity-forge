import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getConsent, setConsent, loadAnalytics } from "@/lib/analytics";

const CookieNotice = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === "granted") {
      loadAnalytics();
    } else if (consent === null) {
      setVisible(true);
    }
  }, []);

  const choose = (value: "granted" | "denied") => {
    setConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border p-4 shadow-lg animate-fade-in">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6">
        <p className="text-sm text-muted-foreground font-sans">
          {t("cookie.notice")}
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={() => choose("denied")}
            className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
          >
            {t("cookie.decline")}
          </button>
          <button
            onClick={() => choose("granted")}
            className="text-sm font-sans bg-primary text-primary-foreground hover:opacity-90 transition-opacity px-5 py-2 rounded-md"
          >
            {t("cookie.accept")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
