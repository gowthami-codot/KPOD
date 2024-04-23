const Hero = () => {
  return (
    <div>
      <div className="absolute z-10">
        <div className="text-3xl font-bold bg-[#00000040] px-10 py-5 w-full absolute text-center md:text-start">
          KRUTRIM
        </div>
        <div className="h-screen flex flex-col gap-6 justify-center items-center z-10 absolute w-full text-center">
          <span className="text-3xl md:text-6xl font-bold">
            Revolutionize AI Workloads <br /> with Krutrim Cloud
          </span>
          <span>
            Scale your computational capabilities and experience the GPU
            services like never before
          </span>
          <div className="bg-[linear-gradient(180deg,#8CFFDA,#46D8FF)] py-5 text-black font-bold px-10 rounded-full cursor-pointer
          border-2 border-transparent hover:border-2 hover:border-white duration-300">
            Create your GPU instance
          </div>
        </div>
        <video src="/hero_video.mp4" autoPlay loop muted className="-z-0 min-h-screen object-cover" />
      </div>
    </div>
  );
};

export default Hero;
