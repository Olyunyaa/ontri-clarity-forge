import { Search, Map, Wrench, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceKeys = [
  { icon: Search, titleKey: "services.1.title", descKey: "services.1.desc" },
  { icon: Map, titleKey: "services.2.title", descKey: "services.2.desc" },
  { icon: Wrench, titleKey: "services.3.title", descKey: "services.3.desc" },
  { icon: Users, titleKey: "services.4.title", descKey: "services.4.desc" },
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-accent-dark mb-4">{t("services.label")}</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              {t("services.title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviceKeys.map((service, i) => (
            <ScrollReveal key={service.titleKey} delay={i * 100}>
              <div className="group p-8 bg-background border border-border rounded-lg hover:border-accent/40 transition-colors duration-300 h-full">
                <service.icon className="w-6 h-6 text-accent-dark mb-5" strokeWidth={1.5} />
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                  {t(service.descKey)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
