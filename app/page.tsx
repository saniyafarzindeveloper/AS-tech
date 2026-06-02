import AboutSection from "@/components/landing-page/AboutSection";
import ContactForm from "@/components/landing-page/ContactForm";
import FoundersSection from "@/components/landing-page/FoundersSection";
import Hero from "@/components/landing-page/Hero";
import ListOfServices from "@/components/landing-page/ListOfServices";
import Services from "@/components/landing-page/Services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutSection />
      <ListOfServices />
      <Services />
      <FoundersSection />
      <ContactForm />
    </div>
  );
}
