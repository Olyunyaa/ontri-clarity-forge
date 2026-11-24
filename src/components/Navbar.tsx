import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import { BOOKING_URL } from "@/lib/booking";

const navLinks = [
  { href: "#", key: "nav.home" },
  { href: "#about", key: "nav.about" },
  { href: "#services", key: "nav.services" },
  { href: "#cases", key: "nav.cases" },
  { href: "#why-us", key: "nav.whyUs" },
  { href: "#contact", key: "nav.contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-serif font-semibold text-primary-foreground">Ontrí Advisory</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm text-primary-foreground/80 font-sans tracking-wide">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary-foreground transition-colors">
              {t(l.key)}
            </a>
          ))}
          <LanguageSwitcher />
          <Button variant="hero" size="sm" className="px-4" asChild>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-cta="nav">
              {t("nav.book")}
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="lg:hidden bg-primary/98 border-t border-primary-foreground/10 animate-fade-in">
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
            <div className="mt-2 pt-6 border-t border-primary-foreground/10">
              <Button variant="hero" size="lg" className="text-base px-8 py-6 w-full sm:w-auto" asChild>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="mobile-menu"
                  onClick={() => setOpen(false)}
                >
                  {t("hero.cta")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
