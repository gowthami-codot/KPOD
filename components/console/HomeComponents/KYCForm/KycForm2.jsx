import { useState } from "react";
import CustomDropDown from "./CustomDropDown";
import RequestInference from "./RequestInference";
import KycForm3 from "./KycForm3";
import KycForm4 from "./KycForm4";
const KYCform2 = ({ onClose }) => {
  const [isInferenceOpen, SetInferenceOpen] = useState(true);
  const [kycForm1, SetKycForm1] = useState(false);
  const [KYCform4, SetKYCform4] = useState(false);
  const handleCloseKycform1 = () => {
    SetKycForm1(false);
    onClose();
  };
  const handleCloseKycform4 = () => {
    SetKYCform4(false);
    onClose();
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const [otherText, setOtherText] = useState("");
  const handleOtherTextChange = (e) => {
    setOtherText(e.target.value);
  };
  const [services, setServices] = useState("");
  const inputServices = (e) => {
    setServices(e.target.value);
  };
  const numbers = [{ num: "1" }, { num: "2" }, { num: "3" }, { num: "4" }];
  const handleNumberClick = (number) => {
    if (number === "1") {
      SetInferenceOpen(true);
      SetKycForm1(true);
      SetKYCform3(false);
      SetKYCform4(false);
    } else if (number === "2") {
      SetInferenceOpen(false);
      SetKycForm1(false);
      SetKYCform3(false);
      SetKYCform4(false);

      SetKYCform3(false);
    } else if (number === "3") {
      SetInferenceOpen(false);
      SetKycForm1(false);
      SetKYCform3(true);
      SetKYCform4(false);
    } else if (number === "4") {
      SetInferenceOpen(false);
      SetKycForm1(false);
      SetKYCform3(false);
      SetKYCform4(true);
    } else {
      SetInferenceOpen(false);
      SetKycForm1(false);
      SetKYCform3(false);
      SetKYCform4(false);
    }
  };
  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  const [KYCform3, SetKYCform3] = useState("");
  const handlekycForm3 = () => {
    SetKYCform3(true);
  };
  const handleCloseKycform3 = () => {
    SetKYCform3(false);
    onClose();
  };
  return (
    <>
      {!kycForm1 && !KYCform3 && !KYCform4 && (
        <>
          {" "}
          <div className="fixed inset-0 flex lg:items-start items-center justify-center bg-[#00000099]">
            <div className="bg-[#FFFFFF] shadow-md  my-auto text-[#000000] h-fit   md:w-[64%] w-[90%]    p-5 ">
              <div className="flex items-end justify-end md:mr-5 ">
                {" "}
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
              <div className="lg:mx-20 md:mx-10">
                <div className="md:text-[20px] text-[16px] text-[#181E22]  items-center md:mt-0 mt-2 mb-4  flex justify-center ">
                  <h2 className=" font-bold capitalize">
                    Tell us more about yourself{" "}
                  </h2>
                </div>
                <div className="flex items-center justify-center md:mb-10 mb-5 lg:space-x-28 md:space-x-14 space-x-8 relative">
                  {numbers.map((number, index) => (
                    <div
                      key={index}
                      className="flex items-center cursor-pointer"
                      onClick={() => {
                        handleNumberClick(number.num);
                      }}
                    >
                      <div className="relative flex items-center cursor-pointer">
                        <div
                          className={`bg-[#8BFFDC] bg-opacity-20 text-[#00C39B] w-12 h-12 font-bold flex items-center justify-center rounded-full ${
                            isInferenceOpen && number.num === "2"
                              ? "border-3 border-[#00C39B]"
                              : ""
                          }`}
                        >
                          {number.num}
                        </div>
                        {index < numbers.length - 1 && (
                          <div className="absolute top-1/2 left-full lg:w-28 md:w-14 w-8 h-[2px] bg-[#00C39B] transform -translate-y-1/2 flex items-center">
                            {index === 1 && isInferenceOpen && (
                              <div className="relative w-full h-full">
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#00C39B] transform -translate-y-1/2"></div>
                                <div className="absolute top-1/2 lg:left-16 md:left-8 left-4 transform -translate-x-1/2 -translate-y-1/2">
                                  {/* SVG Triangle Code */}
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 5 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1 7L4 4L1 1"
                                      stroke="#00C39B"
                                      stroke-linecap="round"
                                    />
                                  </svg>
                                </div>
                              </div>
                            )}
                            {index !== 0 && (
                              <div className="w-full h-[2px] bg-[#00C39B]"></div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="md:mt-6 mt-2">
                  <div className="flex lg:flex-row flex-col w-full">
                    <div className="flex flex-col lg:w-1/2 w-full lg:pr-2">
                      <div className="md:text-[12px] text-[9px] text-[#000000] text-opacity-70 font-medium">
                        MaaS services being used currently{" "}
                        <span className="text-[#00000080]">
                          (Select if applicable)
                        </span>
                      </div>
                      <div className="md:mt-1 mt-[2px] ">
                        <CustomDropDown
                          options={[
                            "OpenAI",
                            "Gemini",
                            "Anthropic",
                            "Claude",
                            "Others",
                          ]}
                          onSelect={handleSelect}
                        />
                        {selectedOption === "Others" && (
                          <div className="md:mt-2 mt-1">
                            <input
                              type="text"
                              value={otherText}
                              onChange={handleOtherTextChange}
                              placeholder="Type here"
                              className="mt-0 text-black rounded-[4px] md:text-[12px] text-[8px] pb-12 pt-4 px-6  focus:outline-none focus-visible:outline-none w-full bg-[#F9FAFB] "
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col lg:mt-0 md:mt-5 mt-3 lg:w-1/2 w-full lg:pl-2">
                      <div className="md:text-[12px] text-[9px] text-[#000000] text-opacity-70 font-medium">
                        GPU SKU Requirements:
                        <br />
                      </div>
                      <div className="md:mt-1 mt-[2px]">
                        <div>
                          <input
                            value={services}
                            onChange={inputServices}
                            className="mt-0 text-black rounded-[4px] focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] p-2 md:py-2 px-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col w-full lg:mt-4 md:mt-5 mt-3">
                    <div className="flex flex-col lg:w-1/2 w-full lg:pr-2">
                      <div className="md:text-[12px] text-[9px] text-[#000000] text-opacity-70 font-medium">
                        Are you using Bare Metal GPUs
                      </div>
                      <div className="mt-1">
                        <CustomDropDown
                          options={["Option 1", "Option 2", "Option 3"]}
                          onSelect={handleSelect}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col lg:w-1/2 w-full lg:pl-2 lg:mt-0 md:mt-5 mt-3">
                      <div className="md:text-[12px] text-[9px] text-[#000000] text-opacity-70 font-medium">
                        What frameworks are you using?
                      </div>
                      <div className="mt-1">
                        <CustomDropDown
                          options={["Option 1", "Option 2", "Option 3"]}
                          onSelect={handleSelect}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex lg:flex-row flex-col w-full lg:mt-4 md:mt-5 mt-3">
                    <div className="flex flex-col lg:w-1/2 w-full lg:pr-2">
                      <div className="md:text-[12px] text-[9px] text-[#000000] text-opacity-70 font-medium">
                        GPU Requirements:
                      </div>
                      <div className="mt-1">
                        <CustomDropDown
                          options={["Option 1", "Option 2", "Option 3"]}
                          onSelect={handleSelect}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col lg:w-1/2 lg:pl-2 w-full lg:mt-0 md:mt-5 mt-3">
                      <div className="md:text-[12px] text-[9px] text-[#000000] text-opacity-70 font-medium">
                        Services Used/Interested in
                      </div>
                      <div className="mt-1">
                        <CustomDropDown
                          options={["Option 1", "Option 2", "Option 3"]}
                          onSelect={handleSelect}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:mt-[20vh] md:mt-[10vh] mt-[3vh] mb-5 justify-center items-center  w-full  flex cursor-pointer ">
                  <div
                    onClick={handlekycForm3}
                    className="md:text-[16px] w-full flex items-center justify-center text-[12px]  bg-black text-white px-5 py-3 font-medium  cursor-pointer"
                  >
                    Next{" "}
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                    >
                      <path
                        d="M1.5 11L6.5 6L1.5 1"
                        stroke="white"
                        stroke-width="1.3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {kycForm1 && <RequestInference onClose={handleCloseKycform1} />}
      {KYCform3 && <KycForm3 onClose={handleCloseKycform3} />}
      {KYCform4 && <KycForm4 onClose={handleCloseKycform4} />}
    </>
  );
};

export default KYCform2;
