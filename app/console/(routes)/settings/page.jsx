"use client";
import { useSearchParams } from "next/navigation";
import ManageSshKey from "@/components/console/settings/ManageSshKey"
import { Suspense, useEffect, useState } from "react";
import AddSshKey from "@/components/console/settings/AddSshKey"


const PageContent = () => {
  const [activeTab, setActiveTab] = useState("");
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  useEffect(() => {
    setActiveTab(section || "");
  }, [section]);


  return (
    <>
     <main>
       {activeTab === "" && <ManageSshKey />}
       {activeTab === "manage" && <ManageSshKey />}
       {activeTab === "addkey" && < AddSshKey />}
      </main>
    </>
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