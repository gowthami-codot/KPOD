"use client";
import { useState } from "react";
import { Slider } from "@nextui-org/react";

const Compare = () => {
  const [message, setMessage] = useState("");
  const [sysInp1, setSysInp1] = useState("");
  const [sysInp2, setSysInp2] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [showInstructionsPopup, setShowInstructionsPopup] = useState(false);

  const systemInput1 = (e: any) => {
    setSysInp1(e.target.value);
  };

  const systemInput2 = (e: any) => {
    setSysInp2(e.target.value);
  };

  const updateText = (e: any) => {
    setMessage(e.target.value);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleInstructionPopup = () => {
    setShowInstructionsPopup(!showInstructionsPopup);
  }

  return (
    <div className="flex flex-col min-h-screen px-5 relative">
      <div className="flex justify-between items-center mb-3 -z-10">
        <div className="text-xl font-bold mb-3">Compare</div>
        <div className="bg-[#ffffff30] p-0.5 rounded-lg border border-white px-2">
          Clear
        </div>
      </div>
      <div className="w-full flex justify-between border border-[#80FFF7] p-5 rounded-xl z-0">
        <div className="w-full border-r border-[#80FFF7] flex flex-col pr-3">
          <div className="flex justify-between items-center p-3">
            <div>
              <select className="bg-[#ffffff20] rounded-lg p-0.5">
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
                  onClick={toggleInstructionPopup}
                  className="cursor-pointer"
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
                  onClick={togglePopup}
                  className="cursor-pointer hover:rotate-180 duration-500"
                >
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[#162231] p-3 flex flex-col gap-2 rounded-lg">
            <div className="text-xs">SYSTEM</div>
            <input
              value={sysInp1}
              onChange={(e) => setSysInp1(e.target.value)}
              placeholder="Enter system instructions"
              className="w-full bg-transparent resize-none focus:outline-none focus-visible:outline-none"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col pl-3">
            <div className="flex justify-between items-center p-3">
              <div>
                <select className="bg-[#ffffff20] rounded-lg p-0.5">
                  <option className="text-black">LAMA 3</option>
                  <option className="text-black">Mistral</option>
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
                    onClick={toggleInstructionPopup}
                    className="cursor-pointer"
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
                    onClick={togglePopup}
                    className="cursor-pointer hover:rotate-180 duration-500"
                  >
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#162231] p-3 flex flex-col gap-2 rounded-lg">
              <div className="text-xs">SYSTEM</div>
              <input
                value={sysInp2}
                onChange={(e) => setSysInp2(e.target.value)}
                placeholder="Enter system instructions"
                className="w-full bg-transparent resize-none focus:outline-none focus-visible:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 md:left-96 mx-5 right-0 mb-4 border border-[#80FFF7] p-3 flex justify-center items-center rounded-xl z-50">
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
      {showPopup && <Popup />}
      {showInstructionsPopup && <ClearInstructionsPopup />}
    </div>
  );
};

export default Compare;

const Popup = () => {
  return (
    <div className="absolute p-4 rounded shadow-lg bg-[#162231] w-1/3">
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
        <div className="my-1">Temperature</div>
        <Slider
          size="sm"
          color="foreground"
          step={0.01}
          maxValue={1}
          minValue={0}
          aria-label="Temperature"
          defaultValue={0.6}
          className="max-w-md"
        />
      </div>
      <div>
        <div className="my-1">Maximum Tokens</div>
        <Slider
          size="sm"
          color="foreground"
          step={0.01}
          maxValue={1}
          minValue={0}
          aria-label="Max Tokens"
          defaultValue={0.6}
          className="max-w-md"
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
        <div className="my-1">TOP P</div>
        <Slider
          size="sm"
          color="foreground"
          step={0.01}
          maxValue={1}
          minValue={0}
          aria-label="Max Tokens"
          defaultValue={0.6}
          className="max-w-md"
        />
      </div>
      <div>
        <div className="my-1">Frequence Penalty</div>
        <Slider
          size="sm"
          color="foreground"
          step={0.01}
          maxValue={1}
          minValue={0}
          aria-label="Max Tokens"
          defaultValue={0.6}
          className="max-w-md"
        />
      </div>
      <div>
        <div className="my-1">Presence Penalty</div>
        <Slider
          size="sm"
          color="foreground"
          step={0.01}
          maxValue={1}
          minValue={0}
          aria-label="Max Tokens"
          defaultValue={0.6}
          className="max-w-md"
        />
      </div>
    </div>
  );
};

const ClearInstructionsPopup = () => {
  return (
    <div className="absolute p-4 rounded shadow-lg bg-[#162231] w-1/5">
      Clear system Instructions
    </div>
  );
};
