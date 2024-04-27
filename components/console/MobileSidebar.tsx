// "use client";
// import { useState, useEffect } from "react";
// import { Menu } from "lucide-react";
// import { Button } from "@/components/ui/buttons";
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import Sidebar from "./Sidebar";

// const MobileSidebar = () => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if(!isMounted) { return null };

//   return (
//     <Sheet>
//       <SheetTrigger>
//         <Button variant="ghost" size="icon" className="md:hidden">
//           <Menu />
//         </Button>
//       </SheetTrigger>
//       <SheetContent side="left" className="p-0">
//         <Sidebar />
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default MobileSidebar;

const MobileSidebar = () => {
  return (
    <div className="md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
};

export default MobileSidebar;
