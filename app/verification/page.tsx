"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const email =
    typeof window !== "undefined" ? localStorage.getItem("email") : "";
  const emailData = { email };

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(`/api/verification?token=${token}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        });

        const result = await response.json();

        if (result.isVarified === 1 && result.userToken === token) {
          router.push("/signIn");
          toast.success("Your email is verified successfully.");
        }
      } catch (error) {
        console.log(error);

        // router.push("/signUp");
      }
    };

    verifyEmail();
  }, [email, emailData, router, token]);

  return (
    <div className="flex items-center justify-center h-screen">
      Verifying...
    </div>
  );
};

export default Page;
