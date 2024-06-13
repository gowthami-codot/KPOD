import Link from "next/link";

const Legal = () => {
  return (
    <div className="flex flex-col">
      <div className="text-[#00C39C] text-lg md:text-xl font-semibold my-3">
        Legal
      </div>
      <div className="text-lg md:text-xl font-medium">Policies & Notices</div>
      <Link href={"/TOU_v1.pdf"} target="_blank" className="text-[#00C39C] text-lg font-medium hover:underline">
        Terms of Use
      </Link>
      <Link href={"/privacy_policy_v1.pdf"} target="_blank" className="text-[#00C39C] text-lg font-medium hover:underline">
        Privacy Policy
      </Link>
      <Link href={"/eula.pdf"} target="_blank" className="text-[#00C39C] text-lg font-medium hover:underline">
        EULA
      </Link>
    </div>
  );
};

export default Legal;
