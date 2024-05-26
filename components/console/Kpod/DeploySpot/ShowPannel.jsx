import Image from "next/image";
import { useState } from "react";
import MoreActionsPopup from "./MoreActionsPopup";
import LogsPopup from "./LogsPopup";
import Connect from "./Connect";
const ShowPannel = () => {
  const [moreActions, setMoreActions] = useState(false);
  const [logs, setLogs] = useState(false);
const [connect , setConnect] = useState(false);

const handleConnect = () =>
    {
        setConnect(true);
    }

    const handleConnectClose = ()=>
        {
            setConnect(false);
        }
  const handleMoreActions = () => {
    setMoreActions(true);
  };
  const handleLogs = () => {
    setLogs(true);
  };
  const handleMoreActionsClose = () => {
    setMoreActions(false);
  };
  const handleLogsClose = () => {
    setLogs(false);
  };
 
  return (
    <>
      <div className="flex bg-[#FFFFFF] mb-5 pb-5 md:mx-10 mx-5  flex-col rounded-b-[4px] ">
        <div className="md:mx-5 mx-2  mt-8 ">
          {" "}
          <div className=" text-[#3D3D3D] md:text-[14px] text-[10px] font-medium">
            <span className="md:mr-7">20 GB Disk</span>
            <span>75 GB Pod Volume</span>
          </div>
          <div className="text-[#3D3D3D] md:text-[14px] text-[10px] font-medium">
            <span className="">Volume Path: /workspace</span>
          </div>
          <div className="flex lg:justify-end lg:space-x-10 md:space-x-5 space-x-4 lg:-mt-2 md:mt-5 mt-4  lg:mr-32 items-center">
            {" "}
            <div className="flex items-center space-x-2 md:justify-end">
              <Image
                src={require("../../../../public/Earth.png")}
                alt=""
                className="h-[2vh] w-[2vh]"
              />
              <span className="text-[#8D8D8D] md:text-[14px] text-[8px] md:pr-0 pr-3  ">
                RO
              </span>
            </div>
            <div className="flex items-center space-x-2 md:justify-end">
              <Image
                src={require("../../../../public/upload.png")}
                alt=""
                className="h-[2vh] w-[2vh]"
              />
              <span className="text-[#8D8D8D] md:text-[14px] text-[8px]  ">
                2793 Mbps
              </span>
            </div>
            <div className="flex items-center space-x-2 justify-end">
              <Image
                src={require("../../../../public/Download.png")}
                alt=""
                className="h-[2vh] w-[2vh]"
              />
              <span className="text-[#8D8D8D] md:text-[14px] text-[8px]  ">
                2764 Mbps
              </span>
            </div>
            <div className="flex items-center space-x-2 justify-end">
              <Image
                src={require("../../../../public/Floppy disk.png")}
                alt=""
                className="h-[2vh] w-[2vh]"
              />
              <span className="text-[#8D8D8D] md:text-[14px] text-[8px]  ">
                1333 Mbps
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-[#FFFFFF] mt-5 pb-5 md:mx-10 mx-5  mb-10 flex-col rounded-b-[4px]">
        <div className="md:mx-5 mx-2 pt-4">
          <div className="text-[#3D3D3D] md:text-[15px] text-[10px]">
            Pod Uptime: 5h
          </div>
          <div className="text-[#8D8D8D] flex items-center  md:space-x-4 md:mr-20 md:-mt-6 -mt-4 justify-end md:text-[15px] text-[10px]">
            <span>7 Seconds ago</span>
            <Image
              src={require("../../../../public/Refresh.png")}
              alt=""
              className="h-[2vh] w-[2vh]"
            />
          </div>
          <div className="mt-5">
            <div className="flex lg:flex-row flex-col w-full">
              <div className="w-full">
                <div className="text-[#3D3D3D] text-[18px] font-semibold">
                  Pod Utilization
                </div>
                <div className="flex items-center mt-4">
                  <div className="text-[#000000] md:text-[14px] text-[10px]">
                    CPU
                  </div>
                  <div className="w-[70%] h-[8px] md:ml-[62px] ml-[25px] bg-[#C2EEB3] rounded-full mx-2"></div>
                  <div className="text-[#000000] md:text-[14px] text-[10px]">
                    0%
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <div className="text-[#000000] md:text-[14px] text-[10px]">
                    Memory
                  </div>
                  <div className="w-[70%] h-[8px] md:ml-8 bg-[#C2EEB3] rounded-full mx-2"></div>
                  <div className="text-[#000000] md:text-[14px] text-[10px]">
                    0%
                  </div>
                </div>
              </div>
              <div className="w-full lg:mt-0 mt-5">
                <div className="text-[#3D3D3D] text-[18px] font-semibold">
                  GPU Utilization
                </div>
                <div className="flex items-center mt-4">
                  <div className="text-[#000000] md:text-[14px] text-[10px]">
                    0
                  </div>
                  <div className="w-[70%] h-[8px] ml-[12px] bg-[#C2EEB3] rounded-full mx-2"></div>
                  <div className="text-[#000000] md:text-[14px] text-[10px]">
                    0%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex lg:flex-row flex-col w-full">
              <div className="w-full">
                <div className="text-[#3D3D3D] text-[18px] font-semibold">
                  Disk Utilization
                </div>
                <div className="flex items-center mt-4">
                  <div className="text-[#000000] md:text-[14px] text-[10px]">
                    Container
                  </div>
                  <div className="w-[70%] h-[8px] md:ml-[23px] ml-[12px] bg-[#C2EEB3] rounded-full mx-2"></div>
                  <div className="text-[#000000] md:text-[14px] text-[10px]">
                    0%
                  </div>
                </div>
                <div className="flex items-center md:mt-5 mt-2">
                  <div className="text-[#000000] md:text-[14px] text-[10px]">
                    Volume
                  </div>
                  <div className="w-[70%] h-[8px] md:ml-[37px] ml-[23px] bg-[#C2EEB3] rounded-full mx-2"></div>
                  <div className="text-[#000000] md:text-[14px] text-[10px]">
                    0%
                  </div>
                </div>
              </div>
              <div className="lg:mt-0 mt-5 w-full">
                <div className="text-[#3D3D3D] text-[18px] font-semibold">
                  GPU Memory Used
                </div>
                <div className="flex items-center mt-4">
                  <div className="text-[#000000] md:text-[14px] text-[10px]">
                    0
                  </div>
                  <div className="w-[70%] h-[8px] ml-[12px] bg-[#C2EEB3] rounded-full mx-2"></div>
                  <div className="text-[#000000] md:text-[14px] text-[10px]">
                    0%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:items-end lg:justify-end  lg:mt-0 mt-5 lg:mr-36">
            <div className="md:text-[16px] text-[13px] bg-[#F4F4F4] rounded-[5px] px-4 py-2 ">
              0.36$/h
            </div>
          </div>
          <div className="flex lg:mt-0 mt-6 lg:justify-start justify-center  md:space-x-7 space-x-3 ">
            <div
              className=" border-[2px] border-black rounded-[5px] px-3 pt-3 cursor-pointer "
              onClick={handleMoreActions}
            >
              <svg
                width="23"
                height="16"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2757 5.64209H0.724253C0.383712 5.64209 0.107666 5.94257 0.107666 6.31325C0.107666 6.68394 0.383712 6.98442 0.724253 6.98442H15.2757C15.6162 6.98442 15.8923 6.68394 15.8923 6.31325C15.8923 5.94257 15.6162 5.64209 15.2757 5.64209Z"
                  fill="black"
                />
                <path
                  d="M15.2757 0.272949H0.724253C0.383712 0.272949 0.107666 0.57343 0.107666 0.944114C0.107666 1.3148 0.383712 1.61528 0.724253 1.61528H15.2757C15.6162 1.61528 15.8923 1.3148 15.8923 0.944114C15.8923 0.57343 15.6162 0.272949 15.2757 0.272949Z"
                  fill="black"
                />
                <path
                  d="M15.2757 11.0117H0.724253C0.383712 11.0117 0.107666 11.3122 0.107666 11.6829C0.107666 12.0536 0.383712 12.354 0.724253 12.354H15.2757C15.6162 12.354 15.8923 12.0536 15.8923 11.6829C15.8923 11.3122 15.6162 11.0117 15.2757 11.0117Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className=" border-[2px] border-black rounded-[5px] px-4 pt-2 ">
              <span className="bg-black w-[20px] h-[20px] rounded-[4px] inline-block"></span>
            </div>
            <div
              className=" border-[2px] border-black rounded-[5px] px-3 -pt-1 cursor-pointer "
              onClick={handleLogs}
            >
              <span className="text-[14px] font-medium">Logs</span>
            </div>
            <div className="bg-[#000000] pt-3 px-9 md:flex hidden rounded-[4px] text-white text-[14px] cursor-pointer" onClick={handleConnect}>
              Connect
            </div>
          </div>
          <div className="bg-[#000000] flex justify-center items-center px-3 py-3 md:hidden mt-3 rounded-[4px] text-white text-[14px] cursor-pointer" onClick={handleConnect}>
            Connect
          </div>

          {moreActions && (
            <MoreActionsPopup
              moreActions={moreActions}
              onClose={handleMoreActionsClose}
            />
          )}
          {logs && (
            <>
              <LogsPopup logs={logs} onClose={handleLogsClose} />
            </>
          )}

          {connect&&(<Connect connect={connect} onClose={handleConnectClose}/>)}
        </div>
      </div>
    </>
  );
};

export default ShowPannel;
