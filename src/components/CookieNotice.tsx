import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { X } from "lucide-react";

const CookieNotice = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie-notice-dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem("cookie-notice-dismissed", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border p-4 shadow-lg animate-fade-in">
      <div className="container mx-auto flex items-center justify-between gap-4 px-6">
        <p className="text-sm text-muted-foreground font-sans">
          {t("cookie.notice")}
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default CookieNotice;
