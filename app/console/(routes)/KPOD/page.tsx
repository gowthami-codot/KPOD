"use client";
import { useSearchParams } from "next/navigation";
import Kpod from "../../../../components/console/Kpod/Kpod"
import GpuPod from "../../../../components/console/Kpod/GpuPod";
import GpuPodDeploy from "../../../../components/console/Kpod/GpuPodDeploy";
import { useEffect, useState } from "react";


const Page = () => {
  const [activeTab, setActiveTab] = useState("");
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  useEffect(() => {
    setActiveTab(section || "");
  }, [section]);


  return (
    <>
      {activeTab === "" && <Kpod />}
      {activeTab === "KPOD" && <Kpod />}
      {activeTab === "GpuPod" && <GpuPod/>}

      {activeTab === "GpuPodDeploy" && <GpuPodDeploy />}
    </>
  );
};

export default Page;
