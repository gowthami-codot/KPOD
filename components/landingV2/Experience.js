import React from "react";
import { Button } from "../UI/Button";

export default function Experience() {
  return (
    <div className="px-5 sm:px-16 mt-12 sm:mt-24">
      <div className="w-full px-5 sm:px-16 h-[340px] sm:h-[200px] relative">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          src="./main-landing.jpeg"
          alt="Main Landing"
        />
        <div className="w-full h-full relative">
          <div className="w-full h-full px-5 py-5 sm:py-0 flex items-start sm:items-center justify-between sm:justify-center flex-col sm:flex-row">
            <div className="flex items-start justify-center flex-col w-full">
              <p className="text-darkPrimary text-[28px] sm:text-[40px]">
                Experience the future of AI
              </p>
              <p className="text-lg text-darkSecondary">
                Scale your computational capabilities like never before
              </p>
            </div>
            <Button>
              <p className="sm:flex hidden">Register</p>
              <p className="flex sm:hidden">Try Krutrim</p>
              <img src="./a1.svg" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
