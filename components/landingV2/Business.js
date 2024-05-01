import React from "react";

export default function Business() {
  const Business = [
    {
      title: "Silicon for AI",
      text: "In house development and manufacturing of chips optimised for AI compute",
      image: "./chip.png",
    },
    {
      title: "Generative AI Platform",
      text: "APIs to build apps, hosted inferencing capability in the Krutrim cloud",
      image: "./analysis.png",
    },
    {
      title: "Foundational Models for Everyone",
      text: "For enterprises, researchers, and developers to build Generative AI applications",
      image: "./krutrim.png",
    },
    {
      title: "AI Cloud",
      text: "Managed access to model repository and AI compute at scale",
      image: "./cloud.png",
    },
  ];
  return (
    <div className="w-full px-5 sm:px-16 py-12 bg-[#F3F7F9]">
      <p className="text-[22px] sm:text-[54px] py-8">Krutrim for Business</p>

      <div className="w-full flex-col sm:flex-row flex items-center justify-center gap-5 sm:h-[296px]">
        {Business.slice(0, 2)?.map((feature, index) => (
          <div className="w-full sm:first:w-[75%] h-full flex flex-col items-start justify-start p-5 bg-white rounded gap-3">
            <img src={feature.image} alt={feature.title} className="w-[120px] h-[120px] mb-5" />
            <p className="w-full sm:w-[60%] text-darkPrimary text-[22px] sm:text-[32px] leading-10">
              {feature.title}
            </p>
            <p className="text-darkSecondary w-full sm:w-[68%]" style={{ lineHeight: "25px" }}>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
      <div className="h-5" />
      <div className="w-full flex-col sm:flex-row flex items-center justify-center gap-5 sm:h-[296px]">
        {Business.slice(2, 4)?.map((feature, index) => (
          <div className="w-full sm:first:w-[150%] h-full flex flex-col items-start justify-start p-5 bg-white rounded gap-3">
            <img src={feature.image} alt={feature.title} className="w-[120px] h-[120px] mb-5" />
            <p className="w-full sm:w-[90%] text-darkPrimary text-[22px] sm:text-[32px] leading-10">
              {feature.title}
            </p>
            <p className="text-darkSecondary w-full sm:w-[80%]" style={{ lineHeight: "25px" }}>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
