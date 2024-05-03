import React from "react";

export default function Business() {
  const Business = [
    {
      title: "Silicon for AI",
      text: "Leverage in-house, AI-optimised chips for unparalleled performance.",
      image: "./chip.png",
    },
    {
      title: "Generative AI Platform",
      text: "Access a curated repository of AI models hosted on scalable compute resources.",
      image: "./analysis.png",
    },
    {
      title: "Foundational Models for Everyone",
      text: "Build next-generation AI applications trained on a dataset of over 2 trillion tokens, with a strong focus on Indic languages and reflecting the Indian ethos.",
      image: "./krutrim.png",
    },
    {
      title: "AI Cloud",
      text: "High-performance GPUs that simplify complex computational tasks.",
      image: "./cloud.png",
    },
  ];
  return (
    <div className="w-full px-5 sm:px-16 py-6 sm:py-12 bg-[#F3F7F9]">
      <p className="text-[22px] sm:text-[54px] py-8">Why choose Krutrim</p>

      <div className="w-full flex-col sm:flex-row flex items-center justify-center gap-5 sm:min-h-[296px]">
        {Business.slice(0, 2)?.map((feature, index) => (
          <div key={index} className="w-full sm:first:w-[75%] h-full flex flex-col items-start justify-start p-5 bg-white rounded gap-3">
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
      <div className="w-full flex-col sm:flex-row flex items-center justify-center gap-5 min-sm:h-[296px]">
        {Business.slice(2, 4)?.map((feature, index) => (
          <div key={index} className="w-full sm:first:w-[150%] h-full flex flex-col items-start justify-start p-5 bg-white rounded gap-3">
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
