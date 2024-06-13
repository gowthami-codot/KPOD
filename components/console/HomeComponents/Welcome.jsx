"use client";
import { get } from "http";
import VMConfigModal from "./VMConfigModal";
import { useEffect, useState } from "react";
import { useUser } from "../../../app/context/UserContext";
import RequestGPU from "./RequestGPU";
import RequestInference from "./KYCForm/RequestInference";
import FeedBack from "./FeedBack";
import ContactUs from "@/components/console/HomeComponents/KYCForm/ContactUs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Welcome = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  // const { setUserDetails, userDetails } = useUser();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isInferenceOpen, SetInferenceOpen] = useState(false);
  const [feedback, SetFeedback] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);

  const handleGPUClick = () => {
    setIsPopupOpen(true);
  };
  const handleInferenceClick = () => {
    SetInferenceOpen(true);
  };
  const handleRequestForInference = () => {
    SetInferenceOpen(true);
    router.push("?RequestForInference=true");
  };
  const feedBackClick = () => {
    SetFeedback(true);
  };
  const handleCloseFeedBack = () => {
    SetFeedback(false);
  };
  const handleCloseInference = () => {
    SetInferenceOpen(false);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleContactUsClick = () => {
    setShowContactUs(true);
  };

  const handleCloseContactUs = () => {
    setShowContactUs(false);
  };

  const closeModal = (requestSuccess) => {
    setShowModal(false);

    if (requestSuccess) {
      //   setUserDetails({ ...userDetails, vm_instance_request: 1 });
    }
  };

  return (
    <>
      <div className=" bg-[#ffff] min-h-screen relative md:ml-12">
        {!showModal ? (
          <>
            <div className="text-[23px] text-[#72C83E] font-medium md:mt-10 md:mx-10 mt-20 mx-4 flex ">
              Hi User ,
            </div>
            <div className="text-[#181E22] lg:text-[40px] md:text-[30px] text-[17px] font-bold md:px-10 px-4">
              Welcome to Ola Krutrim Cloud{" "}
              <span className="text-[#1EC2BF] lg:text-[30px] md:text-[20px] text-[12px] font-medium">
                Beta
              </span>
            </div>

            <div className="mt-6 md:mt-10">
              <div className="flex flex-col lg:flex-row md:mx-12 mx-5 gap-6">
                <div className="relative shadow-md w-full h-full border-[#181E22] border-opacity-10 border-[1px] rounded-[8px]">
                  <div className="lg:p-6 p-3 rounded-full">
                    <div className="flex ">
                      <div className="bg-[#DEE8EC] p-4 rounded-full inline-block">
                        <Image
                          src={require("../../../public/gpu_home.png")}
                          width={40}
                          height={40}
                          className="md:w-[5vh] w-[3vh] h-[3vh] md:h-[5vh]"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-[#181E22] md:text-[28px] text-[18px] mx-4 font-semibold md:mx-7">
                    Create Machine
                  </div>
                  <div className="lg:text-[14px] md:text-[10px] text-[9px]  text-[#000000] text-opacity-50 md:mx-7 mx-5 mt-2 font-medium">
                    Managed AI cloud services for full lifecycle of Generative
                    AI needs from training to inferencing supported by
                    platforms.
                  </div>
                  <div className="bg-[#FBFDFD] border-1 border-gray-200 rounded-[4px] mx-5 mt-6 mb-6 p-4">
                    <div className="flex flex-col md:flex-row md:flex-wrap">
                      <div className="text-sm w-[40%]">
                        <span className="text-[#74787A]">GPU Card : </span>{" "}
                        Nvidia- 1xA100
                      </div>
                      <div className="text-sm w-[20%] text-center">
                        <span className="text-[#74787A]">OS : </span> Linux{" "}
                      </div>
                      <div className="text-sm w-[33.3%]">
                        <span className="text-[#74787A]">Root Disk : </span> 500
                        GB{" "}
                      </div>
                      <div className="text-sm w-[40%]">
                        <span className="text-[#74787A]">Type : </span>{" "}Reserverd Instances
                      </div>
                      <div className="text-sm w-[20%] text-center">
                        <span className="text-[#74787A]">vCPU : </span> 32
                      </div>
                      <div className="text-sm w-[33.3%] ml-1.5">
                        <span className="text-[#74787A]">RAM : </span> 128 GB
                      </div>
                      <div className="text-sm w-[33.3%]">
                        <span className="text-[#74787A]">GPU Memory : </span>40
                        GB
                      </div>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={handleInferenceClick}
                  >
                    <div className="bg-[#000000] text-white bg-opacity-85 mx-5 rounded-[4px] py-4 flex justify-center md:text-[16px] text-[12px] items-center mb-8">
                      Request for Machine
                    </div>
                  </div>
                </div>
                <div className="relative shadow-md w-full h-full border-[#181E22] border-opacity-10 border-[1px] rounded-[8px]">
                  <div className="lg:p-6 p-3 rounded-full">
                    <div className="flex ">
                      <div className="bg-[#DEE8EC] p-4 rounded-full inline-block">
                        <Image
                          src={require("../../../public/inference.png")}
                          width={40}
                          height={40}
                          alt=""
                          className="md:w-[5vh] w-[3vh] h-[3vh] md:h-[5vh]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-[#181E22] md:text-[28px] text-[16px] mx-4 font-semibold md:mx-7">
                    Get Inference Service{" "}
                  </div>
                  <div className="lg:text-[14px] md:text-[10px] text-[9px]  text-[#000000] text-opacity-50 md:mx-7 mx-5 mt-2 font-medium">
                    Integrate Inference API into your application or business
                    app <br className="md:flex hidden" />
                    <span className="text-[#F3F7F9]">...</span>
                  </div>
                  <div className="bg-[#FBFDFD] border-1 border-gray-200 rounded-[4px] mx-5 mt-6 mb-6 p-4 md:py-9">
                    <div className="flex flex-col md:flex-row items-start gap-2">
                      <div className="text-[#74787A] text-sm">
                        RPD :
                        <span className="text-[#41515C] text-sm">
                          upto 600 per day
                        </span>
                      </div>
                      <div className="text-[#74787A] text-sm">
                        Time Period :
                        <span className="text-[#41515C] text-sm"> 90 days</span>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={handleRequestForInference}
                    className="cursor-pointer"
                  >
                    <div className="bg-[#000000] bg-opacity-85 mx-5 text-white md:text-[16px] text-[12px] px-5 rounded-[4px] py-4 flex justify-center items-center mb-8">
                      Request for Inference Service
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF] shadow-md flex md:flex-row flex-col items-center mt-5 
            rounded-[8px] mx-5 md:mx-12 mb-8 border-[1px] border-[#181E22] border-opacity-5 p-2 md:p-0">
              <div className="flex py-3 mx-3 ">
                <div className="bg-[#DEE8EC] md:p-3 p-2 md:mx-4 mx-4  rounded-full hidden md:flex">
                  <Image
                    src={require("../../../public/raise.png")}
                    width={23}
                    height={23}
                    alt=""
                    className="md:w-[3vh] w-[2vh] h-[2vh] md:h-[3vh]"
                  />
                </div>
                <div className="text-[#000000] flex  items-center md:text-[15px] text-[12px] font-semibold">
                  To know more about enterprise queries, custom quotes, and
                  pricing
                </div>
              </div>
              <div
                className="border-2 border-black md:mx-3 md:ml-auto py-2 md:px-8
                w-[90%] md:w-fit text-center rounded-md text-sm cursor-pointer hover:text-white hover:bg-black duration-300"
                onClick={handleContactUsClick}
              >
                Contact Us
              </div>
            </div>

            <div
              className="absolute right-0 top-1/2 font-semibold text-sm text-[#161717] bg-[#8BFFDC] md:p-2 px-1 rounded-tr-lg rounded-br-lg cursor-pointer"
              style={{
                transform: "translateY(-50%) rotate(180deg)",
                writingMode: "vertical-rl",
                whiteSpace: "nowrap",
              }}
              onClick={feedBackClick}
            >
              Give your feedback
            </div>

            {isPopupOpen && <RequestGPU onClose={handleClosePopup} />}
            {isInferenceOpen && (
              <RequestInference onClose={handleCloseInference} />
            )}
            {feedback && <FeedBack onClose={handleCloseFeedBack} />}
            {showContactUs && <ContactUs onClose={handleCloseContactUs} />}
          </>
        ) : (
          <VMConfigModal isOpen={showModal} onClose={closeModal} />
        )}
      </div>
    </>
  );
};

export default Welcome;
