import Image from "next/image";
import { useRef, useState } from "react";


const CreateScrecet = ({ onClose }) => {
 
    const [screcetKey, setScreteKey] = useState("");
   
    const inputRef = useRef(null);
    const copyToClipboard = () => {
        const input = inputRef.current;
        input.select();
        document.execCommand("copy");
      };
    

    const handleChangekey = (e) => {
        setScreteKey(e.target.value);
      };

      const handleDoneClick = () => {
       
        localStorage.setItem("done", "true");
        onClose();
      };
   
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#3d3939] bg-opacity-50">
        <div className="bg-[#0F1D2E] shadow-md   text-[#000000] h-[73%]  w-[60%]  rounded-[30px]">
          <div className="text-[20px] text-white px-16 py-14 ">
            Save your key
          </div>

          <div className="mt-6 px-16">
           
            <div className="flex space-x-4">
              {" "}
              <input
               ref={inputRef}
               onChange={handleChangekey}
                
                className="mt-3 text-white border-[#80FFF7] rounded-[14px] border-[1px] focus:outline-none focus-visible:outline-none w-full bg-transparent px-4 py-3"
              />
              <div className="bg-[#80FFF7] rounded-[13px] items-center cursor-pointer space-x-3 justify-centerspace-x-4 flex  px-10 py-2" onClick={copyToClipboard} >
              <div>
                  <Image src={require("../../../public/Copy.png")} alt=""  />
                </div><div className="text-[15px] font-bold text-center ">Copy</div>

               
              </div>
              
              
            </div>
          </div>

          <div className="mt-20 justify-center items-center   flex space-x-4">
            <div
              className="text-white text-[16px] bg-[#B0B0B033] px-5 py-3 rounded-[10px] cursor-pointer"
              onClick={handleDoneClick}
            >
              Done
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateScrecet;
