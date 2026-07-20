import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const stepKeys = [
  { number: "01", titleKey: "how.1.title", descKey: "how.1.desc" },
  { number: "02", titleKey: "how.2.title", descKey: "how.2.desc", linkKey: "how.2.link", href: "/audit/" },
  { number: "03", titleKey: "how.3.title", descKey: "how.3.desc" },
];

const HowItWorksSection = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-accent-dark mb-4">{t("how.label")}</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-16">
              {t("how.title")}
            </h2>
          </ScrollReveal>

          <div className="space-y-12">
            {stepKeys.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 150}>
                <div className="flex gap-6">
                  <span className="text-3xl font-serif font-light text-accent-dark/60 shrink-0 mt-1">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                      {t(step.descKey)}
                    </p>
                    {step.linkKey && (
                      <a
                        href={step.href}
                        className="inline-flex items-center gap-1 mt-3 text-sm font-sans font-medium text-accent-dark hover:underline"
                      >
                        {t(step.linkKey)}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
