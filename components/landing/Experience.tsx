const Experience = () => {
  return (
    <div className="bg-black py-10 md:py-20 px-5 md:px-40">
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[70%] mx-auto 
      md:border border-[#63E3E3] rounded-3xl px-2 md:px-6 py-4 md:py-8">
        <div className="flex flex-col gap-1">
          <div>Experience the future of AI </div>
          <div>Get quick and helpful answers to anything you need.</div>
        </div>
        <div
          className="bg-[#80FFF7] py-2 md:py-3 text-black px-3 rounded-full w-full md:w-fit text-center mt-6 md:mt-0
        cursor-pointer md:hover:scale-110 duration-300"
        >
          Try Krutrim
        </div>
      </div>
    </div>
  );
};

export default Experience;
