import { useState } from "react";
import ConnectSsh from "./ConnectSsh";
const DepolyPopup = ({onClose}) =>
    
    {
        const [connectSS,setConnectss ] = useState(false);

        const handleconnectSSClick = () =>
            {
                setConnectss(true);
            }

            const handleConnectClose = () =>
                {
                    setConnectss(false)
                    onClose(); 
                }
        return(<>
         <div className="fixed inset-0 flex  items-center justify-center bg-[#00000080]">
        <div className="bg-[#FFFFFF] shadow-md  my-auto text-[#000000] h-fit  mb-20   w-[478px]   lg:mt-5     p-5  ">
         <div className="flex justify-center text-[24px] mt-[27px] font-medium">
         Your deployment is completed
         </div>
         <div className="flex flex-col items-center justify-center">
                            <div className=" flex flex-col items-start justify-center">
                                <div className="flex items-start justify-center mt-[35px]">
                                    <div className="text-[18px] font-medium text-[#000000] text-center ">VM Name : <span className=" text-[18px] font-normal"> A100-NVLINK-2x</span></div>
                                </div>
                                <div className="flex items-start justify-center mt-[10px]">
                                    <div className="text-[18px] font-medium text-[#000000] text-center ">Start time: <span className=" text-[18px] font-normal">11:34:54</span></div>
                                </div>
                            </div>
                            </div>
        <div className="flex items-center justify-center mt-[23px] mb-[20px]">
        <div className="bg-[#010101] text-[#ffff] inline-block text-center pl-[25px] pr-[24px] rounded-[4px] py-2 cursor-pointer" onClick={handleconnectSSClick}>Connect via SSH</div>
        <div
              className="border-[1px] border-[#000000] rounded-[4px] px-6 ml-[12px] py-2 cursor-pointer"
            
            >
              Cancel
            </div>
        </div>
        </div>
      </div>
{connectSS&&<ConnectSsh onClose={handleConnectClose}/>}
        </>)
    }

    export default DepolyPopup;