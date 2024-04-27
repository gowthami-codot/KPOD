"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <Link
      href={"/"}
      className={`${
        pathname.startsWith("/console")
          ? "text-3xl font-bold bg-[#00000040] px-10 py-5 w-full hidden text-center md:text-start"
          : "text-3xl font-bold bg-[#00000040] px-10 py-5 w-full absolute text-center md:text-start"
      }`}
    >
      KRUTRIM
    </Link>
  );
};

export default Header;
