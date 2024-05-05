"use client";
import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";

const cleanPercentage = (percentage) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Circle = ({ colour, percentage }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""}
      strokeWidth={"2rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  );
};

const Text = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const Pie = ({ percentage }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="lightgrey" />
        <Circle colour="grey" percentage={pct} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
};

const Usage = () => {
  const chartData = [
    {
      label: "API Requests | 350",
      BarChartData: {
        xAxis: [
          {
            id: "barCategories",
            data: ["A", "B", "C", "D", "E"],
            scaleType: "band",
            barCategoryGap: 4,
          },
        ],
        series: [
          {
            data: [2, 5, 3, 1, 2],
          },
        ],
        width: 370,
        height: 250,
        colors: ["#9FC4CC", "#9FC42B"],
      },
    },
    {
      label: "Token Requests | 350",
      BarChartData: {
        xAxis: [
          {
            id: "barCategories",
            data: ["A", "B", "C", "D", "E"],
            scaleType: "band",
            barCategoryGap: 4,
          },
        ],
        series: [
          {
            data: [2, 5, 3, 1, 2],
          },
        ],
        width: 370,
        height: 250,
        colors: ["#9FC4CC", "#9FC42B"],
      },
    },
  ];

  const monthLabels = [
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

  const [currentMonthIndex, setCurrentMonthIndex] = useState(3);

  const prevMonth = () => {
    setCurrentMonthIndex(
      (prevIndex) => (prevIndex - 1 + monthLabels.length) % monthLabels.length
    );
  };

  const nextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % monthLabels.length);
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-10 gap-8 ">
      <div className="w-full min-h-10 flex  md:flex-row justify-between items-center">
        <p className="text-[32px] md:mt-0 -mt-32 text-[#181E22] font-medium leading-6">
          Usage
        </p>
        <div className="flex md:flex-row flex-col md:mt-0 mt-6 gap-3 h-full">
          {/*  */}
          <div className="flex w-[119px] h-[46px] justify-center items-center px-4 bg-[#F3F4F5] rounded-md">
            <select className="bg-[#F3F4F5] w-full text-[#687986] text-[14px]  focus:ring-0">
              <option>Models</option>
            </select>
          </div>
          {/*  */}
          <div className="flex space-x-5  w-[119px] h-[46px] justify-between items-center px-2 bg-[#F3F4F5] rounded-md">
            <span
              className="cursor-pointer bg-[#F3F4F5] w-full text-[#687986] text-[20px]"
              onClick={prevMonth}
            >
              &#8249;
            </span>

            <p className=" bg-[#F3F4F5] w-full text-[#687986] text-[14px] ">
              {monthLabels[currentMonthIndex]}
            </p>

            <span
              className="cursor-pointer bg-[#F3F4F5] w-full text-[#687986] text-[20px]"
              onClick={nextMonth}
            >
              &#8250;
            </span>
          </div>
          {/*  */}
          {/* <div className="flex w-[119px] h-[46px] justify-center items-center px-2 bg-black rounded-md">
            <p className="cursor-pointer text-center text-[#FFFFFF] w-full text-[16px]">
              Export
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 ">
        {chartData.map((data, index) => (
          <div
            className="px-5 bg-[#181E220F] w-full rounded-md overflow-scroll"
            key={index}
          >
            <div className="text-[#41515C] text-[16px] font-medium pt-10">
              {data.label}
            </div>
            <BarChart
              xAxis={data.BarChartData.xAxis}
              series={data.BarChartData.series}
              width={data.BarChartData.width}
              height={data.BarChartData.height}
              colors={data.BarChartData.colors}
            />
          </div>
        ))}
      </div>
      <div>
        <div className="text-black text-xl md:text-2xl lg:text-3xl font-medium z-50">
          Total Token Usage
        </div>
        <div className="flex flex-col md:flex-row items-center my-6 md:my-10 gap-10 md:gap-3">
          <Pie percentage={10} />
          <div className="flex flex-col items-start justify-center">
            <div className="text-xl md:text-2xl font-bold text-black">32,800 Tokens</div>
            <div className="text-gray-400 text-md">/ 4,800,000 Limit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
