import { useState } from "react";

const MachineConfigSubCompo = () => {
  const [selectedOption, setSelectedOption] = useState("In-Bangalore-1");
  const [template , setTemplate] = useState("Nvidia SMI 535.154.05 | Cuda 12.2 | Pytorch 2.3.0 | Ubuntu 22.04 ");
  const [storage , setStorage] = useState("1000 GB");
  const [network , setNetwork] = useState("Public Network");

 

  const data = ["In-Bangalore-1"];
  const tempaltes =["Nvidia SMI 535.154.05 | Cuda 12.2 | Pytorch 2.3.0 | Ubuntu 22.04 "];
  const storages = ["1000 GB"];
  const networks=["Public Network"];
  
  return (
    <>
      <div className=" mt-5 ">
        <div className="bg-white w-[97%]   drop-shadow-lg rounded-[8px]">
          <div className="mx-7 pt-10 pb-20">
            <div className="flex ">
              <div className="w-full">
                <div className="text-[#000000] text-[16px] font-medium">
                  Name <span className="text-[#BB0000]">*</span>
                </div>
                <div className="text-[14px] text-[#41515C] font-normal mt-1">
                  Provide a name for your virtual machine.
                </div>
                <div>
                  <input
                    type="text"
                    className="rounded-[4px] border-[1.5px] mt-2 focus:outline-none text-black border-[#00000014] py-4 px-4 bg-[#FBFDFD] w-[95%]"
                  />
                </div>
              </div>
              <div className=" w-full ml-10">
                <div className="text-[#000000] text-[16px] font-medium">
                  Data Center{" "}
                </div>
                <div className="text-[14px] text-[#41515C] font-normal mt-1">
                  Select a data center to host this virtual machine.
                </div>
                <div>
                  <div className="relative w-[97%] mt-2">
                    <select
                      value={selectedOption}
                      disabled
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="appearance-none w-full rounded-[4px] border-[1.5px] py-4 px-4 bg-[#FBFDFD] border-[#00000014] focus:outline-none font-normal text-[#000000]"
                    >
                      {data.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none mr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13.5"
                        height="9"
                        viewBox="0 0 13 7"
                        fill="none"
                      >
                        <path
                          opacity="0.3"
                          d="M6.75 7L0.904328 0.25L12.5957 0.25L6.75 7Z"
                          fill="#41515C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-[24px]">
            <div className=" w-full ">
                <div className="text-[#000000] text-[16px] font-medium">
                Select machine image template
                </div>
               
                <div>
                  <div className="relative w-[95%] mt-2">
                    <select
                      value={template}
                      disabled
                      onChange={(e) => setTemplate(e.target.value)}
                      className="appearance-none w-full rounded-[4px] border-[1.5px] py-4 px-4 text-[13px] bg-[#FBFDFD] border-[#00000014] focus:outline-none font-normal text-[#000000]"
                    >
                      {tempaltes.map((template, index) => (
                        <option key={index} value={template}>
                          {template}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13.5"
                        height="9"
                        viewBox="0 0 13 7"
                        fill="none"
                      >
                        <path
                          opacity="0.3"
                          d="M6.75 7L0.904328 0.25L12.5957 0.25L6.75 7Z"
                          fill="#41515C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full space-x-3 flex ml-10">
               <div className="w-[35%]">
               <div className="text-[#000000] text-[16px] font-medium">
                Storage{" "}
                </div>
               
                <div className="w-full"> 
                  <div className="relative w-full mt-2">
                    <select
                      value={storage}
                      disabled
                      onChange={(e) => setStorage(e.target.value)}
                      className="appearance-none w-full rounded-[4px] border-[1.5px] py-4 px-4 bg-[#FBFDFD] border-[#00000014] focus:outline-none font-normal text-[#000000]"
                    >
                      {storages.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none mr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13.5"
                        height="9"
                        viewBox="0 0 13 7"
                        fill="none"
                      >
                        <path
                          opacity="0.3"
                          d="M6.75 7L0.904328 0.25L12.5957 0.25L6.75 7Z"
                          fill="#41515C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
               </div>
               <div className="w-[60%]">
               <div className="text-[#000000] text-[16px] font-medium">
               Networking{" "}
                </div>
               
                <div className=""> 
                  <div className="relative w-full mt-2">
                    <select
                      value={network}
                      disabled
                      onChange={(e) => setNetwork(e.target.value)}
                      className="appearance-none w-full rounded-[4px] border-[1.5px] py-4 px-4 bg-[#FBFDFD] border-[#00000014] focus:outline-none font-normal text-[#000000]"
                    >
                      {networks.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none mr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13.5"
                        height="9"
                        viewBox="0 0 13 7"
                        fill="none"
                      >
                        <path
                          opacity="0.3"
                          d="M6.75 7L0.904328 0.25L12.5957 0.25L6.75 7Z"
                          fill="#41515C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
               </div>
              </div>
              
            </div>
         
          </div>
        </div>
        <div
            className="absolute right-0 top-1/2 font-semibold text-sm text-[#161717] bg-[#8BFFDC] md:p-4 p-1 rounded-tr-lg rounded-br-lg cursor-pointer"
            style={{
              transform: "translateY(-50%) rotate(180deg)",
              writingMode: "vertical-rl",
              whiteSpace: "nowrap",
            }}
          >
            Give your feedback
          </div>
      </div>
    </>
  );
};

export default MachineConfigSubCompo;
