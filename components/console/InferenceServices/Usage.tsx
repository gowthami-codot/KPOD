"use client";
import { BarChart } from "@mui/x-charts/BarChart";

const Usage = () => {
  return (
    <div className="px-5">
    <div className="text-xl font-bold mb-3">Usages</div>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="px-5 bg-white w-full rounded-lg">
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: ["A", "B", "C", "D", "E"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3, 1, 2],
            },
          ]}
          width={400}
          height={300}
          colors={["#40E0D0", "#228B22"]}
        />
      </div>
      <div className="px-5 bg-white w-full rounded-lg">
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: ["A", "B", "C", "D", "E"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3, 1, 2],
            },
          ]}
          width={400}
          height={300}
          colors={["#40E0D0", "#228B22"]}
        />
      </div>
      </div>
    </div>
  );
};

export default Usage;
