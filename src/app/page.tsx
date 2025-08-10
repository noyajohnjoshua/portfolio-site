import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsInAction from "@/components/SkillsInAction";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <SkillsInAction />
      <Timeline />
      <Testimonials />
      <Footer />
    </div>
  );
}
