"use client";
import Image from "next/image";
import { useState } from "react";
import CreateApi from "./CreateApi";

const ProjectApi = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
 
  return (
    <div className="flex flex-col min-h-screen px-5 relative">
      <div className="flex justify-between items-center mb-3 ">
        <div className="w-full h-full  flex flex-col bg-[#0F1B2B]  rounded-[16px]">
        <div className="text-[27px]  font-bold mt-10 px-10  text-[#8BFFDD] ">
            Project Api Keys
          </div>

          <div className="px-16 mt-20 text-[23px] font-bold capitalize">
            Your saved secret keys
          </div>
          <div className="grid grid-cols-4 gap-20 px-16 mt-8 border-b-2 py-2 w-full">
            <div>NAME</div>
            <div>SECRET KEY</div>
            <div>CREATED</div>
            <div></div>
          </div>
          <div className="grid grid-cols-4 gap-20 py-3 px-16 mt-8  w-full">
            <div>Test</div>
            <div>ak************dfv55dfvdf</div>
            <div>April 27, 2024</div>
            <div className="flex space-x-6">
              <div>
                <Image
                  src={require("../../../public/Editing.png")}
                  alt=""
                  width={23}
                  height={23}
                />
              </div>
              <div>
                {" "}
                <Image
                  src={require("../../../public/Bin.png")}
                  alt=""
                  width={23}
                  height={23}
                />
              </div>
            </div>
          </div>

          <button className="w-[40%] mb-36  mt-20 px-16 " onClick={()=>setIsPopupOpen(true)}>
            {" "}
            <div
              className="flex mt-3 space-x-5 bg-[#80FFF7] rounded-[13px] p-4 cursor-pointer"
             
            >
              <div>
                <Image
                  src={require("../../../public/create.png")}
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
              <div className="text-[17px] text-black font-bold text-center">
                Create new secret key
              </div>
            </div>
            
          </button>
          {isPopupOpen && <CreateApi onClose={handleClosePopup} />}
        </div>
      </div>
    </div>
  );
};

export default ProjectApi;