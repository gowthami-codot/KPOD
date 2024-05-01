import React from "react";

export const Button = ({ className, children }) => {
  const classes = `px-4 py-2 bg-blue-500 text-white rounded-md w-[120px] flex items-center justify-center ${className}`;
  return <div className={classes}>{children}</div>;
};
