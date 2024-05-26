import React, { useEffect, useRef } from "react";

const MoreActionsPopup = ({ moreActions, onClose }) => {
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (moreActions) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [moreActions]);

  if (!moreActions) return null;

  return (
    <>
<div className="fixed inset-0 flex items-end  justify-start bg-[#00000030]">
  <div
    className="bg-[#F3F7F9]  shadow-md lg:mb-[13%] mb-[60%] md:mb-[25%] lg:ml-40 rounded-[8px] ml-20 md:ml-32 text-[#000000] h-fit lg:w-[12%] md:w-[30%] w-[50%] p-5"
    ref={popupRef}
  >
    <div className="flex flex-col space-y-2 text-[16px] justify-center items-center "><div>Lock Pod</div>
    <div>Edit Pod</div>
    <div>Restart Pod</div>
    <div>Stop Pod</div>
    <div>Reset Pod</div></div>
  </div>
</div>
</>
  );
};

export default MoreActionsPopup;
