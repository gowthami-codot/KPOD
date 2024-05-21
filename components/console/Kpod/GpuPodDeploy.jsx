import Image from "next/image";
import { useState } from "react";
import ChangeTemplate from "./KpodPopUp/ChangeTemplate";
import EditTemplate from "./KpodPopUp/EditTemplate";

const GpuPodDepoly = () => {
  const [changeTemplate, SetChangeTemplate] = useState(false);
  const [editTemplate, SetEditTemplate] = useState(false);
  const handleChangeClick = () => {
    SetChangeTemplate(true);
  };
  const handleCloseChange = () => {
    SetChangeTemplate(false);
  };
  const handleEditTemplate = () => {
    SetEditTemplate(true);
  };
  const handleCloseEdit = () => {
    SetEditTemplate(false);
  };
  return (
    <>
      {
        <div className="bg-white min-h-screen relative">
          <div>
            <div className="text-[#000000] font-black text-[32px] md:mt-10 lg:mx-10 md:mx-10 mx-4  mt-20  flex items-center">
              KRUTRIM
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1EC2BF] font-medium to-[#53B71E] text-[20px] border-[2px] border-[#53B71E] rounded-[8px] px-4 ml-2 tracking-wide">
                Beta
              </span>
            </div>
            <div className="border-b-[3px] border-[#181E220F] mt-5 border-opacity-15"></div>

            <div className="font-medium text-[#1D1D1D] text-[22px] lg:mx-10 md:mx-10 mx-4 mt-4 relative">
              Deploy GPU Pod
            </div>

            <div className="bg-[#F3F7F9] border-[2px] border-[#181E220F] border-opacity-5 lg:mx-10 md:mx-10 mx-10 rounded-[8px] mt-3 md:px-10 px-8">
              <div className="text-[20px] text-[#000000] font-semibold py-5">
                Configure Deployment
              </div>
              <div className="text-[#000000] text-[16px] font-semibold">
                Pod name
              </div>
              <input
                type="text"
                placeholder="| pod-1"
                className="md:w-1/3 w-full  focus:outline-none bg-white text-black  rounded-[4px] px-4 py-2 mt-1 outline-focus-white"
              />

              <div className="text-[#000000] text-[16px] font-semibold mt-3">
                Pod template
              </div>
              <div className="bg-white mb-6 flex lg:flex-row flex-col items-center justify-start  rounded-[4px] mt-3 py-5 md:px-12 ">
                <Image
                  src={require("@/public/pyTorch.png")}
                  alt=""
                  className="md:w-[12vh] md:h-[12vh] w-[9vh] h-[9vh] "
                />
                <div className="flex  flex-col lg:items-start  items-center justify-center lg:mx-20">
                  <div className="text-[#3D3D3D] text-[18px]  font-medium">
                    KPod Pytorch 2.0.1
                  </div>
                  <div className="text-[#8D8D8D] text-[14px] font-medium md:px-0 pl-6">
                    runpod/pytorch:2.0.1-py3.10-cuda11.8.0-devel-ubuntu22.04
                  </div>
                </div>
                <div className=" flex  md:flex-row  flex-col  items-center text-[16px] font-medium lg:ml-20 lg:mt-0 mt-0 md:mt-5 md:space-x-6 md:mb-0 mb-3 ">
                  <div
                    className="text-[#000000] flex border-[#000000] items-center justify-center border-[2px] py-2 rounded-[4px] px-6 md:mb-0 mb-4 md:mt-0 mt-2 cursor-pointer"
                    onClick={handleEditTemplate}
                  >
                    <Image
                      src={require("@/public/Edit.png")}
                      alt=""
                      className="lg:w-[3vh] lg:h-[3vh] md:w-[2vh] md:h-[2vh] w-[3vh] h-[3vh] mr-4 "
                    />
                    Edit Template
                  </div>
                  <div
                    className="bg-black px-6 py-2.5 rounded-[4px] cursor-pointer"
                    onClick={handleChangeClick}
                  >
                    Change Template
                  </div>
                </div>
              </div>

              <div className="text-[16px] text-[#000000] font-semibold py-5">
                Instance Pricing
              </div>
              <div className="flex md:flex-row flex-col lg:space-x-8 md:space-x-4 w-fit ">
                <div className="bg-[#FFFFFF] md:px-5 lg:pr-20  px-9 lg:mb-4 mb-4 rounded-[4px] py-4">
                  <div className="text-[#000000] text-[16px] font-medium">
                    On Demand
                  </div>

                  <div className="text-[#000000] text-[16px] font-medium pt-3">
                    $0.74/hr
                  </div>
                  <div className="text-[11px] text-[#8B8B8B]">
                    Pay as you go, with costs based on <br className="md:flex hidden" />
                    actual usage time.
                  </div>
                </div>
                <div className="bg-[#FFFFFF] lg:pl-10 md:pr-16 lg:px-0 px-4 mb-4 rounded-[4px]   py-4">
                  <div className="flex flex-col items-start lg:pt-3">
                    <div className="lg:mr-3">
                      <input type="checkbox" id="encrypt" name="encrypt" />
                      <label
                        htmlFor="encrypt"
                        className="text-[#000000] text-[14px] font-medium ml-2"
                      >
                        Encrypt Volume
                      </label>
                    </div>
                    <div className="lg:mr-3">
                      <input type="checkbox" id="decrypt" name="SSH" />
                      <label
                        htmlFor="SSH"
                        className="text-[#000000] text-[14px] font-medium ml-2"
                      >
                        SSH Terminal Access
                      </label>
                    </div>
                    <div>
                      <input type="checkbox" id="nonEntry" name="Jupyter" />
                      <label
                        htmlFor="Jupyter"
                        className="text-[#000000] text-[14px] font-medium ml-2"
                      >
                        Start Jupyter Notebook
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F3F7F9] border-[2px] border-[#181E220F] mb-6 border-opacity-5 mx-10 rounded-[8px] mt-3  md:px-0 px-6 flex    justify-center md:justify-start ">
              <div className="md:mx-10 w-full mt-10">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                  <div>
                    <div className="text-[#000000] w-full text-[16px] font-bold">
                      Pricing Summary
                    </div>
                    <div className="bg-[#FFFFFF] px-6 w-full lg:mb-0 mb-5 mt-2 rounded-[4px] py-2">
                      <div className="text-[#3D3D3D] text-[14px] mt-10">
                        GPU Cost: $0.49/hr
                      </div>
                      <div className="text-[#3D3D3D] text-[14px] mt-3">
                        Running Disk Cost: $0.006/hr
                      </div>
                      <div className="text-[#3D3D3D] text-[14px] mb-10 mt-3">
                        Exited Disk Cost: $0.006/hr
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[#000000] text-[16px] font-bold">
                      POD Summary
                    </div>
                    <div className="bg-[#FFFFFF] w-full px-6 mt-2 rounded-[4px] py-2">
                      <div className="text-[#3D3D3D] text-[14px] mt-10">
                        1x RTX 4090 (24GB RAM)
                      </div>
                      <div className="text-[#3D3D3D] text-[14px] mt-3">
                        46GB RAM . 8vCPU
                      </div>
                      <div className="text-[#3D3D3D] text-[14px] lg:mb-10 mb-16 md:mb-9 mt-3">
                        Total Disk: 40 GB
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#010101] mt-7 py-2.5 mb-4 text-[18px] font-medium w-full flex items-center justify-center rounded-[4px]">
                  Deploy Spot
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      }

      {changeTemplate && <ChangeTemplate onClose={handleCloseChange} />}
      {editTemplate && <EditTemplate onClose={handleCloseEdit} />}
    </>
  );
};

export default GpuPodDepoly;
