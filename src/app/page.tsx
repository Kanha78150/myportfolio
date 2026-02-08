import GridBackground from "@/components/background/GridBackground";
import About from "@/sections/home/About";
import Experience from "@/sections/home/ExperienceSection";
import Hero from "@/sections/home/Hero";
import Project from "@/sections/home/Project";
import Services from "@/sections/home/Services";
import Contact from "@/sections/home/Contact";

const page = () => {
  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <Hero />
      <Project />
      <About />
      <Experience />
      <Services />
      <Contact />
    </div>
  );
};

export default page;
