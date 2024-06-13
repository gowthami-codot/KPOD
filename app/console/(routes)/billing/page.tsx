"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Invoice from "@/components/console/Invoices/Invoice";

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
       
       {activeTab === "invoices" &&<Invoice/> }
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