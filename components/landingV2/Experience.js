import React from "react";
import { Button } from "../UI/Button";

export default function Experience() {
  return (
    <div className="w-full px-5 sm:px-16 my-24 relative">
      <div className="w-full h-[340px] sm:h-[200px] px-5 sm:px-16">
        <img
          className="w-full h-full object-cover scale-[115%] rounded-lg overflow-hidden"
          src={`./main-landing.jpeg`}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full px-5 sm:px-16">
        <div className="w-full h-full px-5 flex items-center justify-center">
          <div className="flex items-start justify-center flex-col w-full">
            <p className="text-darkPrimary text-[28px] sm:text-[40px]">
              Experience the future of AI
            </p>
            <p className="text-lg text-darkSecondary">
              Scale your computational capabilities like never before
            </p>
          </div>
          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
}
