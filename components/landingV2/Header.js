"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <Link
      href={"/"}
      className={`
      flex items-center justify-center
      ${
        pathname.startsWith("/console")
          ? "text-3xl font-bold px-10 py-5 w-full hidden text-center md:text-start"
          : "text-3xl font-bold px-10 py-5 w-full absolute text-center md:text-start"
      }`}
    >
      {/* <Image
        src={"/logo-black.png"}
        alt="logo"
        width="250"
        height="50"
        className="object-cover"
      /> */}
    </Link>
  );
};

export default Header;
