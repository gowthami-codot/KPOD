import Hero from "@/components/landingV2/Hero";
import Features from "@/components/landingV2/Features";
import DescriptionText from "@/components/landingV2/DescriptionText";
import MissionVision from "@/components/landingV2/MissionVision";
import FeatureCards from "@/components/landing/FeatureCards";
// import About from "@/components/landing/About";
import Business from "@/components/landingV2/Business";
import Experience from "@/components/landingV2/Experience";
import SignUp from "@/components/auth/SignUpModal";

const page = () => {
  return (
    <div className="flex flex-col w-[100vw] bg-white text-darkPrimary">
      <Hero />
      <Features />
      <DescriptionText />
      <MissionVision />
      <Business />
      <Experience />
      {/* <FeatureCards />
      <About />
      <Business />
      <Experience /> */}
    </div>
  );
};

export default page;
