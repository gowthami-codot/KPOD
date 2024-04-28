import MobileSidebar from "@/components/console/MobileSidebar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <MobileSidebar />
      <div className="hidden md:flex w-full justify-between items-center bg-[#162231] p-5 rounded-lg ">
        <div className="text-white text-xl font-bold">KRUTRIM</div>
        <div className="cursor-pointer">
          <Link href={"/signIn"}>Logout</Link>
        </div>
      </div>

      <div className="cursor-pointer flex md:hidden p-1">
        <Link href={"/signIn"}>Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
