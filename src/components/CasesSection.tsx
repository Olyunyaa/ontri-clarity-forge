import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import caseMapOverview from "@/assets/case-map-overview.jpg";
import caseMapCity from "@/assets/case-map-city.jpg";

const featured = [
  { n: "1", phases: false, images: false },
  { n: "2", phases: true, images: false },
  { n: "3", phases: false, images: false },
  { n: "4", phases: false, images: true },
];

const mapImages = [
  { src: caseMapOverview, alt: "Interactive 3D project map of the Netherlands" },
  { src: caseMapCity, alt: "Street-level city view with project locations" },
];

const CasesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="cases" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-accent-dark mb-4">{t("cases.label")}</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              {t("cases.title")}
            </h2>
            <p className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground mb-10">
              {t("cases.featured")}
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featured.map((c, i) => (
              <ScrollReveal key={c.n} delay={i * 100} className="h-full">
                <div className="h-full flex flex-col border border-foreground/10 rounded-sm p-7 md:p-8 bg-card">
                  <p className="text-xs font-sans font-semibold tracking-[0.15em] uppercase text-accent-dark mb-2">
                    {t(`cases.${c.n}.name`)}
                  </p>
                  <p className="text-xs font-sans tracking-[0.1em] uppercase text-muted-foreground mb-4">
                    {t(`cases.${c.n}.role`)}
                  </p>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-3 leading-snug">
                    {t(`cases.${c.n}.pain`)}
                  </h3>
                  {c.phases ? (
                    <div className="space-y-4 mb-5">
                      <div>
                        <p className="text-xs font-sans font-semibold tracking-[0.08em] uppercase text-foreground/70 mb-1">
                          {t(`cases.${c.n}.p1label`)}
                        </p>
                        <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                          {t(`cases.${c.n}.p1`)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-sans font-semibold tracking-[0.08em] uppercase text-foreground/70 mb-1">
                          {t(`cases.${c.n}.p2label`)}
                        </p>
                        <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                          {t(`cases.${c.n}.p2`)}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted-foreground font-sans leading-relaxed text-sm mb-5">
                      {t(`cases.${c.n}.desc`)}
                    </p>
                  )}
                  {c.images && (
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {mapImages.map((img) => (
                        <img
                          key={img.src}
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="w-full rounded-sm border border-foreground/10"
                        />
                      ))}
                    </div>
                  )}
                  <p className="mt-auto border-l-2 border-accent-dark pl-3 text-sm font-sans font-medium text-foreground">
                    {t(`cases.${c.n}.result`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-sm font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground mb-6">
              {t("more.title")}
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {["1", "2", "3"].map((n, i) => (
              <ScrollReveal key={n} delay={i * 100} className="h-full">
                <div className="h-full border border-foreground/10 rounded-sm p-6 bg-card">
                  <p className="text-sm font-sans font-semibold text-foreground mb-2">
                    {t(`more.${n}.title`)}
                  </p>
                  <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                    {t(`more.${n}.desc`)}
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
