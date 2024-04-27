import MobileSidebar from "@/components/console/MobileSidebar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <MobileSidebar />
      <div className="hidden md:flex w-full justify-between items-center bg-[#162231] p-5 rounded-lg ">
        <div className="text-white text-xl font-bold">KRUTRIM</div>
        <div className="cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </div>
      <div className="cursor-pointer flex md:hidden p-1">
        <svg
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
