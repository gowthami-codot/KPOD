"use client";
import { get } from "http";
import VMConfigModal from "./VMConfigModal";
import { useEffect, useState } from "react";
import { useUser } from "../../../app/context/UserContext";
import RequestGPU from "../../../components/console/HomeComponents/RequestGPU";
import Image from "next/image";

const Welcome = () => {
  const [showModal, setShowModal] = useState(false);
  const { setUserDetails, userDetails } = useUser();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleGPUClick = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const closeModal = (requestSuccess: boolean) => {
    setShowModal(false);

    if (requestSuccess) {
      setUserDetails({ ...userDetails, vm_instance_request: 1 });
    }
  };

  return (
    <div className=" bg-[#ffff] min-h-screen    w-full">
      {!showModal ? (
        <>
          <div className="text-[20px] text-[#72C83E] px-10 pt-10 ">
            Hi Tanish ,
          </div>
          <div className="flex items-end justify-end">
            {" "}
            
          </div>
          <div className="text-[#181E22] text-[32px] font-bold px-10 border-b-[1px] border-b-[#181E220F] pb-10">
            Welcome to OLA Krutrim Cloud
          </div>

          <div className="flex ml-4 flex-col lg:flex-row justify-start mt-10 mx-7 items-start">
            <div className="bg-[#F3F7F9] lg:w-[40%] w-full  border-[2px] rounded-[8px] border-[#181E220F] lg:mr-4 lg:mb-0 mb-4">
              <div className="flex mt-4 ml-6 ">
                {" "}
                <div className="p-6 rounded-full bg-[#DEE8EC]">
                  <Image
                    src={require("../../../public/gpu_home.png")}
                    alt=""
                    width={40}
                    height={40}
                    className="bg-transparent"
                  />
                </div>
              </div>
              <div className="text-[#181E22] ml-6 mt-4 text-[32px] font-bold">
                Get GPU Instance
              </div>
              <div className="text-[#0000005C] ml-6 mt-2 text-[12px] font-medium">
                Managed AI cloud services for full lifecycle of Generative AI
                needs from training to inferencing supported by platforms.
              </div>
              <div className="flex px-1  "onClick={handleGPUClick}>
                {" "}
                <div className="bg-[#181E22] cursor-pointer hover:scale-105 duration-200 px-10 py-3 mb-5 ml-6 mt-6 rounded-[8px]">
                  Request for GPU Instance
                </div>
                {/* <div className="bg-[#72C83E1A] text-[#72C83E] text-[14px] font-bold cursor-pointer hover:scale-105 duration-200 px-3 py-3 mb-5 ml-6 mt-6 border-[1px] border-[#72C83E] rounded-[8px]">
                GPU VM Access: Pending Admin Approval
                </div> */}
              </div>
            </div>
            
            <div className="bg-[#F3F7F9] lg:w-[40%] w-full  border-[2px] rounded-[8px] border-[#181E220F] lg:mr-4 lg:mb-0 mb-4">
              <div className="flex mt-4 ml-6 ">
                {" "}
                <div className="p-6 rounded-full bg-[#DEE8EC]">
                  <Image
                    src={require("../../../public/gpu_home.png")}
                    alt=""
                    width={40}
                    height={40}
                    className="bg-transparent"
                  />
                </div>
              </div>
              <div className="text-[#181E22] ml-6 mt-4 text-[32px] font-bold">
                Get API Access
              </div>
              <div className="text-[#0000005C]  ml-6 mt-2 mb-4 text-[12px] font-medium">
                Integrate Inference API into your application or business app
              </div>
              <div className="flex cursor-pointer hover:scale-105 duration-200 ">
                {" "}
                <div className="text-[#181E22] bg-white font-semibold px-10 py-3 mb-5 lg:ml-6 mx-3 mt-6 rounded-[8px]" >
                  Request for Inference Service
                </div>
              </div>
            </div>
          </div>
          {isPopupOpen && <RequestGPU onClose={handleClosePopup} />}
        </>
      ) : (
        <VMConfigModal isOpen={showModal} onClose={closeModal} />
      )}
    </div>
  );
};

export default Welcome;
