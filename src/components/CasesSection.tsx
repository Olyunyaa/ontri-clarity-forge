import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const caseKeys = ["1", "2", "3", "4", "5"].map((n) => ({
  number: `0${n}`,
  roleKey: `cases.${n}.role`,
  painKey: `cases.${n}.pain`,
  descKey: `cases.${n}.desc`,
  resultKey: `cases.${n}.result`,
}));

const CasesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="cases" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-accent-dark mb-4">{t("cases.label")}</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-16">
              {t("cases.title")}
            </h2>
          </ScrollReveal>

          <div className="space-y-10">
            {caseKeys.map((c, i) => (
              <ScrollReveal key={c.number} delay={i * 100}>
                <div className="border border-foreground/10 rounded-sm p-8 md:p-10 bg-card">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-2xl font-serif font-light text-accent-dark/60 shrink-0">
                      {c.number}
                    </span>
                    <span className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground">
                      {t(c.roleKey)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-3 leading-snug">
                    {t(c.painKey)}
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed text-sm mb-5">
                    {t(c.descKey)}
                  </p>
                  <p className="inline-block border-l-2 border-accent-dark pl-3 text-sm font-sans font-medium text-foreground">
                    {t(c.resultKey)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
