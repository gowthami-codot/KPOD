"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; // Assuming this is a custom toast notification library
import Image from "next/image";
import { Input } from "@/components/UI/CustomInput";
import { sha256 } from "js-sha256";
// import { validatePassword } from "@/utils/regex";

const ResetPassword = () => {
    const router = useRouter();

    var token = "";

    if (typeof window !== "undefined") {
        let params = new URLSearchParams(window.location.search);
        token = params.get("token");
    }

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmType, setConfirmType] = useState("password");
    const [type, setType] = useState("password");

    const isButtonEnabled = !password || !confirmPassword;

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

    // const sendMoEngageEvent =(eventName,data) =>{
    //     if(Moengage!== null){
    //         if (data == null){
    //             Moengage.track_event(eventName);
    //         }
    //         else{
    //             Moengage.track_event(eventName, data);
    //         }
    //         console.log("Sending event:"+ eventName);
    //     }
    //     else{
    //         console.log("MoEngage Object is Null");
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (password !== confirmPassword) {
    //         toast.error("Passwords do not match.");
    //         return;
    //     } else if (!validatePassword(password)) {
    //         toast.error(
    //             "Password must be at least 8 characters long and contain at least one special character, one capital letter, and one number."
    //         );
    //         return;
    //     }

    //     const hashedPassword = sha256(password);
    //     const data = {
    //         password: hashedPassword,
    //         token: token,
    //     };

    //     try {
    //         const response = await fetch("/api/resetPassword", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         });

    //         if (response.status == 409) {
    //             toast.error("New password cannot be the same as current password.");
    //             sendMoEngageEvent('PASSWORD_RESET_ATTEMPT_FAILED',null);
    //             return;
    //         } else if (response.status == 401) {
    //             sendMoEngageEvent('PASSWORD_RESET_ATTEMPT_FAILED',null);
    //             toast.error("Invalid credentials.");
    //             return;
    //         } else if (!response.ok) {
    //             sendMoEngageEvent('PASSWORD_RESET_ATTEMPT_FAILED',null);
    //             throw new Error("API request failed with status: " + response.status);
    //         }

    //         const result = await response.json();
    //         if (result && result.email) {
    //             toast.success("Password Reset Successful.");

    //             sendMoEngageEvent('PASSWORD_RESET_ATTEMPT_FAILED',{email:result.email})
    //             router.push("/signIn");
    //         } else {
    //             sendMoEngageEvent('PASSWORD_RESET_ATTEMPT_FAILED',null);
    //             throw new Error("Resetting password failed.");
    //         }
    //     } catch (error) {
    //         sendMoEngageEvent('PASSWORD_RESET_ATTEMPT_FAILED',null);
    //         console.error("Error:", error);
    //         toast.error("An error occurred while resetting password.");
    //     }
    // };

    return (
        <form  className="flex">
            <div className="w-[100vw] h-[100vh] bg-white flex items-center justify-center text-darkPrimary">
                <div className="w-full h-full relative hidden sm:block">
                    <img
                        src={`./main-landing.jpeg`}
                        alt="Login Page"
                        className="w-full h-full absolute top-0 left-0 object-cover"
                    />
                    <div className="sm:flex hidden flex-col gap-5   relative z-10">
                        <p className="text-[56px] font-semibold px-16 pt-16">Krutrim Cloud</p>
                        <p className="lg:text-[12px]  md:text-[13px] px-16 -mt-5 pr-10   text-darkSecondary font-semibold">
                            Scale your computational capabilities and experience the GPU services like never before
                        </p>
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
                            className="focus:outline-none  w-full bg-[#F3F4F5]"
                            autocomplete="off"
                            label="New Password *"
                        />
                    </div>
                    <div className="w-full">
                        <Input
                            type={confirmType}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            className=" focus:outline-none focus-visible:outline-none w-full bg-[#F3F4F5]"
                            autocomplete="off"
                            label="Confirm Password *"
                        />
                    </div>
                    <div className="w-full ">
                        <button
                            type="submit"
                            className={`w-full flex items-center justify-center px-4 py-2 h-[56px] rounded-[4px] text-white
            ${isButtonEnabled ? "bg-gray-400" : "bg-black"}`}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ResetPassword;
