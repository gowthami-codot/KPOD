import { useState } from "react";
import CreateScrecet from "@/components/console/InferenceServices/CreateScrecet";
import Image from "next/image";

const CreateApi = ({ onClose }) => {
  const [screcetKeyPopup, SetscrecetKeyPopup] = useState(false);
  const [createApi, setApiKey] = useState("");
  const inputkey = (e) => {
    setApiKey(e.target.value);
  };
  const handleShowHiText = () => {
    SetscrecetKeyPopup(true);
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#3d3939] bg-opacity-50">
        <div className="bg-[#FFFFFF] shadow-md   text-[#000000] h-fit  md:w-[36%] w-full md:mx-0 mx-5   rounded-[8px] p-5 ">
          <div className="text-[20px] text-[#181E22]  flex justify-between ">
            <h2 className=" font-bold"> Create new secret key </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#000"
              viewBox="0 0 16 16"
              className="cursor-pointer"
              onClick={onClose}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>

          <div className="mt-3">
            <div>
              <input
                value={createApi}
                onChange={inputkey}
                placeholder="Enter Name"
                className="mt-3 text-black  rounded-[4px]  px-10 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] p-2 md:p-4"
              />
            </div>
          </div>

          <div className="mt-10 justify-end items-end  flex space-x-4">
            <div
              className="text-[#181E22] font-bold md:text-[16px] text-[12px] bg-[#B0B0B033] px-5 py-3 rounded-[4px] cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </div>
            <div
              className="md:text-[16px] text-[12px] bg-black text-white px-5 py-3 font-bold rounded-[4px] cursor-pointer"
              onClick={handleShowHiText}
            >
              Create secret key
            </div>
          </div>
          {screcetKeyPopup && <CreateScrecet onClose={onClose} />}
        </div>
      </div>
    </>
  );
};

export default CreateApi;
