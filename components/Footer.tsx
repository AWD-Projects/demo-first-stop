import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-ink py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-6">
          <Link
            href="/"
            className="font-logo text-xl sm:text-2xl font-black uppercase tracking-tight text-cream inline-block transition-transform hover:scale-105 duration-200"
          >
            First Stop<sup className="text-xs ml-0.5">®</sup>
          </Link>

          <div className="font-body font-light text-sm md:text-base text-sand space-y-2">
            <p className="transition-colors hover:text-cream duration-200">
              Av. Universidad 325, Zapopan 45116, Jalisco
            </p>
            <p className="transition-colors hover:text-cream duration-200">
              Lunes – Sábado: 7:00 am – 9:00 pm
            </p>
          </div>

          <div>
            <Link
              href="https://instagram.com/firststop.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-body text-sand hover:text-cream transition-colors inline-block relative"
            >
              @firststop.mx
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cream group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          <div className="pt-6 border-t border-sand/20 space-y-2">
            <p className="font-body text-sm text-sand/60">
              © 2025 First Stop.
            </p>
            <p className="font-body text-xs text-sand/50">
              Powered by{" "}
              <Link
                href="https://www.amoxtli.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block relative text-sand/60 hover:text-sand transition-colors"
              >
                Amoxtli<sup className="text-[0.6rem] ml-0.5">®</sup>
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sand/60 group-hover:w-full transition-all duration-300" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
