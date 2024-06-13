"use client";
import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useRef, useState } from "react";
// import { fetchData } from '@/utils/auth';

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

  const [currentMonthIndex, setCurrentMonthIndex] = useState(4); // April is the 4th month (index 3)

  const year = 2024;

  const prevMonth = () => {
    setCurrentMonthIndex(
      (prevIndex) => (prevIndex - 1 + monthLabels.length) % monthLabels.length
    );
  };

  const nextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % monthLabels.length);
  };
  const [model, setModel] = useState("Meta-Llama-3-8B-Instruct");

  const [tokenxAxis, setTokenAxis] = useState([]);
  const [tokenData, setTokenData] = useState([{data:[]}]);
  var tokenUsage = null;
  var totalTokenUsage = null;

  const getTotalTokenUsage = async () => {
    console.log("getTotalTokenUsage")
    try {
      const response_token = await fetchData("/api/usage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isToken: true,
          isDay: true,
        }),
      });

      var result = await response_token.json();

      if (result && result.data) {
        if (result.data) {
          totalTokenUsage = result.data;
          var totalData = totalTokenUsage.filter(item => item.groupBy.type === "total");
          //console.log(totalData);
          var totalValue = 0;

          totalData.forEach(item => {
            totalValue += item.value;
          });

          console.log("Total total count: ", totalValue);
          //updateTokenChart();
          return true;
        }
      }
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  const getTokenUsage = async (month) => {

    console.log("getTokenUsage")
    const fromDate = new Date(year, month, 1);
    const toDate = new Date(year, month + 1, 1);

    // var fromDate = new Date(toDate);
    // var toDate = new Date();    
    // fromDate.setDate(fromDate.getDate() - 3);
    // toDate.setDate(toDate.getDate() + 1);

    var todate = toDate.toISOString().split('T')[0]
    var fromdate = fromDate.toISOString().split('T')[0]

    try {
      const response_token = await fetchData("/api/usage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isToken: true,
          isDay: true,
          fromDate: fromdate,
          toDate: todate
        }),
      });

      var result = await response_token.json();

      if (result && result.data) {
        if (result.data) {
          tokenUsage = result.data;
          updateTokenChart();
          return true;
        }
      }
      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  const updateTokenChart = () => {
    var totalData = tokenUsage.filter(item => item.groupBy.type === "total");
    totalData = totalData.filter(item => item.groupBy.model === model);
    // Extract windowStart values for xAxis
    var windows = totalData.map(item => item.windowStart.substring(0, 10));
    setTokenAxis(windows);
    //console.log(tokenUsage);

    var series = [
      { id: "prompt", data: [], label: 'prompt', stack: "total"},
      { id: "completion", data: [], label: 'completion', stack: "total" }
    ];

    for (var window of windows) {
      series[0].data.push(0);
      series[1].data.push(0);
    }

    for (var usage of tokenUsage) {
      if(usage.groupBy.model === model) {
        windows.forEach((window, index) => {
            if (usage.windowStart.substring(0, 10) === window) {
              if (usage.groupBy.type === "prompt") {
                series[0].data[index] = usage.value;
              }
              if (usage.groupBy.type === "completion") {
                series[1].data[index] = usage.value;
              }
            }
        })
      }
    }

    //console.log(series);
    setTokenData(series);


    // Convert data into a format suitable for BarChart
    //setTokenData(totalData.map(item => item.value))
  }

  const [apiAxis, setApiAxis] = useState([]);
  const [apiData, setApiData] = useState([]);
  var apiUsage = null;

  const getApiUsage = async (month) => {
    const fromDate = new Date(year, month, 1);
    const toDate = new Date(year, month + 1, 1);

    var todate = toDate.toISOString().split('T')[0]
    var fromdate = fromDate.toISOString().split('T')[0]

    try {
      const response_api = await fetchData("/api/usage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isToken: false,
          isDay: true,
          fromDate: fromdate,
          toDate: todate
        }),
      });


      var result = await response_api.json();

      if (result && result.data) {
        if (result.data) {
          apiUsage = result.data;
          updateApiUsage();
          return true;
        }
      }
      return false;
    } catch (err) {

      return false;
    }
  }

  const updateApiUsage = () => {
    var modelData = apiUsage.filter(item => item.groupBy.route === model);
    setApiAxis(modelData.map(item => item.windowStart.substring(0, 10)))
    setApiData(modelData.map(item => item.value))
  }

  var intervalId = null;

  const updateChart = (month) => {
    console.log("updateChart");
    const update = async () => {
      if (await getTokenUsage(month) && await getApiUsage(month)) {
        return true;
      }
      return false;
    }

    update().then(result => {
      if (result === false && intervalId === null) {
        intervalId = setInterval(update, 3000);
      }

      if (result && intervalId !== null) {
        clearInterval(intervalId);
      }
    })
  }

  useEffect(() => {
    getTotalTokenUsage();
  }, []);

  useEffect(() => {
    updateChart(currentMonthIndex);

    return () => {
      if (intervalId !== null)
        clearInterval(intervalId);
    }
  }, [currentMonthIndex, model]);

  return (
    <div className="flex flex-col min-h-screen w-full bg-white p-10 gap-8 md:fixed md:ml-12 md:w-[85vw]">
      <div className="w-[90%] min-h-10 flex md:flex-row justify-between items-center">
        <p className="text-[32px] md:mt-0 -mt-16 text-[#181E22] font-medium leading-6">
          Usage
        </p>
        <div className="flex md:mt-0 mt-6 gap-3 h-full">
          {/*  */}
          <div className="flex w-[119px] h-[46px] justify-center items-center px-4 bg-[#F3F4F5] rounded-md">
            <select className="bg-[#F3F4F5] w-full text-[#687986] text-[14px]  focus:ring-0"
              value={model}
              onChange={(e) => {
                setModel(e.target.value)
              }}>
              <option value="Meta-Llama-3-8B-Instruct" className="text-black">Meta-Llama-3-8B-Instruct</option>
              <option value="Mistral-7B-Instruct" className="text-black">Mistral-7B-Instruct</option>
              <option value="Krutrim-spectre-v2" className="text-black">Krutrim-spectre-v2</option>
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

        <div
          className="px-5 bg-[#181E220F] w-full rounded-md overflow-scroll"

        >
          <div className="text-[#41515C] text-[16px] font-medium pt-10">
            API Requests | {model}
          </div>
          <BarChart
            xAxis={[
              {
                id: "barCategories",
                data: apiAxis,
                scaleType: "band",
                barCategoryGap: 4,
              },
            ]}
            series={[
              {
                data: apiData,
              },
            ]}
            width={370}
            height={250}
            // colors={["#0F1B2B", "#0F1B2B"]}
          />
        </div>

        <div className="px-5 bg-[#181E220F] w-full rounded-md overflow-scroll">
          <div className="text-[#41515C] text-[16px] font-medium pt-10">
            Token Requests | {model}
          </div>
          <BarChart
            xAxis={[
              {
                id: "barCategories",
                data: tokenxAxis,
                scaleType: "band",
                barCategoryGap: 4,
              },
            ]}
            series={tokenData}
            width={370}
            height={250}
            // colors={["#0F1B2B", "#0F1B2B"]}
          />
        </div>
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Usage;
