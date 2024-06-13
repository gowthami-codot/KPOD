"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";
import Image from "next/image";
import { Input } from "@/components/UI/CustomInput";

import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const sendMoEngageEvent =(eventName,data) =>{
    if(Moengage!== null){
        if (data == null){
            Moengage.track_event(eventName);
        }
        else{
            Moengage.track_event(eventName, data);
        }
        console.log("Sending event:"+ eventName);
    }
    else{
        console.log("MoEngage Object is Null");
    }
};

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    
    const [isProduction, setIsProduction] = useState(true);
    useEffect(() => {
        if (typeof window !== "undefined" && !window.location.origin.includes("cloud.olakrutrim.com")) {
            setIsProduction(false);
            setIsverified(true);
        }
    }, []);

    const recaptchaRef = useRef(null);
    const [isVerified, setIsverified] = useState(false);
    const [captchaToken, setToken] = useState("");
    const [emailSent, setEmailSent] = useState("");

    async function handleCaptchaSubmission(token) {
        //console.log(token);

        const captchaValue = recaptchaRef.current?.getValue();
        if (!captchaValue) setIsverified(false);
        else setIsverified(true);

        setToken(token);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please fill out email.");
            return;
        }

        const data = {
            email,
            token: captchaToken,
        };

        try {
            const response = await fetch("/api/forgotPassword", {
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
                toast.success("Password Reset Email Sent. Please Check Your Inbox.");
                sendMoEngageEvent('PASSWORD_RESET_REQUEST_ATTEMPT_SUCCESS', {email: result.email});
                setEmailSent("Password Reset Email Sent.");
                setIsverified(false);

                //router.push("/console/home");
            } else {
                sendMoEngageEvent('PASSWORD_RESET_REQUEST_ATTEMPT_FAILED', {email: email});
                throw new Error("An invalid email used for resetting password.");
            }
        } catch (error) {
            console.error("Error:", error);
            sendMoEngageEvent('PASSWORD_RESET_REQUEST_ATTEMPT_FAILED', {email: email});
            toast.error("Invalid email address.");
        }
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
                    <p className="lg:text-[12px]  md:text-[13px] px-16 -mt-5 pr-10   text-darkSecondary font-semibold">
                        Scale your computational capabilities and experience the GPU services like never before
                    </p>
                </div>
            </div>
            <div className="sm:w-[550px] w-[100vw] h-full bg-white px-8 py-12 flex flex-col items-start justify-start gap-5 sm:mt-0 mt-12">
                <p className="text-lightPrimary font-semibold text-[24px]">Forgot Password ?</p>
                <form onSubmit={handleSubmit} className="">
                    <p className="text-lightSecondary text-sm">
                        {" "}
                        Enter your user account&apos;s verified email address and we will send you a password reset
                        link.
                    </p>
                    <div className="w-full">
                        <Input
                            type="email"
                            label={`Email`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=" focus:outline-none  w-full bg-[#F3F4F5]"
                            placeholder="Enter Your Email"
                            autoComplete="off"
                        />
                    </div>
                    <div className="w-full">&nbsp;</div>

                    {isProduction && (
                        <ReCAPTCHA
                            sitekey="6LdLoM0pAAAAAAV2lBVHkkNYSGO9oFmw8su9WM53"
                            ref={recaptchaRef}
                            onChange={handleCaptchaSubmission}
                            className="flex items-center justify-center w-full"
                        />
                    )}

                    <div className="w-full">
                        <button
                            disabled={!isVerified}
                            type="submit"
                            className={`w-full mt-5 flex items-center justify-center px-4 py-2 h-[56px] bg-black text-white`}
                        >
                            Submit
                        </button>
                        <div className="w-full">{emailSent}</div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
