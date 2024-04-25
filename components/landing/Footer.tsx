const Footer = () => {
  return (
    <div className="bg-white text-black">
      <div className="py-10 md:py-20 px-10 md:px-40">
        <div className="flex flex-col gap-6">
          <div className="text-start text-2xl ">KRUTRIM</div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="cursor-pointer hover:underline duration-300">Blog</div>
            <div className="cursor-pointer hover:underline duration-300">Privacy Policy</div>
            <div className="cursor-pointer hover:underline duration-300">Terms and Conditions</div>
          </div>
          <div className="text-start text-gray-400">
            2024. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
