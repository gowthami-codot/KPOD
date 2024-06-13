import React from "react";

const ContactUs = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex lg:items-start items-center justify-center bg-[#00000099] ">
      <div className="bg-[#FFFFFF] shadow-md  my-auto text-[#000000] h-fit md:w-[40%] w-[90%]    p-5 ">
        <div className="flex justify-between">
          <div className="font-semibold text-2xl mb-4">Enterprise Query Form</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer"
              onClick={onClose}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col mt-2">
        <div>
            <div className="font-light text-sm">
              Organization Name
            <span className="text-[20px] text-[#FF6868]">*</span>{" "}
            </div>
          </div>
          <input
            className="mt-2 text-black rounded-[4px] md:px-5 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] p-2 "
          />
        </div>
        <div className="flex flex-col mt-2">
          <div>
            <div className="font-light text-sm">
              Mail id (Business mail Check)
            <span className="text-[20px] text-[#FF6868]">*</span>{" "}
            </div>
          </div>
          <input
            className="mt-2 text-black rounded-[4px] md:px-5 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] p-2 "
          />
        </div>
        <div className="flex flex-col mt-2">
        <div>
            <div className="font-light text-sm">
              Contact Number
            <span className="text-[20px] text-[#FF6868]">*</span>{" "}
            </div>
          </div>
          <input
            className="mt-2 text-black rounded-[4px] md:px-5 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] p-2 "
          />
        </div>
        <div className="flex flex-col mt-2">
          <div className="font-light text-sm">Current Cloud Provider (Optional)</div>
          <input
            className="mt-2 text-black rounded-[4px] md:px-5 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] p-2 "
          />
        </div>
        <div className="flex flex-col mt-2">
          <div className="font-light text-sm">Current Cloud Billing (Optional)</div>
          <input
            className="mt-2 text-black rounded-[4px] md:px-5 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] p-2 "
          />
        </div>
        <textarea 
          className="mt-2 text-black rounded-[4px] text-sm md:px-5 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] p-2 resize-none"
          placeholder="Type your enterprise query here"
        />
        <div className="md:text-[16px] w-full flex items-center justify-center text-[12px]  bg-black text-white px-5 py-3 font-medium  cursor-pointer">
        Submit Your Enterprise Query
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
