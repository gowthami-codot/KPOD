import { useState } from "react";
import CreateScrecet from "@/components/console/InferenceServices/CreateScrecet";
import Image from "next/image";
// import { fetchData } from "@/utils/auth";
import { toast } from "sonner";

const CreateApi = ({ onClose }) => {
    const [screcetKeyPopup, SetscrecetKeyPopup] = useState(false);
    const [keyname, setKeyName] = useState("");
    const [apikey, setApiKey] = useState("");
    const inputkey = (e) => {
        setKeyName(e.target.value);
    };

    const isKeynameValid = keyname.length > 0 && keyname.length < 50;

    const handleCreateApi = async () => {
        console.log(keyname.length);
        if (!isKeynameValid) {
            toast.error("Key name should be between 1 and 50 characters.");
            return;
        }

        try {
            const response = await fetchData("/api/apikey", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: keyname }),
            });

            const result = await response.json();
            setApiKey(result);

            if (response.status === 200) SetscrecetKeyPopup(true);
            else {
                toast.error("Something went wrong, try again.");
                onClose();
            }
        } catch (err) {
            toast.error("Something went wrong, try again.");
            onClose();
        }
    };

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-[#3d3939] bg-opacity-50">
                <div className="bg-[#FFFFFF] shadow-md   text-[#000000] h-fit  md:w-[36%] w-full md:mx-0 mx-5   rounded-[8px] p-5 ">
                    <div className="text-[20px] text-[#181E22]  flex justify-between ">
                        <h2 className=" font-bold"> Create new secret key</h2>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#000"
                            viewBox="0 0 16 16"
                            className="cursor-pointer"
                            onClick={onClose}
                        >
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </div>

                    <div className="mt-3">
                        <div>
                            <input
                                value={keyname}
                                onChange={inputkey}
                                placeholder="Enter Name"
                                className="mt-3 text-black  rounded-[4px]  px-10 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] p-2 md:p-4"
                            />
                        </div>
                    </div>

                    <div className="mt-10 justify-end items-end  flex space-x-4">
                        <div
                            className="text-[#181E22] font-bold md:text-[16px] text-[12px] bg-[#B0B0B033] px-5 py-3 rounded-[4px] cursor-pointer"
                            onClick={onClose}
                        >
                            Cancel
                        </div>
                        <div
                            className="md:text-[16px] text-[12px] bg-black text-white px-5 py-3 font-bold rounded-[4px] cursor-pointer"
                            onClick={handleCreateApi}
                        >
                            Create secret key
                        </div>
                    </div>
                    {/** TODO: Spelling and camelCase */}
                    {screcetKeyPopup && <CreateScrecet onClose={onClose} apikey={apikey} />}
                </div>
            </div>
        </>
    );
};

export default CreateApi;
