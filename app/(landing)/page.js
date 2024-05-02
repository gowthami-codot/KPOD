"use client";
import Hero from "@/components/landingV2/Hero";
import Features from "@/components/landingV2/Features";
import DescriptionText from "@/components/landingV2/DescriptionText";
import MissionVision from "@/components/landingV2/MissionVision";
import FeatureCards from "@/components/landing/FeatureCards";
// import About from "@/components/landing/About";
import Business from "@/components/landingV2/Business";
import Experience from "@/components/landingV2/Experience";
import SignUp from "@/components/auth/SignUpModal";
import React from "react";

const page = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex flex-col w-[100vw] bg-white text-darkPrimary">
      <SignUp open={open} setOpen={setOpen} />
      <Hero setOpen={setOpen} />
      <Features />
      <DescriptionText />
      <MissionVision />
      <Business />
      <Experience setOpen={setOpen} />
      {/* <FeatureCards />
      <About />
      <Business />
      <Experience /> */}
    </div>
  );
};

export default page;
