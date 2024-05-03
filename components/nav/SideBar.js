"use client";
import React from "react";
import { Drawer } from "@material-tailwind/react";
import Image from "next/image";

export default function SideBar() {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const topItems = [
        {
            name: "Home",
            link: "/",
            src: "/Krutrim-home-frame.svg",
            height: 18,
            width: 18,
        },
        {
            name: "GPU",
            link: "/gpu",
            src: "/Krutrim-gpu-logo.svg",
            height: 18,
            width: 18,
        },
        {
            name: "Inference Service",
            link: "/layout",
            src: "/Krutrim-Dashboard-Layout.svg",
            height: 18,
            width: 18,
        },
        {
            name: "Admin Settings",
            link: "/vector",
            src: "/Krutrim-vector.svg",
            height: 20,
            width: 20,
        },
    ];

    const lowerItems = [
        {
            name: "Region",
            link: "/",
            src: "/india.svg",
            height: 20,
            width: 20,
        },
        {
            name: "Notification",
            link: "/gpu",
            src: "/bell.svg",
            height: 18,
            width: 18,
        },
        {
            name: "Profile",
            link: "/layout",
            src: "/profile.svg",
            height: 18,
            width: 18,
        },
    ];

    return (
        <React.Fragment>
            <div className="flex flex-col w-[80px] bg-[#F3F7F9] h-full py-10 px-5 shadow-inner justify-between items-center">
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
                            className="flex h-12 w-10 items-center justify-center hover:bg-[#DEE8EC] p-2 rounded-lg cursor-pointer "
                            key={index}
                            onClick={openDrawer}
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
                            onClick={openDrawer}
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
                className="bg-[#F3F7F9] w-[230px] h-full flex flex-col "
                onClose={closeDrawer}
                onFocus={closeDrawer}
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