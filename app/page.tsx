import AboutSection from "@/components/landing-page/AboutSection";
import ContactForm from "@/components/landing-page/ContactForm";
import FeaturedProject from "@/components/landing-page/FeaturedProjects";
import FoundersSection from "@/components/landing-page/FoundersSection";
import Hero from "@/components/landing-page/Hero";
import ListOfServices from "@/components/landing-page/ListOfServices";
import Services from "@/components/landing-page/Services";


const projects = [
  {
    id: 1,
    title: "Interior Design Studio Website",
    category: "Interior Design",

    description:
      "Designed and developed a premium digital experience for an interior design studio focused on luxury residential and commercial spaces.",

    images: [
      "/suvidha1.png",
      "/suvidha1.png",
      "/suvidha1.png",
    ],

    liveUrl: "https://...",
    caseStudyUrl: "/projects/interior-design",

    services: [
      "UI/UX Design",
      "Development",
      "SEO",
    ],

    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
];

export default function Home() {
  return (
    
    <div className="">
      <Hero />
      <AboutSection />
      <ListOfServices />
      <Services />
      <FeaturedProject projects={projects} />
      <FoundersSection />
      <ContactForm />
    </div>
  );
}
