import { useState } from "react";
import CustomDropDown from "./CustomDropDown"
import RequestInference from "./RequestInference";
import Image from "next/image";


const Congrats = ({ onClose }) => {





    return (
        <>
            <div className="fixed inset-0 flex lg:items-start items-center justify-center bg-[#00000099]">
                <div className="bg-[#FFFFFF] shadow-md  my-auto text-[#000000] h-fit   md:w-[64%] w-[90%]    p-5 ">
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
                    <div className="flex flex-col mt-10 items-center justify-center">         
                       <Image src={require("../../../../public/congrats.png")} alt="" className="lg:w-[8vh] lg:h-[8vh] w-[4vh] h-[4vh]" />
                       <div className="text-[#000000] mt-3 text-[16px] font-bold">Congratulations!</div>
                       <div className="text-[#000000] mt-2 mb-10 md:text-[16px] text-[11px] font-medium">You have successfully completed your KYC process.</div>
                    </div>
                </div>
            </div>
            {/* {isInferenceOpen && <RequestInference onClose={handleCloseInference} />} */}
        </>
    );
};

export default Congrats;
