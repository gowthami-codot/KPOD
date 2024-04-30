"use client";
import { get } from "http";
import VMConfigModal from "./VMConfigModal";
import { useEffect, useState } from "react";

const Welcome = () => {
  const [showModal, setShowModal] = useState(false);
  const [ssh_present, setSshPresent] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    // TODO: integrate with authentication token
    let userString = localStorage.getItem("currentUser") || "";
    console.log(userString);
    setCurrentUser(JSON.parse(userString));
  };

  useEffect(() => {
    getUserDetails();
    const storedSshPresent =
      typeof window !== "undefined"
        ? localStorage.getItem("ssh_present") || ""
        : "";
    setSshPresent(storedSshPresent);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center justify-center mt-40 md:mt-56 w-full">
      {!showModal ? (
        <div
          className="flex flex-col items-center justify-center py-6 md:py-10 
      w-[75%] border border-[#63e3e3] rounded-3xl px-10 gap-6"
        >
          <div className="text-xl md:text-3xl font-bold text-center">
            Welcome to OLA Krutrim Cloud
          </div>
          <div className="text-gray-400 text-center">
            AI Cloud - Managed AI cloud services for full lifecycle of
            Generative AI needs from training to inferencing supported by
            platforms
          </div>


          <div className="flex flex-col md:flex-row gap-2 items-center">


            {currentUser && currentUser.vm_instance_request === 0 && (
              <div
                onClick={() => setShowModal(true)}
                className="text-center text-xs md:text-lg bg-[#80FFF7] text-black px-10 py-3 rounded-full cursor-pointer
        hover:scale-105 duration-300"
              >
                Request for free GPU Instance
              </div>
            )}

            {currentUser && currentUser.vm_instance_request === 1 && (
              <div className="text-center">
                Request Pending For GPU Instance
              </div>
            )}

            {currentUser && currentUser.vm_instance_request === 2 && (
              <div className="text-center">
                GPU Instance IP & Port<br/>{currentUser.ip}:{currentUser.port}
              </div>
            )}


            <div
              className="text-center text-xs md:text-lg border-2 border-[#80FFF7] text-white px-10 py-3 rounded-full cursor-pointer
        hover:scale-105 duration-300"
            >
              Request for Inference as Service
            </div>
          </div>

        </div>
      ) : (
        <VMConfigModal isOpen={showModal} onClose={closeModal} />
      )}
    </div>
  );
};

export default Welcome;
