"use client";
import { BarChart } from "@mui/x-charts/BarChart";
import Image from "next/image";
import { useState } from "react";
import UsagePopup from "./UsagePopup";

const Usage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCreateApiClick = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen px-5 ">
      <div className="w-full h-full bg-[#0F1B2B]  rounded-[16px]">
        <div className="flex">
          <div className="text-[27px] font-bold mt-6 px-10 mb-5 text-[#8BFFDD] ">
            Usage
          </div>
          <div className="flex items-end justify-end pl-[29rem] ">
            {" "}
            <div
              className="flex justify-end  bg-[#FFFFFF4D] bg-opacity-30 mt-4 px-3 mr-10 rounded-[13px] border-[#FFFFFF] border-[2px]  py-4 items-end space-x-5 cursor-pointer"
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
          <div className="flex justify-end items-center bg-[#FFFFFF4D] bg-opacity-30 mt-4 mr-10 px-3 rounded-[13px] border-[#FFFFFF] border-[2px] -top-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="white"
            >
              <text x="0" y="20" font-size="20" font-family="Arial, sans-serif">
                &lt;
              </text>
            </svg>

            <div className="text-[17px] space-x-4 ">April</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
            >
              <text x="0" y="20" font-size="20" font-family="Arial, sans-serif">
                &gt;
              </text>
            </svg>
          </div>

          <div className="flex justify-end  bg-[#80FFF7] text-[17px] text-black font-bold mt-4  rounded-[20px] border-[#FFFFFF] border-[2px]  py-4 items-end  cursor-pointer">
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
