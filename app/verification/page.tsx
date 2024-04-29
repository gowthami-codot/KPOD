"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
	if (typeof window !== 'undefined') {
		let params = new URLSearchParams(window.location.search);
		setToken(params.get("token"));
	}
  }, []);


  useEffect(() => {
    const verifyEmail = async () => {
        const response = await fetch(`/api/verification?token=${token}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
        });

        const result = await response.json();

        if (result && result.isVerified === 1 && result.userToken === token) {
          router.push("/signIn");
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
