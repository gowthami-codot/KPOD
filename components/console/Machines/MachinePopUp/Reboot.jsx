const Reboot = ({onClose}) =>
    {
        return(<>
         <div className="fixed inset-0 flex  items-center justify-center bg-[#00000080]">
        <div className="bg-[#FFFFFF] shadow-md   my-auto text-[#000000] h-fit  mb-20   w-[780px]   lg:mt-5     p-5  ">
        <div className="flex justify-center items-center text-[24px]  mt-[52px] font-medium text-[#000000]">
        Reboot
        </div>
       <div className="text-[18px] text-[#000000] font-normal mt-[26px] mx-[75px]"><p>Are you sure you want to reboot your Machine service? This will temporarily interrupt your current session.</p></div>
       <div className="flex items-center justify-center mt-[36px] mb-[50px]">
        <div className="bg-[#010101] text-[#ffff] text-[18px] font-medium inline-block text-center pl-[65px] pr-[65px] rounded-[4px] py-4 cursor-pointer">Reboot Now</div>
        <div
              className="border-[1px] border-[#000000] text-[18px] font-medium rounded-[4px] px-8 ml-[12px] py-4 cursor-pointer" onClick={onClose}
            
            >
              Cancel
            </div>
        </div>
        </div>
      </div>
        </>)
    }

    export default Reboot;