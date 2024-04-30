"use client";
import Navbar from "@/components/console/Navbar";
import Sidebar from "@/components/console/Sidebar";

import useProtectedRoute from "@/components/auth/ProtectedRoutes";

const layout = ({ children }: { children: React.ReactNode }) => {
  
  useProtectedRoute();

  return (
    <>
      <div className="h-full flex flex-col">
        <div className="hidden ml-5 mt-24 mb-4 md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 rounded">
          <Sidebar />
        </div>
        <div className="z-10 w-full fixed">
          <Navbar />
        </div>
        <main className="md:pl-72 pt-24">{children}</main>
      </div>
    </>
  );
};

export default layout;
