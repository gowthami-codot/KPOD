import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "100" });

const About = () => {
  return (
    <div className="py-10 md:py-20 px-5 md:px-40">
      <div className="mb-6 md:mb-10">
        Founded in 2024, Krutrim Cloud is dedicated to revolutionizing the way
        professionals and organizations access high-performance computing. We
        deliver state-of-the-art GPU resources via the cloud, making advanced
        computing power accessible to everyone from individual developers to
        large enterprises. Our platform simplifies complex computational tasks,
        enabling users to focus on innovation and creativity without the
        constraints of hardware limitations.
      </div>
      <div className="flex flex-col items-center md:flex-row gap-6">
        <div className="w-full flex flex-col justify-center md:p-10 h-auto md:h-[250px] md:border-r-4 border-gray-700">
          <div className="text-lg font-bold mb-2 md:mb-4 bg-[#ffffff20] py-2.5 px-4 rounded-full w-full md:w-[60%]">
            Mission Statement
          </div>
          <div className={poppins.className}>
            &quot;Our mission is to democratize access to advanced GPU
            technology, empowering users across industries to accelerate their
            projects, enhance productivity, and drive innovation. We strive to
            provide scalable, secure, and cost-effective GPU computing
            resources, supported by expert guidance and an intuitive user
            experience.&quot;
          </div>
        </div>
        <div className="w-full flex flex-col justify-center md:p-10 h-auto md:h-[250px]">
          <div className="text-lg font-bold mb-2 md:mb-4 bg-[#ffffff20] py-2.5 px-4 rounded-full w-full md:w-[60%]">
            Vision Statement
          </div>
          <div className={poppins.className}>
            &quot;Our vision is to be the global leader in cloud-based GPU
            services, transforming how computational work is done around the
            world. We aim to foster a future where anyone, anywhere can access
            the computing power needed to tackle the most.&quot;
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-between mt-6 md:mt-16 gap-6 md:gap-10">
          <div className="border border-gray-800 w-full p-3 md:p-6 rounded-xl">
            <div className="text-xl md:text-3xl font-bold my-2 md:my-4">
              Foundational Models
            </div>
            <div className={poppins.className}>
              For enterprises, researchers, and developers to build Generative
              AI applications
            </div>
          </div>
          <div className="border border-gray-800 w-full p-3 md:p-6 rounded-xl">
            <div className="text-xl md:text-3xl font-bold my-2 md:my-4">
              AI Cloud
            </div>
            <div className={poppins.className}>
              Managed access to model repository and AI compute at scale
            </div>
          </div>
          <div className="border border-gray-800 w-full p-3 md:p-6 rounded-xl">
            <div className="text-xl md:text-3xl font-bold my-2 md:my-4">
              Silicon for AI
            </div>
            <div className={poppins.className}>
              In house development and manufacturing of chips optimised for AI
              compute
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[70%] flex items-center justify-between mx-auto mt-6 md:mt-16
      border border-[#63E3E3] p-3 md:py-6 md:p-4 md:px-10 rounded-xl md:rounded-3xl flex-col md:flex-row">
        <div className="font-bold text-lg md:text-xl">Ready to implement in your product?</div>
        <div className="bg-[#80FFF7] py-1 text-black px-3 rounded-full w-full md:w-fit text-center my-3 md:my-0
        cursor-pointer md:hover:scale-110 duration-300">Try Krutrim</div>
      </div>
    </div>
  );
};

export default About;
