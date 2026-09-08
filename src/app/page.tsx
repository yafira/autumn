import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HotelCarousel from "@/components/HotelCarousel";
import Problem from "@/components/Problem";
import Sem from "@/components/Sem";
import Proof from "@/components/Proof";
import Services from "@/components/Services";
import Flagship from "@/components/Flagship";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import IndexCounter from "@/components/IndexCounter";

export default function Home() {
  return (
    <>
      <IndexCounter />
      <Header />
      <main>
        <Hero />
        <HotelCarousel />
        <Problem />
        <Sem />
        <Proof />
        <Services />
        <Flagship />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
