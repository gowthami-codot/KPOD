"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      className={
        pathname.startsWith("/console") ? "bg-white text-black hidden" : "bg-white text-black flex"
      }
    >
      <div className="py-5 md:py-8 px-5 sm:px-16 w-full bg-[#F3F7F9]">
        <div className="flex items-start sm:items-end justify-between w-full gap-5 sm:flex-row flex-col ">
          <Link href={"/"}>
            <div className=" flex-col gap-5 items-start justify-start hidden sm:flex">
              <Image
                src={"/logo-black.png"}
                alt="logo"
                width="200"
                height="40"
                className="object-cover"
              />
            </div>
          </Link>
          <Link
              href={
                "https://olacareers.turbohire.co/dashboardv2?orgId=e0c1eb37-eb7a-4ca4-bcc5-d59ce4ce9212&type=0"
              }
              target="_blank"
            >
          <div>
            <h4 className="text-gray-600 ">Get in touch</h4>
          </div>
            </Link>
          <Link
            href={
              "https://llm-spark-new.s3.amazonaws.com/krutrim_chat_policy_docs/privacy_policy_v1.pdf"
            }
          >
            <div>
              <h4 className="text-gray-600 ">Privacy Policy</h4>
            </div>
          </Link>

          <Link
            href={"https://llm-spark-new.s3.amazonaws.com/krutrim_chat_policy_docs/TOU_v1.pdf"}
            target="_blank"
            className="cursor-pointer hover:underline duration-300"
          >
            <div>
              <h4 className="text-gray-600 ">Terms and conditions</h4>
            </div>
          </Link>
          <div className="flex flex-col gap-5 items-start justify-start sm:my-0 my-8">
            <p className="text-gray-600 font-medium">interested in building India's AI cloud?</p>
            <Link
              href={
                "https://olacareers.turbohire.co/dashboardv2?orgId=e0c1eb37-eb7a-4ca4-bcc5-d59ce4ce9212&type=0"
              }
              target="_blank"
            >
              <div className="text-[#72C83E]">Join us →</div>
            </Link>
          </div>
        </div>
        <Link href={"/"}>
            <div className="flex flex-col gap-5 items-start justify-start">
              <Image
                src={"/logo-black.png"}
                alt="logo"
                width="200"
                height="40"
                className="object-cover"
              />
            </div>
          </Link>
        <div className="w-full h-[1px] bg-gray-300 my-8" />
        <div className="flex w-full items-center justify-center text-xs text-black/70">
          © 2024. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
