"use client";
import { useSearchParams } from "next/navigation";
import Machine from "@/components/console/Machines/Machine";
import MachineConfig from "@/components/console/Machines/MachineConfig";
import { Suspense, useEffect, useState } from "react";
import ListMachine from "@/components/console/Machines/ListMachines";
import React from "react";


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
       {activeTab === "" && <Machine />}
       {activeTab === "machine" && <Machine />}
       {activeTab === "machineConfig" && <MachineConfig />}
       {activeTab === "listMachine" && <ListMachine/>}
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