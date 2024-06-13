import { useState, useEffect, useRef } from "react";
import { Slider } from "@nextui-org/react";

const Popup1 = ({ onClose, handleChange, values, model }) => {
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

  useEffect(() => {
    setTemperature(values.temperature);
    setToken(values.maxToken);
    setTop(values.topP);
    setPenalty(values.frequencyPenalty);
    setpresence(values.presencePenalty);
  }, [values])


  const [temperature, setTemperature] = useState(3);
  const [tokens, setToken] = useState(6);
  const [top, setTop] = useState(4);
  const [penalty, setPenalty] = useState(7);
  const [presence, setpresence] = useState(4);

  const handleValueChange = (position, field, value) => {
    handleChange(position, field, value);
    switch (field) {
      case "temperature":
        setTemperature(value);
        break;
      case "maxToken":
        setToken(value);
        break;
      case "topP":
        setTop(value);
        break;
      case "frequencyPenalty":
        setPenalty(value);
        break;
      case "presencePenalty":
        setpresence(value);
        break;
    }
  }
  return (
    <div className="absolute inset-0 flex  items-start justify-start bg-[#3d3939] bg-opacity-50 z-50 ">
      <div
        ref={popupRef}
        className="absolute p-10 rounded-[20px] md:mt-[12rem] mt-[10rem] md:ml-[20vw] ml-[2vh] shadow-lg bg-[#F3F4F5] w-[90%] md:w-1/3"
      >
        <div className="flex items-center  justify-between w-full">
          <div className="text-black">Configuration</div>
          {/* <div className="flex items-center text-black">
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
          </div> */}
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
            step={values.tempStep}
            maxValue={values.tempMax}
            minValue={values.tempMin}
            aria-label="Temperature"
            defaultValue={values.temperature}
            className="max-w-md"
            onChange={(newValue) => { handleValueChange("left", "temperature", newValue) }}
            isDisabled={model==="Krutrim-spectre-v2"}
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
            step={values.maxTokenStep}
            maxValue={values.maxTokenMax}
            minValue={values.maxTokenMin}
            aria-label="Max Tokens"
            defaultValue={values.maxToken}
            className="max-w-md"
            onChange={(newValue) => { handleValueChange("left", "maxToken", newValue) }}
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
            step={values.topPStep}
            maxValue={values.topPMax}
            minValue={values.topPMin}
            aria-label="TOP P"
            defaultValue={values.topP}
            className="max-w-md"
            onChange={(newValue) => { handleValueChange("left", "topP", newValue) }}
            isDisabled={model==="Krutrim-spectre-v2"}
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
            step={values.fpStep}
            maxValue={values.fpMax}
            minValue={values.fpMin}
            aria-label="Frequence Penalty"
            defaultValue={values.frequencyPenalty}
            className="max-w-md"
            onChange={(newValue) => { handleValueChange("left", "frequencyPenalty", newValue) }}
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
            step={values.ppstep}
            maxValue={values.ppMax}
            minValue={values.ppMin}
            aria-label="Presence Penalty"
            defaultValue={values.presencePenalty}
            className="max-w-md"
            onChange={(newValue) => { handleValueChange("right", "presencePenalty", newValue) }}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup1;