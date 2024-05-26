"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ShowPannel from "../Kpod/DeploySpot/ShowPannel";

const DepolySpot = () => {
  const router = useRouter();
  const [showPannel, setShowPannel] = useState(false);

  const handlePannelClick = () => {
    setShowPannel(!showPannel);
  };

  return (
    <div className="bg-white min-h-screen relative">
      <div>
        <div className="text-[#000000] font-black text-[32px] md:mt-10 md:mx-10 mt-20 mx-4 flex items-center">
          KRUTRIM
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1EC2BF] to-[#53B71E] text-[20px] border-[2px] font-medium border-[#53B71E] rounded-[8px] px-4 ml-2 tracking-wide">
            Beta
          </span>
        </div>
        <div className="border-b-[3px] border-[#181E220F] mt-5 border-opacity-15"></div>

        <div className="font-medium text-[#41515C] text-[22px] mx-10 mt-4 relative ">
          KPods
        
          <div className="bg-[#F3F7F9] border-[#181E220F] border-[2px] mb-20  rounded-[4px] mt-5 relative">
            <div className="cursor-pointer" onClick={() => {
              router.push(`/console/KPOD?section=GpuPod`);
            }}>
              <span className="absolute right-0 md:top-0 cursor-pointer flex mr-6 items-center text-[14px] mt-3 bg-[#010101] px-6 py-2 lg:mr-12 rounded-[5px] text-[#FFFFFF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-3"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a1 1 0 0 1 1 1v8h8a1 1 0 1 1 0 2h-8v8a1 1 0 1 1-2 0v-8H1a1 1 0 1 1 0-2h8V1a1 1 0 0 1 1-1z"
                  />
                </svg>
                Deploy
              </span>
            </div>
            <div className={`bg-[#FFFFFF] md:mx-10 mx-5 lg:mt-24 mt-16 pt-5  rounded-t-[4px] ${
                            showPannel ? "mb-0 pb-0" : "mb-10 pb-5"
                          }`}>
              <div className="mx-5 flex lg:flex-row flex-col  ">
                {" "}
                <div className="flex lg:flex-row flex-col lg:items-end justify-start ">
                  <div className="flex flex-col lg:mr-20">
                    <div className="md:space-x-3 space-x-5 flex  items-center">
                      <span className="md:text-[16px] text-[12px] font-medium">
                        KPod Fast Stable Diffusion
                      </span>
                      <div>
                        <Image
                          src={require("../../../public/pencil.png")}
                          alt=""
                          className="h-[1.5vh] w-[1.5vh] "
                        />
                      </div>
                      <div className="md:flex lg:hidden hidden pl-28 justify-end items-center">
                      <div className="text-[10px] text-[#34C700] flex font-semibold bg-[#34C70040] px-3 py-2 rounded-[8px]">
                        <span className="h-3 w-3 bg-[#34C700] rounded-full mr-2 mt-[2px]"></span>
                        Running
                      </div>
                      <div>
                        <svg
                          onClick={handlePannelClick}
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`ml-2 bg-black rounded-full cursor-pointer transition-transform duration-300 ${
                            showPannel ? "rotate-360" : "rotate-180"
                          }`}
                        >
                          <circle cx="13" cy="13" r="13" fill="black" />
                          <path
                            d="M13.5376 20.3261L8.52228 15.3108C7.71463 14.5032 7.71463 13.1937 8.52228 12.386C9.32994 11.5784 10.6395 11.5784 11.4471 12.386L15 15.9388L18.5528 12.386C19.3605 11.5784 20.67 11.5784 21.4777 12.386C22.2853 13.1937 22.2853 14.5032 21.4777 15.3108L16.4624 20.3261C15.6548 21.1338 14.3452 21.1338 13.5376 20.3261Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    </div>
                    <div className="md:mt-0 -mt-3">
                      {" "}
                      <span className="md:text-[14px] text-[10px]  text-[#8D8D8D]">
                        ID: wgtrsdtfghj54dfg
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col lg:mt-0 mt-4 md:mr-20">
                    <div className=" flex ">
                      <span className="md:text-[16px] text-[12px] font-medium">
                        1 x RTX A4500
                      </span>
                    </div>
                    <div  className="md:mt-0 -mt-3">
                      {" "}
                      <span className="md:text-[14px] text-[10px] text-[#8D8D8D]">
                        12 vCPU 62 GB RAM
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col lg:mt-0 mt-4 md:mr-20">
                    <div className=" flex ">
                      <span className="md:text-[13px] text-[11px] font-medium">
                        Kpod/stable-diffusion:fast-stable-diffusion-2.4.0
                      </span>
                    </div>
                    <div className="md:mt-0 -mt-3">
                      {" "}
                      <span className="md:text-[14px] text-[9px] text-[#8D8D8D]">
                        On-Demand - Secure Cloud
                      </span>
                    </div>
                  </div>
                 
                </div>
              
              </div>
              <div className="lg:flex md:hidden mt-3 justify-center lg:justify-end lg:-mt-10 lg:mr-10">
                    <div className="flex lg:space-x-20 space-x-10 justify-center items-center">
                      <div className="text-[10px] text-[#34C700] flex font-semibold bg-[#34C70040] px-3 py-2 rounded-[8px]">
                        <span className="h-3 w-3 bg-[#34C700] rounded-full mr-2 mt-[2px]"></span>
                        Running
                      </div>
                      <div>
                        <svg
                          onClick={handlePannelClick}
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`ml-2 bg-black rounded-full cursor-pointer transition-transform duration-300 ${
                            showPannel ? "rotate-360" : "rotate-180"
                          }`}
                        >
                          <circle cx="13" cy="13" r="13" fill="black" />
                          <path
                            d="M13.5376 20.3261L8.52228 15.3108C7.71463 14.5032 7.71463 13.1937 8.52228 12.386C9.32994 11.5784 10.6395 11.5784 11.4471 12.386L15 15.9388L18.5528 12.386C19.3605 11.5784 20.67 11.5784 21.4777 12.386C22.2853 13.1937 22.2853 14.5032 21.4777 15.3108L16.4624 20.3261C15.6548 21.1338 14.3452 21.1338 13.5376 20.3261Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
            </div>
            {showPannel && (
              <>
              <ShowPannel/>
               
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepolySpot;
