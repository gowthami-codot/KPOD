import Image from "next/image";
import { useRef, useState } from "react";

const CreateScrecet = ({ onClose }) => {
  const [screcetKey, setScreteKey] = useState("");

  const inputRef = useRef(null);

  const copyToClipboard = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value).then(
        function () {
          toast.success("Copying to clipboard was successful!");
        },
        function (err) {
          toast.error("Could not copy text: ", err);
        }
      );
    }
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
        <div className="bg-[#FFFFFF] shadow-md   text-[#000000] h-fit  md:w-[36%] w-full md:mx-0 mx-5   rounded-[8px] p-5 ">
          <div className="text-[20px] text-[#181E22]  flex justify-between ">
            <h2 className=" font-bold"> Save your key </h2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000"
              viewBox="0 0 16 16"
              onClick={handleDoneClick}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>

          <div className="rounded-[8px]  bg-[#F3F4F5] mt-6">
            <div className="flex justify-between pt-3">
              <input
                ref={inputRef}
                onChange={handleChangekey}
                placeholder="Your Key"
                className=" text-[#687986] font-medium bg-transparent  focus:outline-none focus-visible:outline-none w-full  px-4 "
              />
              <div
                className="  rounded-[13px] items-center cursor-pointer space-x-2  justify-center flex  px-3 py-2"
                onClick={copyToClipboard}
              >
                <h2> Copy </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#000"
                  class="bi bi-copy"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                  />
                </svg>
              </div>{" "}
            </div>

            <div className=" w-[90%] mx-auto border-t-1 border-[#e0e1e2] p-5 text-center">
              {" "}
              092713ukhqi8nxy8wq3
            </div>
          </div>

          <div className="mt-10   flex justify-end">
            <div
              className=" text-[16px]  bg-black font-bold px-7 text-white  py-3 rounded-[4px] cursor-pointer"
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
