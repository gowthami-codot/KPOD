import { useState, useRef, useEffect } from "react";

import GetStarted from "@/components/console/InferenceServices/DocsContents/GetStarted";
import Features from "@/components/console/InferenceServices/DocsContents/Features";
import Integration from "@/components/console/InferenceServices/DocsContents/Integration";
import Accounts from "@/components/console/InferenceServices/DocsContents/Accounts";
import Legal from "@/components/console/InferenceServices/DocsContents/Legal";

const Docs = () => {
  const [currentDoc, setCurrentDoc] = useState("get-started");

  const refs = [
    useRef(null), // getStartedRef
    useRef(null), // featuresRef
    useRef(null), // integrationRef
    useRef(null), // accountsRef
    useRef(null), // legalRef
  ];

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleVisibility = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case "get-started":
            setCurrentDoc("get-started");
            break;
          case "features":
            setCurrentDoc("features");
            break;
          case "integration":
            setCurrentDoc("integration");
            break;
          case "accounts":
            setCurrentDoc("accounts");
            break;
          case "legal":
            setCurrentDoc("legal");
            break;
          default:
            break;
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleVisibility, {
      rootMargin: "-50% 0px -50% 0px", // Adjust this value to control when sections are considered visible
    });

    refs.forEach((ref, index) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="md:ml-[230px] lg:ml-[230px] mt-16 md:mt-10 bg-white">
      <div className="flex">
        <div className="w-[25%] hidden md:flex flex-col border-r border-gray-300 p-4 fixed mt-6">
          <div className="text-xl text-black mb-4">Documentation</div>
          <div className="bg-gray-100 text-black text-sm p-3 rounded-md min-h-[80vh]">
            <div className="flex flex-col items-start justify-center gap-3">
              <div
                className={`w-full rounded-md p-3 cursor-pointer ${
                  currentDoc === "get-started" ? "bg-white" : ""
                }`}
                onClick={() => {
                  setCurrentDoc("get-started");
                  scrollToRef(refs[0]);
                }}
              >
                <div>Get Started</div>
                <ul style={{ listStyleType: "disc" }} className="ml-8 my-2">
                  <li>Quick Start</li>
                  <li>Models</li>
                </ul>
              </div>
              <div
                className={`w-full rounded-md p-3 cursor-pointer ${
                  currentDoc === "features" ? "bg-white" : ""
                }`}
                onClick={() => {
                  setCurrentDoc("features");
                  scrollToRef(refs[1]);
                }}
              >
                Features
                <ul style={{ listStyleType: "disc" }} className="ml-8 my-2">
                  <li>Chat Completions</li>
                  <li>Errors</li>
                </ul>
              </div>
              <div
                className={`w-full rounded-md p-3 cursor-pointer ${
                  currentDoc === "integration" ? "bg-white" : ""
                }`}
                onClick={() => {
                  setCurrentDoc("integration");
                  scrollToRef(refs[2]);
                }}
              >
                Integration
                <ul style={{ listStyleType: "disc" }} className="ml-8 my-2">
                  <li>OpenAI Compatibility</li>
                  <li>Langchain</li>
                </ul>
              </div>
              <div
                className={`w-full rounded-md p-3 cursor-pointer ${
                  currentDoc === "accounts" ? "bg-white" : ""
                }`}
                onClick={() => {
                  setCurrentDoc("accounts");
                  scrollToRef(refs[3]);
                }}
              >
                Accounts
                <ul style={{ listStyleType: "disc" }} className="ml-8 my-2">
                  <li>API Keys</li>
                  <li>Rate Limits</li>
                </ul>
              </div>
              <div
                className={`w-full rounded-md p-3 cursor-pointer ${
                  currentDoc === "legal" ? "bg-white" : ""
                }`}
                onClick={() => {
                  setCurrentDoc("legal");
                  scrollToRef(refs[4]);
                }}
              >
                Legal
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[55%] p-6 md:ml-[30%]">
          <div className="mt-8">
            <div id="get-started" ref={refs[0]}>
              <GetStarted />
            </div>
            <div className="my-6 md:my-10" />
            <div id="features" ref={refs[1]}>
              <Features />
            </div>
            <div className="my-6 md:my-10" />
            <div id="integration" ref={refs[2]}>
              <Integration />
            </div>
            <div className="my-6 md:my-10" />
            <div id="accounts" ref={refs[3]}>
              <Accounts />
            </div>
            <div className="my-6 md:my-10" />
            <div id="legal" ref={refs[4]}>
              <Legal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
