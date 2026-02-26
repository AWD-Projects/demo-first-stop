"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["menu", "nosotros", "horarios", "ubicacion"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "menu", label: "Menú" },
    { id: "nosotros", label: "Nosotros" },
    { id: "horarios", label: "Horarios" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-cream border-b transition-all duration-300 ${
        scrolled ? "border-sand/30 shadow-sm" : "border-sand/20"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-logo text-xl sm:text-2xl font-black uppercase tracking-tight text-brick transition-transform hover:scale-105 duration-200"
          >
            First Stop<sup className="text-xs ml-0.5">®</sup>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative font-body text-sm text-ink hover:text-brick transition-colors duration-200 group"
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-brick transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
            <motion.button
              onClick={() => scrollToSection("ubicacion")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-brick text-cream rounded-full font-body text-sm hover:bg-burgundy transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Visítanos
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => scrollToSection("ubicacion")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden px-4 py-2 bg-brick text-cream rounded-full font-body text-sm hover:bg-burgundy transition-colors duration-200"
          >
            Visítanos
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
