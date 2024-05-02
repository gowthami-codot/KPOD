"use client";
import { BarChart } from "@mui/x-charts/BarChart";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import UsagePopup from "./UsagePopup";

const Usage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(3);
  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentMonthIndex(
        (currentMonthIndex - 1 + months.length) % months.length
      );
    } else if (direction === "right") {
      setCurrentMonthIndex((currentMonthIndex + 1) % months.length);
    }
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [monthPopup, setMonthPopup] = useState(false);

  const handleCreateApiClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen px-5 ">
      <div className="w-full  bg-[#0F1B2B]  rounded-[16px]">
        <div className="flex py-2">
          <div className="text-[27px]  font-bold mt-16 px-10  text-[#8BFFDD] ">
            Usage
          </div>
          <div className="flex items-end justify-end pl-[40rem] mr-5 ">
            {" "}
            <div className="relative">
              {" "}
              <div className="flex justify-between  items-center  mt-10 p-2 ">
                <div>
                  <select className="bg-white bg-opacity-15 border-white cursor-pointer border-1  rounded-lg  px-5 py-3 ">
                    <option className="text-black">Mistral</option>
                    <option className="text-black">LAMA 3</option>
                    <option className="text-black">Claude</option>
                  </select>
                </div>
               
              </div>
            </div>
            {/* <div className="absolute inset-0 left-0 flex justify-end bg-[#3d3939] bg-opacity-50 min-h-screen">
                <div
                  ref={popupRef}
                  className="bg-[#0F1D2E]  shadow-md mt-48 mr-[23%] text-[#000000] justify-end items-end h-[27%] w-[12%] rounded-[30px]"
                >
                  <div className="flex flex-col items-center justify-center p-10 space-y-4">
                    <div className="text-white text-[16px]">Mistral</div>
                    <div className="text-white text-[16px]">LAMA 3</div>
                    <div className="text-white text-[16px]">Claude</div>
                  </div>
                  <div className="mb-[80rem]"></div>
                </div>
              </div> */}
          </div>
          <div className="month-container flex justify-end  bg-[#FFFFFF4D] bg-opacity-30 mt-12  mb-3 px-2 mr-4 rounded-[13px] border-[#FFFFFF] border-[2px]  py-1 items-end space-x-5 cursor-pointer">
            <div
              className="angle left-angle text-[21px] cursor-pointer"
              onClick={() => handleClick("left")}
            >
              &lt;
            </div>
            <div className="month text-[17px] text-center pb-1">
              {months[currentMonthIndex]}
            </div>
            <div
              className="angle text-[21px] right-angle cursor-pointer"
              onClick={() => handleClick("right")}
            >
              &gt;
            </div>
          </div>

          {/* <div className="flex justify-end  bg-[#80FFF7] text-[17px] text-black font-bold mt-10  px-2 mr-4 rounded-[13px] border-[#FFFFFF] border-[2px]  py-1 items-end space-x-5 cursor-pointer">
            <div className="px-4 pb-[2px]">Export</div>
          </div> */}
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-[36rem] p-10">
          <div className="px-5 bg-[#8BFFDD] border-[#80FFF7] border-[1px] w-full rounded-[30px] ">
            <div className="text-[#0F1B2B] text-[17px] font-bold px-10 pt-10">
              API Requests | 350
            </div>
            <BarChart
              xAxis={[
                {
                  id: "barCategories",
                  data: ["A", "B", "C", "D", "E"],
                  scaleType: "band",
                  barCategoryGap: 4,
                },
              ]}
              series={[
                {
                  data: [2, 5, 3, 1, 2],
                },
              ]}
              width={370}
              height={250}
              colors={["#0F1B2B", "#0F1B2B"]}
            />
          </div>
          <div className="px-5  bg-[#8BFFDD] border-[#80FFF7] border-[1px] w-full rounded-[30px]">
            <div className="text-[#0F1B2B] text-[17px] font-bold px-10 pt-10">
              Token Requests | 350
            </div>
            <BarChart
              xAxis={[
                {
                  id: "barCategories",
                  data: ["A", "B", "C", "D", "E"],
                  scaleType: "band",
                  barCategoryGap: 4,
                },
              ]}
              series={[
                {
                  data: [2, 5, 3, 1, 2],
                },
              ]}
              width={370}
              height={250}
              colors={["#0F1B2B", "#0F1B2B"]}
            />
          </div>
         
        </div>
        
        {isPopupOpen && <UsagePopup onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default Usage;
