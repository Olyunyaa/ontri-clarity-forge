const reasons = [
  {
    number: "01",
    title: "Operations-First Approach",
    description: "We start with operations, not technology. We identify where work slows down, where resources leak, and where decisions stall. Then we apply AI selectively — only where it's feasible and safe.",
  },
  {
    number: "02",
    title: "Advisory + Guided Implementation",
    description: "We work closely with your team during implementation: creating detailed plans, providing guidance, troubleshooting issues. We stay involved until new workflows are working and your team is comfortable with them. Governance is built in from day one.",
  },
  {
    number: "03",
    title: "Aligned with Your Reality",
    description: "We work with your constraints — team capacity, data readiness, and risk appetite.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-16">
            What sets us apart
          </h2>

          <div className="space-y-12">
            {reasons.map((reason) => (
              <div key={reason.number} className="flex gap-6">
                <span className="text-3xl font-serif font-light text-accent/60 shrink-0 mt-1">
                  {reason.number}
                </span>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
