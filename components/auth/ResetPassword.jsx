"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner"; // Assuming this is a custom toast notification library
import Image from "next/image";
import { Input } from "@/components/UI/CustomInput";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const [confirmType, setConfirmType] = useState("password");
  const [type, setType] = useState("password");
  

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const handleConfirmToggle = () => {
    if (confirmType === "password") {
      setConfirmType("text");
    } else {
      setConfirmType("password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
  };

  return (
    < form onSubmit={handleSubmit} className="flex">
    <div className="w-[100vw] h-[100vh] bg-white flex items-center justify-center text-darkPrimary">
   

      <div className="w-full h-full relative hidden sm:block">
        <img
          src={`./main-landing.jpeg`}
          alt="Login Page"
          className="w-full h-full absolute top-0 left-0 object-cover"
        />
        <div className="sm:flex hidden flex-col gap-5   relative z-10">
          <p className="text-[56px] font-semibold px-16 pt-16">Krutrim Cloud</p>
           <p className="lg:text-[12px]  md:text-[13px] px-16 -mt-5 pr-10   text-darkSecondary font-semibold">Scale your computational capabilities and experience the GPU services like never before</p> 
        </div>
      </div>
      <div className="sm:w-[550px] w-[100vw] h-full bg-white px-8 py-12 flex flex-col items-start justify-start gap-5 sm:mt-0 mt-12">
        <p className="text-lightPrimary  font-semibold text-[24px]">Reset Password</p>
      
        <div className="w-full">
          <Input
            type={type}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your New password"
            className=" focus:outline-none  w-full bg-[#F3F4F5]"
           
            autocomplete="off"
          />
        </div>
        <div className="w-full">
          <Input
            type={confirmType}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          
            className=" focus:outline-none focus-visible:outline-none w-full  bg-[#F3F4F5]"
            autocomplete="off"
          />
       
        </div>
        <div className="w-full ">
          <button type="submit"
           
            className={`w-full flex items-center justify-center px-4 py-2 h-[56px] border-black border-2 rounded-[4px] bg-[#F3F4F5] text-black`}
          >
            Submit
          </button>
        </div>
      
      </div>
      
    </div>
    </form>
  );
};

export default ForgotPassword;