"use client";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { sha256 } from "js-sha256";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill out all fields.");
      return;
    }

    const hashedPassword = sha256(password);

    const data = {
      email,
      password: hashedPassword,
    };

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.ID && result.CreatedAt) {
        toast.success("Logged in successfully.");
        router.push("/console");
      } else if (result.message === "Invalid Credentials") {
        toast.error("Invalid email or password. Please try again.");
      } else {
        throw new Error("An error occurred while logging in.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while logging in.");
    }
  };

  return (
    <div className="mt-6 md:mt-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[55%]">
          <video
            src="/login_video.mp4"
            autoPlay
            loop
            muted
            className="h-auto md:h-[500px]"
          />
        </div>
        <div className="bg-[#ffffff15] p-5 md:p-10 lg:py-20 rounded-2xl w-full md:w-[45%] mx-auto border border-[#63E3E3] relative">
          <div className="absolute -z-10 -mt-8 md:-mt-24 -mr-8 md:-ml-[60px] ">
            <Image
              src={"/login_page_gradient_1.svg"}
              alt="gradient"
              width={300}
              height={300}
            />
          </div>
          <form onSubmit={handleSubmit} className="z-10">
            <div className="flex flex-col items-start justify-center w-full gap-2 md:gap-3">
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#ffffff20] p-2 md:p-4 w-full mt-2 rounded-lg text-white focus:border-white
                focus:outline-none focus-visible:outline-none"
                placeholder="Enter Your Email"
              />
              <span>Password</span>
              <div className="bg-[#ffffff20] w-full mt-2 rounded-lg flex justify-between items-center">
                <input
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="text-white focus:outline-none focus-visible:outline-none w-full bg-transparent p-2 md:p-4"
                />
                <span
                  className="pr-2 md:pr-4 cursor-pointer"
                  onClick={handleToggle}
                >
                  {type === "text" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </span>
              </div>
              <div className="flex mt-10 mb-2 mx-auto gap-1">
                <div>Don't have an account ?</div>
                <Link
                  href={"/signUp"}
                  className="cursor-pointer hover:underline duration-300"
                >
                  Register
                </Link>
              </div>
              <button
                type="submit"
                className="flex text-black bg-[#80FFF7] py-3 px-10 w-fit mx-auto rounded-full cursor-pointer
            hover:scale-110 duration-300"
              >
                Login
              </button>
            </div>
          </form>
          <div className="absolute -z-10 mt-6 md:-mt-36 -mr-8 md:ml-[260px] ">
            <Image
              src={"/login_page_gradient_1.svg"}
              alt="gradient"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
