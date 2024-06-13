"use client";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { sha256 } from "js-sha256";
import { useRouter } from "next/navigation";

import { useAuth } from "@/components/auth/AuthContext";
import { useUser } from "@/app/context/UserContext";
import { Input } from "@/components/UI/CustomInput";
import SignUp from "./SignUpModal";

import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SignIn = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("password");
    
    const [isProduction, setIsProduction] = useState(true);
    useEffect(() => {
        if (typeof window !== "undefined" && !window.location.origin.includes("cloud.olakrutrim.com")) {
            console.log(window.location.origin);
            setIsProduction(false);
            setIsVerified(true);
        }
    }, []);

    const { setCurrentUser } = useAuth();
    const { setUserDetails } = useUser();

    const recaptchaRef = useRef(null);
    const [isVerified, setIsVerified] = useState(false);
    const [captchaToken, setToken] = useState("");

    async function handleCaptchaSubmission(token) {
        //console.log(token);

        const captchaValue = recaptchaRef.current?.getValue();
        if (!captchaValue) setIsVerified(false);
        else setIsVerified(true);

        setToken(token);
    }

    const handleToggle = () => {
        if (type === "password") {
            setType("text");
        } else {
            setType("password");
        }
    };

    const resetState = () => {
        recaptchaRef.current.reset();
        setIsVerified(false);
        setToken("");
        setPassword("");
    };

    const isButtonDisabled = !email || !password;

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

    const handleSubmit = async () => {
        if (!email || !password) {
            toast.error("Please fill out all fields.");
            return;
        }
        const hashedPassword = sha256(password);

        const data = {
            email,
            password: hashedPassword,
            token: captchaToken
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

            if (result && result.email) {
                toast.success("Logged in successfully.");

                // setCurrentUser(result);
                // setUserDetails(result);
                sendMoEngageEvent('LOGIN_ATTEMPT_SUCCEEDED', {email: result.email});
                // TODO: change to type
                router.push("/console/home");
            } else if (response.status == 401) {
                sendMoEngageEvent('LOGIN_ATTEMPT_FAILED', {email: email});
                resetState();
                toast.error("Invalid email or password. Please try again.");
            } else {
                sendMoEngageEvent('LOGIN_ATTEMPT_FAILED', {email: email});
                //resetState();
                throw new Error("An error occurred while logging in.");
            }
        } catch (error) {
            setPassword("");
            sendMoEngageEvent('LOGIN_ATTEMPT_FAILED', {email: email});
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
                <div className="sm:flex hidden flex-col gap-5   relative z-10">
                    <p className="text-[56px] font-semibold px-16 pt-16">Krutrim Cloud</p>
                    <p className="lg:text-[12px]  md:text-[13px] px-16 -mt-5 pr-10   text-darkSecondary font-semibold">
                        Scale your computational capabilities and experience the GPU services like never before
                    </p>
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
                        autoComplete="off"
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
                        autoComplete="off"
                    />
                    <Link href={"/forgotPassword"} className="hover:underline duration-300">
                        <p className="text-right mt-5">Forgot Password?</p>
                    </Link>
                </div>
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
                        onClick={() => {
                            handleSubmit();
                        }}
                        className={`w-full flex items-center justify-center px-4 py-2 h-[56px] text-white
            ${isButtonDisabled || !isVerified ? "bg-gray-400" : "bg-black"}`}
                    >
                        Login
                    </button>
                </div>
                <div className="flex gap-2 w-full items-center justify-center ">
                    <p className="text-[#798E9E]">New to Krutrim Cloud?</p>
                    <p
                        className="text-[#72C83E]"
                        // TODO: extend tailwind for color palette green
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
