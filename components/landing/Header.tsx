import Link from "next/link";

const Header = () => {
  return (
    <Link
      href={"/"}
      className="text-3xl font-bold bg-[#00000040] px-10 py-5 w-full absolute text-center md:text-start"
    >
      KRUTRIM
    </Link>
  );
};

export default Header;
