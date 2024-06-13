"use client";
import React from 'react';



const page = () => {


  // useEffect(() => {
  //   if (userDetails && userDetails.vm_started_since) {
  //     const startTime = new Date(userDetails.vm_started_since);
  //     const updateTime = () => {
  //       const now = new Date();
  //       const startTime = new Date(userDetails.vm_started_since);
  //       const diff = now.getTime() - startTime.getTime(); // Convert to numbers before subtraction
  //       const hours = Math.floor(diff / 3600000); // converting milliseconds to hours
  //       const minutes = Math.floor((diff % 3600000) / 60000); // converting remaining milliseconds to minutes
  //       setTimeSinceStart(`${hours} hours and ${minutes} minutes`);
  //     };
  //     updateTime();
  //     const interval = setInterval(updateTime, 60000); // update every minute
  //     return () => clearInterval(interval);
  //   }
  // }, [userDetails]);

  // if (!userDetails || userDetails.vm_instance_request !== 2) return (<div></div>);

  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div
        className="flex flex-col bg-[#F3F4F5] items-center justify-center py-6 md:py-10 mx-auto 
md:w-[78%] w-full border-[2px] border-[#F3F4F5] rounded-[8px] px-20 md:px-10 gap-6"
      >
        <div className="text-xl md:text-3xl text-black font-bold text-center">
          Welcome to OLA Krutrim GPU Instance service
        </div>
        <div className="text-gray-400 text-center">
          <span className="md:text-xl text-black text-[12px]">
            {/* Your GPU Instance has been live since {new Date(userDetails.vm_started_since).toLocaleString()}<br/> */}
            It has been running for 
          </span>
          <br />
          <br />
          <div className="md:text-[16px] text-[12px] md:ml-0 ml-12">
            You can log in to your GPU instance using the SSH command details that have been emailed to you.
            <br /><br />
            If you face any issues or need support,
            <br />please feel free to contact
            <span className="text-blue-400 mx-1">cloudsupport@olakrutrim.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
