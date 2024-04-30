import { useState } from "react";
import CreateScrecet from "@/components/console/InferenceServices/CreateScrecet";

const CreateApi = ({ onClose }) => {
  const [screcetKeyPopup, SetscrecetKeyPopup] = useState(false);
  const [createApi, setApiKey] = useState("");
  const inputkey = (e) => {
    setApiKey(e.target.value);
  };
  const handleShowHiText = () => {
    SetscrecetKeyPopup(true);
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#3d3939] bg-opacity-50">
        <div className="bg-[#0F1D2E] shadow-md   text-[#000000] h-[74%]  w-[60%]  rounded-[30px]">
          <div className="text-[20px] text-white px-16 py-14 ">
            Create new secret key
          </div>

          <div className="mt-6 px-16">
            <div className="text-[16px] text-white">Name</div>
            <div>
              {" "}
              <input
                onChange={inputkey}
                placeholder="My Test Key"
                className="mt-3 text-white border-[#80FFF7] rounded-[14px] border-[1px] px-10 focus:outline-none focus-visible:outline-none w-full bg-transparent p-2 md:p-4"
              />
            </div>
          </div>

          <div className="mt-20 justify-end items-end pr-20 flex space-x-4">
            <div
              className="text-white text-[16px] bg-[#B0B0B033] px-5 py-3 rounded-[10px] cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </div>
            <div
              className="text-[16px] bg-[#80FFF7] px-5 py-3 font-bold rounded-[14px] cursor-pointer"
              onClick={handleShowHiText}
            >
              Create secret key
            </div>
          </div>
          {screcetKeyPopup && (
            <CreateScrecet
              onClose={onClose}
             
              
            />
          )}
        </div>
      </div>
    </>
  );
};
export default CreateApi;
