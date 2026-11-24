import { Button } from "@/components/ui/button";
import heroAbstract from "@/assets/hero-abstract.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { BOOKING_URL } from "@/lib/booking";

// Цифры из утверждённых кейсов (cases.5, cases.1, cases.2), ничего нового
const proofKeys = ["1", "2", "3"];

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroAbstract} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-28 pb-16">
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-serif font-semibold text-primary-foreground leading-[1.1] mb-6 animate-fade-in">
            {t("hero.title").split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-primary-foreground/75 font-sans font-light leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <span className="font-normal text-primary-foreground/90">{t("hero.audience")}</span>{" "}
            {t("hero.subtitle")}
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-cta="hero">{t("hero.cta")}</a>
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

            <dl className="mt-12 pt-8 border-t border-primary-foreground/15 grid grid-cols-3 gap-4 sm:gap-10 max-w-3xl">
              {proofKeys.map((n) => (
                <div key={n} className="flex flex-col-reverse justify-end gap-1.5">
                  <dt className="text-xs sm:text-sm font-sans text-primary-foreground/70 leading-snug">
                    {t(`hero.proof.${n}.label`)}
                  </dt>
                  <dd className="font-serif text-xl sm:text-3xl font-semibold text-primary-foreground leading-none whitespace-nowrap lining-nums">
                    {t(`hero.proof.${n}.value`)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
