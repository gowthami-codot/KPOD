"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";
import Image from "next/image";
import { Input } from "@/components/UI/CustomInput";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Password Reset Email Sent. Please Check Your Inbox.");
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-white flex items-center justify-center text-darkPrimary">
      <div className="w-full h-full relative hidden sm:block">
        <Image
          src={require("../../public/main-landing.jpeg")}
          alt="Login Page"
          className="w-full h-full absolute top-0 left-0 object-cover"
        />
        <div className="sm:flex hidden flex-col gap-5 relative z-10">
          <p className="text-[56px] font-semibold px-16 pt-16">Krutrim Cloud</p>
          <p className="lg:text-[12px]  md:text-[13px] px-16 -mt-5 pr-10   text-darkSecondary font-semibold">Scale your computational capabilities and experience the GPU services like never before</p> 
        </div>
      </div>
      <div className="sm:w-[550px] w-[100vw] h-full bg-white px-8 py-12 flex flex-col items-start justify-start gap-5 sm:mt-0 mt-12">
        <p className="text-lightPrimary font-semibold text-[24px]">
          Forgot Password ?
        </p>
        <form onSubmit={handleSubmit} className=""><p className="text-lightSecondary text-sm">
          {" "}
          Enter your user account&apos;s verified email address and we will send
          you a password reset link.
        </p>
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
          <button
             type="submit"
            className={`w-full mt-5 flex items-center justify-center px-4 py-2 h-[56px] bg-black text-white`}
          >
            Submit
          </button>
        </div></form>
      
      </div>
    </div>
  );
};

export default ForgotPassword;
