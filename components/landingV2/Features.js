import React from "react";

export default function Features() {
  const featuresList = [
    {
      title: "High-Performance GPUs",
      description:
        "Offer state-of-the-art GPU hardware that provides top-tier performance for intensive computing tasks like AI training, 3D rendering, and scientific simulations.",
      image: "./gpu.png",
    },
    {
      title: "Real-Time Analytics and Monitoring",
      description:
        "Equip users with tools to monitor their usage and performance metrics in real-time, helping them optimize their applications and control costs.",
      image: "./analysis.png",
    },
    {
      title: "Scalable Resources",
      description:
        "Enable users to scale their GPU resources up/down instantly depending on their project needs, which provides flexibility & cost-effectiveness.",
      image: "./scalable.png",
    },
    {
      title: "Advanced Security Measures",
      description:
        "Implement top-notch security protocols to protect user data and operations from unauthorized access and threats.",
      image: "./security.png",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Offer a simple, intuitive interface that allows users to manage their GPU resources easily, without needing indepth technical knowledge.",
      image: "./user-friendly.png",
    },
  ];
  return (
    <div className="flex flex-col items-start justify-center px-5 sm:px-16 sm:mt-5">
      <p className="text-[22px] sm:text-[54px] py-8">Features</p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
        {featuresList.slice(0, 2)?.map((feature, index) => (
          <div key={index} className="flex flex-col items-start justify-start p-5 bg-[#F3F7F9] rounded gap-3">
            <img src={feature.image} alt={feature.title} className="w-[120px] h-[120px] mb-5" />
            <p className="w-full sm:w-[60%] text-darkPrimary text-[22px] sm:text-[32px] leading-10">
              {feature.title}
            </p>
            <p className="text-darkSecondary w-full sm:w-[80%]" style={{ lineHeight: "25px" }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="h-5" />
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
        {featuresList.slice(2, 5)?.map((feature, index) => (
          <div key={index} className="flex flex-col items-start justify-start p-5 bg-[#F3F7F9] rounded gap-3">
            <img src={feature.image} alt={feature.title} className="w-[120px] h-[120px] mb-5" />
            <p className="w-full sm:w-[80%] text-darkPrimary text-[22px] sm:text-[32px] leading-10">
              {feature.title}
            </p>
            <p className="text-darkSecondary w-full sm:w-[80%]" style={{ lineHeight: "25px" }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
