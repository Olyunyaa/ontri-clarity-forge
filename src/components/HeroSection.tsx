import { Button } from "@/components/ui/button";
import heroAbstract from "@/assets/hero-abstract.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroAbstract} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24">
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-serif font-semibold text-primary-foreground leading-[1.1] mb-6 animate-fade-in">
            {t("hero.title").split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 font-sans font-light leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <a href="https://calendly.com/ontri-advisory/new-meeting" target="_blank" rel="noopener noreferrer">{t("hero.cta")}</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <a href="/check/">{t("hero.ctaCheck")}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
