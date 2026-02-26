"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

const CoffeeIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    className="text-sand mx-auto mb-4"
  >
    <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1" />
    <path d="M12 20h16M20 12v16" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const FoodIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    className="text-sand mx-auto mb-4"
  >
    <rect x="12" y="15" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1" />
    <path d="M16 15v-3M24 15v-3" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const MatchaIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    className="text-sand mx-auto mb-4"
  >
    <path
      d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8v8h-16v-8z"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path d="M15 28h10" stroke="currentColor" strokeWidth="1" />
    <path d="M20 12v-4" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export default function Oferta() {
  return (
    <section id="menu" className="py-16 sm:py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          {...fadeUp}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-brick text-center mb-12 md:mb-16"
        >
          Lo que encuentras aquí
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="text-center p-6 rounded-xl hover:bg-sand/10 transition-colors duration-300 group cursor-default"
          >
            <CoffeeIcon />
            <h3 className="font-display text-xl text-ink mb-3">
              Café & Métodos
            </h3>
            <div className="w-12 h-px bg-sand mx-auto mb-3" />
            <p className="font-body font-light text-sm text-ink/70 leading-relaxed mb-2">
              Espresso, Americano, Latte, Cappuccino
            </p>
            <p className="font-body font-light text-sm text-ink/70 leading-relaxed">
              Cold Brew, Chemex, V60, Prensa Francesa
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="text-center p-6 rounded-xl hover:bg-sand/10 transition-colors duration-300 group cursor-default"
          >
            <MatchaIcon />
            <h3 className="font-display text-xl text-ink mb-3">
              Matcha & Wellness
            </h3>
            <div className="w-12 h-px bg-sand mx-auto mb-3" />
            <p className="font-body font-light text-sm text-ink/70 leading-relaxed mb-2">
              Matcha ceremonial, Hojicha, Chai
            </p>
            <p className="font-body font-light text-sm text-ink/70 leading-relaxed">
              Smoothies, Golden Milk, Chocolate
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="text-center p-6 rounded-xl hover:bg-sand/10 transition-colors duration-300 group cursor-default"
          >
            <FoodIcon />
            <h3 className="font-display text-xl text-ink mb-3">First Inn</h3>
            <div className="w-12 h-px bg-sand mx-auto mb-3" />
            <p className="font-body font-light text-sm text-ink/70 leading-relaxed mb-2">
              Parfait de chia, Overnight Oats
            </p>
            <p className="font-body font-light text-sm text-ink/70 leading-relaxed">
              Croissants, Gelatina Matcha, Hummus
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="text-center p-6 rounded-xl hover:bg-sand/10 transition-colors duration-300 group cursor-default"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              className="text-sand mx-auto mb-4"
            >
              <rect x="10" y="12" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1" />
              <path d="M15 12v-2M25 12v-2M10 18h20" stroke="currentColor" strokeWidth="1" />
            </svg>
            <h3 className="font-display text-xl text-ink mb-3">The Hunger Stop</h3>
            <div className="w-12 h-px bg-sand mx-auto mb-3" />
            <p className="font-body font-light text-sm text-ink/70 leading-relaxed mb-2">
              Chilaquiles, Huevos ahogados
            </p>
            <p className="font-body font-light text-sm text-ink/70 leading-relaxed">
              Toasts, Fluffy Pancakes, Sándwiches
            </p>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/firststop.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block font-body text-brick hover:text-burgundy transition-colors relative"
          >
            Ver menú completo en Instagram
            <motion.span
              className="inline-block ml-1"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brick group-hover:w-full transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
