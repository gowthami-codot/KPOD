import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import FeatureCards from "@/components/landing/FeatureCards";
import About from "@/components/landing/About";
import Business from "@/components/landing/Business";
import Experience from "@/components/landing/Experience";

const page = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <FeatureCards />
      <About />
      <Business />
      <Experience />
    </div>
  );
};

export default page;
