import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import olgaPhoto from "@/assets/olga-perova.png";
import { Target, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-accent-dark mb-4">
            {t("about.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-16 leading-tight max-w-2xl">
            {t("about.title")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column: Photo + name */}
          <div className="lg:col-span-4">
            <ScrollReveal>
              <div className="sticky top-32">
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-5">
                  <img
                    src={olgaPhoto}
                    alt="Olga Perova, Founder, Ontrí Advisory"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="font-serif text-lg text-foreground font-medium">Olga Perova</p>
                <p className="text-sm text-muted-foreground font-sans">Founder, Ontrí Advisory</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column: Structured content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Block 1: Operations experience */}
            <ScrollReveal>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-accent flex items-center justify-center mt-1">
                  <Users className="w-5 h-5 text-accent-foreground" />
                </div>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {t("about.p1")}
                </p>
              </div>
            </ScrollReveal>

            {/* Block 2: Goals & numbers */}
            <ScrollReveal delay={100}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-accent flex items-center justify-center mt-1">
                  <Target className="w-5 h-5 text-accent-foreground" />
                </div>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {t("about.p2")}
                </p>
              </div>
            </ScrollReveal>

            {/* Block 3: Making it stick */}
            <ScrollReveal delay={200}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-accent flex items-center justify-center mt-1">
                  <Lightbulb className="w-5 h-5 text-accent-foreground" />
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {t("about.p3")}
                  </p>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {t("about.p4")}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Pull quote */}
            <ScrollReveal delay={300}>
              <blockquote className="border-l-4 border-accent-dark pl-6 py-4 mt-4">
                <p className="text-2xl md:text-3xl font-serif font-semibold text-foreground italic leading-snug">
                  {t("about.quote")}
                </p>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
