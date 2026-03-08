import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

const navLinks = [
  { href: "#", key: "nav.home" },
  { href: "#about", key: "nav.about" },
  { href: "#services", key: "nav.services" },
  { href: "#why-us", key: "nav.whyUs" },
  { href: "#contact", key: "nav.contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Ontrí Advisory" className="h-12" />
          <span className="hidden md:block text-lg font-serif font-semibold text-primary-foreground">Ontrí Advisory</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/80 font-sans tracking-wide">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary-foreground transition-colors">
              {t(l.key)}
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary/98 border-t border-primary-foreground/10 animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-5 text-sm text-primary-foreground/80 font-sans tracking-wide">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover:text-primary-foreground transition-colors"
              >
                {t(l.key)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
