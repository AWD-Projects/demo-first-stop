"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function CTAFinal() {
  const scrollToUbicacion = () => {
    const element = document.getElementById("ubicacion");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-brick">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-cream mb-4 md:mb-6">
            Tu primera parada.
          </h2>
          <p className="font-body font-light text-base md:text-lg text-cream/80 mb-10">
            Lunes a sábado desde las 7am. Te esperamos.
          </p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <motion.button
              onClick={scrollToUbicacion}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 border-2 border-cream text-cream rounded-full font-body hover:bg-cream hover:text-brick transition-all"
            >
              Visítanos
            </motion.button>
            <Link
              href="https://instagram.com/firststop.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-body text-cream hover:text-cream/80 transition-colors text-center relative"
            >
              @firststop.mx
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cream group-hover:w-full transition-all duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
