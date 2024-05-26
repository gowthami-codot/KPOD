import { useState } from "react";
import ConnectionPopup from "../DeploySpot/PopUpsDivisions/ConnectionPopup"
import TcpiPopup from "../DeploySpot/PopUpsDivisions/TcpiPopup";
import Configure from "../DeploySpot/PopUpsDivisions/Configure";

const Connect = ({connect,onClose}) => {
    const [activeTab, setActiveTab] = useState("connection");

  return (
    <>
      <div className="fixed inset-0 flex items-center  justify-center bg-[#00000030]">
        <div className="bg-[#F3F7F9] md:mt-60 mt-52 shadow-md lg:mb-[13%] mb-[60%] md:mb-[25%] lg:ml-40   md:ml-20 text-[#000000] h-fit lg:w-[50%] md:w-[80%] w-[90%] p-5">
        <div className="flex md:space-x-7 space-x-3 items-center md:mx-0 mx-5 justify-center">
            <div className={`md:text-[16px] text-[12px]  md:px-6 md:py-4 px-4 py-2  text-black inline-block cursor-pointer ${activeTab==="connection"?"bg-white rounded-[8px]":""}`} onClick={()=>setActiveTab("connection")}>
            Connection Options
            </div>
            <div className={`md:text-[16px] text-[12px]  md:px-6 md:py-4 px-4 py-2  text-black inline-block cursor-pointer ${activeTab==="Tcp"?"bg-white rounded-[8px]":""}`} onClick={()=>setActiveTab("Tcp")}>
            TCP Port Mappings
            </div>
        
        
            <div className={`md:text-[16px] text-[12px]  md:px-6 md:py-4 px-4 py-2  text-black inline-block cursor-pointer ${activeTab==="configure"?"bg-white rounded-[8px]":""}`} onClick={()=>setActiveTab("configure")}>
            Configure Public Key
            </div>
        
        </div>
        {activeTab==="connection"&&(<ConnectionPopup/>)}
        {activeTab==="Tcp"&&(<TcpiPopup/>)}
        {activeTab==="configure"&&(<Configure/>)}
          <div className="flex md:justify-end md:items-end md:mr-20 justify-center items-center mb-10 cursor-pointer" onClick={onClose}><div className="text-black text-[16px] px-4 py-2 border-black border-[1px] rounded-[4px]">Close</div></div>
        </div>
      </div>
     
    </>
  );
};

export default Connect;
