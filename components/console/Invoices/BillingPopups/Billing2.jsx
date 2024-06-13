import Image from "next/image";

const Billing2 = () => {
  return (
    <>
      <div className="fixed inset-0 flex  items-center bg-[#00000034] justify-center">
        <div className="bg-[#ffff] rounded-[4px] drop-shadow-lg w-[391px] mx-10">
          <div className="flex space-x-3 mx-7 ">
            <div className="mt-[18px]">
              <Image
                src={require("@/public/Invoice/error.png")}
                className="w-[6vh]"
              />
            </div>
           <div className="flex flex-col my-4"> <div className="text-[18px] font-medium text-[#000000]">Your funds are running low.</div>
          <div className="text-[14px] mt-1 font-normal text-[#41515C] ">
            You are currently running a machine with only <span className="font-medium">15 minutes of runtime
            left</span>. Please add funds to continue running the machine.
          </div></div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Billing2;
