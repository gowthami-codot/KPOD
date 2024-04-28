"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
	if (typeof window !== 'undefined') {
		let params = new URLSearchParams(window.location.search);
		setToken(params.get("token"));
		console.log(params.get("token"));
	}
  }, []);


  useEffect(() => {
    const verifyEmail = async () => {
      // try {
        const response = await fetch(`/api/verification?token=${token}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
        });

        if (!response.ok) {
          console.error('Network response was not ok', response.status);

        const result = await response.json();
        console.log(result);

        if (result.isVarified === 1 && result.userToken === token) {
          router.push("/signIn");
        }
      }
    };

    verifyEmail();
  }, [router, token]);

  return (
    <div className="flex items-center justify-center h-screen">
      Verifying...
    </div>
  );
};

export default Page;
