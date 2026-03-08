import { Button } from "@/components/ui/button";
import heroAbstract from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0">
        <img
          src={heroAbstract}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground leading-tight mb-6 animate-fade-in">
            Stop Guessing Where AI Fits in Your Business
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 font-sans font-light leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            We audit your operations, identify high-impact opportunities, and help you implement practical AI solutions that your team will actually use.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#contact">Schedule an Intro Meeting</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
