import { useEffect, useRef } from "react";

const MonthDropdown = ( {onClose}) =>
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
    <div className="fixed inset-0 flex  justify-end bg-[#3d3939] bg-opacity-50">
        <div ref={popupRef} className="bg-[#0F1D2E] shadow-md mt-48 mr-[12rem] text-[#000000]   justify-end items-end h-[87%]  w-[12%]  rounded-[30px]">
       

            <div className="flex flex-col items-center justify-center p-10 space-y-4" >
                
            <div className="text-white text-[16px]" >January</div>
            <div className="text-white text-[16px]">February</div>
            <div className="text-white text-[16px]">March</div>
            <div className="text-white text-[16px]">April</div>
            <div className="text-white text-[16px]">May</div>
            <div className="text-white text-[16px]">June</div>
            <div className="text-white text-[16px]">July</div>
            <div className="text-white text-[16px]">August</div>
            <div className="text-white text-[16px]">September</div>
            <div className="text-white text-[16px]">October</div>
            <div className="text-white text-[16px]">November</div>
            <div className="text-white text-[16px]">December</div>

            </div>
         </div>
      </div>
    </>)
}
export default MonthDropdown;