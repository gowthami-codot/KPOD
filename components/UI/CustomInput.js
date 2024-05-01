import React from "react";
import { twMerge } from "tailwind-merge";

export const Input = ({ label, children, className, ...rest }) => {
  const combined = twMerge(
    `border-[1px] border-gray-100 rounded text-[14px] px-4 py-2 pt-8 focus:border-gray-600 outline-none border-solid w-full text-sm translate-y-[5px]`,
    className
  );

  return (
    <div className="relative">
      <input className={combined} placeholder="Placeholder here" {...rest} />
      {label && (
        <label className="absolute top-4 left-4 text-gray-500 text-xs  transition-all duration-200 ease-in-out pointer-events-none">
          {label}
        </label>
      )}
    </div>
  );
};