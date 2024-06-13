import { useState } from "react";
// import CreateScrecet from "@/components/console/InferenceServices/CreateScrecet";
import Image from "next/image";
// import { fetchData } from "@/utils/auth";
import Link from "next/link";
// import { toast } from "sonner";
// import { validateSSHKey } from "@/utils/regex";

const RequestGPU = ({ onClose, setVmInstanceRequested }) => {
    const [sshKey, setApiKey] = useState("");
    const [enableButton, setEnableButton] = useState(true);
    const inputkey = (e) => {
        setApiKey(e.target.value);
    };

    // const handleRequest = async () => {
    //     if (!sshKey) {
    //         toast.error("Please fill your ssh key.");
    //         return;
    //     }

    //     if (!validateSSHKey(sshKey)) {
    //         toast.error("Put a valid SSH Key.");
    //         return;
    //     }

    //     try {
    //         setEnableButton(false);
    //         const response = await fetchData("/api/requestvm", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ sshKey: sshKey }),
    //         });

    //         if (response.status === 200) {
    //             setVmInstanceRequested();
    //             toast.success("Email Sent Successfully.");
    //             onClose(true);
    //         } else {
    //             onClose(false);
    //             setEnableButton(true);
    //             toast.error("Something went wrong, try again.");
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         onClose(false);
    //         setEnableButton(true);
    //         toast.error("Something went wrong, try again.");
    //     }
    // };

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-[#3d3939] bg-opacity-50">
                <div className="bg-[#FFFFFF] shadow-md   text-[#000000] h-fit   md:w-[36%] w-full md:mx-0 mx-5   rounded-[8px] p-5 ">
                    <div className="text-[20px] text-[#181E22]  flex justify-between ">
                        <h2 className=" font-bold">Enter your SSH Key </h2>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#000"
                            viewBox="0 0 16 16"
                            className="cursor-pointer"
                            onClick={() => onClose(false)}
                        >
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </div>

                    <div className="mt-3">
                        <div>
                            <input
                                value={sshKey}
                                onChange={inputkey}
                                placeholder="Public SSH Key"
                                className="mt-3 text-black  rounded-[4px]  md:px-10 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] p-2 md:p-4"
                            />
                            <Link href={"/ssh-keygen"} className="text-[12px] text-[#72C83E] mt-2">
                                How to generate private SSH Key
                            </Link>
                        </div>
                    </div>

                    <div className="mt-10 justify-end items-end  flex space-x-4">
                        <div
                            className="text-[#181E22] font-bold md:text-[16px] text-[12px] bg-[#B0B0B033] px-5 py-3 rounded-[4px] cursor-pointer"
                            onClick={() => onClose(false)}
                        >
                            Cancel
                        </div>
                        <button
                            className={`md:text-[16px] text-[12px] px-5 py-3 font-bold rounded-[4px] cursor-pointer ${
                                enableButton ? "bg-black text-white" : "bg-gray-400 text-gray-500 cursor-not-allowed"
                            }`}
                            onClick={handleRequest}
                            disabled={!enableButton}
                        >
                            Request Access
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RequestGPU;
