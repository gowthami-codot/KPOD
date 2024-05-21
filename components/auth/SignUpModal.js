"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { sha256 } from "js-sha256";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Input } from "../UI/CustomInput";
import { Button } from "../UI/Button";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";

import moengage from "@moengage/web-sdk";
import Image from "next/image";

if (typeof window !== "undefined") {
  moengage.initialize({
    app_id: "WAY71GBZKJDZ9548UJKHRBNR",
    debug_logs: 1,
    cluster: "dc_3",
  });
  console.log("Initialization Failed");
}

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
  const [isRobot, setIsRobot] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    setSelectedProfile(userProfile);
  }, [userProfile]);

  const closeModal = () => {
    setOpen(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
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
  }, [
    firstName,
    lastName,
    email,
    password,
    accountType,
    userProfile,
    profileLink,
    isTermsAccepted,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !accountType ||
      !userProfile ||
      !profileLink
    ) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one special character, one capital letter, and one number."
      );
      return;
    }

    const hashedPassword = sha256(password);

    const data = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType,
      userProfile,
      profileLink,
    };

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.message === "Signup successful") {
        onOpen(true);
        closeModal();
        localStorage.setItem("email", email);

        moengage.add_unique_user_id(email);
        moengage.add_email(email);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setAccountType("");
        setUserProfile("");
        setProfileLink("");
        setMobileNumber("");
      } else if (result.message === "User email already exists") {
        toast.error("User already exists. Please log in to your account.");
      } else {
        throw new Error("An error occurred while submitting your data.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="p-5 md:p-10">
                <div className="text-xl font-bold text-black">
                  Your registration is successful! We have sent a verification
                  email to your inbox. Please follow the instruction in the
                  email to activate your account.
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
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
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

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
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
              <div className="inline-block max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded sm:min-w-[600px] w-full h-[30%]">
                <Dialog.Title
                  as="h3"
                  className="text-[24px]  leading-6 text-[#000000] font-bold"
                >
                  Sign up
                </Dialog.Title>
                <section className="h-full w-full flex flex-col gap-3 ">
                  <div className="mt-2  h-full ">
                    <form
                      className=" flex flex-col items-start justify-between gap-4"
                      // onSubmit={handleSubmit}
                    >
                      <div className="flex items-center justify-center gap-5 w-full">
                        <div className="w-full">
                          <Input
                            label="First Name"
                            type="text"
                            placeholder=""
                            className={`text-black bg-[#F3F4F5] focus:outline-none focus:ring-0`}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="w-full">
                          <Input
                            label="Last Name "
                            type="text"
                            className="text-black bg-[#F3F4F5] focus:outline-none focus:ring-0"
                            placeholder=""
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
                          className="text-black bg-[#F3F4F5] focus:outline-none focus:ring-0"
                          placeholder=""
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="flex flex-col w-full">
                        <Input
                          label="Create Password"
                          type="password"
                          id="password"
                          className="text-black bg-[#F3F4F5] focus:outline-none focus:ring-0"
                          placeholder=""
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>

                      {/* <div className="flex items-center justify-center gap-5 w-full">
                        <div className="w-full">
                          <Input
                            label="LinkedIn / GitHub Profile *"
                            type="text"
                            id="profileLink"
                            className="text-black"
                            placeholder="Profile Link"
                            value={profileLink}
                            onChange={(e) => setProfileLink(e.target.value)}
                            required
                          />
                        </div>
                      </div> */}
                      <div className="mt-3">
                        <div className="text-black font-semibold text-[15px]">
                          Passwords must
                        </div>
                        <div className="mt-3 md:flex-row flex flex-col  md:space-x-5">
                          <div className="flex ">
                            <div className="flex flex-col">
                              <div className="flex items-start justify-start">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#72C83E"
                                  stroke-width="4"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="font-bold mr-2"
                                >
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                <div className="text-black text-[12px] font-medium">
                                Be a minimum of 8 characters
                              </div>
                              </div>
                              <div className="flex items-start justify-start mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#72C83E"
                                  stroke-width="4"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="font-bold mr-2"
                                >
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                <div className="text-black text-[12px] font-medium">
                                Include at least one  number (0-9)
                              </div>
                              </div>
                              <div className="flex items-start justify-start mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#72C83E"
                                  stroke-width="4"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="font-bold mr-2"
                                >
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                                <div className="text-black text-[12px] font-medium">
                                Include at least one special character                              </div>
                              </div>
                              
                            </div>
                          </div>
                          <div className="flex md:flex-row flex-col md:mt-0 mt-2 ">
                            <div className="flex flex-col"><div className="flex items-start justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#72C83E"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="font-bold mr-2"
                              >
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                              <div className="text-black text-[12px] font-medium">
                              Include at least one Uppercase letter (A-Z)
                            </div>
                            </div>
                            <div className="flex items-start justify-center mt-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#72C83E"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="font-bold mr-2"
                              >
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                              <div className="text-black text-[12px] font-medium">
                              Include at least one lowercase letter (a-z)
                            </div>
                            </div></div>
                            
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#F5F5F5] border-[1px] md:mx-28 mx-10 border-[#D3D3D3]  flex items-center justify-center rounded-[3px] w-fit">
  <div className="flex items-center justify-center px-5">
    <input
      type="checkbox"
      value=""
      checked={isRobot}
      onChange={(e) => setIsRobot(e.target.checked)}
      className="w-4 h-4 mr-1  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
    />
    <label className="ml-2 text-black font-medium md:text-[13px] text-[8px] ">I'm not a robot</label>
  </div>
  <div className="flex flex-col items-center justify-center text-[12px] md:px-10 px-5 md:pt-0 pt-3 pb-3"><div><Image src={require("../../public/captcha.png")} alt="" className="md:w-[7vh] md:h-[7vh] w-[4vh] h-[4vh]"/></div>
  <div className="md:text-[8px] text-[6px] text-[#555555] -mt-1">reCAPTCHA<br/><span className="md:text-[7px] text-[4px]">Privacy - Terms</span></div></div>
</div>

                    </form>
                  </div>
                  <div className="h-auto mt-2">
                   
                    <Button
                      type="submit"
                      disabled={!isButtonEnabled}
                      onClick={handleSubmit}
                      className={`flex text-black w-full py-3 px-10 w-fit mx-auto rounded-full cursor-pointer ${
                        isButtonEnabled
                          ? "hover:scale-105 duration-300 bg-[#80FFF7]"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                    >
                     Sign up
                    </Button>
                    <div className="flex items-center justify-center font-bold mt-3 md:mt-5">
                      <input
                        type="checkbox"
                        value=""
                        checked={isTermsAccepted}
                        onChange={(e) => setIsTermsAccepted(e.target.checked)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      />
                      <label className="ms-2 md:text-sm text-[10px] font-bold text-gray-700">
                        I agree with the
                        <a
                          href="https://llm-spark-new.s3.amazonaws.com/krutrim_chat_policy_docs/TOU_v1.pdf"
                          className="text-[#1F9DF8] hover:underline ml-1"
                          target="_blank"
                        >
                          terms and conditions
                        </a>
                        <span className="mx-1">&</span>
                        <a
                          href="https://llm-spark-new.s3.amazonaws.com/krutrim_chat_policy_docs/privacy_policy_v1.pdf"
                          className="text-[#1F9DF8] hover:underline ml-1"
                          target="_blank"
                        >
                          privacy policy
                        </a>
                        <span className="mx-1">&</span>
                        <a
                          href="#"
                          className="text-[#1F9DF8] hover:underline ml-1"
                          target="_blank"
                        >
                          EULA
                        </a>
                        .
                      </label>
                    </div>
                    <div className="flex items-center gap-2 text-[#798E9E] w-full md:text-xm text-[14px] justify-center  pt-2">
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
