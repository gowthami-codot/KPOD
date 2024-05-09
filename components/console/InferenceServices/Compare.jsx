"use client";
import { useState } from "react";
import { useEffect, useRef } from "react";

import ModelOne from "@/components/console/InferenceServices/CompareModels/ModelOne";
import ModelTwo from "@/components/console/InferenceServices/CompareModels/ModelTwo";
import Popup1 from "@/components/console/InferenceServices/ComparePopups/Popup1";
import Popup2 from "@/components/console/InferenceServices/ComparePopups/Popup2";

const Compare = () => {
  const [message, setMessage] = useState("");
  const [sysInp1, setSysInp1] = useState("");
  const [sysInp2, setSysInp2] = useState("");

  console.log(message);

  const [currentModel, setCurrentModel] = useState("modelOne");
  const toggleModel = () => {
    setCurrentModel(currentModel === "modelOne" ? "modelTwo" : "modelOne");
  };

  const [showPopupLeftside, setShowPopupLeftside] = useState(false);
  const [showPopupRightside, setShowRightLeftside] = useState(false);
  const [showInstructionsLeftPopup, setShowInstructionsLeftPopup] =
    useState(false);
  const [showInstructionsRightPopup, setShowInstructionsRightPopup] =
    useState(false);
  const handleClosePopupLeft = () => {
    setShowInstructionsLeftPopup(false);
  };
  const handleClosePopupRight = () => {
    setShowInstructionsRightPopup(false);
  };

  const systemInput1 = (e) => {
    setSysInp1(e.target.value);
  };

  const systemInput2 = (e) => {
    setSysInp2(e.target.value);
  };

  const updateText = (e) => {
    setMessage(e.target.value);
  };

  const togglePopup1 = () => {
    setShowPopupLeftside(!showPopupLeftside);
  };
  const togglePopup2 = () => {
    setShowRightLeftside(!showPopupRightside);
  };

  const toggleInstructionLeftPopup = () => {
    setShowInstructionsLeftPopup(!showInstructionsLeftPopup);
  };
  const toggleInstructionRightPopup = () => {
    setShowInstructionsRightPopup(!showInstructionsRightPopup);
  };

  return (
    <div className="flex md:mb-0 mb-[80px] md:flex-col bg-[#FFFFFF] w-full h-full min-h-screen px-5 md:ml-0 ">
      <div className="w-full h-[150%] bg-[#FFFFFF]   ">
        <div className="flex  md:flex-row flex-col justify-between items-center mb-3 ">
          <div className="lg:text-[26px] text-[20px]  lg:mt-10 font-bold mt-10 px-10 mb-5 text-[#181E22] ">
            Compare
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-4 md:mb-6 gap-4">
          <div className="w-full hidden md:flex"></div>
          <div className="bg-[#F3F4F5 flex space-x-3 justify-center my-auto items-center w-full md:w-fit   text-[#687986]  md:my-3 my-2 md:px-4 py-2 px-2 rounded-[4px] border border-gray-300">
            <div className="font-medium cursor-pointer">Clear</div>
          </div>
          <div className="flex md:hidden items-center justify-between">
            {currentModel === "modelTwo" && (
              <div className="flex items-center justify-between w-full">
                <div className="text-black cursor-pointer hover:translate-x-1 duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    onClick={toggleModel}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
                <div className="text-black">Model 2</div>
              </div>
            )}
            {currentModel === "modelOne" && (
              <div className="flex items-center justify-between w-full">
                <div className="text-black">Model 1</div>
                <div
                  className="text-black cursor-pointer hover:translate-x-1 duration-300"
                  onClick={toggleModel}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex md:hidden">
          <div className="flex flex-col md:flex-row ">
            {" "}
            {currentModel === "modelOne" && (
              <div
                className="md:w-[60%] w-full flex flex-col justify-between z-0 mb-10 h-[50vh]"
                style={{ overflowY: "auto" }}
              >
                <ModelOne togglePopup1={togglePopup1} />
              </div>
            )}
            {currentModel === "modelTwo" && (
              <div
                className="md:w-[60%] w-full flex flex-col justify-between md:pr-5 mb-10"
                style={{ overflowY: "auto" }}
              >
                <ModelTwo togglePopup2={togglePopup2} />
              </div>
            )}
          </div>
        </div>
        <div className="md:flex flex-col md:flex-row hidden">
          {" "}
          <div className="md:w-[60%] w-full  flex flex-col  bg-[#F3F4F5] justify-between mr-3  px-2 py-2 border-[#F3F4F5]  rounded-[8px]">
            <ModelOne togglePopup1={togglePopup1} />
          </div>
          <div className="lg:w-[60%] w-full flex flex-col bg-[#F3F4F5] justify-between    mr-3  px-2 py-2 border-[#F3F4F5]  rounded-[8px]">
            <ModelTwo togglePopup2={togglePopup2} />
          </div>
        </div>
        <div className="flex fixed w-[90%] mx-auto p-2 md:mt-[30%] mt-[40rem]  justify-end top-0 bottom-0 items-end gap-0 ">
          <div className=" w-full bg-[#F3F4F5]  bottom-0 mx-auto mb-1 p-3 flex flex-grow justify-center items-center rounded-[8px] z-0">
            <div className="flex justify-between w-full items-end gap-3">
              <div className="w-full">
                <textarea
                  rows={3}
                  value={message}
                  onChange={updateText}
                  placeholder="Enter system instructions..."
                  className="w-full input-with-small-placeholder bg-transparent p-3 resize-none focus:outline-none text-black focus-visible:outline-none"
                />
              </div>
              <div className=" py-2 px-8 bg-[#00000066] bg-opacity-45 rounded-[4px] cursor-pointer">
                Enter
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopupLeftside && (
        <Popup1 onClose={() => setShowPopupLeftside(false)} />
      )}
      {showPopupRightside && (
        <Popup2 onClose={() => setShowRightLeftside(false)} />
      )}

      {showInstructionsLeftPopup && (
        <ClearInstructionsPopupLeft onClose={handleClosePopupLeft} />
      )}
      {showInstructionsRightPopup && (
        <ClearInstructionsPopupRight onClose={handleClosePopupRight} />
      )}
    </div>
  );
};

export default Compare;

const ClearInstructionsPopupLeft = ({ onClose }) => {
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="inset-0 absolute  flex  justify-centre items-centre bg-[#3d3939] bg-opacity-50">
      {" "}
      <div
        ref={popupRef}
        className="absolute p-4 rounded-[14px] shadow-lg mt-[12rem] ml-[20rem] bg-[#162231] w-1/5"
      >
        Clear system Instructions
      </div>
    </div>
  );
};
const ClearInstructionsPopupRight = ({ onClose }) => {
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="inset-0 absolute  flex  justify-end items-end bg-[#3d3939] bg-opacity-50">
      {" "}
      <div
        ref={popupRef}
        className="absolute p-4 rounded-[14px] shadow-lg mb-[57rem] mr-[4rem] bg-[#162231] w-1/5"
      >
        Clear system Instructions
      </div>
    </div>
  );
};
