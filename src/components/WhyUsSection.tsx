import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const reasonKeys = [
  { number: "01", titleKey: "whyUs.1.title", descKey: "whyUs.1.desc" },
  { number: "02", titleKey: "whyUs.2.title", descKey: "whyUs.2.desc" },
  { number: "03", titleKey: "whyUs.3.title", descKey: "whyUs.3.desc" },
];

const WhyUsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-accent-dark mb-4">{t("whyUs.label")}</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-16">
              {t("whyUs.title")}
            </h2>
          </ScrollReveal>

          <div className="space-y-12">
            {reasonKeys.map((reason, i) => (
              <ScrollReveal key={reason.number} delay={i * 150}>
                <div className="flex gap-6">
                  <span className="text-3xl font-serif font-light text-accent-dark/60 shrink-0 mt-1">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                      {t(reason.titleKey)}
                    </h3>
                    <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                      {t(reason.descKey)}
                    </p>
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

export default WhyUsSection;
