import MachineConfigSubCompo from "./MachineConfigSubCompo";
import MachineConfigSubCompo2 from "./MachineConfigSubCompo2";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const MachineConfig = () => {
  const router = useRouter();
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
      <div className="mx-20 mt-5">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <div className="text-[16px] text-[#396A82] font-medium">
              Compute <span>{">"}</span>
            </div>
            <div
              className="text-[#396A82] text-[16px] font-medium cursor-pointer"
              onClick={() => {
                router.push("/console/machines?section=machine");
              }}
            >
              Create Machine <span>{">"}</span>
            </div>
            <div className="text-[#41515C] text-opacity-65 text-[16px] font-medium">
              Machine Configuration
            </div>
          </div>
         
            <div className="text-[#41515C] text-[16px]  mr-[72px]">
              Credit Balance:{" "}
              <span className="text-[#000000]">
                &#8377; 200
              </span>
            </div>
         
        </div>

        <div className="border-b-[2px] border-[#181E2214] mt-2 border-opacity-10"></div>
        <div className="flex  ">
          <div className="flex flex-col items-start">
            <div className="text-[#000000] text-[28px] font-medium mt-5">
              Machine Configuration
            </div>
            <div className="text-[14px] font-normal text-[#41515C] ">
              Configure and deploy GPU instances on Krutrim cloud
            </div>
          </div>
        </div>

        <div>
          <MachineConfigSubCompo />
        </div>
        <div>
          <MachineConfigSubCompo2 />
        </div>
      </div>
    </>
  );
};

export default MachineConfig;
