"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function SobreNosotros() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-32 bg-cream">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
          <motion.div {...fadeUp} className="lg:col-span-3">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brick mb-6 md:mb-8">
              Sobre First Stop.
            </h2>
            <div className="space-y-4 font-body font-light text-base md:text-lg text-ink/80 leading-relaxed">
              <p>
                Empezamos porque creíamos que Zapopan necesitaba un lugar donde el
                café fuera más que una bebida rápida camino al trabajo. Un espacio
                que respetara el producto y el momento.
              </p>
              <p>
                No somos una cadena. Somos un café de barrio con identidad propia,
                donde cada detalle importa pero sin pretensiones innecesarias.
              </p>
              <p>
                Aquí puedes venir con tu perro, trabajar en tu laptop o simplemente
                tomarte un respiro antes de que empiece el día. Eso es First Stop.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-[3/4] bg-sand/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  className="w-full h-full text-sand/40"
                >
                  {/* Coffee bean illustration */}
                  <ellipse
                    cx="100"
                    cy="100"
                    rx="60"
                    ry="80"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M100 40 Q 120 100 100 160 Q 80 100 100 40"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
