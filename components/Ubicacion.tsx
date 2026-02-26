"use client";

import { motion } from "framer-motion";
import { MapPinIcon } from "@heroicons/react/24/outline";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="py-16 sm:py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brick mb-4 md:mb-6">
              Nos encuentras en
            </h2>
            <div className="flex items-center justify-center gap-2 text-base md:text-lg font-body text-ink flex-wrap">
              <MapPinIcon className="w-5 h-5 text-brick flex-shrink-0" />
              <p className="text-center">Av. Universidad 325, Zapopan 45116, Jalisco</p>
            </div>
          </div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.5!2d-103.39!3d20.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQzJzU0LjgiTiAxMDPCsDIzJzI0LjAiVw!5e0!3m2!1ses!2smx!4v1234567890!5m2!1ses!2smx&q=Av.+Universidad+325,+Zapopan"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="First Stop Location"
            />
            <noscript>
              <div className="w-full h-full bg-cream border-2 border-sand flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="w-12 h-12 text-sand mx-auto mb-4" />
                  <p className="font-body text-ink">Ver en Google Maps</p>
                </div>
              </div>
            </noscript>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="text-center mt-8"
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=First+Stop+Av+Universidad+325+Zapopan"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block font-body text-brick hover:text-burgundy transition-colors relative"
            >
              Abrir en Google Maps
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
        </motion.div>
      </div>
    </section>
  );
}
