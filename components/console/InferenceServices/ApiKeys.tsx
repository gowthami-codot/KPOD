"use client";
import Image from "next/image";
import { useState } from "react";
import CreateApi from "./CreateApi";


const ApiKeys = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const handleCreateApiClick = () => {
   
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <div className="flex flex-col min-h-screen px-5 relative">
      <div className="w-full h-full bg-[#0F1B2B]  rounded-[16px]">
      <div className="text-[27px]   font-bold mt-10 px-10  text-[#8BFFDD] ">
           Api Keys Management
          </div>

        <div className="bg-[#162231] mx-auto mt-20 w-[90%] px-16 py-4 rounded-[16px]">
          <div className="text-[20px] font-bold">API Keys</div>
          <div>Create and manage API key</div>
        </div>

        <div className="flex flex-col items-center my-40 justify-center">
          <div className="p-3 bg-[#16263A] rounded-[8px]">
            <Image
              src={require("../../../public/settings.png")}
              alt=""
              height={20}
              width={20}
            />
          </div>
          <div className="mt-3 text-[17px] font-bold">
            Create an API key to access the Krutrim AI API.
          </div>
          <div className="flex mt-3 space-x-5 bg-[#80FFF7] rounded-[13px] p-4 cursor-pointer"  onClick={() => handleCreateApiClick()}>
            <div>
              <Image
                src={require("../../../public/create.png")}
                alt=""
                width={30}
                height={30}
              />
            </div>
            <div className="text-[17px] text-black font-bold text-center" >Create new secret key</div>
          </div>
          {isPopupOpen && (
              <CreateApi onClose={handleClosePopup}/>
                
              
            )}
        </div>
      </div>
    </div>
  );
};

export default ApiKeys;
