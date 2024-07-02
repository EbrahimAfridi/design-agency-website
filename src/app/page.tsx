import NavbarUI from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Portfolios from "@/components/Portfolios";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fcfcfc] selection:text-white selection:bg-black w-[100vw]">
      <NavbarUI />
      <Hero />
      <TrustedBy />
      <Portfolios />
      <Services />
      <Testimonial />
      <ContactForm />
      <CallToAction />
      <Footer />
    </main>
  );
}
