import Image from "next/image";

const AfterPay = ({onClose}) => {
  return (
    <>
      <div className="fixed inset-0 flex  items-center justify-center bg-[#00000080]">
        <div className="bg-[#FFFFFF] shadow-md   my-auto text-[#000000] h-fit  mb-20   w-[620px]   lg:mt-5     p-5  ">
          <div className="mt-[45px] flex  flex-col justify-center items-center">
            <div className="">
              <Image
                src={require("@/public/Invoice/check.png")}
                className="h-[29px] w-[29px]"
              />
            </div>
            <div className="mt-[6px] text-[24px] text-[#000000] font-medium">Done!</div>
            <div className="mt-[3px] text-[16px] text-[#000000]  font-normal">You have successfully added  &#8377;1000 in your wallet</div>
            <div className="flex mt-[19px] justify-center items-center mb-[42px]" onClick={onClose}>
            <div className="bg-[#000000] rounded-[4px] px-[53px] text-white py-2 cursor-pointer" >Ok</div>
           
        </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AfterPay;
