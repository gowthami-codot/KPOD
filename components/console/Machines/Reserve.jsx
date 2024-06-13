import { useRouter } from "next/navigation";
import ContactUs from "./MachinePopUp/ContactUs";
import { useState } from "react";
const Reserve = () => {
  const router = useRouter();
  const [contact , setContact] = useState(false);
  const handleContactClick = ()=>
    {
      setContact(true);
    }

    const handleCloseContact = ()=>
      {
        setContact(false)
      }
  const items = [
    {
      title: "A100-40GB-NVLINK-8x",
      hr: "100/Hr",
      type: "GPU",
      memory: "32",
      gpu: "1",
      ram: "128",
      vcpu: "32",
      ssd: "512",
      capacity: "Low",
    },
    {
      title: "A100-40GB-NVLINK-2x",
      hr: "90/Hr",
      type: "GPU",
      memory: "80",
      gpu: "2",
      ram: "128",
      vcpu: "64",
      ssd: "512",
      capacity: "High",
      link: "/console/machines?section=machineConfig",
    },
    {
      title: "A100-40GB-NVLINK-4x",
      hr: "100/Hr",
      type: "GPU",
      memory: "160",
      gpu: "4",
      ram: "256",
      vcpu: "128",
      ssd: "1024",
      capacity: "Medium",
      link: "/console/machines?section=machineConfig",
    },
    {
      title: "A100-40GB-NVLINK-8x",
      hr: "120/Hr",
      type: "GPU",
      memory: "320",
      gpu: "8",
      ram: "256",
      vcpu: "256",
      ssd: "2048",
      capacity: "High",
      link: "/console/machines?section=machineConfig",
    },
  ];
  return (
    <>
      <div>
        <div className="grid grid-cols-3 grid-flow-row mt-5 gap-6  w-full">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white drop-shadow-md   rounded-[8px]"
            >
              <div className="bg-[#F3F7F9] flex m-3 justify-between px-[13px] py-3 rounded-[5px] ">
                <div className="text-[#000000] text-[16px] font-medium">
                  {item.title}
                </div>
                <div className="text-[#000000] text-[16px]  font-medium">
                  &#8377;{item.hr}
                </div>
              </div>

              <div className="ml-[22px] mr-[22px] mt-5 space-y-2">
       <div className="flex justify-between ">
       <div className="flex flex-col  w-auto">
              <div className="space-y-[9px]">
              <div className="text-[#687986] text-[14px] font-normal ">
                    Type :{" "}
                    <span className="text-black font-medium  ml-[42px]">
                      {item.type}
                    </span>
                  </div>
                  <div className="text-[#687986] text-[14px] font-normal ">
                    GPU&apos;s :{" "}
                    <span className="text-black font-medium ml-10">
                      {item.gpu}
                    </span>
                  </div>
                  <div className="text-[#687986] text-[14px] font-normal ">
                    vCPU&apos;s :{" "}
                    <span className="text-black font-medium ml-8">
                      {item.vcpu}
                    </span>
                  </div>
                  <div className="text-[#687986] text-[14px] text-start font-normal">
                  Capacity:{" "}
                  <span
                    className={`ml-5 text-[14px] font-medium ${
                      item.capacity === "Low"
                        ? "text-[#FF6767]"
                        : item.capacity === "High"
                        ? "text-[#72C73E]"
                        : "text-[#FF8900]"
                    }`}
                  >
                    {item.capacity}
                  </span>
                </div>
              </div>
              <div>
                
              </div>
            </div>
            <div className="space-y-[9px]">
            <div className="text-[#687986] text-[14px] font-normal">
                    GPU Memory :
                    <span className="text-black font-medium ml-4">
                      {item.memory}
                    </span>
                  </div>
                  <div className="text-[#687986] text-[14px] text-start font-normal">
                    RAM(GB) :
                    <span className="text-black font-medium ml-[45px]">
                      {item.ram}
                    </span>
                  </div>
                  <div className="text-[#687986] text-[14px] text-start font-normal">
                    SSD(GB) :
                    <span className="text-black font-medium ml-[47px]">
                      {item.ssd}
                    </span>
                  </div>
            </div>
       </div>
              </div>
              {item.capacity === "Low" ? (
                <div className="text-[16px] mx-5 mt-8 py-3 px-4 bg-[#000000] rounded-[4px] justify-center items-center flex font-medium text-[#ffff] mb-5 cursor-pointer" onClick={handleContactClick} >
                  Reserve Now
                </div>
              ) : (
                <div
                  className="text-[16px] mx-5 mt-8 py-3 px-4 bg-[#000000] rounded-[4px] justify-center items-center flex font-medium text-[#ffff] mb-5 cursor-pointer"
                  onClick={() => {
                    router.push(item.link);
                  }}
                >
                  Reserve Now
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          className="absolute right-0 top-1/2 font-semibold text-sm text-[#161717] bg-[#8BFFDC] md:p-4 p-1 rounded-tr-lg rounded-br-lg cursor-pointer"
          style={{
            transform: "translateY(-50%) rotate(180deg)",
            writingMode: "vertical-rl",
            whiteSpace: "nowrap",
          }}
        >
          Give your feedback
        </div>
        {contact&&<ContactUs onClose={handleCloseContact}/>}
      </div>
    </>
  );
};

export default Reserve;
