import { Search, Map, Wrench, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Search,
    title: "Audit of the Processes",
    description: "We uncover where work slows down, breaks, or gets duplicated — and redesign your core workflows so execution becomes predictable, fast, and scalable.",
  },
  {
    icon: Map,
    title: "AI Strategy → Roadmapping",
    description: "We turn 'we should do AI' into a prioritized roadmap tied to business KPIs: what to do first, what to skip, and how to execute effectively.",
  },
  {
    icon: Wrench,
    title: "AI Tools and Solutions",
    description: "We help you select and implement proven AI solutions that fit your workflows. We set them up, create usage frameworks and documentation, and train your team to integrate AI into their daily work.",
  },
  {
    icon: Users,
    title: "Adoption & Change Management",
    description: "We make adoption happen: clear rollout plan, training, playbooks, and accountability — so new ways of working actually stick.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              From audit to adoption
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <div className="group p-8 bg-background border border-border rounded-lg hover:border-accent/40 transition-colors duration-300 h-full">
                <service.icon className="w-6 h-6 text-accent mb-5" strokeWidth={1.5} />
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                  {service.description}
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
