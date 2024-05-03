"use client";
import useProtectedRoute from "@/components/auth/ProtectedRoutes";
import SideBar from "@/components/nav/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {

  useProtectedRoute();

  return (
    <div className="flex bg-white">
    <div className="w-[80px] h-[100vh] bg-white text-darkPrimary">
      <SideBar />
    </div>
      <div className="h-full flex flex-col w-full">
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default layout;
