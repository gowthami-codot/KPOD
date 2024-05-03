"use client";
import React from "react";
import { Drawer } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SideBar() {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const router = useRouter();

    const topItems = [
        {
            name: "Home",
            link: "/console/home",
            src: "/Krutrim-home-frame.svg",
            height: 18,
            width: 18,
        },
        {
            name: "GPU",
            link: "/console/GPU",
            src: "/Krutrim-gpu-logo.svg",
            height: 18,
            width: 18,
        },
        {
            name: "Inference Service",
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
            ],
        },
        // {
        //     name: "Admin Settings",
        //     link: "/console/home",
        //     src: "/Krutrim-vector.svg",
        //     height: 20,
        //     width: 20,
        // },
    ];

    const lowerItems = [
        {
            name: "Region",
            link: "/console/home",
            src: "/india.svg",
            height: 20,
            width: 20,
        },
        // {
        //     name: "Notification",
        //     link: "/console/home",
        //     src: "/bell.svg",
        //     height: 18,
        //     width: 18,
        // },
        // {
        //     name: "Profile",
        //     link: "/console/home",
        //     src: "/profile.svg",
        //     height: 18,
        //     width: 18,
        // },
    ];

    return (
        <React.Fragment>
            <div className="flex flex-col w-[80px] bg-[#F3F7F9] h-full py-10 px-5 shadow-inner justify-between items-center fixed z-[9999]">
                <div className="flex flex-col h-[218px] w-full min-h-[218px] gap-6">
                    <div className="-mt-5 mb-6">
                        <Image
                            src="/ola-logo.svg"
                            alt="logo"
                            width={40}
                            height={16}
                            className="cursor-pointer"
                        />
                    </div>
                    {topItems.map((item, index) => (
                        <div
                            className="flex h-12 w-10 items-center justify-center hover:bg-[#DEE8EC] p-2 rounded-lg cursor-pointer"
                            key={index}
                            onMouseEnter={openDrawer}
                        >
                            <Image
                                src={item.src}
                                alt={item.name}
                                width={item.height}
                                height={item.width}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col h-[152px] w-full min-h-[152px] gap-6">
                    {lowerItems.map((item, index) => (
                        <div
                            className="flex h-12 w-10 items-center justify-center hover:bg-[#DEE8EC] p-2 rounded-lg cursor-pointer "
                            key={index}
                            onMouseEnter={openDrawer}
                        >
                            <Image
                                src={item.src}
                                alt={item.name}
                                width={item.height}
                                height={item.width}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Drawer
                open={open}
                className="bg-[#F3F7F9] w-[230px] h-full flex flex-col z-[9999]"
                onClose={closeDrawer}
                onFocus={closeDrawer}
                onMouseLeave={closeDrawer}
                transition={{
                    type: "tween",
                    duration: 0.5,
                }}
                style={{
                    base: {
                        drawer: {
                            position: "fixed",
                            zIndex: 9999,
                        },
                        overlay: {
                            position: "absolute",
                            inset: "inset-0",
                            width: "w-full",
                            height: "h-full",
                            pointerEvents: "pointer-events-auto",
                            zIndex: "z-[9995]",
                            backgroundColor: "bg-black",
                            backgroundOpacity: "bg-opacity-60",
                            backdropBlur: "backdrop-blur-sm",
                        },
                    },
                }}
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
                    <div className="h-fit w-fit flex flex-col-reverse gap-7 ml-3">
                        {topItems.reverse().map((item, index) => (
                            <div className="flex flex-col" key={index}>
                                <div
                                    className="flex w-[200px] hover:bg-[#DEE8EC] rounded-lg cursor-pointer pl-4 h-10 gap-3 items-center"
                                    onClick={() => {
                                        router.push(item.link);
                                        closeDrawer();
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
