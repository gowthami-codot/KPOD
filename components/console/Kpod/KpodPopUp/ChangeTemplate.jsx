import { useState } from "react";

import Image from "next/image";

const ChangeTemplate = ({ onClose }) => {
  const [input, setInput] = useState("");
  const inputField = (e) => {
    setInput(e.target.value);
  };

  const Pods = [
    {
      src: "/pyTorch.png",
      title: "KPod Pytorch 2..1",
      subTitle: "kpod/pytorch2.1.0-py3.10-cuda11.8.0-devel-ubuntu2...",
    },
    {
      src: "/pyTorch.png",
      title: "KPod Pytorch 2..1",
      subTitle: "kpod/pytorch2.1.0-py3.10-cuda11.8.0-devel-ubuntu2...",
    },
    {
      src: "/pyTorch.png",
      title: "KPod Pytorch 2..1",
      subTitle: "kpod/pytorch2.1.0-py3.10-cuda11.8.0-devel-ubuntu2...",
    },
    {
      title: "KPod Desktop",
      subTitle: "kpod/kasm-docker:cuda11",
    },
    {
      title: "KPod Desktop",
      subTitle: "kpod/kasm-docker:cuda11",
    },
  ];

  return (
    <>
      <div className="fixed inset-0 flex lg:items-start items-center justify-center bg-[#00000080]">
        <div className="bg-[#F3F7F9] shadow-md  my-auto text-[#000000] h-fit   md:w-[64%] w-[90%] mt-10  max-h-full overflow-y-auto   p-5 ">
          <div className="flex items-end justify-end mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#000"
              viewBox="0 0 16 16"
              className="cursor-pointer"
              onClick={onClose}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>
          <div className="text-[#1D1D1D] text-[24px] font-semibold lg:mx-10 mx-3">
            Templates
          </div>
          <div className="lg:mt-8 mt-4 lg:mx-10 mx-3 lg:mr-20">
            <div>
              <input
                value={input}
                onChange={inputField}
                placeholder="Find something to deploy......."
                className="mt-0 text-black text-[14px]  rounded-[4px]  md:px-7 px-3 focus:outline-none focus-visible:outline-none w-full bg-[#fff] py-4"
              />
            </div>
          </div>
          <div className="lg:mx-10 mx-3 mt-6 text-[16px] font-semibold">
            Your Pod Templates
          </div>
          <div className="lg:mx-10 mx-3 md:mt-6 mt-3 text-[16px] font-black">
            Official
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 mt-4 lg:mb-7 mb-20 lg:mx-10 mx-3 md:gap-8 gap-2">
            {Pods.map((pod, index) => (
              <div key={index}>
                <div className="bg-[#fff] md:py-6 md:pl-6 pl-2 py-2 w-full h-full rounded-[6px] border-l-[#70E134] border-l-4">
                  <div className="flex space-x-4 items-center justify-start">
                    {index < 3 && (
                      <Image
                        src={pod.src}
                        alt=""
                        width={50}
                        height={50}
                        className="md:w-[7vh] md:h-[7vh] w-[3vh] h-[3vh]"
                      />
                    )}
                    <div
                      className={`flex flex-col  ${
                        index > 2 ? "md:ml-20 ml-10 md:py-2" : "ml-0"
                      }`}
                    >
                      <div className="text-[#000000] md:text-[16px] text-[12px]">
                        {pod.title}
                      </div>
                      <div className="text-[#8B8B8B] md:text-[11px] text-[8px] ">
                        {pod.subTitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeTemplate;
