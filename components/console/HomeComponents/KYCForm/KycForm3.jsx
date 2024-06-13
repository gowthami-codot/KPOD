import { useState, useRef, useEffect } from "react";

import { useSearchParams } from "next/navigation";
import RequestInference from "./RequestInference";
import KYCform2 from "./KycForm2";
import KycForm3 from "./KycForm3";
import Congrats from "./Congrats";

const OTPInput = ({ length = 4, onComplete }) => {
  const [values, setValues] = useState(Array(length).fill(""));
  const [isVerified, setIsVerified] = useState(false); // State to track verification status
  const refs = useRef([]);

  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value.length > 0 && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && index > 0 && values[index] === "") {
      refs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (!values.includes("")) {
      onComplete(values.join(""));
      setIsVerified(true);
    }
  }, [values, onComplete]);

  return (
    <div>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          type="tel"
          maxLength={1}
          value={values[i]}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="w-10 h-10 rounded-md text-center mr-2 border border-gray-300"
        />
      ))}
      {isVerified && (
        <span className="ml-4 text-green-500">
          ✅ Your number has been verified.
        </span>
      )}
    </div>
  );
};

const KYCform3 = ({ onClose }) => {
  const searchParams = useSearchParams();
  const [isInferenceOpen, SetInferenceOpen] = useState(true);
  const [services, setServices] = useState("");
  const [isCongratsOpen, setIsCongratsOpen] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [contactNo, setContactNo] = useState("");

  const RequestForInference = searchParams.get("RequestForInference");

  const [kycForm1, SetKycForm1] = useState(false);
  const [kycform2, SetKYCform2] = useState(false);
  const [KYCform3, SetKYCform3] = useState(false);

  const handleCloseKycform1 = () => {
    SetKycForm1(false);
    onClose();
  };
  const handleCloseKycform2 = () => {
    SetKYCform2(false);
    onClose();
  };
  const handleCloseKycform3 = () => {
    SetKYCform3(false);
    onClose();
  };

  const inputServices = (e) => {
    setServices(e.target.value);
  };

  const numbers = [{ num: "1" }, { num: "2" }, { num: "3" }];

  const handleNumberClick = (number) => {
    if (number === "1") {
      SetInferenceOpen(true);
      SetKycForm1(true);
      SetKYCform2(false);
      SetKYCform3(false);
    } else if (number === "2") {
      SetInferenceOpen(false);
      SetKycForm1(false);
      SetKYCform2(true);
      SetKYCform3(false);
    } else if (number === "3") {
      SetInferenceOpen(false);
      SetKycForm1(false);
      SetKYCform2(false);
      SetKYCform3(true);
    } else {
      SetInferenceOpen(false);
      SetKycForm1(false);
      SetKYCform2(false);
      SetKYCform3(false);
    }
  };
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    setIsCongratsOpen(true);
  };

  const handleOTPComplete = (otp) => {
    console.log("OTP:", otp);
  };

  const handleCloseCongrats = () => {
    setIsCongratsOpen(false);
    onClose();
  };
  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };
  return (
    <>
      {!kycForm1 && !kycform2 && !isCongratsOpen && (
        <div className="fixed inset-0 flex lg:items-start items-center justify-center bg-[#00000099]">
          <div className="bg-[#FFFFFF] shadow-md my-auto text-[#000000] h-fit md:w-[64%] w-[90%] p-5">
            <div className="flex items-end justify-end md:mr-5">
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
            <div className="lg:mx-44 md:mx-10 mx-4">
              <div className="md:text-[20px] text-[16px] text-[#181E22] items-center mb-4 flex justify-center">
                <h2 className="font-bold capitalize">
                  Tell us more about yourself
                </h2>
              </div>
              <div className="flex items-center justify-center md:mb-10 mb-5 lg:space-x-28 md:space-x-14 space-x-8 relative">
                {numbers.map((number, index) => (
                  <div
                    key={index}
                    className="flex items-center cursor-pointer"
                    onClick={() => handleNumberClick(number.num)}
                  >
                    <div className="relative flex items-center cursor-pointer">
                      <div
                        className={`bg-[#8BFFDC] bg-opacity-20 text-[#00C39B] w-12 h-12 font-bold flex items-center justify-center rounded-full ${
                          isInferenceOpen && number.num === "3"
                            ? "border-3 border-[#00C39B]"
                            : ""
                        }`}
                      >
                        {number.num}
                      </div>
                      {index < numbers.length - 1 && (
                        <div className="absolute top-1/2 left-full lg:w-28 md:w-14 w-8 h-[2px] bg-[#00C39B] transform -translate-y-1/2 flex items-center">
                          {index === 2 && isInferenceOpen && (
                            <div className="relative w-full h-full">
                              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#00C39B] transform -translate-y-1/2"></div>
                              <div className="absolute top-1/2 lg:left-16 left-8 transform -translate-x-1/2 -translate-y-1/2"></div>
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

              <div className="md:mt-12 mt-6">
                <div className="flex w-full">
                  <div className="flex flex-col w-full lg:pr-2">
                    <div className="text-[12px] text-[#000000] text-opacity-70 font-medium">
                      {RequestForInference !== "true" && (
                        <div>
                          SSH Key{" "}
                          <span className="text-[20px] text-[#FF6868]">*</span>
                          <div className="mt-1">
                            <div>
                              <input
                                value={services}
                                onChange={inputServices}
                                placeholder="Public ssh key"
                                className="mt-0 text-black rounded-[4px] md:px-5 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] p-2 md:py-3"
                              />
                            </div>
                          </div>
                          <div className="text-sm text-[#72C83E] font-normal my-2">
                            How to generate private ssh key
                          </div>
                        </div>
                      )}
                      Contact Number
                      <span className="text-[20px] text-[#FF6868]">*</span>
                      <div className="mt-1">
                        <div>
                          <input
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                            className="mt-0 text-black rounded-[4px] md:px-5 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] p-2 md:py-3"
                          />
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-end mt-2  cursor-pointer">
                        Send OTP
                      </div>
                      <div className="mb-2">Enter Your OTP</div>
                      <OTPInput length={4} onComplete={handleOTPComplete} />
                    </div>
                    <div className="lg:mt-12 md:mt-24 mt-12 md:mx-5 mx-3 flex items-center">
                      <input
                        type="checkbox"
                        id="sshKeyCheckbox"
                        className="lg:mr-2 md:mr-4 mr-2 lg:w-4 lg:h-4 h-6 w-6 cursor-pointer"
                        checked={isCheckboxChecked}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        htmlFor="sshKeyCheckbox"
                        className="text-[12px] text-[#687986] font-medium"
                      >
                        I agree to receive marketing communications from
                        Krutrim.
                      </label>
                    </div>
                    <div className="text-[12px] lg:mt-6 mt-4 md:mx-12 mx-9 lowercase font-medium text-[#687986]">
                      Krutrim use the contact information you provide to send
                      your marketing materials, INCLUDING, NEWSLETTERS, EVENT
                      INVITES AND PROMOTIONs
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[3vh] mb-5 justify-center items-center w-full flex cursor-pointer">
                <button
                  className={`md:text-[16px] w-full flex items-center justify-center text-[12px] px-5 py-3 font-medium cursor-pointer ${
                    isCheckboxChecked
                      ? "bg-black text-white"
                      : "bg-gray-500 text-white cursor-not-allowed"
                  }`}
                  onClick={isCheckboxChecked ? handleSubmit : null}
                  disabled={!isCheckboxChecked}
                >
                  Submit your KYC
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {kycForm1 && <RequestInference onClose={handleCloseKycform1} />}
      {kycform2 && <KYCform2 onClose={handleCloseKycform2} />}
      {KYCform3 && <KycForm3 onClose={handleCloseKycform3} />}
      {isCongratsOpen && <Congrats onClose={handleCloseCongrats} />}
    </>
  );
};

export default KYCform3;
