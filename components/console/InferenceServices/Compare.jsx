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
    <div className="flex flex-col min-h-screen   px-5 relative">
      <div className="w-full h-full bg-[#0F1B2B]  rounded-[16px]">
        <div className="flex justify-between items-center mb-3 -z-10">
          <div className="text-[26px]  font-bold mt-7 px-10 mb-5 text-[#8BFFDD] ">
            Compare
          </div>
          <div className="bg-[#ffffff30] mt-7 py-2 px-8 rounded-[13px] border border-white m-7">
            Clear
          </div>
        </div>
        <div className="flex">
          {" "}
          <div
            className="w-[60%] flex flex-col justify-between border-t-[1px] border-t-[#80FFF7] border-b-[1px] border-b-[#80FFF7] ml-8  p-5 border-r-[#80FFF7] border-r-[1px] rounded-l-[16px] border-l-[#80FFF7] border-l-[1px] z-0"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <div className="w-full  border-[#80FFF7] flex flex-col pr-3">
              <div className="flex justify-between items-center p-2 ">
                <div>
                  <select className="bg-white bg-opacity-15 rounded-lg px-4 py-3 ">
                    <option className="text-black">Mistral</option>
                    <option className="text-black">LAMA 3</option>
                    <option className="text-black">Claude</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      onClick={toggleInstructionLeftPopup}
                      className="cursor-pointer "
                      style={{ transform: "rotate(90deg)" }}
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      onClick={togglePopup1}
                      className="cursor-pointer hover:rotate-180 duration-500"
                    >
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* <div className="bg-[#162231] p-5 mx-4 flex flex-col gap-2 mt-2 rounded-[16px] ">
                <div className="flex justify-between w-full">
                  <div className="text-xs">SYSTEM</div>
                  <div className="text-xs text-gray-500">0/4000</div>
                </div>
                <input
                  value={sysInp1}
                  onChange={(e) => setSysInp1(e.target.value)}
                  placeholder="Enter system instructions"
                  className="w-full bg-transparent resize-none focus:outline-none focus-visible:outline-none"
                />
              </div> */}
            </div>
          </div>
          <div
            className="w-[60%] flex flex-col justify-between border-b-[#80FFF7] border-t-[#80FFF7] border-t-[1px] border-b-[1px]  mr-9  p-5 border-r-[#80FFF7] border-r-[1px] rounded-r-[16px] z-1"
            style={{ overflowY: "auto" }}
          >
            <div className="w-full  border-[#80FFF7] flex flex-col pr-3">
              <div className="flex justify-between items-center p-2">
                <div>
                  <select className="bg-white bg-opacity-15 rounded-lg px-4 py-3 ">
                    <option className="text-black">Mistral</option>
                    <option className="text-black">LAMA 3</option>
                    <option className="text-black">Claude</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      onClick={toggleInstructionRightPopup}
                      className="cursor-pointer "
                      style={{ transform: "rotate(90deg)" }}
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      onClick={togglePopup2}
                      className="cursor-pointer hover:rotate-180 duration-500"
                    >
                      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* <div className="bg-[#162231] p-5  mx-4 flex flex-col gap-2 mt-2 rounded-[16px] ">
                <div className="flex justify-between w-full">
                  <div className="text-xs">SYSTEM</div>
                  <div className="text-xs text-gray-500">0/4000</div>
                </div>
                <input
                  value={sysInp1}
                  onChange={(e) => setSysInp1(e.target.value)}
                  placeholder="Enter system instructions"
                  className="w-full bg-transparent resize-none focus:outline-none focus-visible:outline-none"
                />
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex  gap-0 ">
          {" "}
          <div
            className="mb-[14rem] w-[55%] h-[80vh] ml-7 mt-7 p-10 rounded-[14px] bg-[#ffffff20] mr-2"
            style={{ overflowY: "auto" }}
          >
            According to the 2022 Global Happiness Report, the top 3 happiest
            countries in the world are: <br />
            1. Finland: Finland has consistently ranked as one of the happiest
            countries in the world. It has a high level of social support, low
            levels of corruption, and a high standard of living.
            <br /> 2. Denmark: Denmark is known for its high standard of living,
            generous social welfare system, and high level of social support.
            The country also has a strong culture of work-life balance and a
            high level of trust in institutions.
            <br /> 3. Switzerland: Switzerland is a neutral and stable country
            with a high standard of living. It has a low level of corruption, a
            high level of social support, and a strong economy. The country also
            has a high level of trust in institutions and a strong culture of
            social cohesion. These countries have a high score on the Gross
            Domestic Happiness (GDH) index, which measures happiness and
            well-being across countries. The GDH index takes into account
            factors such as GDP per capita, social support, healthy life
            expectancy, freedom to make life choices, generosity, and
            perceptions of corruption and trust in institutions
          </div>
          <div
            className="mb-[14rem] w-[55%] h-[80vh] ml-7 mt-7 p-10 rounded-[14px] bg-[#ffffff20] mr-6"
            style={{ overflowY: "auto" }}
          >
            According to the 2022 Global Happiness Report, the top 3 happiest
            countries in the world are:<br/> 1. Finland: Finland has consistently
            ranked as one of the happiest countries in the world. It has a high
            level of social support, low levels of corruption, and a high
            standard of living. <br/>2. Denmark: Denmark is known for its high
            standard of living, generous social welfare system, and high level
            of social support. The country also has a strong culture of
            work-life balance and a high level of trust in institutions.<br/> 3.
            Switzerland: Switzerland is a neutral and stable country with a high
            standard of living. It has a low level of corruption, a high level
            of social support, and a strong economy. The country also has a high
            level of trust in institutions and a strong culture of social
            cohesion. These countries have a high score on the Gross Domestic
            Happiness (GDH) index, which measures happiness and well-being
            across countries. The GDH index takes into account factors such as
            GDP per capita, social support, healthy life expectancy, freedom to
            make life choices, generosity, and perceptions of corruption and
            trust in institutions
          </div>
        </div>
        <div className="fixed w-[50%] bg-[#0F1B2B]  ml-[14%]  bottom-0  mx-auto mb-4 border border-[#80FFF7] p-3 flex justify-center items-center rounded-xl z-50">
          <div className="flex justify-between w-full items-end gap-3">
            <div className="w-full">
              <textarea
                rows={3}
                value={message}
                onChange={updateText}
                placeholder="Enter your message..."
                className="w-full bg-transparent p-3 resize-none focus:outline-none focus-visible:outline-none"
              />
            </div>
            <div className="bg-[#80FFF740] py-0.5 px-3 border border-[#80FFF7] rounded-md cursor-pointer">
              Enter
            </div>
          </div>
        </div>
      </div>
      {showPopupLeftside && (
        <Popup1
          onClose={() => {
            setShowPopupLeftside(false);
          }}
        />
      )}
      {showPopupRightside && (
        <Popup2
          onClose={() => {
            setShowRightLeftside(false);
          }}
        />
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
        className="absolute p-10   rounded-[20px] mt-[13rem] ml-[10rem] shadow-lg bg-[#162231] w-1/3"
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
        className="absolute p-10 transform translate-x-2/3 -translate-y-20   rounded-[20px]   shadow-lg bg-[#162231] w-1/3"
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
