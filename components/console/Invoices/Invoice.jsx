import { useState } from "react";
import InvoiceComponent from "./InvoiceComponent";
import FeedBack from "@/components/console/HomeComponents/FeedBack";
const Invoice = ()=>
    {
        const [feedback, SetFeedback] = useState(false);
        const feedBackClick = () => {
            SetFeedback(true);
          };
          const handleCloseFeedBack = () => {
            SetFeedback(false);
          };

        
        return(<>
         <div className="ml-20 bg-[#FBFDFD]  mr-16 mt-5 mb-6 md:mb-10">
         <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="text-[16px] text-[#396A82] font-medium cursor-pointer">
            Billing  <span className="ml-2">{">"}</span>
            </div>
            <div className="text-[#41515C] text-opacity-65 text-[16px] font-medium cursor-pointer">
            Invoices
            </div>
          </div>
          <div className="text-[#41515C] text-[16px]  mr-[72px]">
            Credit Balance: <span className="text-[#000000]">&#8377; 200</span>
          </div>
        </div>
        <div className="border-b-[2px] border-[#181E2214] mt-2 border-opacity-10"></div>
        <div className="flex flex-col items-start">
            <div className="text-[#000000] text-[28px] font-medium mt-[24px]" >
            Invoices
            </div>
          
          </div>
          <div>
            <InvoiceComponent/>
           </div>
           <div
        className="absolute right-0 top-1/2 font-semibold text-sm text-[#161717] bg-[#8BFFDC] md:p-4 p-1 rounded-tr-lg rounded-br-lg cursor-pointer"
        onClick={feedBackClick}
        style={{
          transform: "translateY(-50%) rotate(180deg)",
          writingMode: "vertical-rl",
          whiteSpace: "nowrap",
        }}
      >
        Give your feedback
      </div>
         </div>
         {feedback && <FeedBack onClose={handleCloseFeedBack} />}
        </>)
    }

    export default Invoice;