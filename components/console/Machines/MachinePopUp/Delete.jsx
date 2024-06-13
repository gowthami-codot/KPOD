"use client";
import { toast } from "sonner";

const Delete = ({ onClose, instanceId }) => {
  const deleteVMInstance = async () => {
    try {
      const response = await fetch("/api/deleteVm", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ instanceId }),
      });

      if (response.status === 200) {
        toast("Your instance has been deleted.");
      }
    } catch (error) {
      toast.error("Failed to delete VM Instance.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex  items-center justify-center bg-[#00000080]">
        <div className="bg-[#FFFFFF] shadow-md   my-auto text-[#000000] h-fit  mb-20   w-[780px]   lg:mt-5     p-5  ">
          <div className="flex justify-center items-center text-[24px]  mt-[52px] font-medium text-[#000000]">
            Confirm Deletion
          </div>
          <div className="text-[18px] text-[#000000] font-normal mt-[10px] flex justify-center">
            <p>Are you sure you want to delete this Machine </p>
          </div>
          <div className="flex items-center justify-center mt-[24px] mb-[50px]">
            <div
              className="bg-[#010101] text-[#ffff] text-[18px] font-medium inline-block 
            text-center pl-[65px] pr-[65px] rounded-[4px] py-4 cursor-pointer"
              onClick={deleteVMInstance}
            >
              Delete Now
            </div>
            <div
              className="border-[1px] border-[#000000] text-[18px] font-medium rounded-[4px] px-8 ml-[12px] py-4 cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delete;
