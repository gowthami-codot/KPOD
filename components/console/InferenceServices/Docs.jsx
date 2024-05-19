// "use client";
// import { useEffect, useRef } from "react";
// import { toast } from "sonner";
// import hljs from "highlight.js";
// import "highlight.js/styles/default.css";

// import python from "highlight.js/lib/languages/python";
// hljs.registerLanguage("python", python);

// const Docs = () => {
//   const codeRef = useRef(null);
//   const requestRef = useRef(null);

//   const copyRequestToClipboard = () => {
//     if (requestRef.current) {
//       const requestText = requestRef.current.textContent;
//       navigator.clipboard.writeText(requestText).then(
//         function () {
//           toast.success("Copying to clipboard was successful!");
//         },
//         function (err) {
//           toast.error("Could not copy text: ", err);
//         }
//       );
//     }
//   };

//   const copyCodeToClipboard = () => {
//     if (codeRef.current) {
//       const codeText = codeRef.current.textContent;
//       navigator.clipboard.writeText(codeText).then(
//         function () {
//           toast.success("Copyied to clipboard.");
//         },
//         function (err) {
//           toast.error("Could not copy text: ", err);
//         }
//       );
//     }
//   };

//   const requestData = `
//   curl https://cloud.olakrutrim.com/v1/chat/completions
//   -H Content-Type: application/json
//   -H "Authorization: Bearer <KRUTRIM_API_KEY>
//   -d '{
//      model": "Krutrim-spectre-v2",
//     "messages": [
//       {
//         "role": "system",
//         "content": "You are a helpful assistant."
//       },
//       {
//         "role": "user",
//         "content": "Hello!"
//       }
//     ],
//     "frequency_penalty": 0,
//     "logit_bias": {2435:-100, 640:-100},
//     "logprobs": true,
//     "top_logprobs": 2,
//     "max_tokens": 256,
//     "n": 1,
//     "presence_penalty": 0,
//     "response_format": { "type": "text" },
//     "stop": null,
//     "stream": false,
//     "temperature": 0,
//     "top_p": 1
//   }'
//   `;

//   const responseData = `
//   {
//     "id": "chatcmpl-123",
//     "object": "chat.completion",
//     "created": 1702685778,
//     "model": "Krutrim-spectre-v2",
//     "choices": [
//       {
//         "index": 0,
//         "message": {
//           "role": "assistant",
//           "content": "Hello! How can I assist you today?"
//         },
//         "logprobs": {
//           "content": [
//             {
//               "token": "Hello",
//               "logprob": -0.31725305,
//               "bytes": [
//                 72,
//                 101,
//                 108,
//                 108,
//                 111
//               ],
//               "top_logprobs": [
//                 {
//                   "token": "Hello",
//                   "logprob": -0.31725305,
//                   "bytes": [
//                     72,
//                     101,
//                     108,
//                     108,
//                     111
//                   ]
//                 },
//                 {
//                   "token": "Hi",
//                   "logprob": -1.3190403,
//                   "bytes": [
//                     72,
//                     105
//                   ]
//                 }
//               ]
//             }
//           ]
//         },
//         "finish_reason": "stop"
//       }
//     ],
//     "usage": {
//       "prompt_tokens": 9,
//       "completion_tokens": 9,
//       total_tokens: 18
//     },
//     system_fingerprint: null
//   }
//   `;

//   const integrationData = `
//     # Assume openai>=1.0.0
//     from openai import OpenAI
//     # Create an OpenAI client with your KRUTIM API KEY and endpoint
    
//     openai = OpenAI(
//         api_key="<YOUR_KRUTRIM_API_KEY>",
//         base_url="https://cloud.olakrutrim.com/v1",
//     )
//     chat_completion = openai.chat.completions.create(
//         model="krutrim-spectre-v2",
//         messages=[
//             {"role": "system", "content": "You are a helpful assistant.},
//             {"role": "user", "content": "Hello"}],
//         ]
    
//     print(chat_completion.choices[0].message.content)`;

//   useEffect(() => {
//     if (codeRef.current) {
//       hljs.highlightElement(codeRef.current);
//     }
//   }, [integrationData]);

//   return (
//     <>
//       <div className="text-black">
//         <div>
//           <h2 className="text-black p-10 font-bold md:text-[25px] text-[20px]">
//             GET STARTED
//           </h2>
//           <div className="">
//             <h2 className="font-bold md:text-[20px] text-[15px] underline md:px-16 px-10 ">
//               Quickstart
//             </h2>
//             <div className="mt-4 md:px-32 px-12">
//               <h2 className="font-semibold md:text-[20px] text-[15px] ">
//                 QuickStart
//               </h2>
//               <p>Get up and running with the API in a few minutes.</p>
//               <h2 className="font-semibold md:text-[20px] text-[15px] mt-2">
//                 Create an API Key
//               </h2>
//               <p>
//                 Please visit{" "}
//                 <a
//                   href="https://cloud.olakrutrim.com/console/inference-service?section=api-keys"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 font-semibold underline"
//                 >
//                   here
//                 </a>{" "}
//                 to create an API Key.
//               </p>

//               <h2 className="font-semibold md:text-[20px] text-[15px] mt-2">
//                 Set up your API Key (recommended)
//               </h2>
//               <p className="md:pr-32">
//                 Instead of putting your API key directly in your code, set it up
//                 as a secret environment variable. This makes using the API
//                 easier (no more copy-pasting the key everywhere) and more secure
//                 (your key won&apos;t be accidentally saved in your code).
//               </p>
//               <h2 className="font-semibold text-[15px] md:text-[20px] mt-2">
//                 Next Steps
//               </h2>
//               <p>
//                 Check out the{" "}
//                 <a
//                   href="https://cloud.olakrutrim.com/console/inference-service?section=compare"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 font-bold underline"
//                 >
//                   Playground
//                 </a>{" "}
//                 to try out the API in your browser
//               </p>
//               <p>
//                 Also visit{" "}
//                 <a
//                   href="https://github.com/ola-krutrim/ai-cloud"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 font-bold underline"
//                 >
//                   AI-Cloud Github
//                 </a>{" "}
//                 for examples and sample applications.
//               </p>
//             </div>
//             <h2 className="font-bold md:text-[20px] text-[16px] mt-5 underline md:px-16 px-10 ">
//               Models
//             </h2>
//             <div className="mt-4 md:px-32 px-12">
//               <h2 className="font-semibold md:text-[20px] text-[16px] ">
//                 Supported Models
//               </h2>
//               <p className="font-semibold underline pt-3">Llama-3-8B</p>
//               <ul className="list-disc md:px-20 px-10">
//                 <li>
//                   Model ID:{" "}
//                   <span className="font-semibold">
//                     Meta-Llama-3-8B-Instruct
//                   </span>
//                 </li>
//                 <li> Developer: Meta</li>
//                 <li>Context Window: 8192 tokens</li>
//               </ul>
//               <p className="font-semibold underline pt-3">Mistral-7B</p>
//               <ul className="list-disc md:px-20 px-10">
//                 <li>
//                   Model ID:{" "}
//                   <span className="font-semibold">Mistral-7B-Instruct</span>
//                 </li>
//                 <li> Developer: Mistral</li>
//                 <li>Context Window: 8192 tokens</li>
//               </ul>
//               <p className="font-semibold underline pt-3">Krutrim</p>
//               <ul className="list-disc md:px-20 px-10">
//                 <li>
//                   Model ID:{" "}
//                   <span className="font-semibold">Krutrim-spectre-v2</span>
//                 </li>
//                 <li> Developer: Krutrim</li>
//                 <li>Context Window: 4096 tokens</li>
//               </ul>
//               <p
//                 className="font-italic mt-2 md:mt-4"
//                 style={{ fontStyle: "italic" }}
//               >
//                 These are Instruct-type models. They are directly accessible
//                 through the API endpoint using the model IDs mentioned above.
//               </p>
//             </div>
//           </div>

//           <h2 className="text-black md:p-10 p-7 font-bold md:text-[25px] text-[17px] ">
//             FEATURES
//           </h2>
//           <div>
//             {" "}
//             <h2 className="font-semibold md:text-[20px] text-[16px] underline md:px-16 px-12">
//               Chat Completions
//             </h2>
//             <div className="mt-4 md:px-32 px-5">
//               <h2 className="font-semibold md:text-[20px] text-[16px] ">
//                 Chat Completion Models
//               </h2>
//               <p className="font-semibold underline pt-3 text-[17px] ">
//                 Request
//               </p>
//               <div className="relative">
//                 <button onClick={copyRequestToClipboard}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-6 h-6 absolute right-5 top-12"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
//                     />
//                   </svg>
//                 </button>
//                 <pre
//                   ref={requestRef}
//                   className="bg-gray-200 md:px-20 px-3 py-2 md:py-10 mt-2 md:text-[20px] text-[10px] rounded-[20px] break-words overflow-x-auto"
//                 >
//                   <code className="plaintext">{requestData}</code>
//                 </pre>
//               </div>

//               <h2 className="font-semibold md:text-[20px] text-[16px] md:mt-6 mt-3">
//                 Required Parameters:
//               </h2>
//               <ul className="list-disc md:px-20 px-5 text-[16px] md:text-[20px]">
//                 <li>
//                   <span className="font-semibold">messages (array): </span> A
//                   list of messages in the conversation so far. Each message is
//                   an object with the following fields:
//                 </li>
//                 <ul className="list-disc md:px-20 px-4">
//                   <li>
//                     <span className="font-semibold">role </span> (string): Can
//                     be "system", "user", or "assistant".
//                   </li>
//                   <li>
//                     <span className="font-semibold">content </span>(string): The
//                     text of the message.
//                   </li>
//                   <li>
//                     <span className="font-semibold">name </span>(string,
//                     optional): An optional name to disambiguate messages from
//                     different users with the same role.
//                   </li>
//                 </ul>
//                 <li className="mt-3">
//                   <span className="font-semibold">model </span> (string): ID of
//                   the language model to use for generation. Check Model ID(s) in
//                   the <span className="font-semibold">Model section.</span>
//                 </li>
//               </ul>
//               <h2 className="font-semibold md:text-[20px] text-[16px] md:mt-6 mt-3">
//                 Optional Parameters:
//               </h2>
//               <ul className="list-disc md:px-20 px-6 md:text-[20px] text-[16px]">
//                 <li>
//                   <span className="font-semibold">frequency_penalty</span>{" "}
//                   (number, defaults to 0): Controls the likelihood of repeating
//                   previous phrases. Values between -2.0 and 2.0, with positive
//                   values penalizing repetition.
//                 </li>
//                 <li>
//                   <span className="font-semibold">max_tokens </span> (integer,
//                   optional): Maximum number of tokens allowed in the generated
//                   response.
//                 </li>
//                 <li>
//                   <span className="font-semibold">n </span> (integer, defaults
//                   to 1): How many different chat completion choices to generate
//                   (increases cost).
//                 </li>
//                 <li>
//                   <span className="font-semibold">presence_penalty </span>{" "}
//                   (number, defaults to 0): Similar to frequency penalty, but
//                   considers overall newness of topics. Values between -2.0 and
//                   2.0.
//                 </li>
//                 <li>
//                   <span className="font-semibold">seed</span> (integer,
//                   optional): Attempts to generate the same response for repeated
//                   requests with the same seed. Determinism is not guaranteed
//                 </li>
//                 <li>
//                   <span className="font-semibold">stop</span> (string/array,
//                   optional): Up to 4 sequences to stop generation upon
//                   encountering.
//                 </li>
//                 <li>
//                   <span className="font-semibold">stream</span> (boolean,
//                   defaults to false): Enables sending response in chunks during
//                   generation.
//                 </li>
//                 <li>
//                   <span className="font-semibold">Temperature</span> (number,
//                   defaults to 1): Controls randomness of the response (0-2).
//                   Higher is more random.
//                 </li>
//                 <li>
//                   <span className="font-semibold">top_p</span> (number, defaults
//                   to 1): Sampling method focusing on high-probability tokens
//                   (0-1). Lower values consider fewer tokens. random.
//                 </li>
//               </ul>

//               <p className="font-semibold underline pt-3 text-[17px]">
//                 Response
//               </p>
//               <pre className="bg-gray-200 text-black md:text-[20px] text-[10px] md:px-20 px-5 py-4 md:py-5 mt-2  rounded-[20px] break-words">
//                 {responseData}
//               </pre>
//               <p className="md:text-[20px] text-[16px] mt-3">
//                 The response is a chat completion object, or a sequence of
//                 chunks if streaming is enabled. Here are the key properties:
//               </p>
//               <ul className="list-disc md:px-20 px-6 mt-2 md:text-[20px] text-[16px]">
//                 <li>
//                   <span className="font-medium">id </span> (string): Unique
//                   identifier for the chat completion
//                 </li>

//                 <li>
//                   <span className="font-medium">choices </span>(array): List of
//                   chat completion choices (can be multiple if n is greater than
//                   1).
//                 </li>
//                 <li>
//                   <span className="font-medium">Logprobs </span>(string):
//                   (boolean, null, optional)
//                 </li>
//                 <li>
//                   <span className="font-medium">created </span>(integer): Unix
//                   timestamp (seconds) of when the chat completion was generated
//                 </li>
//                 <li>
//                   <span className="font-medium">model </span> (string): ID of
//                   the language model used for generation.
//                 </li>
//                 <li>
//                   <span className="font-medium">object </span> (string): Always
//                   "chat.completion"
//                 </li>
//                 <li>
//                   <span className="font-medium">usage </span>(object):
//                   Statistics related to the completion request (resource usage)
//                 </li>
//               </ul>
//             </div>
//             <h2 className="font-semibold md:text-[20px] text-[16px] underline md:mt-0 mt-5 md:px-16 px-6 ">
//               Errors
//             </h2>
//             <div className="mt-4 md:px-32 px-9">
//               <h2 className="font-medium md:text-[20px] text-[16px]">
//                 Understanding Error Messages
//               </h2>
//               <p className="text-lg md:text-xl my-3">
//                 These codes show up in your response. If there&apos;s an error,
//                 you&apos;ll also get details about it. Here&apos;s a breakdown of the
//                 codes you might see:
//               </p>
//               <h2 className="font-medium md:text-[20px] text-[16px]">
//                 Success Codes
//               </h2>
//               <ul className="list-disc md:px-20 px-7 mt-2 text-[16px] md:text-[20px]">
//                 <li>
//                   <span className="font-medium">200 OK:</span> Everything went
//                   smoothly!
//                 </li>
//               </ul>
//               <h2 className="font-medium md:text-[20px] text-[16px]">
//                 Error Codes
//               </h2>
//               <ul className="list-disc md:px-20 px-7 mt-2 text-[16px] md:text-[20px]">
//                 <li>
//                   <span className="font-medium">400 Bad Request:</span> : Your
//                   request was confusing. Double-check the format and try again
//                 </li>
//                 <li>
//                   <span className="font-medium">404 Not Found:</span> We
//                   couldn&apos;t find what you requested. Maybe the address is wrong?
//                 </li>
//                 <li>
//                   <span className="font-medium">422 Unprocessable Entity:</span>{" "}
//                   The information you gave us wasn&apos;t quite right. Make sure it&apos;s
//                   all filled in correctly
//                 </li>
//                 <li>
//                   <span className="font-medium">429 Too Many Requests:</span>{" "}
//                   You&apos;re asking too much too fast! Slow down and try again
//                   later.
//                 </li>
//                 <li>
//                   <span className="font-medium">
//                     500 Internal Server Error:
//                   </span>{" "}
//                   Something went wrong on our end. Try again later, or contact
//                   us if it keeps happening.
//                 </li>
//                 <li>
//                   <span className="font-medium"> 502 Bad Gateway:</span> We got
//                   a bad response from someone helping us. It might be temporary,
//                   so try again.
//                 </li>
//                 <li>
//                   <span className="font-medium">503 Service Unavailable:</span>{" "}
//                   We&apos;re taking a break or a bit busy. Wait a bit and try again
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <h2 className="text-black md:p-10 p-4 font-bold md:text-[25px] text-[18px] ">
//             INTEGRATIONS
//           </h2>
//           <div>
//             {" "}
//             <h2 className="font-semibold md:text-[20px] text-[16px] underline md:px-16 px-10 ">
//               OpenAI Compatibility
//             </h2>
//             <div className="md:mt-4 mt-2 md:px-32 px-5">
//               <h2 className="font-semibold md:text-[20px] ">
//                 OpenAI Compatibility
//               </h2>
//               <p>
//                 You can use the official OpenAI python SDK to run inferences::
//               </p>
//               <div className="relative">
//                 <button onClick={copyCodeToClipboard}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="w-6 h-6 absolute right-5 top-12"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
//                     />
//                   </svg>
//                 </button>
//                 <pre
//                   ref={codeRef}
//                   className="bg-slate-200 md:px-20 md:py-10 px-3 py-2 mt-2 md:text-[20px] text-[9px] rounded-[20px] break-words overflow-x-auto"
//                 >
//                   <code className="python overflow-x-auto">
//                     {integrationData}
//                   </code>
//                 </pre>
//               </div>
//             </div>
//           </div>
//           <h2 className="text-black md:p-10 p-3 font-bold md:text-[25px] text-[20px] ">
//             Accounts
//           </h2>
//           <div>
//             {" "}
//             <h2 className="font-semibold md:text-[20px] text-[16px] underline md:px-16 px-10 ">
//               API keys
//             </h2>
//             <div className="mt-4 md:px-32 px-10 text-xl my-3">
//               {" "}
//               <p>API keys are required for accessing the APIs.</p>
//               <p>
//                 You can manage your API keys{" "}
//                 <a
//                   href="https://cloud.olakrutrim.com/console/inference-service?section=api-keys"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 font-bold underline"
//                 >
//                   here
//                 </a>
//               </p>
//             </div>
//           </div>
//           <div>
//             {" "}
//             <h2 className="font-semibold md:text-[20px] text-[16px] underline md:px-16 px-10 ">
//               Rate Limits
//             </h2>
//             <div className="mt-4 md:px-32 px-12 text-xl">
//               {" "}
//               <p>
//                 Rate limits act as control measures to regulate how frequently a
//                 user can access our services within a specified period.
//               </p>
//               <div className="justify-center flex flex-col items-start mt-6 ">
//                 <table className="table-auto border-collapse border border-black ">
//                   <thead>
//                     <tr>
//                       <th className="border border-black px-4 py-2">RPM</th>
//                       <th className="border border-black px-4 py-2">RPD</th>
//                       <th className="border border-black px-4 py-2">TPD</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="border border-black px-4 py-2">60</td>
//                       <td className="border border-black px-4 py-2">600</td>
//                       <td className="border border-black px-4 py-2">500000</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//           <h2 className="text-black md:p-10 p-4 font-bold md:text-[25px] text-[17px]  ">
//             LEGAL
//             <div>
//               {" "}
//               <h2 className="font-semibold md:text-[20px] text-[16px] px-6 underline mt-2 ">
//                 Policies & Notices
//               </h2>
//               <div className="mt-4 px-8 md:px-20">
//                 <p>
//                   {" "}
//                   <a
//                     href="https://cloud.olakrutrim.com/TOU_v1.pdf"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 text-lg underline"
//                   >
//                     Terms of Use
//                   </a>
//                 </p>
//                 <p>
//                   {" "}
//                   <a
//                     href="https://cloud.olakrutrim.com/privacy_policy_v1.pdf"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 text-lg underline"
//                   >
//                     Privacy Policy
//                   </a>
//                 </p>
//                 <p>
//                   {" "}
//                   <a
//                     href="https://cloud.olakrutrim.com/eula.pdf"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 text-lg underline"
//                   >
//                     EULA
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </h2>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Docs;
