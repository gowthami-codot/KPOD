"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { useUser } from "@/app/context/UserContext";

import Compare from "@/components/console/InferenceServices/Compare";
import Usage from "@/components/console/InferenceServices/Usage";
import ApiKeys from "@/components/console/InferenceServices/ApiKeys";
import Docs from "@/components/console/InferenceServices/Docs";


const PageContent = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

 const [activeTab, setActiveTab] = useState("");
//  const { setUserDetails, userDetails } = useUser();
 

 useEffect(() => {
    setActiveTab(section || "");    
 }, [section]);

//  if(!userDetails || userDetails.maas_request != 2) return (<div></div>);

  return (
    <div className="h-full flex flex-col">
      <main>
        {activeTab === "" && <Compare />}
        {activeTab === "compare" && <Compare />}

        {activeTab === "usage" && <Usage />}
        {activeTab === "api-keys" && <ApiKeys />}
        {activeTab === "docs" && <Docs />}
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
