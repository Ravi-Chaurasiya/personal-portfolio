
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-bold text-black"
        >
          Ravi Chaurasiya
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["home", "about", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-base font-medium text-foreground hover:text-lavender-500 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {[1, 2, 3].map((bar) => (
            <span
              key={bar}
              className={cn(
                "block h-0.5 rounded-full bg-foreground transition-all duration-300 w-6",
                mobileMenuOpen && bar === 1 && "rotate-45 translate-y-2",
                mobileMenuOpen && bar === 2 && "opacity-0",
                mobileMenuOpen && bar === 3 && "-rotate-45 -translate-y-2"
              )}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[calc(4rem)] bg-white z-40 shadow-md transition-all duration-300 md:hidden",
          mobileMenuOpen ? "max-h-64" : "max-h-0 invisible"
        )}
      >
        <div className="flex flex-col py-4 px-8 space-y-4">
          {["home", "about", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-base font-medium text-foreground hover:text-lavender-500 p-2 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
