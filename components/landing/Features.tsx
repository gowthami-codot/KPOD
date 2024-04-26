import Image from "next/image";

const Features = () => {
  return (
    <div>
      <div className="w-[90%] md:w-[30%] md:h-[30%] absolute -z-0 md:ml-[20%] mt-[20%] md:mt-0">
        <Image
          src={"/blue_circle.svg"}
          alt="blue"
          width={300}
          height={300}
          className="opacity-60 overflow-hidden"
        />
      </div>
      <div className="w-[90%] md:w-[30%] md:h-[30%] absolute -z-0 md:ml-[55%] mt-[110%] md:mt-[10%]">
        <Image
          src={"/green_circle.svg"}
          alt="blue"
          width={300}
          height={300}
          className="object-cover opacity-60"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-between px-5 md:px-10 lg:px-36 py-10 md:py-32">
        <div className="border border-[#63E3E3] bg-[#ffffff10] px-5 py-12 rounded-2xl flex justify-between w-full z-10">
          <div className="flex flex-col gap-6">
            <div className="text-3xl md:text-4xl font-bold">Code</div>
            <div className="text-lg">Code your idea in Notebook</div>
          </div>
          <Image src={"/code-logo.png"} width={150} height={150} alt="code" />
        </div>
        <div className="border border-[#63E3E3] bg-[#ffffff10] px-5 py-12 w-full rounded-2xl flex justify-between z-10">
          <div className="flex flex-col gap-6">
            <div className="text-3xl md:text-4xl font-bold">Train</div>
            <div className="text-lg">Train your models with machines</div>
          </div>
          <Image
            src={"/Brain.png"}
            width={150}
            height={150}
            alt="code"
            className="object-cover"
          />
        </div>
        <div className="border border-[#63E3E3] bg-[#ffffff10] px-5 py-12 w-full rounded-2xl flex justify-between overflow-hidden z-10">
          <div className="flex flex-col gap-6">
            <div className="text-3xl md:text-4xl font-bold">Implement</div>
            <div className="text-lg">Make it live</div>
          </div>
          <Image
            src={"/Live.png"}
            width={150}
            height={150}
            alt="code"
            className="w-[140px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
