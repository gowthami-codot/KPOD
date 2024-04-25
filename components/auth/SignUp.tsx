"use client";
import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { sha256 } from "js-sha256";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [userProfile, setUserProfile] = useState("Others");
  
  const [selectedProfile, setSelectedProfile] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !accountType ||
      !userProfile
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
    };

    const jsonData = JSON.stringify(data, null, 2);
    toast.success("Data Submitted.");
    console.log(jsonData);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setAccountType("");
    setUserProfile("");
  };

  return (
    <div>
      <div className="text-center my-5 md:my-10 text-xl md:text-3xl font-bold">
        Welcome, Tell us a little bit about you.
      </div>
      <div className="w-full md:px-20">
        <form
          className="md:p-10 p-5 rounded-2xl bg-[#ffffff15] flex flex-col 
          md:flex-row items-start justify-between md:gap-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start justify-center w-full md:w-[40%] md:border-r border-white md:pr-10">
            <span>What&apos;s your name ?</span>
            <input
              type="text"
              className="bg-[#ffffff20] p-2 w-full mt-2 rounded-lg text-white focus:border-white"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="bg-[#ffffff20] p-2 w-full my-2 rounded-lg text-white focus:border-white"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="my-2 md:my-4" />
            <span>Your email id</span>
            <input
              type="email"
              className="bg-[#ffffff20] p-2 w-full my-2 rounded-lg text-white focus:border-white"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="my-2 md:my-4" />
            <span>Password</span>
            <input
              type="password"
              className="bg-[#ffffff20] p-2 w-full my-2 rounded-lg text-white focus:border-white"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="my-2 md:my-4" />
            <span>Account Type</span>
            <input
              type="text"
              className="bg-[#ffffff20] p-2 w-full my-2 rounded-lg text-white focus:border-white"
              placeholder="Account Type"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            />
          </div>
          <div className="w-full md:w-[60%] flex flex-col justify-between h-full">
            <div className="text-lg md:text-xl pb-3 md:pb-6 mt-5">
              What do you do? Choose one or more
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div
                onClick={() => {
                  setUserProfile("Cloud Engineer")
                  setSelectedProfile("Cloud Engineer");
                }}
                className={`bg-white text-black p-5 rounded-lg text-center cursor-pointer ${
                  selectedProfile === "Cloud Engineer" ? "bg-blue-400" : ""
                }`}
              >
                Cloud Engineer
              </div>
              <div
                onClick={() => {
                  setUserProfile("Devops");
                  setSelectedProfile("Devops");
                }}
                className={`bg-white text-black p-5 rounded-lg text-center cursor-pointer ${
                  selectedProfile === "Devops" ? "bg-blue-400" : ""
                }`}
              >
                Devops
              </div>
              <div
                onClick={() => {
                  setUserProfile("Data Scientist");
                  setSelectedProfile("Data Scientist");
                }}
                className={`bg-white text-black p-5 rounded-lg text-center cursor-pointer ${
                  selectedProfile === "Data Scientist" ? "bg-blue-400" : ""
                }`}
              >
                Data Scientist
              </div>
              <div
                onClick={() => {
                  setUserProfile("Product Management");
                  setSelectedProfile("Product Management");
                }}
                className={`bg-white text-black p-5 rounded-lg text-center cursor-pointer ${
                  selectedProfile === "Product Management" ? "bg-blue-400" : ""
                }`}
              >
                Product Management
              </div>
              <div
                onClick={() => {
                  setUserProfile("SRE");
                  setSelectedProfile("SRE");
                }}
                className={`bg-white text-black p-5 rounded-lg text-center cursor-pointer ${
                  selectedProfile === "SRE" ? "bg-blue-400" : ""
                }`}
              >
                SRE
              </div>
              <div
                onClick={() => {
                  setUserProfile("Others")
                  setSelectedProfile("Others")
                }}
                className={`bg-white text-black p-5 rounded-lg text-center cursor-pointer ${
                  selectedProfile === "Others" ? "bg-blue-400" : ""
                }`}
              >
                Others
              </div>
            </div>
            <button
              type="submit"
              className="flex text-black mt-10 bg-white py-3 px-10 w-fit mx-auto rounded-full cursor-pointer
            hover:scale-110 duration-300 border-4 hover:border-gray-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
