import { Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LegalModal from "@/components/LegalModal";
import TermsContent from "@/components/legal/TermsContent";
import PrivacyContent from "@/components/legal/PrivacyContent";
import CookiePolicyContent from "@/components/legal/CookiePolicyContent";
import DisclaimerContent from "@/components/legal/DisclaimerContent";

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

        <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-xs font-sans">
          <LegalModal
            title={t("legal.terms.title")}
            trigger={<button className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">{t("legal.terms.title")}</button>}
          >
            <TermsContent />
          </LegalModal>

          <span className="text-primary-foreground/20">|</span>

          <LegalModal
            title={t("legal.privacy.title")}
            trigger={<button className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">{t("legal.privacy.title")}</button>}
          >
            <PrivacyContent />
          </LegalModal>

          <span className="text-primary-foreground/20">|</span>

          <LegalModal
            title={t("legal.cookies.title")}
            trigger={<button className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">{t("legal.cookies.title")}</button>}
          >
            <CookiePolicyContent />
          </LegalModal>

          <span className="text-primary-foreground/20">|</span>

          <LegalModal
            title={t("legal.disclaimer.title")}
            trigger={<button className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">{t("legal.disclaimer.title")}</button>}
          >
            <DisclaimerContent />
          </LegalModal>
        </div>

        <p className="text-primary-foreground/40 text-xs font-sans text-center">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
