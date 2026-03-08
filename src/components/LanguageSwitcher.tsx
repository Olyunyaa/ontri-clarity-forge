import { useLanguage } from "@/i18n/LanguageContext";
import { Language, languageLabels } from "@/i18n/translations";
import { Globe } from "lucide-react";

const languages: Language[] = ["en", "nl", "ru"];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <Globe className="w-4 h-4 text-primary-foreground/60 mr-1" />
      {languages.map((lang, i) => (
        <span key={lang} className="flex items-center">
          <button
            onClick={() => setLanguage(lang)}
            className={`text-xs font-sans tracking-wide transition-colors ${
              language === lang
                ? "text-primary-foreground font-medium"
                : "text-primary-foreground/50 hover:text-primary-foreground/80"
            }`}
          >
            {languageLabels[lang]}
          </button>
          {i < languages.length - 1 && (
            <span className="text-primary-foreground/30 mx-1 text-xs">/</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
