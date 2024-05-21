import { useState } from "react";


const FeedBack = ({ onClose }) => {

    const [Building, setBuilding] = useState("");
    const inputkey = (e) => {
        setBuilding(e.target.value);
    };

    

    const [mobile, setMobile] = useState("");
    const inputMob = (e) => {
        setMobile(e.target.value);
    };

    const [feed, setFeed] = useState("");
    const inputFeed = (e) => {
        setFeed(e.target.value);
    };

    return (
        <>
            <div className="fixed inset-0 flex lg:items-start items-center  justify-center lg:justify-end  bg-[#000000] bg-opacity-60">
                <div className="lg:mr-14 md:ml-10 lg:ml-0 lg:w-[38%] md:w-[60%] w-full my-auto"><div className="bg-[#FFFFFF] shadow-md    text-[#000000] h-fit    lg:mx-0 md:mx-0 mx-10   p-5 ">
                    <div className="text-[24px] text-[#181E22]  flex justify-between ">
                        <h2 className=" font-bold capitalize">Help us Improve  </h2>
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
                    <div className="mt-4">

                        <div className="mt-1">
                            <div className="relative rounded-[4px] md:px-5 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5]">
                                <label className="absolute inset-y-0 left-0 pl-5 flex  mb-7 items-center text-[#000000] text-opacity-35 text-[12px] font-semibold" htmlFor="nameInput">Name</label>
                                <input
                                    id="nameInput"
                                    value={Building}
                                    onChange={inputkey}
                                    className=" text-black  text-[16px] rounded-[4px] mt-4  focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] py-3 "
                                />
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="relative rounded-[4px] md:px-5 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5]">
                                <label className="absolute inset-y-0 left-0 pl-5 flex  mb-7 items-center text-[#000000] text-opacity-35 text-[12px] font-semibold" htmlFor="nameInput">Contact No</label>
                                <input
                                    id="nameInput"
                                    value={mobile}
                                    onChange={inputMob}
                                    className=" text-black  text-[16px] rounded-[4px] mt-4  focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] py-3 "
                                />
                            </div>
                        </div>


                        <div className="mt-5 relative">
                            <textarea
                                placeholder="| Type your feedback here"
                                onChange={inputFeed}
                                className="mt-0 text-black rounded-[4px] md:px-5 focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5] pb-20 pt-3"
                                maxLength="1000"
                                style={{ fontSize: '12px' }} // Set the font size to 12px
                            ></textarea>
                            <span className="absolute bottom-3 right-5 text-[#000000] text-opacity-50 text-xs font-semibold">
                                {feed.length}/1000
                            </span>
                        </div>

                        <div
                            className="md:text-[16px] mt-3 w-full flex items-center justify-center text-[12px] bg-black text-white px-5 py-3 font-medium  cursor-pointer"
                            
                        >
                           Submit your feedback
                        </div>



                    </div>

                </div></div>
            </div>
        </>
    );
};

export default FeedBack;
