"use client";
import React ,{ useState } from "react";
import { Drawer } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import { useEffect } from "react";
// import { init, logout } from "@/utils/auth";
import { useUser } from "@/app/context/UserContext";

export default function SideBar({ sidebar, toggleSidebar }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [activeLowerMenu, setActiveLowerMenu] = useState(null);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(activeMenuItem === index ? null : index);
    closeDrawer();
    toggleSidebar(false);
  };

  const handleLowerMenuClick = (index) => {
    setActiveLowerMenu(activeLowerMenu === index ? null : index);
    closeDrawer();
    toggleSidebar(false);
  };

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false) && toggleSidebar(false);

  const router = useRouter();
  // --> krutrim start
  // const { setUserDetails, userDetails } = useUser();

  // useEffect(() => {
  //   init().then(result => {
  //     if (!result)
  //       router.push("/signIn");
  //     setUserDetails(result);
  //   })
  // }, []);
  // --> krutrim end

  const topItems = [
    {
      name: "Home",
      link: "/console/home",
      src: "/Krutrim-home-frame.svg",
      height: 18,
      width: 18,
    },
    // {
    //   name: "GPU",
    //   link: "/console/GPU",
    //   src: "/Krutrim-gpu-logo.svg",
    //   height: 18,
    //   width: 18,
    // },
    {
      name: "Models",
      link: "/console/inference-service",
      src: "/Krutrim-Dashboard-Layout.svg",
      height: 18,
      width: 18,
      subPoints: [
        {
          label: "Compare",
          link: "/console/inference-service?section=compare",
        },
        {
          label: "Usage",
          link: "/console/inference-service?section=usage",
        },
        {
          label: "Api Keys",
          link: "/console/inference-service?section=api-keys",
        },
        {
          label: "Docs",
          link: "/console/inference-service?section=docs",
        },
      ],
    },
    {
      name: "Compute",
      link: "/console/machines",
      src: "/compute_dark.svg",
      height: 18,
      width: 18,
      subPoints: [
        {
          label: "Machines",
          link: "/console/machines?section=machine",
        },
      ],
    },
    // {
    //   name: "Storage",
    //   link: "#",
    //   src: "/storage_dark.svg",
    //   height: 18,
    //   width: 18,
    // },
    // {
    //   name: "Networking",
    //   link: "#",
    //   src: "/networking_dark.svg",
    //   height: 18,
    //   width: 18,
    // },
    // {
    //   name: "Security",
    //   link: "#",
    //   src: "/security_dark.svg",
    //   height: 18,
    //   width: 18,
    // },
    // {
    //   name: "Observability",
    //   link: "#",
    //   src: "/observability_dark.svg",
    //   height: 18,
    //   width: 18,
    // },
    // {
    //   name: "Metering",
    //   link: "#",
    //   src: "/metering_dark.svg",
    //   height: 18,
    //   width: 18,
    // },
    {
      name: "Billing",
      link: "#",
      src: "/billing_dark.svg",
      height: 18,
      width: 18,
      subPoints: [
        {
          label: "Billing",
          link: "",
        },
        {
          label: "Invoices",
          link: "/console/billing?section=invoices",
        },
      ],
    },
  ];

  const lowerItems = [
    // {
    //   name: "Docs",
    //   link: "/console/docs",
    //   src: "/docs_dark.svg",
    //   height: 20,
    //   width: 20,
    // },
    {
      name: "Settings",
      link: "/console/settings",
      src: "/settings_dark.svg",
      height: 20,
      width: 20,
      subPoints: [
        {
          label: "SSH Keys",
          link: "/console/settings?section=manage",
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <div className="bg-[#FBFDFD] w-[230px] h-full flex flex-col z-[9999] hidden md:flex md:fixed overflow-y-auto">
        <div className="w-fit h-fit mt-6 ml-5">
          <div className="text-3xl font-bold">KRUTRIM</div>
        </div>
        <div className="w-full h-full flex flex-col justify-between mt-5 mb-5">
          <div className="h-fit w-fit flex flex-col-reverse gap-2 ml-3">
            {topItems.reverse().map((item, index) => (
              <div key={index}
              // className={ (userDetails?.vm_instance_request!=2 && item.name==="GPU") || (userDetails?.maas_request!=2 && item.name==="Inference Service") ? "" : "flex flex-col"} key={index}
              //  hidden={ (userDetails?.vm_instance_request!=2 && item.name==="GPU") || (userDetails?.maas_request!=2 && item.name==="Inference Service")}
              >
                <div
                  className={`flex w-[200px] hover:bg-gray-200 hover:text-black rounded-lg cursor-pointer pl-4 h-10 gap-3 items-center ${
                    pathname.startsWith(item.link)
                      ? "bg-[#396A82] text-white"
                      : ""
                  }`}
                  onClick={() => {
                    router.push(item.link);
                    closeDrawer();
                    toggleSidebar(false);
                    handleMenuItemClick(index);
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={item.height}
                    height={item.width}
                  />
                  <p className="text-[16px]">{item.name}</p>
                </div>
                {activeMenuItem === index && item.subPoints && (
                  <div className="flex flex-col h-fit justify-center items-center mt-2 -mb-3">
                    {item.subPoints.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="ml-4 w-[180px] m-auto h-10 hover:bg-[#DEE8EC] rounded-lg cursor-pointer px-4 py-[10px] mb-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(subItem.link);
                          closeDrawer();
                          toggleSidebar(false);
                        }}
                      >
                        <li className="text-[#41515C] text-[14px]">
                          {subItem.label}
                        </li>
                      </div>
                    ))}
                  </div>
                )}
                {(index === 3 || index === 7) && <hr className="my-3" />}
              </div>
            ))}
          </div>
          <div className="h-fit w-fit flex flex-col-reverse gap-2 ml-3">
            {lowerItems.reverse().map((item, index) => (
              <div key={index}>
                <div
                  key={index}
                  className={`flex w-[200px] hover:bg-gray-200 hover:text-black rounded-lg cursor-pointer pl-4 h-10 gap-3 items-center ${
                    pathname.startsWith(item.link)
                      ? "bg-[#396A82] text-white"
                      : ""
                  }`}
                  onClick={() => {
                    router.push(item.link)
                    handleLowerMenuClick(index)
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={item.height}
                    height={item.width}
                  />
                  <p className="text-[16px]">{item.name}</p>
                </div>
                {activeLowerMenu === index && item.subPoints && (
                  <div className="flex flex-col h-fit justify-center items-center mt-2 -mb-3">
                    {item.subPoints.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="ml-4 w-[180px] m-auto h-10 hover:bg-[#DEE8EC] rounded-lg cursor-pointer px-4 py-[10px] mb-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(subItem.link);
                          closeDrawer();
                          toggleSidebar(false);
                        }}
                      >
                        <li className="text-[#41515C] text-[14px]">
                          {subItem.label}
                        </li>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Drawer
        open={open || sidebar}
        className="bg-[#F3F7F9] w-[230px] h-full flex flex-col z-[9999] fixed"
        onClose={closeDrawer && toggleSidebar}
        onFocus={closeDrawer}
        onMouseLeave={closeDrawer}
        overlay={false}
      >
        <div className="w-fit h-fit mt-6 ml-5">
          <Image
            src="/ola-logo.svg"
            alt="logo"
            width={40}
            height={16}
            className="cursor-pointer"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-between mt-10 mb-5">
          <div className="h-fit w-fit flex flex-col-reverse gap-2 ml-3">
            {topItems.map((item, index) => (
              <div key={index}
              // className={ (userDetails?.vm_instance_request!=2 && item.name==="GPU") || (userDetails?.maas_request!=2 && item.name==="Inference Service") ? "" : "flex flex-col"} key={index}
              //     hidden={ (userDetails?.vm_instance_request!=2 && item.name==="GPU") || (userDetails?.maas_request!=2 && item.name==="Inference Service")}
              >
                <div
                  className="flex w-[200px] hover:bg-[#DEE8EC] rounded-lg cursor-pointer pl-4 h-10 gap-3 items-center"
                  onClick={() => {
                    router.push(item.link);
                    closeDrawer();
                    toggleSidebar(false);
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={item.height}
                    height={item.width}
                  />
                  <p className="text-[#41515C] text-[16px]">{item.name}</p>
                </div>
                <div
                  className={`flex flex-col h-fit justify-center items-center ${item?.subPoints?.length ? "mt-2 -mb-3" : ""
                    }`}
                >
                  {item?.subPoints?.length &&
                    item?.subPoints?.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="ml-4 w-[180px] m-auto h-10 hover:bg-[#DEE8EC] rounded-lg cursor-pointer px-4 py-[10px] mb-1"
                        onClick={() => {
                          router.push(subItem.link);
                          closeDrawer();
                          toggleSidebar(false);
                        }}
                      >
                        <li className="text-[#41515C] text-[14px]">
                          {subItem.label}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="h-fit w-fit flex flex-col-reverse gap-7 ml-3">
            {lowerItems.reverse().map((item, index) => (
              <div
                key={index}
                className="flex w-[200px] hover:bg-[#DEE8EC] rounded-lg cursor-pointer pl-4 h-10 gap-3 items-center"
                onClick={item.onClick}
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={item.height}
                  height={item.width}
                />
                <p className="text-[#41515C] text-[16px]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
