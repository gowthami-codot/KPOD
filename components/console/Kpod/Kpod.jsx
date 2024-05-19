"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Kpod = () => {
    const router = useRouter();
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
                    <div onClick={() => {
                            router.push(`/console/KPOD?section=GpuPod`);
                            
                          }}>
                        <span className="absolute right-0 md:top-full cursor-pointer flex items-center text-[14px] bg-[#010101] px-6 py-3 lg:mr-12 rounded-[5px] text-[#FFFFFF]">
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
                </div>

                <div className="flex items-center justify-center md:mt-0 my-auto mt-20">
                    <Image
                        src={require("../../../public/kpod_img.png")}
                        alt="KPod Image"
                        className="md:w-[366px] md:h-[366px] w-[266px] h-[266px]"
                    />
                </div>

                <div className="text-[#41515C] md:text-[20px] text-[13px] flex items-center justify-center mt-4">
                    <span className="bg-[#181E220F] bg-opacity-5 md:px-20 px-5 py-3 border-[1px] rounded-md">
                        You do not have any pods yet.
                    </span>
                </div>


            </div>

          


        </div>
    );
};

export default Kpod;
