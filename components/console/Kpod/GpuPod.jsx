"use client"
import { useState } from "react";
import GpuPodDepoly from "./GpuPodDeploy";
import { useRouter } from "next/navigation";
const GpuPod = () => {

    // const [showGpuPod, setShowGpuPod] = useState();
    const router = useRouter();
    const Amd = [
        {
            title: "MI300X",
            subTitle: "192GB VRAM",
            text1: "$3.25/hr",
            text2: "$2.45/hr",
            button: "Reserve Now"

        },
        {
            title: "MI300X",
            subTitle: "192GB VRAM",
            text1: "$3.25/hr",
            text2: "$2.45/hr",
            button: "Reserve Now"

        },
    ];
    const NVIDIALG = [
        {
            title: "RTX 4090",
            text1: "24 GB VRAM",
            text2: "46 GB RAM ",
            subText: " 16vCPU",
            righttop: "$0.74/hr",
            rihtdown: "",
            rightbottom: "High",
            link:"/console/KPOD?section=GpuPodDeploy"
            
        },
        {
            title: "RTX 6000 Ada",
            text1: "48 GB VRAM",
            text2: "62 GB RAM ",
            subText: " 14vCPU",
            righttop: "$1.14/hr",
            rihtdown: "0.97/hr",
            rightbottom: "High",
            link:"/console/KPOD?section=GpuPodDeploy"

        },
        {
            title: "H100 SXM",
            text1: "80 GB VRAM",
            text2: "125 GB RAM ",
            subText: " 24vCPU",
            righttop: "$4.69/hr",
            rihtdown: "3.97/hr",
            rightbottom: "High",
            link:"/console/KPOD?section=GpuPodDeploy"

        },
        {
            title: "H100 PCIe",
            text1: "80 GB VRAM",
            text2: "250 GB RAM ",
            subText: " 16vCPU",
            righttop: "$3.89/hr",
            rihtdown: "",
            rightbottom: "High",
            link:"/console/KPOD?section=GpuPodDeploy"

        },
        {
            title: "L40",
            text1: "48 GB VRAM",
            text2: "58 GB RAM ",
            subText: " 16vCPU",
            righttop: "$1.14/hr",
            rihtdown: "0.97/hr",
            rightbottom: "Low",
            link:"/console/KPOD?section=GpuPodDeploy"

        },
        {
            title: "L40S",
            text1: "24 GB VRAM",
            text2: "46 GB RAM ",
            subText: " 16vCPU",
            righttop: "$1.49/hr",
            rihtdown: "",
            rightbottom: "Low",
            link:"/console/KPOD?section=GpuPodDeploy"

        },
        {
            title: "RTX 4000 Ada",
            text1: "20 GB VRAM",
            text2: "50 GB RAM ",
            subText: " 9vCPU",
            righttop: "$0.39/hr",
            rihtdown: "",
            rightbottom: "Low",
            link:"/console/KPOD?section=GpuPodDeploy"

        },
        {
            title: "L4",
            text1: "24 GB VRAM",
            text2: "50 GB RAM ",
            subText: "",
            righttop: "$0.44/hr",
            rihtdown: "",
            rightbottom: "Low",
            link:"/console/KPOD?section=GpuPodDeploy"

        }
    ]
    const NVIDIAPG = [
        {
            title: "A40",
            text1: "48 GB VRAM",
            text2: "48 GB RAM ",
            subText: " 16vCPU",
            righttop: "$0.69/hr",
            rihtdown: "0.59/hr",
            rightbottom: ""
        },
        {
            title: "RTX A600",
            text1: "48 GB VRAM",
            text2: "50 GB RAM ",
            subText: " 8vCPU",
            righttop: "$0.79/hr",
            rihtdown: "0.67/hr",
            rightbottom: "High"
        },
        {
            title: "RTX A5000",
            text1: "24 GB VRAM",
            text2: "29 GB RAM ",
            subText: " 7vCPU",
            righttop: "$0.44/hr",
            rihtdown: "0.37/hr",
            rightbottom: "High"
        },
        {
            title: "RTX A4500",
            text1: "20 GB VRAM",
            text2: "31 GB RAM ",
            subText: " 12vCPU",
            righttop: "$0.36/hr",
            rihtdown: "0.30/hr",
            rightbottom: "High"
        },
        {
            title: "A100 PCIe",
            text1: "80 GB VRAM",
            text2: "117 GB RAM ",
            subText: "",
            righttop: "$1.89/hr",
            rihtdown: "",
            rightbottom: "Low"
        },
        {
            title: "A100 SXM",
            text1: "80 GB VRAM",
            text2: "125 GB RAM ",
            subText: "",
            righttop: "$2.29/hr",
            rihtdown: "",
            rightbottom: "Low"
        },
        {
            title: "RTX A4000",
            text1: "16 GB VRAM",
            text2: "23 GB RAM ",
            subText: " 7vCPU",
            righttop: "$0.34/hr",
            rihtdown: "0.28/hr",
            rightbottom: "Low"
        },
        {
            title: "RTX 3090",
            text1: "24 GB VRAM",
            text2: " ",
            subText: "",
            righttop: "$0.44/hr",
            rihtdown: "",
            rightbottom: "Low"
        }
    ]
    return (
        <div className="bg-white min-h-screen relative">
   <div>
                <div className="text-[#000000] font-black text-[32px] md:mt-10 md:mx-10 mt-20 mx-4 flex items-center">
                    KRUTRIM
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1EC2BF] font-medium to-[#53B71E] text-[20px] border-[2px] border-[#53B71E] rounded-[8px] px-4 ml-2 tracking-wide">
                        Beta
                    </span>
                </div>
                <div className="border-b-[3px] border-[#181E220F] mt-5 border-opacity-15"></div>

                <div className="font-medium text-[#1D1D1D] text-[22px] mx-10 mt-4 relative">
                    Deploy GPU Pod
                </div>

                <div className="bg-[#F3F7F9] border-[2px] border-[#181E220F] border-opacity-5 mx-10 rounded-[8px] mt-3  px-10">
                    <div className="text-[16px] text-[#000000] font-semibold py-5">Select an Instance</div>
                    <div className="rounded-[4px] mt-3">
                        <span className="bg-[#70E134] text-[#000000] text-[16px] px-2 py-1 rounded-[4px]">AMD</span>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-full h-full mt-6">
                        {Amd.map((feature, index) => (
                            <div key={index} className="bg-[#FFFFFF] rounded-[8px] px-5 py-3 border-[1px] border-[#181E221C] border-opacity-15 relative">
                                <div className="text-[#000000] font-medium">{feature.title}</div>
                                <div className="text-[#000000A6] text-[10px] font-semibold text-opacity-15 mt-1">{feature.subTitle}</div>
                                <div className="text-[#000000A6] text-[10px] font-medium text-opacity-15 mt-3">{feature.text1}</div>
                                <div className="text-[#000000A6] text-[10px] font-medium text-opacity-15 mt-1 mb-4">{feature.text2}</div>
                                <div className="absolute bottom-0 right-0 md:mb-2 mb-1  md:mr-5 mr-2 md:text-[13px] text-[10px]  font-medium text-[#000000] border-[#DEE8EC] border-[2px] md:px-6 px-3  py-1 rounded-[20px] ">{feature.button}</div>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-[4px] mt-8 space-x-3"> <span className="bg-[#70E134] text-[#000000] text-[16px] md:px-2 px-3 font-semibold py-1 rounded-[4px]">NVIDIA</span>
                        <span className="text-[#00000091] text-opacity-15 md:text-[13px] text-[10px] font-semibold ">Latest Gen</span> </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-ful h-full mt-6">
                        {NVIDIALG.map((feature, index) => (
                           <div
                           key={index}
                           className="relative bg-[#FFFFFF] rounded-[8px] px-5 py-3 border-[1px] border-[#181E221C] border-opacity-15 cursor-pointer hover:border-[#181E22CC] hover:border-opacity-80 hover:border-[2px] hover:rounded-[8px] hover:bg-white"
                           onClick={() => {
                            router.push(feature.link);
                            
                          }}
                         >
                           <div className="font-medium">
                             <span className="bg-[#68798617] rounded-[6px] bg-opacity-10 md:px-4 px-2 md:text-[16px] text-[10px] py-1 text-[#000000]">
                               {feature.title}
                             </span>
                             <div className="absolute top-0 right-0 md:mt-4 mt-10 mr-2 md:text-[15px] text-[10px] font-medium text-[#000000B5] text-opacity-75">
                               {feature.righttop}
                             </div>
                             <div className="absolute top-0 right-0 md:mt-12 mt-14 md:mr-5 mr-2 text-[10px] font-medium text-[#57C389A6] text-opacity-65">
                               {feature.rihtdown}
                             </div>
                           </div>
                           <div className="text-[#000000A6] md:text-[12px] text-[9px] font-medium text-opacity-15 mt-10">
                             {feature.text1}
                           </div>
                           <div className="text-[#000000A6] md:text-[10px] text-[8px] font-medium text-opacity-15">
                             {feature.text2}
                             <span className="ml-3 mr-1"></span>
                             <span className={`inline-block w-[5px] h-[5px] ${(index < 7) ? 'bg-black' : 'bg-white'} rounded-full mr-1`}></span>
                             <span className="md:text-[10px] text-[6px]">{feature.subText}</span>
                           </div>
                           <div className={`absolute bottom-0 right-0 md:mb-4 md:mt-0 mt-2 mr-5 md:text-[13px] text-[9px] font-medium ${index < 4 ? 'text-[#34C700]' : 'text-[#FF763B]'}`}>
                             {feature.rightbottom}
                           </div>
                         </div>
                         
                        ))}
                    </div>
                    <div className="rounded-[4px] mt-8 md:space-x-3 space-x-1"> <span className="bg-[#70E134] text-[#000000] text-[16px] md:px-3 px-2 font-semibold py-1 rounded-[4px]">NVIDIA</span>
                        <span className="text-[#00000091] text-opacity-15 md:text-[13px] text-[10px] font-semibold "> Previous Gen</span> </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 w-ful h-full mt-6 mb-10">
                        {NVIDIAPG.map((feature, index) => (
                            <div key={index} className="relative bg-[#FFFFFF] rounded-[8px] px-5 py-3 border-[1px] border-[#181E221C] border-opacity-15">
                                <div className="font-medium">
                                    <span className="  py-1 text-[#000000] md:text-[16px] text-[10px]">{feature.title}</span>
                                    <div className="absolute top-0 right-0 md:mt-4 mt-8 mr-2 md:text-[15px] text-[10px] font-medium text-[#000000B5] text-opacity-75">{feature.righttop}</div>
                                    <div className="absolute top-0 right-0 md:mt-12 mt-12 md:mr-5 mr-2 text-[10px] font-medium text-[#57C389A6] text-opacity-65 ">{feature.rihtdown}</div>
                                </div>
                                <div className="text-[#000000A6] md:text-[12px] text-[8px] font-medium text-opacity-15 mt-10">{feature.text1}</div>
                                <div class="text-[#000000A6] md:text-[10px] text-[8px] font-medium text-opacity-15">{feature.text2} <span class="ml-3 mr-1"></span>
                                    <span class={`inline-block w-[5px] h-[5px] ${(index < 4 || index == 6) ? 'bg-black' : 'bg-white'} rounded-full mr-1`}></span> <span className="md:text-[10px] text-[7px]">{feature.subText}</span>
                                </div>
                                <div className={`absolute bottom-0 right-0 md:mb-4 mr-5 md:text-[13px] text-[9px] font-medium ${(index < 4) ? 'text-[#34C700]' : 'text-[#FF763B]'}`}>
                                    {feature.rightbottom}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         
          

            
        </div>
    );
};
export default GpuPod;
