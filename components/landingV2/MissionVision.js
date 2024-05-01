import React from "react";

export default function MissionVision() {
  const MissionVision = [
    {
      title: "Mission",
      text: "Our mission is to democratize access to advanced GPU technology, empowering users across industries to accelerate their projects, enhance productivity, and drive innovation.",
    },
    {
      title: "Vision",
      text: "Our vision is to enable each of the 1.4B+ Indian consumers, developers, entrepreneurs and enterprises by putting the power of AI in their hands.",
    },
  ];
  return (
    <div className="w-full px-5 sm:px-16 py-5 my-12">
      <div className="w-full flex-col sm:flex-row flex items-center justify-center gap-8 ">
        {MissionVision.map((item, index) => (
          <div className="w-full h-full flex flex-col items-start justify-start rounded gap-3 sm:border-r border-gray-100 sm:p-5">
            <p className="w-full sm:w-[80%] text-darkPrimary text-[22px] sm:text-[32px] leading-10">
              {item.title}
            </p>
            <p className="text-darkSecondary w-full sm:w-[80%]" style={{ lineHeight: "25px" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
