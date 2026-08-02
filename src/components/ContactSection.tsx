import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-accent-dark mb-4">{t("contact.label")}</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 leading-tight">
              {t("contact.title")}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
                <a href="https://calendly.com/ontri-advisory/new-meeting" target="_blank" rel="noopener noreferrer">
                  {t("contact.cta")}
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/60 text-sm font-sans">
              <Mail className="w-4 h-4" />
              <span>{t("contact.email")}</span>
              <a href="mailto:hello@ontri-advisory.com" className="text-accent-dark hover:underline">
                hello@ontri-advisory.com
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-primary-foreground/60 text-sm font-sans">
              <span>{t("contact.checkText")}</span>
              <a href="/check/" className="text-accent-dark hover:underline">
                {t("contact.checkLink")}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
