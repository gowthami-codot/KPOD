const AddSshPop = ({onAddKey, onClose}) => {
  return (
    <>
     <div className="fixed inset-0 flex items-center justify-center bg-[#00000080]">
        <div className="bg-[#FFFFFF] shadow-md my-auto text-[#000000] h-fit mb-20 w-[561px] lg:mt-5 p-5">
          <div className="text-[24px] font-medium flex justify-center">
            Add SSH Key
          </div>
          <div className="mx-[29px] mt-[32px]">
            <div className="text-[18px] font-medium text-[#000000]">
              Name of the SSH Key
            </div>
            <div>
              <input
                type="text"
                className="rounded-[4px] border-[1.5px] mt-2 focus:outline-none text-black border-[#00000014] py-3 px-4 bg-[#FBFDFD] w-full"
              />
            </div>
          </div>
          <div className="mx-[29px] mt-[30px]">
            <div className="text-[18px] font-medium text-[#000000]">
              Paste your public Key
            </div>
            <div>
              <textarea
                placeholder="paste public key text (RSA, ECDSA, Putty)"
                className="rounded-md border border-gray-200 mt-2 focus:outline-none text-black px-4 py-2 bg-[#FBFDFD] w-full h-[189px] text-[16px] placeholder:text-left placeholder:pt-1"
              ></textarea>
            </div>
          </div>
          <div className="flex mt-[27px] justify-center mb-[12px] items-center">
            <div
              className="bg-[#000000] rounded-[4px] px-12 text-white py-2 cursor-pointer"
              onClick={onAddKey}
            >
              Add Key
            </div>
            <div
              className="border-[1px] border-[#000000] rounded-[4px] px-6 ml-[12px] py-2 cursor-pointer"
              onClick={onClose}
            >
              Load from file
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddSshPop;
