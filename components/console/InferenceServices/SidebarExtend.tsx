"use client";
import { divider } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

const routes = [
  {
    label: "Compare",
    href: "/console/inference-service?section=compare",
  },
  
  {
    label: "API Keys",
    href: "/console/inference-service?section=api-keys",
  },
  {
    label: "Usage",
    href: "/console/inference-service?section=usage",
  },
  // {
  //   label: "Docs",
  //   href: "/console/inference-service?section=docs",
  // },
];

const Sidebar = () => {
  const [clicked, setClicked] = useState(null);
  const handleClick = (index:any) => {
    setClicked(index);
  };
  return (
    <div className="py-4 flex flex-col h-full text-white bg-[#162231] border border-[#08111E] rounded-lg -ml-16">
      <div className="px-2 py-2 flex-1">
        <div className="space-y-1 flex flex-col h-full gap-2">
          <div className="text-[#8BFFDD]">Inference Services</div>
          <hr className="bg-[#8BFFDD]" />
          <div className="space-y-3 flex  flex-col gap-2">
            {routes.map((route, index) => (
              <Link
                href={`${route.href}`}
                key={route.href}
                className="text-white"
              >
               <div
              className={`flex items-center flex-1 ml-4 ${
                clicked === index ? 'text-[#8BFFDD]  text-[14px]  ' : ' text-[14px] text-[#C7C7C7]'
              }`}
              onClick={() => handleClick(index)}
            >
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
