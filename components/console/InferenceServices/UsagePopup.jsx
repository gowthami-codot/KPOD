import { useEffect, useRef } from "react";

const UsagePopup = ( {onClose}) =>
{
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
    return(<>
    <div className="absolute inset-0 flex h-full   justify-end bg-[#3d3939] bg-opacity-50 min-h-screen">
        <div ref={popupRef} className="bg-[#0F1D2E] relative left-[5%] shadow-md mt-48 mr-[23rem]  text-[#000000]   justify-end items-end h-[27%]  w-[12%]  rounded-[30px]">
       

            <div className="flex flex-col items-center justify-center p-10 space-y-4" >
                
            <div className="text-white text-[16px]" >Mistral</div>
            <div className="text-white text-[16px]">LAMA 3</div>
            <div className="text-white text-[16px]"> Claude</div>
            </div>
            <div className="mb-[80rem]"></div>
         </div>
      </div>
    </>)
}
export default UsagePopup;