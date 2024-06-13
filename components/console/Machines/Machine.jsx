import Image from "next/image";
import Reserve from "./Reserve";
import { useState, useEffect } from "react";

const Machine = () => {
  // const [creditBalance, setCreditBalance] = useState([]);

  // useEffect(() => {
  //   const fetchOnce = async () => {
  //     getCreditBalance();
  //   };
  //   fetchOnce();
  // }, []);

  // const getCreditBalance = async () => {
  //   try {
  //     const response = await fetch("/api/creditBalance", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const result = await response.json();
  //     console.log(result);
  //     setCreditBalance(result);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Failed to fetch credit balance.");
  //   }
  // };

  return (
    <>
      <div className="mx-20 mt-5 mb-6 md:mb-10">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="text-[16px] text-[#396A82] font-medium">
              Compute <span className="ml-2">{">"}</span>
            </div>
            <div className="text-[#41515C] text-opacity-65 text-[16px] font-medium">
              Create Machine
            </div>
          </div>
        
            <div className="text-[#41515C] text-[16px]  mr-[72px]">
              Credit Balance: <span className="text-[#000000]">&#8377; 200</span>
            </div>
        
        
        </div>

        <div className="border-b-[2px] border-[#181E2214] mt-2 border-opacity-10"></div>
        <div className="flex  ">
          <div className="flex flex-col items-start">
            <div className="text-[#000000] text-[28px] font-medium mt-5">
              Create Machine
            </div>
            <div className="text-[14px] font-normal text-[#41515C] ">
              Configure and deploy GPU instances on Krutrim cloud
            </div>
          </div>

          <div className="flex items-center  mt-6 mx-[20%]">
            <div className="text-[#FFFFFF] text-[16px] font-medium bg-[#57C09E] rounded-l-[4px] justify-center  px-5 py-2  ">
              GPU
            </div>
            <div className="text-[#191919] text-[16px]  bg-[#687986] bg-opacity-15 rounded-r-[4px] justify-center  font-medium px-5 py-2">
              CPU
            </div>
          </div>

          <div></div>
        </div>

        <div className="mt-5 flex space-x-2">
          <Image
            src={require("@/public/machines/nvidia.png")}
            alt="nvidia"
            className="h-[23px] w-[28px]"
          />
          <div className="text-[15px] font-medium text-[#090909]">NVIDIA</div>
        </div>
        <div className="border-b-[2px] border-[#181E2214] mt-2 "></div>

        <div>
          <Reserve />
        </div>
      </div>
    </>
  );
};
export default Machine;
