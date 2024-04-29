"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import MobileSidebar from "@/components/console/MobileSidebar";
import { useAuth } from "@/components/auth/AuthContext";

const Navbar = () => {
  const router = useRouter();
  const { setCurrentUser } = useAuth();

  const handleLogout = () => {
    setCurrentUser(null);
    router.push("/signIn");
  };

  return (
    <div className="flex items-center justify-between p-4">
      <MobileSidebar />
      <div className="hidden md:flex w-full justify-between items-center bg-[#162231] p-5 rounded-lg ">
        <div className="text-white text-xl font-bold">KRUTRIM</div>
        <div className="cursor-pointer hover:scale-105" onClick={handleLogout}>
          Logout
        </div>
      </div>

      <div className="cursor-pointer flex md:hidden p-1 hover:scale-105" onClick={handleLogout}>
        <div>Logout</div>
      </div>
    </div>
  );
};

export default Navbar;
