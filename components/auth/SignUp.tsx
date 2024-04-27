"use client";
import Link from "next/link";
import { useState, FormEvent, useEffect } from "react";
import { toast } from "sonner";
import { sha256 } from "js-sha256";

import VerificationPopup from "@/components/VerificationPopUp";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [profileLink, setProfileLink] = useState("");

  const [selectedProfile, setSelectedProfile] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setSelectedProfile(userProfile);
  }, [userProfile]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: FormEvent) => {
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

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
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

      console.log(result);

      if (result.message === "Signup successful") {
        toast.success("Data Submitted.");
        setIsModalOpen(true);
        
        localStorage.setItem("email", email);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setAccountType("");
        setUserProfile("");
        setProfileLink("");
      } else if (result.message === "User email already exists") {
        toast.error("User already exists. Please log in to your account.");
      } else {
        throw new Error("An error occurred while submitting your data.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting your data.");
    }
  };

  return (
    <div>
      <div className="text-center my-5 md:my-10 text-xl md:text-3xl font-bold">
        Welcome, Tell us a little bit about you.
      </div>
      <VerificationPopup
        isOpen={isModalOpen}
        onOpen={() => setIsModalOpen(true)}
        onClose={closeModal}
      />
      <div className="w-full md:px-20">
        <form
          className="md:p-10 p-3 rounded-2xl bg-[#ffffff15] flex flex-col 
          md:flex-row items-start justify-between md:gap-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start justify-center w-full md:border-r border-white md:pr-10">
            <span>What&apos;s your name ?</span>
            <input
              type="text"
              className="bg-[#ffffff20] p-2 w-full mt-2 rounded-lg text-white focus:outline-none focus-visible:outline-none"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="bg-[#ffffff20] p-2 w-full my-2 rounded-lg text-white focus:outline-none focus-visible:outline-none"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="my-2 md:my-4" />
            <span>Your email id</span>
            <input
              type="email"
              className="bg-[#ffffff20] p-2 w-full my-2 rounded-lg text-white focus:outline-none focus-visible:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="my-2 md:my-4" />
            <span>Password</span>
            <input
              type="password"
              className="bg-[#ffffff20] p-2 w-full my-2 rounded-lg text-white focus:outline-none focus-visible:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="my-2 md:my-4" />
            <span>LinkedIn / Github Profile</span>
            <input
              type="text"
              className="bg-[#ffffff20] p-2 w-full my-2 rounded-lg text-white focus:outline-none focus-visible:outline-none"
              placeholder="Your LinkedIn / Github Profile Link"
              value={profileLink}
              onChange={(e) => setProfileLink(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col justify-between h-full">
            <div className="" />
            <span className="mb-3">Account Type</span>
            <select
              name="account"
              id="account"
              className="bg-[#ffffff20] p-2 w-full my-2 rounded-lg focus:outline-none focus-visible:outline-none"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value="" disabled className="text-white">
                Select Your Account Type
              </option>{" "}
              <option value="individual" className="text-black">
                Individual
              </option>
              <option value="business" className="text-black">
                Business
              </option>
            </select>
            <div className="text-lg md:text-xl pb-3 md:pb-5 mt-5">
              What do you do? Choose one or more
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                onClick={() => setUserProfile("Cloud Engineer")}
                className={` ${
                  selectedProfile === "Cloud Engineer"
                    ? "bg-green-400 text-black p-3 rounded-lg text-center cursor-pointer"
                    : "bg-white text-black p-3 rounded-lg text-center cursor-pointer"
                }`}
              >
                Cloud Engineer
              </div>
              <div
                onClick={() => setUserProfile("Devops")}
                className={`${
                  selectedProfile === "Devops"
                    ? "bg-green-400 text-black p-3 rounded-lg text-center cursor-pointer"
                    : "bg-white text-black p-3 rounded-lg text-center cursor-pointer"
                }`}
              >
                Devops
              </div>
              <div
                onClick={() => setUserProfile("Data Scientist")}
                className={`${
                  selectedProfile === "Data Scientist"
                    ? "bg-green-400 text-black p-3 rounded-lg text-center cursor-pointer"
                    : "bg-white text-black p-3 rounded-lg text-center cursor-pointer"
                }`}
              >
                Data Scientist
              </div>
              <div
                onClick={() => setUserProfile("Product Management")}
                className={`${
                  selectedProfile === "Product Management"
                    ? "bg-green-400 text-black p-3 rounded-lg text-center cursor-pointer"
                    : "bg-white text-black p-3 rounded-lg text-center cursor-pointer"
                }`}
              >
                Product Management
              </div>
              <div
                onClick={() => setUserProfile("SRE")}
                className={`${
                  selectedProfile === "SRE"
                    ? "bg-green-400 text-black p-3 rounded-lg text-center cursor-pointer"
                    : "bg-white text-black p-3 rounded-lg text-center cursor-pointer"
                }`}
              >
                SRE
              </div>
              <div
                onClick={() => setUserProfile("Others")}
                className={`${
                  selectedProfile === "Others"
                    ? "bg-green-400 text-black p-3 rounded-lg text-center cursor-pointer"
                    : "bg-white text-black p-3 rounded-lg text-center cursor-pointer"
                }`}
              >
                Others
              </div>
            </div>
            <div className="flex mt-10 mb-2 mx-auto gap-1">
              <div>Already have an account ?</div>
              <Link
                href={"/signIn"}
                className="cursor-pointer hover:underline duration-300"
              >
                Login
              </Link>
            </div>
            <button
              type="submit"
              className="flex text-black bg-white py-3 px-10 w-fit mx-auto rounded-full cursor-pointer
            hover:scale-110 duration-300 border-4 hover:border-gray-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
