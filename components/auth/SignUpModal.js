"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { sha256 } from "js-sha256";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Input } from "../UI/CustomInput";
import { Button } from "../UI/Button";

import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/modal";
// import { validateEmail, validatePassword } from "@/utils/regex";

const SignUp = ({ open, setOpen }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState("");
    const [userProfile, setUserProfile] = useState("");
    const [profileLink, setProfileLink] = useState("");

    const [selectedProfile, setSelectedProfile] = useState("");
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const [isProduction, setIsProduction] = useState(true);
    useEffect(() => {
        if (typeof window !== "undefined" && !window.location.origin.includes("cloud.olakrutrim.com")) {
            setIsProduction(false);
            setIsVerified(true);
        }
    }, []);

    const recaptchaRef = useRef(null);
    const [isVerified, setIsVerified] = useState(false);
    const [captchaToken, setToken] = useState("");

    const sendMoEngageEvent =(eventName,data) =>{
        if(Moengage!== null){
            if (data == null){
                Moengage.track_event(eventName);
            }
            else{
                Moengage.track_event(eventName, data);
            }
            console.log("Sending event:" + eventName);
        }
        else{
            console.log("MoEngage Object is Null");
        }
    };

    async function handleCaptchaSubmission(token) {
        //console.log(token);

        const captchaValue = recaptchaRef.current?.getValue();
        if (!captchaValue) setIsVerified(false);
        else setIsVerified(true);

        setToken(token);
    }
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        setSelectedProfile(userProfile);
    }, [userProfile]);

    const closeModal = () => {
        sendMoEngageEvent('REGISTRATION_POPUP_CANCELLED',null);
        setOpen(false);
    };

    useEffect(() => {
        setSelectedProfile(userProfile);
        if (
            firstName &&
            lastName &&
            email &&
            password &&
            accountType &&
            userProfile &&
            profileLink &&
            isTermsAccepted
        ) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [firstName, lastName, email, password, accountType, userProfile, profileLink, isTermsAccepted]);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (!firstName || !lastName || !email || !password || !accountType || !userProfile || !profileLink) {
    //         toast.error("Please fill out all fields.");
    //         return;
    //     }

    //     if (!isTermsAccepted) {
    //         toast.error("Please accept the terms and conditions.");
    //         return;
    //     }

    //     if (!validateEmail(email)) {
    //         toast.error("Please enter a valid email address.");
    //         return;
    //     }

    //     if (!validatePassword(password)) {
    //         toast.error(
    //             "Password must be at least 8 characters long and contain at least one special character, one capital letter, and one number."
    //         );
    //         return;
    //     }

    //     const hashedPassword = sha256(password);

    //     const data = {
    //         firstName,
    //         lastName,
    //         email,
    //         password: hashedPassword,
    //         accountType,
    //         userProfile,
    //         profileLink,
    //         token: captchaToken,
    //     };

    //     try {
    //         const response = await fetch("/api/signup", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         });

    //         const result = await response.json();

    //         if (response.status === 200) {
    //             onOpen(true);;
    //             closeModal();
    //             localStorage.setItem("email", email);
    //             sendMoEngageEvent('REGISTRATION_ATTEMPT_SUCCESS', {email: email});
    //             setFirstName("");
    //             setLastName("");
    //             setEmail("");
    //             setPassword("");
    //             setAccountType("");
    //             setUserProfile("");
    //             setProfileLink("");
    //             setMobileNumber("");
    //         } else if (response.status == 409) {
    //             sendMoEngageEvent('REGISTRATION_ATTEMPT_FAILED', {email: email});
    //             toast.error(result.message);
    //         } else {
    //             sendMoEngageEvent('REGISTRATION_ATTEMPT_FAILED', {email: email});
    //             throw new Error("An error occurred while submitting your data.");
    //         }
    //     } catch (error) {
    //         sendMoEngageEvent('REGISTRATION_ATTEMPT_FAILED', {email: email});
    //         toast.error;
    //     }
    // };

    return (
        <div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className="p-5 md:p-10">
                                <div className="text-xl font-bold text-black">
                                    Your registration is successful! We have sent a verification email to your inbox.
                                    Please follow the instruction in the email to activate your account.
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    onPress={onClose}
                                    className="bg-black text-white rounded-lg flex items-center justify-center"
                                >
                                    OK
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                        </Transition.Child>

                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded sm:min-w-[500px] w-full h-[80vh]">
                                <Dialog.Title as="h3" className="text-[24px] font-semibold leading-6 text-gray-900">
                                    Sign up
                                </Dialog.Title>
                                <section className="h-full w-full flex flex-col gap-3 ">
                                    <div className="mt-2  h-full overflow-auto">
                                        <form
                                            className=" flex flex-col items-start justify-between gap-4"
                                            // onSubmit={handleSubmit}
                                        >
                                            <div className="flex items-center justify-center gap-5 w-full">
                                                <div className="w-full">
                                                    <Input
                                                        label="First Name"
                                                        type="text"
                                                        placeholder="First Name"
                                                        className={`text-black`}
                                                        value={firstName}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <Input
                                                        label="Last Name"
                                                        type="text"
                                                        className="text-black"
                                                        placeholder="Last Name"
                                                        value={lastName}
                                                        onChange={(e) => setLastName(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-col w-full">
                                                <Input
                                                    label="Email"
                                                    type="email"
                                                    id="email"
                                                    className="text-black"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="flex flex-col w-full">
                                                <Input
                                                    label={"Password"}
                                                    type="password"
                                                    id="password"
                                                    className="text-black"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <div className="flex flex-col w-full">
                                                <label htmlFor="accountType" className="text-sm">
                                                    Account Type
                                                </label>
                                                <select
                                                    id="accountType"
                                                    className="bg-white p-2 rounded text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 border border-gray-300 w-full "
                                                    value={accountType}
                                                    onChange={(e) => setAccountType(e.target.value)}
                                                    required
                                                >
                                                    <option value="">Select Account Type</option>
                                                    <option value="individual">Individual</option>
                                                    <option value="business">Business</option>
                                                </select>
                                            </div>

                                            <div className="flex items-center justify-center gap-5 w-full">
                                                <div className="w-full">
                                                    <Input
                                                        label="LinkedIn / GitHub Profile"
                                                        type="text"
                                                        id="profileLink"
                                                        className="text-black"
                                                        placeholder="Profile Link"
                                                        value={profileLink}
                                                        onChange={(e) => setProfileLink(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <p className=" text-[#798E9E]">What do you do?</p>
                                            </div>
                                            <div className="flex flex-col w-full">
                                                <div className="grid grid-cols-2 gap-2">
                                                    <div
                                                        className={`p-2 rounded text-center cursor-pointer ${
                                                            selectedProfile === "Cloud Engineer"
                                                                ? "bg-white border border-[#72C83E] text-black"
                                                                : "bg-[#F3F4F5] text-gray-900 border border-[#F3F4F5]"
                                                        }`}
                                                        onClick={() => setUserProfile("Cloud Engineer")}
                                                    >
                                                        Cloud Engineer
                                                    </div>
                                                    <div
                                                        className={`p-2 rounded text-center cursor-pointer ${
                                                            selectedProfile === "Devops"
                                                                ? "bg-white border border-[#72C83E] text-black"
                                                                : "bg-[#F3F4F5] text-gray-900 border border-[#F3F4F5]"
                                                        }`}
                                                        onClick={() => setUserProfile("Devops")}
                                                    >
                                                        Devops
                                                    </div>
                                                    <div
                                                        className={`p-2 rounded text-center cursor-pointer ${
                                                            selectedProfile === "Data Scientist"
                                                                ? "bg-white border border-[#72C83E] text-black"
                                                                : "bg-[#F3F4F5] text-gray-900 border border-[#F3F4F5]"
                                                        }`}
                                                        onClick={() => setUserProfile("Data Scientist")}
                                                    >
                                                        Data Scientist
                                                    </div>
                                                    <div
                                                        className={`p-2 rounded text-center cursor-pointer ${
                                                            selectedProfile === "Product Management"
                                                                ? "bg-white border border-[#72C83E] text-black"
                                                                : "bg-[#F3F4F5] text-gray-900 border border-[#F3F4F5]"
                                                        }`}
                                                        onClick={() => setUserProfile("Product Management")}
                                                    >
                                                        Product Management
                                                    </div>
                                                    <div
                                                        className={`p-2 rounded text-center cursor-pointer ${
                                                            selectedProfile === "SRE"
                                                                ? "bg-white border border-[#72C83E] text-black"
                                                                : "bg-[#F3F4F5] text-gray-900 border border-[#F3F4F5]"
                                                        }`}
                                                        onClick={() => setUserProfile("SRE")}
                                                    >
                                                        SRE
                                                    </div>
                                                    <div
                                                        className={`p-2 rounded text-center cursor-pointer ${
                                                            selectedProfile === "Others"
                                                                ? "bg-white border border-[#72C83E] text-black"
                                                                : "bg-[#F3F4F5] text-gray-900 border border-[#F3F4F5]"
                                                        }`}
                                                        onClick={() => setUserProfile("Others")}
                                                    >
                                                        Others
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="h-auto">
                                        <div className="flex items-center justify-center my-1 md:my-2">
                                            <input
                                                type="checkbox"
                                                value=""
                                                checked={isTermsAccepted}
                                                onChange={(e) => setIsTermsAccepted(e.target.checked)}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                                            />
                                            <label className="ms-2 text-sm font-medium text-gray-700">
                                                I agree with the
                                                <a
                                                    href="/TOU_v1.pdf"
                                                    className="text-blue-600 hover:underline ml-1"
                                                    target="_blank"
                                                >
                                                    terms and conditions
                                                </a>
                                                <span className="mx-1">&</span>
                                                <a
                                                    href="/privacy_policy_v1.pdf"
                                                    className="text-blue-600 hover:underline ml-1"
                                                    target="_blank"
                                                >
                                                    privacy policy
                                                </a>
                                                <span className="mx-1">&</span>
                                                <a
                                                    href="/eula.pdf"
                                                    className="text-blue-600 hover:underline ml-1"
                                                    target="_blank"
                                                >
                                                    EULA
                                                </a>
                                                .
                                            </label>
                                        </div>

                                        {
                                            isProduction && <div style={{ height: "70px" }}>
                                                <ReCAPTCHA
                                                    sitekey="6LdLoM0pAAAAAAV2lBVHkkNYSGO9oFmw8su9WM53"
                                                    style={{ transform: "scale(0.5)", transformOrigin: "center" }}
                                                    ref={recaptchaRef}
                                                    onChange={handleCaptchaSubmission}
                                                    className="flex items-center justify-center w-full"
                                                />
                                            </div>
                                        }

                                        <Button
                                            type="submit"
                                            disabled={!isButtonEnabled || !isVerified}
                                            // onClick={handleSubmit}
                                            className={`flex text-black w-full py-3 px-10 w-fit mx-auto rounded-full cursor-pointer ${
                                                isButtonEnabled && isVerified
                                                    ? "hover:scale-105 duration-300 bg-[#80FFF7]"
                                                    : "bg-gray-300 cursor-not-allowed"
                                            }`}
                                        >
                                            Register
                                        </Button>
                                        <div className="flex items-center gap-2 text-black w-full text-xm justify-center my-5 pt-3">
                                            <span>Already have an account?</span>
                                            <Link href="/signIn">
                                                <p
                                                    className="text-[#72C83E] "
                                                    onClick={() => {
                                                        setOpen(false);
                                                    }}
                                                >
                                                    Login
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default SignUp;
