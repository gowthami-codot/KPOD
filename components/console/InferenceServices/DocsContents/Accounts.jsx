import Link from "next/link";

const Accounts = () => {
  return (
    <div>
      <div className="text-[#00C39C] text-lg md:text-xl font-semibold my-3">
        Accounts
      </div>
      <div className="text-lg md:text-xl font-medium">API keys</div>
      <div className="text-md md:text-lg">
        API keys are required for accessing the APIs.
      </div>
      <div className="text-md my-3">
        You can manage your API{" "}
        <span className="text-[#00C39C] hover:underline">
          <Link href={"/console/inference-service?section=api-keys"}>here.</Link>
        </span>{" "}
      </div>
      <div className="text-lg md:text-xl font-medium">Rate Limits</div>
      <div className="text-md md:text-lg">
        Rate limits act as control measures to regulate how frequently a user
        can access our services within a specified period.
      </div>
      <div className="my-6 md:my-10">
        <div className="w-full md:max-w-xl grid grid-cols-3 gap-2">
          <div className="border border-black p-2 text-center text-[#00C39C]">RPM</div>
          <div className="border border-black p-2 text-center text-[#00C39C]">RPD</div>
          <div className="border border-black p-2 text-center text-[#00C39C]">TPD</div>
          <div className="border border-black p-2 text-center">60</div>
          <div className="border border-black p-2 text-center">600</div>
          <div className="border border-black p-2 text-center">500000</div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
