const EditAccount = ({onClose}) =>
    {
        return(<>
         <div className="fixed inset-0 flex  items-center justify-center bg-[#00000080]">
        <div className="bg-[#FFFFFF] shadow-md   my-auto text-[#000000] h-fit  mb-20   w-[621px]   lg:mt-5     p-5  ">
        <div className="flex justify-center items-center text-[24px]  mt-[25px] font-medium text-[#000000]">
        Edit Account
        </div>
        <div className="mx-[39px] mt-[37px]">
      <div>
        <div className="text-[18px] font-medium text-[#000000]"> Account Name</div>
        <div className="mt-[8px]">
        <input
                type="text"
                className="rounded-[4px] border-[1px]  focus:outline-none text-black border-[#000000] border-opacity-25 py-3 px-4 bg-[#FBFDFD] w-full"
              />
        </div>
      </div>
      <div className="mt-[16px]">
        <div className="text-[18px] font-medium text-[#000000]"> Invoice Name</div>
        <div className="mt-[8px]">
        <input
                type="text"
                className="rounded-[4px] border-[1px]  focus:outline-none text-black border-[#000000] border-opacity-25 py-3 px-4 bg-[#FBFDFD] w-full"
              />
        </div>
      </div>
      <div className="mt-[16px]">
        <div className="text-[18px] font-medium text-[#000000]"> Invoice Email id </div>
        <div className="mt-[8px]">
        <input
                type="text"
                className="rounded-[4px] border-[1px]  focus:outline-none text-black border-[#000000] border-opacity-25 py-3 px-4 bg-[#FBFDFD] w-full"
              />
        </div>
      </div>
      <div className="mt-[16px]">
        <div className="text-[18px] font-medium text-[#000000]"> GSTIN </div>
        <div className="mt-[8px]">
        <input
                type="text"
                className="rounded-[4px] border-[1px]  focus:outline-none text-black border-[#000000] border-opacity-25 py-3 px-4 bg-[#FBFDFD] w-full"
              />
        </div>
      </div>

     
        </div>
        <div className="flex mt-[40px] justify-center items-center mb-[30px]" onClick={onClose}>
            <div className="bg-[#000000] rounded-[4px] px-[64px] text-white py-2 cursor-pointer" >Save</div>
           
        </div>
        </div>
      </div>
        </>)
    }

    export default EditAccount;
   