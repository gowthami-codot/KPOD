"use client";
import useProtectedRoute from "@/components/auth/ProtectedRoutes";
import { useState } from "react";
import SideBar from "@/components/nav/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  useProtectedRoute();

  return (
    <div className="flex bg-[#FBFDFD]">
      <div
        className={`md:w-[200px] h-[100vh] text-darkPrimary`}
      >
        <SideBar sidebar={showSidebar} toggleSidebar={setShowSidebar} />
      </div>
      <div
        className="text-black flex md:hidden absolute mt-5 mr-5 right-0"
        onClick={() => setShowSidebar(true)}
      >
        {showSidebar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
      <div className="h-full flex flex-col w-full">
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default layout;
