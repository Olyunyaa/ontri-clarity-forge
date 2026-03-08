import { Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="https://www.linkedin.com/company/ontri-advisory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        <p className="text-primary-foreground/40 text-xs font-sans text-center">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
