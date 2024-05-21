"use client";
import { get } from "http";
import VMConfigModal from "./VMConfigModal";
import { useEffect, useState } from "react";
import { useUser } from "../../../app/context/UserContext";
import RequestGPU from "../../../components/console/HomeComponents/RequestGPU";
import RequestInference from "./KYCForm/RequestInference";
import FeedBack from "../../../components/console/HomeComponents/FeedBack";
import Image from "next/image";

const Welcome = () => {
  const [showModal, setShowModal] = useState(false);
  const { setUserDetails, userDetails } = useUser();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isInferenceOpen, SetInferenceOpen] = useState(false);
  const [feedback, SetFeedback] = useState(false);

  const handleGPUClick = () => {
    setIsPopupOpen(true);
  };
  const handleInferenceClick = () => {
    SetInferenceOpen(true);
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

  const closeModal = (requestSuccess: boolean) => {
    setShowModal(false);

    if (requestSuccess) {
      setUserDetails({ ...userDetails, vm_instance_request: 1 });
    }
  };

  return (
    <>
      <div className=" bg-[#ffff] min-h-screen relative ">
      {!showModal ? (
       <>
       <div className="text-[23px] text-[#72C83E] font-medium md:mt-10 md:mx-10 mt-20 mx-4  flex ">
         Hi Suman ,
       </div>
       <div className="text-[#181E22] lg:text-[40px] md:text-[30px] text-[17px] font-bold md:px-10 px-4">
         Welcome to Ola Krutrim Cloud <span className="text-[#1EC2BF] lg:text-[30px] md:text-[20px] text-[12px] font-medium">Beta</span>
       </div>
     
       <div>
         <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 md:ml-10 mx-10 md:mr-20 mt-10">
           <div className="relative bg-[#F3F7F9] w-full h-full border-[#181E22] border-opacity-10 border-[1px] rounded-[8px]">
             <div className="lg:p-6 p-3 rounded-full">
               <div className="flex ">
                 <div className="bg-[#DEE8EC] p-4 rounded-full inline-block">
                   <Image src={require("../../../public/gpu_home.png")} width={40} height={40} className="md:w-[5vh] w-[3vh] h-[3vh] md:h-[5vh]" alt="" />
                 </div>
               </div>
             </div>
             <div className="absolute top-0 right-0 m-2 text-[#1FC2BE] font-semibold text-[16px] border-[2px] bg-[#8BFFDC] border-[#1FC2BE]  bg-opacity-20 px-4 py-1 mt-3 rounded-[4px]">Free Trial</div>
             <div className="text-[#181E22] md:text-[28px] text-[18px] mx-4 font-semibold md:mx-7">Get GPU Instance</div>
             <div className="lg:text-[14px] md:text-[10px] text-[9px]  text-[#000000] text-opacity-50 md:mx-7 mx-5 mt-2 font-medium">Managed AI cloud services for full lifecycle of Generative AI needs from training to <br className="md:flex hidden" /> inferencing supported by platforms.</div>
             <div className="bg-[#FFFFFF] rounded-[4px] mx-7 mt-6 mb-6">
               <div className="flex md:flex-row flex-col">
                 <div className="text-[#74787A] lg:text-[13px] text-[11px] lg:mx-3 mx-2 font-medium  md:pt-5 pt-2" >
                   GPU Card :<span className="text-[#41515C] font-semibold">Nvidia- 1xA100</span>
                 </div>
                 <div className="text-[#74787A] lg:text-[13px] text-[12px] lg:mx-2 mx-2 font-medium  md:pt-5 pt-2" >OS : 
                   <span className="text-[#41515C] font-semibold">Linux</span>
                 </div>
                 <div className="text-[#74787A]  lg:text-[13px] text-[12px] lg:mx-3 mx-2 font-medium  md:pt-5 pt-2" >
                   Root Disk :<span className="text-[#41515C] font-semibold">500GB</span>
                 </div>
                 <div className="text-[#74787A]  lg:text-[13px] text-[12px] lg:mx-3 mx-2 font-medium  md:pt-5 pt-2" >
                   GPU Memory:<span className="text-[#41515C] font-semibold"> 40 GB</span>
                 </div>
               </div>
               <div className="flex md:flex-row flex-col pb-4">
                 <div className="text-[#74787A] lg:text-[13px] text-[12px] lg:mx-3 mx-2 font-medium  pt-2" >
                   Type :<span className="text-[#41515C] font-semibold"> Reserved Instances</span>
                 </div>
                 <div className="text-[#74787A]  lg:text-[13px] text-[12px] lg:mx-2 mx-2 font-medium  pt-2" >vCPU :
                   <span className="text-[#41515C] font-semibold">32</span>
                 </div>
                 <div className="text-[#74787A]  lg:text-[13px] text-[12px] lg:mx-3 mx-2 font-medium  pt-2" >
                   Ram :<span className="text-[#41515C] font-semibold">128GB</span>
                 </div>
                 <div className="text-[#74787A]  lg:text-[13px] text-[12px] lg:ml-12 md:ml-8 md:mx-0 mx-2 font-medium  pt-2" >
                   Time Period:<span className="text-[#41515C] font-semibold"> 36 hours</span>
                 </div>
               </div>
             </div>
             <div className="cursor-pointer" onClick={handleInferenceClick}>
               <div className="bg-[#000000] bg-opacity-85 mx-7 md:w-[40%] w-[84%] rounded-[4px] py-4 flex justify-center md:text-[16px] text-[12px] items-center mb-8">Request for GPU Instance</div>
             </div>
           </div>
           <div className="relative bg-[#F3F7F9] w-full h-full border-[#181E22] border-opacity-10 border-[1px] rounded-[8px]">
             <div className="lg:p-6 p-3 rounded-full">
               <div className="flex ">
                 <div className="bg-[#DEE8EC] p-4 rounded-full inline-block">
                   <Image src={require("../../../public/inference.png")} width={40} height={40} alt="" className="md:w-[5vh] w-[3vh] h-[3vh] md:h-[5vh]"/>
                 </div>
               </div>
             </div>
             <div className="absolute top-0 right-0 m-2 text-[#1FC2BE] font-semibold text-[16px] border-[2px] bg-[#8BFFDC] border-[#1FC2BE]  bg-opacity-20 px-4 py-1 mt-3 rounded-[4px]">Free Trial</div>
             <div className="text-[#181E22] md:text-[28px] text-[16px] mx-4 font-semibold md:mx-7">Get Inferencing Service </div>
             <div className="lg:text-[14px] md:text-[10px] text-[9px] text-[#000000] text-opacity-50 mx-7 mt-2  font-medium">Integrate Inference API into your application or business app <br className="md:flex hidden" /><span className="text-[#F3F7F9]">...</span>
             </div>
             <div className="bg-[#FFFFFF] rounded-[4px] mx-7 mt-6 mb-6">
               <div className="flex md:flex-row flex-col  md:pt-4 pt-2 pb-6">
                 <div className="text-[#74787A] text-[13px] mx-4 font-medium  md:pt-5 pt-2" >
                   RPD :<span className="text-[#41515C] font-semibold">upto 600 per day</span>
                 </div>
                 <div className="text-[#74787A] text-[13px] mx-4 font-medium  md:pt-5 pt-2" >Time Period :
                   <span className="text-[#41515C] font-semibold"> 90 days</span>
                 </div>
               </div>
             </div>
             <div  onClick={handleInferenceClick} className="cursor-pointer"><div className="bg-[#000000] bg-opacity-85 mx-7  md:text-[16px] text-[12px] lg:w-[40%] md:w-1/2 w-[84%] rounded-[4px] py-4 flex justify-center items-center mb-8">Request for Inference Service</div></div>
           </div>
         </div>
       </div>
     
       <div className="bg-[#F3F7F9] flex md:flex-row flex-col mt-5 md:ml-10 md:mr-20 md:mx-0 mx-10 rounded-[8px] mb-8 border-[1px] border-[#181E22] border-opacity-5">
         <div className="flex py-3 mx-3 ">
           <div className="bg-[#DEE8EC] md:p-3 p-2 md:mx-4 mx-4  rounded-full inline-block">
             <Image src={require("../../../public/raise.png")} width={23} height={23} alt="" className="md:w-[3vh] w-[2vh] h-[2vh] md:h-[3vh]" />
           </div>
           <div className="text-[#000000] flex  items-center md:text-[19px] text-[12px] font-semibold">Raise an Enterprise Inquiry</div>
         </div>
         <div className="bg-[#181D22] md:my-3 md:py-0 py-2 flex items-center  md:text-[16px] text-[12px] justify-center font-normal md:mb-0 mb-4 md:px-8 md:ml-auto md:mr-5 md:mx-0 mx-4 rounded-[4px]">Raise Inquiry</div>
       </div>
     
       <div
  className="absolute right-0 top-1/2 font-semibold text-sm text-[#161717] bg-[#8BFFDC] md:p-3 p-1 rounded-tr-lg rounded-br-lg cursor-pointer"
  style={{
    transform: 'translateY(-50%) rotate(180deg)',
    writingMode: 'vertical-rl',
    whiteSpace: 'nowrap',
  }}
  onClick={feedBackClick}
>
  Give your feedback
</div>

     
       {isPopupOpen && <RequestGPU onClose={handleClosePopup} />}
       {isInferenceOpen && <RequestInference onClose={handleCloseInference} />}
       {feedback && <FeedBack onClose={handleCloseFeedBack} />}
     </>
      ) : (
        <VMConfigModal isOpen={showModal} onClose={closeModal} />
      )}
    </div>
    </>
  );
};

export default Welcome;
