import { useState, useEffect, useRef } from "react";
import { Slider } from "@nextui-org/react";

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
    <div className="absolute inset-0 flex  items-center  justify-center bg-[#3d3939] bg-opacity-50 z-0">
      <div
        ref={popupRef}
        className="absolute p-10  rounded-[20px] top-[6%] md:right-[5%] md:mt-[10rem] mt-[8rem] md:ml-[10vw] ml-[0vh] shadow-lg bg-[#F3F4F5] w-[90%] md:w-1/3"
      >
        <div className="flex items-center  justify-between w-full">
          <div className="text-black">Configuration</div>
          <div className="flex items-center text-black">
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
          <div className="my-1 text-black">
            Temperature :
            <span className="ml-5 text-black font-bold">{temperature}</span>
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
          <div className="my-1 text-black">
            Maximum Tokens :
            <span className="ml-5 text-[black] font-bold">{tokens}</span>{" "}
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
          <div className="text-black">Stop sequences</div>
          <div className="text-sm text-gray-500">
            Enter sequence and press Tab
          </div>
          <input className="my-2 border-[black] border-2 text-[black] p-1 bg-[#ffffff20] rounded-md focus:outline-none focus-visible:outline-none" />
        </div>
        <div>
          <div className="my-1 text-black">
            Top P :<span className="ml-5 text-[black] font-bold">{top}</span>
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
          <div className="my-1 text-black">
            Frequence Penalty :
            <span className="ml-5 text-[black] font-bold">{penalty}</span>
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
          <div className="my-1 text-black">
            Presence Penalty
            <span className="ml-5 text-[black] font-bold">{presence}</span>
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

export default Popup2;
