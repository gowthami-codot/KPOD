import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "200" });
const poppinsBold = Poppins({ subsets: ["latin"], weight: "600" });

const Business = () => {
  return (
    <div className="bg-white text-black">
      <div className="py-10 md:py-20 px-5 md:px-40 relative">
        <div className={`${poppinsBold.className} text-black text-center text-xl md:text-2xl lg:text-4xl font-bold mb-3 md:mb-6 lg:mb-10`}>Krutrim for Business</div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-center w-full">
          <div className="w-full md:w-[60%] flex flex-col gap-3 md:gap-6 items-stretch justify-center z-10">
            <div className="border border-[#8BFFDC] p-4 md:p-10 rounded-2xl">
              <div className="text-lg font-bold">Chores made easy</div>
              <div className={`${poppins.className} text-md my-3 md:my-6`}>
                Delegate your day to day tasks to Krutrim, easily navigate
                language barriers.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-stretch">
              <div className="w-full border border-[#8BFFDC] p-4 md:p-10 rounded-2xl">
                <div className="text-lg font-bold">Search beyond web</div>
                <div className={`${poppins.className} text-md my-3 md:my-6`}>
                  Find and buy stuff from the offline world with the ease of
                  online world.
                </div>
              </div>
              <div className="w-full border border-[#8BFFDC] p-4 md:p-10 rounded-2xl relative">
                <div className="text-lg font-bold">
                  Scalable business enablement
                </div>
                <div className={`${poppins.className} text-md my-3 md:my-6`}>
                  High quality customer interactions and effective fulfillment
                  of customer requests.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
