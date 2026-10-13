import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import Hero from "@/components/sections/Hero";
import ClosingCta from "@/components/sections/ClosingCta";
import Heritage from "@/components/sections/Heritage";
import Testimonials from "@/components/sections/Testimonials";
import WhatsIncluded from "@/components/sections/WhatsIncluded";
import HuntsOverview from "@/components/sections/HuntsOverview";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HuntsOverview />
        <Heritage />
        <WhatsIncluded />
        <Testimonials />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
