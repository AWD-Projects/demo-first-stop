"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Horarios() {
  return (
    <section id="horarios" className="py-16 sm:py-20 lg:py-32" style={{ backgroundColor: "#EDE8DF" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brick mb-10 md:mb-12">
            Estamos aquí
          </h2>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <span className="font-body text-base md:text-lg text-ink">Lunes – Sábado</span>
              <span className="font-display italic text-2xl md:text-3xl text-brick">
                7:00 am – 9:00 pm
              </span>
            </div>

            <div className="w-24 h-px bg-sand mx-auto" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <span className="font-body text-base md:text-lg text-ink">Domingo</span>
              <span className="font-display italic text-2xl md:text-3xl text-brick">
                Cerrado
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
