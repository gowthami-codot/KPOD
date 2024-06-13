import Secrets from "@/components/console/Secrets/Secrets";

const page = () => {
  return (
    <div className="text-black mx-5 md:mx-10">
      <div className="text-[#000000] font-black text-[32px] mt-5 flex items-center">
        KRUTRIM
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1EC2BF] to-[#53B71E] text-[20px] border-[2px] font-medium border-[#53B71E] rounded-[8px] px-4 ml-2 tracking-wide">
          Beta
        </span>
      </div>
      <hr />
      <div className="my-3 text-[#41515C]">Secrets</div>
      <Secrets />
    </div>
  );
};

export default page;
