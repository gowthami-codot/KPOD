"use client";
import { BarChart } from "@mui/x-charts/BarChart";
import Image from "next/image";
import { useState } from "react";
import UsagePopup from "./UsagePopup";

const Usage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(3);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setCurrentMonthIndex((currentMonthIndex - 1 + months.length) % months.length);
    } else if (direction === 'right') {
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
 

  return (
    <div className="flex flex-col min-h-screen px-5 ">
      <div className="w-full  bg-[#0F1B2B]  rounded-[16px]">
        <div className="flex py-2">
          <div className="text-[27px]  font-bold mt-6 px-10  text-[#8BFFDD] ">
            Usage
          </div>
          <div className="flex items-end justify-end pl-[29rem] ">
            {" "}
            <div
              className="flex justify-end  bg-[#FFFFFF4D] bg-opacity-30 mt-8 px-3 mr-10 rounded-[13px] border-[#FFFFFF] border-[2px]  py-1 items-end space-x-5 cursor-pointer"
              onClick={handleCreateApiClick}
            >
              <div className="text-[18px]">Models</div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="white"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.29L18.29 11H5.71z" />
              </svg>
            </div>
          </div>
          <div className="month-container flex justify-end  bg-[#FFFFFF4D] bg-opacity-30 mt-10  px-3 mr-10 rounded-[13px] border-[#FFFFFF] border-[2px]  py-1 items-end space-x-5 cursor-pointer">
  <div className="angle left-angle text-[21px] cursor-pointer" onClick={() => handleClick('left')}>&lt;</div>
  <div className="month text-[17px] text-center pb-1">{months[currentMonthIndex]}</div>
  <div className="angle text-[21px] right-angle cursor-pointer" onClick={() => handleClick('right')}>&gt;</div>
</div>


          <div className="flex justify-end  bg-[#80FFF7] text-[17px] text-black font-bold mt-10  px-3 mr-10 rounded-[13px] border-[#FFFFFF] border-[2px]  py-1 items-end space-x-5 cursor-pointer">
            <div className="px-6">Export</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 p-10">
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
          <div className="px-5 bg-[#8BFFDD] border-[#80FFF7] border-[1px] w-full rounded-[30px]">
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
