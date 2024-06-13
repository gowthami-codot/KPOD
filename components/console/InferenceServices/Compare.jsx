"use client";
import { useState } from "react";
import { useEffect, useRef } from "react";

import ModelOne from "@/components/console/InferenceServices/CompareModels/ModelOne";
import ModelTwo from "@/components/console/InferenceServices/CompareModels/ModelTwo";
import Popup1 from "@/components/console/InferenceServices/ComparePopups/Popup1";
import Popup2 from "@/components/console/InferenceServices/ComparePopups/Popup2";
import ModelSwitchPopup from "./ComparePopups/ModelSwitchPopup";

// --- start
// import { inference } from "@/utils/inference_service";
// import dynamic from "next/dynamic";
import { toast } from "sonner";
// import { validateMinimumCharacterLength } from "@/utils/regex";
// import remarkGfm from "remark-gfm";

// const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });
// --- end

const Compare = () => {
  const [message, setMessage] = useState("");
  const [sysInp1, setSysInp1] = useState("");
  const [sysInp2, setSysInp2] = useState("");

  const [currentModel, setCurrentModel] = useState("modelOne");
  const toggleModel = () => {
    setCurrentModel(currentModel === "modelOne" ? "modelTwo" : "modelOne");
  };

  const [showPopupLeftside, setShowPopupLeftside] = useState(false);
  const [showPopupRightside, setShowRightLeftside] = useState(false);
  const [showModelSwitchPopup, setShowModelSwitchPopup] = useState(false);
  const [showInstructionsLeftPopup, setShowInstructionsLeftPopup] =
    useState(false);
  const [showInstructionsRightPopup, setShowInstructionsRightPopup] =
    useState(false);
  const [modelToBeSwitched, setModelToBeSwitched] = useState({
    side: null,
    model: null,
  });

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

  const [EnterKeyText, setEnterKeyText] = useState("Enter");
  const [isDisabled, setIsDisabled] = useState(false);

  const [selectedModelLeft, setSelectedModelLeft] =
    useState("Krutrim-spectre-v2");
  const [selectedModelRight, setSelectedModelRight] = useState(
    "Meta-Llama-3-8B-Instruct"
  );
  const [conversationLeft, setConversationLeft] = useState([]);
  const [conversationRight, setConversationRight] = useState([]);
  const [processing, setProcessing] = useState(false);

  const handleKeyPress = (event) => {
    // Check if Ctrl+Enter was pressed
    if (event.key === "Enter" && event.ctrlKey) {
      event.preventDefault(); // Prevent the default action (new line)
      sendMessage();
    }
  };
  // -- start

  const [isVisibleLeft, setIsVisibleLeft] = useState(false);
  const [isVisibleRight, setIsVisibleRight] = useState(false);

  var defaultParamsKrutrim = {
    temperature: 0.9,
    tempMin: 0,
    tempMax: 2,
    tempStep: 0.01,
    maxToken: 512,
    maxTokenMin: 1,
    maxTokenMax: 2048,
    maxTokenStep: 1,
    topP: 0.9,
    topPMin: 0,
    topPMax: 1,
    topPStep: 0.01,
    frequencyPenalty: 0,
    fpMin: -2,
    fpMax: 2,
    fpStep: 0.01,
    presencePenalty: 0,
    ppMin: -2,
    ppMax: 2,
    ppstep: 0.01,
  };

  var defaultParams = {
    temperature: 1,
    tempMin: 0,
    tempMax: 2,
    tempStep: 0.01,

    maxToken: 512,
    maxTokenMin: 1,
    maxTokenMax: 2048,
    maxTokenStep: 1,

    topP: 1,
    topPMin: 0,
    topPMax: 1,
    topPStep: 0.01,

    frequencyPenalty: 0,
    fpMin: -2,
    fpMax: 2,
    fpStep: 0.01,

    presencePenalty: 0,
    ppMin: -2,
    ppMax: 2,
    ppstep: 0.01,
  };

  const [paramsLeft, setParamsLeft] = useState({ ...defaultParamsKrutrim });

  const [paramsRight, setParamsRight] = useState({ ...defaultParams });

  const setParams = (position, field, value) => {
    if (typeof value === "object" && value instanceof Array) {
      value = value[0];
    }

    var setValue = position === "left" ? setParamsLeft : setParamsRight;
    var params = position === "left" ? paramsLeft : paramsRight;
    params[field] = value;
    setValue(params);
  };

  const doInference = async (position) => {
    const newUserMessage = { sender: "user", text: message };
    var conversation =
      position === "left" ? conversationLeft : conversationRight;
    var setConversation =
      position === "left" ? setConversationLeft : setConversationRight;
    var model = position === "left" ? selectedModelLeft : selectedModelRight;
    let filtered_msg = conversation;

    if (conversation.length >= 2) {
      // Get the latest 4 groups of strings
      filtered_msg = conversation.slice(-2);
    }

    console.log(conversation.length);
    console.log(filtered_msg);
    var inputMsg = [...filtered_msg, newUserMessage];
    var params = position === "left" ? paramsLeft : paramsRight;
    setConversation(inputMsg);

    return inference(model, inputMsg, params).then(async (stream) => {
      if (!stream) {
        var visibility =
          position === "left" ? setIsVisibleLeft : setIsVisibleRight;
        visibility(true);
        console.log("something happen. Please regenerate");
        return;
      }

      var conversationData = [
        ...filtered_msg,
        { sender: "user", text: message },
      ];

      const reader = stream.getReader();
      const decoder = new TextDecoder();

      let text = "";
      let output = { sender: "backend", text: text };
      let buffer = "";

      let tempBuffer = "";

      while (true) {
        const { value, done } = await reader.read();

        buffer = decoder.decode(value, { stream: true });

        //console.log(buffer);

        if (!done && !buffer.endsWith("\n")) {
          //console.log("===================fractional packets detected=========================");
          tempBuffer += buffer;
          continue;
        } else {
          buffer = tempBuffer + buffer;
          tempBuffer = "";
        }

        if (done) {
          // Handle any remaining data in buffer
          try {
            if (buffer.trim()) {
              const result = JSON.parse(buffer);
              text += result.choices[0].delta.content;
              output = { sender: "backend", text: text };
              setConversation([...conversationData, output]);
            }
          } catch (err) {
            console.error("Final JSON parse error:", err, buffer);
          }
          break;
        }

        // Process complete messages in buffer
        let eolIndex;
        while ((eolIndex = buffer.indexOf("\n")) >= 0) {
          const line = buffer.slice(0, eolIndex).trim();
          buffer = buffer.slice(eolIndex + 1);

          if (line.startsWith("data: ")) {
            const jsonData = line.substring(6);
            try {
              const data = JSON.parse(jsonData);
              if (data.choices[0].delta.content) {
                text += data.choices[0].delta.content;
                output = { sender: "backend", text: text };
                setConversation([...conversationData, output]);
              }
            } catch (err) {
              console.log("JSON parse error:", err, jsonData); //TODOS: enable this
            }
          }
        }
      }
    });
  };
  const clearErrorBanner = async () => {
    setIsVisibleLeft(false);
    setIsVisibleRight(false);
  };
  const clearContent = async () => {
    clearErrorBanner();
    if (!processing) {
      setConversationLeft([]);
      setConversationRight([]);
    }
  };

  const sendMessage = async () => {
    if (message.trim().length === 0) {
      toast.error(`Input should not be empty`);
      return;
    }

    clearErrorBanner();
    if (selectedModelLeft === selectedModelRight) {
      toast.error("Please choose different models to compare.");
      return;
    }

    setProcessing(true);
    try {
      setEnterKeyText("Responding..");
      setIsDisabled(true);
      var processLeftData = doInference("left");
      var processRightData = doInference("right");
      await processLeftData;
      await processRightData;
      setEnterKeyText("Enter");
      setIsDisabled(false);
      setMessage("");
      setProcessing(false);
    } catch (error) {
      setMessage("");
      setProcessing(false);
      console.error("Error processing input:", error);
    }
  };

  const handleEnterButtonClick = async () => {
    sendMessage();
  };

  const handleModelSelection = (side, model) => {
    const currentConversation =
      side === "left" ? conversationLeft : conversationRight;

    if (currentConversation.length > 0) {
      setShowModelSwitchPopup(true);
      setModelToBeSwitched({ side, model });
    } else {
      if (side === "left") {
        if (model === "Krutrim-spectre-v2") setParamsLeft(defaultParamsKrutrim);
        else setParamsLeft(defaultParams);
        setSelectedModelLeft(model);
      } else {
        if (model === "Krutrim-spectre-v2")
          setParamsRight(defaultParamsKrutrim);
        else setParamsRight(defaultParams);
        setSelectedModelRight(model);
      }
    }
  };

  const confirmModelSwitch = () => {
    const { side, model } = modelToBeSwitched;
    if (side === "left") {
      setSelectedModelLeft(model);
      setConversationLeft([]);
      setConversationRight([]);
    } else {
      setSelectedModelRight(model);
      setConversationLeft([]);
      setConversationRight([]);
    }
    setShowModelSwitchPopup(false);
  };

  const handleEnterKey = async (e) => {
    // if (e.keyCode === 13) {
    //   await handleEnterButtonClick();
    // }
  };

  const RenderModelOption = ({ position }) => {
    const selectedModel =
      position === "left" ? selectedModelLeft : selectedModelRight;
    return (
      <select
        className="bg-[#FFFFFF]  font-semibold  text-[#000000] rounded-[4px] md:px-5 py-2"
        value={selectedModel}
        onChange={(e) => handleModelSelection(position, e.target.value)}
        disabled={processing}
      >
        <option value="Meta-Llama-3-8B-Instruct" className="text-black">
          Meta-Llama-3-8B-Instruct
        </option>
        <option value="Mistral-7B-Instruct" className="text-black">
          Mistral-7B-Instruct
        </option>
        <option value="Krutrim-spectre-v2" className="text-black">
          Krutrim-spectre-v2
        </option>
      </select>
    );
  };

  // -- end

  return (
    <div className="flex md:mb-0 mb-[80px] md:flex-col bg-[#FFFFFF] w-full h-full min-h-screen px-5 md:ml-12">
      <div className="w-full h-[150%] bg-[#FFFFFF]">
        <div className="flex items-center justify-between flex-col md:flex-row items-center mt-20 md:mt-12 mb-5 md:mb-0 gap-3 lg:w-[95%]">
        <div className="lg:text-[26px] text-[20px] font-bold text-[#181E22] ">
          Compare
        </div>
        <div className="bg-[#F3F4F5 flex space-x-3 justify-center my-auto items-center w-full md:w-fit   text-[#687986]  md:my-3 my-2 md:px-4 py-2 px-2 rounded-[4px] border border-gray-300">
            <div className="font-medium cursor-pointer" onClick={clearContent}>
              Clear
            </div>
          </div>
          </div>
        <div className="flex flex-col md:flex-row justify-between mb-4 md:mb-6 gap-4">
          <div className="w-full hidden md:flex"></div>
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
          <div className="flex flex-col md:flex-row w-full">
            {" "}
            {currentModel === "modelOne" && (
              <div
                className="md:w-[60%] w-full flex flex-col justify-between z-0 mb-10 h-[50vh]"
                style={{ overflowY: "auto" }}
              >
                <ModelOne
                  togglePopup1={togglePopup1}
                  RenderModelOption={RenderModelOption}
                  conversation={conversationLeft}
                  selectedModel={selectedModelLeft}
                  isVisible={isVisibleLeft}
                />
              </div>
            )}
            {currentModel === "modelTwo" && (
              <div
                className="md:w-[60%] w-full flex flex-col justify-between md:pr-5 mb-10"
                style={{ overflowY: "auto" }}
              >
                <ModelTwo
                  togglePopup2={togglePopup2}
                  RenderModelOption={RenderModelOption}
                  conversation={conversationRight}
                  selectedModel={selectedModelRight}
                  isVisible={isVisibleRight}
                />
              </div>
            )}
          </div>
        </div>
        <div className="md:flex flex-col md:flex-row hidden md:w-[90%] lg:w-[96%]">
          {" "}
          <div className="w-full flex flex-col bg-[#F3F4F5] justify-between mr-3 px-2 py-2 border-[#F3F4F5]  rounded-[8px]">
            <ModelOne
              togglePopup1={togglePopup1}
              RenderModelOption={RenderModelOption}
              conversation={conversationLeft}
              selectedModel={selectedModelLeft}
              isVisible={isVisibleLeft}
            />
          </div>
          <div className="w-full flex flex-col bg-[#F3F4F5] justify-between mr-3  px-2 py-2 border-[#F3F4F5]  rounded-[8px]">
            <ModelTwo
              togglePopup2={togglePopup2}
              RenderModelOption={RenderModelOption}
              conversation={conversationRight}
              selectedModel={selectedModelRight}
              isVisible={isVisibleRight}
            />
          </div>
        </div>
        <div className="flex fixed w-[90%] md:w-[81%] mx-auto py-2 md:mt-[30%] mt-[40rem]  justify-end top-0 bottom-0 items-end gap-0 ">
          <div className=" w-full bg-[#F3F4F5]  bottom-0 mx-auto mb-1 p-3 flex flex-grow justify-center items-center rounded-[8px] z-0">
            <div className="flex justify-between w-full items-end gap-3">
              <div className="w-full">
                <textarea
                  rows={3}
                  value={message}
                  onChange={updateText}
                  onKeyDown={handleKeyPress}
                  placeholder="Enter your message..."
                  className="w-full input-with-small-placeholder bg-transparent p-3 resize-none focus:outline-none text-black focus-visible:outline-none"
                />
              </div>
              <div
                className={`py-2 px-8 bg-black bg-opacity-50 text-white rounded-md ${
                  isDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-opacity-90 cursor-pointer"
                }`}
                onClick={!isDisabled ? handleEnterButtonClick : undefined}
              >
                {EnterKeyText}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopupRightside && (
        <Popup2
          onClose={() => setShowRightLeftside(false)}
          handleChange={setParams}
          values={paramsRight}
          model={selectedModelRight}
        />
      )}

      {showPopupLeftside && (
        <Popup1
          onClose={() => setShowPopupLeftside(false)}
          handleChange={setParams}
          values={paramsLeft}
          model={selectedModelLeft}
        />
      )}

      {showModelSwitchPopup && (
        <ModelSwitchPopup
          onClose={() => setShowModelSwitchPopup(false)}
          onConfirm={confirmModelSwitch}
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
