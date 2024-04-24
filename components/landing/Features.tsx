import Image from "next/image";

const Features = () => {
  return (
    <div className="z-10 mt-[100vh] bg-opacity-20 bg-black">
      <div
        className="bg-black flex flex-col md:flex-row w-full
      gap-6 md:gap-10 items-center justify-between px-5 md:px-10 py-10 md:py-32"
      >
        <div
          className="border border-[#63E3E3] bg-[#ffffff10] p-5 w-full
        rounded-2xl flex justify-between"
        >
          <div className="flex flex-col gap-6 w-full">
            <div className="text-3xl md:text-4xl font-bold">Code</div>
            <div className="text-lg">Code your idea in Notebook</div>
          </div>
          <Image
            src={"/code-logo.png"}
            width={150}
            height={150}
            alt="code"
            className="max-w-[150px]"
          />
        </div>
        <div
          className="border border-[#63E3E3] bg-[#ffffff10] p-5 w-full
        rounded-2xl flex justify-between"
        >
          <div className="flex flex-col gap-6 w-full">
            <div className="text-3xl md:text-4xl font-bold">Train</div>
            <div className="text-lg">Train your models with machines</div>
          </div>
          <Image
            src={"/Brain.png"}
            width={150}
            height={150}
            alt="code"
            className="max-w-[150px]"
          />
        </div>
        <div
          className="border border-[#63E3E3] bg-[#ffffff10] p-5 w-full
        rounded-2xl flex justify-between"
        >
          <div className="flex flex-col gap-6 w-full">
            <div className="text-3xl md:text-4xl font-bold">Implement</div>
            <div className="text-lg">Make it live</div>
          </div>
          <Image
            src={"/Live.png"}
            width={150}
            height={150}
            alt="code"
            className="max-w-[150px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
