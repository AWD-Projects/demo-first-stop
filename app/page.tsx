import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Oferta from "@/components/Oferta";
import SobreNosotros from "@/components/SobreNosotros";
import Horarios from "@/components/Horarios";
import Ubicacion from "@/components/Ubicacion";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Oferta />
        <SobreNosotros />
        <Horarios />
        <Ubicacion />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
