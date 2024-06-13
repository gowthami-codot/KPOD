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
        pathname.startsWith("/console") ||
        pathname.startsWith("/signIn") ||
        pathname.startsWith("/forgotPasswor") ||
        pathname.startsWith("/resetPassword")
          ? "text-3xl font-bold px-10 py-5 w-full hidden text-center md:text-start"
          : "text-3xl font-bold px-10 py-5 w-full absolute text-center md:text-start"
      }`}
    >
      <Image
        src={"/K1.png"}
        alt="logo"
        width="150"
        height="50"
        className="object-cover flex mx-auto"
      />
    </Link>
  );
};

export default Header;
