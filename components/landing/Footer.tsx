const Footer = () => {
  return (
    <div className="bg-white text-black">
      <div className="py-10 md:py-20 px-10 md:px-40">
        <div className="flex flex-col gap-6">
          <div className="text-start text-2xl">KRUTRIM</div>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="cursor-pointer hover:underline duration-300">
                Privacy Policy
              </div>
              <div className="cursor-pointer hover:underline duration-300">
                Terms and Conditions
              </div>
            </div>
            <div className="text-start text-gray-400">
              2024. All rights reserved.
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            Interested in building India&apos;s AI cloud?{" "}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
