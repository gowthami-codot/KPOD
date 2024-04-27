"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const page = () => {
  const router = useRouter();

  const email = typeof window !== 'undefined' ? localStorage.getItem("email") : ""
  const emailData = {email, "mailTemplate" : "registration"}

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch("/api/verification", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        });
  
        const result = await response.json();
        
        if (result.isVarified === 1) {
          router.push("/signIn");
          toast.success("Your email is verified successfully.")
        }
      } catch (error) {
        router.push("/signUp");
      }
    }

    verifyEmail();
  }, [email])

  return (
    <div className="flex items-center justify-center h-screen">
      Verifying...
    </div>
  )
}

export default page;