import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-accent-dark mb-4">{t("about.label")}</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8 leading-tight">
              {t("about.title")}
            </h2>
          </ScrollReveal>
          <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
            <ScrollReveal delay={100}><p>{t("about.p1")}</p></ScrollReveal>
            <ScrollReveal delay={200}><p>{t("about.p2")}</p></ScrollReveal>
            <ScrollReveal delay={300}><p>{t("about.p3")}</p></ScrollReveal>
            <ScrollReveal delay={400}><p className="text-foreground font-medium">{t("about.p4")}</p></ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
