import { useEffect, useRef } from "react";

const dropDownpopup = ( {onClose,dropdown,dropDown}) =>
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
    <div className="fixed inset-0 flex  justify-centre items-centre bg-[#3d3939] bg-opacity-50">
        <div ref={popupRef} className="bg-[#0F1D2E] shadow-md mt-[18rem] ml-[26rem] text-[#000000]    h-[27%]  w-[12%]  rounded-[30px]">
       

            <div className="flex flex-col items-center justify-center p-10 space-y-4" >
                
            {dropdown.map((dropdown) => (
              <button
              key={dropdown}
              className="block w-full py-2 px-4 text-center hover:bg-gray-100 focus:outline-none"
              onClick={dropDown}
            >
              {dropdown}
            </button>
          ))}
                
            </div>
         </div>
      </div>
    </>)
}
export default dropDownpopup;