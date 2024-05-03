"use client";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { sha256 } from "js-sha256";
import { useRouter } from "next/navigation";

import { useAuth } from "@/components/auth/AuthContext";
import { useUser } from "../../app/context/UserContext";
import { Input } from "@/components/UI/CustomInput";
import SignUp from "./SignUpModal";

const SignIn = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const { setCurrentUser } = useAuth();
  const { setUserDetails } = useUser();

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const handleSubmit = async () => {
    // e.preventDefault();

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

      if (!response.ok) {
        throw new Error("API request failed with status: " + response.status);
      }

      const result = await response.json();

      if (result && result.email) {
        toast.success("Logged in successfully.");

        setCurrentUser(result);
        setUserDetails(result);

        router.push("/console/home");
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
    <div className="w-[100vw] h-[100vh] bg-white flex items-center justify-center text-darkPrimary">
      <SignUp open={open} setOpen={setOpen} />

      <div className="w-full h-full relative hidden sm:block">
        <img
          src={`./main-landing.jpeg`}
          alt="Login Page"
          className="w-full h-full absolute top-0 left-0 object-cover"
        />
        <div className="sm:flex hidden flex-col gap-5 p-16 relative z-10">
          <p className="text-[56px] font-semibold">Ola Krutrim Cloud</p>
           <p className="lg:text-[17px] md:text-[13px]  text-darkSecondary font-semibold">Scale your computational capabilities and experience the GPU services like never before</p> 
        </div>
      </div>
      <div className="sm:w-[550px] w-[100vw] h-full bg-white px-8 py-12 flex flex-col items-start justify-start gap-5 sm:mt-0 mt-12">
        <p className="text-lightPrimary font-semibold text-[24px]">Login</p>
        <p className="text-lightSecondary text-sm">Enter your registered email ID and password</p>
        <div className="w-full">
          <Input
            type="email"
            label={`Email`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" focus:outline-none  w-full bg-[#F3F4F5]"
            placeholder="Enter Your Email"
            autocomplete="off"
          />
        </div>
        <div className="w-full">
          <Input
            type="Password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className=" focus:outline-none focus-visible:outline-none w-full  bg-[#F3F4F5]"
            autocomplete="off"
          />
          <Link href={"/forgetPassword"} className="hover:underline hover:font-semibold"><p className="text-right mt-5">Forgot Password?</p></Link>
          
        </div>
        <div className="w-full">
          <button
            onClick={() => {
              handleSubmit();
            }}
            className={`w-full flex items-center justify-center px-4 py-2 h-[56px] bg-black text-white`}
          >
            Login
          </button>
        </div>
        <div className="flex gap-2 w-full items-center justify-center ">
          <p className="text-[#798E9E]">New to Krutrim Cloud?</p>
          {/* <Link href={"/signUp"} className="cursor-pointer hover:underline duration-300 underline-[#C4CACF]"> */}
          <p
            className="text-[#72C83E]"
            onClick={() => {
              setOpen(true);
            }}
          >
            Sign Up
          </p>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
