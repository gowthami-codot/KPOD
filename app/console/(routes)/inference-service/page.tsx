"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

import Compare from "@/components/console/InferenceServices/Compare";
import Usage from "@/components/console/InferenceServices/Usage";
import SidebarExtend from "@/components/console/InferenceServices/SidebarExtend";

const PageContent = () => {
 const searchParams = useSearchParams();
 const section = searchParams.get("section");

 const [activeTab, setActiveTab] = useState("");
 console.log(activeTab);

 useEffect(() => {
    setActiveTab(section || "");
 }, [section]);

 return (
    <div className="h-full flex flex-col">
      <div className="hidden mt-24 mb-4 md:flex md:flex-col md:fixed md:inset-y-0 rounded">
        <SidebarExtend />
      </div>
      <main className="md:pl-24">
        {activeTab === "" && <Compare />}
        {activeTab === 'compare' && <Compare />}
        {activeTab === 'usage' && <Usage />}
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
