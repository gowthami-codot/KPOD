"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      className={
        pathname.startsWith("/console")
          ? "bg-white text-black hidden"
          : "bg-white text-black flex"
      }
    >
      <div className="py-10 md:py-20 px-10 md:px-40">
        <div className="flex flex-col gap-6">
          <Link href={"/"} className="text-start text-2xl">
            KRUTRIM
          </Link>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <Link
                href={
                  "https://llm-spark-new.s3.amazonaws.com/krutrim_chat_policy_docs/privacy_policy_v1.pdf"
                }
                className="cursor-pointer hover:underline duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href={
                  "https://llm-spark-new.s3.amazonaws.com/krutrim_chat_policy_docs/TOU_v1.pdf"
                }
                className="cursor-pointer hover:underline duration-300"
              >
                Terms and Conditions
              </Link>
            </div>
            <div className="text-start text-gray-400">
              2024. All rights reserved.
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            Interested in building India&apos;s AI cloud?{" "}
            <Link
              href={
                "https://olacareers.turbohire.co/dashboardv2?orgId=e0c1eb37-eb7a-4ca4-bcc5-d59ce4ce9212&type=0"
              }
            >
              <span className="flex cursor-pointer group bg-[#63E3E3] text-sm rounded-full px-2 py-0.5 items-center">
                Join Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 group-hover:translate-x-2 duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
