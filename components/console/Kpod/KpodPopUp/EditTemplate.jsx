import { useState } from "react";

import Image from "next/image";

const EditTemplate = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const inputField = (e) => {
    setInput(e.target.value);
  };
  const [inputCommand, setInputCommand] = useState("");
  const inputcommand = (e) => {
    setInputCommand(e.target.value);
  };
  const [inputDisplay, setInputDisplay] = useState("");
  const inputdisplay = (e) => {
    setInputDisplay(e.target.value);
  };
  const [inputVolume, setInputVolume] = useState("");
  const inputvolume = (e) => {
    setInputVolume(e.target.value);
  };
  const [inputMount, setInputMount] = useState("");
  const inputmount = (e) => {
    setInputMount(e.target.value);
  };
  const [inputHttp, setInputHttp] = useState("");
  const inputhttp = (e) => {
    setInputHttp(e.target.value);
  };
  const [inputTcp, setInputTcp] = useState("");
  const inputtcp = (e) => {
    setInputTcp(e.target.value);
  };
  const [key, setInputKey] = useState("");
  const Key = (e) => {
    setInputKey(e.target.value);
  };
  const [password, setPassword] = useState("");
  const Password = (e) => {
    setPassword(e.target.value);
  };

  const [showInput, setShowInput] = useState(false);
  const handlePopUp = () => {
    setShowInput(false);
  };

  return (
    <>
      <div className="fixed inset-0 flex lg:items-start items-center justify-center bg-[#00000080]">
        <div className="bg-[#F3F7F9] shadow-md  my-auto text-[#000000] h-fit   md:w-[64%] w-[90%] md:mt-14 lg:mt-5 mt-5    p-5 max-h-full overflow-y-auto ">
          <div className="flex items-end justify-end mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#000"
              viewBox="0 0 16 16"
              className="cursor-pointer"
              onClick={onClose}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>
          <div className="text-[#1D1D1D] md:text-[24px] text-[18px] font-semibold md:mx-10 mx-3 md:mt-0 mt-3">
            Pod Templates Overrides
          </div>
          <div className="md:mt-8 mt-4 md:mx-10 md:mr-20">
            <div>
              <label className="text-[#00000099] text-[14px] font-medium">
                Container Image{" "}
              </label>
              <input
                value={input}
                onChange={inputField}
                className="mt-0 text-black text-[14px]  rounded-[4px]  md:px-7 focus:outline-none focus-visible:outline-none w-full bg-[#fff] md:py-4 py-2"
              />
            </div>
            <div className="mt-3">
              <label className="text-[#00000099] text-[14px] font-medium">
                Container Start Command{" "}
              </label>
              <input
                value={inputCommand}
                onChange={inputcommand}
                className="mt-0 text-black text-[14px]  rounded-[4px]  md:px-7 focus:outline-none focus-visible:outline-none w-full bg-[#fff] md:py-4 py-2"
              />
            </div>
          </div>
          <div className="mt-3 md:ml-10 md:mr-20 flex lg:flex-row flex-col lg:space-x-9 lg:space-y-0 space-y-2 ">
            <div>
              {" "}
              <label className="text-[#00000099] text-[14px] font-medium">
                Container Disk(Temporary){" "}
              </label>
              <input
                value={inputDisplay}
                onChange={inputdisplay}
                className="mt-0 text-black text-[14px]  rounded-[4px]  md:px-7 focus:outline-none focus-visible:outline-none w-full bg-[#fff] md:py-4 py-2"
              />
            </div>
            <div>
              {" "}
              <label className="text-[#00000099] text-[14px] font-medium">
                Volume Disk(Persistent){" "}
              </label>
              <input
                value={inputVolume}
                onChange={inputvolume}
                className="mt-0 text-black text-[14px]  rounded-[4px]  md:px-7 focus:outline-none focus-visible:outline-none w-full bg-[#fff] md:py-4 py-2"
              />
            </div>
            <div>
              {" "}
              <label className="text-[#00000099] text-[14px] font-medium">
                Volume Mount Path{" "}
              </label>
              <input
                value={inputMount}
                onChange={inputmount}
                className="mt-0 text-black text-[14px]  rounded-[4px]  md:px-7 focus:outline-none focus-visible:outline-none  w-full bg-[#fff] md:py-4 py-2"
              />
            </div>
          </div>
          <div className="mt-3 md:ml-10 md:mr-20 flex lg:flex-row flex-col lg:space-x-9 lg:space-y-0 space-y-2 ">
            <div>
              {" "}
              <label className="text-[#00000099] text-[14px] font-medium">
                Expose HTTP Ports(Max 10){" "}
              </label>
              <input
                value={inputHttp}
                onChange={inputhttp}
                className="mt-0 text-black text-[14px]  rounded-[4px]  md:px-7 focus:outline-none focus-visible:outline-none w-full bg-[#fff] md:py-4 py-2"
              />
            </div>
            <div>
              {" "}
              <label className="text-[#00000099] text-[14px] font-medium">
                Expose TCP Ports{" "}
              </label>
              <input
                value={inputTcp}
                onChange={inputtcp}
                className="mt-0 text-black text-[14px]  rounded-[4px]  md:px-7 focus:outline-none focus-visible:outline-none w-full bg-[#fff] md:py-4 py-2"
              />
            </div>
          </div>

          <div className="text-[#000000] text-[16px] font-semibold md:mx-10 mt-3 md:mt-6">
            Environment Variables
          </div>
          <div>
            <div>
              {showInput && (
                <div className="mt-3 md:ml-10 md:mr-20  mb-10 flex lg:flex-row flex-col lg:space-x-9 ">
                  <div className="">
                    {" "}
                    <label className="text-[#00000099] text-[14px] font-medium">
                      Key
                    </label>
                    <div className="flex lg:space-x-0 space-x-3">
                      {" "}
                     <div> <input
                        value={key}
                        onChange={Key}
                        className="mt-0 text-black text-[14px] rounded-[4px] px-3 pr-36 py-2 focus:outline-none focus-visible:outline-none w-full bg-[#fff]"
                      /></div>
                      <div
                        className="flex lg:hidden items-center  justify-center cursor-pointer"
                        onClick={handlePopUp}
                      >
                        <Image
                          src={require("../../../../public/cancel.png")}
                          alt=""
                          className="w-[3vh] h-[3vh]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    {" "}
                    <label className="text-[#00000099] text-[14px] font-medium">
                      Password
                    </label>
                    <div className="flex items-center lg:mr-0 mr-10 bg-[#fff] rounded-[5px] ">
                      <input
                        value={password}
                        onChange={Password}
                        className="mt-0 text-black text-[14px] px-3 py-2 pr-32 rounded-[5px] focus:outline-none focus-visible:outline-none w-full"
                      />
                      <Image
                        src={require("../../../../public/key.png")}
                        alt=""
                        className="w-[4vh] h-[2vh] mx-2"
                      />
                    </div>
                  </div>
                  <div
                    className="lg:flex hidden items-center my-5 justify-center cursor-pointer"
                    onClick={handlePopUp}
                  >
                    <Image
                      src={require("../../../../public/cancel.png")}
                      alt=""
                      className="w-[5vh] h-[5vh]"
                    />
                  </div>
                </div>
              )}
              <div className="flex lg:flex-row flex-col md:mx-10">
                {" "}
                <div
                  className="text-[#000000] flex items-center border-[#000000] border-[2px] py-2 px-3 rounded-[4px] text-[14px] font-medium cursor-pointer"
                  onClick={() => setShowInput(true)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="ml-3 text-[#000000] text-[14px]">
                    Add Environment Variable
                  </div>
                </div>
                <div className="flex justify-start md:mx-2 lg:mt-0 mt-4">
                  <div className="text-[#000000] text-[14px] flex items-center ml-4 font-semibold relative">
                    Click the
                    <Image
                      src={require("../../../../public/key.png")}
                      alt=""
                      className="w-[4vh] h-[2vh] mx-2"
                    />
                    to use a KPod Secret
                    <Image
                      src={require("../../../../public/Question.png")}
                      alt=""
                      className="w-[2vh] h-[2vh] mx-2 cursor-pointer"
                      onMouseEnter={() => setShowPopup(true)}
                      onMouseLeave={() => setShowPopup(false)}
                    />
                    {showPopup && (
                      <div className=" bg-[#00000080]">
                        {" "}
                        <div className="absolute md:-bottom-[18vh] -bottom-[16vh] w-full left-1/2 transform -translate-x-1/2 bg-white rounded-[5px] px-4 py-2 md:text-[14px] text-[12px] z-10">
                          Secret Name must start with a letter or underscore,
                          followed by any combination of alphanumeric
                          characters, dots, dashes, or underscores. It cannot
                          start with &#39;RUNPOD&#39;.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex lg:flex-row flex-col lg:items-end lg:mb-6 mb-20 items-center justify-centerlg:space-y-0 space-y-2  lg:justify-end">
              <div className="text-[#000000] border-[#000000] py-2 border-[2px] font-medium px-6 rounded-[4px]">
                Clear Overrides
              </div>
              <div className="text-white bg-black py-2.5 lg:mr-4 font-medium rounded-[4px] lg:ml-7 lg:px-6 px-9">
                Set Overrides
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTemplate;
