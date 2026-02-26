import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "First Stop® — Café de Especialidad en Zapopan",
  description: "Café de especialidad, desayunos y matcha ceremonial. Lunes a sábado desde las 7am. Av. Universidad 325, Zapopan, Jalisco.",
  keywords: [
    "café de especialidad",
    "café Zapopan",
    "matcha ceremonial",
    "desayunos Zapopan",
    "First Stop",
    "coffee shop Guadalajara",
    "specialty coffee",
    "cold brew",
    "smoothies Zapopan",
  ],
  authors: [{ name: "First Stop" }],
  creator: "First Stop",
  publisher: "First Stop",
  metadataBase: new URL("https://firststop.mx"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://firststop.mx",
    title: "First Stop® — Café de Especialidad en Zapopan",
    description: "Café de especialidad, desayunos y matcha ceremonial. Lunes a sábado desde las 7am.",
    siteName: "First Stop",
  },
  twitter: {
    card: "summary_large_image",
    title: "First Stop® — Café de Especialidad en Zapopan",
    description: "Café de especialidad, desayunos y matcha ceremonial. Lunes a sábado desde las 7am.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSerif.variable} ${dmSans.variable} ${bebasNeue.variable}`}>
      <body>{children}</body>
    </html>
  );
}
