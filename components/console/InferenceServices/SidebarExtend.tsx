"use client";
import { divider } from "@nextui-org/react";
import Link from "next/link";

const routes = [
  {
    label: "Compare",
    href: "/console/inference-service?section=compare",
  },
  {
    label: "Usage",
    href: "/console/inference-service?section=usage",
  },
  {
    label: "API Keys",
    href: "/console/inference-service?section=api-keys",
  },
  {
    label: "Docs",
    href: "/console/inference-service?section=docs",
  },
];

const Sidebar = () => {
  return (
    <div className="py-4 flex flex-col h-full text-white bg-[#162231] border border-[#08111E] rounded-lg -ml-16">
      <div className="px-2 py-2 flex-1">
        <div className="space-y-1 flex flex-col h-full gap-2">
          <div className="text-[#8BFFDD]">Inference Services</div>
          <hr className="bg-[#8BFFDD]" />
          <div className="space-y-1 flex flex-col gap-2">
            {routes.map((route) => (
              <Link
                href={`${route.href}`}
                key={route.href}
                className="text-white"
              >
                <div className="flex items-center flex-1">
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
