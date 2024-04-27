import Navbar from "@/components/console/Navbar";
import Sidebar from "@/components/console/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-full flex flex-col">
        {/* <div className="hidden ml-5 mt-24 mb-4 md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 rounded">
          <Sidebar />
        </div> */}
        <div className="z-80 w-full fixed"><Navbar /></div>
        <main 
          // className="md:pl-80 pt-24"
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default layout;
