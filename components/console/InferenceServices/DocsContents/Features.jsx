// import { CopyBlock, dracula } from "react-code-blocks";
import { useState } from "react";

const curlCode = {
  code: `curl https://cloud.olakrutrim.com/v1/chat/completions
  -H "Content-Type: application/json"
  -H "Authorization: Bearer <KRUTRIM_API_KEY>"
  -d "{
  "model": "Krutrim-spectre-v2",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Hello!"
      }
    ],
    "frequency_penalty": 0,
    "logit_bias": {2435: -100, 640: -100},
    "logprobs": true,
    "top_logprobs": 2,
    "max_tokens": 256,
    "n": 1,
    "presence_penalty": 0,
    "response_format": { "type": "text" },
    "stop": null,
    "stream": false,
    "temperature": 0,
    "top_p": 1
  }"`,
};

const pythonCode = {
  code: `# Assume openai>=1.0.0
from openai import OpenAI
# Create an OpenAI client with your KRUTRIM API KEY and endpoint
  
openai = OpenAI(
    api_key="<YOUR_KRUTRIM_API_KEY>",
    base_url="https://cloud.olakrutrim.com/v1",
)
  
chat_completion = openai.chat.completions.create(
    model="Krutrim-spectre-v2",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello"}
    ]
)
print(chat_completion.choices[0].message.content)`,
};

const Features = () => {
  const [currentCode, setCurrentCode] = useState("curl");

  return (
    <div>
      <div className="text-[#00C39C] text-lg md:text-xl font-semibold my-3">
        Features
      </div>
      <div className="text-lg md:text-xl font-medium">Chat Completions</div>
      <div className="text-md md:text-lg">Chat Completion Models</div>
      <div className="text-md my-3">Request</div>
      <div className="flex flex-wrap gap-4 w-full my-3">
        <div
          className={`w-fit px-3 py-1.5 cursor-pointer border-2 border-black rounded-md ${
            currentCode === "curl"
              ? "bg-black text-white"
              : "border-2 border-black"
          }`}
          onClick={() => setCurrentCode("curl")}
        >
          Curl
        </div>
        <div
          className={`w-fit px-3 py-1.5 cursor-pointer border-2 border-black rounded-md ${
            currentCode === "python"
              ? "bg-black text-white"
              : "border-2 border-black"
          }`}
          onClick={() => setCurrentCode("python")}
        >
          Python
        </div>
      </div>
      <div className="max-w-full overflow-y-auto">
        {currentCode === "curl" && (
          <CopyBlock
            text={curlCode.code}
            wrapLines
            showLineNumbers
            theme={dracula}
            language="bash"
            codeBlock
          />
        )}
        {currentCode === "python" && (
          <CopyBlock
            text={pythonCode.code}
            wrapLines
            showLineNumbers
            theme={dracula}
            language="python"
            codeBlock
          />
        )}
      </div>
      <div className="text-md md:text-lg mt-3 md:mt-6 font-semibold">
        Errors
      </div>
      <div>
        <div className="font-medium">Understanding Error Messages</div>
        <div>
          These codes show up in your response. If there&apos;s an error, you&apos;ll also
          get details about it. Here&apos;s a breakdown of the codes you might see:
        </div>

        <div className="my-3">
          <div className="font-medium">Success Codes</div>
          <div>200 OK: Everything went smoothly!</div>
        </div>

        <div className="my-3">
          <div className="font-medium">Error Codes</div>
          <div>
            400 Bad Request: Your request was confusing. Double-check the format
            and try again
          </div>
          <div>
            404 Not Found: We couldn&apos;t find what you requested. Maybe the
            address is wrong?
          </div>
          <div>
            422 Unprocessable Entity: The information you gave us wasn&apos;t quite
            right. Make sure it&apos;s all filled in correctly
          </div>
          <div>
            429 Too Many Requests: You&apos;re asking too much too fast! Slow down
            and try again later.
          </div>
          <div>
            500 Internal Server Error: Something went wrong on our end. Try
            again later, or contact us if it keeps happening.
          </div>
          <div>
            502 Bad Gateway: We got a bad response from someone helping us. It
            might be temporary, so try again.
          </div>
          <div>
            503 Service Unavailable: We&apos;re taking a break or a bit busy. Wait a
            bit and try again
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
