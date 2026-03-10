import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import olgaPhoto from "@/assets/olga-perova.png";
import { Target, Users, Lightbulb, Sparkles } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-accent-dark mb-4">
            {t("about.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-14 leading-tight max-w-2xl">
            {t("about.title")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
          {/* Left column: Photo + name + pull quote */}
          <div className="lg:col-span-1">
            <ScrollReveal>
              <div className="sticky top-32">
                <div className="overflow-hidden rounded-sm mb-5 aspect-[3/4] max-w-full">
                  <img
                    src={olgaPhoto}
                    alt="Olga Perova, Founder, Ontrí Advisory"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <p className="font-serif text-lg text-foreground font-medium">Olga Perova</p>
                <p className="text-sm text-muted-foreground font-sans mb-6">Founder, Ontrí Advisory</p>
                <blockquote className="border-l-4 border-accent-dark pl-5 py-3">
                  <p className="text-xl font-serif font-semibold text-foreground italic leading-snug">
                    {t("about.quote")}
                  </p>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column: Structured content */}
          <div className="lg:col-span-2 space-y-8">
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

            <ScrollReveal delay={200}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-accent flex items-center justify-center mt-1">
                  <Lightbulb className="w-5 h-5 text-accent-foreground" />
                </div>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {t("about.p3")}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-accent flex items-center justify-center mt-1">
                  <Sparkles className="w-5 h-5 text-accent-foreground" />
                </div>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  {t("about.p4")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
