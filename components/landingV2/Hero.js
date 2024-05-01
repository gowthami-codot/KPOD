"use client"
import React from "react";
import { Button } from "../UI/Button";
import Link from "next/link";
import SignUp from "../auth/SignUpModal";

export default function Hero() {
  const [open, setOpen] = React.useState(false);
  console.log(open,"w")
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden ">
      <SignUp open={open} setOpen={setOpen} />
      <div className="w-full h-[80vh] sm:h-[70vh] flex flex-col items-center justify-center px-5 gap-8 text-darkPrimary relative ">
        <div className="absolute top-[40vh] right-0 w-[100vw] h-[180px] bg-gradient-to-b from-white to-transparent z-10" />
        <section className="absolute top-[45vh] right-0 w-[100vw]">
          <img
            className="w-full h-[350px] sm:h-[500px] object-cover scale-[110%] translate-x-[-5%]"
            src={`./main-landing.jpeg`}
          />
        </section>
        <section className="flex flex-col items-center justify-center gap-5 max-w-[1050px] text-center z-10">
          <p className="text-[32px] sm:text-[54px]">
            Revolutionising AI Workloads with Krutrim Cloud
          </p>
          <p className="text-darkSecondary sm:text-lg text-base">
            Scale your computational capabilities and experience the GPU services like never before
          </p>
        </section>
        <section className="flex gap-5 z-10">
          {/* <Link href="/signUp"> */}
            <Button onClick ={()=>setOpen(true)}>
              <p>Register</p>
              <img src="./a1.svg" />
            </Button>
          {/* </Link> */}
          <Link href="/signIn">
            <Button secondary>
              <p>Login</p>
              <img src="./a2.svg" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
