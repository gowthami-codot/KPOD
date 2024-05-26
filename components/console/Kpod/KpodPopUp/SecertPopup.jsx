import { useState } from "react";

const SecertPopup = ({ onClose }) => {
  const [input, setInput] = useState("");
  const inputField = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div className="fixed inset-0 flex lg:items-start items-center justify-center bg-[#00000080]">
        <div className="bg-[#F3F7F9] shadow-md  my-auto text-[#000000] h-fit  mb-20  md:w-[64%] w-[90%] md:mt-20  lg:mt-5 mt-10    p-5  ">
          <div className="flex items-end justify-end mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#000"
              viewBox="0 0 16 16"
              className="cursor-pointer"
              onClick={onClose}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>
          <div className="text-[#1D1D1D] md:text-[24px] text-[18px] font-semibold md:mx-10 mx-3 md:mt-0 mt-3">
            Choose a Secret
          </div>
          <div className="md:mt-8 mt-4 md:mx-10 md:mr-20">
            <div>
              <label className="text-[#00000099] text-[14px] font-medium">
                Search Secrets{" "}
              </label>
              <input
                value={input}
                onChange={inputField}
                placeholder="|"
                className="mt-0 text-black md:text-[16px] text-[12px]  rounded-[4px]  md:px-7 px-3 focus:outline-none focus-visible:outline-none w-full bg-[#fff] md:py-3 py-2"
              />
            </div>
          </div>
          <div className="md:mt-8 mt-4 md:mx-10 md:mr-20">
            <div className="bg-white  rounded-[4px]">
              <div className="flex border-b-[#D6D6D6] border-b-[2px]">
                <div className="text-black text-[14px] py-4 px-5 font-medium">
                  Secret Name
                </div>
              </div>
              <div className="flex -mt-14 lg:mr-40 justify-end">
                <div className="text-black text-[14px] py-5 px-5 font-medium">
                  Description
                </div>
              </div>
              <div className="flex items-center space-x-4 justify-center py-20">
                <div className="text-[16px] text-[#BABABA] font-semibold">
                  No Secrets found.
                </div>
                <div className="text-[14px] text-black underline font-medium">
                  Create one new
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-10 lg:mr-20 md:mr-10    flex items-end justify-end">
            <div className="bg-white  md:mb-40 mb-10 space-x-7 flex py-4 px-4 rounded-[4px]">
              {" "}
              <div className="md:text-[14px] text-[10px] md:pl-5 pl-2 text-black font-medium ">
                Rows per page:
              </div>
              <div className="md:text-[14px] text-[10px]  flex items-center text-black font-medium ">
                100
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 100 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="50,40 10,10 90,10" fill="black" />
                </svg>
              </div>
              <div className="md:text-[14px] text-[10px]  text-black font-medium ">
                0-0 of 0
              </div>
              <div className="md:text-[14px] text-[10px]  md:pr-5 pr-2  flex items-center  text-black font-medium ">
                <svg
                  width="37"
                  height="10"
                  viewBox="0 0 37 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.86 1.94L2.66 4.58C2.42 4.74 2.2 4.92 1.96 5.08L2.68 5.6L5.86 8.24L5.04 9.18L1.49012e-08 5.08L5.02 0.96L5.86 1.94ZM30.3195 1.94L31.1595 0.96L36.1795 5.08L31.1395 9.18L30.3195 8.24L33.4995 5.6L34.2195 5.08C33.9795 4.92 33.7595 4.74 33.5195 4.58L30.3195 1.94Z"
                    fill="#515151"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SecertPopup;
