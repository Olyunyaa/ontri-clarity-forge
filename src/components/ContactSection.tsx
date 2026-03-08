import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 leading-tight">
              Let's discuss how Ontrí Advisory can accelerate your intelligent transformation.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
                <a href="https://calendly.com/ontri-advisory/new-meeting" target="_blank" rel="noopener noreferrer">
                  Schedule an Intro Meeting
                </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-primary-foreground/60 text-sm font-sans">
              <Mail className="w-4 h-4" />
              <span>Prefer email?</span>
              <a href="mailto:hello@ontri-advisory.com" className="text-accent hover:underline">
                hello@ontri-advisory.com
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
