import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DepolyPop from "./MachinePopUp/DepolyPop";
import Actions from "./MachinePopUp/Actions";
export default function ListMachines() {
    const [expandedPanels, setExpandedPanels] = useState({});

    const togglePanel = (index) => {
        setExpandedPanels((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };
    const router = useRouter();

    const [depoly,setDepoly ] = useState(false);


    const handleDepolyClick = () =>
        {
            setDepoly(true);
        }

        const handleDepolyClose = () =>
            {
                setDepoly(false);
            }
           const [action , setActions] = useState(false);
           

            const [dropdownIndex, setDropdownIndex] = useState(null); 
            const handleActionPopup = (index,machine) => {
               if(machine.status==="Active")
                {
                    setDropdownIndex(dropdownIndex === index ? null : index);
                }
            };


    const machinelist = [
        {
            machine_name: "VM_First_GPU",
            Public_ip: "164.52.233.256",
            status: "Active",
            actions: "Actions",
            starttime: "3/5/24 10:20PM",
            endtime: "10/5/2024 9:00PM",
            configuration: "4 vCPU, 30 GB RAM, 225 GB SSD",
            no_of_hrs_utilised: 32,
            os: "Ubuntu 20.05 x 86_64",
            Price: "2.8/hr or 2044.0 Monthly",
            Created_on: "Jul 30,2021, 12:47:39 PM",
            uptime: "Uptime 18 Days 10 Hours"
        },
        {
            machine_name: "VM_Second_GPU",
            Public_ip: "164.52.233.257",
            status: "In Progress",
            actions: "Actions",
            starttime: "4/5/24 11:20PM",
            endtime: "11/5/2024 8:00PM",
            configuration: "4 vCPU, 40 GB RAM, 250 GB SSD",
            no_of_hrs_utilised: 25,
            os: "Ubuntu 18.04 x 86_64",
            Price: "3.0/hr or 2200.0 Monthly",
            Created_on: "Aug 15,2021, 1:00:39 PM",
            uptime: "Uptime 15 Days 5 Hours"
        },
        {
            machine_name: "VM_Third_GPU",
            Public_ip: "164.52.233.258",
            status: "In Progress",
            actions: "Actions",
            starttime: "5/5/24 9:20PM",
            endtime: "12/5/2024 7:00PM",
            configuration: "4 vCPU, 50 GB RAM, 300 GB SSD",
            no_of_hrs_utilised: 20,
            os: "Ubuntu 20.04 x 86_64",
            Price: "3.5/hr or 2500.0 Monthly",
            Created_on: "Sep 10,2021, 2:00:39 PM",
            uptime: "Uptime 12 Days 3 Hours"
        },
    ];

    return (
        <div className="text-black p-12">
             <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="text-[16px] text-[#396A82] font-medium cursor-pointer">
              Compute <span className="ml-2">{">"}</span>
            </div>
            <div className="text-[#41515C] text-opacity-65 text-[16px] font-medium cursor-pointer">
               Machines
            </div>
          </div>

          
          {/* <div className="text-[#41515C] text-[16px]  mr-[72px]">
            Credit Balance: <span className="text-[#000000]">&#8377; 200</span>
          </div> */}
        </div>
        <div className="border-b-[2px] border-[#181E2214] mt-2 border-opacity-10"></div>
        <div className="flex  ">
          <div className="flex flex-col items-start">
            <div className="text-[#000000] text-[28px] font-medium mt-5 " >
               Machines
            </div>
          
          </div>

          <div className="flex items-center  mt-6 mx-[30%]">
            <div className="text-[#FFFFFF] text-[16px] font-medium bg-[#57C09E] rounded-l-[4px] justify-center  px-5 py-2  ">
              GPU
            </div>
            <div className="text-[#191919] text-[16px]  bg-[#687986] bg-opacity-15 rounded-r-[4px] justify-center  font-medium px-5 py-2">
              CPU
            </div>
          </div>


         <div className='flex justify-end items-end cursor-pointer' onClick={()=>{router.push("/console/machines?section=machine")}}>
            <div className='text-[#ffffff] bg-[#010101] rounded-[4px] text-[18px] font-medium px-6 py-2' >Create Machine</div>
         </div>
        </div>
            <div className="relative overflow-x-auto shadow-md p-4 mt-6 rounded-[8px] w-[98%]">
                <table className="w-[99%] text-left">
                    <thead className="bg-[#F3F7F9] text-[16px] font-medium">
                        <tr>
                            <th className="px-6 py-4">Machine Name</th>
                            <th className="px-6 py-4">Public IP</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Actions</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="text-[16px]">
                        {machinelist.map((machine, index) => (
                            <React.Fragment key={index}>
                                <tr className="bg-white border-b font-semibold">
                                    <td className="px-6 py-4 text-black opacity-65">{machine.machine_name}</td>
                                    <td className="px-6 py-4 text-black opacity-65">{machine.Public_ip}</td>
                                    <td className="px-6 py-4 text-black opacity-65">
                                        <button className={`rounded text-[14px] font-semibold w-[104px] h-auto py-1 ${machine.status === "Active" ? "bg-[#34C700] bg-opacity-40 text-[#73AF00]" : machine.status === "In Progress" ? "bg-[#3BB5F0D6] bg-opacity-40 text-[#139CFF]" : ""}`
                                    } onClick={machine.status==="Active"?handleDepolyClick:handleDepolyClose}>
                                            {machine.status}
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="border border-black w-[96px] h-auto rounded-[4px] p-1 flex items-center justify-center space-x-2" onClick={() => handleActionPopup(index,machine)}>
                                            <span className="text-[13px]">{machine.actions}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                                <path d="M5.25 6L0.703367 0.75L9.79663 0.75L5.25 6Z" fill="black" />
                                            </svg>
                                        </button>
                                    </td>
                                    <td>
                                        <svg
                                            onClick={() => togglePanel(index)}
                                            width="30"
                                            height="30"
                                            viewBox="0 0 30 30"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`ml-2 bg-black rounded-full cursor-pointer transition-transform duration-300 ${expandedPanels[index] ? "rotate-180" : "rotate-0"}`}
                                        >
                                            <circle cx="13" cy="13" r="13" fill="black" />
                                            <path
                                                d="M13.5376 20.3261L8.52228 15.3108C7.71463 14.5032 7.71463 13.1937 8.52228 12.386C9.32994 11.5784 10.6395 11.5784 11.4471 12.386L15 15.9388L18.5528 12.386C19.3605 11.5784 20.67 11.5784 21.4777 12.386C22.2853 13.1937 22.2853 14.5032 21.4777 15.3108L16.4624 20.3261C15.6548 21.1338 14.3452 21.1338 13.5376 20.3261Z"
                                                fill="white"
                                            />
                                        </svg>
                                        {dropdownIndex === index && <Actions onClose={() => setDropdownIndex(null)} />}
                                    </td>
                                </tr>
                                {expandedPanels[index] && (
                                    <tr>
                                        <td colSpan="5" className="p-4">
                                            <div className="shadow-md p-4 rounded-[8px] bg-[#F3F7F9] text-center font-medium">
                                                <p className='text-[18px]'>{machine.machine_name} <span className="text-[16px] text-[#8D8D8D]">{machine.uptime}</span></p>
                                            </div>
                                            <div className="flex justify-evenly py-4">
                                                <div>
                                                    <p className='pt-6 text-[14px] font-normal'>Start Time:     <span className='text-[#8D8D8D] text-[15px] font-normal'>{machine.starttime}</span></p>
                                                    <p className='pt-6 text-[14px] font-normal'>End Time:       <span className='text-[#8D8D8D] text-[15px] font-normal'>{machine.endtime}</span></p>
                                                    <p className='pt-6 text-[14px] font-normal'>Hours Utilized: <span className='text-[#8D8D8D] text-[15px] font-normal'>{machine.no_of_hrs_utilised}</span></p>
                                                </div>
                                                <div>
                                                    <p className='pt-6 text-[14px] font-normal'>Configuration:  <span className='text-[#8D8D8D] text-[15px] font-normal'>{machine.configuration}</span></p>
                                                    <p className='pt-6 text-[14px] font-normal'>OS:             <span className='text-[#8D8D8D] text-[15px] font-normal'>{machine.os}</span></p>
                                                    <p className='pt-6 text-[14px] font-normal'>Price:          <span className='text-[#8D8D8D] text-[15px] font-normal'>{machine.Price}</span></p>
                                                    <p className='pt-6 text-[14px] font-normal'>Created On:     <span className='text-[#8D8D8D] text-[15px] font-normal'>{machine.Created_on}</span></p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
                

                {depoly&&<DepolyPop onClose={ handleDepolyClose}/>}
              
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
        </div>
    );
}
