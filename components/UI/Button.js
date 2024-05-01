import React from "react";

export const Button = ({ className, children, secondary }) => {
  const classes = `px-4 py-2 w-[120px] flex items-center justify-center w-[155px] sm:w-[169px] h-[56px] gap-3 sm:rounded ${
    secondary ? "text-black bg-white sm:border" : "text-white bg-black"
  }`;
  return <div className={classes}>{children}</div>;
};
