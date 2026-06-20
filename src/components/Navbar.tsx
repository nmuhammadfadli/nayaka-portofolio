import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
  onServicesClick: () => void;
  onPortfolioClick: () => void;
  onProcessClick: () => void;
  onFaqClick: () => void;
}

export default function Navbar({
  onContactClick,
  onServicesClick,
  onPortfolioClick,
  onProcessClick,
  onFaqClick,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Layanan", action: onServicesClick },
    { label: "Portfolio", action: onPortfolioClick },
    { label: "Cara Kerja", action: onProcessClick },
    { label: "FAQ", action: onFaqClick },
  ];

  return (
 <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-slate-950/20"
      : "bg-transparent py-4"
  }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
   <div
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="relative shrink-0 w-[220px] h-14 md:h-16 cursor-pointer group overflow-visible"
  aria-label="Nayaka Labs Home"
>
  <img
    src="/portofolio/logo_nayakalabs_bgputih2.png"
    alt="Nayaka Labs"
   className="absolute left-0 top-1/2 -translate-y-1/2 h-24 md:h-28 lg:h-32 w-auto max-w-none object-contain"
  />
</div>
         

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                className="font-sans font-medium text-sm text-slate-400 hover:text-sky-400 cursor-pointer transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onContactClick}
              className="group flex items-center gap-2 font-display font-bold text-xs uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-slate-950 px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-sky-500/10 cursor-pointer"
            >
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-900 border border-slate-800 text-slate-300 transition"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl p-6 transition-all animate-in fade-in-50 slide-in-from-top-6 duration-200">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setMobileMenuOpen(false);
                  item.action();
                }}
                className="text-left font-sans font-semibold text-base py-2.5 text-slate-200 hover:text-sky-400 transition-colors border-b border-slate-800/50 last:border-b-0"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="mt-4 w-full justify-center group flex items-center gap-2 font-display font-bold text-xs uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-slate-950 px-5 py-3 rounded-full transition-all shadow-md"
            >
              Hubungi Kami
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}