import { useRouter } from "next/navigation";

const Summary = () =>
  
{
    const router = useRouter();
    return(<>
      <div className="fixed inset-0 flex  items-center justify-center bg-[#00000080]">
        <div className="bg-[#FFFFFF] shadow-md rounded-[8px]  my-auto text-[#000000] h-fit  mb-20   w-[437px]   lg:mt-5     p-5  ">
        <div className="flex justify-center items-center text-[22px]  mt-[25px] font-medium text-[#000000]">
        Summary
        </div>
        <div className="ml-12">
        <div className="flex items-start justify-between mt-[29px]">
            <div className="text-[18px] font-medium text-[#000000] ">Machine Name <span className="ml-[30px] text-[18px] font-normal">: machine 1</span></div>
            
        </div>
        <div className="flex  items-start justify-between mt-[26px]">
            <div className="text-[18px] font-medium text-[#000000] mr-[13px] "> Data Center <span className=" ml-[56px] text-[18px] font-normal">: In-Bangalore-1</span></div>
            
        </div>
        <div className="flex  items-start  justify-between mt-[26px]">
            <div className="text-[18px] font-medium text-[#000000] mr-[13px] "> No of GPU&apos;s <span className=" ml-[65px] text-[18px] font-normal">: 1</span></div>
            
        </div>
        <div className="flex  items-start  justify-between mt-[26px]">
            <div className="text-[18px] font-medium text-[#000000] mr-[13px] "> Price <span className=" ml-[120px] text-[18px] font-normal">:  &#8377; 10/ hr</span></div>
            
        </div>

     
        </div>
        <div className="flex mt-[40px] justify-center items-center mb-[30px]">
            <div className="bg-[#000000] rounded-[4px] px-12 text-white py-3 cursor-pointer" onClick={()=>{router.push("/console/machines?section=listMachine")}}>Confirm</div>
            <div
              className="border-[1px] border-[#000000] rounded-[4px] px-9 ml-[12px] py-3 cursor-pointer"
            
            >
              Cancel
            </div>
        </div>
        </div>
      </div>

    </>)
}

export default Summary;