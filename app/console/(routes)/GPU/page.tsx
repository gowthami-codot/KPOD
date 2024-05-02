"use client";
import { useUser } from "@/app/context/UserContext";

const page = () => {
  const { userDetails } = useUser();

  return (
    <div className="px-10 md:px-0">
      <div
        className="flex flex-col items-center justify-center py-6 md:py-10 mx-auto mt-20 md:mt-40
md:w-[78%] w-full border border-[#63e3e3] rounded-3xl px-10 gap-6"
      >
        <div className="text-xl md:text-3xl font-bold text-center">
          Welcome to OLA Krutrim GPU Instance service
        </div>
        <div className="text-gray-400 text-center">
        <span className="text-xl text-white">Your GPU Instance is live now</span>  <br />
        <br /> You can login into your GPU instance using the ssh
          command details that has been emailed to you <br /> <br /> If you face any issues
          or need support, <br />please feel free to contact
          <span className="text-blue-400 mx-1">cloudsupport@olakrutrim.com</span>
        </div>
      </div>
    </div>
  );
};

export default page;
