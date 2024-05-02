"use client";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Slider } from "@nextui-org/react";

const Compare = () => {
  const [message, setMessage] = useState("");
  const [sysInp1, setSysInp1] = useState("");
  const [sysInp2, setSysInp2] = useState("");

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
    <div className="flex  lg:flex-col bg-[#FFFFFF] min-h-screen px-5 relative">
      <div className="w-full h-[150%] bg-[#FFFFFF]  ">
        <div className="flex justify-between items-center mb-3 ">
          <div className="lg:text-[26px] md:text-[19px] lg:mt-10    font-bold mt-10 px-10 mb-5 text-[#181E22] ">
            Compare
          </div>
          <div className="bg-[#F3F4F5]  flex space-x-3 justify-center my-auto items-center   text-[#687986]  mt-7 py-3 px-4 rounded-[4px] border border-white m-7">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="font-bold"
            >
              <path
                d="M12.3877 2.58112L11.2011 1.40112L4.60774 8.00112L11.2077 14.6011L12.3877 13.4211L6.96774 8.00112L12.3877 2.58112Z"
                fill="#687986"
              />
            </svg>{" "}
            <div className="font-medium">Clear</div>
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="font-bold"
            >
              <path
                d="M5.04097 2.58112L6.22764 1.40112L12.821 8.00112L6.22097 14.6011L5.04097 13.4211L10.461 8.00112L5.04097 2.58112Z"
                fill="#687986"
              />
            </svg>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-5">
          {" "}
          <div className="lg:w-[60%] w-full  flex flex-col  bg-[#F3F4F5] justify-between    mr-3  px-2 py-2 border-[#F3F4F5]  rounded-[8px] z-1">
            <div className="w-full   flex flex-col ">
              <div className="flex justify-between items-center p-2 ">
                <div className="flex justify-center space-x-10 items-center">
                  <div class="custom-select  ">
                    <select className="bg-[#FFFFFF]  font-semibold  text-[#000000] rounded-[4px] px-5">
                      <option className="text-black py-2">Mistral</option>
                      <option className="text-black">LAMA 3</option>
                      <option className="text-black">Claude</option>
                    </select>
                    <svg
                      class="select-arrow"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.71436 3.5L6.71436 8.5L11.7144 3.5H1.71436Z"
                        fill="#687986"
                      />
                    </svg>
                  </div>

                  <div></div>
                </div>
                <div className="flex gap-1">
                  <div className="bg-[#FFFFFF] rounded-[4px] p-2">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      
                    >
                      <path
                        d="M11.9644 4.58325C11.9644 5.27361 11.4047 5.83325 10.7144 5.83325C10.024 5.83325 9.46436 5.27361 9.46436 4.58325C9.46436 3.8929 10.024 3.33325 10.7144 3.33325C11.4047 3.33325 11.9644 3.8929 11.9644 4.58325Z"
                        fill="#687986"
                      />
                      <path
                        d="M11.9644 15.4166C11.9644 16.1069 11.4047 16.6666 10.7144 16.6666C10.024 16.6666 9.46436 16.1069 9.46436 15.4166C9.46436 14.7262 10.024 14.1666 10.7144 14.1666C11.4047 14.1666 11.9644 14.7262 11.9644 15.4166Z"
                        fill="#687986"
                      />
                      <path
                        d="M11.9644 9.99992C11.9644 10.6903 11.4047 11.2499 10.7144 11.2499C10.024 11.2499 9.46436 10.6903 9.46436 9.99992C9.46436 9.30956 10.024 8.74992 10.7144 8.74992C11.4047 8.74992 11.9644 9.30956 11.9644 9.99992Z"
                        fill="#687986"
                      />
                    </svg>
                  </div>
                  <div className="bg-[#FFFFFF] rounded-[4px] p-2">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                     
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer  "
                    >
                      <path
                        d="M8.46436 4.75L6.02686 4.1875L4.90186 5.3125L5.46436 7.75L3.21436 9.25V10.75L5.46436 12.25L4.90186 14.6875L6.02686 15.8125L8.46436 15.25L9.96436 17.5H11.4644L12.9644 15.25L15.4019 15.8125L16.5269 14.6875L15.9644 12.25L18.2144 10.75V9.25L15.9644 7.75L16.5269 5.3125L15.4019 4.1875L12.9644 4.75L11.4644 2.5H9.96436L8.46436 4.75Z"
                        stroke="#687986"
                        stroke-width="1.66667"
                      />
                      <path
                        d="M13.2144 10C13.2144 11.3807 12.0951 12.5 10.7144 12.5C9.33364 12.5 8.21436 11.3807 8.21436 10C8.21436 8.61929 9.33364 7.5 10.7144 7.5C12.0951 7.5 13.2144 8.61929 13.2144 10Z"
                        stroke="#687986"
                        stroke-width="1.66667"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFFFFF]  py-3 px-5 mx-2 mb-2 flex flex-col gap-2 mt-6 rounded-[8px] ">
                <div className="flex justify-between w-full border-b-[1px] pb-3 border-b-[#F3F4F5]">
                  <div className="text-xs text-[#000000] pt-1 font-medium">
                    System
                  </div>
                  <div className="text-xs text-gray-500 pt-1 text-[14px] font-medium">
                    0/4000
                  </div>
                </div>
                <input
                  value={sysInp1}
                  onChange={(e) => setSysInp1(e.target.value)}
                  placeholder="Enter system instructions"
                  className="w-full bg-transparent resize-none input-with-small-placeholder focus:outline-none focus-visible:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[60%] w-full flex flex-col bg-[#F3F4F5] justify-between    mr-3  px-2 py-2 border-[#F3F4F5]  rounded-[8px] z-1">
            <div className="w-full   flex flex-col ">
              <div className="flex justify-between items-center p-2 ">
                <div className="flex justify-center space-x-10 items-center">
                  <div class="custom-select  ">
                    <select className="bg-[#FFFFFF]  font-semibold  text-[#000000] rounded-[4px] px-5">
                      <option className="text-black py-2">Mistral</option>
                      <option className="text-black">LAMA 3</option>
                      <option className="text-black">Claude</option>
                    </select>
                    <svg
                      class="select-arrow"
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.71436 3.5L6.71436 8.5L11.7144 3.5H1.71436Z"
                        fill="#687986"
                      />
                    </svg>
                  </div>

                  <div></div>
                </div>
                <div className="flex gap-1">
                  <div className="bg-[#FFFFFF] rounded-[4px] p-2">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      
                    >
                      <path
                        d="M11.9644 4.58325C11.9644 5.27361 11.4047 5.83325 10.7144 5.83325C10.024 5.83325 9.46436 5.27361 9.46436 4.58325C9.46436 3.8929 10.024 3.33325 10.7144 3.33325C11.4047 3.33325 11.9644 3.8929 11.9644 4.58325Z"
                        fill="#687986"
                      />
                      <path
                        d="M11.9644 15.4166C11.9644 16.1069 11.4047 16.6666 10.7144 16.6666C10.024 16.6666 9.46436 16.1069 9.46436 15.4166C9.46436 14.7262 10.024 14.1666 10.7144 14.1666C11.4047 14.1666 11.9644 14.7262 11.9644 15.4166Z"
                        fill="#687986"
                      />
                      <path
                        d="M11.9644 9.99992C11.9644 10.6903 11.4047 11.2499 10.7144 11.2499C10.024 11.2499 9.46436 10.6903 9.46436 9.99992C9.46436 9.30956 10.024 8.74992 10.7144 8.74992C11.4047 8.74992 11.9644 9.30956 11.9644 9.99992Z"
                        fill="#687986"
                      />
                    </svg>
                  </div>
                  <div className="bg-[#FFFFFF] rounded-[4px] p-2">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                     
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer  "
                    >
                      <path
                        d="M8.46436 4.75L6.02686 4.1875L4.90186 5.3125L5.46436 7.75L3.21436 9.25V10.75L5.46436 12.25L4.90186 14.6875L6.02686 15.8125L8.46436 15.25L9.96436 17.5H11.4644L12.9644 15.25L15.4019 15.8125L16.5269 14.6875L15.9644 12.25L18.2144 10.75V9.25L15.9644 7.75L16.5269 5.3125L15.4019 4.1875L12.9644 4.75L11.4644 2.5H9.96436L8.46436 4.75Z"
                        stroke="#687986"
                        stroke-width="1.66667"
                      />
                      <path
                        d="M13.2144 10C13.2144 11.3807 12.0951 12.5 10.7144 12.5C9.33364 12.5 8.21436 11.3807 8.21436 10C8.21436 8.61929 9.33364 7.5 10.7144 7.5C12.0951 7.5 13.2144 8.61929 13.2144 10Z"
                        stroke="#687986"
                        stroke-width="1.66667"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFFFFF]  py-3 px-5 mx-2 mb-2 flex flex-col gap-2 mt-6 rounded-[8px] ">
                <div className="flex justify-between w-full border-b-[1px] pb-3 border-b-[#F3F4F5]">
                  <div className="text-xs text-[#000000] pt-1 font-medium">
                    System
                  </div>
                  <div className="text-xs text-gray-500 pt-1 text-[14px] font-medium">
                    0/4000
                  </div>
                </div>
                <input
                  value={sysInp1}
                  onChange={(e) => setSysInp1(e.target.value)}
                  placeholder="Enter system instructions"
                  className="w-full bg-transparent resize-none input-with-small-placeholder focus:outline-none focus-visible:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-2 mt-52  justify-end top-0 bottom-0 items-end gap-0 "> 
       <div className=" w-full bg-[#F3F4F5]  bottom-0 mx-auto mb-1 p-3 flex flex-grow justify-center items-center rounded-[8px] z-50">
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

const Popup1 = ({ onClose }) => {
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

  const [temperature, setTemperature] = useState(3);

  const handleTemperatureChange = (value) => {
    setTemperature(value);
  };

  const [tokens, setToken] = useState(6);

  const handleToken = (value) => {
    setToken(value);
  };

  const [top, setTop] = useState(4);

  const handleTop = (value) => {
    setTop(value);
  };
  const [penalty, setPenalty] = useState(7);

  const handlePenalty = (value) => {
    setPenalty(value);
  };
  const [presence, setpresence] = useState(4);

  const handlePresence = (value) => {
    setpresence(value);
  };
  return (
    <div className="absolute inset-0 flex  items-start justify-start bg-[#3d3939] bg-opacity-50">
      <div
        ref={popupRef}
        className="absolute p-10 rounded-[20px] mt-[12rem] md:ml-[10vw] shadow-lg bg-[#162231] w-full md:w-1/3"
      >
        <div className="flex items-center justify-between w-full">
          <div>Configuration</div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="text-green-500"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg>
            Sync
          </div>
        </div>
        <div className="text-xs text-gray-400">
          Changes apply to all the models
        </div>
        <div>
          <div className="my-1">
            Temperature :
            <span className="ml-5 text-[#8BFFDD] font-bold">{temperature}</span>
          </div>
          <Slider
            size="sm"
            color="foreground"
            step={1}
            maxValue={10}
            minValue={0}
            aria-label="Temperature"
            defaultValue={3}
            className="max-w-md"
            onChange={handleTemperatureChange}
          />
        </div>
        <div>
          <div className="my-1">
            Maximum Tokens :
            <span className="ml-5 text-[#8BFFDD] font-bold">{tokens}</span>{" "}
          </div>
          <Slider
            size="sm"
            color="foreground"
            step={1}
            maxValue={10}
            minValue={0}
            aria-label="token"
            defaultValue={6}
            className="max-w-md"
            onChange={handleToken}
          />
        </div>
        <div className="flex flex-col w-full">
          <div>Stop sequences</div>
          <div className="text-sm text-gray-500">
            Enter sequence and press Tab
          </div>
          <input className="my-2 p-1 bg-[#ffffff20] rounded-md focus:outline-none focus-visible:outline-none" />
        </div>
        <div>
          <div className="my-1">
            Top P :<span className="ml-5 text-[#8BFFDD] font-bold">{top}</span>
          </div>
          <Slider
            size="sm"
            color="foreground"
            step={1}
            maxValue={10}
            minValue={0}
            aria-label="top"
            defaultValue={3}
            className="max-w-md"
            onChange={handleTop}
          />
        </div>

        <div>
          <div className="my-1">
            Frequence Penalty :
            <span className="ml-5 text-[#8BFFDD] font-bold">{penalty}</span>
          </div>
          <Slider
            size="sm"
            color="foreground"
            step={1}
            maxValue={10}
            minValue={0}
            aria-label="top"
            defaultValue={7}
            className="max-w-md"
            onChange={handlePenalty}
          />
        </div>
        <div>
          <div className="my-1">
            Presence Penalty
            <span className="ml-5 text-[#8BFFDD] font-bold">{presence}</span>
          </div>
          <Slider
            size="sm"
            color="foreground"
            step={1}
            maxValue={10}
            minValue={0}
            aria-label="top"
            defaultValue={3}
            className="max-w-md"
            onChange={handlePresence}
          />
        </div>
      </div>
    </div>
  );
};
const Popup2 = ({ onClose }) => {
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
  const [temperature, setTemperature] = useState(3);

  const handleTemperatureChange = (value) => {
    setTemperature(value);
  };

  const [tokens, setToken] = useState(6);

  const handleToken = (value) => {
    setToken(value);
  };
  const [top, setTop] = useState(4);

  const handleTop = (value) => {
    setTop(value);
  };
  const [penalty, setPenalty] = useState(7);

  const handlePenalty = (value) => {
    setPenalty(value);
  };
  const [presence, setpresence] = useState(4);

  const handlePresence = (value) => {
    setpresence(value);
  };
  return (
    <div className="absolute inset-0 flex  items-center  justify-center bg-[#3d3939] bg-opacity-50">
      <div
        ref={popupRef}
        className="absolute p-10  rounded-[20px] top-[10%] md:right-[5%] mt-24 shadow-lg bg-[#162231] w-full md:w-1/3"
      >
        <div className="flex items-center justify-between w-full ">
          <div>Configuration</div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="text-green-500"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg>
            Sync
          </div>
        </div>
        <div className="text-xs text-gray-400">
          Changes apply to all the models
        </div>
        <div>
          <div className="my-1">
            Temperature :
            <span className="ml-5 text-[#8BFFDD] font-bold">{temperature}</span>
          </div>
          <Slider
            size="sm"
            color="foreground"
            step={1}
            maxValue={10}
            minValue={0}
            aria-label="Temperature"
            defaultValue={3}
            className="max-w-md"
            onChange={handleTemperatureChange}
          />
        </div>
        <div>
          <div className="my-1">
            Maximum Tokens :
            <span className="ml-5 text-[#8BFFDD] font-bold">{tokens}</span>{" "}
          </div>
          <Slider
            size="sm"
            color="foreground"
            step={1}
            maxValue={10}
            minValue={0}
            aria-label="token"
            defaultValue={6}
            className="max-w-md"
            onChange={handleToken}
          />
        </div>
        <div className="flex flex-col w-full">
          <div>Stop sequences</div>
          <div className="text-sm text-gray-500">
            Enter sequence and press Tab
          </div>
          <input className="my-2 p-1 bg-[#ffffff20] rounded-md focus:outline-none focus-visible:outline-none" />
        </div>
        <div>
          <div className="my-1">
            Top P :<span className="ml-5 text-[#8BFFDD] font-bold">{top}</span>
          </div>
          <Slider
            size="sm"
            color="foreground"
            step={1}
            maxValue={10}
            minValue={0}
            aria-label="top"
            defaultValue={3}
            className="max-w-md"
            onChange={handleTop}
          />
        </div>

        <div>
          <div className="my-1">
            Frequence Penalty :
            <span className="ml-5 text-[#8BFFDD] font-bold">{penalty}</span>
          </div>
          <Slider
            size="sm"
            color="foreground"
            step={1}
            maxValue={10}
            minValue={0}
            aria-label="top"
            defaultValue={7}
            className="max-w-md"
            onChange={handlePenalty}
          />
        </div>
        <div>
          <div className="my-1">
            Presence Penalty
            <span className="ml-5 text-[#8BFFDD] font-bold">{presence}</span>
          </div>
          <Slider
            size="sm"
            color="foreground"
            step={1}
            maxValue={10}
            minValue={0}
            aria-label="top"
            defaultValue={3}
            className="max-w-md"
            onChange={handlePresence}
          />
        </div>
      </div>
    </div>
  );
};

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
