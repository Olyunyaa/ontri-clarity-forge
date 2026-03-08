const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-accent mb-4">About Us</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8 leading-tight">
            We bring clarity — and work alongside you to implement.
          </h2>
          <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
            <p>
              We've spent years building and scaling operations — launching startups, optimizing processes, managing complex projects in private equity. We know how to execute.
            </p>
            <p>
              We founded Ontrí because we saw companies struggling: knowing AI could help, but overwhelmed by options and unclear on where to start or what would actually work for their business.
            </p>
            <p>
              We audit your workflows, identify where AI could realistically improve operations — and where it wouldn't. Then we work with your team to select practical tools, set them up, and make sure they're actually used.
            </p>
            <p className="text-foreground font-medium">
              You get practical solutions that work — not just plans, but real implementation support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
