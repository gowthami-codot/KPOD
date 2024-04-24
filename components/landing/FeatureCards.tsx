import Image from "next/image";

const FeatureCards = () => {
  return (
    <div className="bg-white text-black">
      <div className="py-10 md:py-20 px-5 md:px-40">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center flex-grow">
          <div className="w-full md:w-[70%] flex flex-col gap-3 md:gap-6">
            <div className="border border-gray-200 p-4 md:p-10 rounded-2xl">
              <div className="text-lg font-bold">High-Performance GPUs</div>
              <div className="text-xs my-3 md:my-6">
                Offer state-of-the-art GPU hardware that provides top-tier
                performance for intensive computing tasks like AI training, 3D
                rendering, and scientific simulations.
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6">
              <div className="w-full border border-gray-200 p-4 md:p-10 rounded-2xl">
                <div className="text-lg font-bold">
                  Real-Time Analytics and Monitoring
                </div>
                <div className="text-xs my-3 md:my-6">
                  Equip users with tools to monitor their usage and performance
                  metrics in real-time, helping them optimize their applications
                  and control costs.
                </div>
              </div>
              <div className="w-full border border-gray-200 p-4 md:p-10 rounded-2xl relative">
                <div className="text-lg font-bold">Scalable Resources</div>
                <div className="text-xs my-3 md:my-6">
                  Enable users to scale their GPU resources up or down instantly
                  depending on their project needs, which provides flexibility
                  and cost-effectiveness.
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] flex flex-col w-full gap-3">
            <div className="w-full border border-gray-200 p-4 md:p-10 rounded-2xl">
              <div className="text-lg font-bold">User-Friendly Interface</div>
              <div className="text-xs my-3 md:my-6">
                Offer a simple, intuitive interface that allows users to manage
                their GPU resources easily, without needing in-depth technical
                knowledge.
              </div>
            </div>
            <div className="w-full border border-gray-200 p-4 md:p-10 rounded-2xl">
              <div className="text-lg font-bold">
                Advanced Security Measures
              </div>
              <div className="text-xs my-3 md:my-6">
                Implement top-notch security protocols to protect user data and
                operations from unauthorized access and threats.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
