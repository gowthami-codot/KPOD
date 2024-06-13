"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CreateApi from "./CreateApi";

import { fetchData } from '@/utils/auth';


const ProjectApi = ({ data, onClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    onClose();
  };

  const [apikeys, setApiKeys] = useState([]);

  useEffect(() => {
    setApiKeys(data);
  }, [data]);

  const deleteKey = async (uuid) => {
    try {
      const response = await fetchData(`/api/apikey?uuid=${uuid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id: uuid })
      });

      if (response.status === 200) {
        const response = await fetchData("/api/apikey", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });

        const result = await response.json();

        if (response.status === 200) {
          if (result && result.length > 0) {
            setApiKeys(result);
          }

          if (result.length === 0) {
            console.log("close");
            onClose();
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
 
  return (
    <div className="flex flex-col min-h-screen px-5 relative">
      <div className="flex justify-between items-center mb-3 ">
        <div className="w-full h-full  flex flex-col bg-[#0F1B2B]  rounded-[16px]">
        <div className="text-[27px]  font-bold mt-10 px-10  text-[#8BFFDD] ">
            Project Api Keys
          </div>

          <div className="px-16 mt-20 text-[23px] font-bold capitalize">
            Your saved secret keys
          </div>
          <div className="grid grid-cols-4 gap-20 px-16 mt-8 border-b-2 py-2 w-full">
            <div>NAME</div>
            <div>SECRET KEY</div>
            <div>CREATED</div>
            <div></div>
          </div>
          {
            apikeys && apikeys.length > 0 && apikeys.map(item => (
              <div key={item.uuid} className="grid grid-cols-4 gap-20 py-3 px-16 mt-8  w-full">
                <div>{item.name}</div>
                <div>{item.secretkey}</div>
                <div>{item.created_at}</div>
                <div className="flex space-x-6">
                  {/* <div>
                    <Image
                      src={require("../../../public/Editing.png")}
                      alt=""
                      width={23}
                      height={23}
                    />
                  </div> */}
                  <div onClick={() => { deleteKey(item.uuid) }}>
                    {" "}
                    <Image
                      src={require("../../../public/Bin.png")}
                      alt=""
                      width={23}
                      height={23}
                    />
                  </div>
                </div>
              </div>
            ))
          }

          <button className="w-[40%] mb-[38rem] mt-20 px-16 " onClick={()=>setIsPopupOpen(true)}>
            {" "}
            <div
              className="flex mt-3 space-x-5 bg-[#80FFF7] rounded-[13px] p-4 cursor-pointer"
             
            >
              <div>
                <Image
                  src={require("../../../public/create.png")}
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
              <div className="text-[17px] text-black font-bold text-center">
                Create new secret key
              </div>
            </div>
            
          </button>
          {isPopupOpen && <CreateApi onClose={handleClosePopup} />}
        </div>
      </div>
    </div>
  );
};

export default ProjectApi;
