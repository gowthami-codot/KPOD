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
    <div className="flex flex-col min-h-screen px-5">
      <div className="w-full h-full bg-[#FFFF] ">
        <div className="text-[27px]  font-bold mt-10 px-10  text-[#181E22] ">
          API Keys Management
        </div>

        <div className="flex flex-col items-center w-full mx-auto my-40 justify-center">
          <div className=" flex justify-center bg-[#F3F4F5] md:w-[500px] w-full h-[280px] px-[40px] mx-auto">
            <div className="flex flex-col justify-center items-center mt-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="#000"
                viewBox="0 0 16 16"
                className="font-bold"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              <div className="mt-[20px] text-[18px] font-bold text-[#181E22]">
                Create an API key to access the Krutrim AI API.
              </div>
              <div
                className="flex   space-x-3 bg-[#181E22] mb-[20px] rounded-[6px] p-4 mt-[40px] cursor-pointer"
                onClick={() => handleCreateApiClick()}
              >
                <div className=" flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#fff"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>
                </div>
                <div className="text-[16px] text-[#fff] font-bold text-center">
                  Create new secret key
                </div>
              </div>
            </div>
          </div>

          {isPopupOpen && <CreateApi onClose={handleClosePopup} />}
        </div>
      </div>
    </div>
  );
};

export default ApiKeys;
