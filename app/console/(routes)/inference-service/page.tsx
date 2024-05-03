"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

import Compare from "@/components/console/InferenceServices/Compare";
import Usage from "@/components/console/InferenceServices/Usage";
import ApiKeys from "@/components/console/InferenceServices/ApiKeys";

const PageContent = () => {
 const searchParams = useSearchParams();
 const section = searchParams.get("section");

 const [activeTab, setActiveTab] = useState("");
 
 const project =
    typeof window !== "undefined" ? localStorage.getItem("done") : false;

 useEffect(() => {
    setActiveTab(section || "");
 }, [project,section]);

 return (
    <div className="h-full flex flex-col">
      <main>
        {activeTab === "" && <Compare />}
        {activeTab === 'compare' && <Compare />}
       
        {activeTab === 'usage' && <Usage />}
        {activeTab === 'api-keys' && <ApiKeys />}
      </main>
    </div>
 );
};

const Page = () => {
  return (
     <Suspense fallback={<div>Loading...</div>}>
       <PageContent />
     </Suspense>
  );
 };
 
 export default Page;