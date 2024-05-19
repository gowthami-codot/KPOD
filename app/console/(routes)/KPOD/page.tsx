"use client";
import { useSearchParams } from "next/navigation";
import Kpod from "../../../../components/console/Kpod/Kpod"
import GpuPod from "../../../../components/console/Kpod/GpuPod";
import GpuPodDeploy from "../../../../components/console/Kpod/GpuPodDeploy";
import { Suspense, useEffect, useState } from "react";


const PageContent = () => {
  const [activeTab, setActiveTab] = useState("");
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  useEffect(() => {
    setActiveTab(section || "");
  }, [section]);


  return (
    <>
     <main> {activeTab === "" && <Kpod />}
      {activeTab === "KPOD" && <Kpod />}
      {activeTab === "GpuPod" && <GpuPod/>}

      {activeTab === "GpuPodDeploy" && <GpuPodDeploy />}</main>
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
