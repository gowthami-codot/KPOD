import Link from "next/link";

const GetStarted = () => {
  return (
    <div className="text-black">
      <div className="text-xl md:text-3xl font-semibold">
        Welcome to Ola Krutrim Documentation
      </div>
      <div className="text-[#00C39C] text-lg md:text-xl font-semibold my-3">
        Get Started
      </div>
      <div className="flex flex-col my-3">
        <span className="font-bold text-md md:text-lg">QuickStart</span>
        <span className="text-sm text-[#41515C]">
          Get up and running with the API in a few minutes.
        </span>
      </div>
      <div className="flex flex-col my-3">
        <span className="font-medium text-md md:text-lg">
          Create an API Key
        </span>
        <span className="text-sm text-[#41515C]">
          Please visit{" "}
          <span className="text-[#00C39C] hover:underline">
            <Link href={"/console/inference-service?section=api-keys"}>here</Link>
          </span>{" "}
          to create an API Key.
        </span>
      </div>
      <div className="flex flex-col my-3">
        <span className="font-medium text-md md:text-lg">
          Set up your API Key (recommended)
        </span>
        <span className="text-sm text-[#41515C]">
          Instead of putting your API key directly in your code, set it up as a
          secret environment variable. This makes using the API easier (no more
          copy-pasting the key everywhere) and more secure (your key won&apos;t be
          accidentally saved in your code).
        </span>
      </div>
      <div className="flex flex-col my-3">
        <span className="font-medium text-md md:text-lg">Next Steps</span>
        <span className="text-sm text-[#41515C]">
          Check out the{" "}
          <span className="text-[#00C39C] hover:underline">
            <Link href={"/console/inference-service?section=compare"}>Playground</Link>
          </span>{" "}
          to try out the API in your browser <br />
          Also visit AI-Cloud{" "}
          <span className="text-[#00C39C] hover:underline">
            <Link href={"https://github.com/ola-krutrim/ai-cloud"} target="_blank">Github</Link>
          </span>
        </span>
      </div>
      <div className="flex flex-col my-3">
        <span className="font-bold text-md md:text-lg">Models</span>
        <span className="text-md">Supported Models</span>
      </div>
      <div>
        <div>Llama-3-8B</div>
        <ul style={{ listStyleType: "disc" }} className="ml-8 my-2 text-sm text-gray-500">
          <li>Model ID: Meta-Llama-3-8B-Instruct</li>
          <li>Developer: Meta</li>
          <li>Context Window: 8192 tokens</li>
        </ul>
        <div>Mistral-7B</div>
        <ul style={{ listStyleType: "disc" }} className="ml-8 my-2 text-sm text-gray-500">
          <li>Model ID: Mistral-7B-Instruct</li>
          <li>Developer: Mistral</li>
          <li>Context Window: 8192 tokens</li>
        </ul>
        <div>Krutrim</div>
        <ul style={{ listStyleType: "disc" }} className="ml-8 my-2 text-sm text-gray-500">
          <li>Model ID: Krutrim-spectre-v2</li>
          <li>Developer: Krutrim</li>
          <li>Context Window: 4096 tokens</li>
        </ul>
      </div>
      <div className="mt-3 md:mt-6">
        These are Instruct-type models. They are directly accessible through the API endpoint using the model IDs mentioned above.
      </div>
    </div>
  );
};

export default GetStarted;
