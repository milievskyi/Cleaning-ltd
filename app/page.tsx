import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CoverageArea from "@/components/sections/CoverageArea";
import ContactCTA from "@/components/sections/ContactCTA";
import FloatingCTA from "@/components/ui/FloatingCTA";
import BookingBar from "@/components/ui/BookingBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Pricing />
        <Testimonials />
        <CoverageArea />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingCTA />
      <BookingBar />
    </>
  );
}
