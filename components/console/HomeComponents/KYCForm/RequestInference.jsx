import { useState } from "react";
import CustomDropdown from "./CustomDropDown";
import KYCform2 from "./KycForm2";
import KycForm3 from "./KycForm3";

const RequestInference = ({ onClose }) => {
  const [isInferenceOpen, SetInferenceOpen] = useState(true);
  const [kycform2, SetKYCform2] = useState(false);
  const [KYCform3, SetKYCform3] = useState(false);
  const [KYCform4, SetKYCform4] = useState(false);
  const [contactNo, setContactNo] = useState("");
  const [selectedDesignation, setSelectedDesignation] = useState("");
  const [otherText, setOtherText] = useState("");

  const handleCloseKycform3 = () => {
    SetKYCform3(false);
    onClose();
  };

  const [Business, setBusiness] = useState("");
  const inputBusiness = (e) => {
    setBusiness(e.target.value);
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const [services, setServices] = useState("");
  const inputServices = (e) => {
    setServices(e.target.value);
  };

  const [app, setApp] = useState("");
  const inputApp = (e) => {
    setApp(e.target.value);
  };
  const [stage, setStage] = useState("");
  const inputStage = (e) => {
    setStage(e.target.value);
  };

  const numbers = [{ num: "1" }, { num: "2" }, { num: "3" }];

  const handleNumberClick = (number) => {
    if (number === "1") {
      SetInferenceOpen(true);
      SetKYCform2(false);
      SetKYCform3(false);
    } else if (number === "2") {
      SetInferenceOpen(false);
      SetKYCform2(true);
      SetKYCform3(false);
    } else if (number === "3") {
      SetInferenceOpen(false);
      SetKYCform2(false);
      SetKYCform3(true);
    } else {
      SetInferenceOpen(false);
      SetKYCform2(false);
      SetKYCform3(false);
    }
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  const handlekycForm2 = () => {
    SetKYCform2(true);
  };
  const handleCloseKycform2 = () => {
    SetKYCform2(false);
    onClose();
  };

  const handleDesignationSelect = (option) => {
    setSelectedDesignation(option);
  };
  return (
    <>
      {!kycform2 && !KYCform3 && (
        <>
          {" "}
          <div className="fixed inset-0 flex lg:items-start items-center justify-center bg-[#00000099] ">
            <div className="bg-[#FFFFFF] shadow-md  my-auto text-[#000000] h-fit   md:w-[64%] w-[90%]    p-5 ">
              <div className="flex items-end justify-end md:mr-5 mr-2">
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
              <div className="lg:mx-20">
                <div className="md:text-[20px] text-[16px] text-[#181E22]  items-center md:mt-0 mt-5 mb-3  flex justify-center ">
                  <h2 className=" font-bold capitalize">
                    Tell us more about yourself{" "}
                  </h2>
                </div>
                <div className="flex items-center justify-center lg:space-x-28 md:space-x-14 space-x-8 relative lg:mx-0 md:mx-10 mx-5">
                  {numbers.map((number, index) => (
                    <div
                      key={index}
                      className="flex items-center cursor-pointer"
                      onClick={() => {
                        handleNumberClick(number.num);
                      }}
                    >
                      <div className="relative flex items-center ">
                        <div
                          className={`bg-[#8BFFDC] bg-opacity-20 text-[#00C39B] w-12 h-12 font-bold flex items-center justify-center rounded-full ${
                            isInferenceOpen && number.num === "1"
                              ? "border-3 border-[#00C39B]"
                              : ""
                          }`}
                        >
                          {number.num}
                        </div>
                        {index < numbers.length - 1 && (
                          <div className="absolute top-1/2 left-full lg:w-28 md:w-14 w-8 h-[2px] bg-[#00C39B] transform -translate-y-1/2 flex items-center">
                            {index === 0 && isInferenceOpen && (
                              <div className="relative w-full h-full">
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#00C39B] transform -translate-y-1/2"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                  {/* SVG Triangle Code */}
                                  {/* <svg
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
                                  </svg> */}
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

                <div className="mt-5">
                  <div>
                    <div className="text-[12px] text-[#000000] text-opacity-70 font-medium">
                      Designation
                      <span className="text-[20px] text-[#FF6868]">*</span>{" "}
                    </div>
                    <div>
                      <div>
                        <CustomDropdown
                          options={[
                            "CEO",
                            "CTO",
                            "CIO",
                            "IT Manager",
                            "Procurement",
                            "Finance",
                            "Product",
                            "Others",
                          ]}
                          onSelect={handleDesignationSelect}
                        />
                        {selectedDesignation === "Others" && (
                          <div className="md:mt-2 mt-1">
                            <input
                              type="text"
                              value={otherText}
                              onChange={(e) => setOtherText(e.target.value)}
                              placeholder="Type here"
                              className="mt-0 text-black rounded-[4px] md:text-[12px] text-[8px] pb-12 pt-4 px-6  focus:outline-none focus-visible:outline-none w-full bg-[#F9FAFB] "
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                    <div>
                      <div>
                        <div className="text-[12px] text-[#000000] text-opacity-70 font-medium my-3">
                          Organisation Name
                          <span className="text-[20px] text-[#FF6868]">
                            *
                          </span>{" "}
                        </div>

                        <div>
                          <div>
                            <input
                              value={Business}
                              onChange={inputBusiness}
                              className="mt-0 text-black  rounded-[4px]  md:px-5 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] p-1.5"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-[12px] text-[#000000] text-opacity-70 font-medium my-3">
                          Number of employees
                          <span className="text-[20px] text-[#FF6868]">
                            *
                          </span>{" "}
                        </div>
                        <div>
                          <div>
                            <CustomDropdown options={["1", "2", "3", "4"]} />
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                <div
                  className="mt-4 md:mt-20 mb-5 justify-center items-center  w-full  flex cursor-pointer "
                  onClick={handlekycForm2}
                >
                  <div className="md:text-[16px] w-full flex items-center justify-center text-[12px]  bg-black text-white px-5 py-3 font-medium  cursor-pointer">
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
      {kycform2 && <KYCform2 onClose={handleCloseKycform2} />}
      {KYCform3 && <KycForm3 onClose={handleCloseKycform3} />}
    </>
  );
};

export default RequestInference;
