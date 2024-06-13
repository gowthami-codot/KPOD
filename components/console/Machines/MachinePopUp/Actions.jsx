import Image from "next/image";
import ConnectSsh from "./ConnectSsh";
import { useEffect, useRef, useState } from "react";
import Reboot from "./Reboot";
import Delete from "./Delete";

const Actions = ({ onClose, instanceId }) => {
  const [connectSS, setConnectss] = useState(false);
  const [reboot, setReboot] = useState(false);

  const [deletePop, setDelete] = useState(false);

  const handleDelete = () => {
    setDelete(true);
  };

  const handleDeleteClose = () => {
    setDelete(false);
  }

  const handleRebootClick = () => {
    setReboot(true);
  };

  const handleRebootClose = () => {
    setReboot(false);
  };

  const handleconnectSSClick = () => {
    setConnectss(true);
  };

  const handleConnectClose = () => {
    setConnectss(false);
    onClose();
  };

  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="fixed z-10 mt-2 w-[263px] rounded-md shadow-lg right-[20%] bg-white ring-1 ring-black ring-opacity-5">
        <div ref={popupRef} className="py-1 ">
          <div
            className="flex items-center mt-[32px] justify-center px-7 cursor-pointer "
            onClick={handleconnectSSClick}
          >
            <Image
              src={require("@/public/machines/console.png")}
              alt="console"
              className="h-[14px] w-[14px]"
            />
            <button className="block w-full font-normal text-left text-[14px] px-4 py-2 text-[#666666]">
              How to connect
            </button>
          </div>
          <div
            className="flex items-center justify-center px-7 mb-[19px] cursor-pointer"
            onClick={handleRebootClick}
          >
            <Image
              src={require("@/public/machines/rebot.png")}
              alt="rebot"
              className="h-[14px] w-[14px]"
            />

            <button className="block  w-full font-normal text-left text-[14px] px-4 py-2 text-[#666666]">
              Reboot
            </button>
          </div>
          <div className="border-[#E4E4E4] border-[1px] "></div>
          <div className="flex items-center justify-center px-7 mb-[16px] mt-[13px]">
            <Image
              src={require("@/public/machines/rename.png")}
              className="h-[14px] w-[14px]"
              alt="delete"
            />
            <button
              className="block w-full text-left text-[14px] font-normal px-4 py-2 text-sm text-[#E42121] text-opacity-60 cursor-pointer "
              onClick={handleDelete}
            >
              Delete Machine
            </button>
          </div>
        </div>
        {connectSS && <ConnectSsh onClose={handleConnectClose} />}
        {reboot && <Reboot onClose={handleRebootClose} />}
        {deletePop && <Delete onClose={handleDeleteClose} instanceId={instanceId} />}
      </div>
    </>
  );
};

export default Actions;
