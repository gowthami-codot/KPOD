import { useState } from "react";
import AddSshPop from "./MachinePopUp/AddSshPop"; 
import Summary from "./MachinePopUp/Summary";
const MachineConfigSubCompo2 = () => {
  const [ssh, setShh] = useState("123455");
  const sshs = ["Dummy SSH Key", "saitheys@gshd", "saitheys@gshd"];
  const [isDummySelected, setIsDummySelected] = useState(false);
  const [sshAdded, setSshAdded] = useState(false); 
  const [isOpen, setIsOpen] = useState(false);
  const [summary , setSummary] = useState(false);

  const handleSummaryClick = () =>
    {
      setSummary(true);
    }

    const handleSummaryClose = () =>
      {
        setSummary(false);
      }
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setShh(value);
    setIsDummySelected(value === "Dummy SSH Key");
    setIsOpen(false);
  };

  const [addSSh, setSSh] = useState(false);

  const handleSShClick = () => {
    setSSh(true);
  };

  const handleCloseSSh = () => {
    setSSh(false);
  };
  const handleAddKey = () => {
    setSshAdded(true);
    setSSh(false);
  };

  const handleCreateClick = () =>{
    if(isDummySelected)
      {
        handleSummaryClick();
      }
  }
  return (
    <>
       <div className="mt-5">
        <div className="bg-white w-[97%] drop-shadow-lg rounded-[8px]">
          <div className="mx-7 pt-10 pb-20">
            {!sshAdded ? (
              <div>
                 <div className="text-[#000000] text-[16px] font-medium">
               Add SSH Keys <span className="text-[#BB0000]">*</span>
             </div>
              <div className="text-[14px] text-[#000000] mt-[14px]">
                You haven&apos;t added any SSH Key{" "}
                <span
                  className="text-[#72C73E] underline cursor-pointer"
                  onClick={handleSShClick}
                >
                  Add SSH Key
                </span>
              </div>
                </div>
            ) : (
              <>
                <div className="text-[#000000] text-[16px] font-medium">
                  Add SSH Keys <span className="text-[#BB0000]">*</span>
                </div>
                <div className="mt-[18px]">
                  <div className="text-[16px] text-[#000000]">
                    Select the Public Key from below
                  </div>
                  <div className="relative w-[85%] mt-2">
                    <div className="custom-select-wrapper">
                      <div
                        className={`custom-select ${isOpen ? "open" : ""}`}
                        onClick={handleToggle}
                      >
                        <div className="custom-select-trigger w-[61%]">
                          <span
                            className={
                              ssh === "123455" ? "text-gray-500" : "text-black"
                            }
                          >
                            {ssh ? ssh : "Select option"}
                          </span>
                          <div className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="7"
                              viewBox="0 0 13 7"
                              fill="none"
                            >
                              <path
                                d="M6.75 7L0.904328 0.25L12.5957 0.25L6.75 7Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex justify-around rounded-[4px]">
                          <div className={`custom-options w-[298px] text-[14px]`}>
                            {sshs.map((option, index) => (
                              <div
                                key={index}
                                className={`custom-option ${
                                  ssh === option
                                    ? "text-black"
                                    : "text-[#41515C] text-opacity-60"
                                }`}
                                onClick={() => handleOptionClick(option)}
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {addSSh && <AddSshPop onAddKey={handleAddKey} onClose={handleCloseSSh} />}
        {summary && <Summary onClose={handleSummaryClose}/>}
        
        <div className="flex mt-[24px] mb-[24px] items-end justify-end mr-10">
          <div
            className={`${
              isDummySelected ? "bg-black cursor-pointer"  : "bg-[#0101014D]"
            } text-[18px] text-white font-medium pl-[57px] pr-[57px] pt-[9px] pb-[10px] mr-[7px] rounded-[4px]  ` } onClick={handleCreateClick} 
          >
            Create
          </div>
          <div className="bg-transparent border-[1px] border-[#000000] rounded-[4px] text-[16px] text-[#000000] font-medium pt-[9px] pb-[10px] pl-[38px] pr-[38px] ">
            Cancel
          </div>
        </div>
      </div>
    </>
  );
};

export default MachineConfigSubCompo2;
