"use client";
import { useUser } from "@/app/context/UserContext";

const page = () => {
  const { userDetails } = useUser();

  return (
   <div className="bg-white min-h-screen flex justify-center items-center">
      <div
        className="flex flex-col  bg-[#F3F4F5] items-center justify-center py-6 md:py-10 mx-auto  
md:w-[78%] w-full border-[2px] border-[#F3F4F5]  rounded-[8px] px-20 md:px-10 gap-6"
      >
        <div className="text-xl md:text-3xl text-black font-bold text-center">
          Welcome to OLA Krutrim GPU Instance service
        </div>
        <div className="text-gray-400 text-center">
        <span className="md:text-xl text-black  text-[12px] ">Your GPU Instance is live now</span>  <br />
        <br /><div className="md:text-[16px] text-[12px] md:ml-0 ml-12"> You can login into your GPU instance using the ssh
          command details that has been emailed to you <br /> <br /> If you face any issues
          or need support, <br />please feel free to contact
          <span className="text-blue-400 mx-1">cloudsupport@olakrutrim.com</span></div>
        </div>
      </div>
    </div>
  
  );
};

export default page;
