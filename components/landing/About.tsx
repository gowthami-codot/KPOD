const About = () => {
  return (
    <div className="py-10 md:py-20 px-10 md:px-40">
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
        <div className="w-full flex flex-col justify-center p-5 md:p-10 bg-[#ffffff20] rounded-2xl h-auto md:h-[250px]">
          <div className="text-lg font-bold mb-2 md:mb-4">
            Mission Statement
          </div>
          <div>
            &quot;Our mission is to democratize access to advanced GPU
            technology, empowering users across industries to accelerate their
            projects, enhance productivity, and drive innovation. We strive to
            provide scalable, secure, and cost-effective GPU computing
            resources, supported by expert guidance and an intuitive user
            experience.&quot;
          </div>
        </div>
        <div className="w-full flex flex-col justify-center p-5 md:p-10 bg-[#ffffff20] rounded-2xl h-auto md:h-[250px]">
          <div className="text-lg font-bold mb-2 md:mb-4">Vision Statement</div>
          <div>
            &quot;Our vision is to be the global leader in cloud-based GPU
            services, transforming how computational work is done around the
            world. We aim to foster a future where anyone, anywhere can access
            the computing power needed to tackle the most.&quot;
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
