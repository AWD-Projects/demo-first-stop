"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const scrollToUbicacion = () => {
    const element = document.getElementById("ubicacion");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-cream min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            {...fadeUp}
            className="font-display text-[clamp(3.25rem,8vw,5.5rem)] leading-[1.1] text-ink mb-6"
          >
            Tu{" "}
            <span className="text-brick italic">primera</span>{" "}
            parada del día.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="font-body font-light text-lg md:text-xl text-ink/70 mb-12"
          >
            Café de especialidad, desayunos y matcha ceremonial. Zapopan.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <motion.button
              onClick={scrollToUbicacion}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-brick text-cream rounded-full font-body hover:bg-burgundy transition-colors shadow-sm hover:shadow-md"
            >
              Visítanos
            </motion.button>
            <Link
              href="https://instagram.com/firststop.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-body text-ink hover:text-brick transition-colors text-center relative"
            >
              Ver menú en Instagram
              <motion.span
                className="inline-block ml-1"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-sand"
          >
            <span className="text-xs font-body">Scroll</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 4L10 16M10 16L6 12M10 16L14 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Decorative SVG element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          style={{ y, opacity }}
          className="absolute bottom-12 right-12 hidden lg:block"
        >
          <svg
            width="180"
            height="200"
            viewBox="0 0 180 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-sand"
          >
            {/* Stylized coffee cup */}
            <path
              d="M60 80C60 80 65 60 90 60C115 60 120 80 120 80V140C120 155 110 165 90 165C70 165 60 155 60 140V80Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M120 95H135C142 95 147 100 147 107V113C147 120 142 125 135 125H120"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Steam lines */}
            <path
              d="M75 50C75 50 72 35 75 28"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M90 45C90 45 87 30 90 23"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M105 50C105 50 102 35 105 28"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Saucer */}
            <ellipse
              cx="90"
              cy="165"
              rx="45"
              ry="8"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
