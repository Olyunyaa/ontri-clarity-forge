import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Ontrí Advisory" className="h-8" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/80 font-sans tracking-wide">
          <a href="#about" className="hover:text-primary-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-primary-foreground transition-colors">Services</a>
          <a href="#why-us" className="hover:text-primary-foreground transition-colors">Why Us</a>
          <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
