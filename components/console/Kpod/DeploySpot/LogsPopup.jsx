import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
const LogsPopup = ({ logs, onClose }) => {
  const popupRef = useRef(null);
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };
  const [activeTab, setActiveTab] = useState("container");

  useEffect(() => {
    if (logs) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [logs]);

  if (!logs) return null;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#00000080]">
        <div
          className="bg-[#000000] mt-72  shadow-md lg:mb-[13%] mb-[60%] md:mb-[25%]  lg:ml-20 rounded-[12px]  md:ml-12 text-[#000000] h-[80%] lg:w-[80%] md:w-[80%] w-[90%]  "
          ref={popupRef}
        >
          <div className=" bg-[#222222] pb-5 rounded-t-[8px]">
            {" "}
            <div className="">
              <div className="flex md:flex-row flex-col  lg:space-x-5 md:space-x-14 lg:items-center items-start ">
                <div className="flex">
                  <div
                    className={`text-white md:text-[20px] text-[12px] cursor-pointer ${
                      activeTab === "container"
                        ? "bg-black py-3 rounded-[4px] lg:py-6 px-8 lg:px-5 "
                        : " lg:py-6 py-3 px-8 lg:px-5"
                    }`}
                    onClick={() => setActiveTab("container")}
                  >
                    Container Logs
                  </div>
                  <div
                    className={`text-white  md:text-[20px] text-[12px] cursor-pointer ${
                      activeTab === "system"
                        ? "bg-black rounded-[4px]  lg:py-6 py-3 px-5 lg:pr-8 lg:pl-4"
                        : " lg:py-6 py-3 px-5 lg:pr-8 lg:pl-4"
                    }`}
                    onClick={() => setActiveTab("system")}
                  >
                    System Logs
                  </div>
                </div>
                <div className="flex  lg:space-x-6 space-x-3 md:ml-0 ml-52 lg:mt-0 mt-5 relative">
                  <div className="relative group">
                    <Image
                      src={require("../../../../public/refersh2.png")}
                      alt=""
                      className="lg:h-[3vh] lg:w-[3vh] w-[2vh] h-[2vh]"
                    />
                    <div className="absolute -left-9 mt-7 hidden group-hover:block bg-white text-black text-sm px-3 whitespace-nowrap py-2 rounded-[5px] shadow-lg">
                      Refresh Logs
                    </div>
                  </div>
                  <div className="relative group">
                    <Image
                      src={require("../../../../public/download2.png")}
                      alt=""
                      className="lg:h-[3vh] lg:w-[3vh] w-[2vh] h-[2vh]"
                    />
                    <div className="absolute -left-9 mt-7 hidden group-hover:block bg-white text-black text-sm px-3 whitespace-nowrap py-2 rounded-[5px] shadow-lg">
                      Download Logs
                    </div>
                  </div>
                  <div className="relative group">
                    <Image
                      src={require("../../../../public/play.png")}
                      alt=""
                      className="lg:h-[3vh] lg:w-[3vh] w-[2vh] h-[2vh]"
                    />
                    <div className="absolute -left-5 mt-7 hidden group-hover:block bg-white text-black text-sm px-3 whitespace-nowrap py-2 rounded-[5px] shadow-lg">
                      Tail Logs
                    </div>
                  </div>
                  <div className="relative group">
                    <Image
                      src={require("../../../../public/cancel2.png")}
                      alt=""
                      className="lg:h-[3vh] lg:w-[3vh] w-[2vh] h-[2vh]"
                    />
                    <div className="absolute -left-5 mt-7 hidden group-hover:block bg-white text-black text-sm px-3 whitespace-nowrap py-2 rounded-[5px] shadow-lg">
                      Close
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-col  lg:items-center md:items-end items-center lg:space-x-6 lg:space-y-0 space-x-3 md:space-y-3 mt-4 lg:-mt-16 lg:mr-3 mr-4 md:justify-end justify-center">
              <div className="">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-[#3E3E3E] text-white md:px-4 text-[14px] md:py-2 py-1  rounded "
                />
              </div>
              <div>
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5312 5.36914H0.46875C0.209859 5.36914 0 5.66962 0 6.04031C0 6.41099 0.209859 6.71147 0.46875 6.71147H11.5312C11.7901 6.71147 12 6.41099 12 6.04031C12 5.66962 11.7901 5.36914 11.5312 5.36914Z"
                    fill="#D0D0D0"
                  />
                  <path
                    d="M7.6875 0H0.3125C0.139906 0 0 0.30048 0 0.671165C0 1.04185 0.139906 1.34233 0.3125 1.34233H7.6875C7.86009 1.34233 8 1.04185 8 0.671165C8 0.30048 7.86009 0 7.6875 0Z"
                    fill="#D0D0D0"
                  />
                  <path
                    d="M15.168 10.7388H0.616587C0.276046 10.7388 0 11.0393 0 11.4099C0 11.7806 0.276046 12.0811 0.616587 12.0811H15.168C15.5086 12.0811 15.7846 11.7806 15.7846 11.4099C15.7846 11.0393 15.5086 10.7388 15.168 10.7388Z"
                    fill="#D0D0D0"
                  />
                </svg>
              </div>
              <div className="text-[#AEAEAE] md:text-[16px] text-[12px]  ">0 matches</div>
            </div>
          </div>
          <div className="mt-1">
            {activeTab === "container" && <div>Container Logs Content</div>}
            {activeTab === "system" && <div>System Logs Content</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogsPopup;
